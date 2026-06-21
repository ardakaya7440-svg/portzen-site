import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowUpRight,
  Instagram,
  Clock3,
  MessageSquare,
  Heart,
  Users,
  Filter,
  Calendar,
  BarChart3,
  Hash,
  Tag,
  ShieldCheck,
  Building2,
  CheckCircle2,
  Sparkles
} from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";
import { RelatedSectorsSection } from "@/components/landing/RelatedSectorsSection";
import { RelatedLocationsSection } from "@/components/landing/RelatedLocationsSection";

export const metadata: Metadata = {
  title: "Instagram DM Otomasyonu | 60 Saniyede Yanıt — PORTZEN",
  description:
    "Instagram DM otomasyonu ile gelen mesaj, hikaye yanıtı ve yorumlara 60 saniyede yanıt verin. Estetik, butik, e-ticaret için 7 günde kurulum. Ücretsiz keşif.",
  keywords: [
    "instagram dm otomasyonu",
    "instagram dm bot",
    "sosyal medya yönetimi izmir",
    "instagram müşteri yönetimi",
    "instagram otomatik mesaj",
    "instagram chatbot"
  ],
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://portzenai.com/instagram-dm-otomasyonu",
    siteName: "PORTZEN",
    title: "Instagram DM Otomasyonu | 60 Saniyede Yanıt — PORTZEN",
    description:
      "Instagram'a gelen DM, hikaye yanıtı ve yorumları otomatik karşılayıp müşteriye dönüştüren sistem. 7 günde kurulum."
  },
  twitter: {
    card: "summary_large_image",
    title: "Instagram DM Otomasyonu | 60 Saniyede Yanıt",
    description:
      "PORTZEN, markalar için Instagram DM otomasyonu kurar. Dönüşüm %2x, manuel iş %75 azalır."
  },
  alternates: { canonical: "https://portzenai.com/instagram-dm-otomasyonu" },
  robots: { index: true, follow: true }
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Instagram DM Otomasyonu Kurulumu",
  serviceType: "Sosyal Medya Otomasyonu ve Instagram Chatbot",
  provider: {
    "@type": "Organization",
    name: "PORTZEN",
    url: "https://portzenai.com",
    telephone: "+905318639117",
    email: "portzenajans@gmail.com"
  },
  areaServed: { "@type": "Country", name: "Turkey" },
  description:
    "Instagram DM, hikaye yanıtları, yorumlar ve reklam etkileşimlerine otomatik yanıt veren, randevu açan, ürün öneren AI tabanlı DM otomasyon sistemi. Estetik klinik, butik, e-ticaret ve danışmanlar için 7 günde kurulum.",
  offers: {
    "@type": "Offer",
    priceCurrency: "TRY",
    priceRange: "₺6500-₺45000",
    availability: "https://schema.org/InStock"
  }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Instagram DM otomasyonu Meta politikalarına uygun mu?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Evet. Meta'nın resmi Messenger Platform API'sini kullanıyoruz. Hesabınız 'shadowban' veya askıya alma riski olmadan çalışır. Yetkisiz üçüncü parti araçlar değil, resmi entegrasyon."
      }
    },
    {
      "@type": "Question",
      name: "Kurulum kaç gün sürer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Standart kurulum 5-7 iş günüdür. Brief, senaryo yazımı, Meta Business Suite bağlantısı, test ve canlıya alma dahil. Karmaşık çoklu ürün katalogları için 10 güne çıkabilir."
      }
    },
    {
      "@type": "Question",
      name: "Hangi etkileşimlere yanıt verir?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "DM mesajları, hikaye yanıtları, post yorumları, reklam tıklamasından gelen sohbetler ve 'mesaj at' butonu — hepsi otomatize edilir. Anahtar kelimeye göre farklı akışlar tetiklenir."
      }
    },
    {
      "@type": "Question",
      name: "Fiyatı ne kadar?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Kurulum 15.000-30.000 TL aralığında, aylık operasyon 6.500 TL'den başlar. Aylık DM hacmi, ürün/hizmet sayısı ve entegrasyon ihtiyacına göre net fiyat keşif görüşmesinde verilir."
      }
    },
    {
      "@type": "Question",
      name: "WhatsApp asistanımla birlikte çalışır mı?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Evet, çoğu müşterimiz Instagram DM + WhatsApp asistanını birlikte kuruyor. Aynı bilgi tabanı, aynı ton — sadece kanal farklı. Müşteri her yerden tutarlı yanıt alır."
      }
    },
    {
      "@type": "Question",
      name: "İzmir merkezli misiniz?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Evet, PORTZEN İzmir'de. Ama tüm Türkiye'ye uzaktan kurulum ve sosyal medya yönetimi hizmeti veriyoruz. İzmir içindeki markalara talep edilirse yerinde de destek veriyoruz."
      }
    },
    {
      "@type": "Question",
      name: "Bot insan gibi mi konuşur, yoksa robotik mi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Markanızın ses tonuna göre eğitiyoruz. Estetik klinikse sıcak ve güven veren, butikse genç ve enerjik. Hazır şablon değil — sizin markanız gibi konuşur."
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
      name: "Instagram DM Otomasyonu",
      item: "https://portzenai.com/instagram-dm-otomasyonu"
    }
  ]
};

