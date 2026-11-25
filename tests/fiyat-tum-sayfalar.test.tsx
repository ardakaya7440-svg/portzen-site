/** Site haritasındaki 324 sayfanın tamamı: DB açıkken de kapalıyken de hata vermeden render olur (200 muadili). */
import fs from "node:fs";
import path from "node:path";
import { beforeAll, describe, expect, it } from "vitest";
import { resetNextCache } from "./mocks/next-cache";
import { seedPublished } from "./helpers/db";
import { renderHtml } from "./helpers/render";
import { loadRoute } from "./helpers/fiyat-sayfalari";

const urls = fs.readFileSync(path.resolve(import.meta.dirname, "fixtures/tum-sayfalar.txt"), "utf8").split("\n").filter(Boolean);
let realDb: unknown;

beforeAll(async () => {
  resetNextCache();
  await seedPublished();
  realDb = globalThis.__portzenDb;
});

describe.each([
  ["DB açık", false],
  ["DB kapalı", true]
])("%s: tüm sayfalar render olur", (_label, down) => {
  it("324 sayfa", async () => {
    if (down) {
      const dead = Promise.reject(new Error("Neon erişilemiyor (test)"));
      dead.catch(() => {});
      globalThis.__portzenDb = dead as never;
    } else globalThis.__portzenDb = realDb as never;
    resetNextCache();
    expect(urls.length).toBe(324);
    const failed: string[] = [];
    for (const u of urls) {
      try {
        const r = await loadRoute(u);
        const html = await renderHtml(await r.page());
        await r.metadata();
        if (html.length < 500) failed.push(`${u}: boş çıktı`);
      } catch (e) {
        failed.push(`${u}: ${(e as Error).message.slice(0, 120)}`);
      }
    }
    expect(failed).toEqual([]);
    globalThis.__portzenDb = realDb as never;
  }, 300_000);
});
