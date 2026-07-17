import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowUpRight,
  Video,
  Sparkles,
  Wand,
  Camera,
  Film,
  Zap,
  MessageCircle,
  CheckCircle2,
  Clock3,
  Building2,
  Palette
} from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Yapay Zeka Video Üretimi | AI Reklam ve Tanıtım Videosu - PORTZEN",
  description:
    "Yapay zeka video üretimi ile profesyonel reklam ve tanıtım videoları. Higgsfield, Seedance, Veo 3 ile stüdyo maliyetinin onda biri. 3 günde teslim.",
  keywords: [
    "yapay zeka video üretimi",
    "ai video üretimi",
    "ai reklam videosu",
    "yapay zeka reklam",
    "ai tanıtım videosu",
    "higgsfield türkiye",
    "seedance video",
    "veo 3 video üretimi",
    "ai film yapımı"
  ],
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://portzenai.com/yapay-zeka-video-uretimi",
    siteName: "PORTZEN",
    title: "Yapay Zeka Video Üretimi | AI Reklam ve Tanıtım Videosu - PORTZEN",
    description:
      "Yapay zeka video üretimi ile profesyonel reklam ve tanıtım videoları. Higgsfield, Seedance, Veo 3 ile stüdyo maliyetinin onda biri. 3 günde teslim."
  },
  twitter: {
    card: "summary_large_image",
    title: "Yapay Zeka Video Üretimi | PORTZEN",
    description:
      "Higgsfield, Seedance, Veo 3, Kling, Sora 2 ile profesyonel video üretimi. 3 günde teslim. Stüdyo maliyetinin onda biri."
  },
  alternates: { canonical: "https://portzenai.com/yapay-zeka-video-uretimi" },
  robots: { index: true, follow: true }
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Yapay Zeka Video Üretimi",
  serviceType: "Yapay Zeka Video Üretimi",
  provider: {
    "@type": "Organization",
    name: "PORTZEN",
    url: "https://portzenai.com",
    telephone: "+905015884853",
    email: "destek@portzenai.com"
  },
  areaServed: { "@type": "Country", name: "Turkey" },
  description:
    "Yapay zeka video üretimi hizmeti: Higgsfield, Seedance, Veo 3, Kling ve Sora 2 araçları ile profesyonel reklam, tanıtım, sosyal medya ve brand film üretimi. Stüdyo maliyetinin onda biri, 3 günde teslim.",
  offers: {
    "@type": "Offer",
    priceCurrency: "TRY",
    // priceRange: brief görüşmesinde paylaşılıyor
    availability: "https://schema.org/InStock"
  }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Yapay zeka ile üretilen videonun telif hakkı kime ait olur?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Teslim edilen tüm yapay zeka video üretimi çıktılarının ticari kullanım hakkı size aittir. PORTZEN üretim sürecinde lisanslı kurumsal hesaplar (Higgsfield Pro, Veo 3 Enterprise, Seedance Pro) üzerinden çalışır. Sözleşmede; videonun marka adına, reklam panolarında, sosyal medyada ve TV mecralarında kullanım hakkı net biçimde devredilir."
      }
    },
    {
      "@type": "Question",
      name: "Müşterimin gerçek yüzü yapay zeka videoda kullanılabilir mi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Evet. Müşteriden veya marka temsilcisinden 3-10 fotoğraf alıp Higgsfield Soul ID veya HeyGen Avatar ile dijital ikiz çıkarıyoruz. Yüz, ses ve hareket tutarlılığı korunur. Bu işlem için kişiden yazılı onay (KVKK uyumlu rıza formu) zorunludur. İsterseniz tamamen üretilmiş, gerçek olmayan oyuncular da kullanabiliriz."
      }
    },
    {
      "@type": "Question",
      name: "Türkçe konuşan video üretilir mi, dudak senkronu doğru mu?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Evet. ElevenLabs Türkçe ses kütüphanesi ve Veo 3 native ses üretimi ile Türkçe dialog hazırlıyoruz. Lip-sync (dudak senkronu) doğruluğu 2026 modellerinde yaklaşık %95 seviyesinde. Sektörel terimler ve marka isimleri için manuel ses kayıt ve dudak hizalama yapabiliyoruz."
      }
    },
    {
      "@type": "Question",
      name: "Yapay zeka video hangi sosyal medya formatlarında üretilir?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Üç temel oranda teslim ediyoruz: 9:16 (Instagram Reels, TikTok, YouTube Shorts), 1:1 (Instagram feed, Facebook ads), 16:9 (YouTube, web sitesi hero, LinkedIn). Tek brief ile 3 oran birden üretilir, ekstra ücret yoktur. Mobile-first reklamlar için 9:16 öncelikli render edilir."
      }
    },
    {
      "@type": "Question",
      name: "Marka rengi ve logo yapay zeka videoda kullanılır mı?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Evet. Marka rehberinizden (brand guideline) hex kodları, font, logo PNG ve alt başlıkları alıyoruz. Logo ve metin overlay'leri AI üretiminden sonra After Effects ile ekleniyor; bu sayede logo deforme olmuyor, marka rengi her sahnede tutarlı kalıyor. Brand kit yoksa keşif aşamasında çıkarıyoruz."
      }
    },
    {
      "@type": "Question",
      name: "Hayvan, çocuk ve özel mekan görüntüleri gerçek mi yoksa AI mi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tamamen yapay zeka tarafından üretiliyor. Restoran iç mekanı, otomotiv lokasyon çekimi, hayvan reklamları, çocuk gülüşü; hiçbiri gerçek çekim değil. Bu sayede oyuncu ajansı, hayvan eğitmeni veya lokasyon kirası ödemiyorsunuz. Etik sınırlar net: gerçek bir kişiyi izinsiz canlandırmıyoruz, deepfake reklam üretmiyoruz."
      }
    },
    {
      "@type": "Question",
      name: "Yapay zeka video üretiminde kaç revizyon dahil?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tekil video paketinde 2 büyük revizyon (sahne değişikliği) ve sınırsız küçük revizyon (alt yazı, ses tonu, hız) dahildir. Kampanya setinde her video için 3 büyük revizyon, aylık abonelikte sınırsız revizyon hakkı vardır. Revizyon çıktısı 24-48 saatte teslim edilir."
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
      name: "Yapay Zeka Video Üretimi",
      item: "https://portzenai.com/yapay-zeka-video-uretimi"
    }
  ]
};

