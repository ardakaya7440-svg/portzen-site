import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowUpRight,
  Check,
  X,
  MessageCircle,
  Phone,
  Sparkles,
  ShieldCheck,
  Workflow,
  Plug,
  HeadphonesIcon,
  CheckCircle2,
  Building2,
  Wallet,
  Boxes,
  TrendingUp
} from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Logo Yazılım Alternatifi | Modern KOBİ İçin ERP + AI Otomasyon - PORTZEN",
  description:
    "Logo Tiger/Mikro/Netsis kullanıyorsunuz ama otomasyon eksik. PORTZEN n8n + Make + custom workflow ile aynı ERP gücüne, daha esnek ve daha ucuz otomasyon katmanı kurar.",
  keywords: [
    "logo yazılım alternatifi",
    "logo tiger alternatif",
    "mikro yazılım alternatifi",
    "netsis alternatifi",
    "kobi erp otomasyon",
    "logo n8n entegrasyon",
    "modern erp türkiye",
    "logo yazılım eksiklikleri"
  ],
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://portzenai.com/logo-yazilim-alternatifi",
    siteName: "PORTZEN",
    title: "Logo Yazılım Alternatifi | Modern KOBİ İçin ERP + AI Otomasyon",
    description:
      "Logo geleneksel ERP, biz modern otomasyon katmanı. Mevcut Logo/Mikro/Netsis kurulumunuzu kaldırmadan n8n + AI workflow ile güçlendiriyoruz."
  },
  twitter: {
    card: "summary_large_image",
    title: "Logo Yazılım Alternatifi | PORTZEN",
    description:
      "Logo Tiger/Mikro/Netsis üstüne n8n + AI otomasyon. Daha esnek, daha ucuz, KOBİ için."
  },
  alternates: { canonical: "https://portzenai.com/logo-yazilim-alternatifi" },
  robots: { index: true, follow: true }
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Logo Yazılım Alternatifi - PORTZEN Modern ERP Otomasyon Katmanı",
  provider: {
    "@type": "Organization",
    name: "PORTZEN",
    url: "https://portzenai.com",
    telephone: "+905015884853",
    email: "destek@portzenai.com"
  },
  serviceType: "ERP Automation Layer",
  areaServed: { "@type": "Country", name: "Turkey" },
  description:
    "Logo Tiger, Mikro Fly, Netsis Wings gibi geleneksel ERP yazılımlarına n8n + Make + custom workflow ile modern otomasyon katmanı ekleyen, KOBİ için tasarlanmış esnek çözüm.",
  offers: {
    "@type": "Offer",
    priceCurrency: "TRY",
    priceRange: "₺15000-₺55000",
    availability: "https://schema.org/InStock"
  }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Logo Tiger kurulumumu kaldırmam mı gerekecek?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hayır. PORTZEN, Logo Tiger / Mikro Fly / Netsis Wings kurulumunuzu değiştirmez. Üzerine otomasyon katmanı kurar. Logo muhasebe + stok + faturalama modülleri aynen kalır, biz CRM + lead + WhatsApp + email tarafını otomatik bağlarız."
      }
    },
    {
      "@type": "Question",
      name: "Logo'nun kendi CRM'i var, neden PORTZEN'e ihtiyacım var?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Logo CRM modülü temel pipeline yönetimi yapar ama WhatsApp Business API entegrasyonu, modern lead scoring, e-mail otomasyon, web form connector ve AI destekli müşteri analizi sunmaz. PORTZEN bunları Logo verisi üstüne kurar."
      }
    },
    {
      "@type": "Question",
      name: "Logo Tiger'dan Netsis'e ya da Mikro'ya geçiş planlıyorum, beklemeli miyim?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hayır, beklemenize gerek yok. PORTZEN'in otomasyon katmanı API tabanlı çalışır, hangi ERP'de olursanız olun aynı çalışır. Logo'dan Netsis'e geçerseniz biz sadece backend connector'ını değiştiririz, sizin otomasyon akışınız bozulmaz."
      }
    },
    {
      "@type": "Question",
      name: "Logo Yazılım yıllık bakım ücretini ödüyorum, üstüne PORTZEN ödemek mantıklı mı?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Logo bakım ücreti (yıllık 8.000 - 25.000 TL arası) ERP modülleri için. PORTZEN otomasyon katmanı için aylık ödersiniz ve genelde 4-6 ayda kendi maliyetini çıkarır - manuel veri girişi azaldığı için. İki çözüm farklı katmanlarda, birbirini tamamlar."
      }
    },
    {
      "@type": "Question",
      name: "Mevcut Logo verilerimi PORTZEN okuyabilir mi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Evet. Logo Tiger'ın REST API'sini, Logo Diva web servislerini ve Logo Workflow modülünü kullanarak cari hesap, fatura, sipariş ve stok verilerini gerçek zamanlı okur. Mikro Fly Web API ve Netsis HTSWeb için de hazır connector'larımız var."
      }
    },
    {
      "@type": "Question",
      name: "KVKK uyumlu mu?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Evet. PORTZEN otomasyon katmanı Türkiye sunucularında çalışır, KVKK aydınlatma metni, açık rıza akışı, veri silme talep formu ve VERBİS kayıt desteği paket dahildir. Logo / Mikro / Netsis verileri Türkiye'de işlenir."
      }
    },
    {
      "@type": "Question",
      name: "Kurulum ne kadar sürer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Mevcut ERP'nizin durumuna göre 14-30 iş günü. İlk hafta Logo / Mikro / Netsis API erişimi + veri haritalama, ikinci hafta n8n akışları + WhatsApp + e-mail entegrasyonu, üçüncü hafta test + ekip eğitimi."
      }
    }
  ]
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Anasayfa", item: "https://portzenai.com" },
    {
      "@type": "ListItem",
      position: 2,
      name: "Logo Yazılım Alternatifi",
      item: "https://portzenai.com/logo-yazilim-alternatifi"
    }
  ]
};

