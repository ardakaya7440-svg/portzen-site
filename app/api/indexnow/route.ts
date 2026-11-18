import { NextResponse, type NextRequest } from "next/server";

/**
 * IndexNow — sitemap'teki tüm URL'leri Bing / Yandex / Seznam / Naver'a bildirir.
 * Anahtar dosyası: public/e11487b6b63efc534e555fa6569c0289.txt
 *
 * Tetikleme:
 *  - Otomatik: vercel.json içindeki haftalık cron (Vercel, CRON_SECRET tanımlıysa Bearer başlığıyla çağırır)
 *  - Elle:     GET /api/indexnow?secret=<CRON_SECRET>
 * CRON_SECRET tanımlı değilse uç nokta herkese açık çalışır (yalnızca sitenin kendi URL'lerini gönderir).
 */
export const dynamic = "force-dynamic";

const HOST = "portzenai.com";
const BASE = `https://${HOST}`;
const KEY = "e11487b6b63efc534e555fa6569c0289";
const ENDPOINT = "https://api.indexnow.org/indexnow";

function authorized(req: NextRequest): boolean {
  const secret = process.env.CRON_SECRET;
  if (!secret) return true;
  if (req.headers.get("authorization") === `Bearer ${secret}`) return true;
  return req.nextUrl.searchParams.get("secret") === secret;
}

export async function GET(req: NextRequest) {
  if (!authorized(req)) return NextResponse.json({ ok: false, error: "unauthorized" }, { status: 401 });

  const xml = await fetch(`${BASE}/sitemap.xml`, { cache: "no-store" }).then((r) => r.text());
  const urls = Array.from(xml.matchAll(/<loc>\s*([^<\s]+)\s*<\/loc>/g), (m) => m[1])
    .filter((u) => u.startsWith(BASE))
    .slice(0, 10000);

  if (urls.length === 0) return NextResponse.json({ ok: false, error: "sitemap boş" }, { status: 500 });

  const res = await fetch(ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({ host: HOST, key: KEY, keyLocation: `${BASE}/${KEY}.txt`, urlList: urls })
  });

  // 200 = kabul edildi, 202 = alındı (anahtar doğrulaması bekleniyor)
  return NextResponse.json({ ok: res.ok, status: res.status, submitted: urls.length }, { status: res.ok ? 200 : 502 });
}
