import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowUpRight,
  ArrowRight,
  CheckCircle2,
  XCircle,
  Sparkles,
  Smartphone,
  Gauge,
  ShieldCheck,
  Search,
  Code2,
  ShoppingBag,
  LayoutTemplate,
  Building2,
  Star,
  TrendingUp,
  Phone,
  MessageCircle,
  Mail,
  MapPin,
} from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";
import { RelatedSectorsSection } from "@/components/landing/RelatedSectorsSection";
import { RelatedLocationsSection } from "@/components/landing/RelatedLocationsSection";
import { PricingSection, WebExtrasSection } from "@/components/pricing/PricingSection";
import { ServiceAtAGlance } from "@/components/visual/ServiceAtAGlance";
import { MoreDetails } from "@/components/visual/MoreDetails";
import { PRICING, SINGLE, familyOffersSchema, familyPriceSummary, singlePriceLabel } from "@/data/pricing";

const URL = "https://portzenai.com/web-tasarim";
const TITLE = "Web Tasarım | Marka Sitesi & Landing Page — PORTZEN";
const DESCRIPTION =
  "İzmir merkezli web tasarım ajansı. Mobil uyumlu, hızlı ve SEO uyumlu landing page, kurumsal web sitesi ve e-ticaret çözümleri. Yazılı paket fiyatları; teslim süresi kapsama göre teklifte yazılı. Ücretsiz görüşme alın.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "web tasarım",
    "web tasarım izmir",
    "kurumsal web sitesi",
    "landing page tasarımı",
    "profesyonel web sitesi",
    "mobil uyumlu web sitesi",
    "e-ticaret web tasarım",
    "next.js web tasarım",
    "react web sitesi",
  ],
  openGraph: {
    type: "website",
    url: URL,
    title: TITLE,
    description: DESCRIPTION,
    locale: "tr_TR",
    siteName: "PORTZEN",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
  alternates: { canonical: URL },
  robots: { index: true, follow: true },
};

// JSON-LD structured data
const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Web Tasarım",
  provider: {
    "@type": "LocalBusiness",
    name: "PORTZEN",
    image: "https://portzenai.com/og-image.png",
    url: "https://portzenai.com",
    telephone: "+90-531-863-91-17",
    email: "destek@portzenai.com",
    address: { "@type": "PostalAddress", addressLocality: "İzmir", addressCountry: "TR" },
  },
  areaServed: { "@type": "Country", name: "Türkiye" },
  description: DESCRIPTION,
  offers: [...familyOffersSchema(PRICING["kurumsal-web-sitesi"]), ...familyOffersSchema(PRICING["e-ticaret"])],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Web tasarım fiyatları ne kadar?",
      acceptedAnswer: {
        "@type": "Answer",
        text: `Fiyatlarımız yazılıdır (KDV hariç, proje başı). Landing page ${singlePriceLabel(SINGLE["landing-page"])}. Kurumsal web sitesi: ${familyPriceSummary("kurumsal-web-sitesi")}. E-ticaret sitesi: ${familyPriceSummary("e-ticaret")}. Hosting, alan adı, çeviri ve harici lisanslar hariçtir.`,
      },
    },
    {
      "@type": "Question",
      name: "Web sitemi kaç günde teslim ediyorsunuz?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Teslim süresi landing page, kurumsal site veya e-ticaret kapsamına göre teklifte yazılı olarak belirtilir. İçeriğin (metin + görsel) zamanında gelmesi takvimin korunması için önemlidir.",
      },
    },
    {
      "@type": "Question",
      name: "Hangi teknolojiyi kullanıyorsunuz, WordPress mi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "WordPress kullanmıyoruz. Tüm sitelerimizi Next.js + React ile geliştiriyoruz. Eklenti şişmesi olmadığı için site belirgin şekilde daha hızlı ve güvenli çalışıyor. Lighthouse skorunda 90+ hedefliyoruz.",
      },
    },
    {
      "@type": "Question",
      name: "Mobil uyumlu mu?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tüm projelerimiz mobile-first prensibiyle tasarlanır. Önce mobil, sonra tablet, en son masaüstü. Trafiğin büyük kısmının mobilden geldiğini biliyoruz.",
      },
    },
    {
      "@type": "Question",
      name: "İzmir dışındaki firmalarla çalışıyor musunuz?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Evet. Merkezimiz İzmir'de; İstanbul, Ankara, Bursa, Antalya dahil Türkiye'nin her şehrindeki firmalarla tüm süreci uzaktan yönetebiliyoruz. Görüşmeler Google Meet üzerinden yapılır.",
      },
    },
    {
      "@type": "Question",
      name: "Site teslim edildikten sonra ben mi güncelleyeceğim?",
      acceptedAnswer: {
        "@type": "Answer",
        text: `İki seçenek sunuyoruz: (1) Büyüme ve Kurumsal paketlerde kendi panelinizden içerik güncelleyebileceğiniz bir CMS kuruyoruz, (2) aylık web bakımıyla güncellemeleri biz yapıyoruz: ${familyPriceSummary("web-bakim")}, KDV hariç. Saatler o paketin aylık toplam hakkıdır, birbirine eklenmez ve devretmez; yeni modül ve kapsamlı tasarım ayrıca tekliflendirilir.`,
      },
    },
    {
      "@type": "Question",
      name: "SEO çalışması da yapıyor musunuz?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SEO temeli her pakette dahil: sitemap, robots.txt, meta etiketleri, Open Graph, sayfa hızı optimizasyonu. Schema markup dahil teknik SEO Büyüme ve Kurumsal paketlerde yer alır. İçerik SEO'su (blog yazıları, keyword araştırması) ayrı paket olarak sunulur.",
      },
    },
  ],
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: "https://portzenai.com" },
    { "@type": "ListItem", position: 2, name: "Web Tasarım", item: URL },
  ],
};

