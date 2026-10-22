#!/usr/bin/env node
/**
 * Yerel önizleme sunucusu (yalnızca inceleme içindir; canlı yayın yapmaz).
 *
 *   npm run preview
 *
 * - İlk çalıştırmada .data/preview.env dosyasını oluşturur: yönetici e-postası, rastgele şifre ve oturum anahtarı.
 *   Şifre yalnızca bu dosyada ve terminal çıktısında görünür. .data/ klasörü git'e eklenmez.
 * - Veriler .data/pglite klasöründe (diskte kalıcı Postgres/PGlite) tutulur; sunucu yeniden başlasa da korunur.
 * - Admin'de fiyat "Yayımla" denildiğinde, üretimdeki Vercel deploy hook'unun yerel karşılığı olarak
 *   site yeniden derlenir ve yeniden başlatılır (derleme sırasında site birkaç dakika kapalı olur).
 */
import { spawn } from "node:child_process";
import { randomBytes, scryptSync } from "node:crypto";
import fs from "node:fs";
import http from "node:http";
import path from "node:path";

const root = process.cwd();
const dataDir = path.join(root, ".data");
const envFile = path.join(dataDir, "preview.env");
const PORT = Number(process.env.PORT ?? 3000);
const HOOK_PORT = Number(process.env.HOOK_PORT ?? 3999);

fs.mkdirSync(dataDir, { recursive: true });
if (!fs.existsSync(envFile)) {
  const password = randomBytes(9).toString("base64url");
  const salt = randomBytes(16);
  const hash = `scrypt$16384$8$1$${salt.toString("base64")}$${scryptSync(password, salt, 32, { N: 16384, r: 8, p: 1 }).toString("base64")}`;
  fs.writeFileSync(
    envFile,
    [
      `ADMIN_EMAIL=${process.env.ADMIN_EMAIL ?? "admin@portzenai.com"}`,
      `ADMIN_PASSWORD_HASH=${hash}`,
      `SESSION_SECRET=${randomBytes(48).toString("base64url")}`,
      `# Yalnızca yerel önizleme şifresi (üretimde kullanmayın):`,
      `# PREVIEW_PASSWORD=${password}`,
      ""
    ].join("\n"),
    { mode: 0o600 }
  );
}
const env = { ...process.env };
let previewPassword = null;
for (const line of fs.readFileSync(envFile, "utf8").split("\n")) {
  const m = line.match(/^([A-Z_]+)=(.*)$/);
  if (m) env[m[1]] = m[2];
  const p = line.match(/^# PREVIEW_PASSWORD=(.*)$/);
  if (p) previewPassword = p[1];
}
const token = randomBytes(16).toString("hex");
env.DEPLOY_HOOK_URL = `http://127.0.0.1:${HOOK_PORT}/rebuild?token=${token}`;
env.ADMIN_INSECURE_COOKIE = "1"; // yerelde http üzerinden giriş için
delete env.PORTZEN_DATABASE_URL; // önizleme her zaman yerel PGlite kullanır
env.PZ_PREVIEW_DATA_DIR = path.join(dataDir, "generated"); // yerel fiyat/içerik src/data'ya yazılmaz
delete env.VERCEL;

const npm = process.platform === "win32" ? "npm.cmd" : "npm";
const run = (args) =>
  new Promise((resolve, reject) => {
    const p = spawn(npm, args, { cwd: root, env, stdio: "inherit" });
    p.on("exit", (code) => (code === 0 ? resolve() : reject(new Error(`${args.join(" ")} → çıkış kodu ${code}`))));
  });

// next doğrudan (npm aracısı olmadan) ve ayrı süreç grubunda başlatılır; durdururken tüm grup kapatılır.
// Böylece eski sunucu portta asılı kalmaz ve PGlite dosyalarını tek süreç kullanır.
const nextBin = path.join(root, "node_modules", "next", "dist", "bin", "next");
const isWin = process.platform === "win32";
let server = null;
function start() {
  server = spawn(process.execPath, [nextBin, "start", "-p", String(PORT)], { cwd: root, env, stdio: "inherit", detached: !isWin });
  const me = server;
  me.on("exit", () => {
    if (server === me) server = null;
  });
}
function killTree(sig) {
  if (!server) return;
  try {
    if (isWin) server.kill(sig);
    else process.kill(-server.pid, sig);
  } catch {}
}
function stop() {
  return new Promise((resolve) => {
    if (!server) return resolve();
    const me = server;
    me.once("exit", () => setTimeout(resolve, 500));
    killTree("SIGTERM");
    setTimeout(() => {
      if (server === me) killTree("SIGKILL");
    }, 8000);
  });
}

let building = false;
let again = false;
async function rebuild() {
  if (building) {
    again = true;
    return;
  }
  building = true;
  try {
    do {
      again = false;
      console.log("\n[önizleme] Fiyat yayını alındı: site yeniden derleniyor…");
      await stop(); // PGlite tek süreçlidir; derleme öncesi sunucu durdurulur
      await run(["run", "build"]);
      start();
      console.log(`[önizleme] Hazır: http://localhost:${PORT}`);
    } while (again);
  } catch (e) {
    console.error("[önizleme] Derleme başarısız:", e.message);
    if (!server) start();
  } finally {
    building = false;
  }
}

http
  .createServer((req, res) => {
    const u = new URL(req.url ?? "/", "http://x");
    if (req.method === "POST" && u.pathname === "/rebuild" && u.searchParams.get("token") === token) {
      res.writeHead(202).end("ok");
      setTimeout(rebuild, 300);
      return;
    }
    res.writeHead(404).end();
  })
  .listen(HOOK_PORT, "127.0.0.1");

const skip = process.argv.includes("--no-build") && fs.existsSync(path.join(root, ".next", "BUILD_ID"));
if (!skip) await run(["run", "build"]);
start();
console.log(`
──────────────────────────────────────────────
 PORTZEN yerel önizleme
 Site:   http://localhost:${PORT}
 Panel:  http://localhost:${PORT}/admin
 E-posta: ${env.ADMIN_EMAIL}
 Şifre:   ${previewPassword ?? "(.data/preview.env içinde)"}
 Durdurmak için Ctrl+C
──────────────────────────────────────────────
`);
const bye = async () => {
  await stop();
  process.exit(0);
};
process.on("SIGINT", bye);
process.on("SIGTERM", bye);
