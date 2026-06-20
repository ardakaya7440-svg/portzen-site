import type { MetadataRoute } from "next";
import { ALL_CATEGORIES, getAllPostsMeta } from "@/lib/blog";

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

  return [...staticPages, ...categoryPages, ...articlePages];
}
