import os
import json
import requests

def handler(event: dict, context) -> dict:
    """Получает прямые ссылки на видео с Pexels через API."""

    if event.get('httpMethod') == 'OPTIONS':
        return {'statusCode': 200, 'headers': {'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'GET, POST, OPTIONS', 'Access-Control-Allow-Headers': 'Content-Type'}, 'body': ''}

    pexels_key = os.environ.get('PEXELS_API_KEY', 'tpKuaoEDIctUy1s5Qsi8M75ifFII3cMYbnTHuO1IaotTZmSf4PASguic')
    pexels_headers = {'Authorization': pexels_key}

    video_ids = ['6997592', '8968775']
    results = {}

    for vid_id in video_ids:
        api_resp = requests.get(
            f"https://api.pexels.com/videos/videos/{vid_id}",
            headers=pexels_headers,
            timeout=30
        )
        api_resp.raise_for_status()
        video_data = api_resp.json()

        files = video_data.get('video_files', [])
        chosen = None
        for quality in ['hd', 'sd']:
            for f in files:
                if f.get('quality') == quality and f.get('file_type') == 'video/mp4':
                    chosen = f
                    break
            if chosen:
                break
        if not chosen and files:
            chosen = files[0]

        results[vid_id] = {
            'url': chosen['link'],
            'width': chosen.get('width'),
            'height': chosen.get('height'),
            'quality': chosen.get('quality'),
        }

    return {
        'statusCode': 200,
        'headers': {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'},
        'body': json.dumps(results)
    }
