import { timingSafeEqual } from "node:crypto";
import { jwtVerify, SignJWT } from "jose";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";

const SESSION_COOKIE = "ai_ajans_admin";
const MAX_LOGIN_ATTEMPTS = 5;
const LOCKOUT_DURATION_MS = 15 * 60 * 1000; // 15 dakika

// Brute-force koruması — tek-sunucu için in-memory; production'da Redis kullan
const loginAttemptStore = new Map<string, { count: number; resetAt: number }>();

export function checkLoginRateLimit(ip: string): { allowed: boolean; waitMinutes?: number } {
  const now = Date.now();
  const record = loginAttemptStore.get(ip);

  if (!record || record.resetAt < now) return { allowed: true };

  if (record.count >= MAX_LOGIN_ATTEMPTS) {
    return { allowed: false, waitMinutes: Math.ceil((record.resetAt - now) / 60000) };
  }

  return { allowed: true };
}

export function recordFailedLogin(ip: string): void {
  const now = Date.now();
  const record = loginAttemptStore.get(ip);

  if (!record || record.resetAt < now) {
    loginAttemptStore.set(ip, { count: 1, resetAt: now + LOCKOUT_DURATION_MS });
  } else {
    record.count += 1;
  }
}

export function clearLoginAttempts(ip: string): void {
  loginAttemptStore.delete(ip);
}

type SessionPayload = {
  sub: string;
  role: "admin";
};

function getAuthSecret() {
  const secret = process.env.AUTH_SECRET;

  if (!secret) {
    throw new Error("AUTH_SECRET ortam degiskeni tanimlanmamis.");
  }

  if (secret.length < 32) {
    throw new Error("AUTH_SECRET en az 32 karakter uzunlugunda olmalidir.");
  }

  return new TextEncoder().encode(secret);
}

function safeCompare(left: string, right: string) {
  const a = Buffer.from(left);
  const b = Buffer.from(right);
  // Pad shorter buffer so timingSafeEqual doesn't throw on length mismatch,
  // while still returning false when lengths differ.
  const padded = Buffer.alloc(Math.max(a.length, b.length));
  a.copy(padded, 0);
  const paddedB = Buffer.alloc(padded.length);
  b.copy(paddedB, 0);
  return a.length === b.length && timingSafeEqual(padded, paddedB);
}

export async function verifyAdminCredentials(username: string, password: string) {
  const adminUsername = process.env.ADMIN_USERNAME;
  const adminPassword = process.env.ADMIN_PASSWORD;

  if (!adminUsername || !adminPassword) {
    throw new Error("ADMIN_USERNAME or ADMIN_PASSWORD environment variables are missing.");
  }

  return safeCompare(username, adminUsername) && safeCompare(password, adminPassword);
}

export async function createSessionToken() {
  return new SignJWT({ role: "admin" })
    .setProtectedHeader({ alg: "HS256" })
    .setSubject("admin")
    .setIssuedAt()
    .setExpirationTime("12h")
    .sign(getAuthSecret());
}

export async function verifySessionToken(token: string) {
  try {
    const { payload } = await jwtVerify<SessionPayload>(token, getAuthSecret());

    if (payload.role !== "admin" || payload.sub !== "admin") {
      return null;
    }

    return payload;
  } catch {
    return null;
  }
}

export async function setAdminSession() {
  const token = await createSessionToken();
  const cookieStore = await cookies();

  cookieStore.set(SESSION_COOKIE, token, {
    httpOnly: true,
    sameSite: "strict",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 12
  });
}

export async function clearAdminSession() {
  const cookieStore = await cookies();
  cookieStore.delete(SESSION_COOKIE);
}

export async function getAdminSession() {
  const cookieStore = await cookies();
  const token = cookieStore.get(SESSION_COOKIE)?.value;

  if (!token) {
    return null;
  }

  return verifySessionToken(token);
}

export async function requireAdmin() {
  const session = await getAdminSession();

  if (!session) {
    redirect("/admin/login");
  }

  return session;
}

export async function middlewareAuthGuard(request: NextRequest) {
  const token = request.cookies.get(SESSION_COOKIE)?.value;

  if (!token) {
    return NextResponse.redirect(new URL("/admin/login", request.url));
  }

  const session = await verifySessionToken(token);

  if (!session) {
    const response = NextResponse.redirect(new URL("/admin/login", request.url));
    response.cookies.delete(SESSION_COOKIE);
    return response;
  }

  return NextResponse.next();
}
