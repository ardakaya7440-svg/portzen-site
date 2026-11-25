import Link from "next/link";
import type { Metadata } from "next";
import { ArrowUpRight, Server } from "lucide-react";
import { InfraCta } from "@/components/infra/InfraCta";
import { INFRA_HUB_HREF, INFRA_SERVICES, infraHref } from "@/data/infra-services";
import { pageRobots } from "@/lib/site-env";

const BASE = "https://portzenai.com";
const URL_ = `${BASE}${INFRA_HUB_HREF}`;
const TITLE = "Sunucu ve Dijital Altyapı Hizmetleri";
const DESC =
  "Linux sunucu kurulumu, VPS/VDS yönetimi, Docker ve Coolify, .onion siteler, Telegram ve Discord botları, n8n ve yapay zekâ ajanı barındırma hizmetleri.";

export const metadata: Metadata = {
  title: { absolute: `${TITLE} — PORTZEN` },
  description: DESC,
  alternates: { canonical: URL_ },
  robots: pageRobots({ index: true, follow: true }),
  openGraph: {
    title: TITLE,
    description: DESC,
    url: URL_,
    type: "website",
    siteName: "PORTZEN",
    locale: "tr_TR",
    images: [{ url: `${BASE}/og-image.png`, width: 1200, height: 630, alt: TITLE }]
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESC, images: [`${BASE}/og-image.png`] }
};

/** Hizmetler sayfada gruplanır (her slug tam bir kez) */
const GROUPS: { title: string; intro: string; slugs: string[] }[] = [
  {
    title: "Sunucu ve hosting",
    intro: "Sunucunun kurulumundan günlük bakımına, taşınmasından barındırma mimarisine kadar.",
    slugs: ["sunucu-kurulumu", "vps-vds-yonetimi", "hosting-cozumleri", "sunucu-bakim-guvenlik", "bulut-sunucu-migrasyonu"]
  },
  {
    title: "Konteyner ve deployment",
    intro: "Uygulamaları tekrarlanabilir biçimde paketleyip güvenli şekilde yayına almak için.",
    slugs: ["coolify-kurulumu", "ci-cd-otomatik-deployment", "self-hosted-yazilim-kurulumu"]
  },
  {
    title: "Tor ve onion hizmetleri",
    intro: "Mahremiyet, kaynak koruma ve sansüre dayanıklı yayın için yasal kullanım çerçevesinde.",
    slugs: ["onion-web-sitesi", "tor-onion-service-kurulumu"]
  },
  {
    title: "Bot, otomasyon ve yapay zekâ",
    intro: "Mesajlaşma botları, iş akışı altyapısı, entegrasyonlar ve yapay zekâ ajanlarının barındırılması.",
    slugs: ["telegram-bot-gelistirme", "discord-bot-gelistirme", "n8n-otomasyon-altyapisi", "api-entegrasyonu", "yapay-zeka-ajani-hosting"]
  }
];

export default function InfraHubPage() {
  const bySlug = new Map(INFRA_SERVICES.map((s) => [s.slug, s]));
  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: TITLE,
    itemListElement: INFRA_SERVICES.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `${BASE}${infraHref(s.slug)}`,
      name: s.title
    }))
  };
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Anasayfa", item: BASE },
      { "@type": "ListItem", position: 2, name: "Sunucu ve Dijital Altyapı", item: URL_ }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      <section className="bg-light py-section text-ink">
        <div className="mx-auto max-w-container px-6">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border-3 border-ink/15 bg-paper px-3 py-1.5 shadow-brutal-sm">
            <Server className="h-4 w-4" aria-hidden />
            <span className="text-xs font-black uppercase tracking-wider">Hizmet Kategorisi</span>
          </div>
          <h1 className="max-w-4xl font-display text-h1 font-black leading-tight">{TITLE}</h1>
          <p className="mt-6 max-w-prose text-body font-medium opacity-90">
            PORTZEN; Linux sunucu kurulumu, VPS ve VDS yönetimi, Docker ve Coolify ile deployment, Tor onion servisleri,
            Telegram ve Discord botları, self-hosted n8n ve yapay zekâ ajanlarının barındırılması gibi altyapı işlerini
            üstlenir. Her proje, ihtiyaç ve kapsam netleştikten sonra yazılı teklifle başlar.
          </p>
        </div>
      </section>

      {GROUPS.map((g) => (
        <section key={g.title} className="border-t-3 border-ink/10 bg-white py-section">
          <div className="mx-auto max-w-container px-6">
            <h2 className="font-display text-h2 font-black leading-tight">{g.title}</h2>
            <p className="mb-8 mt-2 max-w-prose text-body text-ink/70">{g.intro}</p>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {g.slugs.map((slug) => {
                const s = bySlug.get(slug);
                if (!s) return null;
                return (
                  <Link
                    key={s.slug}
                    href={infraHref(s.slug)}
                    className="group flex flex-col justify-between rounded-2xl border-3 border-ink/15 bg-paper p-6 shadow-brutal transition-all hover:shadow-brutal-lg"
                  >
                    <div>
                      <h3 className="mb-2 font-display text-xl font-black text-ink">{s.navLabel}</h3>
                      <p className="text-[15px] leading-relaxed text-ink/70">{s.short}</p>
                    </div>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-ink group-hover:gap-2">
                      İncele <ArrowUpRight className="h-4 w-4" aria-hidden />
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      ))}

      <section className="py-section">
        <div className="mx-auto max-w-container px-6">
          <InfraCta
            message="Merhaba, sunucu ve dijital altyapı hizmetleriniz hakkında detayları konuşmak istiyorum."
            source="altyapi-hub"
          />
        </div>
      </section>
    </>
  );
}
