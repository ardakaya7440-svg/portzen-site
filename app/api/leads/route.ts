import { createHash } from "node:crypto";
import { revalidatePath } from "next/cache";
import { getDb } from "@/server/db";

/**
 * İletişim formu kaydı (herkese açık uç nokta).
 * - Alan uzunlukları sınırlıdır, en az ad + (e-posta veya telefon) gerekir.
 * - Gizli "website" alanı doluysa (bot) sessizce kabul edilmiş gibi yanıt verilir, kaydedilmez.
 * - Aynı IP'den saatte en fazla 10 kayıt. IP açık metin saklanmaz, yalnızca özeti tutulur.
 * - Yalnızca portzenai.com (veya yerel önizleme) kaynaklı istekler kabul edilir.
 */
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const s = (v: unknown, max: number) => (typeof v === "string" ? v.trim().slice(0, max) || null : null);

export async function POST(req: Request) {
  const origin = req.headers.get("origin") ?? "";
  const host = req.headers.get("host") ?? "";
  if (origin && !origin.endsWith("://" + host) && !/^https:\/\/(www\.)?portzenai\.com$/.test(origin)) {
    return Response.json({ ok: false }, { status: 403 });
  }
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return Response.json({ ok: false }, { status: 400 });
  }
  if (s(body.website, 200)) return Response.json({ ok: true }); // bot tuzağı

  const name = s(body.name, 120);
  const email = s(body.email, 200);
  const phone = s(body.phone, 40);
  if (!name || (!email && !phone)) return Response.json({ ok: false, error: "missing" }, { status: 400 });
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return Response.json({ ok: false, error: "email" }, { status: 400 });

  const ip = (req.headers.get("x-forwarded-for")?.split(",")[0] ?? req.headers.get("x-real-ip") ?? "local").trim();
  const ipHash = createHash("sha256").update(ip + (process.env.SESSION_SECRET ?? "")).digest("hex").slice(0, 32);

  try {
    const db = await getDb();
    const recent = await db.query<{ n: string }>(
      `select count(*)::text as n from leads where ip_hash = $1 and created_at > now() - interval '1 hour'`,
      [ipHash]
    );
    if (Number(recent.rows[0]?.n ?? 0) >= 10) return Response.json({ ok: false, error: "rate" }, { status: 429 });
    await db.query(
      `insert into leads (name, email, phone, service, package, message, source, landing, page, ip_hash)
       values ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)`,
      [name, email, phone, s(body.service, 120), s(body.package, 60), s(body.message, 4000), s(body.source, 120), s(body.landing, 300), s(body.page, 300), ipHash]
    );
    revalidatePath("/admin/talepler");
    return Response.json({ ok: true });
  } catch (e) {
    console.error("[leads] kayıt hatası:", e);
    return Response.json({ ok: false }, { status: 500 });
  }
}