const stats = [
  { metric: "%60", label: "Manuel veri girişi azalır" },
  { metric: "21 gün", label: "Otomasyon katmanı kurulumu" },
  { metric: "KVKK", label: "TR sunucu, açık rıza dahil" },
  { metric: "WhatsApp", label: "Logo verisiyle direkt bağlı" }
];

const painPoints = [
  {
    title: "Logo CRM modülü temel kalıyor",
    desc: "Logo CRM, cari kart + pipeline yapısı sunar ama WhatsApp Business API, AI lead scoring ve modern email otomasyonu yok. Üstüne ek modül lisansı pahalı."
  },
  {
    title: "Mobil deneyim zayıf",
    desc: "Logo Mobile uygulaması saha satış için tasarlandı, sadece veri görüntülemek için 12 tıklama lazım. Modern KOBİ ekipleri WhatsApp + tablet ile çalışmak istiyor."
  },
  {
    title: "Otomasyon için Logo Workflow ek lisans",
    desc: "Logo Workflow Plus modülü tek başına 35.000 - 70.000 TL bir defalık lisans, üstüne yıllık bakım. KOBİ için fazla."
  },
  {
    title: "Modern entegrasyonlar eksik",
    desc: "Shopify, WooCommerce, Trendyol, n11, Hepsiburada gibi e-ticaret platformlarına direkt Logo connector yok. Hep ortada bir middleware veya Excel kopyala-yapıştır."
  },
  {
    title: "AI ve LLM desteği yok",
    desc: "Lead notlarını özetleyen, müşteri konuşmasını analiz eden, fatura PDF'ini okuyup veri çıkaran modern AI özellikleri Logo / Mikro / Netsis'te bulunmuyor."
  },
  {
    title: "Esnek değil",
    desc: "Yeni bir iş akışı ya da custom rapor için bayisinden teklif alıp 4-8 hafta beklersiniz. PORTZEN'de aynı işi 2-5 gün içinde n8n üstünde kurarız."
  }
];

const comparisonRows = [
  { feature: "Aylık maliyet", manychat: "Logo modül + bakım: ~₺25.000+", portzen: "₺15.000 - ₺55.000/ay sabit" },
  { feature: "WhatsApp Business API resmi", manychat: "Yok (3rd party gerekir)", portzen: "Meta resmi iş ortağı, dahil" },
  { feature: "Modern lead scoring + AI", manychat: "Yok", portzen: "n8n + LLM ile dahil" },
  { feature: "E-ticaret entegrasyon", manychat: "Hep middleware gerekir", portzen: "Shopify/Woo/Trendyol direkt" },
  { feature: "Logo / Mikro / Netsis okuma-yazma", manychat: "Tek ERP'ye kilitli", portzen: "Hepsine API ile bağlı" },
  { feature: "Yeni akış kurulum süresi", manychat: "Bayisinden 4-8 hafta", portzen: "n8n üstünde 2-5 gün" },
  { feature: "Web form + lead capture", manychat: "Logo Web Site Suite ek ücret", portzen: "Custom React form dahil" },
  { feature: "Türkçe canlı destek", manychat: "Bayi destek, geç dönüş", portzen: "WhatsApp + telefon aynı gün" },
  { feature: "KVKK aydınlatma + VERBİS desteği", manychat: "Modülde değil", portzen: "Paket dahil" },
  { feature: "Sözleşme süresi", manychat: "Yıllık lisans + bakım", portzen: "Aylık esnek" }
];

const solutionSteps = [
  {
    icon: Workflow,
    title: "Brief",
    description: "Mevcut Logo / Mikro / Netsis kurulumunuzu inceliyoruz. Hangi süreçlerin manuel olduğunu, hangi entegrasyonların eksik kaldığını birlikte listeliyoruz."
  },
  {
    icon: Plug,
    title: "API Bağlantısı",
    description: "Logo Tiger REST API, Mikro Web Servisler veya Netsis HTSWeb'e güvenli bağlantı kuruyoruz. ERP veriniz Türkiye sunucusunda kalır."
  },
  {
    icon: Sparkles,
    title: "Otomasyon Akışları",
    description: "n8n + Make + custom kod ile WhatsApp, e-mail, web form, e-ticaret entegrasyonları kurulur. Logo cari kart + fatura otomatik sync."
  },
  {
    icon: CheckCircle2,
    title: "Eğitim + Canlı",
    description: "Ekibinize 4 saatlik canlı Türkçe eğitim. Logo deneyiminiz aynen kalır, üstüne modern otomasyon paneli eklenir."
  }
];

