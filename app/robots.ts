import type { MetadataRoute } from "next";
import { IS_PRODUCTION_SITE } from "@/lib/site-env";

export default function robots(): MetadataRoute.Robots {
  // Staging/önizleme: tüm yollar kapalı (production çıktısı aşağıda, değişmedi)
  if (!IS_PRODUCTION_SITE) return { rules: [{ userAgent: "*", disallow: "/" }] };
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/_next/", "/api/", "/admin"] }],
    sitemap: "https://portzenai.com/sitemap.xml"
  };
}