export default function WebTasarimPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* 1. HERO */}
      <section className="bg-white py-section border-b-3 border-ink/15">
        <div className="mx-auto max-w-container px-6">
          {/* Breadcrumb */}
          <Reveal>
            <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-ink/70">
              <Link href="/" className="hover:text-ink">Ana Sayfa</Link>
              <span>/</span>
              <span className="text-ink">Web Tasarım</span>
            </nav>
          </Reveal>

          <div className="grid lg:grid-cols-[1.4fr_1fr] gap-10 lg:gap-16 items-start">
            <div>
              <Reveal delay={50}>
                <div className="inline-flex items-center gap-2 border-3 border-ink/15 bg-lime px-3 py-1.5 shadow-brutal-sm mb-6 rounded-full">
                  <Sparkles className="h-4 w-4" />
                  <span className="text-xs font-black uppercase tracking-wider">Web Tasarım Ajansı — İzmir</span>
                </div>
              </Reveal>

              <Reveal delay={100}>
                <h1 className="font-display text-h1 font-black leading-tight text-ink">
                  Web Tasarım | Marka Sitesi, Landing Page, E-Ticaret
                </h1>
              </Reveal>

              <Reveal delay={200}>
                <p className="mt-6 max-w-prose text-body text-ink/80 font-medium">
                  Mobil uyumlu, hızlı yüklenen ve dönüşüm odaklı{" "}
                  <strong className="text-ink">profesyonel web sitesi</strong> tasarımı. WordPress değil — Next.js + React ile geliştiriyoruz. KOBİ, butik marka ve dijital girişimciler için yazılı paket fiyatı, teklifte yazılı teslim takvimi.
                </p>
              </Reveal>

              <Reveal delay={300}>
                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/iletisim"
                    className="inline-flex items-center justify-center gap-2 border-3 border-ink/15 bg-slate px-6 py-3.5 text-sm font-black text-white shadow-brutal hover:shadow-brutal-lg transition-all rounded-full"
                  >
                    Ücretsiz Teklif Al <ArrowUpRight className="h-4 w-4" />
                  </Link>
                  <a
                    href="https://wa.me/905318639117"
                    target="_blank"
                    rel="noopener"
                    className="inline-flex items-center justify-center gap-2 border-3 border-ink/15 bg-slate px-6 py-3.5 text-sm font-black text-white shadow-brutal hover:shadow-brutal-lg transition-all rounded-full"
                  >
                    <MessageCircle className="h-4 w-4" /> WhatsApp ile Konuş
                  </a>
                </div>
              </Reveal>

              <Reveal delay={400}>
                <div className="mt-6 flex flex-wrap gap-4 text-xs font-bold uppercase tracking-wider text-ink/70">
                  <span className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-ink" /> Sabit Fiyat</span>
                  <span className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-ink" /> Teslim Takvimi Teklifte</span>
                  <span className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-ink" /> Lighthouse 90+ Hedefi</span>
                </div>
              </Reveal>
            </div>

            {/* Right: Stat grid */}
            <Reveal delay={350}>
              <div className="grid grid-cols-2 gap-4">
                <div className="border-3 border-ink/15 bg-light p-5 shadow-brutal rounded-2xl">
                  <div className="font-display text-5xl font-black text-ink leading-none">Next.js</div>
                  <div className="mt-2 text-xs font-bold uppercase tracking-wider text-ink/90">Altyapı (WordPress değil)</div>
                </div>
                <div className="border-3 border-ink/15 bg-light p-5 shadow-brutal rounded-2xl">
                  <div className="font-display text-5xl font-black text-ink leading-none">Mobil</div>
                  <div className="mt-2 text-xs font-bold uppercase tracking-wider text-ink/90">Öncelikli tasarım</div>
                </div>
                <div className="border-3 border-ink/15 bg-light p-5 shadow-brutal rounded-2xl">
                  <div className="font-display text-5xl font-black text-ink leading-none">90+</div>
                  <div className="mt-2 text-xs font-bold uppercase tracking-wider text-ink/85">Lighthouse hedefi, her projede</div>
                </div>
                <div className="border-3 border-ink/15 bg-light p-5 shadow-brutal rounded-2xl">
                  <div className="font-display text-5xl font-black text-ink leading-none">SEO</div>
                  <div className="mt-2 text-xs font-bold uppercase tracking-wider text-ink/90">Temel SEO her pakette</div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <ServiceAtAGlance href="/web-tasarim" />

      {/* 2. CANLI ÖRNEK — video showcase */}
      <section className="bg-white py-section border-b-3 border-ink/15">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-8 max-w-2xl">
              <div className="inline-block border-3 border-ink/15 bg-slate text-white px-3 py-1 text-xs font-black tracking-wider mb-3 shadow-brutal-sm rounded-full">
                Canlı Örnek
              </div>
              <h2 className="font-display text-h2 font-black leading-tight text-ink">
                Yaptığımız iş nasıl görünüyor?
              </h2>
              <p className="mt-3 text-body text-ink/70">
                Bir brasserie restoran için hazırlanan örnek web sitesi. Online rezervasyon,
                dijital menü, Google Maps entegrasyonu, atmosfer galerisi. Aşağıda canlı ekran kaydı.
              </p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="border-3 border-ink/15 bg-paper shadow-brutal-lg overflow-hidden rounded-2xl">
              <div className="relative border-b-3 border-ink/15 bg-light aspect-video">
                <video
                  src="/assets/videos/referanslar/restoran-web-ornegi.mp4"
                  poster="/assets/videos/referanslar/restoran-web-ornegi-poster.jpg"
                  autoPlay
                  loop
                  muted
                  playsInline
                  controls
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="p-6 md:p-8 grid gap-6 lg:grid-cols-[1fr_1.2fr]">
                <div>
                  <div className="inline-flex items-center gap-2 border-3 border-ink/15 bg-lime text-ink px-3 py-1.5 shadow-brutal-sm mb-4 rounded-full">
                    <Building2 className="h-4 w-4" />
                    <span className="text-xs font-black uppercase tracking-wider">Restoran</span>
                  </div>
                  <h3 className="font-display text-2xl md:text-3xl font-black leading-tight text-ink mb-2">
                    Restoran web sitesi örneği
                  </h3>
                  <p className="text-body text-ink/70 mb-5">
                    Online rezervasyon + dijital menü + atmosfer galerisi. Rezervasyon talebi
                    telefon yerine siteden geliyor, menü tek yerden güncelleniyor.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Link
                      href="/web-tasarim/restoran"
                      className="inline-flex items-center gap-2 border-3 border-ink/15 bg-slate px-4 py-2.5 text-sm font-bold text-white shadow-brutal hover:shadow-brutal-lg transition-all rounded-full"
                    >
                      Restoran Web Tasarım
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>
                    <Link
                      href="/referanslar"
                      className="inline-flex items-center gap-2 border-3 border-ink/15 bg-paper px-4 py-2.5 text-sm font-bold text-ink shadow-brutal-sm hover:shadow-brutal transition-all rounded-full"
                    >
                      Tüm Referanslar
                    </Link>
                  </div>
                </div>

                <div className="grid gap-3">
                  <div className="text-xs font-black uppercase tracking-wider text-ink/50 mb-1">
                    Önce / sonra
                  </div>
                  {[
                    { label: "Rezervasyon", before: "Telefonla", after: "Online form" },
                    { label: "Menü", before: "PDF", after: "Dijital menü" },
                    { label: "Konum", before: "Adres metni", after: "Google Maps" }
                  ].map((s, j) => (
                    <div
                      key={j}
                      className={cn(
                        "border-3 border-ink/15 p-4 shadow-brutal-sm flex items-center justify-between gap-3 rounded-2xl",
                        j === 1 ? "bg-light text-ink" : "bg-light text-ink"
                      )}
                    >
                      <div className="text-xs font-bold uppercase tracking-wider opacity-80">
                        {s.label}
                      </div>
                      <div className="flex items-center gap-2 font-display font-black leading-none">
                        <span className="text-sm opacity-60 line-through">{s.before}</span>
                        <ArrowRight className="h-4 w-4 opacity-60" />
                        <span className="text-xl md:text-2xl">{s.after}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <MoreDetails title="Ayrıntılar: Siteniz neden satmıyor olabilir?" summary="Mobil, hız, SEO ve yönlendirme sorunları">
      {/* 3. PROBLEM */}
      <section className="bg-white text-ink py-section">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="inline-block border-3 border-ink/10 bg-slate text-white px-3 py-1 text-xs font-black tracking-wider mb-4 rounded-full">
              Tanıdık geliyor mu?
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-display text-h2 font-black leading-tight max-w-3xl mb-12">
              Şu an web siteniz var ama satmıyor mu? Belki de sorun bunlardan biri.
            </h2>
          </Reveal>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Mobilde berbat görünüyor",
                body: "Müşteri telefonundan açıyor, yazılar üst üste biniyor, buton bulunamıyor. Trafiğin büyük kısmı mobilden ama site masaüstüne göre tasarlanmış.",
              },
              {
                title: "Sayfalar yavaş açılıyor",
                body: "Google'a göre mobil sayfanın yüklenmesi 3 saniyeyi geçerse ziyaretlerin yarısından fazlası terk ediliyor. Eski tema, kötü hosting, optimize edilmemiş görseller hız öldürüyor.",
              },
              {
                title: "Google'da görünmüyor",
                body: "Şirket adınızla aratıldığında bile rakipler önde. Teknik SEO yok, schema yok, sitemap yok. Google sitenizi okuyamıyor.",
              },
              {
                title: "Müşteri ne yapacağını anlamıyor",
                body: "Sayfaya giren ziyaretçi 'şimdi ne olacak?' diye düşünüyor. Net bir CTA yok, telefon numarası dipte, form 12 alan istiyor.",
              },
              {
                title: "Tema şablonu kokuyor",
                body: "Aynı WordPress temasını kullanan binlerce site var. Markanız bir kasaba pizzacısına benziyor. Kurumsallık ve güven kaybı.",
              },
              {
                title: "Güncelleme korkutuyor",
                body: "Bir cümle değiştirmek için ajansa para vermek gerekiyor. Plugin güncellemesi sitenizi çökertiyor. Yedek yok, panik var.",
              },
            ].map((p, i) => (
              <Reveal key={i} delay={i * 60}>
                <div className="border-3 border-ink/10 bg-light p-6 h-full rounded-2xl">
                  <XCircle className="h-6 w-6 text-ink mb-3" />
                  <h3 className="font-display text-xl font-black mb-2">{p.title}</h3>
                  <p className="text-sm text-ink/75 leading-relaxed">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      </MoreDetails>
      {/* 4. FEATURES */}
      <section className="bg-white py-section border-t-3 border-ink/10">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="inline-block border-3 border-ink/15 bg-slate text-white px-3 py-1 text-xs font-black tracking-wider mb-4 shadow-brutal-sm rounded-full">
              Standart özellikler
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-display text-h2 font-black leading-tight max-w-3xl mb-12 text-ink">
              Paketlerdeki temel özellikler.
            </h2>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: Smartphone, color: "bg-light", title: "Mobil-First Tasarım", body: "Telefon, tablet, masaüstü — her ekran boyutunda kusursuz. Trafiğin çoğunluğu mobilden geliyor, biz de oradan başlıyoruz." },
              { icon: Gauge, color: "bg-light", title: "Lighthouse 90+ Hedefi", body: "Görsel optimizasyonu, lazy loading, edge caching, CDN. Sayfanın 2 saniyenin altında açılması hedeflenir — Google bunu seviyor, müşteriniz de." },
              { icon: Search, color: "bg-light", title: "SEO Temeli Hazır", body: "Sitemap, robots.txt, meta etiketleri, Open Graph her pakette; schema markup dahil teknik SEO Büyüme ve Kurumsal paketlerde. Google'ın sayfanızı doğru indekslemesi için gereken temel hazırlanır." },
              { icon: ShieldCheck, color: "bg-light", title: "Güvenli & SSL", body: "Plugin yok = eklenti kaynaklı güvenlik açığı yok. SSL otomatik, DDoS koruması Vercel/Cloudflare üzerinden." },
              { icon: LayoutTemplate, color: "bg-light", title: "Markanıza Uyarlanan Tasarım", body: "Başlangıç paketinde standart bileşenler markanızın renk ve tipografisine uyarlanır; Büyüme paketinde markaya özel sayfa şablonları, Kurumsal pakette tamamen özel tasarım. Aynı temayı kullanan binlerce site arasında kaybolmazsınız." },
              { icon: Code2, color: "bg-light", title: "Modern Teknoloji Stack'i", body: "Next.js 14 + React + TypeScript + Tailwind. Eklenti ve tema şişmesi yok, kod tabanı size özel. Edge deployment ile dünya çapında hızlı." },
            ].map((f, i) => (
              <Reveal key={i} delay={i * 60}>
                <div className="border-3 border-ink/15 bg-paper p-6 shadow-brutal hover:shadow-brutal-lg transition-all h-full rounded-2xl">
                  <div className={cn("inline-flex items-center justify-center w-12 h-12 border-3 border-ink/15 mb-4 rounded-full", f.color)}>
                    <f.icon className={cn("h-6 w-6", f.color === "bg-light" ? "text-ink" : "text-ink")} />
                  </div>
                  <h3 className="font-display text-xl font-black text-ink mb-2">{f.title}</h3>
                  <p className="text-sm text-ink/70 leading-relaxed">{f.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <MoreDetails title="Ayrıntılar: Örnek senaryo — butik" summary="Koleksiyon lansmanı için tek hedefli landing page">
      {/* 6. CASE STUDY */}
      <section className="bg-white py-section border-y-3 border-ink/15">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="inline-block border-3 border-ink/15 bg-paper text-ink px-3 py-1 text-xs font-black tracking-wider mb-4 shadow-brutal-sm rounded-full">
              Örnek Senaryo — Butik
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-display text-h2 font-black leading-tight max-w-4xl text-ink mb-6">
              Bir butik için örnek kurulum: koleksiyon lansmanına tek hedefli landing page.
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <div className="grid lg:grid-cols-[1.3fr_1fr] gap-10">
              <div className="space-y-5 text-body text-ink/85 max-w-prose">
                <p>
                  <strong className="text-ink">Durum:</strong> Örnek senaryoda bir concept butiğin Instagram hesabı ilgi görüyor ama bu ilgi satışa dönüşmüyor. Eski site WordPress, mobilde zor kullanılıyor, ürün katalogu güncellenemiyor.
                </p>
                <p>
                  <strong className="text-ink">Kurulum:</strong> Önce tek bir kampanya landing page&apos;i kurulur — koleksiyon lansmanı için. Next.js altyapısı, Lighthouse 90+ hedefi, üzerinde tek bir hedef: WhatsApp&apos;a yönlendirme + e-posta toplama. Instagram bio linki bu sayfaya yönlendirilir.
                </p>
                <p>
                  <strong className="text-ink">Ne değişir:</strong> Ziyaretçi tek bir aksiyona yönlendirilir; WhatsApp&apos;tan gelen talepler ve toplanan e-postalar tek yerde birikir. Kampanya bittiğinde aynı sayfa yeni koleksiyon için güncellenebilir.
                </p>
                <p className="text-sm text-ink/70 italic border-l-3 border-ink/15 pl-4">
                  Bu bölüm açıklayıcı bir örnek senaryodur; gerçek bir müşteri sonucu veya alıntısı değildir.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4">
                <div className="border-3 border-ink/15 bg-paper p-5 shadow-brutal rounded-2xl">
                  <TrendingUp className="h-6 w-6 text-ink mb-2" />
                  <div className="font-display text-5xl font-black text-ink leading-none">Tek hedef</div>
                  <div className="mt-2 text-xs font-bold uppercase tracking-wider text-ink/70">WhatsApp + e-posta toplama</div>
                </div>
                <div className="border-3 border-ink/15 bg-paper p-5 shadow-brutal rounded-2xl">
                  <Gauge className="h-6 w-6 text-ink mb-2" />
                  <div className="font-display text-5xl font-black text-ink leading-none">90+</div>
                  <div className="mt-2 text-xs font-bold uppercase tracking-wider text-ink/70">Lighthouse hedefi</div>
                </div>
                <div className="border-3 border-ink/15 bg-paper p-5 shadow-brutal rounded-2xl">
                  <Star className="h-6 w-6 text-ink mb-2" />
                  <div className="font-display text-5xl font-black text-ink leading-none">Bio link</div>
                  <div className="mt-2 text-xs font-bold uppercase tracking-wider text-ink/70">Instagram trafiği sayfaya yönlenir</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      </MoreDetails>
      {/* FİYATLAR — kaynak: src/data/pricing.ts */}

      <PricingSection family="kurumsal-web-sitesi" heading="Kurumsal web sitesi fiyatları" />
      <PricingSection family="e-ticaret" id="e-ticaret" badge="E-ticaret" heading="E-ticaret sitesi fiyatları" />
      <WebExtrasSection />


      {/* 8. FAQ */}
      <section className="bg-white text-ink py-section">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="inline-block border-3 border-ink/10 bg-slate text-white px-3 py-1 text-xs font-black tracking-wider mb-4 rounded-full">
              Sıkça Sorulan
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-display text-h2 font-black leading-tight max-w-3xl mb-12">
              Karar vermeden önce — net cevaplar.
            </h2>
          </Reveal>

          <div className="grid gap-4 lg:grid-cols-2">
            {[
              { q: "Web tasarım fiyatları ne kadar?", a: `Fiyatlarımız yazılıdır (KDV hariç, proje başı). Landing page ${singlePriceLabel(SINGLE["landing-page"])}. Kurumsal web sitesi: ${familyPriceSummary("kurumsal-web-sitesi")}. E-ticaret sitesi: ${familyPriceSummary("e-ticaret")}. Hosting, alan adı, çeviri ve harici lisanslar hariçtir.` },
              { q: "Kaç günde teslim ediyorsunuz?", a: "Teslim süresi landing page, marka sitesi veya e-ticaret kapsamına göre teklifte yazılı olarak belirtilir. İçeriğin (metin + görsel) zamanında gelmesi takvimin korunması için önemlidir." },
              { q: "WordPress mi kullanıyorsunuz?", a: "Hayır. Tüm sitelerimizi Next.js + React ile geliştiriyoruz. Eklenti şişmesi olmadığı için site belirgin şekilde daha hızlı ve güvenli. Lighthouse skorunda 90+ hedefliyoruz." },
              { q: "Mobil uyumlu mu olacak?", a: "Tüm projelerimiz mobile-first tasarlanır. Önce mobil, sonra tablet, en son masaüstü. Trafiğin büyük kısmının mobilden geldiğini biliyoruz." },
              { q: "İzmir dışından çalışıyor musunuz?", a: "Evet. Merkezimiz İzmir'de; İstanbul, Ankara, Bursa dahil Türkiye'nin her şehrindeki firmalarla çalışabiliyoruz. Görüşmeler Google Meet üzerinden, süreç tamamen uzaktan yönetilir." },
              { q: "Teslim sonrası ben mi güncelleyeceğim?", a: `İki seçenek: (1) Büyüme ve Kurumsal paketlerde CMS panel kuruyoruz, içeriği siz güncelliyorsunuz; (2) aylık web bakım — biz güncelliyoruz: ${familyPriceSummary("web-bakim")}, KDV hariç. Saatler o paketin aylık toplam hakkıdır, birbirine eklenmez ve devretmez; yeni modül ve kapsamlı tasarım ayrıca tekliflendirilir.` },
              { q: "SEO çalışması dahil mi?", a: "SEO temeli her pakette dahil: sitemap, robots.txt, meta etiketleri, Open Graph, sayfa hızı. Schema markup dahil teknik SEO Büyüme ve Kurumsal paketlerde. İçerik SEO'su (blog yazıları, keyword) ayrı paket." },
            ].map((f, i) => (
              <Reveal key={i} delay={i * 50}>
                <div className="border-3 border-ink/10 bg-light p-5 rounded-2xl">
                  <h3 className="font-display text-lg font-black text-ink mb-2">{f.q}</h3>
                  <p className="text-sm text-ink/80 leading-relaxed">{f.a}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 9. FINAL CTA */}
      <RelatedSectorsSection service="web-tasarim" />
      <RelatedLocationsSection service="web-tasarim" />

      <section className="bg-white py-section border-t-3 border-ink/15">
        <div className="mx-auto max-w-container px-6">
          <div className="grid lg:grid-cols-[1.5fr_1fr] gap-10 items-center">
            <Reveal>
              <div>
                <div className="inline-block border-3 border-ink/15 bg-paper text-ink px-3 py-1 text-xs font-black tracking-wider mb-4 shadow-brutal-sm rounded-full">
                  Sıra sizde
                </div>
                <h2 className="font-display text-h2 font-black leading-tight text-ink mb-5">
                  Yeni sitenizi birlikte planlayalım mı?
                </h2>
                <p className="text-body text-ink/80 mb-7 max-w-prose">
                  30 dakikalık ücretsiz görüşmede sektörünüze, hedefinize ve bütçenize göre özel öneri çıkarıyoruz. Yazılı fiyat. Teklifte yazılı takvim. Sürpriz yok.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/iletisim"
                    className="inline-flex items-center justify-center gap-2 border-3 border-ink/15 bg-slate px-6 py-3.5 text-sm font-black text-white shadow-brutal hover:shadow-brutal-lg transition-all rounded-full"
                  >
                    Ücretsiz Projeyi Konuşalım <ArrowUpRight className="h-4 w-4" />
                  </Link>
                  <a
                    href="https://wa.me/905318639117"
                    target="_blank"
                    rel="noopener"
                    className="inline-flex items-center justify-center gap-2 border-3 border-ink/15 bg-slate px-6 py-3.5 text-sm font-black text-white shadow-brutal hover:shadow-brutal-lg transition-all rounded-full"
                  >
                    <MessageCircle className="h-4 w-4" /> WhatsApp
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={150}>
              <div className="border-3 border-ink/15 bg-paper p-6 shadow-brutal-lg space-y-4 rounded-2xl">
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-ink shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-ink/60">Telefon</div>
                    <a href="tel:+905318639117" className="font-display text-lg font-black text-ink hover:underline">0531 863 91 17</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-ink shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-ink/60">Email</div>
                    <a href="mailto:destek@portzenai.com" className="font-display text-lg font-black text-ink hover:underline">destek@portzenai.com</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-ink shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-ink/60">Konum</div>
                    <div className="font-display text-lg font-black text-ink">İzmir, Türkiye</div>
                  </div>
                </div>
                <div className="border-t-3 border-ink/15 pt-4">
                  <p className="text-xs font-bold uppercase tracking-wider text-ink/60 mb-2">Diğer hizmetler</p>
                  <div className="flex flex-wrap gap-2">
                    <Link href="/crm-otomasyonu" className="text-xs font-black border-3 border-ink/15 bg-slate text-white px-2 py-1 shadow-brutal-sm transition-all rounded-full">
                      CRM Otomasyonu
                    </Link>
                    <Link href="/whatsapp-ai-asistani" className="text-xs font-black border-3 border-ink/15 bg-slate text-white px-2 py-1 shadow-brutal-sm transition-all rounded-full">
                      WhatsApp AI
                    </Link>
                    <Link href="/instagram-dm-otomasyonu" className="text-xs font-black border-3 border-ink/15 bg-slate text-white px-2 py-1 shadow-brutal-sm transition-all rounded-full">
                      Instagram DM
                    </Link>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