const features = [
  { icon: Boxes, title: "Logo / Mikro / Netsis üzerinde çalışır", desc: "ERP'nizi değiştirmiyoruz. Cari hesap, fatura, stok, sipariş verisi Logo'da kalır. PORTZEN sadece otomasyon katmanı ekler." },
  { icon: MessageCircle, title: "WhatsApp Business API + Logo cari", desc: "Müşteri WhatsApp'tan yazınca otomatik Logo cari kartı açılır, eski sipariş geçmişi cevap olarak gelir." },
  { icon: Plug, title: "E-ticaret connector'ları", desc: "Shopify, WooCommerce, Trendyol, n11, Hepsiburada siparişleri otomatik Logo'ya düşer. Stok geri sync olur." },
  { icon: ShieldCheck, title: "KVKK + Türkiye sunucu", desc: "Otomasyon katmanı Türkiye lokasyonlu sunucuda. Aydınlatma metni, açık rıza, VERBİS kayıt desteği dahil." },
  { icon: TrendingUp, title: "AI lead scoring + analiz", desc: "n8n + LLM kombinasyonu ile lead'lere skor verir, müşteri konuşmalarını özetler, fatura PDF'inden veri çıkarır." },
  { icon: HeadphonesIcon, title: "Türkçe canlı destek", desc: "WhatsApp + telefon ile aynı gün dönüş. Logo bayisi geç dönüşleri yerine direkt PORTZEN ekibi." }
];

const packages = [
  {
    name: "Başlangıç",
    price: "15.000 TL",
    period: "/ay",
    setup: "Kurulum: 40.000 TL",
    color: "bg-paper",
    features: [
      "Logo / Mikro / Netsis API bağlantısı",
      "5 aktif otomasyon akışı",
      "WhatsApp Business API",
      "1 e-ticaret connector",
      "KVKK paketi dahil"
    ],
    cta: "Görüşme Al"
  },
  {
    name: "Pro",
    price: "30.000 TL",
    period: "/ay",
    setup: "Kurulum: 65.000 TL",
    color: "bg-brand-yellow",
    badge: "En Çok Tercih Edilen",
    features: [
      "15 aktif otomasyon akışı",
      "3 e-ticaret connector",
      "Lead scoring + AI özet",
      "Web form + landing page",
      "Custom dashboard",
      "Aylık 8 saat geliştirme"
    ],
    cta: "Pro Paketi Konuşalım"
  },
  {
    name: "Kurumsal",
    price: "55.000 TL",
    period: "/ay",
    setup: "Kurulum: 100.000 TL+",
    color: "bg-paper",
    features: [
      "Sınırsız akış + connector",
      "Self-hosted TR sunucu",
      "Özel API geliştirme",
      "Adanmış proje yöneticisi",
      "SLA + 7/24 destek",
      "Aylık detaylı analiz raporu"
    ],
    cta: "Kurumsal Teklif"
  }
];

