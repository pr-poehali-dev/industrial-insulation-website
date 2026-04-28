"""
Скачивает видео с публичного URL и загружает в S3 проекта.
Используется для подготовки видеофонов сайта.
"""
import os
import io
import json
import boto3
import urllib.request


def handler(event: dict, context) -> dict:
    if event.get('httpMethod') == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
            },
            'body': ''
        }

    body = json.loads(event.get('body') or '{}')
    video_url = body.get('url')
    s3_key = body.get('key')

    if not video_url or not s3_key:
        return {
            'statusCode': 400,
            'headers': {'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': 'url and key are required'})
        }

    headers = {
        'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': '*/*',
        'Accept-Language': 'en-US,en;q=0.9',
        'Referer': 'https://www.pexels.com/',
    }
    req = urllib.request.Request(video_url, headers=headers)

    buf = io.BytesIO()
    with urllib.request.urlopen(req, timeout=25) as resp:
        while True:
            chunk = resp.read(1024 * 1024)
            if not chunk:
                break
            buf.write(chunk)

    video_data = buf.getvalue()

    s3 = boto3.client(
        's3',
        endpoint_url='https://bucket.poehali.dev',
        aws_access_key_id=os.environ['AWS_ACCESS_KEY_ID'],
        aws_secret_access_key=os.environ['AWS_SECRET_ACCESS_KEY']
    )

    s3.put_object(
        Bucket='files',
        Key=s3_key,
        Body=video_data,
        ContentType='video/mp4',
    )

    cdn_url = f"https://cdn.poehali.dev/projects/{os.environ['AWS_ACCESS_KEY_ID']}/bucket/{s3_key}"

    return {
        'statusCode': 200,
        'headers': {'Access-Control-Allow-Origin': '*'},
        'body': json.dumps({'url': cdn_url, 'key': s3_key, 'size': len(video_data)})
    }
