import type { ReactElement } from "react";
import { renderToReadableStream } from "react-dom/server";

/** Sunucu bileşenini (async dahil) HTML metnine çevirir. */
export async function renderHtml(el: ReactElement): Promise<string> {
  let error: unknown;
  const stream = await renderToReadableStream(el, {
    onError(e) {
      error = e;
    }
  });
  await stream.allReady;
  const html = await new Response(stream).text();
  if (error) throw error;
  return html;
}

/** Canlı karşılaştırma betiğiyle AYNI çıkarım: etiketleri satıra böl, '__next' içeren satırları at, "N.NNN TL[ / ay]" say. */
export function priceMultiset(html: string): Record<string, number> {
  const out: Record<string, number> = {};
  for (const line of html.replace(/<[^>]*>/g, "\n").split("\n")) {
    if (line.includes("__next")) continue;
    for (const m of line.match(/[0-9]{1,3}(\.[0-9]{3})* TL( \/ ay)?/g) ?? []) out[m] = (out[m] ?? 0) + 1;
  }
  return out;
}

/** JSON-LD bloklarını ayrıştırır */
export function jsonLd(html: string): Record<string, unknown>[] {
  const out: Record<string, unknown>[] = [];
  for (const m of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    out.push(JSON.parse(m[1].replace(/&quot;/g, '"').replace(/&amp;/g, "&").replace(/&#x27;/g, "'").replace(/&lt;/g, "<").replace(/&gt;/g, ">")));
  }
  return out;
}