const stats = [
  { metric: "60 sn", label: "DM'ye ilk yanıt" },
  { metric: "%2x", label: "DM dönüşüm oranı" },
  { metric: "%75", label: "Manuel iş azalması" },
  { metric: "7 gün", label: "Standart kurulum" }
];

const problems = [
  "Reklamdan gelen DM'lerin yarısı 30 dakikadan sonra cevap aldığı için müşteri ilgisini kaybetmiş oluyor.",
  "Hikaye yanıtlarına bakmaya vakit yok — yüzlerce mesaj okunmadan kalıyor.",
  "Aynı 'fiyat ne kadar, randevu var mı, kargo dahil mi' sorularını günde 50 kere yanıtlamak ekibinizi tüketiyor.",
  "Reklam bütçesi DM'lere harcandı ama kimse cevap atmadığı için müşteri kaçtı — para boşa gitti.",
  "Sosyal medya sorumlusu izne çıktığında DM kutusu tamamen sahipsiz, bir hafta sonra 300+ okunmamış mesaj."
];

const solutionSteps = [
  {
    icon: Instagram,
    title: "Hesap analizi",
    description: "Mevcut DM trafiğinizi, sık sorulan soruları, kayıp müşteri sebeplerini birlikte çıkarırız."
  },
  {
    icon: MessageSquare,
    title: "Senaryo yazımı",
    description: "Markanızın tonunda DM, hikaye yanıtı ve yorum akışlarını yazarız."
  },
  {
    icon: Sparkles,
    title: "Bot eğitimi",
    description: "AI asistanı ürün/hizmet kataloğunuzla eğitir, test eder, hatalı yanıtları temizleriz."
  },
  {
    icon: BarChart3,
    title: "Optimizasyon",
    description: "Haftalık rapor — hangi senaryo iyi çalışıyor, hangisi değil, hangisi yeni yazılmalı."
  }
];

const features = [
  {
    icon: Clock3,
    title: "60 saniyede yanıt",
    desc: "Reklam tıklamasından gelen DM bile bekletilmez. Müşteri sıcakken yakalanır."
  },
  {
    icon: Heart,
    title: "Hikaye yanıtı otomasyonu",
    desc: "Story'lere gelen 'beğendim', 'fiyat?', 'link?' yanıtları otomatik cevaplanır."
  },
  {
    icon: Filter,
    title: "Yorum filtreleme",
    desc: "Posta gelen yorumlardaki müşteri sorularını yakalar, DM'ye yönlendirir."
  },
  {
    icon: Calendar,
    title: "DM'den randevu",
    desc: "Estetik, kuaför, klinik için DM içinden Google Takvim'e doğrudan randevu açar."
  },
  {
    icon: Hash,
    title: "Anahtar kelime akışı",
    desc: "'Fiyat', 'kargo', 'beden' gibi kelimelere göre farklı akışlar tetiklenir."
  },
  {
    icon: ShieldCheck,
    title: "Meta onaylı API",
    desc: "Resmi Messenger Platform API. Shadowban veya askıya alma riski yok."
  }
];

