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
  TrendingUp,
  Users,
  Activity,
  Star,
  Phone,
  MapPin,
  Boxes,
} from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";
import { RelatedSectorsSection } from "@/components/landing/RelatedSectorsSection";
import { RelatedLocationsSection } from "@/components/landing/RelatedLocationsSection";
import { PricingSection } from "@/components/pricing/PricingSection";
import { ServiceAtAGlance } from "@/components/visual/ServiceAtAGlance";
import { MoreDetails } from "@/components/visual/MoreDetails";
import { familyPriceSummary, maintenanceSummary } from "@/data/pricing";

const URL = "https://portzenai.com/crm-otomasyonu";
const TITLE = "CRM Otomasyonu | Lead Takibini Otomatikleştiren Sistem — PORTZEN";
const DESCRIPTION =
  "Manuel takibe son. Lead toplama, CRM entegrasyonu, satış otomasyonu ve iş süreçleri otomasyonu tek sistemde. WhatsApp, email, Sheets, Notion entegre. Teslim süresi kapsama göre teklifte yazılı olarak belirtilir.";

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
  },
  areaServed: { "@type": "Country", name: "Türkiye" },
  description: DESCRIPTION,
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
        text: "Bir lead'in form doldurduğu andan müşteriye dönüştüğü ana kadar tüm temas noktalarını otomatik yöneten sistemdir. Form gelen lead CRM'e otomatik düşer, karşılama mesajı gider, takip hatırlatmaları satıcıya atanır; satış ekibiniz manuel veri girişi yerine görüşmeye odaklanır.",
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
        text: `Kurulum tek seferliktir (KDV hariç): ${familyPriceSummary("is-otomasyonu")}. İlk 30 gün kurulum hatalarının giderilmesi dahildir; isteğe bağlı aylık bakım ikinci aydan itibaren ${maintenanceSummary()}. İsterseniz yalnızca kurulum alıp sistemi kendiniz yönetebilirsiniz.`,
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
        text: "Teslim süresi kapsama göre teklifte yazılı olarak belirtilir; iş akışı ve bağlanacak uygulama sayısı arttıkça süre uzar. Akış mapping süreci ne kadar net olursa kurulum o kadar hızlı tamamlanır.",
      },
    },
    {
      "@type": "Question",
      name: "Lead'lerim sizde mi saklanıyor?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hayır. Tüm veriler size ait CRM ve veritabanlarınızda kalır. Biz sadece otomasyon akışını kuruyoruz. Akışlar KVKK ve GDPR gerekliliklerini dikkate alarak (açık rıza, aydınlatma) yapılandırılır.",
      },
    },
    {
      "@type": "Question",
      name: "Sistem kurulduktan sonra bakım gerekiyor mu?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Evet. API değişiklikleri, akış optimizasyonu, A/B testleri için aylık bakım önerilir. Bakım almasanız da kurulan akışlar çalışmaya devam eder; ancak API değişikliklerinde akışların güncellenmesi gerekebilir; iyileştirme ve test çalışmaları bakım kapsamında planlanır.",
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
      <section className="bg-white py-section border-b-3 border-ink/15">
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
                <div className="inline-flex items-center gap-2 border-3 border-ink/15 bg-slate text-white px-3 py-1.5 shadow-brutal-sm mb-6 rounded-full">
                  <Sparkles className="h-4 w-4" />
                  <span className="text-xs font-black uppercase tracking-wider">CRM & İş Süreçleri Otomasyonu</span>
                </div>
              </Reveal>

              <Reveal delay={100}>
                <h1 className="font-display text-h1 font-black leading-tight text-ink">
                  CRM Otomasyonu | Lead Takibini Otomatikleştiren Sistem
                </h1>
              </Reveal>

              <Reveal delay={200}>
                <p className="mt-6 max-w-prose text-body text-ink/80 font-medium">
                  Lead toplama, takip, CRM entegrasyonu, email + WhatsApp dizileri — hepsi tek sistemde, otomatik. Satış ekibiniz <strong className="text-ink">manuel takiple zaman kaybetmesin</strong>, ısınmış lead&apos;lerle konuşsun. KOBİ, ajans, danışmanlık ve B2B hizmet şirketleri için.
                </p>
              </Reveal>

              <Reveal delay={300}>
                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/iletisim"
                    className="inline-flex items-center justify-center gap-2 border-3 border-ink/15 bg-slate px-6 py-3.5 text-sm font-black text-white shadow-brutal hover:shadow-brutal-lg transition-all rounded-full"
                  >
                    Ücretsiz Akış Analizi <ArrowUpRight className="h-4 w-4" />
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
                  <span className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-ink" /> Tek Seferlik Kurulum</span>
                  <span className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-ink" /> KVKK Odaklı Kurulum</span>
                  <span className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-ink" /> 1000+ Entegrasyon</span>
                </div>
              </Reveal>
            </div>

            <Reveal delay={350}>
              <div className="grid grid-cols-2 gap-4">
                <div className="border-3 border-ink/15 bg-light p-5 shadow-brutal rounded-2xl">
                  <div className="font-display text-5xl font-black text-ink leading-none">Tek sefer</div>
                  <div className="mt-2 text-xs font-bold uppercase tracking-wider text-ink/90">Kurulum, bakım isteğe bağlı</div>
                </div>
                <div className="border-3 border-ink/15 bg-light p-5 shadow-brutal rounded-2xl">
                  <div className="font-display text-5xl font-black text-ink leading-none">7/24</div>
                  <div className="mt-2 text-xs font-bold uppercase tracking-wider text-ink/85">Akışlar mesai dışında da çalışır</div>
                </div>
                <div className="border-3 border-ink/15 bg-light p-5 shadow-brutal rounded-2xl">
                  <div className="font-display text-5xl font-black text-ink leading-none">Otomatik</div>
                  <div className="mt-2 text-xs font-bold uppercase tracking-wider text-ink/90">Lead&apos;e ilk temas mesajı</div>
                </div>
                <div className="border-3 border-ink/15 bg-light p-5 shadow-brutal rounded-2xl">
                  <div className="font-display text-5xl font-black text-ink leading-none">1K+</div>
                  <div className="mt-2 text-xs font-bold uppercase tracking-wider text-ink/90">Entegrasyon havuzu</div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <ServiceAtAGlance href="/crm-otomasyonu" />

      <MoreDetails title="Ayrıntılar: Tanıdık sorunlar" summary="Kaybolan lead'ler, geç yanıt, dağınık veri">
      {/* 2. PROBLEM */}
      <section className="bg-white text-ink py-section">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="inline-block border-3 border-ink/10 bg-slate text-white px-3 py-1 text-xs font-black tracking-wider mb-4 rounded-full">
              Tanıdık geliyor mu?
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-display text-h2 font-black leading-tight max-w-3xl mb-4">
              Manuel takip = kaybedilen müşteri. Her gün lead&apos;ler buharlaşıyor.
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <p className="text-body text-ink/70 max-w-2xl mb-12">
              Reklam parasını lead getirmek için harcıyorsun ama sistem yok. Sonuç: lead&apos;lerin çoğu unutuluyor, takip edilmiyor, satışa dönmüyor.
            </p>
          </Reveal>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Lead Excel'de kayboluyor", body: "Form gelen mail'i unutuyorsun, Excel'de güncellenmiyor, satıcı arıyor ama bilgi yok. Lead 48 saat içinde soğuyor." },
              { title: "İlk yanıt 2 günde geliyor", body: "Lead form doldurduğunda hala sıcak. Ama satış ekibi ancak 2 gün sonra geri arıyor. O sırada rakibe gitti." },
              { title: "Aynı bilgi 5 yere giriliyor", body: "Form → Excel → CRM → WhatsApp grubu → Notion. Aynı isim 5 farklı yerde, hiçbiri güncel değil. Veri kaosu." },
              { title: "Takip sırası kayboluyor", body: "Hangi lead'i ne zaman aramalıyım? Kim sıcak, kim soğuk? Liste yok, hatırlatıcı yok, herkes kendi kafasına göre." },
              { title: "Email dizileri yok", body: "Lead'i topluyorsun ama sonra ne? Tek mail atıp bırakıyorsun. 5-7 mailden oluşan ısıtma dizisi, lead'e sıralı ve düzenli temas sağlar." },
              { title: "Raporlama yok", body: "Hangi kampanya lead getirdi? Hangi kaynak müşteriye çevirdi? Bilmiyorsun çünkü veri parçalı. Reklam bütçesi körlemesine harcanıyor." },
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
              { icon: Boxes, color: "bg-light", title: "Lead Toplama & Etiketleme", body: "Form, landing, Instagram DM, WhatsApp gelen tüm lead'ler otomatik CRM'e düşer, kaynağa göre etiketlenir, atanır." },
              { icon: MessageCircle, color: "bg-light", title: "WhatsApp Otomasyonu", body: "Form dolduran anında WhatsApp karşılama. Sonraki gün hatırlatma. Onaylanmış şablonlar + WhatsApp Business API." },
              { icon: Mail, color: "bg-light", title: "Email Dizi Pazarlama", body: "5-7 mail'lik ısıtma dizisi. Açan/açmayan segmentasyonu, davranış bazlı dallandırma. Mailchimp/Brevo/SendGrid entegre." },
              { icon: Calendar, color: "bg-light", title: "Toplantı Otomasyonu", body: "Calendly + Google Meet entegrasyonu. Lead toplantı ayarladığında CRM güncellenir, ekibe Slack bildirimi gider." },
              { icon: CreditCard, color: "bg-light", title: "Ödeme & Fatura", body: "Iyzico, Stripe, Paytr entegrasyonu. Ödeme yapıldığında otomatik fatura, müşteri portföyüne ekleme, hoşgeldin maili." },
              { icon: Activity, color: "bg-light", title: "Raporlama & Dashboard", body: "Hangi kaynak en çok lead getiriyor, dönüşüm oranı ne, ortalama satış döngüsü kaç gün — gerçek zamanlı dashboard." },
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

          {/* Integrations strip */}
          <Reveal delay={500}>
            <div className="mt-12 border-3 border-ink/15 bg-paper p-6 shadow-brutal-sm rounded-2xl">
              <p className="text-xs font-black uppercase tracking-wider text-ink/60 mb-3">Entegrasyonlar:</p>
              <div className="flex flex-wrap gap-2">
                {["Google Sheets", "Notion", "WhatsApp Business", "Email (Mailchimp/Brevo)", "Calendly", "Stripe", "Iyzico", "Make.com", "n8n", "Zapier", "HubSpot", "Pipedrive", "Slack", "Airtable", "Discord", "Instagram DM"].map((t) => (
                  <span key={t} className="border-3 border-ink/15 bg-paper px-3 py-1 text-xs font-black shadow-brutal-sm rounded-full">{t}</span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <MoreDetails title="Ayrıntılar: Örnek senaryo — B2B danışmanlık" summary="Lead takibi nasıl otomatikleşir?">
      {/* 6. CASE STUDY */}
      <section className="bg-white py-section border-y-3 border-ink/15">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="inline-block border-3 border-ink/15 bg-slate text-white px-3 py-1 text-xs font-black tracking-wider mb-4 shadow-brutal-sm rounded-full">
              Örnek Senaryo
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-display text-h2 font-black leading-tight max-w-4xl text-ink mb-6">
              Örnek senaryo: bir B2B danışmanlık firmasında lead takibi nasıl otomatikleşir?
            </h2>
          </Reveal>

          <Reveal delay={200}>
            <div className="grid lg:grid-cols-[1.3fr_1fr] gap-10">
              <div className="space-y-5 text-body text-ink/90 max-w-prose">
                <p>
                  <strong className="text-ink">Durum:</strong> Bu örnek senaryoda 12 kişilik bir B2B danışmanlık firmasına LinkedIn, Google Ads ve referanstan düzenli lead geliyor. Satış ekibi şikayetçi: &quot;Lead kalitesi düşük.&quot;
                </p>
                <p>
                  <strong className="text-ink">Gerçek sorun:</strong> Lead kalitesi değil — takip sistemi. Form dolduran lead ancak günler sonra aranıyor, o zamana kadar rakipler aramış. Email dizisi yok. CRM (Pipedrive) güncel değil, satıcılar Excel kullanıyor.
                </p>
                <p>
                  <strong className="text-ink">Çözüm:</strong> Form → Pipedrive otomatik aktarma. Lead&apos;e otomatik WhatsApp + email karşılama. 7 gün boyunca 4 email&apos;lik ısıtma dizisi. Satıcıya Slack bildirimi + Calendly link&apos;i. CRM&apos;de aktivite hatırlatıcıları.
                </p>
                <p>
                  <strong className="text-ink">İş akışında ne değişir:</strong> Lead form doldurduğunda CRM&apos;e kendiliğinden düşer ve karşılama mesajı otomatik gider; satıcı Slack&apos;ten bildirim alır, takip hatırlatmaları CRM&apos;de görünür. Hangi kaynağın lead getirdiği tek panelden izlenir.
                </p>
                <p className="text-sm text-ink/80 italic border-l-3 border-ink/10 pl-4">
                  Bu bölüm örnek bir kurulumu anlatır; gerçek bir müşteri sonucu değildir.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4">
                <div className="border-3 border-ink/15 bg-paper p-5 shadow-brutal rounded-2xl">
                  <TrendingUp className="h-6 w-6 text-ink mb-2" />
                  <div className="font-display text-5xl font-black text-ink leading-none">Otomatik</div>
                  <div className="mt-2 text-xs font-bold uppercase tracking-wider text-ink/70">CRM&apos;e lead aktarımı</div>
                </div>
                <div className="border-3 border-ink/15 bg-paper p-5 shadow-brutal rounded-2xl">
                  <Users className="h-6 w-6 text-ink mb-2" />
                  <div className="font-display text-5xl font-black text-ink leading-none">E-posta</div>
                  <div className="mt-2 text-xs font-bold uppercase tracking-wider text-ink/70">Isıtma dizisi</div>
                </div>
                <div className="border-3 border-ink/15 bg-paper p-5 shadow-brutal rounded-2xl">
                  <Activity className="h-6 w-6 text-ink mb-2" />
                  <div className="font-display text-5xl font-black text-ink leading-none">Slack</div>
                  <div className="mt-2 text-xs font-bold uppercase tracking-wider text-ink/70">Satıcıya bildirim</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      </MoreDetails>
      {/* FİYATLAR — kaynak: src/data/pricing.ts */}

      <PricingSection family="is-otomasyonu" heading="CRM ve iş otomasyonu fiyatları" intro="CRM, n8n ve Make çözümleri tek başlık altında. Kurulum tek seferliktir; ilk 30 gün kurulum hatalarının giderilmesi dahildir, isteğe bağlı aylık bakım ikinci aydan itibaren başlar. Tutarlar TL ve KDV hariçtir." />


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
              { q: "CRM otomasyonu nedir, bana ne fayda sağlar?", a: "Lead'in form doldurduğu andan müşteriye dönüştüğü ana kadar tüm temas noktalarını otomatik yöneten sistem. Form gelen lead CRM'e otomatik düşer, karşılama mesajı gider, takip hatırlatmaları satıcıya atanır; satış ekibiniz manuel veri girişi yerine görüşmeye odaklanır." },
              { q: "Hangi CRM sistemlerini destekliyorsunuz?", a: "HubSpot, Pipedrive, Zoho, Bitrix24, Monday, Notion, Airtable, Google Sheets ve özel CRM'ler — Make/n8n/Zapier ile bağlanabilen her CRM. Mevcut sisteminizi değiştirmek zorunda değilsiniz." },
              { q: "Aylık paket mi tek seferlik kurulum mu?", a: `Kurulum tek seferliktir (KDV hariç): ${familyPriceSummary("is-otomasyonu")}. İlk 30 gün kurulum hatalarının giderilmesi dahildir; isteğe bağlı aylık bakım ikinci aydan itibaren ${maintenanceSummary()}. İsterseniz yalnızca kurulum alıp sistemi kendiniz yönetebilirsiniz.` },
              { q: "Hangi entegrasyonları kurabiliyorsunuz?", a: "WhatsApp Business, Instagram DM, Email (Mailchimp/SendGrid/Brevo), Calendly, Stripe, Iyzico, Notion, Sheets, Slack ve Make/n8n/Zapier ile bağlanabilen 1000+ uygulama." },
              { q: "Ne kadar sürede canlıya geçer?", a: "Teslim süresi kapsama göre teklifte yazılı olarak belirtilir; iş akışı ve bağlanacak uygulama sayısı arttıkça süre uzar. Akış mapping ne kadar net olursa kurulum o kadar hızlı." },
              { q: "Lead'lerim sizde mi saklanıyor?", a: "Hayır. Tüm veriler size ait CRM ve veritabanlarınızda kalır. Biz sadece otomasyon akışını kuruyoruz. Akışlar KVKK ve GDPR gerekliliklerini dikkate alarak (açık rıza, aydınlatma) yapılandırılır." },
              { q: "Sistem kurulduktan sonra bakım gerekiyor mu?", a: "Evet. API değişiklikleri, akış optimizasyonu, A/B testleri için aylık bakım önerilir. Bakım almasanız da kurulan akışlar çalışmaya devam eder; ancak API değişikliklerinde akışların güncellenmesi gerekebilir; iyileştirme ve test çalışmaları bakım kapsamında planlanır." },
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
      <RelatedSectorsSection service="crm-otomasyonu" />
      <RelatedLocationsSection service="crm-otomasyonu" />

      <section className="bg-white py-section border-t-3 border-ink/15">
        <div className="mx-auto max-w-container px-6">
          <div className="grid lg:grid-cols-[1.5fr_1fr] gap-10 items-center">
            <Reveal>
              <div>
                <div className="inline-block border-3 border-ink/15 bg-paper text-ink px-3 py-1 text-xs font-black tracking-wider mb-4 shadow-brutal-sm rounded-full">
                  Sıra sizde
                </div>
                <h2 className="font-display text-h2 font-black leading-tight text-ink mb-5">
                  Lead takibinizi sistemli hale getirelim.
                </h2>
                <p className="text-body text-ink/80 mb-7 max-w-prose">
                  30 dakikalık ücretsiz akış analizinde mevcut satış sürecinizdeki sızıntıları gösteriyoruz. Sonra ihtiyacınıza özel paket önerisi.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/iletisim"
                    className="inline-flex items-center justify-center gap-2 border-3 border-ink/15 bg-slate px-6 py-3.5 text-sm font-black text-white shadow-brutal hover:shadow-brutal-lg transition-all rounded-full"
                  >
                    Teklif İsteyin <ArrowUpRight className="h-4 w-4" />
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
                    <Link href="/web-tasarim" className="text-xs font-black border-3 border-ink/15 bg-slate text-white px-2 py-1 shadow-brutal-sm transition-all rounded-full">
                      Web Tasarım
                    </Link>
                    <Link href="/whatsapp-ai-asistani" className="text-xs font-black border-3 border-ink/15 bg-slate text-white px-2 py-1 shadow-brutal-sm transition-all rounded-full">
                      WhatsApp AI
                    </Link>
                    <Link href="/instagram-dm-otomasyonu" className="text-xs font-black border-3 border-ink/15 bg-slate text-white px-2 py-1 shadow-brutal-sm transition-all rounded-full">
                      Instagram DM
                    </Link>
                    <Link href="/ai-reklam-videosu" className="text-xs font-black border-3 border-ink/15 bg-slate text-white px-2 py-1 shadow-brutal-sm transition-all rounded-full">
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
