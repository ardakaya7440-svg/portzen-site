import fs from "node:fs";
import path from "node:path";

/* ============================================================
   PROGRAMMATIC SEO — Sector × Service landing data layer
   ============================================================ */

export type ServiceSlug =
  | "whatsapp-ai-asistani"
  | "instagram-dm-otomasyonu"
  | "ai-reklam-videosu"
  | "web-tasarim"
  | "crm-otomasyonu";

export type ToneKey = "yellow" | "pink" | "blue" | "green" | "purple" | "orange";

export interface ServiceMeta {
  slug: ServiceSlug;
  label: string;
  shortLabel: string;
  tone: ToneKey;
  /** Genel hizmet açıklaması — sektörel sayfalarda H1 ön eki olarak kullanılır */
  baseTitle: string;
}

/** 5 hizmetin sabit meta bilgisi */
export const SERVICE_META: Record<ServiceSlug, ServiceMeta> = {
  "whatsapp-ai-asistani": {
    slug: "whatsapp-ai-asistani",
    label: "WhatsApp AI Asistanı",
    shortLabel: "WhatsApp AI",
    tone: "green",
    baseTitle: "WhatsApp AI Asistanı"
  },
  "instagram-dm-otomasyonu": {
    slug: "instagram-dm-otomasyonu",
    label: "Instagram DM Otomasyonu",
    shortLabel: "Instagram DM",
    tone: "pink",
    baseTitle: "Instagram DM Otomasyonu"
  },
  "ai-reklam-videosu": {
    slug: "ai-reklam-videosu",
    label: "AI Reklam Videosu",
    shortLabel: "AI Reklam",
    tone: "purple",
    baseTitle: "AI Reklam Videosu"
  },
  "web-tasarim": {
    slug: "web-tasarim",
    label: "Web Tasarım",
    shortLabel: "Web Tasarım",
    tone: "orange",
    baseTitle: "Web Tasarım"
  },
  "crm-otomasyonu": {
    slug: "crm-otomasyonu",
    label: "CRM Otomasyonu",
    shortLabel: "CRM",
    tone: "blue",
    baseTitle: "CRM Otomasyonu"
  }
};

/** Her sektörel landing JSON dosyasının uyacağı şablon */
export interface SectorLandingData {
  /** URL slug (örn: "eczane", "klinik") */
  sectorSlug: string;
  /** Görünür ad (örn: "Eczane", "Estetik Klinik") */
  sectorName: string;
  /** Çoğul (örn: "Eczaneler") */
  sectorPlural: string;

  /** SEO meta */
  title: string; // <title> + og:title (50-60 karakter)
  description: string; // meta description (150-160 karakter)
  keywords: string[]; // 6-10 keyword

  /** Hero */
  h1: string;
  heroSubtitle: string;
  stats: { value: string; label: string }[]; // 4 stat

  /** Problem (3-5 madde) */
  problems: string[];

  /** Çözüm — 4 adımlı süreç */
  solutionSteps: { title: string; description: string }[];

  /** 6 feature */
  features: { title: string; description: string }[];

  /** Vaka çalışması */
  caseStudy: {
    title: string;
    paragraphs: string[]; // 2-3 paragraf
    beforeAfter: { label: string; before: string; after: string }[]; // 3 metrik
  };

  /** Fiyatlandırma — 3 paket (opsiyonel: paketler hizmete göre değişebilir) */
  pricing: {
    name: string;
    price: string;
    description: string;
    features: string[];
    highlighted?: boolean;
  }[];

  /** FAQ — 6-7 soru */
  faq: { question: string; answer: string }[];

  /** Final CTA */
  finalCtaHeadline: string;
  finalCtaSubtitle: string;
}

const LANDINGS_DIR = path.join(process.cwd(), "content", "landings");

/** Bir hizmet için tanımlı sektörlerin slug listesini döndürür */
export function getSectorSlugsForService(serviceSlug: ServiceSlug): string[] {
  const dir = path.join(LANDINGS_DIR, serviceSlug);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".json") && !f.startsWith("_"))
    .map((f) => f.replace(/\.json$/, ""));
}

/** Belirli bir hizmet × sektör kombinasyonunun data'sını okur */
export function getSectorLanding(serviceSlug: ServiceSlug, sectorSlug: string): SectorLandingData | null {
  const file = path.join(LANDINGS_DIR, serviceSlug, `${sectorSlug}.json`);
  if (!fs.existsSync(file)) return null;
  try {
    const raw = fs.readFileSync(file, "utf-8");
    return JSON.parse(raw) as SectorLandingData;
  } catch {
    return null;
  }
}

/** Sitemap için: tüm landing kombinasyonlarını döndürür */
export function getAllSectorLandings(): { service: ServiceSlug; sector: string }[] {
  if (!fs.existsSync(LANDINGS_DIR)) return [];
  const result: { service: ServiceSlug; sector: string }[] = [];
  for (const service of Object.keys(SERVICE_META) as ServiceSlug[]) {
    for (const sector of getSectorSlugsForService(service)) {
      result.push({ service, sector });
    }
  }
  return result;
}

/** Cross-link önerisi: aynı sektörden başka hizmetlerin landing'leri */
export function getCrossLinksForSector(
  excludeService: ServiceSlug,
  sectorSlug: string
): { service: ServiceSlug; label: string; href: string }[] {
  const out: { service: ServiceSlug; label: string; href: string }[] = [];
  for (const service of Object.keys(SERVICE_META) as ServiceSlug[]) {
    if (service === excludeService) continue;
    const data = getSectorLanding(service, sectorSlug);
    if (!data) continue;
    out.push({
      service,
      label: `${SERVICE_META[service].label} — ${data.sectorName}`,
      href: `/${service}/${sectorSlug}`
    });
  }
  return out;
}

/** Tone → Tailwind sınıfı eşleştirme */
export const TONE_BG: Record<ToneKey, string> = {
  yellow: "bg-brand-yellow",
  pink: "bg-brand-pink",
  blue: "bg-brand-blue",
  green: "bg-brand-green",
  purple: "bg-brand-purple",
  orange: "bg-brand-orange"
};

export const TONE_TEXT: Record<ToneKey, string> = {
  yellow: "text-ink",
  pink: "text-paper",
  blue: "text-paper",
  green: "text-paper",
  purple: "text-paper",
  orange: "text-ink"
};
