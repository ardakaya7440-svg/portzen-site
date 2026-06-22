import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowUpRight,
  ArrowRight,
  CheckCircle2,
  XCircle,
  Sparkles,
  Workflow,
  Zap,
  Database,
  Mail,
  MessageCircle,
  Calendar,
  CreditCard,
  Plug,
  TrendingUp,
  Users,
  Activity,
  Clock,
  Star,
  Phone,
  MapPin,
  LineChart,
  Boxes,
} from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";
import { RelatedSectorsSection } from "@/components/landing/RelatedSectorsSection";
import { RelatedLocationsSection } from "@/components/landing/RelatedLocationsSection";

const URL = "https://portzenai.com/crm-otomasyonu";
const TITLE = "CRM Otomasyonu | Lead'i Müşteriye Çeviren Sistem — PORTZEN";
const DESCRIPTION =
  "Manuel takibe son. Lead toplama, CRM entegrasyonu, satış otomasyonu ve iş süreçleri otomasyonu tek sistemde. WhatsApp, email, Sheets, Notion entegre. 1 ayda canlı.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "crm otomasyonu",
    "iş süreçleri otomasyonu",
    "lead toplama sistemi",
    "crm entegrasyonu",
    "satış otomasyonu",
    "n8n make zapier",
    "whatsapp crm",
    "lead yönetimi",
    "müşteri takip sistemi",
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

// JSON-LD
const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "CRM Otomasyonu",
  provider: {
    "@type": "LocalBusiness",
    name: "PORTZEN",
    image: "https://portzenai.com/og-image.png",
    url: "https://portzenai.com",
    telephone: "+90-531-863-91-17",
    email: "destek@portzenai.com",
    address: { "@type": "PostalAddress", addressLocality: "İzmir", addressCountry: "TR" },
    priceRange: "₺₺₺",
  },
  areaServed: { "@type": "Country", name: "Türkiye" },
  description: DESCRIPTION,
  offers: [
    { "@type": "Offer", name: "Başlangıç", price: "12000", priceCurrency: "TRY", priceSpecification: { "@type": "UnitPriceSpecification", referenceQuantity: { value: 1, unitCode: "MON" } } },
    { "@type": "Offer", name: "Pro", price: "25000", priceCurrency: "TRY", priceSpecification: { "@type": "UnitPriceSpecification", referenceQuantity: { value: 1, unitCode: "MON" } } },
    { "@type": "Offer", name: "Kurumsal", price: "50000", priceCurrency: "TRY", priceSpecification: { "@type": "UnitPriceSpecification", referenceQuantity: { value: 1, unitCode: "MON" } } },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "CRM otomasyonu nedir, bana ne fayda sağlar?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Bir lead'in form doldurduğu andan müşteriye dönüştüğü ana kadar tüm temas noktalarını otomatik yöneten sistemdir. Satış ekibinizin manuel takip yükü %70 azalır, lead-to-customer dönüşümünüz ortalama 1.5-2 kat artar.",
      },
    },
    {
      "@type": "Question",
      name: "Hangi CRM sistemlerini destekliyorsunuz?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "HubSpot, Pipedrive, Zoho, Bitrix24, Monday, Notion, Airtable, Google Sheets ve özel CRM'ler dahil — Make/n8n/Zapier üzerinden bağlanabilen her CRM'i entegre ediyoruz. Mevcut sisteminizi değiştirmek zorunda değilsiniz.",
      },
    },
    {
      "@type": "Question",
      name: "Aylık paket mi tek seferlik mi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "İkisi de var. Kurulum tek seferlik (30.000-100.000 TL), aylık yönetim/optimizasyon paketleri 12.000 TL/ay'dan başlıyor. İsterseniz sadece kurulum yapıp kendiniz yönetebilirsiniz.",
      },
    },
    {
      "@type": "Question",
      name: "Hangi entegrasyonları kurabiliyorsunuz?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "WhatsApp Business API, Instagram DM, Email (Mailchimp, SendGrid, Brevo), Calendly, Stripe, Iyzico, Notion, Google Sheets, Slack, Discord ve Make/n8n/Zapier ile bağlanabilen 1000+ uygulama.",
      },
    },
    {
      "@type": "Question",
      name: "Ne kadar sürede canlıya geçer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Başlangıç paketi 1-2 hafta, Pro paket 3-4 hafta, Kurumsal kurulum 6-8 hafta. Akış mapping süreci ne kadar net olursa kurulum o kadar hızlı tamamlanır.",
      },
    },
    {
      "@type": "Question",
      name: "Lead'lerim sizde mi saklanıyor?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hayır. Tüm veriler size ait CRM ve veritabanlarınızda kalır. Biz sadece otomasyon akışını kuruyoruz. KVKK ve GDPR uyumlu yapılandırma standart dahil.",
      },
    },
    {
      "@type": "Question",
      name: "Sistem kurulduktan sonra bakım gerekiyor mu?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Evet. API değişiklikleri, akış optimizasyonu, A/B testleri için aylık bakım önerilir. Bakım paketi almasanız bile sistem 6-12 ay kesintisiz çalışır — ama optimizasyon olmadan dönüşüm potansiyelinin %50'sini bırakırsınız.",
      },
    },
  ],
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: "https://portzenai.com" },
    { "@type": "ListItem", position: 2, name: "CRM Otomasyonu", item: URL },
  ],
};

