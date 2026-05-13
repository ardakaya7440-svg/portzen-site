import type { MetadataRoute } from "next";

import { getSitemapPostSlugs } from "@/lib/posts";
import { siteConfig } from "@/lib/site";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const routes = [
    "",
    "/hakkimizda",
    "/hizmetler",
    "/hizmetler/ai-otomasyon-danismanligi",
    "/hizmetler/otomasyon-danismanligi",
    "/hizmetler/is-surecleri-otomasyonu",
    "/hizmetler/musteri-lead-yonetimi-otomasyonu",
    "/hizmetler/satis-sureci-otomasyonu",
    "/hizmetler/operasyon-otomasyonu",
    "/hizmetler/e-ticaret-otomasyonu",
    "/blog",
    "/sss",
    "/iletisim"
  ].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8
  })) as MetadataRoute.Sitemap;

  const posts = await getSitemapPostSlugs();
  const blogRoutes = posts.map((post) => ({
    url: `${siteConfig.url}/blog/${post.slug}`,
    lastModified: post.updatedAt,
    changeFrequency: "weekly" as const,
    priority: 0.7
  }));

  return [...routes, ...blogRoutes];
}
