import type { MetadataRoute } from "next";
import { ALL_CATEGORIES, getAllPostsMeta, getExtraPageNumbers } from "@/lib/blog";
import { getAllSectorLandings } from "@/lib/landings";

const BASE = "https://portzenai.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPostsMeta();
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE}/hizmetler`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/referanslar`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/hakkimizda`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/iletisim`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.9 }
  ];

  // SEO landing pages (money pages — yüksek priority)
  const landingPages: MetadataRoute.Sitemap = [
    { url: `${BASE}/whatsapp-ai-asistani`, lastModified: now, changeFrequency: "monthly", priority: 0.95 },
    { url: `${BASE}/instagram-dm-otomasyonu`, lastModified: now, changeFrequency: "monthly", priority: 0.95 },
    { url: `${BASE}/ai-reklam-videosu`, lastModified: now, changeFrequency: "monthly", priority: 0.95 },
    { url: `${BASE}/web-tasarim`, lastModified: now, changeFrequency: "monthly", priority: 0.95 },
    { url: `${BASE}/crm-otomasyonu`, lastModified: now, changeFrequency: "monthly", priority: 0.95 }
  ];

  // Phase 4: Karşılaştırma + niş landing'ler
  const comparisonPages: MetadataRoute.Sitemap = [
    { url: `${BASE}/manychat-alternatifi`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/zapier-alternatifi`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/hubspot-alternatifi`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/tidio-alternatifi`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/intercom-alternatifi`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/whatsapp-chatbot-fiyat`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/ai-chatbot-turkce`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/n8n-kurulum-hizmeti`, lastModified: now, changeFrequency: "monthly", priority: 0.9 }
  ];

  const categoryPages: MetadataRoute.Sitemap = ALL_CATEGORIES.map((c) => ({
    url: `${BASE}/blog/kategori/${c.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.7
  }));

  const articlePages: MetadataRoute.Sitemap = posts.map((p) => ({
    url: `${BASE}/blog/${p.slug}`,
    lastModified: new Date(p.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.8
  }));

  // Sektörel landing'ler (programmatic SEO) — yüksek priority
  const sectorLandings: MetadataRoute.Sitemap = getAllSectorLandings().map((s) => ({
    url: `${BASE}/${s.service}/${s.sector}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.9
  }));

  // Blog pagination ekstra sayfaları (sayfa 2, 3, ...)
  const blogPaginationPages: MetadataRoute.Sitemap = getExtraPageNumbers().map((n) => ({
    url: `${BASE}/blog/sayfa/${n}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.6
  }));

  return [
    ...staticPages,
    ...landingPages,
    ...comparisonPages,
    ...sectorLandings,
    ...categoryPages,
    ...articlePages,
    ...blogPaginationPages
  ];
}
