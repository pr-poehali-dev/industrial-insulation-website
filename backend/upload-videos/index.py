import os
import boto3
import requests

def handler(event: dict, context) -> dict:
    """Скачивает видео с Pexels и загружает в S3 для использования как фон сайта."""

    if event.get('httpMethod') == 'OPTIONS':
        return {'statusCode': 200, 'headers': {'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'GET, POST, OPTIONS', 'Access-Control-Allow-Headers': 'Content-Type'}, 'body': ''}

    s3 = boto3.client(
        's3',
        endpoint_url='https://bucket.poehali.dev',
        aws_access_key_id=os.environ['AWS_ACCESS_KEY_ID'],
        aws_secret_access_key=os.environ['AWS_SECRET_ACCESS_KEY']
    )
    access_key = os.environ['AWS_ACCESS_KEY_ID']

    videos = [
        {
            'key': 'videos/factory-bg.mp4',
            # Pexels video 6997592 — industrial work
            'url': 'https://videos.pexels.com/video-files/6997592/6997592-hd_1920_1080_24fps.mp4',
        },
        {
            'key': 'videos/shipyard-bg.mp4',
            # Pexels video 8968775 — abandoned watercrafts drone
            'url': 'https://videos.pexels.com/video-files/8968775/8968775-hd_1920_1080_25fps.mp4',
        },
    ]

    results = {}
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
        'Referer': 'https://www.pexels.com/',
    }

    for v in videos:
        resp = requests.get(v['url'], headers=headers, timeout=120, stream=True)
        resp.raise_for_status()
        data = resp.content
        s3.put_object(
            Bucket='files',
            Key=v['key'],
            Body=data,
            ContentType='video/mp4',
            ACL='public-read'
        )
        cdn_url = f"https://cdn.poehali.dev/projects/{access_key}/bucket/{v['key']}"
        results[v['key']] = cdn_url

    return {
        'statusCode': 200,
        'headers': {'Access-Control-Allow-Origin': '*'},
        'body': str(results)
    }