export default function CrmOtomasyonuPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* 1. HERO */}
      <section className="bg-paper py-section border-b-3 border-ink">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-ink/70">
              <Link href="/" className="hover:text-ink">Ana Sayfa</Link>
              <span>/</span>
              <span className="text-ink">CRM Otomasyonu</span>
            </nav>
          </Reveal>

          <div className="grid lg:grid-cols-[1.4fr_1fr] gap-10 lg:gap-16 items-start">
            <div>
              <Reveal delay={50}>
                <div className="inline-flex items-center gap-2 border-3 border-ink bg-brand-blue text-paper px-3 py-1.5 shadow-brutal-sm mb-6">
                  <Sparkles className="h-4 w-4" />
                  <span className="text-xs font-black uppercase tracking-wider">CRM & İş Süreçleri Otomasyonu</span>
                </div>
              </Reveal>

              <Reveal delay={100}>
                <h1 className="font-display text-h1 font-black leading-[0.95] text-ink">
                  CRM Otomasyonu | Lead'i Müşteriye Çeviren Sistem
                </h1>
              </Reveal>

              <Reveal delay={200}>
                <p className="mt-6 max-w-prose text-body text-ink/80 font-medium">
                  Lead toplama, takip, CRM entegrasyonu, email + WhatsApp dizileri — hepsi tek sistemde, otomatik. Satış ekibiniz <strong className="text-ink">manuel takiple zaman kaybetmesin</strong>, ısınmış lead'lerle konuşsun. KOBİ, ajans, danışmanlık ve B2B hizmet şirketleri için.
                </p>
              </Reveal>

              <Reveal delay={300}>
                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/iletisim"
                    className="inline-flex items-center justify-center gap-2 border-3 border-ink bg-ink px-6 py-3.5 text-sm font-black uppercase text-paper shadow-brutal hover:-translate-x-1 hover:-translate-y-1 hover:shadow-brutal-lg transition-all"
                  >
                    Ücretsiz Akış Analizi <ArrowUpRight className="h-4 w-4" />
                  </Link>
                  <a
                    href="https://wa.me/905015884853"
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
                  <span className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-brand-green" /> 1 Ayda Canlı</span>
                  <span className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-brand-green" /> KVKK Uyumlu</span>
                  <span className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-brand-green" /> 1000+ Entegrasyon</span>
                </div>
              </Reveal>
            </div>

            <Reveal delay={350}>
              <div className="grid grid-cols-2 gap-4">
                <div className="border-3 border-ink bg-brand-blue p-5 shadow-brutal">
                  <div className="font-display text-5xl font-black text-paper leading-none">2.1x</div>
                  <div className="mt-2 text-xs font-bold uppercase tracking-wider text-paper/90">Ort. dönüşüm artışı</div>
                </div>
                <div className="border-3 border-ink bg-brand-yellow p-5 shadow-brutal">
                  <div className="font-display text-5xl font-black text-ink leading-none">70%</div>
                  <div className="mt-2 text-xs font-bold uppercase tracking-wider text-ink/85">Manuel iş azalması</div>
                </div>
                <div className="border-3 border-ink bg-brand-pink p-5 shadow-brutal">
                  <div className="font-display text-5xl font-black text-paper leading-none">4-6h</div>
                  <div className="mt-2 text-xs font-bold uppercase tracking-wider text-paper/90">İlk yanıt süresi</div>
                </div>
                <div className="border-3 border-ink bg-brand-green p-5 shadow-brutal">
                  <div className="font-display text-5xl font-black text-paper leading-none">1K+</div>
                  <div className="mt-2 text-xs font-bold uppercase tracking-wider text-paper/90">Entegrasyon havuzu</div>
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
            <h2 className="font-display text-h2 font-black leading-tight max-w-3xl mb-4">
              Manuel takip = kaybedilen müşteri. Her gün lead'ler buharlaşıyor.
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <p className="text-body text-paper/70 max-w-2xl mb-12">
              Reklam parasını lead getirmek için harcıyorsun ama sistem yok. Sonuç: %80'i unutuluyor, takip edilmiyor, satışa dönmüyor.
            </p>
          </Reveal>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Lead Excel'de kayboluyor", body: "Form gelen mail'i unutuyorsun, Excel'de güncellenmiyor, satıcı arıyor ama bilgi yok. Lead 48 saat içinde soğuyor." },
              { title: "İlk yanıt 2 günde geliyor", body: "Lead form doldurduğunda hala sıcak. Ama satış ekibi ancak 2 gün sonra geri arıyor. O sırada rakibe gitti." },
              { title: "Aynı bilgi 5 yere giriliyor", body: "Form → Excel → CRM → WhatsApp grubu → Notion. Aynı isim 5 farklı yerde, hiçbiri güncel değil. Veri kaosu." },
              { title: "Takip sırası kayboluyor", body: "Hangi lead'i ne zaman aramalıyım? Kim sıcak, kim soğuk? Liste yok, hatırlatıcı yok, herkes kendi kafasına göre." },
              { title: "Email dizileri yok", body: "Lead'i topluyorsun ama sonra ne? Tek mail atıp bırakıyorsun. 5-7 mailden oluşan ısıtma dizisi olsa dönüşüm 3x olurdu." },
              { title: "Raporlama yok", body: "Hangi kampanya lead getirdi? Hangi kaynak müşteriye çevirdi? Bilmiyorsun çünkü veri parçalı. Reklam bütçesi körlemesine harcanıyor." },
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
              Lead → CRM → Takip → Satış. Otomatik. Her seferinde.
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <p className="text-body text-ink/70 max-w-2xl mb-12">
              Lead'in form doldurduğu saniyeden satışa kadar her temas noktası otomatik. Satış ekibin manuel takipten kurtulur, ısınmış müşterilerle konuşur.
            </p>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { n: "01", icon: Workflow, color: "bg-brand-blue", title: "Akış Mapping", body: "Mevcut satış sürecinizi haritalandırıyoruz. Lead nereden geliyor, nereye gidiyor, nerede sızıntı var — net çıkartıyoruz." },
              { n: "02", icon: Plug, color: "bg-brand-purple", title: "Sistem Kurulumu", body: "CRM, form, WhatsApp, email, Calendly — hepsini Make/n8n üzerinden tek akışa bağlıyoruz. Sıfır manuel veri girişi." },
              { n: "03", icon: Zap, color: "bg-brand-pink", title: "Test + Canlıya Alma", body: "1 hafta test, edge case'leri yakala, KVKK uyumu, ekibe eğitim — sonra canlı. Sistem ilk günden çalışır." },
              { n: "04", icon: LineChart, color: "bg-brand-green", title: "Aylık Optimizasyon", body: "Dönüşüm metriklerini izliyoruz, A/B testleri yapıyoruz, akışları sürekli optimize ediyoruz. Sistem giderek iyileşir." },
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
              Kurabileceğimiz akışlar
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-display text-h2 font-black leading-tight max-w-3xl mb-12 text-ink">
              Lead toplamadan müşteri yönetimine — tüm spektrum.
            </h2>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: Boxes, color: "bg-brand-blue", title: "Lead Toplama & Etiketleme", body: "Form, landing, Instagram DM, WhatsApp gelen tüm lead'ler otomatik CRM'e düşer, kaynağa göre etiketlenir, atanır." },
              { icon: MessageCircle, color: "bg-brand-green", title: "WhatsApp Otomasyonu", body: "Form dolduran anında WhatsApp karşılama. Sonraki gün hatırlatma. Onaylanmış şablonlar + WhatsApp Business API." },
              { icon: Mail, color: "bg-brand-pink", title: "Email Dizi Pazarlama", body: "5-7 mail'lik ısıtma dizisi. Açan/açmayan segmentasyonu, davranış bazlı dallandırma. Mailchimp/Brevo/SendGrid entegre." },
              { icon: Calendar, color: "bg-brand-yellow", title: "Toplantı Otomasyonu", body: "Calendly + Google Meet entegrasyonu. Lead toplantı ayarladığında CRM güncellenir, ekibe Slack bildirimi gider." },
              { icon: CreditCard, color: "bg-brand-purple", title: "Ödeme & Fatura", body: "Iyzico, Stripe, Paytr entegrasyonu. Ödeme yapıldığında otomatik fatura, müşteri portföyüne ekleme, hoşgeldin maili." },
              { icon: Activity, color: "bg-brand-orange", title: "Raporlama & Dashboard", body: "Hangi kaynak en çok lead getiriyor, dönüşüm oranı ne, ortalama satış döngüsü kaç gün — gerçek zamanlı dashboard." },
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

          {/* Integrations strip */}
          <Reveal delay={500}>
            <div className="mt-12 border-3 border-ink bg-paper p-6 shadow-brutal-sm">
              <p className="text-xs font-black uppercase tracking-wider text-ink/60 mb-3">Entegrasyonlar:</p>
              <div className="flex flex-wrap gap-2">
                {["Google Sheets", "Notion", "WhatsApp Business", "Email (Mailchimp/Brevo)", "Calendly", "Stripe", "Iyzico", "Make.com", "n8n", "Zapier", "HubSpot", "Pipedrive", "Slack", "Airtable", "Discord", "Instagram DM"].map((t) => (
                  <span key={t} className="border-3 border-ink bg-paper px-3 py-1 text-xs font-black uppercase shadow-brutal-sm">{t}</span>
                ))}
              </div>
            </div>
          </Reveal>
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
              Brief'ten canlıya — 4-6 hafta.
            </h2>
          </Reveal>

          <div className="grid gap-8 lg:grid-cols-4">
            {[
              { week: "Hafta 1", title: "Akış Mapping", body: "Mevcut satış sürecini haritalandırıyoruz. Lead yolculuğu, sızıntı noktaları, ekip rolleri net çıkartılır.", color: "text-brand-yellow" },
              { week: "Hafta 2-3", title: "Sistem Kurulumu", body: "CRM, form, WhatsApp, email, Calendly bağlantıları kurulur. Make/n8n akışları yazılır, test edilir.", color: "text-brand-blue" },
              { week: "Hafta 4", title: "Test + Canlı", body: "Edge case'ler, KVKK uyumu, ekibe eğitim videosu + canlı eğitim. Sistem canlıya alınır.", color: "text-brand-pink" },
              { week: "Aylık", title: "Optimizasyon", body: "Dashboard üzerinden metrikler izlenir, A/B testleri yapılır, akışlar iyileştirilir. Sistem her ay daha iyi.", color: "text-brand-green" },
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
      </section>

      {/* 6. CASE STUDY */}
      <section className="bg-brand-blue py-section border-y-3 border-ink">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="inline-block border-3 border-ink bg-brand-yellow text-ink px-3 py-1 text-xs font-black uppercase tracking-wider mb-4 shadow-brutal-sm">
              Vaka Çalışması
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-display text-h2 font-black leading-tight max-w-4xl text-paper mb-6">
              "Bir danışmanlık firmasının lead-to-customer dönüşümünü %23'ten %47'ye çıkardık."
            </h2>
          </Reveal>

          <Reveal delay={200}>
            <div className="grid lg:grid-cols-[1.3fr_1fr] gap-10">
              <div className="space-y-5 text-body text-paper/90 max-w-prose">
                <p>
                  <strong className="text-paper">Durum:</strong> 12 kişilik B2B danışmanlık firması. Ayda ortalama 180 lead geliyor — LinkedIn, Google Ads, referans. Ama %23'ü müşteriye dönüyor. Satış ekibi şikayetçi: "Lead kalitesi düşük."
                </p>
                <p>
                  <strong className="text-paper">Gerçek sorun:</strong> Lead kalitesi değil — takip sistemi. Form dolan lead 2 gün sonra aranıyor, o zamana kadar rakipler aramış. Email dizisi yok. CRM (Pipedrive) güncel değil, satıcılar Excel kullanıyor.
                </p>
                <p>
                  <strong className="text-paper">Çözüm:</strong> Form → Pipedrive otomatik aktarma. Lead'e 5 dakika içinde WhatsApp + email karşılama. 7 gün boyunca 4 email'lik ısıtma dizisi. Satıcıya Slack bildirimi + Calendly link'i. CRM'de aktivite hatırlatıcıları.
                </p>
                <p>
                  <strong className="text-paper">Sonuç (90 gün):</strong> İlk yanıt süresi 2 günden 4 saate düştü. Email open rate %42, click rate %18. Lead-to-customer dönüşümü %23 → %47. Aylık satış 2.04x arttı.
                </p>
                <p className="text-sm text-paper/80 italic border-l-3 border-paper pl-4">
                  "En şaşırtıcı olan: aynı lead'lerle, aynı satıcılarla, sadece sistem değişikliği ile sayı 2 kata çıktı." — Operasyon direktörü
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4">
                <div className="border-3 border-ink bg-paper p-5 shadow-brutal">
                  <TrendingUp className="h-6 w-6 text-brand-pink mb-2" />
                  <div className="font-display text-5xl font-black text-ink leading-none">2.04x</div>
                  <div className="mt-2 text-xs font-bold uppercase tracking-wider text-ink/70">Aylık satış artışı</div>
                </div>
                <div className="border-3 border-ink bg-paper p-5 shadow-brutal">
                  <Users className="h-6 w-6 text-brand-blue mb-2" />
                  <div className="font-display text-5xl font-black text-ink leading-none">47%</div>
                  <div className="mt-2 text-xs font-bold uppercase tracking-wider text-ink/70">Yeni dönüşüm oranı</div>
                </div>
                <div className="border-3 border-ink bg-paper p-5 shadow-brutal">
                  <Activity className="h-6 w-6 text-brand-green mb-2" />
                  <div className="font-display text-5xl font-black text-ink leading-none">4h</div>
                  <div className="mt-2 text-xs font-bold uppercase tracking-wider text-ink/70">İlk yanıt süresi</div>
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
              Paketler
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-display text-h2 font-black leading-tight max-w-3xl text-ink mb-4">
              İhtiyacına göre paket — büyüdükçe büyür.
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <p className="text-body text-ink/70 max-w-2xl mb-12">
              Kurulum tek seferlik (30.000-100.000 TL aralığında, ihtiyaca göre). Aylık paketler bakım, optimizasyon, yeni akışlar ekleme dahil.
            </p>
          </Reveal>

          <div className="grid gap-6 lg:grid-cols-3">
            {/* Başlangıç */}
            <Reveal delay={150}>
              <div className="border-3 border-ink bg-paper p-7 shadow-brutal h-full flex flex-col">
                <div className="inline-flex items-center gap-2 border-3 border-ink bg-brand-yellow px-2.5 py-1 text-xs font-black uppercase mb-4 self-start">
                  <Zap className="h-3.5 w-3.5" /> Başlangıç
                </div>
                <h3 className="font-display text-2xl font-black text-ink mb-2">Lead Otomasyonu</h3>
                <p className="text-sm text-ink/70 mb-5">Lead form + WhatsApp karşılama + email diziye giriş. KOBİ ve yeni başlayan girişimler için.</p>
                <div className="border-t-3 border-ink/15 pt-5 mb-5">
                  <div className="font-display text-4xl font-black text-ink">12.000 ₺</div>
                  <div className="text-xs font-bold uppercase tracking-wider text-ink/60 mt-1">aylık (kurulum 30.000 ₺)</div>
                </div>
                <ul className="space-y-2.5 text-sm text-ink/85 mb-7 flex-1">
                  {["Form → Sheets/Notion entegrasyonu", "WhatsApp karşılama mesajı", "5 maillik email dizisi", "Temel raporlama dashboard", "1 ayda canlı, aylık bakım"].map((b, i) => (
                    <li key={i} className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-brand-green shrink-0 mt-0.5" /> {b}</li>
                  ))}
                </ul>
                <Link href="/iletisim" className="inline-flex items-center justify-center gap-2 border-3 border-ink bg-paper px-5 py-3 text-sm font-black uppercase text-ink shadow-brutal-sm hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all">
                  Teklif Al <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>

            {/* Pro - featured */}
            <Reveal delay={250}>
              <div className="border-3 border-ink bg-brand-blue p-7 shadow-brutal-lg h-full flex flex-col relative">
                <div className="absolute -top-3 left-7 inline-flex items-center gap-1 border-3 border-ink bg-brand-yellow px-2.5 py-1 text-xs font-black uppercase">
                  <Star className="h-3.5 w-3.5" /> En Çok Tercih
                </div>
                <div className="inline-flex items-center gap-2 border-3 border-ink bg-paper text-ink px-2.5 py-1 text-xs font-black uppercase mb-4 self-start">
                  <Workflow className="h-3.5 w-3.5" /> Pro
                </div>
                <h3 className="font-display text-2xl font-black text-paper mb-2">CRM Entegrasyon</h3>
                <p className="text-sm text-paper/90 mb-5">CRM (HubSpot/Pipedrive) + dizi pazarlama + segmentasyon + raporlama. Büyüyen ajanslar ve B2B.</p>
                <div className="border-t-3 border-paper/30 pt-5 mb-5">
                  <div className="font-display text-4xl font-black text-paper">25.000 ₺</div>
                  <div className="text-xs font-bold uppercase tracking-wider text-paper/80 mt-1">aylık (kurulum 50.000-70.000 ₺)</div>
                </div>
                <ul className="space-y-2.5 text-sm text-paper mb-7 flex-1">
                  {["CRM (HubSpot/Pipedrive/Zoho) entegrasyonu", "Davranış bazlı email dizileri", "Lead scoring + segmentasyon", "Calendly + Slack ekip bildirimleri", "Detaylı dashboard + aylık rapor", "2 yeni akış / ay kurulumu dahil"].map((b, i) => (
                    <li key={i} className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-brand-yellow shrink-0 mt-0.5" /> {b}</li>
                  ))}
                </ul>
                <Link href="/iletisim" className="inline-flex items-center justify-center gap-2 border-3 border-ink bg-ink px-5 py-3 text-sm font-black uppercase text-paper shadow-brutal hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all">
                  Teklif Al <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>

            {/* Kurumsal */}
            <Reveal delay={350}>
              <div className="border-3 border-ink bg-paper p-7 shadow-brutal h-full flex flex-col">
                <div className="inline-flex items-center gap-2 border-3 border-ink bg-brand-purple text-paper px-2.5 py-1 text-xs font-black uppercase mb-4 self-start">
                  <Database className="h-3.5 w-3.5" /> Kurumsal
                </div>
                <h3 className="font-display text-2xl font-black text-ink mb-2">Özel İş Akışları</h3>
                <p className="text-sm text-ink/70 mb-5">Tamamen özel iş akışları, ERP entegrasyonu, çoklu ekip yönetimi, gelişmiş raporlama. Kurumsal şirketler.</p>
                <div className="border-t-3 border-ink/15 pt-5 mb-5">
                  <div className="font-display text-4xl font-black text-ink">50.000+ ₺</div>
                  <div className="text-xs font-bold uppercase tracking-wider text-ink/60 mt-1">aylık (kurulum 70.000-100.000 ₺)</div>
                </div>
                <ul className="space-y-2.5 text-sm text-ink/85 mb-7 flex-1">
                  {["ERP / muhasebe / faturalama entegrasyonu", "Çoklu departman + rol yönetimi", "Özel dashboard + KPI raporları", "Lead scoring + AI segmentasyon", "Sınırsız akış kurulumu + bakım", "Adanmış proje yöneticisi"].map((b, i) => (
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
                <Link href="/hizmetler/otomasyon" className="inline-flex items-center gap-1.5 border-3 border-ink bg-brand-blue text-paper px-3 py-1.5 text-xs font-black uppercase shadow-brutal-sm hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all">
                  Otomasyon Hizmet Detayı <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
                <Link href="/blog/crm-otomasyonu-rehberi" className="inline-flex items-center gap-1.5 border-3 border-ink bg-paper px-3 py-1.5 text-xs font-black uppercase shadow-brutal-sm hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all">
                  CRM Otomasyonu Rehberi <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
                <Link href="/blog/isletmeler-icin-surec-otomasyonu" className="inline-flex items-center gap-1.5 border-3 border-ink bg-paper px-3 py-1.5 text-xs font-black uppercase shadow-brutal-sm hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all">
                  İşletmeler İçin Süreç Otomasyonu <ArrowUpRight className="h-3.5 w-3.5" />
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
              { q: "CRM otomasyonu nedir, bana ne fayda sağlar?", a: "Lead'in form doldurduğu andan müşteriye dönüştüğü ana kadar tüm temas noktalarını otomatik yöneten sistem. Satış ekibinizin manuel takip yükü %70 azalır, dönüşüm ortalama 1.5-2 kat artar." },
              { q: "Hangi CRM sistemlerini destekliyorsunuz?", a: "HubSpot, Pipedrive, Zoho, Bitrix24, Monday, Notion, Airtable, Google Sheets ve özel CRM'ler — Make/n8n/Zapier ile bağlanabilen her CRM. Mevcut sisteminizi değiştirmek zorunda değilsiniz." },
              { q: "Aylık paket mi tek seferlik kurulum mu?", a: "İkisi de var. Kurulum tek seferlik (30K-100K TL), aylık yönetim/optimizasyon paketleri 12K TL/ay'dan başlıyor. Sadece kurulum yapıp kendiniz yönetebilirsiniz." },
              { q: "Hangi entegrasyonları kurabiliyorsunuz?", a: "WhatsApp Business, Instagram DM, Email (Mailchimp/SendGrid/Brevo), Calendly, Stripe, Iyzico, Notion, Sheets, Slack ve Make/n8n/Zapier ile bağlanabilen 1000+ uygulama." },
              { q: "Ne kadar sürede canlıya geçer?", a: "Başlangıç paketi 1-2 hafta, Pro paket 3-4 hafta, Kurumsal kurulum 6-8 hafta. Akış mapping ne kadar net olursa kurulum o kadar hızlı." },
              { q: "Lead'lerim sizde mi saklanıyor?", a: "Hayır. Tüm veriler size ait CRM ve veritabanlarınızda kalır. Biz sadece otomasyon akışını kuruyoruz. KVKK ve GDPR uyumlu yapılandırma standart dahil." },
              { q: "Sistem kurulduktan sonra bakım gerekiyor mu?", a: "Evet. API değişiklikleri, akış optimizasyonu, A/B testleri için aylık bakım önerilir. Bakım almasanız bile sistem 6-12 ay çalışır — ama optimizasyon olmadan potansiyelin %50'sini bırakırsınız." },
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
      <RelatedSectorsSection service="crm-otomasyonu" />
      <RelatedLocationsSection service="crm-otomasyonu" />

      <section className="bg-brand-yellow py-section border-t-3 border-ink">
        <div className="mx-auto max-w-container px-6">
          <div className="grid lg:grid-cols-[1.5fr_1fr] gap-10 items-center">
            <Reveal>
              <div>
                <div className="inline-block border-3 border-ink bg-paper text-ink px-3 py-1 text-xs font-black uppercase tracking-wider mb-4 shadow-brutal-sm">
                  Sıra sizde
                </div>
                <h2 className="font-display text-h2 font-black leading-tight text-ink mb-5">
                  Lead'leriniz buharlaşmaktan kurtulsun. 1 ayda canlı sistem.
                </h2>
                <p className="text-body text-ink/80 mb-7 max-w-prose">
                  30 dakikalık ücretsiz akış analizinde mevcut satış sürecinizdeki sızıntıları gösteriyoruz. Sonra ihtiyacınıza özel paket önerisi.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/iletisim"
                    className="inline-flex items-center justify-center gap-2 border-3 border-ink bg-ink px-6 py-3.5 text-sm font-black uppercase text-paper shadow-brutal hover:-translate-x-1 hover:-translate-y-1 hover:shadow-brutal-lg transition-all"
                  >
                    Ücretsiz Analiz Al <ArrowUpRight className="h-4 w-4" />
                  </Link>
                  <a
                    href="https://wa.me/905015884853"
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
                    <a href="tel:+905015884853" className="font-display text-lg font-black text-ink hover:underline">0501 588 48 53</a>
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
                    <Link href="/web-tasarim" className="text-xs font-black uppercase border-3 border-ink bg-brand-pink text-paper px-2 py-1 shadow-brutal-sm hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all">
                      Web Tasarım
                    </Link>
                    <Link href="/whatsapp-ai-asistani" className="text-xs font-black uppercase border-3 border-ink bg-brand-green text-paper px-2 py-1 shadow-brutal-sm hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all">
                      WhatsApp AI
                    </Link>
                    <Link href="/instagram-dm-otomasyonu" className="text-xs font-black uppercase border-3 border-ink bg-brand-purple text-paper px-2 py-1 shadow-brutal-sm hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all">
                      Instagram DM
                    </Link>
                    <Link href="/ai-reklam-videosu" className="text-xs font-black uppercase border-3 border-ink bg-brand-orange text-paper px-2 py-1 shadow-brutal-sm hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all">
                      AI Reklam Videosu
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