const stats = [
  { metric: "3 gün", label: "Standart teslim süresi" },
  { metric: "%90", label: "Stüdyo maliyetinden tasarruf" },
  { metric: "5+", label: "Entegre AI motoru" },
  { metric: "9:16 / 1:1 / 16:9", label: "Üç format tek brief" }
];

const whyAIVideo = [
  {
    icon: Zap,
    title: "Geleneksel çekim yerine — çok daha uygun maliyet",
    desc: "Bir reklam filmi için yönetmen, oyuncu, kameraman, ışıkçı, ses, lokasyon, post-prodüksiyon zinciri yerine sadece prompt mühendisi ve editor çalışır. Maliyet ortalama 10 kat düşer."
  },
  {
    icon: Clock3,
    title: "3 hafta yerine 3 gün",
    desc: "Storyboard, lokasyon keşfi, oyuncu castingi, çekim takvimi, izinler; hepsi devre dışı. Brief alındıktan sonra ilk teaser 24 saat içinde, final teslim 3 iş gününde tamamlanır."
  },
  {
    icon: Wand,
    title: "Sınırsız varyasyon",
    desc: "Aynı brief'ten 5 farklı görsel stil, 3 farklı seslendirme, 4 farklı son sahne üretmek ekstra çekim demek değil, yeni prompt yazmak demek. A/B testi yapmak ucuzlar."
  }
];

const aiTools = [
  {
    icon: Film,
    name: "Higgsfield AI",
    use: "Cinema Studio ile multi-shot kurumsal reklam",
    desc: "Çoklu kamera açısı, sahne tutarlılığı ve Soul Cast karakter sistemi ile 30-60 saniyelik kurumsal anlatım videoları için kullanıyoruz. Marketing Studio modülü ile UGC tarzı reklam üretimi yapıyoruz."
  },
  {
    icon: Sparkles,
    name: "Seedance 2.0",
    use: "Cinematic dark fantasy ve premium reklam",
    desc: "Premium markalar, mücevher, otomotiv ve butik moda için sinematik renk paleti, derin alan derinliği ve hareketli kamera koreografisi. Bytedance'in 2026 modeli; ışık tutarlılığında lider."
  },
  {
    icon: Video,
    name: "Veo 3 (Google)",
    use: "Sesli dialog senaryolar",
    desc: "Native ses üretimi ile Türkçe konuşan karakterler, gerçek dudak senkronu, ortam sesleri (ambient sound) ve dialog. Yemek reklamları, kullanıcı yorumu videoları ve hizmet anlatımı için ideal."
  },
  {
    icon: Camera,
    name: "Kling 3.0",
    use: "Hızlı kısa form içerik (Reels/TikTok)",
    desc: "9-15 saniyelik viral içerik için en hızlı render motoru. Aksiyon, dans, hızlı hook açılışları ve trend bazlı içerik için kullanıyoruz. Düşük credit maliyeti sayesinde haftalık üretim için ideal."
  },
  {
    icon: Zap,
    name: "Sora 2 (OpenAI)",
    use: "Yaratıcı konsept ve sürreal videolar",
    desc: "Gerçeklik sınırını aşan yaratıcı konseptler, ürün metaforları, soyut marka anlatımları için kullanıyoruz. Uzun süreli sahne tutarlılığında öne çıkar. Brand film, ajans işi ve festival reklamları için."
  }
];

const videoTypes = [
  {
    icon: Sparkles,
    name: "UGC tarzı reklam",
    desc: "Marketing Studio ile gerçek bir kullanıcının ürünü deneyimleme videosu. Selfie açısı, doğal ışık, samimi dialog. Performance reklam (Meta Ads, TikTok Ads) için en yüksek dönüşüm sağlayan format."
  },
  {
    icon: Video,
    name: "Ürün tanıtım (e-ticaret)",
    desc: "360° ürün dönüşü, yakın plan detay, kullanım sahnesi. Image-to-video (görüntüden videoya) tekniği ile mevcut ürün fotoğrafınızı 8-15 saniyelik harekete dönüştürüyoruz."
  },
  {
    icon: Building2,
    name: "Hizmet anlatım (B2B)",
    desc: "Kurumsal hizmet sunan firmalar için süreç anlatımı: nasıl çalıştığını gösteren 60-90 saniyelik açıklayıcı video. Avukat, danışman, ajans, SaaS firmaları için."
  },
  {
    icon: Zap,
    name: "Sosyal medya hook (Reels/TikTok)",
    desc: "9-15 saniyelik dikkat çekici açılış videoları. Trend ses kullanımı, ilk 2 saniyede hook, hızlı kesim. Kling 3.0 ile hızlı render edip A/B testine sokuyoruz."
  },
  {
    icon: Film,
    name: "Brand film (1-2 dk hikaye)",
    desc: "Markanın değerlerini anlatan duygusal anlatım filmi. Multi-shot Cinema Studio ile 6-12 sahne. Yıl sonu kampanyası, yeni ürün lansmanı, kurumsal kimlik yenileme için ideal."
  },
  {
    icon: Wand,
    name: "Mock product launch",
    desc: "Henüz prototip aşamasındaki ürünü sanki gerçekmiş gibi gösteren önizleme videosu. Kickstarter kampanyaları, yatırımcı pitch'leri ve ön sipariş kampanyaları için kullanıyoruz."
  }
];

