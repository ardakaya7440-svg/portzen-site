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
  Palette,
  Code2,
  Rocket,
  ShoppingBag,
  LayoutTemplate,
  Building2,
  Clock,
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

const URL = "https://portzenai.com/web-tasarim";
const TITLE = "Web Tasarım | Marka Sitesi & Landing Page — PORTZEN";
const DESCRIPTION =
  "İzmir merkezli web tasarım ajansı. Mobil uyumlu, hızlı ve SEO uyumlu landing page, kurumsal web sitesi ve e-ticaret çözümleri. 14 günde teslim, sabit fiyat. Ücretsiz görüşme alın.";

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
    email: "portzenajans@gmail.com",
    address: { "@type": "PostalAddress", addressLocality: "İzmir", addressCountry: "TR" },
    priceRange: "₺₺",
  },
  areaServed: { "@type": "Country", name: "Türkiye" },
  description: DESCRIPTION,
  offers: [
    { "@type": "Offer", name: "Landing Page", price: "8000", priceCurrency: "TRY" },
    { "@type": "Offer", name: "Marka Sitesi", price: "15000", priceCurrency: "TRY" },
    { "@type": "Offer", name: "E-Ticaret", price: "35000", priceCurrency: "TRY" },
  ],
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
        text: "Landing Page 8.000-15.000 TL, kurumsal marka sitesi 15.000-35.000 TL, e-ticaret sitesi 35.000-75.000 TL bandında çalışıyoruz. Brief'iniz net olduğunda 24 saat içinde sabit fiyat teklifi paylaşıyoruz.",
      },
    },
    {
      "@type": "Question",
      name: "Web sitemi kaç günde teslim ediyorsunuz?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Landing Page 7-10 iş günü, kurumsal marka sitesi 14-21 iş günü, e-ticaret 30-45 iş günü içinde canlıya alınır. İçerik (metin + görsel) zamanında geldiğinde takvim sapmaz.",
      },
    },
    {
      "@type": "Question",
      name: "Hangi teknolojiyi kullanıyorsunuz, WordPress mi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "WordPress kullanmıyoruz. Tüm sitelerimizi Next.js + React ile geliştiriyoruz. Bu sayede sayfa hızı, güvenlik ve SEO performansı WordPress'e kıyasla %3-5 kat daha iyi sonuç veriyor. Lighthouse skorlarımız 90+ üzerinde.",
      },
    },
    {
      "@type": "Question",
      name: "Mobil uyumlu mu?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tüm projelerimiz mobile-first prensibiyle tasarlanır. Önce mobil, sonra tablet, en son masaüstü. Trafiğinizin %70+ mobilden geldiğini biliyoruz.",
      },
    },
    {
      "@type": "Question",
      name: "İzmir dışındaki firmalarla çalışıyor musunuz?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Evet. Merkezimiz İzmir'de ama Türkiye'nin her şehrinden müşterimiz var. İstanbul, Ankara, Bursa, Antalya başta olmak üzere uzaktan tüm süreci yönetiyoruz. Görüşmeler Google Meet üzerinden yapılır.",
      },
    },
    {
      "@type": "Question",
      name: "Site teslim edildikten sonra ben mi güncelleyeceğim?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "İki seçenek sunuyoruz: (1) Kendi paneliniz üzerinden içerik güncelleyebileceğiniz bir CMS kuruyoruz, (2) Aylık bakım paketi ile tüm güncellemeleri biz yapıyoruz (2.500 TL/ay'dan başlıyor).",
      },
    },
    {
      "@type": "Question",
      name: "SEO çalışması da yapıyor musunuz?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Teknik SEO standart olarak dahil: sitemap, robots.txt, schema markup, meta etiketleri, Open Graph, sayfa hızı optimizasyonu. İçerik SEO'su (blog yazıları, keyword araştırması) ayrı paket olarak sunulur.",
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
      <section className="bg-paper py-section border-b-3 border-ink">
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
                <div className="inline-flex items-center gap-2 border-3 border-ink bg-brand-yellow px-3 py-1.5 shadow-brutal-sm mb-6">
                  <Sparkles className="h-4 w-4" />
                  <span className="text-xs font-black uppercase tracking-wider">Web Tasarım Ajansı — İzmir</span>
                </div>
              </Reveal>

              <Reveal delay={100}>
                <h1 className="font-display text-h1 font-black leading-[0.95] text-ink">
                  Web Tasarım | Marka Sitesi, Landing Page, E-Ticaret — 14 Günde Teslim
                </h1>
              </Reveal>

              <Reveal delay={200}>
                <p className="mt-6 max-w-prose text-body text-ink/80 font-medium">
                  Mobil uyumlu, hızlı yüklenen ve dönüşüm odaklı{" "}
                  <strong className="text-ink">profesyonel web sitesi</strong> tasarımı. WordPress değil — Next.js + React ile geliştiriyoruz. KOBİ, butik marka ve dijital girişimciler için sabit fiyat, sabit teslim takvimi.
                </p>
              </Reveal>

              <Reveal delay={300}>
                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/iletisim"
                    className="inline-flex items-center justify-center gap-2 border-3 border-ink bg-ink px-6 py-3.5 text-sm font-black uppercase text-paper shadow-brutal hover:-translate-x-1 hover:-translate-y-1 hover:shadow-brutal-lg transition-all"
                  >
                    Ücretsiz Teklif Al <ArrowUpRight className="h-4 w-4" />
                  </Link>
                  <a
                    href="https://wa.me/905318639117"
                    target="_blank"
                    rel="noopener"
                    className="inline-flex items-center justify-center gap-2 border-3 border-ink bg-brand-green px-6 py-3.5 text-sm font-black uppercase text-paper shadow-brutal hover:-translate-x-1 hover:-translate-y-1 hover:shadow-brutal-lg transition-all"
                  >
                    <MessageCircle className="h-4 w-4" /> WhatsApp ile Konuş
                  </a>
                </div>
              </Reveal>

              <Reveal delay={400}>
                <div className="mt-6 flex flex-wrap gap-4 text-xs font-bold uppercase tracking-wider text-ink/70">
                  <span className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-brand-green" /> Sabit Fiyat</span>
                  <span className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-brand-green" /> 14 Gün Teslim</span>
                  <span className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-brand-green" /> Lighthouse 90+</span>
                </div>
              </Reveal>
            </div>

            {/* Right: Stat grid */}
            <Reveal delay={350}>
              <div className="grid grid-cols-2 gap-4">
                <div className="border-3 border-ink bg-brand-pink p-5 shadow-brutal">
                  <div className="font-display text-5xl font-black text-paper leading-none">50+</div>
                  <div className="mt-2 text-xs font-bold uppercase tracking-wider text-paper/90">Teslim edilen proje</div>
                </div>
                <div className="border-3 border-ink bg-brand-blue p-5 shadow-brutal">
                  <div className="font-display text-5xl font-black text-paper leading-none">14g</div>
                  <div className="mt-2 text-xs font-bold uppercase tracking-wider text-paper/90">Ortalama teslim</div>
                </div>
                <div className="border-3 border-ink bg-brand-yellow p-5 shadow-brutal">
                  <div className="font-display text-5xl font-black text-ink leading-none">96</div>
                  <div className="mt-2 text-xs font-bold uppercase tracking-wider text-ink/85">Ortalama Lighthouse</div>
                </div>
                <div className="border-3 border-ink bg-brand-green p-5 shadow-brutal">
                  <div className="font-display text-5xl font-black text-paper leading-none">2.1x</div>
                  <div className="mt-2 text-xs font-bold uppercase tracking-wider text-paper/90">Ortalama dönüşüm artışı</div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 2. PROBLEM */}
      <section className="bg-ink text-paper py-section">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="inline-block border-3 border-paper bg-brand-pink text-paper px-3 py-1 text-xs font-black uppercase tracking-wider mb-4 shadow-[6px_6px_0_#FFFDF5]">
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
                body: "Müşteri telefonundan açıyor, yazılar üst üste biniyor, buton bulunamıyor. Trafiğin %70'i mobilden ama site masaüstüne göre tasarlanmış.",
              },
              {
                title: "Sayfalar yavaş açılıyor",
                body: "5 saniyede açılmayan sayfa demek %50 ziyaretçi kaybı demek. Eski tema, kötü hosting, optimize edilmemiş görseller hız öldürüyor.",
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
                body: "Aynı WordPress temasından 10.000 site var. Markanız bir kasaba pizzacısına benziyor. Kurumsallık ve güven kaybı.",
              },
              {
                title: "Güncelleme korkutuyor",
                body: "Bir cümle değiştirmek için ajansa para vermek gerekiyor. Plugin güncellemesi sitenizi çökertiyor. Yedek yok, panik var.",
              },
            ].map((p, i) => (
              <Reveal key={i} delay={i * 60}>
                <div className="border-3 border-paper bg-ink p-6 shadow-[6px_6px_0_#FFFDF5] h-full">
                  <XCircle className="h-6 w-6 text-brand-pink mb-3" />
                  <h3 className="font-display text-xl font-black mb-2">{p.title}</h3>
                  <p className="text-sm text-paper/75 leading-relaxed">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SOLUTION */}
      <section className="bg-paper py-section">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="inline-block border-3 border-ink bg-brand-yellow px-3 py-1 text-xs font-black uppercase tracking-wider mb-4 shadow-brutal-sm">
              Çözüm
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-display text-h2 font-black leading-tight max-w-3xl mb-4 text-ink">
              4 adımda satan bir web sitesine sahip olun.
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <p className="text-body text-ink/70 max-w-2xl mb-12">
              Şablon değil — markanıza özel. Modern teknoloji (Next.js + React) + mobil-first tasarım + teknik SEO + net dönüşüm odaklı yapı.
            </p>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { n: "01", icon: Search, color: "bg-brand-blue", title: "Brief & Strateji", body: "Hedef kitlenizi, dönüşüm hedefinizi, rakiplerinizi analiz ediyoruz. Sitenizin amacı net olmadan tasarım başlamıyor." },
              { n: "02", icon: Palette, color: "bg-brand-pink", title: "Tasarım", body: "Figma'da önce mobil sonra masaüstü. Markanıza özel renk, tipografi, görsel dil. Şablon değil. Onaya kadar revize." },
              { n: "03", icon: Code2, color: "bg-brand-purple", title: "Geliştirme", body: "Next.js + React + Tailwind. Lighthouse 90+, sıfır plugin, sıfır şişme. CMS panel istersen kuruyoruz." },
              { n: "04", icon: Rocket, color: "bg-brand-green", title: "Yayın & Destek", body: "Vercel'de canlıya alıyoruz, alan adı + SSL + analytics + GSC kuruluyor. 30 gün ücretsiz destek." },
            ].map((s, i) => (
              <Reveal key={s.n} delay={i * 80}>
                <div className="border-3 border-ink bg-paper p-6 shadow-brutal hover:-translate-x-1 hover:-translate-y-1 hover:shadow-brutal-lg transition-all h-full">
                  <div className={cn("inline-flex items-center justify-center w-12 h-12 border-3 border-ink mb-4", s.color)}>
                    <s.icon className="h-6 w-6 text-paper" />
                  </div>
                  <div className="font-display text-3xl font-black text-ink/30 mb-1">{s.n}</div>
                  <h3 className="font-display text-xl font-black text-ink mb-2">{s.title}</h3>
                  <p className="text-sm text-ink/70 leading-relaxed">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FEATURES */}
      <section className="bg-paper py-section border-t-3 border-ink/10">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="inline-block border-3 border-ink bg-brand-blue text-paper px-3 py-1 text-xs font-black uppercase tracking-wider mb-4 shadow-brutal-sm">
              Standart özellikler
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-display text-h2 font-black leading-tight max-w-3xl mb-12 text-ink">
              Her projede ücretsiz dahil.
            </h2>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: Smartphone, color: "bg-brand-pink", title: "Mobil-First Tasarım", body: "Telefon, tablet, masaüstü — her ekran boyutunda kusursuz. Trafiğin çoğunluğu mobilden geliyor, biz de oradan başlıyoruz." },
              { icon: Gauge, color: "bg-brand-yellow", title: "Lighthouse 90+ Hız", body: "Görsel optimizasyonu, lazy loading, edge caching, CDN. Sayfa 2 saniyede açılır — Google bunu seviyor, müşteriniz de." },
              { icon: Search, color: "bg-brand-blue", title: "Teknik SEO Hazır", body: "Sitemap, robots.txt, meta etiketleri, schema markup, Open Graph. Google sayfanızı doğru indeksler, AI arama motorları sizi cite eder." },
              { icon: ShieldCheck, color: "bg-brand-green", title: "Güvenli & SSL", body: "Plugin yok = güvenlik açığı yok. SSL otomatik, DDoS koruması Vercel/Cloudflare üzerinden. Hacklenme paranoyası bitti." },
              { icon: LayoutTemplate, color: "bg-brand-purple", title: "Şablon Değil — Özel Tasarım", body: "Markanıza özel renk paleti, tipografi, ikon seti, illüstrasyonlar. Aynı temadan 10.000 site arasında kaybolmazsınız." },
              { icon: Code2, color: "bg-brand-orange", title: "Modern Teknoloji Stack'i", body: "Next.js 14 + React + TypeScript + Tailwind. WordPress'in 5-10 katı performans. Edge deployment ile dünya çapında hızlı." },
            ].map((f, i) => (
              <Reveal key={i} delay={i * 60}>
                <div className="border-3 border-ink bg-paper p-6 shadow-brutal hover:-translate-x-1 hover:-translate-y-1 hover:shadow-brutal-lg transition-all h-full">
                  <div className={cn("inline-flex items-center justify-center w-12 h-12 border-3 border-ink mb-4", f.color)}>
                    <f.icon className={cn("h-6 w-6", f.color === "bg-brand-yellow" ? "text-ink" : "text-paper")} />
                  </div>
                  <h3 className="font-display text-xl font-black text-ink mb-2">{f.title}</h3>
                  <p className="text-sm text-ink/70 leading-relaxed">{f.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. PROCESS / TIMELINE */}
      <section className="bg-ink text-paper py-section">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="inline-block border-3 border-paper bg-brand-yellow text-ink px-3 py-1 text-xs font-black uppercase tracking-wider mb-4 shadow-[6px_6px_0_#FFFDF5]">
              Zaman çizelgesi
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-display text-h2 font-black leading-tight max-w-3xl mb-12">
              Brief'ten yayına — ne zaman ne oluyor?
            </h2>
          </Reveal>

          <div className="relative">
            <div className="grid gap-8 lg:grid-cols-4">
              {[
                { week: "Gün 1-3", title: "Brief & Onay", body: "Görüşme, hedef analizi, sitemap, kapsam onayı, sözleşme + ön ödeme.", color: "text-brand-yellow" },
                { week: "Gün 4-9", title: "Tasarım Sprintleri", body: "Figma'da ana sayfa + iç sayfalar. 2 revizyon hakkı. Final onaylanır.", color: "text-brand-pink" },
                { week: "Gün 10-18", title: "Geliştirme", body: "Tasarım koda dönüşüyor. CMS panel (istenirse), formlar, entegrasyonlar.", color: "text-brand-blue" },
                { week: "Gün 19-21", title: "Test & Yayın", body: "Mobil/tablet/desktop test, performans testi, SSL, domain bağlantısı, canlıya alma.", color: "text-brand-green" },
              ].map((t, i) => (
                <Reveal key={i} delay={i * 100}>
                  <div className="border-3 border-paper bg-ink p-6 shadow-[8px_8px_0_#FFFDF5] h-full">
                    <Clock className={cn("h-6 w-6 mb-3", t.color)} />
                    <div className={cn("font-display text-xs font-black uppercase tracking-wider mb-2", t.color)}>{t.week}</div>
                    <h3 className="font-display text-xl font-black mb-2">{t.title}</h3>
                    <p className="text-sm text-paper/70 leading-relaxed">{t.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={500}>
            <p className="mt-10 text-sm text-paper/60 max-w-3xl">
              Yukarıdaki takvim kurumsal marka sitesi (~14-21 gün) içindir. Landing Page 7-10 gün, e-ticaret 30-45 gün sürer.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 6. CASE STUDY */}
      <section className="bg-brand-yellow py-section border-y-3 border-ink">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="inline-block border-3 border-ink bg-paper text-ink px-3 py-1 text-xs font-black uppercase tracking-wider mb-4 shadow-brutal-sm">
              Vaka Çalışması — İzmir
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-display text-h2 font-black leading-tight max-w-4xl text-ink mb-6">
              "Bir İzmir butiği için kurduğumuz landing page, 30 günde 1.240 lead getirdi."
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <div className="grid lg:grid-cols-[1.3fr_1fr] gap-10">
              <div className="space-y-5 text-body text-ink/85 max-w-prose">
                <p>
                  <strong className="text-ink">Durum:</strong> İzmir Alsancak'ta concept butik. Instagram'da güzel takipçi var ama satışa dönüşmüyor. Eski site WordPress, mobilde berbat, ürün katalogu güncellenemiyor.
                </p>
                <p>
                  <strong className="text-ink">Yaptıklarımız:</strong> Önce tek bir kampanya landing page'i kurduk — koleksiyon lansmanı için. Next.js, Lighthouse 98, üzerinde tek bir hedef: WhatsApp'a yönlendirme + email toplama. Instagram bio link'i değişti.
                </p>
                <p>
                  <strong className="text-ink">Sonuç (30 gün):</strong> 12.400 ziyaret, 1.240 lead (10% conversion), 340 WhatsApp mesajı, 87 satış. Maliyet 12.000 TL — geri dönüş ilk hafta.
                </p>
                <p className="text-sm text-ink/70 italic border-l-3 border-ink pl-4">
                  "Hızı görünce şok olduk. Eskiden mailimi açan kimse sayfaya geçmiyordu. Şimdi tıklayan herkes alıma kadar gidiyor." — Marka kurucu
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4">
                <div className="border-3 border-ink bg-paper p-5 shadow-brutal">
                  <TrendingUp className="h-6 w-6 text-brand-pink mb-2" />
                  <div className="font-display text-5xl font-black text-ink leading-none">1.240</div>
                  <div className="mt-2 text-xs font-bold uppercase tracking-wider text-ink/70">Lead (30 gün)</div>
                </div>
                <div className="border-3 border-ink bg-paper p-5 shadow-brutal">
                  <Gauge className="h-6 w-6 text-brand-blue mb-2" />
                  <div className="font-display text-5xl font-black text-ink leading-none">98</div>
                  <div className="mt-2 text-xs font-bold uppercase tracking-wider text-ink/70">Lighthouse skoru</div>
                </div>
                <div className="border-3 border-ink bg-paper p-5 shadow-brutal">
                  <Star className="h-6 w-6 text-brand-green mb-2" />
                  <div className="font-display text-5xl font-black text-ink leading-none">10%</div>
                  <div className="mt-2 text-xs font-bold uppercase tracking-wider text-ink/70">Dönüşüm oranı</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 7. PRICING */}
      <section className="bg-paper py-section">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="inline-block border-3 border-ink bg-brand-orange text-paper px-3 py-1 text-xs font-black uppercase tracking-wider mb-4 shadow-brutal-sm">
              Fiyatlandırma
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-display text-h2 font-black leading-tight max-w-3xl text-ink mb-4">
              Sabit fiyat. Sürpriz yok.
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <p className="text-body text-ink/70 max-w-2xl mb-12">
              Saatlik ücret değil — sabit proje fiyatı. Brief netleştiğinde fiyat değişmez. Tüm paketlerde teknik SEO, mobil uyum, SSL ve 30 gün destek dahil.
            </p>
          </Reveal>

          <div className="grid gap-6 lg:grid-cols-3">
            {/* Landing */}
            <Reveal delay={150}>
              <div className="border-3 border-ink bg-paper p-7 shadow-brutal h-full flex flex-col">
                <div className="inline-flex items-center gap-2 border-3 border-ink bg-brand-yellow px-2.5 py-1 text-xs font-black uppercase mb-4 self-start">
                  <LayoutTemplate className="h-3.5 w-3.5" /> Landing Page
                </div>
                <h3 className="font-display text-2xl font-black text-ink mb-2">Kampanya Sayfası</h3>
                <p className="text-sm text-ink/70 mb-5">Tek hedefli, hızlı dönüşüm odaklı sayfa. Reklam trafiği almak için ideal.</p>
                <div className="border-t-3 border-ink/15 pt-5 mb-5">
                  <div className="font-display text-4xl font-black text-ink">8.000 - 15.000 ₺</div>
                  <div className="text-xs font-bold uppercase tracking-wider text-ink/60 mt-1">7-10 iş günü teslim</div>
                </div>
                <ul className="space-y-2.5 text-sm text-ink/85 mb-7 flex-1">
                  {["Tek sayfa, mobil-first tasarım", "Form + WhatsApp + Email entegrasyonu", "Lighthouse 90+ garantili hız", "Teknik SEO + analytics kurulumu", "2 revizyon hakkı + 30 gün destek"].map((b, i) => (
                    <li key={i} className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-brand-green shrink-0 mt-0.5" /> {b}</li>
                  ))}
                </ul>
                <Link href="/iletisim" className="inline-flex items-center justify-center gap-2 border-3 border-ink bg-paper px-5 py-3 text-sm font-black uppercase text-ink shadow-brutal-sm hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all">
                  Teklif Al <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>

            {/* Marka Sitesi - featured */}
            <Reveal delay={250}>
              <div className="border-3 border-ink bg-brand-pink p-7 shadow-brutal-lg h-full flex flex-col relative">
                <div className="absolute -top-3 left-7 inline-flex items-center gap-1 border-3 border-ink bg-brand-yellow px-2.5 py-1 text-xs font-black uppercase">
                  <Star className="h-3.5 w-3.5" /> En Çok Tercih
                </div>
                <div className="inline-flex items-center gap-2 border-3 border-ink bg-paper text-ink px-2.5 py-1 text-xs font-black uppercase mb-4 self-start">
                  <Building2 className="h-3.5 w-3.5" /> Kurumsal Marka Sitesi
                </div>
                <h3 className="font-display text-2xl font-black text-paper mb-2">Marka Sitesi</h3>
                <p className="text-sm text-paper/90 mb-5">5-8 sayfalık tam kurumsal site. Hizmet sayfaları, hakkımızda, blog, iletişim, referanslar.</p>
                <div className="border-t-3 border-paper/30 pt-5 mb-5">
                  <div className="font-display text-4xl font-black text-paper">15.000 - 35.000 ₺</div>
                  <div className="text-xs font-bold uppercase tracking-wider text-paper/80 mt-1">14-21 iş günü teslim</div>
                </div>
                <ul className="space-y-2.5 text-sm text-paper mb-7 flex-1">
                  {["5-8 özel tasarım sayfa", "Blog modülü (CMS panel dahil)", "Çoklu form + entegrasyonlar", "Schema + Open Graph + sitemap", "Lighthouse 90+ + 30 gün destek", "İçerik girişi (10 sayfaya kadar)"].map((b, i) => (
                    <li key={i} className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-brand-yellow shrink-0 mt-0.5" /> {b}</li>
                  ))}
                </ul>
                <Link href="/iletisim" className="inline-flex items-center justify-center gap-2 border-3 border-ink bg-ink px-5 py-3 text-sm font-black uppercase text-paper shadow-brutal hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all">
                  Teklif Al <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>

            {/* E-ticaret */}
            <Reveal delay={350}>
              <div className="border-3 border-ink bg-paper p-7 shadow-brutal h-full flex flex-col">
                <div className="inline-flex items-center gap-2 border-3 border-ink bg-brand-blue text-paper px-2.5 py-1 text-xs font-black uppercase mb-4 self-start">
                  <ShoppingBag className="h-3.5 w-3.5" /> E-Ticaret
                </div>
                <h3 className="font-display text-2xl font-black text-ink mb-2">E-Ticaret Sitesi</h3>
                <p className="text-sm text-ink/70 mb-5">Ürün katalogu, sepet, ödeme (Iyzico/Stripe), kargo entegrasyonu. Tam çözüm.</p>
                <div className="border-t-3 border-ink/15 pt-5 mb-5">
                  <div className="font-display text-4xl font-black text-ink">35.000 - 75.000 ₺</div>
                  <div className="text-xs font-bold uppercase tracking-wider text-ink/60 mt-1">30-45 iş günü teslim</div>
                </div>
                <ul className="space-y-2.5 text-sm text-ink/85 mb-7 flex-1">
                  {["Ürün katalogu + varyantlar", "Iyzico / Stripe ödeme entegrasyonu", "Kargo (Yurtiçi, MNG, Aras) entegrasyonu", "Yönetim paneli (Sanity / Strapi)", "Stok takibi + sipariş bildirimleri", "Mobil-first + Lighthouse 90+"].map((b, i) => (
                    <li key={i} className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-brand-green shrink-0 mt-0.5" /> {b}</li>
                  ))}
                </ul>
                <Link href="/iletisim" className="inline-flex items-center justify-center gap-2 border-3 border-ink bg-paper px-5 py-3 text-sm font-black uppercase text-ink shadow-brutal-sm hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all">
                  Teklif Al <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
          </div>

          {/* Internal link strip */}
          <Reveal delay={500}>
            <div className="mt-12 border-3 border-ink bg-paper p-6 shadow-brutal-sm">
              <p className="text-sm text-ink/70 mb-3 font-bold uppercase tracking-wider">İlgili kaynaklar:</p>
              <div className="flex flex-wrap gap-3">
                <Link href="/hizmetler/web-tasarim" className="inline-flex items-center gap-1.5 border-3 border-ink bg-brand-yellow px-3 py-1.5 text-xs font-black uppercase shadow-brutal-sm hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all">
                  Web Tasarım Hizmet Detayı <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
                <Link href="/blog/kurumsal-web-sitesi-rehberi" className="inline-flex items-center gap-1.5 border-3 border-ink bg-paper px-3 py-1.5 text-xs font-black uppercase shadow-brutal-sm hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all">
                  Kurumsal Web Sitesi Rehberi <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
                <Link href="/blog/web-sitesi-olmayan-isletmeler-ne-kaybediyor" className="inline-flex items-center gap-1.5 border-3 border-ink bg-paper px-3 py-1.5 text-xs font-black uppercase shadow-brutal-sm hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all">
                  Web Sitesi Olmayan İşletmeler <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 8. FAQ */}
      <section className="bg-ink text-paper py-section">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="inline-block border-3 border-paper bg-brand-purple text-paper px-3 py-1 text-xs font-black uppercase tracking-wider mb-4 shadow-[6px_6px_0_#FFFDF5]">
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
              { q: "Web tasarım fiyatları ne kadar?", a: "Landing Page 8.000-15.000 TL, kurumsal marka sitesi 15.000-35.000 TL, e-ticaret sitesi 35.000-75.000 TL bandında çalışıyoruz. Brief'iniz net olduğunda 24 saat içinde sabit fiyat teklifi paylaşıyoruz." },
              { q: "Kaç günde teslim ediyorsunuz?", a: "Landing 7-10 gün, marka sitesi 14-21 gün, e-ticaret 30-45 gün. İçerik (metin + görsel) zamanında geldiğinde takvim sapmaz." },
              { q: "WordPress mi kullanıyorsunuz?", a: "Hayır. Tüm sitelerimizi Next.js + React ile geliştiriyoruz. Bu sayede hız, güvenlik ve SEO performansı WordPress'in 3-5 katı daha iyi. Lighthouse skorlarımız 90+ üzerinde." },
              { q: "Mobil uyumlu mu olacak?", a: "Tüm projelerimiz mobile-first tasarlanır. Önce mobil, sonra tablet, en son masaüstü. Trafiğinizin %70+ mobilden geldiğini biliyoruz." },
              { q: "İzmir dışından çalışıyor musunuz?", a: "Evet. Merkezimiz İzmir'de ama İstanbul, Ankara, Bursa dahil Türkiye'nin her şehrinden müşterimiz var. Görüşmeler Google Meet üzerinden, süreç tamamen uzaktan yönetilir." },
              { q: "Teslim sonrası ben mi güncelleyeceğim?", a: "İki seçenek: (1) CMS panel kuruyoruz, içeriği siz güncelliyorsunuz, (2) Aylık bakım paketi (2.500 TL/ay'dan başlar) — biz güncelliyoruz." },
              { q: "SEO çalışması dahil mi?", a: "Teknik SEO standart dahil: sitemap, robots.txt, schema markup, meta etiketleri, Open Graph, sayfa hızı. İçerik SEO'su (blog yazıları, keyword) ayrı paket." },
            ].map((f, i) => (
              <Reveal key={i} delay={i * 50}>
                <div className="border-3 border-paper bg-ink p-5 shadow-[6px_6px_0_#FFFDF5]">
                  <h3 className="font-display text-lg font-black text-brand-yellow mb-2">{f.q}</h3>
                  <p className="text-sm text-paper/80 leading-relaxed">{f.a}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 9. FINAL CTA */}
      <RelatedSectorsSection service="web-tasarim" />
      <RelatedLocationsSection service="web-tasarim" />

      <section className="bg-brand-yellow py-section border-t-3 border-ink">
        <div className="mx-auto max-w-container px-6">
          <div className="grid lg:grid-cols-[1.5fr_1fr] gap-10 items-center">
            <Reveal>
              <div>
                <div className="inline-block border-3 border-ink bg-paper text-ink px-3 py-1 text-xs font-black uppercase tracking-wider mb-4 shadow-brutal-sm">
                  Sıra sizde
                </div>
                <h2 className="font-display text-h2 font-black leading-tight text-ink mb-5">
                  14 gün sonra yeni sitenizle satışa başlamaya hazır mısınız?
                </h2>
                <p className="text-body text-ink/80 mb-7 max-w-prose">
                  30 dakikalık ücretsiz görüşmede sektörünüze, hedefinize ve bütçenize göre özel öneri çıkarıyoruz. Sabit fiyat. Sabit takvim. Sürpriz yok.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/iletisim"
                    className="inline-flex items-center justify-center gap-2 border-3 border-ink bg-ink px-6 py-3.5 text-sm font-black uppercase text-paper shadow-brutal hover:-translate-x-1 hover:-translate-y-1 hover:shadow-brutal-lg transition-all"
                  >
                    Ücretsiz Görüşme Al <ArrowUpRight className="h-4 w-4" />
                  </Link>
                  <a
                    href="https://wa.me/905318639117"
                    target="_blank"
                    rel="noopener"
                    className="inline-flex items-center justify-center gap-2 border-3 border-ink bg-brand-green px-6 py-3.5 text-sm font-black uppercase text-paper shadow-brutal hover:-translate-x-1 hover:-translate-y-1 hover:shadow-brutal-lg transition-all"
                  >
                    <MessageCircle className="h-4 w-4" /> WhatsApp
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={150}>
              <div className="border-3 border-ink bg-paper p-6 shadow-brutal-lg space-y-4">
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
                    <a href="mailto:portzenajans@gmail.com" className="font-display text-lg font-black text-ink hover:underline">portzenajans@gmail.com</a>
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
                    <Link href="/crm-otomasyonu" className="text-xs font-black uppercase border-3 border-ink bg-brand-blue text-paper px-2 py-1 shadow-brutal-sm hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all">
                      CRM Otomasyonu
                    </Link>
                    <Link href="/whatsapp-ai-asistani" className="text-xs font-black uppercase border-3 border-ink bg-brand-green text-paper px-2 py-1 shadow-brutal-sm hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all">
                      WhatsApp AI
                    </Link>
                    <Link href="/instagram-dm-otomasyonu" className="text-xs font-black uppercase border-3 border-ink bg-brand-pink text-paper px-2 py-1 shadow-brutal-sm hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all">
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
