import "server-only";
import { createHash, createHmac, randomBytes, scryptSync, timingSafeEqual } from "node:crypto";
import { cookies, headers } from "next/headers";
import { redirect } from "next/navigation";
import { getDb } from "./db";

/**
 * Tek yöneticili oturum.
 * Ortam değişkenleri (sunucu tarafında kalır, tarayıcıya gönderilmez):
 *   ADMIN_EMAIL           giriş e-postası
 *   ADMIN_PASSWORD_HASH   `npm run admin:hash` ile üretilen scrypt özeti
 *   SESSION_SECRET        en az 32 karakter rastgele değer (çerez imzası)
 */
export const SESSION_COOKIE = "pz_admin";
const SESSION_HOURS = 12;
const MAX_FAILED = 5;
const WINDOW_MIN = 15;

export function authConfigError(): string | null {
  if (!process.env.ADMIN_EMAIL) return "ADMIN_EMAIL tanımlı değil.";
  if (!process.env.ADMIN_PASSWORD_HASH?.startsWith("scrypt$")) return "ADMIN_PASSWORD_HASH tanımlı değil veya geçersiz.";
  if (!process.env.SESSION_SECRET || process.env.SESSION_SECRET.length < 32) return "SESSION_SECRET en az 32 karakter olmalı.";
  return null;
}

export function hashPassword(password: string): string {
  const salt = randomBytes(16);
  const hash = scryptSync(password, salt, 32, { N: 16384, r: 8, p: 1 });
  return `scrypt$16384$8$1$${salt.toString("base64")}$${hash.toString("base64")}`;
}

export function verifyPassword(password: string, stored: string): boolean {
  const parts = stored.split("$");
  if (parts.length !== 6 || parts[0] !== "scrypt") return false;
  const [, N, r, p, saltB64, hashB64] = parts;
  const expected = Buffer.from(hashB64, "base64");
  const got = scryptSync(password, Buffer.from(saltB64, "base64"), expected.length, { N: Number(N), r: Number(r), p: Number(p) });
  return got.length === expected.length && timingSafeEqual(got, expected);
}

function b64url(buf: Buffer | string) {
  return Buffer.from(buf).toString("base64url");
}

export function signSession(email: string, now = Date.now()): string {
  const payload = b64url(JSON.stringify({ sub: email, iat: now, exp: now + SESSION_HOURS * 3600_000 }));
  const sig = createHmac("sha256", process.env.SESSION_SECRET!).update(payload).digest("base64url");
  return `${payload}.${sig}`;
}

export function verifySession(token: string | undefined): { sub: string; exp: number } | null {
  if (!token || !process.env.SESSION_SECRET) return null;
  const [payload, sig] = token.split(".");
  if (!payload || !sig) return null;
  const expected = createHmac("sha256", process.env.SESSION_SECRET).update(payload).digest();
  const got = Buffer.from(sig, "base64url");
  if (got.length !== expected.length || !timingSafeEqual(got, expected)) return null;
  try {
    const data = JSON.parse(Buffer.from(payload, "base64url").toString("utf8"));
    if (typeof data.exp !== "number" || data.exp < Date.now()) return null;
    if (data.sub !== process.env.ADMIN_EMAIL) return null;
    return data;
  } catch {
    return null;
  }
}

export function getSession() {
  return verifySession(cookies().get(SESSION_COOKIE)?.value);
}

/** Her yazma işleminin başında çağrılır: oturum yoksa giriş sayfasına yönlendirir. */
export function requireAdmin(): { sub: string } {
  const s = getSession();
  if (!s) redirect("/admin/giris");
  return s;
}

function clientIp(): string {
  const h = headers();
  return (h.get("x-forwarded-for")?.split(",")[0] ?? h.get("x-real-ip") ?? "local").trim();
}

export async function attemptLogin(email: string, password: string): Promise<{ ok: true } | { ok: false; error: string }> {
  const cfg = authConfigError();
  if (cfg) return { ok: false, error: `Yönetici girişi yapılandırılmamış: ${cfg}` };
  const db = await getDb();
  const ip = clientIp();
  const recent = await db.query<{ n: string }>(
    `select count(*)::text as n from login_attempts where ip = $1 and ok = false and at > now() - ($2 || ' minutes')::interval`,
    [ip, String(WINDOW_MIN)]
  );
  const global = await db.query<{ n: string }>(
    `select count(*)::text as n from login_attempts where ok = false and at > now() - ($1 || ' minutes')::interval`,
    [String(WINDOW_MIN)]
  );
  if (Number(recent.rows[0]?.n ?? 0) >= MAX_FAILED || Number(global.rows[0]?.n ?? 0) >= MAX_FAILED * 10) {
    return { ok: false, error: `Çok fazla hatalı deneme. ${WINDOW_MIN} dakika sonra tekrar deneyin.` };
  }
  const digest = (v: string) => createHash("sha256").update(v.trim().toLowerCase()).digest();
  const emailOk = timingSafeEqual(digest(email), digest(process.env.ADMIN_EMAIL!));
  const passOk = verifyPassword(password, process.env.ADMIN_PASSWORD_HASH!);
  const ok = emailOk && passOk;
  await db.query(`insert into login_attempts (ip, ok) values ($1, $2)`, [ip, ok]);
  if (!ok) return { ok: false, error: "E-posta veya şifre hatalı." };
  cookies().set(SESSION_COOKIE, signSession(process.env.ADMIN_EMAIL!), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production" && process.env.ADMIN_INSECURE_COOKIE !== "1",
    sameSite: "lax",
    path: "/",
    maxAge: SESSION_HOURS * 3600
  });
  await audit(process.env.ADMIN_EMAIL!, "login", null);
  return { ok: true };
}

export function logout() {
  cookies().delete(SESSION_COOKIE);
}

export async function audit(actor: string, action: string, detail: unknown) {
  const db = await getDb();
  await db.query(`insert into audit_log (actor, action, detail) values ($1, $2, $3::jsonb)`, [actor, action, JSON.stringify(detail ?? null)]);
}