const timeline = [
  { step: "01", title: "Brief + hesap erişimi", desc: "1 gün — DM analizi, marka tonu, hedef kitle." },
  { step: "02", title: "Senaryo + bot kurulumu", desc: "3-4 gün — akış yazımı, AI eğitimi, Meta API bağlantı." },
  { step: "03", title: "Test + canlıya alma", desc: "1 gün — gerçek mesajlarla pilot, ardından go-live." },
  { step: "04", title: "Haftalık optimizasyon", desc: "Sürekli — performans raporu, yeni akış, A/B testler." }
];

const packages = [
  {
    name: "Başlangıç",
    price: "6.500 TL",
    period: "/ay",
    setup: "Kurulum: 15.000 TL",
    color: "bg-paper",
    features: [
      "Aylık 1.500 DM'e kadar",
      "5 hazır senaryo",
      "Hikaye yanıtı + yorum",
      "Aylık 1 optimizasyon",
      "Temel performans raporu"
    ],
    cta: "Görüşme Al"
  },
  {
    name: "Pro",
    price: "12.500 TL",
    period: "/ay",
    setup: "Kurulum: 22.000 TL",
    color: "bg-brand-pink text-paper",
    badge: "En Çok Tercih Edilen",
    features: [
      "Aylık 6.000 DM'e kadar",
      "Sınırsız özel senaryo",
      "Reklamdan DM otomasyonu",
      "Google Takvim entegrasyonu",
      "Haftalık optimizasyon + A/B",
      "Detaylı performans raporu"
    ],
    cta: "Pro Paketi Konuşalım"
  },
  {
    name: "Kurumsal",
    price: "Özel",
    period: "",
    setup: "Kurulum: 30.000 TL+",
    color: "bg-paper",
    features: [
      "Sınırsız DM hacmi",
      "Çoklu hesap yönetimi",
      "E-ticaret katalog bağlantısı",
      "CRM entegrasyonu",
      "Adanmış stratejist",
      "SLA + öncelikli destek"
    ],
    cta: "Kurumsal Teklif"
  }
];