const faqs = [
  {
    q: "Logo Tiger kurulumumu kaldırmam mı gerekecek?",
    a: "Hayır. PORTZEN, Logo Tiger / Mikro Fly / Netsis Wings kurulumunuzu değiştirmez, üzerine otomasyon katmanı kurar. Logo'nun yaptığı işler (muhasebe, stok, fatura, e-fatura, e-arşiv, KDV beyannamesi) aynen Logo'da kalır. PORTZEN sadece Logo verisini okuyup yazarak WhatsApp, e-mail, web form, e-ticaret, AI gibi modern katmanları ekler. ERP'nizi değiştirmek istemiyorsanız hiç zorunlu değil; istediğiniz zaman PORTZEN katmanını kaldırıp Logo ile devam edebilirsiniz."
  },
  {
    q: "Logo'nun kendi CRM modülü var, neden PORTZEN'e ihtiyacım var?",
    a: "Logo CRM modülü temel cari hesap + pipeline yapısı sunar, geleneksel KOBİ için yeterli olabilir. Ancak şu özellikler eksik kalıyor: resmi WhatsApp Business API entegrasyonu, AI destekli lead scoring, otomatik e-mail kampanya, web form connector, Instagram / Facebook lead bağlantısı, modern dashboard ve mobil deneyim. Logo CRM'inde bu modüllerin hepsi ya ek lisans gerektirir (Logo Workflow Plus, Logo Connect vs.) ya da yoktur. PORTZEN bunları aylık paket içinde, Logo verisi üstüne çalışacak şekilde kurar."
  },
  {
    q: "Logo Tiger'dan Netsis'e ya da Mikro'ya geçiş planlıyorum, beklemeli miyim?",
    a: "Hayır, beklemenize gerek yok ve aslında PORTZEN'i ERP geçişi öncesi kurmak daha mantıklı. Şöyle ki: PORTZEN'in otomasyon katmanı API tabanlı çalışır, hangi ERP'de olursanız olun (Logo / Mikro / Netsis) aynı arayüzde çalışır. Bugün Logo'dasınız, biz Logo connector'ı bağlarız. Yarın Netsis'e geçerseniz biz sadece backend connector'ını değiştiririz; siz aynı PORTZEN panelini kullanırsınız, otomasyon akışlarınız bozulmaz, ekibiniz yeni bir araç öğrenmek zorunda kalmaz."
  },
  {
    q: "Logo Yazılım yıllık bakım ücretini ödüyorum, üstüne PORTZEN ödemek mantıklı mı?",
    a: "Logo bakım ücreti (yıllık 8.000 - 25.000 TL arası, kullanıcı sayısına ve modüle göre) ERP temel modülleri için. PORTZEN otomasyon katmanı farklı bir hizmet: WhatsApp + lead + email + e-ticaret + AI tarafı. İki çözüm farklı katmanlarda, birbirinin yerine geçmez, tamamlar. Çoğu PORTZEN müşterimiz Logo bakımını da ödemeye devam eder. PORTZEN'in maliyeti genellikle 4-6 ayda kendi kendini çıkarır: manuel veri girişi azalır, kaçırılan lead sayısı düşer, WhatsApp + email otomasyon sayesinde satış döngüsü hızlanır."
  },
  {
    q: "Mevcut Logo verilerimi PORTZEN okuyabilir mi?",
    a: "Evet. Logo Tiger'ın REST API'sini, Logo Diva web servislerini ve Logo Workflow modülünü kullanarak cari hesap, fatura, sipariş, irsaliye ve stok verilerini gerçek zamanlı okur. Yazma işlemleri için de aynı API'leri kullanır; örneğin PORTZEN'de yeni bir lead müşteri olunca otomatik Logo cari kartı açılır. Mikro Fly Web API ve Netsis HTSWeb için de hazır connector'larımız var. Veri okuma-yazma işlemleri Logo'nun standart güvenlik katmanından geçer, ek izin gerekmez."
  },
  {
    q: "KVKK uyumlu mu, veri nerede saklanır?",
    a: "Evet, KVKK tam uyumlu. PORTZEN otomasyon katmanı Türkiye lokasyonlu sunucularda çalışır (Kurumsal pakette self-hosted opsiyonu var). Kişisel veri (müşteri telefon, e-posta, isim) Türkiye'de işlenir. KVKK aydınlatma metni, açık rıza akışı, veri silme talep formu (KVKK Madde 11) ve VERBİS kayıt desteği paket dahildir. Logo / Mikro / Netsis verileri kendi sunucunuzda kalır, sadece otomasyon için gereken alanlar PORTZEN katmanına gelir."
  },
  {
    q: "Kurulum ne kadar sürer, ekibim ne zaman kullanmaya başlar?",
    a: "Mevcut ERP'nizin durumuna ve istediğiniz akış sayısına göre 14-30 iş günü. Tipik program: ilk hafta Logo / Mikro / Netsis API erişimi + veri haritalama, ikinci hafta n8n akışları + WhatsApp + e-mail entegrasyonu, üçüncü hafta test + 4 saatlik canlı Türkçe ekip eğitimi. Ekibiniz mevcut Logo arayüzünü kullanmaya devam eder, PORTZEN paneli ek bir sekme gibi açılır. Otomasyon akışları arka planda çalışır, kullanıcı için fark sadece daha az manuel iş ve daha hızlı tepki süresidir."
  }
];

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* 1. HERO */}
      <section className="bg-paper py-section">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <nav aria-label="Breadcrumb" className="mb-8 text-xs font-bold uppercase tracking-wider text-ink/60">
              <Link href="/" className="hover:text-ink transition-colors">Anasayfa</Link>
              <span className="mx-2">/</span>
              <span className="text-ink">Logo Yazılım Alternatifi</span>
            </nav>
          </Reveal>

          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 items-start">
            <div>
              <Reveal>
                <div className="inline-flex items-center gap-2 border-3 border-ink bg-brand-blue text-paper px-3 py-1.5 shadow-brutal-sm mb-6">
                  <Boxes className="h-4 w-4" />
                  <span className="text-xs font-black uppercase tracking-wider">Logo Yazılım Alternatifi</span>
                </div>
              </Reveal>
              <Reveal delay={100}>
                <h1 className="font-display text-h1 font-black leading-[0.95] max-w-4xl text-ink">
                  Logo Yazılım Alternatifi: Modern KOBİ İçin ERP Üstüne AI Otomasyon Katmanı
                </h1>
              </Reveal>
              <Reveal delay={200}>
                <p className="mt-6 max-w-prose text-body text-ink/80 font-medium">
                  Logo Tiger, Mikro Fly veya Netsis Wings güçlü ERP'lerdir ama WhatsApp, AI, e-ticaret entegrasyonu, modern lead yönetimi konusunda eksik kalırlar. PORTZEN mevcut ERP'nizi kaldırmadan üstüne n8n + Make + AI workflow katmanı ekler. ERP'niz aynen kalır, modern otomasyon ucuza gelir.
                </p>
              </Reveal>
              <Reveal delay={300}>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="/iletisim"
                    className="inline-flex items-center gap-2 border-3 border-ink bg-ink px-5 py-3 text-sm font-bold uppercase text-paper shadow-brutal hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all"
                  >
                    Ücretsiz Demo Al <ArrowUpRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href="/crm-otomasyonu"
                    className="inline-flex items-center gap-2 border-3 border-ink bg-paper px-5 py-3 text-sm font-bold uppercase text-ink shadow-brutal hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all"
                  >
                    CRM Otomasyonu <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </Reveal>
            </div>

            <Reveal delay={150}>
              <div className="grid grid-cols-2 gap-4">
                {stats.map((s, i) => (
                  <div
                    key={i}
                    className={cn(
                      "border-3 border-ink p-5 shadow-brutal",
                      i % 2 === 0 ? "bg-brand-yellow" : "bg-brand-blue text-paper"
                    )}
                  >
                    <div className="font-display text-3xl md:text-4xl font-black leading-none mb-2">
                      {s.metric}
                    </div>
                    <div className="text-xs font-medium opacity-90">{s.label}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 2. NEDEN ALTERNATİF */}
      <section className="bg-ink text-paper py-section">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-10 max-w-2xl">
              <div className="inline-block border-3 border-paper bg-brand-blue text-paper px-3 py-1 text-xs font-black uppercase tracking-wider mb-4 shadow-[6px_6px_0_#FFFDF5]">
                Logo / Mikro / Netsis'in modern KOBİ için 6 eksiği
              </div>
              <h2 className="font-display text-h2 font-black leading-tight">
                Logo geleneksel ERP'de iyidir, modern otomasyon ise farklı katman ister.
              </h2>
            </div>
          </Reveal>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {painPoints.map((p, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="border-3 border-paper bg-paper/5 p-5 shadow-[6px_6px_0_#FFFDF5] h-full">
                  <div className="inline-flex items-center justify-center w-10 h-10 border-3 border-paper bg-brand-blue text-paper mb-4">
                    <X className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-lg font-black mb-2">{p.title}</h3>
                  <p className="text-sm opacity-85 leading-relaxed">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3. KARŞILAŞTIRMA TABLOSU */}
      <section className="bg-paper py-section">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-12 max-w-2xl">
              <div className="inline-block border-3 border-ink bg-brand-blue text-paper px-3 py-1 text-xs font-black uppercase tracking-wider mb-4 shadow-brutal-sm">
                Yan yana karşılaştırma
              </div>
              <h2 className="font-display text-h2 font-black leading-tight text-ink">
                Logo Workflow + ek modüller vs PORTZEN otomasyon katmanı
              </h2>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border-3 border-ink shadow-brutal min-w-[700px]">
                <thead>
                  <tr className="bg-ink text-paper">
                    <th className="p-4 text-left font-black uppercase text-xs">Özellik</th>
                    <th className="p-4 text-center font-black uppercase text-xs">Logo + Ek Modüller</th>
                    <th className="p-4 text-center font-black uppercase text-xs bg-brand-yellow text-ink">PORTZEN</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row, i) => (
                    <tr key={i} className="border-b-2 border-ink/10 bg-paper">
                      <td className="p-4 font-bold text-sm text-ink">{row.feature}</td>
                      <td className="p-4 text-center text-sm text-ink/80">
                        <div className="flex flex-col items-center gap-1">
                          <X className="h-4 w-4 text-red-500" />
                          <span className="text-xs">{row.manychat}</span>
                        </div>
                      </td>
                      <td className="p-4 text-center text-sm bg-brand-yellow/30 text-ink">
                        <div className="flex flex-col items-center gap-1">
                          <Check className="h-4 w-4 text-green-700" />
                          <span className="text-xs font-bold">{row.portzen}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-6 text-sm text-ink/60 max-w-2xl">
              <strong>Not:</strong> Logo lisans + bakım fiyatları logoyazilim.com.tr ve bayi tekliflerinden (Ocak 2026) derlenmiştir. Konfigürasyona göre değişebilir.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 4. PORTZEN ÇÖZÜMÜ */}
      <section className="bg-paper py-section border-t-3 border-ink/10">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-12 max-w-2xl">
              <div className="inline-block border-3 border-ink bg-brand-green text-paper px-3 py-1 text-xs font-black uppercase tracking-wider mb-4 shadow-brutal-sm">
                Kurulum süreci
              </div>
              <h2 className="font-display text-h2 font-black leading-tight text-ink">
                Logo'yu kaldırmadan 21 günde modern otomasyon
              </h2>
            </div>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {solutionSteps.map((s, i) => {
              const Icon = s.icon;
              return (
                <Reveal key={i} delay={i * 100}>
                  <div className="border-3 border-ink bg-paper p-6 shadow-brutal hover:-translate-x-1 hover:-translate-y-1 hover:shadow-brutal-lg transition-all h-full">
                    <div className="inline-flex items-center justify-center w-12 h-12 border-3 border-ink bg-brand-yellow shadow-brutal-sm mb-4">
                      <Icon className="h-5 w-5 text-ink" />
                    </div>
                    <h3 className="font-display text-xl font-black mb-2 text-ink">{s.title}</h3>
                    <p className="text-sm text-ink/70 leading-relaxed">{s.description}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. FEATURES */}
      <section className="bg-paper py-section border-t-3 border-ink/10">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-12 max-w-2xl">
              <div className="inline-block border-3 border-ink bg-brand-pink text-paper px-3 py-1 text-xs font-black uppercase tracking-wider mb-4 shadow-brutal-sm">
                PORTZEN'in farkı
              </div>
              <h2 className="font-display text-h2 font-black leading-tight text-ink">
                Logo'da olmayan, ekstra modül gerektiren 6 yetenek
              </h2>
            </div>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <Reveal key={i} delay={i * 80}>
                  <div className="border-3 border-ink bg-paper p-6 shadow-brutal hover:-translate-x-1 hover:-translate-y-1 hover:shadow-brutal-lg transition-all h-full">
                    <Icon className="h-7 w-7 text-ink mb-4" />
                    <h3 className="font-display text-lg font-black mb-2 text-ink">{f.title}</h3>
                    <p className="text-sm text-ink/70 leading-relaxed">{f.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. USE CASES */}
      <section className="bg-brand-blue text-paper py-section">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="inline-block border-3 border-ink bg-paper text-ink px-3 py-1 text-xs font-black uppercase tracking-wider mb-4 shadow-brutal-sm">
              Gerçek senaryolar
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-display text-h2 font-black leading-tight max-w-4xl">
              Logo + PORTZEN birlikte çalışırsa neler olur?
            </h2>
          </Reveal>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Reveal delay={150}>
              <div className="border-3 border-ink bg-paper text-ink p-6 shadow-brutal h-full">
                <div className="text-xs font-black uppercase tracking-wider text-brand-blue mb-2">Senaryo 1</div>
                <h3 className="font-display text-lg font-black mb-3">WhatsApp lead Logo cari oluyor</h3>
                <p className="text-sm leading-relaxed">
                  Müşteri WhatsApp'tan ürün soruyor. PORTZEN AI cevap veriyor, ilgilenirse otomatik Logo Tiger'da cari kart açılıyor, satış temsilcisi mobilden takip ediyor. Manuel veri girişi sıfır.
                </p>
              </div>
            </Reveal>
            <Reveal delay={200}>
              <div className="border-3 border-ink bg-paper text-ink p-6 shadow-brutal h-full">
                <div className="text-xs font-black uppercase tracking-wider text-brand-blue mb-2">Senaryo 2</div>
                <h3 className="font-display text-lg font-black mb-3">Trendyol siparişi Logo'ya akıyor</h3>
                <p className="text-sm leading-relaxed">
                  Trendyol'da yeni sipariş, PORTZEN otomatik Logo'ya irsaliye + fatura kaydı oluşturuyor. Stok düşüyor. Kargo bilgisi WhatsApp ile müşteriye gidiyor. Tek node n8n akışı.
                </p>
              </div>
            </Reveal>
            <Reveal delay={250}>
              <div className="border-3 border-ink bg-paper text-ink p-6 shadow-brutal h-full">
                <div className="text-xs font-black uppercase tracking-wider text-brand-blue mb-2">Senaryo 3</div>
                <h3 className="font-display text-lg font-black mb-3">Tahsilat hatırlatması</h3>
                <p className="text-sm leading-relaxed">
                  Logo'da vadesi gelen fatura PORTZEN tarafından okunuyor. Müşteriye WhatsApp ile nazik hatırlatma. Tahsilat olunca Logo'da otomatik tahsilat girişi. Muhasebe ekibi 8 saatlik işi sıfırlıyor.
                </p>
              </div>
            </Reveal>
            <Reveal delay={300}>
              <div className="border-3 border-ink bg-paper text-ink p-6 shadow-brutal h-full">
                <div className="text-xs font-black uppercase tracking-wider text-brand-blue mb-2">Senaryo 4</div>
                <h3 className="font-display text-lg font-black mb-3">Saha satış ekibi mobil</h3>
                <p className="text-sm leading-relaxed">
                  Saha satış temsilcisi WhatsApp'tan sipariş alıyor. PORTZEN tabletinde Logo cari + stok + fiyat listesini gösteriyor. Sipariş Logo'ya direkt düşüyor. Logo Mobile karmaşası bitti.
                </p>
              </div>
            </Reveal>
            <Reveal delay={350}>
              <div className="border-3 border-ink bg-paper text-ink p-6 shadow-brutal h-full">
                <div className="text-xs font-black uppercase tracking-wider text-brand-blue mb-2">Senaryo 5</div>
                <h3 className="font-display text-lg font-black mb-3">AI fatura okuma</h3>
                <p className="text-sm leading-relaxed">
                  Tedarikçilerden gelen PDF faturaları PORTZEN AI okuyor, alış faturası olarak Logo'ya kaydediyor. Muhasebe ekibi sadece onay veriyor. Aylık 200 fatura, 10 saatten 1 saate düşüyor.
                </p>
              </div>
            </Reveal>
            <Reveal delay={400}>
              <div className="border-3 border-ink bg-paper text-ink p-6 shadow-brutal h-full">
                <div className="text-xs font-black uppercase tracking-wider text-brand-blue mb-2">Senaryo 6</div>
                <h3 className="font-display text-lg font-black mb-3">Modern dashboard</h3>
                <p className="text-sm leading-relaxed">
                  Logo'nun raporu yerine PORTZEN üzerinde modern, mobil uyumlu satış + kar + tahsilat dashboard'u. Yönetici telefondan günlük rakamı görüyor. Logo raporlama modülü gerekmiyor.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 7. PRICING */}
      <section className="bg-paper py-section">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-12 max-w-2xl">
              <div className="inline-block border-3 border-ink bg-brand-orange text-paper px-3 py-1 text-xs font-black uppercase tracking-wider mb-4 shadow-brutal-sm">
                Şeffaf TL fiyatlandırma
              </div>
              <h2 className="font-display text-h2 font-black leading-tight text-ink">
                3 paket - Logo lisansınızı bozmadan
              </h2>
              <p className="mt-4 text-body text-ink/70 max-w-prose">
                Mevcut Logo / Mikro / Netsis kurulumunuz aynen kalır. PORTZEN aylık otomasyon katmanı ücreti olarak gelir. Sözleşme aylık esnek, sürpriz yok.
              </p>
            </div>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-3">
            {packages.map((p, i) => (
              <Reveal key={i} delay={i * 100}>
                <div
                  className={cn(
                    "border-3 border-ink p-6 shadow-brutal hover:-translate-x-1 hover:-translate-y-1 hover:shadow-brutal-lg transition-all h-full flex flex-col relative",
                    p.color,
                    "text-ink"
                  )}
                >
                  {p.badge && (
                    <div className="absolute -top-3 left-6 border-3 border-ink bg-brand-pink text-paper px-2 py-0.5 text-xs font-black uppercase shadow-brutal-sm">
                      {p.badge}
                    </div>
                  )}
                  <h3 className="font-display text-2xl font-black mb-2">{p.name}</h3>
                  <div className="mb-1">
                    <span className="font-display text-4xl font-black">{p.price}</span>
                    <span className="text-sm opacity-70">{p.period}</span>
                  </div>
                  <div className="text-xs font-bold opacity-75 mb-6">{p.setup}</div>
                  <ul className="space-y-2 mb-6 flex-1">
                    {p.features.map((f, fi) => (
                      <li key={fi} className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/iletisim"
                    className="inline-flex items-center justify-center gap-2 border-3 border-ink bg-ink px-4 py-2.5 text-xs font-bold uppercase text-paper shadow-brutal-sm hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all"
                  >
                    {p.cta} <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={300}>
            <div className="mt-8 border-3 border-ink bg-brand-blue text-paper p-5 shadow-brutal flex items-center justify-between flex-wrap gap-4">
              <div>
                <div className="font-display text-lg font-black mb-1">n8n kurulum hizmeti</div>
                <p className="text-sm opacity-90">
                  Sadece n8n self-hosted kurulum mu istiyorsunuz? Ayrı bir hizmet olarak da sunuyoruz.
                </p>
              </div>
              <Link
                href="/n8n-kurulum-hizmeti"
                className="inline-flex items-center gap-1 border-3 border-paper bg-paper text-ink px-4 py-2 text-xs font-bold uppercase shadow-[4px_4px_0_#0A0A0A] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all"
              >
                n8n Kurulum <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 8. FAQ */}
      <section className="bg-ink text-paper py-section">
        <div className="mx-auto max-w-container px-6 max-w-4xl">
          <Reveal>
            <div className="mb-12">
              <div className="inline-block border-3 border-paper bg-brand-pink text-paper px-3 py-1 text-xs font-black uppercase tracking-wider mb-4 shadow-[6px_6px_0_#FFFDF5]">
                Sıkça Sorulan Sorular
              </div>
              <h2 className="font-display text-h2 font-black leading-tight">
                Logo / Mikro / Netsis kullanıcılarının merak ettikleri
              </h2>
            </div>
          </Reveal>
          <div className="space-y-8">
            {faqs.map((f, i) => (
              <Reveal key={i} delay={i * 60}>
                <div className="border-l-3 border-brand-yellow pl-6">
                  <h3 className="font-display text-xl font-black mb-3">{f.q}</h3>
                  <p className="text-body opacity-85 leading-relaxed">{f.a}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={300}>
            <div className="mt-12 grid md:grid-cols-2 gap-4">
              <div className="border-3 border-paper bg-paper/5 p-5 shadow-[6px_6px_0_#FFFDF5]">
                <Building2 className="h-6 w-6 text-brand-yellow mb-3" />
                <h3 className="font-display text-base font-black mb-2">Zapier de mi pahalı geliyor?</h3>
                <p className="text-sm opacity-85 mb-3">
                  Zapier'in USD fiyatı yerine n8n + Make + Türk uygulama entegrasyonu.
                </p>
                <Link href="/zapier-alternatifi" className="inline-flex items-center gap-1 text-xs font-bold uppercase text-brand-yellow hover:gap-2 transition-all">
                  Zapier Alternatifi <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
              <div className="border-3 border-paper bg-paper/5 p-5 shadow-[6px_6px_0_#FFFDF5]">
                <Building2 className="h-6 w-6 text-brand-yellow mb-3" />
                <h3 className="font-display text-base font-black mb-2">CRM otomasyonu detayı?</h3>
                <p className="text-sm opacity-85 mb-3">
                  PORTZEN'in CRM otomasyon sistemi tam olarak ne yapıyor, hangi özellikler dahil.
                </p>
                <Link href="/crm-otomasyonu" className="inline-flex items-center gap-1 text-xs font-bold uppercase text-brand-yellow hover:gap-2 transition-all">
                  CRM Otomasyonu <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 9. FINAL CTA */}
      <section className="py-section bg-paper">
        <div className="mx-auto max-w-container px-6">
          <div className="border-3 border-ink bg-brand-yellow p-8 md:p-14 shadow-brutal-lg text-ink">
            <Reveal>
              <h2 className="font-display text-h2 font-black leading-tight mb-4 max-w-3xl">
                Logo'yu kaldırmadan ekibinizi modernleştirelim.
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="text-body opacity-90 mb-8 max-w-2xl font-medium">
                15 dakikalık ücretsiz keşif görüşmesinde mevcut Logo / Mikro / Netsis kurulumunuzu analiz ediyoruz. Hangi otomasyon akışlarının en hızlı geri dönüş vereceğini gösteriyoruz.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/iletisim"
                  className="inline-flex items-center gap-2 border-3 border-ink bg-ink px-5 py-3 text-sm font-bold uppercase text-paper shadow-brutal hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all"
                >
                  Ücretsiz Demo Al <ArrowUpRight className="h-4 w-4" />
                </Link>
                <a
                  href="https://wa.me/905015884853"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border-3 border-ink bg-paper px-5 py-3 text-sm font-bold uppercase text-ink shadow-brutal hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all"
                >
                  <MessageCircle className="h-4 w-4" /> WhatsApp ile Yaz
                </a>
                <a
                  href="tel:+905015884853"
                  className="inline-flex items-center gap-2 border-3 border-ink bg-paper px-5 py-3 text-sm font-bold uppercase text-ink shadow-brutal hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all"
                >
                  <Phone className="h-4 w-4" /> Hemen Ara
                </a>
              </div>
            </Reveal>
            <Reveal delay={300}>
              <div className="mt-8 pt-6 border-t-3 border-ink/20 grid sm:grid-cols-3 gap-4 text-sm">
                <div>
                  <div className="text-xs font-bold uppercase opacity-60 mb-1">Telefon</div>
                  <a href="tel:+905015884853" className="font-bold hover:underline">0501 588 48 53</a>
                </div>
                <div>
                  <div className="text-xs font-bold uppercase opacity-60 mb-1">E-posta</div>
                  <a href="mailto:destek@portzenai.com" className="font-bold hover:underline break-all">destek@portzenai.com</a>
                </div>
                <div>
                  <div className="text-xs font-bold uppercase opacity-60 mb-1">Konum</div>
                  <span className="font-bold">İzmir - Türkiye geneli uzaktan</span>
                </div>
              </div>
            </Reveal>
            <Reveal delay={400}>
              <div className="mt-6 flex flex-wrap gap-3 text-xs">
                <Link href="/n8n-kurulum-hizmeti" className="inline-flex items-center gap-1 font-bold uppercase hover:underline">
                  n8n Kurulum Hizmeti <ArrowUpRight className="h-3 w-3" />
                </Link>
                <Link href="/crm-otomasyonu" className="inline-flex items-center gap-1 font-bold uppercase hover:underline">
                  CRM Otomasyonu <ArrowUpRight className="h-3 w-3" />
                </Link>
                <Link href="/zapier-alternatifi" className="inline-flex items-center gap-1 font-bold uppercase hover:underline">
                  Zapier Alternatifi <ArrowUpRight className="h-3 w-3" />
                </Link>
                <Link href="/whatsapp-ai-asistani" className="inline-flex items-center gap-1 font-bold uppercase hover:underline">
                  WhatsApp AI Asistanı <ArrowUpRight className="h-3 w-3" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
