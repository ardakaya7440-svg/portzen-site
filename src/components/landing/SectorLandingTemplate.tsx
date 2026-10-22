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
import { PricingSection, SinglePriceSection } from "@/components/pricing/PricingSection";
import { type FamilyId, PRICING, SINGLE, familyOffersSchema, familyPriceSummary, resolvePriceTokens, singleOffersSchema, singlePriceLabel } from "@/data/pricing";
import { serviceByHref } from "@/data/catalog";
import { ServiceAtAGlance } from "@/components/visual/ServiceAtAGlance";

/** Sektörel sayfadaki hizmetin merkezi fiyat ailesi */
const LANDING_FAMILY: Record<ServiceSlug, FamilyId[] | "instagram-dm"> = {
  "whatsapp-ai-asistani": ["ai-musteri-asistani"],
  "instagram-dm-otomasyonu": "instagram-dm",
  "ai-reklam-videosu": ["ai-reklam-filmi"],
  "web-tasarim": ["kurumsal-web-sitesi", "e-ticaret"],
  "crm-otomasyonu": ["is-otomasyonu"]
};

/** Merkezi fiyat kaynağından üretilen, her sektörel sayfada aynı olan fiyat soruları */
function pricingFaq(service: ServiceSlug): { question: string; answer: string }[] {
  const fam = LANDING_FAMILY[service];
  if (fam === "instagram-dm") {
    return [
      {
        question: "Instagram DM otomasyonunun fiyatı nedir?",
        answer: `${singlePriceLabel(SINGLE["instagram-dm"])} (KDV hariç). Otomasyon platformu aboneliği hariçtir. Bu hizmet kural tabanlıdır; serbest sorulara AI ile yanıt, AI müşteri asistanı kapsamındadır.`
      },
      {
        question: "Instagram'da AI ile serbest yanıt istersem fiyat nedir?",
        answer: `AI müşteri asistanı paketleri geçerlidir (KDV hariç): ${familyPriceSummary("ai-musteri-asistani")}. Instagram kanalı Kurumsal pakette dahildir.`
      }
    ];
  }
  const out = fam.map((id) => ({
    question: `${PRICING[id].title.replace(/ \(.*\)$/, "")} fiyatı nedir?`,
    answer: `Tutarlar KDV hariçtir: ${familyPriceSummary(id)}. ${PRICING[id].notes.join(" ")}`
  }));
  return out;
}

/** "Örnek senaryo:" rozeti zaten gösterildiği için başlıktaki tekrar önekini kaldırır */
function caseTitle(t: string): string {
  const s = t.replace(/^Örnek (senaryo|kurulum)\s*[:—–-]\s*/i, "");
  return s ? s.charAt(0).toLocaleUpperCase("tr-TR") + s.slice(1) : t;
}

export function landingFaq(service: ServiceSlug, data: SectorLandingData) {
  const own = data.faq.map((q) => ({ question: resolvePriceTokens(q.question), answer: resolvePriceTokens(q.answer) }));
  return [...own, ...pricingFaq(service)];
}

interface Props {
  service: ServiceSlug;
  data: SectorLandingData;
}