const faqs = [
  {
    q: "Instagram DM otomasyonu Meta politikalarına uygun mu?",
    a: "Evet. Meta'nın resmi Messenger Platform API'sini kullanıyoruz — yetkisiz üçüncü parti araç değil. Hesabınız 'shadowban' veya askıya alma riski olmadan çalışır. Tüm akışlar Meta'nın 24 saat penceresi kuralına uygun tasarlanır."
  },
  {
    q: "Kurulum kaç gün sürer ve neler dahil?",
    a: "Standart kurulum 5-7 iş günü. İçinde brief görüşmesi, senaryo yazımı, Meta Business Suite bağlantısı, AI eğitimi, gerçek mesajlarla test ve canlıya alma var. E-ticaret katalogu olan markalar için 10 güne çıkabilir."
  },
  {
    q: "Hangi etkileşimlere yanıt verir, hangilerine vermez?",
    a: "Yanıt verir: DM mesajları, hikaye yanıtları, post yorumları, reklam tıklamasından gelen sohbetler, 'mesaj at' butonu. Yanıt vermez: özel mesajlardaki sesli mesajlar (transkript verilmedikçe), karmaşık şikayet veya hassas konular (bunlar otomatik insana devredilir)."
  },
  {
    q: "Fiyatı ne kadar, kurulum sonrası ek masraf var mı?",
    a: "Kurulum 15.000-30.000 TL aralığında, aylık operasyon 6.500 TL'den başlar. Meta API kullanım ücreti yok (Instagram DM şu an ücretsiz). Aylık paket; senaryo güncelleme, yeni akış ekleme, performans raporu ve hata düzeltmeyi içerir."
  },
  {
    q: "WhatsApp asistanımla birlikte çalışır mı?",
    a: "Evet, ideal kombinasyon. Çoğu müşterimiz Instagram DM + WhatsApp asistanını birlikte kurar. Aynı bilgi tabanı, aynı ton, aynı randevu sistemi — sadece kanal farklı. Müşteri Instagram'dan DM atıp WhatsApp'tan devam ettiğinde aynı yerden takip edersiniz."
  },
  {
    q: "Bot insan gibi mi konuşur?",
    a: "Markanızın ses tonuna göre eğitiyoruz. Estetik klinikse sıcak ve güven veren, butikse genç ve enerjik, danışmansa profesyonel ve net. Hazır şablon değil. Yanıtların robotik veya genel görünmemesi için her sektöre özel diyalog kütüphanesi yazılır."
  },
  {
    q: "İzmir merkezli misiniz, başka şehirlere de hizmet veriyor musunuz?",
    a: "PORTZEN İzmir merkezli ama tüm Türkiye'ye uzaktan sosyal medya yönetimi ve DM otomasyonu hizmeti veriyoruz. Kurulum tamamen online — Meta Business Suite üzerinden erişim açıyorsunuz, biz kuruyoruz. İzmir içindeki markalara yerinde de gelinebilir."
  }
];

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* 1. HERO */}
      <section className="bg-brand-pink text-paper py-section">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <nav aria-label="Breadcrumb" className="mb-8 text-xs font-bold uppercase tracking-wider text-paper/80">
              <Link href="/" className="hover:text-paper transition-colors">Anasayfa</Link>
              <span className="mx-2">/</span>
              <span className="text-paper">Instagram DM Otomasyonu</span>
            </nav>
          </Reveal>

          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 items-start">
            <div>
              <Reveal>
                <div className="inline-flex items-center gap-2 border-3 border-ink bg-paper text-ink px-3 py-1.5 shadow-brutal-sm mb-6">
                  <Instagram className="h-4 w-4" />
                  <span className="text-xs font-black uppercase tracking-wider">Sosyal Medya Otomasyonu</span>
                </div>
              </Reveal>
              <Reveal delay={100}>
                <h1 className="font-display text-h1 font-black leading-[0.95] max-w-4xl">
                  Instagram DM Otomasyonu | DM'lere 60 Saniyede Yanıt
                </h1>
              </Reveal>
              <Reveal delay={200}>
                <p className="mt-6 max-w-prose text-body opacity-95 font-medium">
                  Instagram'a gelen DM, hikaye yanıtı, yorum ve reklam etkileşimlerini otomatik karşılayıp müşteriye dönüştüren AI sistemi. PORTZEN, estetik klinik, butik, e-ticaret ve danışmanlar için bu sistemi 7 günde kurar.
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
                    href="/hizmetler/sosyal-medya"
                    className="inline-flex items-center gap-2 border-3 border-ink bg-paper px-5 py-3 text-sm font-bold uppercase text-ink shadow-brutal hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all"
                  >
                    Hizmeti İncele <ArrowUpRight className="h-4 w-4" />
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
                      i % 2 === 0 ? "bg-brand-yellow text-ink" : "bg-paper text-ink"
                    )}
                  >
                    <div className="font-display text-4xl md:text-5xl font-black leading-none mb-2">
                      {s.metric}
                    </div>
                    <div className="text-xs font-medium opacity-80">{s.label}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 2. PROBLEM */}
      <section className="bg-ink text-paper py-section">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-10 max-w-2xl">
              <div className="inline-block border-3 border-paper bg-brand-pink text-paper px-3 py-1 text-xs font-black uppercase tracking-wider mb-4 shadow-[6px_6px_0_#FFFDF5]">
                Tanıdık geliyor mu?
              </div>
              <h2 className="font-display text-h2 font-black leading-tight">
                Reklama harcadığınız her TL, cevapsız DM'de eriyor olabilir.
              </h2>
            </div>
          </Reveal>
          <div className="grid gap-4 md:grid-cols-2">
            {problems.map((p, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="border-3 border-paper bg-paper/5 p-5 shadow-[6px_6px_0_#FFFDF5]">
                  <p className="text-body font-medium leading-relaxed">{p}</p>
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
            <div className="mb-12 max-w-2xl">
              <div className="inline-block border-3 border-ink bg-brand-blue text-paper px-3 py-1 text-xs font-black uppercase tracking-wider mb-4 shadow-brutal-sm">
                Çözüm
              </div>
              <h2 className="font-display text-h2 font-black leading-tight text-ink">
                PORTZEN'in çözümü nasıl çalışır?
              </h2>
              <p className="mt-4 text-body text-ink/70 max-w-prose">
                4 adımda kurulur. Hazır bot şablonu değil — markanızın ses tonuna ve müşteri profiline özel.
              </p>
            </div>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {solutionSteps.map((s, i) => {
              const Icon = s.icon;
              return (
                <Reveal key={i} delay={i * 100}>
                  <div className="border-3 border-ink bg-paper p-6 shadow-brutal hover:-translate-x-1 hover:-translate-y-1 hover:shadow-brutal-lg transition-all h-full">
                    <div className="inline-flex items-center justify-center w-12 h-12 border-3 border-ink bg-brand-pink text-paper shadow-brutal-sm mb-4">
                      <Icon className="h-5 w-5" />
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

      {/* 4. FEATURES */}
      <section className="bg-paper py-section border-t-3 border-ink/10">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-12 max-w-2xl">
              <div className="inline-block border-3 border-ink bg-brand-purple text-paper px-3 py-1 text-xs font-black uppercase tracking-wider mb-4 shadow-brutal-sm">
                Sistemin tam içeriği
              </div>
              <h2 className="font-display text-h2 font-black leading-tight text-ink">
                Instagram DM otomasyonunuzda neler var?
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

      {/* 5. TIMELINE */}
      <section className="bg-ink text-paper py-section">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-12 max-w-2xl">
              <div className="inline-block border-3 border-paper bg-brand-yellow text-ink px-3 py-1 text-xs font-black uppercase tracking-wider mb-4 shadow-[6px_6px_0_#FFFDF5]">
                Süreç
              </div>
              <h2 className="font-display text-h2 font-black leading-tight">
                İlk mesajdan ilk müşteriye — 7 günlük yol haritası
              </h2>
            </div>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {timeline.map((t, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="border-3 border-paper bg-ink p-6 shadow-[8px_8px_0_#FFFDF5]">
                  <div className="font-display text-5xl font-black text-brand-pink mb-3">{t.step}</div>
                  <div className="font-bold text-lg mb-2">{t.title}</div>
                  <div className="text-sm opacity-75 leading-relaxed">{t.desc}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CASE STUDY */}
      <section className="bg-brand-purple text-paper py-section">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="inline-block border-3 border-ink bg-paper text-ink px-3 py-1 text-xs font-black uppercase tracking-wider mb-4 shadow-brutal-sm">
              Gerçek bir örnek: butik mağaza
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-display text-h2 font-black leading-tight max-w-4xl">
              İzmir'de bir butik için 7 günde kurduğumuz Instagram DM otomasyonu, ilk ay siparişi 2.3 katına çıkardı.
            </h2>
          </Reveal>

          <div className="mt-10 grid lg:grid-cols-[1.3fr_1fr] gap-10">
            <Reveal delay={200}>
              <div className="space-y-5 text-body leading-relaxed opacity-95">
                <p>
                  Butik, Instagram'dan günde 80-120 DM alıyordu — 'fiyat ne', 'kargo dahil mi', 'X beden var mı', 'Y rengi geldi mi'. Reklam koymaya başlayınca bu sayı 250'ye çıktı. Tek sosyal medya sorumlusu mesajlara yetişemiyor, gece gelen DM'ler sabaha kadar bekliyor, müşteri başka sayfaya gidiyor, butik para kaybediyordu.
                </p>
                <p>
                  Brief'te ürün kataloğunu, sık sorulan beden/renk sorularını, kargo şartlarını, iade politikasını çıkardık. 3 günde tüm akışları kurduk: 'fiyat' anahtar kelimesi gelince ürün linkini + fiyatı paylaş, 'beden' gelince stok bilgisi gönder, 'kargo' gelince teslimat sürelerini anlat. Karmaşık vakaları (özel sipariş, dolar fiyat) sahibe devrettik.
                </p>
                <p>
                  Hikaye yanıtlarına otomatik 'merhaba, ürünü Bio link'inden inceleyebilirsin' mesajı kurduk. Reklamdan gelen DM'lere 'hangi ürüne baktığını sor + ürün linkini paylaş' akışı yazdık. Ortalama yanıt süresi 4 saatten 42 saniyeye düştü.
                </p>
                <p>
                  İlk ay rapor: DM hacmi %180 arttı (artık geç yanıt nedeniyle düşmüyor), DM'den siparişe dönüşüm %18'den %41'e çıktı, toplam sipariş 2.3 katına ulaştı. Sosyal medya sorumlusu artık sadece içerik üretimi ve özel siparişlerle ilgileniyor.
                </p>
              </div>
            </Reveal>

            <Reveal delay={300}>
              <div className="grid gap-4">
                <div className="border-3 border-ink bg-paper text-ink p-5 shadow-brutal">
                  <div className="text-xs font-bold uppercase opacity-70 mb-1">Önce</div>
                  <div className="font-display text-4xl font-black mb-1">4 sa</div>
                  <div className="text-sm">DM yanıt süresi</div>
                  <div className="mt-4 text-xs font-bold uppercase opacity-70 mb-1">Sonra</div>
                  <div className="font-display text-4xl font-black text-brand-pink">42 sn</div>
                </div>
                <div className="border-3 border-ink bg-paper text-ink p-5 shadow-brutal">
                  <div className="text-xs font-bold uppercase opacity-70 mb-1">Önce</div>
                  <div className="font-display text-4xl font-black mb-1">%18</div>
                  <div className="text-sm">DM → sipariş dönüşümü</div>
                  <div className="mt-4 text-xs font-bold uppercase opacity-70 mb-1">Sonra</div>
                  <div className="font-display text-4xl font-black text-brand-pink">%41</div>
                </div>
                <div className="border-3 border-ink bg-paper text-ink p-5 shadow-brutal">
                  <div className="text-xs font-bold uppercase opacity-70 mb-1">İlk ay</div>
                  <div className="font-display text-4xl font-black text-brand-yellow">2.3x</div>
                  <div className="text-sm">Toplam sipariş artışı</div>
                </div>
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
                Şeffaf fiyatlandırma
              </div>
              <h2 className="font-display text-h2 font-black leading-tight text-ink">
                Hangi paket size uygun?
              </h2>
              <p className="mt-4 text-body text-ink/70 max-w-prose">
                3 paket — tek mağazadan çoklu hesabı olan e-ticarete kadar. Net rakam keşif görüşmesinde verilir.
              </p>
            </div>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-3">
            {packages.map((p, i) => (
              <Reveal key={i} delay={i * 100}>
                <div
                  className={cn(
                    "border-3 border-ink p-6 shadow-brutal hover:-translate-x-1 hover:-translate-y-1 hover:shadow-brutal-lg transition-all h-full flex flex-col relative",
                    p.color
                  )}
                >
                  {p.badge && (
                    <div className="absolute -top-3 left-6 border-3 border-ink bg-brand-yellow text-ink px-2 py-0.5 text-xs font-black uppercase shadow-brutal-sm">
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
                    className={cn(
                      "inline-flex items-center justify-center gap-2 border-3 border-ink px-4 py-2.5 text-xs font-bold uppercase shadow-brutal-sm hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all",
                      p.color === "bg-brand-pink text-paper" ? "bg-paper text-ink" : "bg-ink text-paper"
                    )}
                  >
                    {p.cta} <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={300}>
            <p className="mt-8 text-sm text-ink/60 max-w-2xl">
              <strong>Not:</strong> Tam fiyat sektör + DM hacmine göre değişir — 15 dakikalık keşif görüşmesinde netleşir. Meta'nın Instagram DM API'si şu an ücretsizdir.
            </p>
          </Reveal>
          <Reveal delay={400}>
            <div className="mt-6 border-3 border-ink bg-brand-blue text-paper p-5 shadow-brutal flex items-center justify-between flex-wrap gap-4">
              <div>
                <div className="font-display text-lg font-black mb-1">İlgili okuma</div>
                <p className="text-sm opacity-90">
                  Instagram DM'lerden dönüşüm nasıl artırılır — pratik taktikler için blog yazımız.
                </p>
              </div>
              <Link
                href="/blog/instagram-dm-donusum-artirma"
                className="inline-flex items-center gap-1 border-3 border-paper bg-paper text-ink px-4 py-2 text-xs font-bold uppercase shadow-[4px_4px_0_#0A0A0A] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all"
              >
                Rehberi Oku <ArrowUpRight className="h-3.5 w-3.5" />
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
              <div className="inline-block border-3 border-paper bg-brand-purple text-paper px-3 py-1 text-xs font-black uppercase tracking-wider mb-4 shadow-[6px_6px_0_#FFFDF5]">
                Sıkça Sorulan Sorular
              </div>
              <h2 className="font-display text-h2 font-black leading-tight">
                Karar vermeden önce merak edilenler
              </h2>
            </div>
          </Reveal>
          <div className="space-y-8">
            {faqs.map((f, i) => (
              <Reveal key={i} delay={i * 60}>
                <div className="border-l-3 border-brand-pink pl-6">
                  <h3 className="font-display text-xl font-black mb-3">{f.q}</h3>
                  <p className="text-body opacity-85 leading-relaxed">{f.a}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={300}>
            <div className="mt-12 border-3 border-paper bg-paper/5 p-6 shadow-[6px_6px_0_#FFFDF5]">
              <div className="flex items-start gap-4 flex-wrap">
                <Building2 className="h-6 w-6 shrink-0 text-brand-pink" />
                <div className="flex-1 min-w-[200px]">
                  <h3 className="font-display text-lg font-black mb-2">WhatsApp'a gelen mesajları da otomatize etmek mi istiyorsunuz?</h3>
                  <p className="text-sm opacity-85 mb-3">
                    DM + WhatsApp'ı tek bilgi tabanından yönetmek isteyen markalar için WhatsApp AI Asistanı sayfamıza bakın.
                  </p>
                  <Link
                    href="/whatsapp-ai-asistani"
                    className="inline-flex items-center gap-1 text-xs font-bold uppercase text-brand-yellow hover:gap-2 transition-all"
                  >
                    WhatsApp AI Asistanı <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 9. FINAL CTA */}
      <RelatedSectorsSection service="instagram-dm-otomasyonu" />
      <RelatedLocationsSection service="instagram-dm-otomasyonu" />

      <section className="py-section">
        <div className="mx-auto max-w-container px-6">
          <div className="border-3 border-ink bg-brand-yellow p-8 md:p-14 shadow-brutal-lg text-ink">
            <Reveal>
              <h2 className="font-display text-h2 font-black leading-tight mb-4 max-w-3xl">
                DM'lerinizi yanıtlayalım. Müşterilerinizi kaybetmeyelim.
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="text-body opacity-90 mb-8 max-w-2xl font-medium">
                15 dakikalık ücretsiz keşif görüşmesinde mevcut DM hacminizi inceleyip size uygun paketi öneriyoruz. WhatsApp'tan yazın veya iletişim formunu doldurun — aynı gün dönüyoruz.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://wa.me/905318639117"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border-3 border-ink bg-ink px-5 py-3 text-sm font-bold uppercase text-paper shadow-brutal hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all"
                >
                  <MessageSquare className="h-4 w-4" /> WhatsApp ile Mesaj At
                </a>
                <Link
                  href="/iletisim"
                  className="inline-flex items-center gap-2 border-3 border-ink bg-paper px-5 py-3 text-sm font-bold uppercase text-ink shadow-brutal hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all"
                >
                  İletişim Formu <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
            <Reveal delay={300}>
              <div className="mt-8 pt-6 border-t-3 border-ink/20 grid sm:grid-cols-3 gap-4 text-sm">
                <div>
                  <div className="text-xs font-bold uppercase opacity-60 mb-1">Telefon</div>
                  <a href="tel:+905318639117" className="font-bold hover:underline">0531 863 91 17</a>
                </div>
                <div>
                  <div className="text-xs font-bold uppercase opacity-60 mb-1">E-posta</div>
                  <a href="mailto:portzenajans@gmail.com" className="font-bold hover:underline break-all">portzenajans@gmail.com</a>
                </div>
                <div>
                  <div className="text-xs font-bold uppercase opacity-60 mb-1">Konum</div>
                  <span className="font-bold">İzmir — Türkiye geneli uzaktan</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
