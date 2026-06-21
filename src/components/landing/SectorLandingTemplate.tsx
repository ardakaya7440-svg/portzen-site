import Link from "next/link";
import {
  ArrowUpRight,
  CheckCircle2,
  ChevronRight,
  MessageSquare,
  Phone,
  Sparkles
} from "lucide-react";
import {
  SERVICE_META,
  TONE_BG,
  TONE_TEXT,
  getCrossLinksForSector,
  type SectorLandingData,
  type ServiceSlug
} from "@/lib/landings";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/reveal";

interface Props {
  service: ServiceSlug;
  data: SectorLandingData;
}

export function SectorLandingTemplate({ service, data }: Props) {
  const meta = SERVICE_META[service];
  const crossLinks = getCrossLinksForSector(service, data.sectorSlug);

  return (
    <>
      {/* HERO */}
      <section className={cn("relative overflow-hidden py-section", TONE_BG[meta.tone], TONE_TEXT[meta.tone])}>
        <div className="mx-auto max-w-container px-6">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6 text-sm opacity-80 flex items-center gap-1.5 flex-wrap">
            <Link href="/" className="hover:underline">Anasayfa</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link href={`/${service}`} className="hover:underline">{meta.label}</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="font-bold">{data.sectorName}</span>
          </nav>

          <Reveal>
            <div className="inline-flex items-center gap-2 border-3 border-ink bg-paper text-ink px-3 py-1.5 shadow-brutal-sm mb-6">
              <Sparkles className="h-3.5 w-3.5" />
              <span className="text-xs font-black uppercase tracking-wider">
                {data.sectorName} için {meta.shortLabel}
              </span>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="font-display text-h1 font-black leading-[0.95] max-w-4xl">
              {data.h1}
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-6 max-w-prose text-body opacity-90 font-medium">
              {data.heroSubtitle}
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="/iletisim"
                className="inline-flex items-center gap-2 border-3 border-ink bg-ink px-5 py-3 text-sm font-bold uppercase text-paper shadow-brutal hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-brutal-lg transition-all"
              >
                Ücretsiz Keşif Görüşmesi
                <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link
                href={`/${service}`}
                className="inline-flex items-center gap-2 border-3 border-ink bg-paper px-5 py-3 text-sm font-bold uppercase text-ink shadow-brutal-sm hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-brutal transition-all"
              >
                Genel {meta.shortLabel} Sayfası
              </Link>
            </div>
          </Reveal>

          {/* Stats */}
          <Reveal delay={400}>
            <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {data.stats.map((s, i) => (
                <div
                  key={i}
                  className="border-3 border-ink bg-paper text-ink p-5 shadow-brutal"
                >
                  <div className="font-display text-3xl font-black leading-none mb-1">{s.value}</div>
                  <div className="text-xs font-bold uppercase tracking-wider opacity-70">{s.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="bg-ink text-paper py-section">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-10 max-w-3xl">
              <div className="inline-block border-3 border-paper bg-brand-pink text-paper px-3 py-1 text-xs font-black uppercase tracking-wider mb-3 shadow-[6px_6px_0_#FFFDF5]">
                Tanıdık geliyor mu?
              </div>
              <h2 className="font-display text-h2 font-black leading-tight">
                {data.sectorPlural} her gün yaşıyor — siz de mi?
              </h2>
            </div>
          </Reveal>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {data.problems.map((p, i) => (
              <Reveal key={i} delay={i * 60}>
                <div className="border-3 border-paper bg-paper/5 p-5 shadow-[6px_6px_0_#FFFDF5]">
                  <p className="text-paper/90 leading-relaxed">{p}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUTION — 4 adım */}
      <section className="bg-paper py-section">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-10 max-w-2xl">
              <div className="inline-block border-3 border-ink bg-brand-green text-paper px-3 py-1 text-xs font-black uppercase tracking-wider mb-3 shadow-brutal-sm">
                Çözüm
              </div>
              <h2 className="font-display text-h2 font-black leading-tight text-ink">
                {data.sectorName} için nasıl kuruyoruz?
              </h2>
            </div>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {data.solutionSteps.map((step, i) => (
              <Reveal key={i} delay={i * 70}>
                <div className="border-3 border-ink bg-paper p-6 shadow-brutal h-full">
                  <div className="font-display text-5xl font-black leading-none mb-3 text-ink/15">
                    0{i + 1}
                  </div>
                  <h3 className="font-display text-lg font-black leading-tight mb-2 text-ink">{step.title}</h3>
                  <p className="text-sm text-ink/70 leading-relaxed">{step.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES — 6 kart */}
      <section className="bg-paper py-section border-t-3 border-ink">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-10 max-w-2xl">
              <div className="inline-block border-3 border-ink bg-brand-yellow px-3 py-1 text-xs font-black uppercase tracking-wider mb-3 shadow-brutal-sm">
                Sistem içeriği
              </div>
              <h2 className="font-display text-h2 font-black leading-tight text-ink">
                {data.sectorName} sistemine dahil olanlar
              </h2>
            </div>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {data.features.map((f, i) => (
              <Reveal key={i} delay={i * 50}>
                <div className="border-3 border-ink bg-paper p-6 shadow-brutal h-full">
                  <CheckCircle2 className="h-6 w-6 mb-3 text-ink" />
                  <h3 className="font-display text-lg font-black leading-tight mb-2 text-ink">{f.title}</h3>
                  <p className="text-sm text-ink/70 leading-relaxed">{f.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CASE STUDY */}
      <section className={cn("py-section", TONE_BG[meta.tone], TONE_TEXT[meta.tone])}>
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-10 max-w-3xl">
              <div className="inline-block border-3 border-ink bg-paper text-ink px-3 py-1 text-xs font-black uppercase tracking-wider mb-3 shadow-brutal-sm">
                Vaka Çalışması
              </div>
              <h2 className="font-display text-h2 font-black leading-tight">{data.caseStudy.title}</h2>
            </div>
          </Reveal>

          <div className="grid gap-10 lg:grid-cols-[1fr_320px]">
            <Reveal delay={100}>
              <div className="space-y-4 max-w-prose">
                {data.caseStudy.paragraphs.map((p, i) => (
                  <p key={i} className="text-body opacity-90 leading-relaxed">{p}</p>
                ))}
              </div>
            </Reveal>
            <Reveal delay={200}>
              <div className="space-y-4">
                {data.caseStudy.beforeAfter.map((m, i) => (
                  <div key={i} className="border-3 border-ink bg-paper text-ink p-5 shadow-brutal">
                    <div className="text-xs font-bold uppercase tracking-wider opacity-60 mb-2">{m.label}</div>
                    <div className="text-sm line-through opacity-60">{m.before}</div>
                    <div className="font-display text-2xl font-black mt-1">{m.after}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="bg-paper py-section">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-10 max-w-2xl">
              <div className="inline-block border-3 border-ink bg-brand-blue text-paper px-3 py-1 text-xs font-black uppercase tracking-wider mb-3 shadow-brutal-sm">
                Şeffaf Fiyatlandırma
              </div>
              <h2 className="font-display text-h2 font-black leading-tight text-ink">
                {data.sectorName} paketleri
              </h2>
              <p className="mt-3 text-body text-ink/70 max-w-prose">
                Net fiyat, gizli ücret yok. Sektörünüze göre hangi paketin uygun olduğunu 15 dakikada netleştirelim.
              </p>
            </div>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-3">
            {data.pricing.map((p, i) => (
              <Reveal key={i} delay={i * 80}>
                <div
                  className={cn(
                    "border-3 border-ink p-6 shadow-brutal h-full flex flex-col",
                    p.highlighted ? "bg-brand-yellow shadow-brutal-lg -translate-y-2" : "bg-paper"
                  )}
                >
                  {p.highlighted && (
                    <div className="inline-block border-3 border-ink bg-ink text-paper px-2 py-0.5 text-xs font-black uppercase tracking-wider mb-3 self-start">
                      Öneri
                    </div>
                  )}
                  <h3 className="font-display text-xl font-black leading-tight mb-1 text-ink">{p.name}</h3>
                  <div className="font-display text-3xl font-black leading-none mb-3 text-ink">{p.price}</div>
                  <p className="text-sm text-ink/70 mb-5">{p.description}</p>
                  <ul className="space-y-2 text-sm text-ink/85 mb-6 flex-1">
                    {p.features.map((f, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 mt-0.5 flex-shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/iletisim"
                    className="inline-flex items-center justify-center gap-2 border-3 border-ink bg-ink px-4 py-2.5 text-sm font-bold uppercase text-paper shadow-brutal-sm hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-brutal transition-all"
                  >
                    Bu Paketi Seç
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-ink text-paper py-section">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-10 max-w-2xl">
              <div className="inline-block border-3 border-paper bg-brand-yellow text-ink px-3 py-1 text-xs font-black uppercase tracking-wider mb-3 shadow-[6px_6px_0_#FFFDF5]">
                SSS
              </div>
              <h2 className="font-display text-h2 font-black leading-tight">
                {data.sectorName} için sıkça sorulan sorular
              </h2>
            </div>
          </Reveal>
          <div className="grid gap-5 lg:grid-cols-2">
            {data.faq.map((q, i) => (
              <Reveal key={i} delay={i * 50}>
                <div className="border-3 border-paper bg-paper/5 p-5 shadow-[6px_6px_0_#FFFDF5]">
                  <h3 className="font-display text-lg font-black leading-tight mb-2">{q.question}</h3>
                  <p className="text-sm opacity-85 leading-relaxed">{q.answer}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CROSS-LINK STRIP — başka sektör/hizmetlere yönlendir */}
      {crossLinks.length > 0 && (
        <section className="bg-paper border-y-3 border-ink py-12">
          <div className="mx-auto max-w-container px-6">
            <Reveal>
              <div className="text-xs font-black uppercase tracking-wider text-ink/60 mb-4">
                {data.sectorName} için diğer hizmetlerimiz
              </div>
              <div className="flex flex-wrap gap-3">
                {crossLinks.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className="inline-flex items-center gap-2 border-3 border-ink bg-paper px-3 py-2 text-sm font-bold text-ink shadow-brutal-sm hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-brutal transition-all"
                  >
                    {l.label}
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                ))}
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {/* FINAL CTA */}
      <section className="py-section">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="border-3 border-ink bg-brand-yellow p-8 md:p-16 shadow-brutal-lg">
              <div className="max-w-2xl">
                <h2 className="font-display text-h2 font-black leading-tight text-ink">
                  {data.finalCtaHeadline}
                </h2>
                <p className="mt-3 text-body text-ink/80">{data.finalCtaSubtitle}</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href="/iletisim"
                    className="inline-flex items-center gap-2 border-3 border-ink bg-ink px-5 py-3 text-sm font-bold uppercase text-paper shadow-brutal hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-brutal-lg transition-all"
                  >
                    Ücretsiz Görüşme Al
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                  <a
                    href="https://wa.me/905318639117"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border-3 border-ink bg-paper px-5 py-3 text-sm font-bold uppercase text-ink shadow-brutal-sm hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-brutal transition-all"
                  >
                    <MessageSquare className="h-4 w-4" />
                    WhatsApp ile Yaz
                  </a>
                  <a
                    href="tel:+905318639117"
                    className="inline-flex items-center gap-2 border-3 border-ink bg-paper px-5 py-3 text-sm font-bold uppercase text-ink shadow-brutal-sm hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-brutal transition-all"
                  >
                    <Phone className="h-4 w-4" />
                    0531 863 91 17
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

/* Schema JSON builders — page.tsx içinde kullanılır */

export function buildServiceSchema(service: ServiceSlug, data: SectorLandingData) {
  const meta = SERVICE_META[service];
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${data.sectorName} için ${meta.label}`,
    description: data.description,
    provider: {
      "@type": "Organization",
      name: "PORTZEN",
      url: "https://portzenai.com",
      areaServed: { "@type": "Country", name: "Turkey" }
    },
    serviceType: meta.label,
    areaServed: { "@type": "Country", name: "Turkey" },
    offers: data.pricing.map((p) => ({
      "@type": "Offer",
      name: p.name,
      price: p.price.replace(/[^0-9]/g, "") || "0",
      priceCurrency: "TRY",
      description: p.description
    }))
  };
}

export function buildFaqSchema(data: SectorLandingData) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: data.faq.map((q) => ({
      "@type": "Question",
      name: q.question,
      acceptedAnswer: { "@type": "Answer", text: q.answer }
    }))
  };
}

export function buildBreadcrumbSchema(service: ServiceSlug, data: SectorLandingData) {
  const meta = SERVICE_META[service];
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Anasayfa", item: "https://portzenai.com" },
      { "@type": "ListItem", position: 2, name: meta.label, item: `https://portzenai.com/${service}` },
      {
        "@type": "ListItem",
        position: 3,
        name: data.sectorName,
        item: `https://portzenai.com/${service}/${data.sectorSlug}`
      }
    ]
  };
}
