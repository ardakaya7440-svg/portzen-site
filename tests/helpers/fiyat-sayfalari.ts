import fs from "node:fs";
import path from "node:path";
import { createElement, type ReactElement } from "react";

const root = path.resolve(import.meta.dirname, "..", "..");

/** Etkilenen 79 sayfa: yol → canlı (portzenai.com, Vercel/DB) fiyat çoklu kümesi */
export function loadLiveDiff(): { path: string; live: Record<string, number> }[] {
  const rows = fs.readFileSync(path.join(root, "tests/fixtures/canli-fiyat-farklari.tsv"), "utf8").trim().split("\n");
  return rows.map((r) => {
    const [p, live] = r.split("\t");
    const m: Record<string, number> = {};
    for (const part of live.split(";")) {
      const t = part.trim().match(/^(\d+) (.+)$/);
      if (t) m[t[2]] = Number(t[1]);
    }
    return { path: p, live: m };
  });
}

/** Yol → sayfa modülü + params. Dönen işlev sayfa öğesini ve (varsa) generateMetadata sonucunu üretir. */
export async function loadRoute(urlPath: string): Promise<{
  page: () => Promise<ReactElement>;
  metadata: () => Promise<{ description?: string | null; title?: unknown } | null>;
  file: string;
}> {
  const segs = urlPath === "/" ? [] : urlPath.replace(/^\//, "").split("/").map((x) => decodeURIComponent(x));
  // Her düzeyde önce birebir klasör, yoksa tek dinamik [param] klasörü
  let dir = path.join(root, "app");
  const params: Record<string, string> = {};
  for (const seg of segs) {
    if (fs.existsSync(path.join(dir, seg))) {
      dir = path.join(dir, seg);
      continue;
    }
    const dyn = fs.existsSync(dir) ? fs.readdirSync(dir).find((e) => /^\[[^\]]+\]$/.test(e)) : undefined;
    if (!dyn) throw new Error(`Rota dosyası bulunamadı: ${urlPath}`);
    params[dyn.slice(1, -1)] = seg;
    dir = path.join(dir, dyn);
  }
  const file = path.join(dir, "page.tsx");
  if (!fs.existsSync(file)) throw new Error(`Rota dosyası bulunamadı: ${urlPath}`);
  const mod = await import(/* @vite-ignore */ file);
  const props = { params: Promise.resolve(params), searchParams: Promise.resolve({}) };
  return {
    file: path.relative(root, file),
    // Öğe olarak render edilir: "use client" sayfalar (kanca kullanan) da çalışır, async sunucu sayfaları da
    page: async () => createElement(mod.default, props),
    metadata: async () => {
      if (typeof mod.generateMetadata === "function") return await mod.generateMetadata(props);
      return mod.metadata ?? null;
    }
  };
}
