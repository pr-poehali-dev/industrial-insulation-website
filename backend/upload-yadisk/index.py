"""
Скачивает видео с Яндекс.Диска по публичной ссылке и загружает в S3.
"""
import os
import io
import json
import boto3
import urllib.request


YADISK_PUBLIC_KEY = "https://disk.yandex.ru/d/Zgbtf5Xmc47z2w"

# Маппинг: имя файла на диске -> ключ в S3
VIDEOS = {
    "about-section-video.mp4":   "videos/about-company-harbor-video.mp4",
    "pgs-section-video.mp4":     "videos/industrial-pgs-section-video.mp4",
    "hero-video.mp4":            "videos/hero-video.mp4",
    "shipyard-video.mp4":        "videos/shipyard-video.mp4",
}


def get_direct_url(public_key: str, filename: str) -> str:
    encoded_key = urllib.request.quote(public_key, safe='')
    encoded_path = urllib.request.quote(f"/{filename}", safe='')
    api = f"https://cloud-api.yandex.net/v1/disk/public/resources/download?public_key={encoded_key}&path={encoded_path}"
    req = urllib.request.Request(api, headers={"User-Agent": "Mozilla/5.0"})
    with urllib.request.urlopen(req, timeout=15) as resp:
        data = json.loads(resp.read())
    return data["href"]


def handler(event: dict, context) -> dict:
    """Скачивает видео с Яндекс.Диска и загружает в S3 bucket"""
    if event.get("httpMethod") == "OPTIONS":
        return {"statusCode": 200, "headers": {"Access-Control-Allow-Origin": "*", "Access-Control-Allow-Methods": "POST, GET, OPTIONS", "Access-Control-Allow-Headers": "Content-Type"}, "body": ""}

    body = json.loads(event.get("body") or "{}")
    disk_filename = body.get("filename")

    if not disk_filename:
        return {"statusCode": 400, "headers": {"Access-Control-Allow-Origin": "*"}, "body": json.dumps({"error": "filename required", "available": list(VIDEOS.keys())})}

    if disk_filename not in VIDEOS:
        return {"statusCode": 400, "headers": {"Access-Control-Allow-Origin": "*"}, "body": json.dumps({"error": f"Unknown file: {disk_filename}", "available": list(VIDEOS.keys())})}

    s3_key = VIDEOS[disk_filename]

    direct_url = get_direct_url(YADISK_PUBLIC_KEY, disk_filename)

    buf = io.BytesIO()
    req = urllib.request.Request(direct_url, headers={"User-Agent": "Mozilla/5.0"})
    with urllib.request.urlopen(req, timeout=55) as resp:
        while True:
            chunk = resp.read(2 * 1024 * 1024)
            if not chunk:
                break
            buf.write(chunk)

    video_data = buf.getvalue()

    s3 = boto3.client(
        "s3",
        endpoint_url="https://bucket.poehali.dev",
        aws_access_key_id=os.environ["AWS_ACCESS_KEY_ID"],
        aws_secret_access_key=os.environ["AWS_SECRET_ACCESS_KEY"],
    )
    s3.put_object(Bucket="files", Key=s3_key, Body=video_data, ContentType="video/mp4")

    cdn_url = f"https://cdn.poehali.dev/projects/{os.environ['AWS_ACCESS_KEY_ID']}/bucket/{s3_key}"

    return {
        "statusCode": 200,
        "headers": {"Access-Control-Allow-Origin": "*"},
        "body": json.dumps({"ok": True, "cdn_url": cdn_url, "size_mb": round(len(video_data) / 1024 / 1024, 1)}),
    }
