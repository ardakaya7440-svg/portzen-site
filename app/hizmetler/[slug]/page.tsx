import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowUpRight, CheckCircle2, ChevronRight, ExternalLink, Server, ShieldAlert } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { Accordion } from "@/components/ui/accordion";
import { InfraCta } from "@/components/infra/InfraCta";
import {
  INFRA_HUB_HREF,
  INFRA_SERVICES,
  getInfraService,
  infraHref,
  infraWhatsAppText
} from "@/data/infra-services";
import { getAllPostsMeta } from "@/lib/blog";
import { pageRobots } from "@/lib/site-env";

const BASE = "https://portzenai.com";

// Yalnızca tanımlı altyapı hizmetleri üretilir; diğer slug'lar 404 (mevcut /hizmetler/* sayfaları statik klasörlerdir)
export const dynamicParams = false;

export function generateStaticParams() {
  return INFRA_SERVICES.map((s) => ({ slug: s.slug }));
}

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const { slug } = await props.params;
  const svc = getInfraService(slug);
  if (!svc) return {};
  const url = `${BASE}${infraHref(svc.slug)}`;
  return {
    title: { absolute: `${svc.metaTitle} — PORTZEN` },
    description: svc.metaDescription,
    alternates: { canonical: url },
    robots: pageRobots({ index: true, follow: true }),
    openGraph: {
      title: svc.metaTitle,
      description: svc.metaDescription,
      url,
      type: "website",
      siteName: "PORTZEN",
      locale: "tr_TR",
      images: [{ url: `${BASE}/og-image.png`, width: 1200, height: 630, alt: svc.title }]
    },
    twitter: {
      card: "summary_large_image",
      title: svc.metaTitle,
      description: svc.metaDescription,
      images: [`${BASE}/og-image.png`]
    }
  };
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-3 inline-block rounded-full border-3 border-ink/15 bg-slate px-3 py-1 text-xs font-black tracking-wider text-white shadow-brutal-sm">
      {children}
    </div>
  );
}

