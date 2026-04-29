import os
import json
import base64
import hmac
import hashlib
import datetime


def get_signature_key(key, date_stamp, region, service):
    def sign(k, m):
        return hmac.new(k, m.encode('utf-8'), hashlib.sha256).digest()
    k_date = sign(('AWS4' + key).encode('utf-8'), date_stamp)
    k_region = sign(k_date, region)
    k_service = sign(k_region, service)
    return sign(k_service, 'aws4_request')


def s3_put(bucket, key, data, content_type, access_key, secret_key, endpoint):
    import urllib.request
    host = endpoint.replace('https://', '')
    now = datetime.datetime.utcnow()
    amz_date = now.strftime('%Y%m%dT%H%M%SZ')
    date_stamp = now.strftime('%Y%m%d')
    payload_hash = hashlib.sha256(data).hexdigest()
    canonical_headers = (
        f'content-type:{content_type}\n'
        f'host:{host}\n'
        f'x-amz-content-sha256:{payload_hash}\n'
        f'x-amz-date:{amz_date}\n'
    )
    signed_headers = 'content-type;host;x-amz-content-sha256;x-amz-date'
    canonical_request = '\n'.join([
        'PUT', f'/{bucket}/{key}', '',
        canonical_headers, signed_headers, payload_hash
    ])
    credential_scope = f'{date_stamp}/us-east-1/s3/aws4_request'
    string_to_sign = '\n'.join([
        'AWS4-HMAC-SHA256', amz_date, credential_scope,
        hashlib.sha256(canonical_request.encode()).hexdigest()
    ])
    signing_key = get_signature_key(secret_key, date_stamp, 'us-east-1', 's3')
    signature = hmac.new(signing_key, string_to_sign.encode('utf-8'), hashlib.sha256).hexdigest()
    authorization = (
        f'AWS4-HMAC-SHA256 Credential={access_key}/{credential_scope}, '
        f'SignedHeaders={signed_headers}, Signature={signature}'
    )
    req = urllib.request.Request(f'{endpoint}/{bucket}/{key}', data=data, method='PUT')
    req.add_header('Content-Type', content_type)
    req.add_header('x-amz-content-sha256', payload_hash)
    req.add_header('x-amz-date', amz_date)
    req.add_header('Authorization', authorization)
    req.add_header('Host', host)
    with urllib.request.urlopen(req) as resp:
        return resp.status


def handler(event: dict, context) -> dict:
    """Принимает видео в base64 и сохраняет на CDN. Body: {video: base64, filename: string}"""
    if event.get('httpMethod') == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type'
            },
            'body': ''
        }

    access_key = os.environ['AWS_ACCESS_KEY_ID']
    secret_key = os.environ['AWS_SECRET_ACCESS_KEY']

    body = json.loads(event.get('body') or '{}')
    video_b64 = body.get('video')
    filename = body.get('filename', 'video.mp4')
    s3_key = f'videos/{filename}'
    cdn_url = f"https://cdn.poehali.dev/projects/{access_key}/bucket/{s3_key}"

    video_data = base64.b64decode(video_b64)
    s3_put('files', s3_key, video_data, 'video/mp4', access_key, secret_key, 'https://bucket.poehali.dev')

    return {
        'statusCode': 200,
        'headers': {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'},
        'body': json.dumps({'url': cdn_url, 'size': len(video_data), 'status': 'uploaded'})
    }
