/**
 * Koruma testleri: repoda sabit fiyat/anlık görüntü geri gelirse, sunucu modülü istemciye sızarsa veya
 * içerik yer tutucuları bozulursa BAŞARISIZ olur.
 */
import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import { PRICING_STRUCTURE, SINGLE_STRUCTURE, buildPrices } from "@/data/pricing";
import { LIVE } from "./helpers/db";

const root = path.resolve(import.meta.dirname, "..");

function walk(dir: string, out: string[] = []): string[] {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (["node_modules", ".next", ".git", "tests", ".data"].includes(e.name)) continue;
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, out);
    else out.push(p);
  }
  return out;
}
const rel = (p: string) => path.relative(root, p);
const srcFiles = [...walk(path.join(root, "src")), ...walk(path.join(root, "app"))].filter((p) => /\.(tsx?|mjs|js|json|css)$/.test(p));

/** Demo içerik (sushi menüsü vb.) paket fiyatı değildir; yalnızca bu klasörler/dosyalar hariç tutulur */
const DEMO = [/^src\/components\/tarzlar\//, /^src\/components\/ui\/sushi-conveyor-menu\.tsx$/, /^src\/data\/cms\.snapshot\.json$/];

describe("sabit fiyat korumaları", () => {
  it("src/ ve app/ içinde sabit 'N.NNN TL / ₺' paket fiyatı yok", () => {
    const re = /\d{1,3}(?:\.\d{3})+\s?(?:₺|TL|TRY)|\b\d{4,}\s?(?:₺|TL)\b/;
    const bad: string[] = [];
    for (const f of srcFiles) {
      if (DEMO.some((d) => d.test(rel(f)))) continue;
      const lines = fs.readFileSync(f, "utf8").split("\n");
      lines.forEach((l, i) => {
        if (re.test(l)) bad.push(`${rel(f)}:${i + 1}: ${l.trim().slice(0, 120)}`);
      });
    }
    expect(bad).toEqual([]);
  });

  it("yapı dosyasında hiçbir tutar yok (tüm fiyat alanları NaN)", () => {
    for (const f of Object.values(PRICING_STRUCTURE))
      for (const t of Object.values(f.tiers)) {
        expect(Number.isNaN(t.price), `${f.id} price`).toBe(true);
        if (t.setupFee !== undefined) expect(Number.isNaN(t.setupFee)).toBe(true);
        if (t.maintenance !== undefined) expect(Number.isNaN(t.maintenance)).toBe(true);
      }
    for (const s of Object.values(SINGLE_STRUCTURE)) {
      expect(Number.isNaN(s.price)).toBe(true);
      if (s.setupFee !== undefined) expect(Number.isNaN(s.setupFee)).toBe(true);
      if (s.monthly !== undefined) expect(Number.isNaN(s.monthly)).toBe(true);
    }
    // veri yokken hiçbir kalemde tutar olmaz
    const none = buildPrices(null);
    for (const f of Object.values(none.PRICING)) for (const t of Object.values(f.tiers)) expect(Number.isFinite(t.price)).toBe(false);
  });

  it("fiyat anlık görüntüsü ve koddaki varsayılan fiyat yeniden eklenmemiş", () => {
    expect(fs.existsSync(path.join(root, "src/data/pricing.published.json"))).toBe(false);
    const all = srcFiles.map((f) => fs.readFileSync(f, "utf8")).join("\n");
    expect(all).not.toMatch(/pricing\.published/);
    expect(all).not.toMatch(/CODE_DEFAULT_PRICES|completePriceData/);
    // ".data/generated" fiyat dosyası üretilmez
    expect(fs.readFileSync(path.join(root, "scripts/sync-content.mjs"), "utf8")).not.toMatch(/pricing\.published|PRICES\b/);
  });

  it("fiyat için DEPLOY_HOOK_URL kullanılmıyor", () => {
    const hits = srcFiles.filter((f) => /DEPLOY_HOOK_URL/.test(fs.readFileSync(f, "utf8"))).map(rel);
    expect(hits).toEqual([]);
  });

  it("fiyat/DB modülleri server-only; istemci bileşenleri sunucu modüllerini import etmez; NEXT_PUBLIC ile DB/gizli anahtar yok", () => {
    for (const f of ["src/server/price-source.ts", "src/server/prices.ts", "src/server/db.ts"]) {
      expect(fs.readFileSync(path.join(root, f), "utf8"), f).toMatch(/^import "server-only";/m);
    }
    const offenders: string[] = [];
    for (const f of srcFiles.filter((p) => /\.tsx?$/.test(p))) {
      const s = fs.readFileSync(f, "utf8");
      if (/^["']use client["']/m.test(s.slice(0, 200))) {
        // `import type` silinir; değer import'u sunucu modülünden olmamalı
        for (const m of s.matchAll(/^import (?!type)[^;]*from ["']@\/server\/([^"']+)["']/gm)) offenders.push(`${rel(f)} -> ${m[1]}`);
      }
    }
    expect(offenders).toEqual([]);
    const envUse = srcFiles.map((f) => fs.readFileSync(f, "utf8")).join("\n");
    expect(envUse).not.toMatch(/NEXT_PUBLIC_[A-Z_]*(DATABASE|DB_|NEON|SECRET|PASSWORD|TOKEN)/);
  });

  it("içerik (blog/landing) yer tutucularının TÜMÜ geçerli ve çözülebilir (hem DB'li hem DB'siz)", () => {
    const withDb = buildPrices(LIVE);
    const without = buildPrices(null);
    const tokenRe = /\{\{[a-z-]+:[^}]*\}\}/g;
    let count = 0;
    for (const f of walk(path.join(root, "content"))) {
      const s = fs.readFileSync(f, "utf8");
      for (const t of s.match(tokenRe) ?? []) {
        count++;
        expect(() => withDb.resolvePriceTokens(t, { strict: true }), `${rel(f)} ${t}`).not.toThrow();
        const a = withDb.resolvePriceTokens(t, { strict: true });
        expect(a, `${rel(f)} ${t}`).not.toContain("{{");
        expect(() => without.resolvePriceTokens(t, { strict: true })).not.toThrow();
      }
    }
    expect(count).toBeGreaterThan(100);
  });

  it("içerikte (blog/landing) PORTZEN paket fiyatını yer tutucusuz yazan satır yok: 'PORTZEN' + sabit fiyat + ':' veya 'paketi/paketleri' kalıbı", () => {
    // Piyasa aralıkları ve rakip fiyatları serbesttir; yalnızca PORTZEN paketini literal fiyatla anlatan kalıp yasak:
    //   "PORTZEN ... paket(ler)i ... 9.900 TL"  gibi. (Bulgular raporda listelenir.)
    const re = /PORTZEN[^.\n]{0,80}(?:paket|Başlangıç|Büyüme|Kurumsal)[^.\n]{0,80}\d{1,3}(?:\.\d{3})+\s?(?:TL|₺)/;
    const bad: string[] = [];
    for (const f of walk(path.join(root, "content"))) {
      fs.readFileSync(f, "utf8").split("\n").forEach((l, i) => {
        if (re.test(l.replace(/\{\{[^}]*\}\}/g, ""))) bad.push(`${rel(f)}:${i + 1}`);
      });
    }
    expect(bad).toEqual([]);
  });

  it("scripts/fiyat-db-kontrol.mjs salt okuma: tek SELECT, read-only işlem ve bağlantı, yazma/DDL yok, sırları yazdırmıyor", () => {
    const src = fs.readFileSync(path.join(root, "scripts/fiyat-db-kontrol.mjs"), "utf8");
    const code = src.replace(/\/\*[\s\S]*?\*\//g, "");
    expect(code).toMatch(/default_transaction_read_only=on/);
    expect(code).toMatch(/begin read only/);
    expect(code).toMatch(/set transaction read only/);
    expect([...code.matchAll(/\.query\(`?"?\s*(\w+)/gi)].map((m) => m[1].toLowerCase()).filter((k) => !["begin", "set", "select", "rollback"].includes(k))).toEqual([]);
    expect(code).not.toMatch(/\b(insert|update|delete|drop|alter|create|truncate)\b\s/i);
    expect(code).not.toMatch(/e\.message|console\.\w+\([^)]*\burl\b/);
  });

  it("üretim imajı scripts/ klasörünü içeriyor (konteynerde çalıştırılabilsin)", () => {
    expect(fs.readFileSync(path.join(root, "Dockerfile"), "utf8")).toMatch(/COPY --from=builder[^\n]*\/app\/scripts \.\/scripts/);
  });
});