const costComparison = [
  { kriter: "Maliyet", traditional: "Yüksek prodüksiyon bütçesi", ai: "Kesirli maliyet" },
  { kriter: "Üretim süresi", traditional: "3 - 6 hafta", ai: "2 - 5 gün" },
  { kriter: "Ekip büyüklüğü", traditional: "6 - 12 kişi", ai: "1 - 2 kişi" },
  { kriter: "Revizyon yöntemi", traditional: "Yeni çekim günü", ai: "Yeni prompt + render" },
  { kriter: "Lokasyon kısıtı", traditional: "Mekan, hava, ışık", ai: "Hayal gücü" },
  { kriter: "Oyuncu ihtiyacı", traditional: "Ajans + casting", ai: "Soul ID veya AI karakter" },
  { kriter: "Format çeşitliliği", traditional: "Ayrı kurgu işi", ai: "3 oran tek brief" }
];

const sectors = [
  { name: "Restoran ve Kafe", slug: "restoran", desc: "Yemek görselleri, atmosfer videosu, menü tanıtımı." },
  { name: "Klinik ve Estetik", slug: "klinik", desc: "Öncesi-sonrası anlatım, tedavi süreci, hekim sunumu." },
  { name: "Emlak", slug: "emlak", desc: "Sanal mülk turu, mahalle tanıtımı, proje önizleme." },
  { name: "Butik ve Moda", slug: "butik", desc: "Lookbook video, defile, sezon kapsülü." },
  { name: "Otomotiv", slug: "otomotiv", desc: "Test sürüş, showroom turu, özellik tanıtımı." },
  { name: "Eğitim ve Kurs", slug: "egitim", desc: "Tanıtım filmi, ders önizleme, başarı hikayesi." }
];

// Fiyat gösterilmez — brief görüşmesinde net rakam paylaşılır.
// Paket adları ve içerikleri sadece kapsam anlatımı için tutuldu (fiyat yok).
const packages = [
  {
    name: "Tekil Video",
    duration: "3 gün teslim",
    color: "bg-paper",
    features: [
      "1 video (15-30 saniye)",
      "3 formatta render (9:16, 1:1, 16:9)",
      "2 büyük revizyon",
      "Türkçe seslendirme dahil",
      "Logo ve alt yazı",
      "MP4 + source files"
    ],
    cta: "Görüşme Al"
  },
  {
    name: "Kampanya Seti",
    duration: "1 hafta teslim",
    color: "bg-brand-yellow",
    badge: "Öneri",
    features: [
      "5 video farklı format",
      "1 brand film (60 sn) + 4 sosyal medya hook",
      "Üç formatta tüm videolar",
      "3 büyük revizyon hak",
      "A/B testi için 2 varyant",
      "Reklam motoru için bidding setup notu"
    ],
    cta: "Görüşme Al"
  },
  {
    name: "Aylık Abonelik",
    duration: "Sürekli üretim",
    color: "bg-paper",
    features: [
      "Aylık düzenli video akışı (paket boyuna göre)",
      "Sınırsız revizyon",
      "Adanmış proje yöneticisi",
      "Aylık kreatif strateji toplantısı",
      "Performans raporlama",
      "Trend takibi ve hızlı reaksiyon içerikleri"
    ],
    cta: "Görüşme Al"
  }
];

