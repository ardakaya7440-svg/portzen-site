import fs from "node:fs";
import { beforeEach, describe, expect, it } from "vitest";
import { MAX_REPORT_BYTES, RATE_LIMIT_PER_MIN, _resetRateLimit, allow, summarize } from "@/server/csp-report";
import { POST } from "../app/api/csp-report/route";

const legacy = (o: object) => JSON.stringify({ "csp-report": o });

describe("csp-report özetleme", () => {
  it("eski biçim: yalnız alan adı ve yol, sorgu/parça atılır", () => {
    const [r] = summarize(legacy({ "document-uri": "https://x.com/a/b?token=SIR#f", "blocked-uri": "https://evil.example/p?q=1", "effective-directive": "script-src-elem", disposition: "report" }));
    expect(r).toEqual({ directive: "script-src-elem", blocked: "evil.example", page: "/a/b", disposition: "report" });
    expect(JSON.stringify(r)).not.toMatch(/SIR|token|q=1/);
  });
  it("Reporting API biçimi", () => {
    const [r] = summarize(JSON.stringify([{ type: "csp-violation", body: { documentURL: "https://x.com/?a=1", blockedURL: "inline", effectiveDirective: "script-src" } }]));
    expect(r.blocked).toBe("inline");
    expect(r.page).toBe("/");
  });
  it("geçersiz/yabancı gövde boş döner; rapor sayısı sınırlı", () => {
    expect(summarize("{bozuk")).toEqual([]);
    expect(summarize('{"x":1}')).toEqual([]);
    const many = JSON.stringify(Array.from({ length: 50 }, () => ({ type: "csp-violation", body: {} })));
    expect(summarize(many).length).toBe(10);
  });
  it("kontrol karakterleri temizlenir", () => {
    const [r] = summarize(legacy({ "effective-directive": "img-src\n\u0000x" }));
    expect(r.directive).not.toMatch(/[\n\u0000]/);
  });
});

describe("hız sınırı", () => {
  beforeEach(_resetRateLimit);
  it("pencerede sınırdan sonra reddeder, pencere dolunca açar", () => {
    const t = 1_000_000;
    for (let i = 0; i < RATE_LIMIT_PER_MIN; i++) expect(allow("k", t)).toBe(true);
    expect(allow("k", t)).toBe(false);
    expect(allow("baska", t)).toBe(true);
    expect(allow("k", t + 61_000)).toBe(true);
  });
});

describe("POST /api/csp-report", () => {
  beforeEach(_resetRateLimit);
  const req = (body: string, headers: Record<string, string> = {}) => new Request("http://x/api/csp-report", { method: "POST", body, headers });
  it("geçerli rapor 204 ve yalnız özet loglanır", async () => {
    const logs: string[] = [];
    const orig = console.warn;
    console.warn = (...a: unknown[]) => void logs.push(a.join(" "));
    try {
      const res = await POST(req(legacy({ "document-uri": "https://x.com/s?email=a@b.c", "blocked-uri": "https://cdn.example/x.js?k=1", "violated-directive": "script-src 'self'" }), { "x-forwarded-for": "9.9.9.9" }));
      expect(res.status).toBe(204);
    } finally {
      console.warn = orig;
    }
    expect(logs.length).toBe(1);
    expect(logs[0]).not.toMatch(/a@b\.c|email|9\.9\.9\.9|k=1/);
    expect(logs[0]).toContain("cdn.example");
  });
  it("büyük gövde 413 (content-length ve gerçek boyut)", async () => {
    expect((await POST(req("{}", { "content-length": String(MAX_REPORT_BYTES + 1) }))).status).toBe(413);
    expect((await POST(req("x".repeat(MAX_REPORT_BYTES + 1)))).status).toBe(413);
  });
  it("hız sınırı 429", async () => {
    let last = 204;
    for (let i = 0; i < RATE_LIMIT_PER_MIN + 1; i++) last = (await POST(req("{}", { "x-forwarded-for": "1.2.3.4" }))).status;
    expect(last).toBe(429);
  });
});

describe("next.config başlıkları", () => {
  it("CSP yalnız Report-Only (zorunlu CSP yok) ve rapor noktası tanımlı", () => {
    const s = fs.readFileSync("next.config.mjs", "utf8");
    expect(s).toContain("Content-Security-Policy-Report-Only");
    expect(s).not.toMatch(/key:\s*'Content-Security-Policy'/);
    expect(s).toContain("/api/csp-report");
  });
});
