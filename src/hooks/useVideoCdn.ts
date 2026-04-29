import { useState, useEffect } from "react";

const UPLOAD_URL = "https://functions.poehali.dev/b894f8f5-eb68-4f22-a36b-6ce3e7b366e2";

async function fetchAndUpload(pexelsUrl: string, filename: string): Promise<string> {
  const response = await fetch(pexelsUrl);
  const blob = await response.blob();
  const arrayBuffer = await blob.arrayBuffer();
  const bytes = new Uint8Array(arrayBuffer);
  let binary = "";
  for (let i = 0; i < bytes.byteLength; i++) binary += String.fromCharCode(bytes[i]);
  const b64 = btoa(binary);

  const res = await fetch(UPLOAD_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ video: b64, filename }),
  });
  const data = await res.json();
  return data.url as string;
}

export function useVideoCdn(pexelsUrl: string, filename: string, fallback: string): string {
  const cacheKey = `video_cdn_${filename}`;
  const [src, setSrc] = useState<string>(() => localStorage.getItem(cacheKey) || fallback);

  useEffect(() => {
    const cached = localStorage.getItem(cacheKey);
    if (cached) {
      setSrc(cached);
      return;
    }
    fetchAndUpload(pexelsUrl, filename)
      .then((url) => {
        localStorage.setItem(cacheKey, url);
        setSrc(url);
      })
      .catch(() => {});
  }, [pexelsUrl, filename, cacheKey]);

  return src;
}
