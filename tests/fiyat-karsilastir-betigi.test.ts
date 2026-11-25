import { spawn } from "node:child_process";
import fs from "node:fs";
import http from "node:http";
import os from "node:os";
import path from "node:path";
import { afterAll, describe, expect, it } from "vitest";

/** scripts/fiyat-karsilastir.mjs: iki yerel sahte sunucu (canlı / yeni) ile çıkış kodlarını ve fark raporunu doğrular. Dış ağa çıkmaz. */
const servers: http.Server[] = [];
function serve(html: string): Promise<string> {
  return new Promise((resolve) => {
    const s = http.createServer((_req, res) => {
      res.setHeader("content-type", "text/html");
      res.end(html);
    });
    s.listen(0, "127.0.0.1", () => resolve(`http://127.0.0.1:${(s.address() as { port: number }).port}`));
    servers.push(s);
  });
}
afterAll(() => servers.forEach((s) => s.close()));

const page = (price: string, ld = 24900) =>
  `<html><body><p>${price}</p><script type="application/ld+json">{"@type":"Offer","price":${ld}}</script></body></html>`;

// Sahte sunucular bu süreçte çalıştığı için betik ASENKRON başlatılır (spawnSync olay döngüsünü kilitler)
function run(base: string, live: string, paths: string): Promise<{ status: number | null; stdout: string }> {
  return new Promise((resolve) => {
    const p = spawn(process.execPath, ["scripts/fiyat-karsilastir.mjs", base, "--live", live, "--paths", paths, "--delay", "0"], {
      cwd: path.resolve(import.meta.dirname, "..")
    });
    let stdout = "";
    p.stdout.on("data", (d) => (stdout += d));
    p.on("close", (status) => resolve({ status, stdout }));
  });
}

describe("fiyat-karsilastir.mjs", () => {
  const paths = path.join(fs.mkdtempSync(path.join(os.tmpdir(), "fk-")), "yollar.txt");
  fs.writeFileSync(paths, "/\n/fiyatlar\n");

  it("aynı fiyatlarda çıkış 0", async () => {
    const live = await serve(page("24.900 TL / ay"));
    const neu = await serve(page("24.900 TL / ay"));
    const r = await run(neu, live, paths);
    expect(r.status).toBe(0);
    expect(r.stdout).toContain("2 aynı, 0 farklı");
  });

  it("fiyat farkında çıkış 1 ve fark listelenir (metin + JSON-LD)", async () => {
    const live = await serve(page("24.900 TL / ay"));
    const neu = await serve(page("19.900 TL / ay", 19900));
    const r = await run(neu, live, paths);
    expect(r.status).toBe(1);
    expect(r.stdout).toContain("24.900 TL / ay: canlı=1 yeni=0");
    expect(r.stdout).toContain("json-ld 24900: canlı=1 yeni=0");
  });

  it("fiyatsız (tarafsız metin) sayfa fark sayılır", async () => {
    const live = await serve(page("24.900 TL / ay"));
    const neu = await serve(`<html><body><p data-fiyat-yok>Güncel fiyat bilgisi için bizimle iletişime geçin</p></body></html>`);
    const r = await run(neu, live, paths);
    expect(r.status).toBe(1);
    expect(r.stdout).toContain("fiyat kaynağı okunamadı");
  });
});