export function SectorLandingTemplate({ service, data }: Props) {
  const meta = SERVICE_META[service];
  const crossLinks = getCrossLinksForSector(service, data.sectorSlug);
  /** Ana hizmet sayfası katalogda varsa "Kısaca" bloğu gösterilir (ör. /ai-reklam-videosu katalogda yok). */
  const baseHref = `/${service}`;
  const showGlance = serviceByHref(baseHref) !== null;

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
            <div className="inline-flex items-center gap-2 border-3 border-ink/15 bg-paper text-ink px-3 py-1.5 shadow-brutal-sm mb-6 rounded-full">
              <Sparkles className="h-3.5 w-3.5" />
              <span className="text-xs font-black uppercase tracking-wider">
                {data.sectorName} için {meta.shortLabel}
              </span>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="font-display text-h1 font-black leading-tight max-w-4xl">
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
                className="inline-flex items-center gap-2 border-3 border-ink/15 bg-slate px-5 py-3 text-sm font-bold text-white shadow-brutal hover:shadow-brutal-lg transition-all rounded-full"
              >
                Ücretsiz Keşif Görüşmesi
                <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link
                href={`/${service}`}
                className="inline-flex items-center gap-2 border-3 border-ink/15 bg-paper px-5 py-3 text-sm font-bold text-ink shadow-brutal-sm hover:shadow-brutal transition-all rounded-full"
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
                  className="border-3 border-ink/15 bg-paper text-ink p-5 shadow-brutal rounded-2xl"
                >
                  <div className="font-display text-3xl font-black leading-none mb-1">{s.value}</div>
                  <div className="text-xs font-bold uppercase tracking-wider opacity-70">{s.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {showGlance && <ServiceAtAGlance href={baseHref} />}

      {/* PROBLEM */}
      <section className="bg-white text-ink py-section">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-10 max-w-3xl">
              <div className="inline-block border-3 border-ink/10 bg-slate text-white px-3 py-1 text-xs font-black tracking-wider mb-3 rounded-full">
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
                <div className="border-3 border-ink/10 bg-light p-5 rounded-2xl">
                  <p className="text-ink/90 leading-relaxed">{p}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUTION — 4 adım */}
      <section className="bg-white py-section">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-10 max-w-2xl">
              <div className="inline-block border-3 border-ink/15 bg-slate text-white px-3 py-1 text-xs font-black tracking-wider mb-3 shadow-brutal-sm rounded-full">
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
                <div className="border-3 border-ink/15 bg-paper p-6 shadow-brutal h-full rounded-2xl">
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
      <section className="bg-white py-section border-t-3 border-ink/15">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-10 max-w-2xl">
              <div className="inline-block border-3 border-ink/15 bg-slate px-3 py-1 text-xs font-black tracking-wider mb-3 shadow-brutal-sm rounded-full text-white">
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
                <div className="border-3 border-ink/15 bg-paper p-6 shadow-brutal h-full rounded-2xl">
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
              <div className="inline-block border-3 border-ink/15 bg-paper text-ink px-3 py-1 text-xs font-black tracking-wider mb-3 shadow-brutal-sm rounded-full">
                Örnek senaryo
              </div>
              <h2 className="font-display text-h2 font-black leading-tight">{caseTitle(data.caseStudy.title)}</h2>
              <p className="mt-3 text-sm opacity-70">
                Bu bölüm sistemin nasıl kurulduğunu anlatan örnek bir senaryodur; belirli bir müşterinin sonucu değildir.
              </p>
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
                  <div key={i} className="border border-ink/15 bg-paper text-ink p-5 rounded-2xl">
                    <div className="text-xs font-bold opacity-60 mb-3">{m.label}</div>
                    <dl className="space-y-2 text-sm">
                      <div>
                        <dt className="text-xs font-semibold opacity-60">Önce</dt>
                        <dd>{m.before}</dd>
                      </div>
                      <div>
                        <dt className="text-xs font-semibold opacity-60">Sistemle</dt>
                        <dd className="font-semibold">{m.after}</dd>
                      </div>
                    </dl>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FİYATLAR — kaynak: src/data/pricing.ts (sektörden bağımsız, tüm sayfalarda aynı) */}
      {LANDING_FAMILY[service] === "instagram-dm" ? (
        <>
          <SinglePriceSection
            id="instagram-dm"
            heading="Instagram DM otomasyonu fiyatı"
            intro="Kural tabanlı pazarlama otomasyonu: yorum, hikâye ve anahtar kelimeye otomatik DM. Bu sayfada anlatılan serbest sorulara AI ile yanıt, dil algılama, lead skorlama ve CRM/takvim entegrasyonları ayrı bir hizmet olan AI müşteri asistanı kapsamındadır; fiyatları hemen aşağıdadır. Tutarlar TL ve KDV hariçtir."
          />
          <PricingSection
            family="ai-musteri-asistani"
            id="ai-asistan"
            badge="AI müşteri asistanı"
            heading={`${data.sectorName} için Instagram'da AI yanıt: AI müşteri asistanı fiyatları`}
            intro="Instagram DM'lerine serbest metinle AI yanıtı, sohbet geçmişi ve entegrasyon gerekiyorsa bu paketler geçerlidir. Instagram kanalı Kurumsal pakette dahildir. Aylık ücretin altında kurulum bedeli ve ilk ay toplamı yazılıdır."
          />
        </>
      ) : (
        (LANDING_FAMILY[service] as FamilyId[]).map((id, i) => (
          <PricingSection
            key={id}
            family={id}
            id={i === 0 ? "fiyatlar" : id}
            badge={PRICING[id].title.replace(/ \(.*\)$/, "")}
            heading={`${data.sectorName} için ${PRICING[id].title.replace(/ \(.*\)$/, "").toLocaleLowerCase("tr-TR")} fiyatları`}
          />
        ))
      )}

      {/* FAQ */}
      <section className="bg-white text-ink py-section">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-10 max-w-2xl">
              <div className="inline-block border-3 border-ink/10 bg-slate text-white px-3 py-1 text-xs font-black tracking-wider mb-3 rounded-full">
                SSS
              </div>
              <h2 className="font-display text-h2 font-black leading-tight">
                {data.sectorName} için sıkça sorulan sorular
              </h2>
            </div>
          </Reveal>
          <div className="grid gap-5 lg:grid-cols-2">
            {landingFaq(service, data).map((q, i) => (
              <Reveal key={i} delay={i * 50}>
                <div className="border-3 border-ink/10 bg-light p-5 rounded-2xl">
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
        <section className="bg-white border-y-3 border-ink/15 py-12">
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
                    className="inline-flex items-center gap-2 border-3 border-ink/15 bg-paper px-3 py-2 text-sm font-bold text-ink shadow-brutal-sm hover:shadow-brutal transition-all rounded-full"
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
            <div className="border-3 border-ink/15 bg-light p-8 md:p-16 shadow-brutal-lg rounded-2xl">
              <div className="max-w-2xl">
                <h2 className="font-display text-h2 font-black leading-tight text-ink">
                  {data.finalCtaHeadline}
                </h2>
                <p className="mt-3 text-body text-ink/80">{data.finalCtaSubtitle}</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href="/iletisim"
                    className="inline-flex items-center gap-2 border-3 border-ink/15 bg-slate px-5 py-3 text-sm font-bold text-white shadow-brutal hover:shadow-brutal-lg transition-all rounded-full"
                  >
                    Projenizi Konuşalım
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                  <a
                    href="https://wa.me/905318639117"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border-3 border-ink/15 bg-paper px-5 py-3 text-sm font-bold text-ink shadow-brutal-sm hover:shadow-brutal transition-all rounded-full"
                  >
                    <MessageSquare className="h-4 w-4" />
                    WhatsApp ile Yaz
                  </a>
                  <a
                    href="tel:+905318639117"
                    className="inline-flex items-center gap-2 border-3 border-ink/15 bg-paper px-5 py-3 text-sm font-bold text-ink shadow-brutal-sm hover:shadow-brutal transition-all rounded-full"
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
    offers: (() => {
      const fam = LANDING_FAMILY[service];
      return fam === "instagram-dm"
        ? [
            ...singleOffersSchema(SINGLE["instagram-dm"]),
            ...familyOffersSchema(PRICING["ai-musteri-asistani"])
          ]
        : fam.flatMap((id) => familyOffersSchema(PRICING[id]));
    })()
  };
}

export function buildFaqSchema(data: SectorLandingData, service?: ServiceSlug) {
  const faq = service ? landingFaq(service, data) : data.faq;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((q) => ({
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