const faqs = [
  {
    q: "Yapay zeka ile üretilen videonun telif hakkı kime ait olur?",
    a: "Teslim edilen tüm yapay zeka video üretimi çıktılarının ticari kullanım hakkı size aittir. PORTZEN üretim sürecinde lisanslı kurumsal hesaplar (Higgsfield Pro, Veo 3 Enterprise, Seedance Pro) üzerinden çalışır. Sözleşmede videonun marka adına, reklam panolarında, sosyal medyada ve TV mecralarında kullanım hakkı net biçimde devredilir. Yeniden satış (stock olarak başka markaya satmak) hakkı bizde kalır; tek tarafı kısıtlayan unsur budur."
  },
  {
    q: "Müşterimin gerçek yüzü yapay zeka videoda kullanılabilir mi?",
    a: "Evet. Marka temsilcisinden veya rıza veren kişiden 3-10 farklı açıdan fotoğraf alıyoruz, ardından Higgsfield Soul ID veya HeyGen Avatar ile dijital ikiz (digital twin) oluşturuyoruz. Yüz tutarlılığı, ses tonu ve mimik korunur. Bu işlem için kişiden yazılı onay (KVKK uyumlu rıza formu) almak zorunludur. İsterseniz tamamen yapay zeka tarafından üretilmiş, gerçek olmayan oyuncular da kullanabiliriz; bu durumda telif ve rıza sorunu da olmaz."
  },
  {
    q: "Türkçe konuşan video üretilir mi, dudak senkronu doğru mu?",
    a: "Evet. ElevenLabs Türkçe ses kütüphanesi ve Veo 3 native ses üretimi ile Türkçe dialog hazırlıyoruz. Lip-sync (dudak senkronu) doğruluğu 2026 modellerinde yaklaşık %95 seviyesinde. Sektörel terimler, marka isimleri ve özel telaffuz gerektiren bölümler için manuel ses kayıt ve dudak hizalama (lip-sync correction) yapıyoruz. Tonlama kontrolü için 4-5 farklı ses örneği sunuyoruz; siz seçtiğiniz tonla üretime geçiyoruz."
  },
  {
    q: "Yapay zeka video hangi sosyal medya formatlarında üretilir?",
    a: "Üç temel oranda teslim ediyoruz: 9:16 (Instagram Reels, TikTok, YouTube Shorts, Snapchat), 1:1 (Instagram feed, Facebook ads, LinkedIn), 16:9 (YouTube uzun video, web sitesi hero video, LinkedIn pre-roll). Tek brief ile üç oran birden üretilir, ekstra ücret yoktur. Mobile-first reklamlar için 9:16 öncelikli render edilir. WhatsApp Status için 9:16 + 30 saniye kesim ayrıca sunulur."
  },
  {
    q: "Marka rengi ve logo yapay zeka videoda kullanılır mı?",
    a: "Evet. Marka rehberinizden (brand guideline) hex kodları, font, logo PNG ve alt başlıkları alıyoruz. Logo ve metin overlay'leri AI üretiminden sonra After Effects ile ekleniyor; bu sayede logo deforme olmuyor, marka rengi her sahnede tutarlı kalıyor. Brand kit yoksa keşif aşamasında çıkarıyoruz. AI üretiminde renk paleti tutarlılığı için color grading (renk düzenleme) aşaması ayrıca uygulanıyor."
  },
  {
    q: "Hayvan, çocuk ve özel mekan görüntüleri gerçek mi?",
    a: "Tamamen yapay zeka tarafından üretiliyor. Restoran iç mekanı, otomotiv lokasyon çekimi, hayvan reklamları, çocuk gülüşü; hiçbiri gerçek çekim değil. Bu sayede oyuncu ajansı, hayvan eğitmeni veya lokasyon kirası ödemiyorsunuz. Etik sınırımız net: gerçek bir kişiyi izinsiz canlandırmıyoruz, deepfake reklam üretmiyoruz. Tanınan kişi ya da rakip marka çağrışımı yapan içerikleri reddetme hakkımız saklıdır."
  },
  {
    q: "Yapay zeka video üretiminde kaç revizyon dahil?",
    a: "Tekil video paketinde 2 büyük revizyon (sahne değişikliği, karakter değişikliği) ve sınırsız küçük revizyon (alt yazı, ses tonu, hız, kesim noktası) dahildir. Kampanya setinde her video için 3 büyük revizyon, aylık abonelikte sınırsız revizyon hakkı vardır. Revizyon çıktısı 24-48 saatte teslim edilir. Yeni sahne ekleme (storyboard değişikliği) ayrı projedir."
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
              <span className="text-ink">Yapay Zeka Video Üretimi</span>
            </nav>
          </Reveal>

          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 items-start">
            <div>
              <Reveal>
                <div className="inline-flex items-center gap-2 border-3 border-ink bg-brand-pink text-paper px-3 py-1.5 shadow-brutal-sm mb-6">
                  <Video className="h-4 w-4" />
                  <span className="text-xs font-black uppercase tracking-wider">AI Video Stüdyosu</span>
                </div>
              </Reveal>
              <Reveal delay={100}>
                <h1 className="font-display text-h1 font-black leading-[0.95] max-w-4xl text-ink">
                  Yapay Zeka Video Üretimi
                </h1>
              </Reveal>
              <Reveal delay={150}>
                <p className="mt-4 text-xl font-bold text-ink/70 max-w-3xl">
                  Stüdyo maliyetinin onda biri, 3 günde teslim.
                </p>
              </Reveal>
              <Reveal delay={200}>
                <p className="mt-6 max-w-prose text-body text-ink/80 font-medium">
                  Yapay zeka video üretimi sayesinde profesyonel reklam, tanıtım ve sosyal medya videolarını çekim ekibi olmadan, lokasyon kirası ödemeden, oyuncu ajansı ile uğraşmadan üretiyoruz. PORTZEN; Higgsfield, Seedance 2.0, Veo 3, Kling 3.0 ve Sora 2 başta olmak üzere 5 farklı yapay zeka motorunu tek üretim hattında çalıştırır. Brief'i siz verirsiniz, marka tonunuza özel video 3 iş gününde teslim edilir.
                </p>
              </Reveal>
              <Reveal delay={300}>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="/iletisim"
                    className="inline-flex items-center gap-2 border-3 border-ink bg-ink px-5 py-3 text-sm font-bold uppercase text-paper shadow-brutal hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all"
                  >
                    Ücretsiz Örnek Video İste <ArrowUpRight className="h-4 w-4" />
                  </Link>
                  <a
                    href="https://wa.me/905015884853"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border-3 border-ink bg-paper px-5 py-3 text-sm font-bold uppercase text-ink shadow-brutal hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all"
                  >
                    <MessageCircle className="h-4 w-4" /> WhatsApp ile Konuş
                  </a>
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
                      i % 2 === 0 ? "bg-brand-yellow" : "bg-brand-pink text-paper"
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

      {/* 2. WHY AI VIDEO */}
      <section className="bg-ink text-paper py-section">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-12 max-w-3xl">
              <div className="inline-block border-3 border-paper bg-brand-green text-paper px-3 py-1 text-xs font-black uppercase tracking-wider mb-4 shadow-[6px_6px_0_#FFFDF5]">
                Niye yapay zeka video?
              </div>
              <h2 className="font-display text-h2 font-black leading-tight">
                Geleneksel video çekiminin maliyetini ve süresini neden hala karşılıyorsunuz?
              </h2>
              <p className="mt-4 text-body opacity-85 max-w-prose">
                2026'da bir reklam videosu için 25.000-150.000 TL bütçe ve 3-6 hafta süre harcamak artık zorunluluk değil. Yapay zeka video üretimi; aynı kaliteyi, çoğu zaman daha esnek bir formatta, %90 daha az maliyetle sunuyor. Aşağıda neyin değiştiğini açıklıyoruz.
              </p>
            </div>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-3">
            {whyAIVideo.map((w, i) => {
              const Icon = w.icon;
              return (
                <Reveal key={i} delay={i * 100}>
                  <div className="border-3 border-paper bg-paper/5 p-6 shadow-[8px_8px_0_#FFFDF5] h-full">
                    <Icon className="h-7 w-7 text-brand-yellow mb-4" />
                    <h3 className="font-display text-lg font-black mb-3">{w.title}</h3>
                    <p className="text-sm opacity-85 leading-relaxed">{w.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={400}>
            <div className="mt-10 border-3 border-paper bg-paper/5 p-6 shadow-[6px_6px_0_#FFFDF5]">
              <p className="text-sm opacity-90 leading-relaxed">
                <strong>Not:</strong> Geleneksel video çekimi her durumda yanlış değil. Lüks otomotiv, bankacılık, sigorta gibi belirli sektörlerde gerçek çekim hala tercih edilebilir. Ama her hafta sosyal medya için içerik üretmesi gereken KOBİ ve markalar için yapay zeka video üretimi en mantıklı çözüm. Performans reklamı (Meta Ads, TikTok Ads) için ise A/B testi yapma esnekliği nedeniyle AI video tartışmasız daha verimli. Detaylı maliyet karşılaştırması için <Link href="/blog/ai-reklam-videolari" className="underline font-bold">AI reklam videoları rehberini</Link> okuyabilirsiniz.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 3. AI TOOLS */}
      <section className="bg-paper py-section">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-12 max-w-3xl">
              <div className="inline-block border-3 border-ink bg-brand-purple text-paper px-3 py-1 text-xs font-black uppercase tracking-wider mb-4 shadow-brutal-sm">
                Üretim altyapısı
              </div>
              <h2 className="font-display text-h2 font-black leading-tight text-ink">
                Hangi yapay zeka video araçlarını kullanıyoruz?
              </h2>
              <p className="mt-4 text-body text-ink/70 max-w-prose">
                Tek bir AI motoruna bağlı kalmıyoruz. Her sahnenin ihtiyacına göre 5 farklı motor arasında seçim yapıyoruz. Aşağıda her aracın hangi sahnede en iyi olduğunu açıklıyoruz. Bu sayede bir reklam filminin sahne 1'i Higgsfield'de, sahne 2'si Seedance'de, sahne 3'ü Veo 3'te render edilebilir, sonra tek kurguda birleştirilir.
              </p>
            </div>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {aiTools.map((t, i) => {
              const Icon = t.icon;
              return (
                <Reveal key={i} delay={i * 80}>
                  <div className="border-3 border-ink bg-paper p-6 shadow-brutal hover:-translate-x-1 hover:-translate-y-1 hover:shadow-brutal-lg transition-all h-full">
                    <div className="inline-flex items-center justify-center w-12 h-12 border-3 border-ink bg-brand-yellow shadow-brutal-sm mb-4">
                      <Icon className="h-5 w-5 text-ink" />
                    </div>
                    <h3 className="font-display text-xl font-black mb-1 text-ink">{t.name}</h3>
                    <div className="text-xs font-bold uppercase text-brand-pink mb-3">{t.use}</div>
                    <p className="text-sm text-ink/70 leading-relaxed">{t.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. VIDEO TYPES */}
      <section className="bg-paper py-section border-t-3 border-ink/10">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-12 max-w-3xl">
              <div className="inline-block border-3 border-ink bg-brand-blue text-paper px-3 py-1 text-xs font-black uppercase tracking-wider mb-4 shadow-brutal-sm">
                Üretebildiğimiz video türleri
              </div>
              <h2 className="font-display text-h2 font-black leading-tight text-ink">
                6 farklı video türü, tek üretim hattı
              </h2>
              <p className="mt-4 text-body text-ink/70 max-w-prose">
                Yapay zeka video üretimi sadece reklam değildir. Aşağıdaki 6 ana kategori PORTZEN'in en sık ürettiği formatlar. Daha özel formatlar (animatik, music video, etkinlik aftermovie) için keşif görüşmesinde proje bazlı planlama yapıyoruz.
              </p>
            </div>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {videoTypes.map((v, i) => {
              const Icon = v.icon;
              return (
                <Reveal key={i} delay={i * 60}>
                  <div className="border-3 border-ink bg-paper p-6 shadow-brutal hover:-translate-x-1 hover:-translate-y-1 hover:shadow-brutal-lg transition-all h-full">
                    <Icon className="h-7 w-7 text-ink mb-4" />
                    <h3 className="font-display text-lg font-black mb-2 text-ink">{v.name}</h3>
                    <p className="text-sm text-ink/70 leading-relaxed">{v.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={400}>
            <div className="mt-10 border-3 border-ink bg-brand-yellow p-6 shadow-brutal flex items-center justify-between flex-wrap gap-4">
              <div>
                <div className="font-display text-lg font-black mb-1 text-ink">İlgili hizmet: AI reklam videosu</div>
                <p className="text-sm text-ink/80">
                  Sadece reklam performansına odaklı, A/B testi için optimize edilmiş video üretimi mi arıyorsunuz? Kardeş hizmet sayfamızda detaylı paket bilgisi var.
                </p>
              </div>
              <Link
                href="/ai-reklam-videosu"
                className="inline-flex items-center gap-1 border-3 border-ink bg-ink px-4 py-2 text-xs font-bold uppercase text-paper shadow-brutal-sm hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all"
              >
                AI Reklam Videosu <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 6. COST COMPARISON TABLE */}
      <section className="bg-paper py-section">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-10 max-w-3xl">
              <div className="inline-block border-3 border-ink bg-brand-pink text-paper px-3 py-1 text-xs font-black uppercase tracking-wider mb-4 shadow-brutal-sm">
                Karşılaştırma
              </div>
              <h2 className="font-display text-h2 font-black leading-tight text-ink">
                Geleneksel çekim vs yapay zeka video üretimi
              </h2>
              <p className="mt-4 text-body text-ink/70 max-w-prose">
                Aynı 30 saniyelik reklam videosu için iki yöntemin somut karşılaştırması. Bu tablo gerçek müşteri brief'lerinden çıkarılmış ortalama değerlere dayanır.
              </p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="border-3 border-ink shadow-brutal overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-ink text-paper">
                    <th className="border-3 border-ink p-4 text-left font-display text-base font-black uppercase">Kriter</th>
                    <th className="border-3 border-ink p-4 text-left font-display text-base font-black uppercase">Geleneksel Çekim</th>
                    <th className="border-3 border-ink p-4 text-left font-display text-base font-black uppercase bg-brand-yellow text-ink">Yapay Zeka Video</th>
                  </tr>
                </thead>
                <tbody>
                  {costComparison.map((row, i) => (
                    <tr key={i} className={cn(i % 2 === 0 ? "bg-paper" : "bg-paper/50")}>
                      <td className="border-3 border-ink p-4 font-bold text-ink">{row.kriter}</td>
                      <td className="border-3 border-ink p-4 text-ink/80">{row.traditional}</td>
                      <td className="border-3 border-ink p-4 text-ink font-bold bg-brand-yellow/30">{row.ai}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
          <Reveal delay={300}>
            <p className="mt-6 text-sm text-ink/60 max-w-3xl">
              <strong>Not:</strong> Tablo, 30 saniyelik bir sosyal medya reklam videosu için ortalama değerlere dayanır. TVC (TV reklam filmi) gibi yüksek bütçe gerektiren projelerde geleneksel çekim 250.000-500.000 TL aralığına çıkabilir. Yapay zeka video üretimi bu segmentte de %85'e varan tasarruf sağlar. Detaylı keşif için <Link href="/iletisim" className="underline font-bold">iletişim formunu</Link> kullanabilirsiniz.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 7. SECTORS */}
      <section className="bg-paper py-section border-t-3 border-ink/10">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-12 max-w-3xl">
              <div className="inline-block border-3 border-ink bg-brand-green text-paper px-3 py-1 text-xs font-black uppercase tracking-wider mb-4 shadow-brutal-sm">
                Sektör örnekleri
              </div>
              <h2 className="font-display text-h2 font-black leading-tight text-ink">
                Yapay zeka video üretimi en çok hangi sektörlere uygun?
              </h2>
              <p className="mt-4 text-body text-ink/70 max-w-prose">
                Aşağıdaki 6 sektör için özelleştirilmiş video paketlerimiz var. Her sektörün kendine özgü görsel dili, müşteri beklentisi ve dönüşüm formülü olduğu için sektörel landing sayfalarımızda paket detaylarını inceleyebilirsiniz.
              </p>
            </div>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {sectors.map((sector, i) => (
              <Reveal key={i} delay={i * 60}>
                <Link
                  href={`/ai-reklam-videosu/${sector.slug}`}
                  className="block border-3 border-ink bg-paper p-6 shadow-brutal hover:-translate-x-1 hover:-translate-y-1 hover:shadow-brutal-lg transition-all h-full group"
                >
                  <Palette className="h-7 w-7 text-ink mb-4" />
                  <h3 className="font-display text-lg font-black mb-2 text-ink">{sector.name}</h3>
                  <p className="text-sm text-ink/70 leading-relaxed mb-4">{sector.desc}</p>
                  <span className="inline-flex items-center gap-1 text-xs font-bold uppercase text-brand-pink group-hover:gap-2 transition-all">
                    Sektör Paketini Gör <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CITIES */}
      <section className="bg-brand-blue text-paper py-section">
        <div className="mx-auto max-w-container px-6">
          <div className="grid lg:grid-cols-[1.4fr_1fr] gap-10 items-start">
            <div>
              <Reveal>
                <div className="inline-block border-3 border-ink bg-brand-yellow text-ink px-3 py-1 text-xs font-black uppercase tracking-wider mb-4 shadow-brutal-sm">
                  Hizmet bölgesi
                </div>
              </Reveal>
              <Reveal delay={100}>
                <h2 className="font-display text-h2 font-black leading-tight">
                  İzmir merkez, Türkiye geneli uzaktan üretim
                </h2>
              </Reveal>
              <Reveal delay={200}>
                <p className="mt-4 text-body opacity-90 max-w-prose">
                  PORTZEN İzmir Bornova merkezli çalışır. Ama yapay zeka video üretimi sürecinin hiçbir adımı fiziksel mevcudiyet gerektirmez. Brief görüşmesi Google Meet üzerinden, dosya teslimi WeTransfer ve Drive ile, revizyonlar Notion üzerinden ilerler. İstanbul, Ankara, Antalya, Bursa, Konya, Gaziantep dahil Türkiye'nin her şehrindeki markalarla aynı tempoda çalışıyoruz.
                </p>
              </Reveal>
              <Reveal delay={300}>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href="/ai-reklam-videosu/izmir"
                    className="inline-flex items-center gap-2 border-3 border-ink bg-paper text-ink px-4 py-2 text-xs font-bold uppercase shadow-brutal hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all"
                  >
                    İzmir AI Video <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                  <Link
                    href="/ai-reklam-videosu/istanbul"
                    className="inline-flex items-center gap-2 border-3 border-ink bg-paper text-ink px-4 py-2 text-xs font-bold uppercase shadow-brutal hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all"
                  >
                    İstanbul AI Video <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </Reveal>
            </div>
            <Reveal delay={200}>
              <div className="border-3 border-ink bg-paper text-ink p-6 shadow-brutal">
                <div className="font-display text-xl font-black mb-3">Uzaktan iş akışı</div>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 shrink-0 mt-0.5 text-brand-pink" />
                    <span>30 dk Google Meet keşif görüşmesi</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 shrink-0 mt-0.5 text-brand-pink" />
                    <span>Notion brief formu + asset listesi</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 shrink-0 mt-0.5 text-brand-pink" />
                    <span>Günlük Slack/WhatsApp güncellemesi</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 shrink-0 mt-0.5 text-brand-pink" />
                    <span>Drive üzerinden video preview + revizyon notu</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 shrink-0 mt-0.5 text-brand-pink" />
                    <span>Final teslim: MP4 + source files</span>
                  </li>
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 9. PRICING */}
      <section className="bg-paper py-section">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-12 max-w-3xl">
              <div className="inline-block border-3 border-ink bg-brand-orange text-paper px-3 py-1 text-xs font-black uppercase tracking-wider mb-4 shadow-brutal-sm">
                Çalışma Modeli
              </div>
              <h2 className="font-display text-h2 font-black leading-tight text-ink">
                Video üretim kapsamları
              </h2>
              <p className="mt-4 text-body text-ink/70 max-w-prose">
                3 farklı çalışma modeli sunuyoruz: tek videoluk deneme, kampanya seti veya sürekli aylık üretim. Kapsamı ihtiyacına göre birlikte belirleyip, net teklifi keşif görüşmesinde paylaşıyoruz — video süresi, sahne sayısı, karakter ve özel efekt gereksinimlerine göre.
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
                    p.color === "bg-brand-yellow" ? "text-ink" : "text-ink"
                  )}
                >
                  {p.badge && (
                    <div className="absolute -top-3 left-6 border-3 border-ink bg-brand-pink text-paper px-2 py-0.5 text-xs font-black uppercase shadow-brutal-sm">
                      {p.badge}
                    </div>
                  )}
                  <h3 className="font-display text-2xl font-black mb-2">{p.name}</h3>
                  <div className="text-xs font-bold uppercase tracking-wider opacity-75 mb-6">
                    {p.duration}
                  </div>
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

          <Reveal delay={400}>
            <div className="mt-10 grid md:grid-cols-2 gap-6">
              <div className="border-3 border-ink bg-brand-blue text-paper p-5 shadow-brutal">
                <div className="font-display text-lg font-black mb-2">Sosyal medya ajansı paketi ile birlikte</div>
                <p className="text-sm opacity-90 mb-3">
                  Aylık içerik takvimi, post tasarımı ve community yönetimi de istiyorsanız sosyal medya ajansı hizmetimizle bundle yapıyoruz.
                </p>
                <Link
                  href="/sosyal-medya-ajansi"
                  className="inline-flex items-center gap-1 text-xs font-bold uppercase text-brand-yellow hover:gap-2 transition-all"
                >
                  Sosyal Medya Ajansı <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
              <div className="border-3 border-ink bg-brand-purple text-paper p-5 shadow-brutal">
                <div className="font-display text-lg font-black mb-2">Meta reklam ajansı paketi</div>
                <p className="text-sm opacity-90 mb-3">
                  Ürettiğimiz videoları doğrudan Meta Ads ve Instagram Ads'te yayınlayıp performansı yönetmek için kreatif + reklam yönetimi bundle'ı.
                </p>
                <Link
                  href="/meta-reklam-ajansi"
                  className="inline-flex items-center gap-1 text-xs font-bold uppercase text-brand-yellow hover:gap-2 transition-all"
                >
                  Meta Reklam Ajansı <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 10. FAQ */}
      <section className="bg-ink text-paper py-section">
        <div className="mx-auto max-w-container px-6 max-w-4xl">
          <Reveal>
            <div className="mb-12">
              <div className="inline-block border-3 border-paper bg-brand-purple text-paper px-3 py-1 text-xs font-black uppercase tracking-wider mb-4 shadow-[6px_6px_0_#FFFDF5]">
                Sıkça Sorulan Sorular
              </div>
              <h2 className="font-display text-h2 font-black leading-tight">
                Yapay zeka video üretimi hakkında merak edilenler
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

          <Reveal delay={400}>
            <div className="mt-12 grid md:grid-cols-2 gap-4">
              <div className="border-3 border-paper bg-paper/5 p-5 shadow-[6px_6px_0_#FFFDF5]">
                <div className="font-display text-base font-black mb-2">Blog: Reels yapay zeka ile üretim</div>
                <p className="text-sm opacity-85 mb-3">
                  Instagram Reels'i yapay zeka ile haftalık ölçekte nasıl ürettiğimizi anlattığımız detaylı rehber.
                </p>
                <Link
                  href="/blog/reels-yapay-zeka-ile-uretim"
                  className="inline-flex items-center gap-1 text-xs font-bold uppercase text-brand-yellow hover:gap-2 transition-all"
                >
                  Rehberi Oku <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
              <div className="border-3 border-paper bg-paper/5 p-5 shadow-[6px_6px_0_#FFFDF5]">
                <div className="font-display text-base font-black mb-2">Blog: Instagram Reels algoritması 2026</div>
                <p className="text-sm opacity-85 mb-3">
                  Reels algoritmasının 2026 güncellemeleri ve yapay zeka videoların algoritmadaki yeri.
                </p>
                <Link
                  href="/blog/instagram-reels-algoritmasi-2026"
                  className="inline-flex items-center gap-1 text-xs font-bold uppercase text-brand-yellow hover:gap-2 transition-all"
                >
                  Algoritmayı Anla <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
              <div className="border-3 border-paper bg-paper/5 p-5 shadow-[6px_6px_0_#FFFDF5]">
                <div className="font-display text-base font-black mb-2">Blog: Instagram reklam vs Google Ads</div>
                <p className="text-sm opacity-85 mb-3">
                  KOBİ'ler için iki kanalın yapay zeka video ile birlikte karşılaştırması.
                </p>
                <Link
                  href="/blog/instagram-reklam-vs-google-ads-kobi"
                  className="inline-flex items-center gap-1 text-xs font-bold uppercase text-brand-yellow hover:gap-2 transition-all"
                >
                  Karşılaştırmayı Oku <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
              <div className="border-3 border-paper bg-paper/5 p-5 shadow-[6px_6px_0_#FFFDF5]">
                <div className="font-display text-base font-black mb-2">Blog: Konya mobilya Instagram Reels</div>
                <p className="text-sm opacity-85 mb-3">
                  Sektör vakası: mobilya markası için yapay zeka video Reels üretiminin sonuçları.
                </p>
                <Link
                  href="/blog/konya-mobilya-instagram-reels"
                  className="inline-flex items-center gap-1 text-xs font-bold uppercase text-brand-yellow hover:gap-2 transition-all"
                >
                  Vakayı Oku <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </Reveal>

          <Reveal delay={500}>
            <div className="mt-8 border-3 border-paper bg-paper/5 p-6 shadow-[6px_6px_0_#FFFDF5]">
              <div className="flex items-start gap-4 flex-wrap">
                <Sparkles className="h-6 w-6 shrink-0 text-brand-yellow" />
                <div className="flex-1 min-w-[200px]">
                  <h3 className="font-display text-lg font-black mb-2">Organik dağıtım için Instagram DM otomasyonu</h3>
                  <p className="text-sm opacity-85 mb-3">
                    Ürettiğimiz yapay zeka videolarını Instagram'da yayınlayıp gelen DM'leri otomatize ederek müşteri yakalama hunisi kurmak için Instagram DM Otomasyonu hizmetimize bakın.
                  </p>
                  <Link
                    href="/instagram-dm-otomasyonu"
                    className="inline-flex items-center gap-1 text-xs font-bold uppercase text-brand-yellow hover:gap-2 transition-all"
                  >
                    Instagram DM Otomasyonu <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={600}>
            <div className="mt-6 border-3 border-paper bg-paper/5 p-6 shadow-[6px_6px_0_#FFFDF5]">
              <div className="flex items-start gap-4 flex-wrap">
                <Building2 className="h-6 w-6 shrink-0 text-brand-yellow" />
                <div className="flex-1 min-w-[200px]">
                  <h3 className="font-display text-lg font-black mb-2">Web sitesi hero videosu üretimi</h3>
                  <p className="text-sm opacity-85 mb-3">
                    Web sitesi açılışında otomatik oynayan, marka hikayenizi 8-12 saniyede anlatan hero video üretimi için web tasarım hizmetimizle bundle yapıyoruz.
                  </p>
                  <Link
                    href="/web-tasarim"
                    className="inline-flex items-center gap-1 text-xs font-bold uppercase text-brand-yellow hover:gap-2 transition-all"
                  >
                    Web Tasarım <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 11. FINAL CTA */}
      <section className="py-section">
        <div className="mx-auto max-w-container px-6">
          <div className="border-3 border-ink bg-brand-yellow p-8 md:p-14 shadow-brutal-lg text-ink">
            <Reveal>
              <h2 className="font-display text-h2 font-black leading-tight mb-4 max-w-3xl">
                İlk yapay zeka videonuzu üretelim.
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="text-body opacity-90 mb-8 max-w-2xl font-medium">
                15 dakikalık keşif görüşmesinde markanıza özel sahne önerisi çıkarıyoruz. İsterseniz brief'inizi alıp 24 saat içinde 5-8 saniyelik örnek sahne hazırlıyoruz. Beğenmezseniz ücret yok. Beğenirseniz tam projeye geçiyoruz.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://wa.me/905015884853"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border-3 border-ink bg-ink px-5 py-3 text-sm font-bold uppercase text-paper shadow-brutal hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all"
                >
                  <MessageCircle className="h-4 w-4" /> WhatsApp ile Brief At
                </a>
                <Link
                  href="/iletisim"
                  className="inline-flex items-center gap-2 border-3 border-ink bg-paper px-5 py-3 text-sm font-bold uppercase text-ink shadow-brutal hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all"
                >
                  İletişim Formu <ArrowUpRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/ai-reklam-videosu/butik"
                  className="inline-flex items-center gap-2 border-3 border-ink bg-paper px-5 py-3 text-sm font-bold uppercase text-ink shadow-brutal hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all"
                >
                  Butik Sektörü <ArrowUpRight className="h-4 w-4" />
                </Link>
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
                  <span className="font-bold">İzmir, Türkiye geneli uzaktan</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
