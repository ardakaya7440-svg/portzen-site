import { NextResponse, type NextRequest } from "next/server";

/**
 * /admin sayfaları için ilk kapı: imzalı oturum çerezi yoksa giriş sayfasına yönlendirir.
 * Asıl yetki kontrolü her sunucu işleminde (server action) ayrıca yapılır (src/server/auth.ts → requireAdmin).
 */
const COOKIE = "pz_admin";

function b64urlToBytes(s: string): Uint8Array<ArrayBuffer> {
  const b64 = s.replace(/-/g, "+").replace(/_/g, "/") + "===".slice((s.length + 3) % 4);
  const bin = atob(b64);
  const out = new Uint8Array(new ArrayBuffer(bin.length));
  for (let i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
  return out;
}

async function valid(token: string | undefined): Promise<boolean> {
  const secret = process.env.SESSION_SECRET;
  if (!token || !secret) return false;
  const [payload, sig] = token.split(".");
  if (!payload || !sig) return false;
  try {
    const key = await crypto.subtle.importKey("raw", new TextEncoder().encode(secret), { name: "HMAC", hash: "SHA-256" }, false, ["verify"]);
    const ok = await crypto.subtle.verify("HMAC", key, b64urlToBytes(sig), new TextEncoder().encode(payload));
    if (!ok) return false;
    const data = JSON.parse(new TextDecoder().decode(b64urlToBytes(payload)));
    return typeof data.exp === "number" && data.exp > Date.now() && data.sub === process.env.ADMIN_EMAIL;
  } catch {
    return false;
  }
}

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const res = NextResponse.next();
  res.headers.set("X-Robots-Tag", "noindex, nofollow");
  res.headers.set("Cache-Control", "no-store");
  if (pathname === "/admin/giris") return res;
  if (await valid(req.cookies.get(COOKIE)?.value)) return res;
  const url = req.nextUrl.clone();
  url.pathname = "/admin/giris";
  url.search = "";
  return NextResponse.redirect(url);
}

export const config = { matcher: ["/admin", "/admin/:path*"] };