export default async function InfraServicePage(props: Props) {
  const { slug } = await props.params;
  const svc = getInfraService(slug);
  if (!svc) notFound();

  const url = `${BASE}${infraHref(svc.slug)}`;
  const message = infraWhatsAppText(svc);
  const allPosts = getAllPostsMeta();
  const posts = svc.relatedPosts
    .map((s) => allPosts.find((p) => p.slug === s))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));
  const related = svc.relatedServices
    .map((s) => getInfraService(s))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  // Schema yalnızca sayfada görünen içerikten üretilir (fiyat/puan/yorum yok)
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    name: svc.title,
    serviceType: svc.serviceType,
    description: svc.metaDescription,
    url,
    provider: { "@id": `${BASE}/#organization` },
    areaServed: { "@type": "Country", name: "Türkiye" },
    availableLanguage: "tr",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${svc.title} kapsamı`,
      itemListElement: svc.scope.map((item) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: item.title, description: item.description }
      }))
    }
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Anasayfa", item: BASE },
      { "@type": "ListItem", position: 2, name: "Sunucu ve Dijital Altyapı", item: `${BASE}${INFRA_HUB_HREF}` },
      { "@type": "ListItem", position: 3, name: svc.navLabel, item: url }
    ]
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: svc.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a }
    }))
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="bg-light py-section text-ink">
        <div className="mx-auto max-w-container px-6">
          <nav aria-label="Konum" className="mb-6 flex flex-wrap items-center gap-1 text-sm text-ink/60">
            <Link href="/" className="hover:underline">Anasayfa</Link>
            <ChevronRight className="h-3.5 w-3.5" aria-hidden />
            <Link href={INFRA_HUB_HREF} className="hover:underline">Sunucu ve Dijital Altyapı</Link>
            <ChevronRight className="h-3.5 w-3.5" aria-hidden />
            <span aria-current="page" className="text-ink/80">{svc.navLabel}</span>
          </nav>
          <Reveal>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border-3 border-ink/15 bg-paper px-3 py-1.5 shadow-brutal-sm">
              <Server className="h-4 w-4" aria-hidden />
              <span className="text-xs font-black uppercase tracking-wider">Sunucu ve Dijital Altyapı</span>
            </div>
          </Reveal>
          <h1 className="max-w-4xl font-display text-h1 font-black leading-tight">{svc.title}</h1>
          <p className="mt-6 max-w-prose text-body font-medium opacity-90">{svc.intro}</p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#detaylari-konusalim"
              className="inline-flex items-center gap-2 rounded-full border-3 border-ink/15 bg-slate px-5 py-3 text-sm font-bold text-white shadow-brutal transition-all hover:-translate-y-0.5"
            >
              Detayları Konuşalım <ArrowUpRight className="h-4 w-4" aria-hidden />
            </a>
            <span className="text-sm text-ink/70">Projenizin teknik ihtiyaçlarına ve kapsamına özel çözümler geliştiriyoruz.</span>
          </div>
        </div>
      </section>

      {/* Açıklama */}
      <section className="bg-white py-section">
        <div className="mx-auto grid max-w-container gap-10 px-6 lg:grid-cols-[280px_1fr]">
          <div><SectionLabel>Bu hizmet ne yapar?</SectionLabel></div>
          <div className="max-w-prose space-y-5 text-body text-ink/85">
            {svc.description.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {svc.notice && (
        <section className="bg-white pb-section">
          <div className="mx-auto max-w-container px-6">
            <div className="flex items-start gap-3 rounded-2xl border-3 border-ink/15 bg-light p-6 shadow-brutal-sm">
              <ShieldAlert className="mt-0.5 h-5 w-5 shrink-0 text-ink" aria-hidden />
              <p className="text-body text-ink/85"><strong className="font-bold">Kullanım çerçevesi: </strong>{svc.notice}</p>
            </div>
          </div>
        </section>
      )}

      {/* Çözülen problemler */}
      <section className="border-t-3 border-ink/10 bg-white py-section">
        <div className="mx-auto max-w-container px-6">
          <SectionLabel>Çözülen problemler</SectionLabel>
          <h2 className="mb-10 font-display text-h2 font-black leading-tight">Hangi sorunları ortadan kaldırır?</h2>
          <ul className="grid gap-3 md:grid-cols-2">
            {svc.problems.map((p, i) => (
              <li key={i} className="flex items-start gap-3 rounded-2xl border-3 border-ink/15 bg-paper p-4 shadow-brutal-sm">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-ink" aria-hidden />
                <span className="text-body text-ink/85">{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Kapsam */}
      <section className="bg-white py-section">
        <div className="mx-auto max-w-container px-6">
          <SectionLabel>Hizmet kapsamı</SectionLabel>
          <h2 className="mb-10 font-display text-h2 font-black leading-tight">Neleri üstleniyoruz?</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {svc.scope.map((s) => (
              <div key={s.title} className="rounded-2xl border-3 border-ink/15 bg-paper p-6 shadow-brutal">
                <h3 className="mb-2 font-display text-2xl font-black text-ink">{s.title}</h3>
                <p className="text-body text-ink/75">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kullanım senaryoları */}
      <section className="border-t-3 border-ink/10 bg-white py-section">
        <div className="mx-auto max-w-container px-6">
          <SectionLabel>Kullanım senaryoları</SectionLabel>
          <h2 className="mb-10 font-display text-h2 font-black leading-tight">Kimler, hangi iş için kullanır?</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {svc.useCases.map((u) => (
              <div key={u.title} className="rounded-2xl border-3 border-ink/15 bg-light p-6">
                <h3 className="mb-2 text-lg font-black text-ink">{u.title}</h3>
                <p className="text-[15px] leading-relaxed text-ink/75">{u.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Süreç */}
      <section className="bg-white py-section">
        <div className="mx-auto max-w-container px-6">
          <SectionLabel>Çalışma süreci</SectionLabel>
          <h2 className="mb-10 font-display text-h2 font-black leading-tight">Nasıl ilerliyoruz?</h2>
          <ol className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {svc.process.map((p, i) => (
              <li key={p.title} className="rounded-2xl border-3 border-ink/15 bg-paper p-6 shadow-brutal-sm">
                <div className="mb-3 font-display text-4xl font-black text-ink/30">{String(i + 1).padStart(2, "0")}</div>
                <h3 className="mb-2 text-lg font-black text-ink">{p.title}</h3>
                <p className="text-[15px] leading-relaxed text-ink/75">{p.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* SSS */}
      <section className="border-t-3 border-ink/10 bg-white py-section">
        <div className="mx-auto max-w-3xl px-6">
          <SectionLabel>Sık sorulan sorular</SectionLabel>
          <h2 className="mb-10 font-display text-h2 font-black leading-tight">{svc.navLabel} hakkında sorular</h2>
          <Accordion items={svc.faqs.map((f, i) => ({ id: `faq-${i}`, question: f.q, answer: f.a }))} />
        </div>
      </section>

      {/* İlgili içerik + dokümantasyon */}
      <section className="bg-white py-section">
        <div className="mx-auto grid max-w-container gap-10 px-6 lg:grid-cols-2">
          {posts.length > 0 && (
            <div>
              <SectionLabel>İlgili yazılar</SectionLabel>
              <ul className="mt-4 space-y-3">
                {posts.map((p) => (
                  <li key={p.slug}>
                    <Link
                      href={`/blog/${p.slug}`}
                      className="group flex items-start justify-between gap-4 rounded-2xl border-3 border-ink/15 bg-paper p-5 shadow-brutal-sm transition-all hover:shadow-brutal"
                    >
                      <span>
                        <span className="block font-bold text-ink group-hover:underline">{p.title}</span>
                        <span className="mt-1 block text-sm text-ink/65">{p.description}</span>
                      </span>
                      <ArrowUpRight className="h-5 w-5 shrink-0 text-ink" aria-hidden />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
          <div>
            <SectionLabel>Resmi dokümantasyon</SectionLabel>
            <ul className="mt-4 space-y-2">
              {svc.docs.map((d) => (
                <li key={d.url}>
                  <a
                    href={d.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-body font-semibold text-ink underline underline-offset-4 hover:no-underline"
                  >
                    {d.label} <ExternalLink className="h-4 w-4" aria-hidden />
                  </a>
                </li>
              ))}
            </ul>
            {related.length > 0 && (
              <>
                <div className="mt-10"><SectionLabel>İlgili hizmetler</SectionLabel></div>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {related.map((r) => (
                    <li key={r.slug}>
                      <Link
                        href={infraHref(r.slug)}
                        className="inline-flex rounded-full border-3 border-ink/15 bg-light px-4 py-2 text-sm font-bold text-ink hover:bg-lime"
                      >
                        {r.navLabel}
                      </Link>
                    </li>
                  ))}
                  <li>
                    <Link
                      href={INFRA_HUB_HREF}
                      className="inline-flex rounded-full border-3 border-ink/15 px-4 py-2 text-sm font-bold text-ink hover:bg-light"
                    >
                      Tüm altyapı hizmetleri
                    </Link>
                  </li>
                </ul>
              </>
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="detaylari-konusalim" className="scroll-mt-24 py-section">
        <div className="mx-auto max-w-container px-6">
          <InfraCta serviceTitle={svc.title} message={message} source={`altyapi-${svc.slug}`} />
        </div>
      </section>
    </>
  );
}
