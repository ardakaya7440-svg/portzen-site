import fs from "node:fs";
import path from "node:path";
import { createElement, type ReactElement } from "react";

const root = path.resolve(import.meta.dirname, "..", "..");

/** Fiyat gösteren 79 sayfanın yolları (yalnız yol listesi; fiyat içermez) */
export function loadAffectedPaths(): string[] {
  return fs.readFileSync(path.join(root, "tests/fixtures/fiyat-etkilenen-sayfalar.txt"), "utf8").split("\n").map((l) => l.trim()).filter(Boolean);
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
