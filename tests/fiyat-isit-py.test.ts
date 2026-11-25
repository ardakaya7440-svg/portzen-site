import { spawn } from "node:child_process";
import http from "node:http";
import path from "node:path";
import { afterAll, describe, expect, it } from "vitest";

/** scripts/fiyat-isit.py: yerel sahte sunucuyla çıkış kodları (dış ağa çıkmaz). */
const servers: http.Server[] = [];
function serve(pages: Record<string, [number, string]>): Promise<string> {
  return new Promise((resolve) => {
    const s = http.createServer((req, res) => {
      if (req.url === "/sitemap.xml") {
        res.end(`<urlset>${Object.keys(pages).map((p) => `<loc>https://portzenai.com${p}</loc>`).join("")}</urlset>`);
        return;
      }
      const [code, body] = pages[req.url ?? ""] ?? [404, ""];
      res.statusCode = code;
      res.end(body);
    });
    s.listen(0, "127.0.0.1", () => resolve(`http://127.0.0.1:${(s.address() as { port: number }).port}`));
    servers.push(s);
  });
}
afterAll(() => servers.forEach((s) => s.close()));

function run(base: string): Promise<{ code: number | null; out: string }> {
  return new Promise((resolve) => {
    const p = spawn("python3", ["scripts/fiyat-isit.py", base, "--wait", "0", "--rate", "4"], { cwd: path.resolve(import.meta.dirname, "..") });
    let out = "";
    p.stdout.on("data", (d) => (out += d));
    p.on("close", (code) => resolve({ code, out }));
  });
}

describe("fiyat-isit.py", () => {
  it("hepsi 200 ve fiyatlı: 0", async () => {
    const r = await run(await serve({ "/": [200, "<p>ok</p>"], "/fiyatlar": [200, "<p>ok</p>"] }));
    expect(r.code).toBe(0);
  });
  it("non-200: 1", async () => {
    const r = await run(await serve({ "/": [200, "ok"], "/yok": [404, ""] }));
    expect(r.code).toBe(1);
    expect(r.out).toContain("HTTP 404 /yok");
  });
  it("fiyatsız işaret: 3", async () => {
    const r = await run(await serve({ "/": [200, "<p data-fiyat-yok>x</p>"] }));
    expect(r.code).toBe(3);
  });
});
