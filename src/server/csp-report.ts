/**
 * CSP ihlal raporu özetleme + hız sınırı (Report-Only toplama noktası).
 * Kişisel veri/sır YAZILMAZ: yalnız yönerge, engellenen kaynağın ALAN ADI (yol/sorgu atılır),
 * sayfa YOLU (sorgu/parça atılır) ve dispozisyon loglanır. IP loglanmaz; hız sınırı için yalnız özet tutulur.
 */
export const MAX_REPORT_BYTES = 8 * 1024;
export const MAX_REPORTS_PER_REQUEST = 10;
export const RATE_LIMIT_PER_MIN = 30;

export type CspSummary = { directive: string; blocked: string; page: string; disposition: string };

const clip = (v: unknown, max: number) => (typeof v === "string" ? v.replace(/[^\x20-\x7e]/g, "").slice(0, max) : "");

function hostOnly(v: unknown): string {
  const raw = clip(v, 300);
  if (!raw) return "";
  if (["inline", "eval", "data", "blob", "self", "about"].includes(raw)) return raw;
  if (raw.startsWith("data:")) return "data";
  if (raw.startsWith("blob:")) return "blob";
  try {
    return new URL(raw).host.slice(0, 120);
  } catch {
    return "?";
  }
}

function pathOnly(v: unknown): string {
  const raw = clip(v, 300);
  if (!raw) return "";
  try {
    return new URL(raw).pathname.slice(0, 120);
  } catch {
    return "?";
  }
}

function fromLegacy(r: Record<string, unknown>): CspSummary {
  return {
    directive: clip(r["effective-directive"] ?? r["violated-directive"], 60).split(" ")[0],
    blocked: hostOnly(r["blocked-uri"]),
    page: pathOnly(r["document-uri"]),
    disposition: clip(r["disposition"] ?? "report", 12)
  };
}

function fromReportingApi(r: Record<string, unknown>): CspSummary {
  return {
    directive: clip(r.effectiveDirective ?? r.violatedDirective, 60).split(" ")[0],
    blocked: hostOnly(r.blockedURL),
    page: pathOnly(r.documentURL),
    disposition: clip(r.disposition ?? "report", 12)
  };
}

/** Gövdeyi ayrıştırır: eski {"csp-report":{...}} ya da Reporting API [{type:"csp-violation",body:{...}}]. Geçersizse boş dizi. */
export function summarize(raw: string): CspSummary[] {
  let data: unknown;
  try {
    data = JSON.parse(raw);
  } catch {
    return [];
  }
  const out: CspSummary[] = [];
  if (Array.isArray(data)) {
    for (const e of data.slice(0, MAX_REPORTS_PER_REQUEST)) {
      if (e && typeof e === "object" && (e as Record<string, unknown>).type === "csp-violation") {
        const b = (e as Record<string, unknown>).body;
        if (b && typeof b === "object") out.push(fromReportingApi(b as Record<string, unknown>));
      }
    }
  } else if (data && typeof data === "object") {
    const legacy = (data as Record<string, unknown>)["csp-report"];
    if (legacy && typeof legacy === "object") out.push(fromLegacy(legacy as Record<string, unknown>));
  }
  return out;
}

const hits = new Map<string, { n: number; reset: number }>();

/** Bellek içi sabit pencere (dakika) sınırı. key kişisel veri içermemeli (özet). true = izin. */
export function allow(key: string, now = Date.now()): boolean {
  if (hits.size > 5000) for (const [k, v] of hits) if (v.reset < now) hits.delete(k);
  const h = hits.get(key);
  if (!h || h.reset < now) {
    hits.set(key, { n: 1, reset: now + 60_000 });
    return true;
  }
  h.n += 1;
  return h.n <= RATE_LIMIT_PER_MIN;
}

export function _resetRateLimit() {
  hits.clear();
}
