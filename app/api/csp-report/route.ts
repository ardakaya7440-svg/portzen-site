import { createHash } from "node:crypto";
import { MAX_REPORT_BYTES, allow, summarize } from "@/server/csp-report";

/**
 * CSP Report-Only ihlal toplama noktası (herkese açık, yalnız POST).
 * - Gövde en fazla 8 KB; dakikada istemci başına 30 istek (IP özeti, açık IP saklanmaz/loglanmaz).
 * - Yalnız ihlal özeti loglanır (yönerge, engellenen alan adı, sayfa yolu). Veritabanına yazmaz.
 * - Yanıt her zaman gövdesiz 204 (başarı/başarısızlık sızdırmaz); hız sınırı aşımı 429.
 */
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  const len = Number(req.headers.get("content-length") ?? "0");
  if (len > MAX_REPORT_BYTES) return new Response(null, { status: 413 });
  const ip = ((process.env.TRUST_CF_CONNECTING_IP === "1" ? req.headers.get("cf-connecting-ip") : null) ?? req.headers.get("x-forwarded-for")?.split(",")[0] ?? req.headers.get("x-real-ip") ?? "local").trim();
  const key = createHash("sha256").update(ip + (process.env.SESSION_SECRET ?? "")).digest("hex").slice(0, 16);
  if (!allow(key)) return new Response(null, { status: 429 });
  let raw = "";
  try {
    raw = await req.text();
  } catch {
    return new Response(null, { status: 204 });
  }
  if (raw.length > MAX_REPORT_BYTES) return new Response(null, { status: 413 });
  for (const r of summarize(raw)) console.warn("[csp-report]", JSON.stringify(r));
  return new Response(null, { status: 204 });
}
