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
import { PricingSection } from "@/components/pricing/PricingSection";
import { ServiceAtAGlance } from "@/components/visual/ServiceAtAGlance";
import { MoreDetails } from "@/components/visual/MoreDetails";
import { PRICING, familyOffersSchema } from "@/data/pricing";

export const metadata: Metadata = {
  title: "Yapay Zeka Video Üretimi | AI Reklam ve Tanıtım Videosu - PORTZEN",
  description:
    "Yapay zeka video üretimi ile profesyonel reklam ve tanıtım videoları. Premium AI motor altyapısı ile çekim ekibi ve lokasyon gerektirmeyen üretim; teslim süresi teklifte yazılı.",
  keywords: [
    "yapay zeka video üretimi",
    "ai video üretimi",
    "ai reklam videosu",
    "yapay zeka reklam",
    "ai tanıtım videosu",
    "ai video ajansı türkiye",
    "kurumsal ai video",
    "premium ai video üretimi",
    "ai film yapımı"
  ],
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://portzenai.com/yapay-zeka-video-uretimi",
    siteName: "PORTZEN",
    title: "Yapay Zeka Video Üretimi | AI Reklam ve Tanıtım Videosu - PORTZEN",
    description:
      "Yapay zeka video üretimi ile profesyonel reklam ve tanıtım videoları. Premium AI motor altyapısı ile çekim ekibi ve lokasyon gerektirmeyen üretim; teslim süresi teklifte yazılı."
  },
  twitter: {
    card: "summary_large_image",
    title: "Yapay Zeka Video Üretimi | PORTZEN",
    description:
      "Kurumsal AI motor altyapısı ile profesyonel video üretimi. Çekim ekibi ve lokasyon gerekmez; teslim süresi teklifte yazılı."
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
    telephone: "+905318639117",
    email: "destek@portzenai.com"
  },
  areaServed: { "@type": "Country", name: "Turkey" },
  description:
    "Yapay zeka video üretimi hizmeti: Kurumsal AI motor altyapısı ile profesyonel reklam, tanıtım, sosyal medya ve brand film üretimi. Çekim ekibi ve lokasyon gerektirmez; teslim süresi kapsama göre teklifte yazılı olarak belirtilir.",
  offers: familyOffersSchema(PRICING["ai-reklam-filmi"])
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
        text: "Teslim edilen tüm yapay zeka video üretimi çıktılarının ticari kullanım hakkı size aittir. PORTZEN üretim sürecinde premium AI motor lisansları üzerinden, kurumsal düzey AI video altyapısı ile çalışır. Sözleşmede; videonun marka adına, reklam panolarında, sosyal medyada ve TV mecralarında kullanım hakkı net biçimde devredilir."
      }
    },
    {
      "@type": "Question",
      name: "Müşterimin gerçek yüzü yapay zeka videoda kullanılabilir mi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Evet. Müşteriden veya marka temsilcisinden 3-10 fotoğraf alıp kurumsal düzeyde dijital ikiz üretimi yapıyoruz. Yüz, ses ve hareket tutarlılığı korunur. Bu işlem için kişiden yazılı onay (KVKK gerekliliklerine göre hazırlanan rıza formu) zorunludur. İsterseniz tamamen üretilmiş, gerçek olmayan oyuncular da kullanabiliriz."
      }
    },
    {
      "@type": "Question",
      name: "Türkçe konuşan video üretilir mi, dudak senkronu doğru mu?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Evet. Premium Türkçe TTS sistemi ve native ses üretimli AI motorları ile Türkçe dialog hazırlıyoruz. Güncel modellerde lip-sync (dudak senkronu) büyük ölçüde doğal görünür. Sektörel terimler ve marka isimleri için manuel ses kayıt ve dudak hizalama yapabiliyoruz."
      }
    },
    {
      "@type": "Question",
      name: "Yapay zeka video hangi sosyal medya formatlarında üretilir?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Üç temel oranda teslim ediyoruz: 9:16 (Instagram Reels, TikTok, YouTube Shorts), 1:1 (Instagram feed, Facebook ads), 16:9 (YouTube, web sitesi hero, LinkedIn). Teslim edilen oran (format) sayısı pakete göre değişir; üç oranın birlikte teslimi Kurumsal pakette yer alır. Mobile-first reklamlar için 9:16 öncelikli render edilir."
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
        text: "Revizyon kapsamı ve revizyon teslim süresi teklifte yazılı olarak belirtilir. Alt yazı, ses tonu ve hız gibi küçük düzeltmeler hızlıca yapılır; paketin sahne sınırını aşan yeni sahne ekleme ayrı iş olarak planlanır."
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
  { metric: "Proje", label: "Proje bazlı paket fiyatı" },
  { metric: "AI ses", label: "Seslendirme tüm paketlerde dahil" },
  { metric: "5+", label: "Entegre AI motoru" },
  { metric: "9:16 / 1:1 / 16:9", label: "Format sayısı pakete göre" }
];

const whyAIVideo = [
  {
    icon: Zap,
    title: "Geleneksel çekim yerine — çok daha uygun maliyet",
    desc: "Bir reklam filmi için yönetmen, oyuncu, kameraman, ışıkçı, ses, lokasyon, post-prodüksiyon zinciri yerine sadece prompt mühendisi ve editor çalışır. Üretim zinciri kısaldığı için maliyet yapısı da değişir."
  },
  {
    icon: Clock3,
    title: "Daha kısa üretim süreci",
    desc: "Lokasyon keşfi, oyuncu castingi, çekim takvimi, izinler; hepsi devre dışı. Brief ve onaydan sonra doğrudan üretime geçilir; teslim süresi kapsama göre teklifte yazılı olarak belirtilir."
  },
  {
    icon: Wand,
    title: "Hızlı varyasyon",
    desc: "Aynı brief'ten 5 farklı görsel stil, 3 farklı seslendirme, 4 farklı son sahne üretmek ekstra çekim demek değil, yeni prompt yazmak demek. A/B testi yapmak ucuzlar."
  }
];

const aiTools = [
  {
    icon: Film,
    name: "Sinematik Anlatım Motoru",
    use: "Multi-shot kurumsal reklam üretimi",
    desc: "Çoklu kamera açısı, sahne tutarlılığı ve karakter sürekliliği sağlayan üretim hattı ile 30-60 saniyelik kurumsal anlatım videoları hazırlıyoruz. UGC tarzı reklam formatı için ayrı bir üretim modülüyle birlikte çalışır."
  },
  {
    icon: Sparkles,
    name: "Premium Sinematik Motor",
    use: "Cinematic dark fantasy ve premium reklam",
    desc: "Premium markalar, mücevher, otomotiv ve butik moda için sinematik renk paleti, derin alan derinliği ve hareketli kamera koreografisi. 2026 kuşağı görsel motorlar arasında ışık tutarlılığında öne çıkanları kullanıyoruz."
  },
  {
    icon: Video,
    name: "Sesli Dialog Motoru",
    use: "Sesli dialog senaryolar",
    desc: "Native ses üretimi ile Türkçe konuşan karakterler, gerçek dudak senkronu, ortam sesleri (ambient sound) ve dialog. Yemek reklamları, kullanıcı yorumu videoları ve hizmet anlatımı için ideal."
  },
  {
    icon: Camera,
    name: "Hızlı Render Motoru",
    use: "Hızlı kısa form içerik (Reels/TikTok)",
    desc: "9-15 saniyelik kısa form içerik için hızlı render altyapısı. Aksiyon, dans, hızlı hook açılışları ve trend bazlı içerik için kullanıyoruz. Düşük üretim maliyeti sayesinde haftalık ölçekli üretim için ideal."
  },
  {
    icon: Zap,
    name: "Yaratıcı Konsept Motoru",
    use: "Yaratıcı konsept ve sürreal videolar",
    desc: "Gerçeklik sınırını aşan yaratıcı konseptler, ürün metaforları, soyut marka anlatımları için kullanıyoruz. Uzun süreli sahne tutarlılığında öne çıkar. Brand film, ajans işi ve festival reklamları için."
  }
];

const videoTypes = [
  {
    icon: Sparkles,
    name: "UGC tarzı reklam",
    desc: "Marketing Studio ile gerçek bir kullanıcının ürünü deneyimleme videosu. Selfie açısı, doğal ışık, samimi dialog. Performance reklam (Meta Ads, TikTok Ads) için sık tercih edilen format."
  },
  {
    icon: Video,
    name: "Ürün tanıtım (e-ticaret)",
    desc: "360° ürün dönüşü, yakın plan detay, kullanım sahnesi. Image-to-video (görüntüden videoya) tekniği ile mevcut ürün fotoğrafınızı 8-15 saniyelik harekete dönüştürüyoruz."
  },
  {
    icon: Building2,
    name: "Hizmet anlatım (B2B)",
    desc: "Kurumsal hizmet sunan firmalar için süreç anlatımı: nasıl çalıştığını gösteren, süresi pakete göre belirlenen kısa açıklayıcı video. Avukat, danışman, ajans, SaaS firmaları için."
  },
  {
    icon: Zap,
    name: "Sosyal medya hook (Reels/TikTok)",
    desc: "9-15 saniyelik dikkat çekici açılış videoları. Trend ses kullanımı, ilk 2 saniyede hook, hızlı kesim. Hızlı render motoruyla üretip A/B testine sokuyoruz."
  },
  {
    icon: Film,
    name: "Brand film (kısa hikaye filmi)",
    desc: "Markanın değerlerini anlatan duygusal anlatım filmi. Multi-shot Cinema Studio ile Kurumsal paketin süre ve sahne sınırı içinde özel konseptli film. Yıl sonu kampanyası, yeni ürün lansmanı, kurumsal kimlik yenileme için ideal."
  },
  {
    icon: Wand,
    name: "Mock product launch",
    desc: "Henüz prototip aşamasındaki ürünü sanki gerçekmiş gibi gösteren önizleme videosu. Kickstarter kampanyaları, yatırımcı pitch'leri ve ön sipariş kampanyaları için kullanıyoruz."
  }
];

const costComparison = [
  { kriter: "Maliyet", traditional: "Yüksek prodüksiyon bütçesi", ai: "Kesirli maliyet" },
  { kriter: "Üretim süresi", traditional: "Çekim günü + post-prodüksiyon", ai: "Çekim günü yok; süre teklifte yazılı" },
  { kriter: "Ekip büyüklüğü", traditional: "6 - 12 kişi", ai: "1 - 2 kişi" },
  { kriter: "Revizyon yöntemi", traditional: "Yeni çekim günü", ai: "Yeni prompt + render" },
  { kriter: "Lokasyon kısıtı", traditional: "Mekan, hava, ışık", ai: "Hayal gücü" },
  { kriter: "Oyuncu ihtiyacı", traditional: "Ajans + casting", ai: "Dijital ikiz veya AI karakter" },
  { kriter: "Format çeşitliliği", traditional: "Ayrı kurgu işi", ai: "Pakete göre çoklu oran" }
];

const sectors = [
  { name: "Restoran ve Kafe", slug: "restoran", desc: "Yemek görselleri, atmosfer videosu, menü tanıtımı." },
  { name: "Klinik ve Estetik", slug: "klinik", desc: "Öncesi-sonrası anlatım, tedavi süreci, hekim sunumu." },
  { name: "Emlak", slug: "emlak", desc: "Sanal mülk turu, mahalle tanıtımı, proje önizleme." },
  { name: "Butik ve Moda", slug: "butik", desc: "Lookbook video, defile, sezon kapsülü." },
  { name: "Otomotiv", slug: "otomotiv", desc: "Test sürüş, showroom turu, özellik tanıtımı." },
  { name: "Eğitim ve Kurs", slug: "egitim", desc: "Tanıtım filmi, ders önizleme, başarı hikayesi." }
];

// Paket adları ve içerikleri sadece kapsam anlatımı için tutuldu (fiyat yok).

const faqs = [
  {
    q: "Yapay zeka ile üretilen videonun telif hakkı kime ait olur?",
    a: "Teslim edilen tüm yapay zeka video üretimi çıktılarının ticari kullanım hakkı size aittir. PORTZEN üretim sürecinde premium AI motor lisansları ile kurumsal düzey AI video altyapısı üzerinden çalışır. Sözleşmede videonun marka adına, reklam panolarında, sosyal medyada ve TV mecralarında kullanım hakkı net biçimde devredilir. Yeniden satış (stock olarak başka markaya satmak) hakkı bizde kalır; tek tarafı kısıtlayan unsur budur."
  },
  {
    q: "Müşterimin gerçek yüzü yapay zeka videoda kullanılabilir mi?",
    a: "Evet. Marka temsilcisinden veya rıza veren kişiden 3-10 farklı açıdan fotoğraf alıyoruz, ardından kurumsal düzeyde dijital ikiz (digital twin) oluşturuyoruz. Yüz tutarlılığı, ses tonu ve mimik korunur. Bu işlem için kişiden yazılı onay (KVKK gerekliliklerine göre hazırlanan rıza formu) almak zorunludur. İsterseniz tamamen yapay zeka tarafından üretilmiş, gerçek olmayan oyuncular da kullanabiliriz; bu durumda telif ve rıza sorunu da olmaz."
  },
  {
    q: "Türkçe konuşan video üretilir mi, dudak senkronu doğru mu?",
    a: "Evet. Premium Türkçe TTS sistemi ve native ses üretimli AI motorları ile Türkçe dialog hazırlıyoruz. Güncel modellerde lip-sync (dudak senkronu) büyük ölçüde doğal görünür. Sektörel terimler, marka isimleri ve özel telaffuz gerektiren bölümler için manuel ses kayıt ve dudak hizalama (lip-sync correction) yapıyoruz. Tonlama kontrolü için 4-5 farklı ses örneği sunuyoruz; siz seçtiğiniz tonla üretime geçiyoruz."
  },
  {
    q: "Yapay zeka video hangi sosyal medya formatlarında üretilir?",
    a: "Üç temel oranda teslim ediyoruz: 9:16 (Instagram Reels, TikTok, YouTube Shorts, Snapchat), 1:1 (Instagram feed, Facebook ads, LinkedIn), 16:9 (YouTube uzun video, web sitesi hero video, LinkedIn pre-roll). Teslim edilen oran (format) sayısı pakete göre değişir; üç oranın birlikte teslimi Kurumsal pakette yer alır. Mobile-first reklamlar için 9:16 öncelikli render edilir. WhatsApp Status için 9:16 + 30 saniye kesim ayrıca sunulur."
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
    a: "Revizyon kapsamı ve revizyon teslim süresi teklifte yazılı olarak belirtilir. Alt yazı, ses tonu ve hız gibi küçük düzeltmeler hızlıca yapılır; paketin sahne sınırını aşan yeni sahne ekleme ayrı iş olarak planlanır."
  }
];

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* 1. HERO */}
      <section className="bg-white py-section">
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
                <div className="inline-flex items-center gap-2 border-3 border-ink/15 bg-slate text-white px-3 py-1.5 shadow-brutal-sm mb-6 rounded-full">
                  <Video className="h-4 w-4" />
                  <span className="text-xs font-black uppercase tracking-wider">AI Video Stüdyosu</span>
                </div>
              </Reveal>
              <Reveal delay={100}>
                <h1 className="font-display text-h1 font-black leading-tight max-w-4xl text-ink">
                  Yapay Zeka Video Üretimi
                </h1>
              </Reveal>
              <Reveal delay={150}>
                <p className="mt-4 text-xl font-bold text-ink/70 max-w-3xl">
                  Çekim ekibi ve lokasyon olmadan, markanıza özel video.
                </p>
              </Reveal>
              <Reveal delay={200}>
                <p className="mt-6 max-w-prose text-body text-ink/80 font-medium">
                  Yapay zeka video üretimi sayesinde profesyonel reklam, tanıtım ve sosyal medya videolarını çekim ekibi olmadan, lokasyon kirası ödemeden, oyuncu ajansı ile uğraşmadan üretiyoruz. PORTZEN; kurumsal AI motor altyapısını tek üretim hattında birleştirir — sinematik anlatım, sesli dialog, hızlı render ve yaratıcı konsept motorlarını sahnenin ihtiyacına göre seçeriz. Brief&apos;i siz verirsiniz, marka tonunuza özel video teklifte yazılı teslim takvimiyle hazırlanır.
                </p>
              </Reveal>
              <Reveal delay={300}>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="/iletisim"
                    className="inline-flex items-center gap-2 border-3 border-ink/15 bg-slate px-5 py-3 text-sm font-bold text-white shadow-brutal transition-all rounded-full"
                  >
                    Teklif İsteyin <ArrowUpRight className="h-4 w-4" />
                  </Link>
                  <a
                    href="https://wa.me/905318639117"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border-3 border-ink/15 bg-paper px-5 py-3 text-sm font-bold text-ink shadow-brutal transition-all rounded-full"
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
                      "border-3 border-ink/15 p-5 shadow-brutal rounded-2xl",
                      i % 2 === 0 ? "bg-light" : "bg-light text-ink"
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

      <ServiceAtAGlance href="/yapay-zeka-video-uretimi" />

      <MoreDetails title="Ayrıntılar: Neden yapay zeka video?" summary="Maliyet, süre ve varyasyon farkı">
      {/* 2. WHY AI VIDEO */}
      <section className="bg-white text-ink py-section">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-12 max-w-3xl">
              <div className="inline-block border-3 border-ink/10 bg-slate text-white px-3 py-1 text-xs font-black tracking-wider mb-4 rounded-full">
                Niye yapay zeka video?
              </div>
              <h2 className="font-display text-h2 font-black leading-tight">
                Geleneksel video çekiminin maliyetini ve süresini neden hala karşılıyorsunuz?
              </h2>
              <p className="mt-4 text-body opacity-85 max-w-prose">
                2026&apos;da bir reklam videosu için büyük bütçe ve 3-6 hafta süre harcamak artık zorunluluk değil. Yapay zeka video üretimi; çekim kalemleri olmadan, çoğu zaman daha esnek bir formatta üretim sunuyor. Aşağıda neyin değiştiğini açıklıyoruz.
              </p>
            </div>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-3">
            {whyAIVideo.map((w, i) => {
              const Icon = w.icon;
              return (
                <Reveal key={i} delay={i * 100}>
                  <div className="border-3 border-ink/10 bg-light p-6 h-full rounded-2xl">
                    <Icon className="h-7 w-7 text-ink mb-4" />
                    <h3 className="font-display text-lg font-black mb-3">{w.title}</h3>
                    <p className="text-sm opacity-85 leading-relaxed">{w.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={400}>
            <div className="mt-10 border-3 border-ink/10 bg-light p-6 rounded-2xl">
              <p className="text-sm opacity-90 leading-relaxed">
                <strong>Not:</strong> Geleneksel video çekimi her durumda yanlış değil. Lüks otomotiv, bankacılık, sigorta gibi belirli sektörlerde gerçek çekim hala tercih edilebilir. Ama her hafta sosyal medya için içerik üretmesi gereken KOBİ ve markalar için yapay zeka video üretimi en mantıklı çözüm. Performans reklamı (Meta Ads, TikTok Ads) için ise A/B testi yapma esnekliği nedeniyle AI video çoğu zaman daha pratiktir. Detaylı maliyet karşılaştırması için <Link href="/blog/ai-reklam-videolari" className="underline font-bold">AI reklam videoları rehberini</Link> okuyabilirsiniz.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      </MoreDetails>
      <MoreDetails title="Ayrıntılar: Üretim altyapısı" summary="Hangi sahnede hangi AI motoru kullanılır?">
      {/* 3. AI TOOLS */}
      <section className="bg-white py-section">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-12 max-w-3xl">
              <div className="inline-block border-3 border-ink/15 bg-slate text-white px-3 py-1 text-xs font-black tracking-wider mb-4 shadow-brutal-sm rounded-full">
                Üretim altyapısı
              </div>
              <h2 className="font-display text-h2 font-black leading-tight text-ink">
                Hangi yapay zeka video araçlarını kullanıyoruz?
              </h2>
              <p className="mt-4 text-body text-ink/70 max-w-prose">
                Tek bir AI motoruna bağlı kalmıyoruz. Her sahnenin ihtiyacına göre 5 farklı motor kategorisi arasında seçim yapıyoruz. Aşağıda her motorun hangi sahnede en iyi olduğunu açıklıyoruz. Bu sayede bir reklam filminin sahne 1&apos;i sinematik motorda, sahne 2&apos;si premium sinematik motorda, sahne 3&apos;ü sesli dialog motorunda render edilebilir, sonra tek kurguda birleştirilir.
              </p>
            </div>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {aiTools.map((t, i) => {
              const Icon = t.icon;
              return (
                <Reveal key={i} delay={i * 80}>
                  <div className="border-3 border-ink/15 bg-paper p-6 shadow-brutal hover:shadow-brutal-lg transition-all h-full rounded-2xl">
                    <div className="inline-flex items-center justify-center w-12 h-12 border-3 border-ink/15 bg-lime shadow-brutal-sm mb-4 rounded-full">
                      <Icon className="h-5 w-5 text-ink" />
                    </div>
                    <h3 className="font-display text-xl font-black mb-1 text-ink">{t.name}</h3>
                    <div className="text-xs font-bold uppercase text-ink mb-3">{t.use}</div>
                    <p className="text-sm text-ink/70 leading-relaxed">{t.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      </MoreDetails>
      {/* 4. VIDEO TYPES */}
      <section className="bg-white py-section border-t-3 border-ink/10">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-12 max-w-3xl">
              <div className="inline-block border-3 border-ink/15 bg-slate text-white px-3 py-1 text-xs font-black tracking-wider mb-4 shadow-brutal-sm rounded-full">
                Üretebildiğimiz video türleri
              </div>
              <h2 className="font-display text-h2 font-black leading-tight text-ink">
                6 farklı video türü, tek üretim hattı
              </h2>
              <p className="mt-4 text-body text-ink/70 max-w-prose">
                Yapay zeka video üretimi sadece reklam değildir. Aşağıdaki 6 ana kategori PORTZEN&apos;in en sık ürettiği formatlar. Daha özel formatlar (animatik, music video, etkinlik aftermovie) için keşif görüşmesinde proje bazlı planlama yapıyoruz.
              </p>
            </div>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {videoTypes.map((v, i) => {
              const Icon = v.icon;
              return (
                <Reveal key={i} delay={i * 60}>
                  <div className="border-3 border-ink/15 bg-paper p-6 shadow-brutal hover:shadow-brutal-lg transition-all h-full rounded-2xl">
                    <Icon className="h-7 w-7 text-ink mb-4" />
                    <h3 className="font-display text-lg font-black mb-2 text-ink">{v.name}</h3>
                    <p className="text-sm text-ink/70 leading-relaxed">{v.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={400}>
            <div className="mt-10 border-3 border-ink/15 bg-light p-6 shadow-brutal flex items-center justify-between flex-wrap gap-4 rounded-2xl">
              <div>
                <div className="font-display text-lg font-black mb-1 text-ink">İlgili hizmet: AI reklam videosu</div>
                <p className="text-sm text-ink/80">
                  Sadece reklam performansına odaklı, A/B testi için optimize edilmiş video üretimi mi arıyorsunuz? Kardeş hizmet sayfamızda detaylı paket bilgisi var.
                </p>
              </div>
              <Link
                href="/ai-reklam-videosu"
                className="inline-flex items-center gap-1 border-3 border-ink/15 bg-slate px-4 py-2 text-xs font-bold text-white shadow-brutal-sm transition-all rounded-full"
              >
                AI Reklam Videosu <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <MoreDetails title="Ayrıntılar: Geleneksel çekim vs yapay zeka" summary="Genel karşılaştırma tablosu">
      {/* 6. COST COMPARISON TABLE */}
      <section className="bg-white py-section">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-10 max-w-3xl">
              <div className="inline-block border-3 border-ink/15 bg-slate text-white px-3 py-1 text-xs font-black tracking-wider mb-4 shadow-brutal-sm rounded-full">
                Karşılaştırma
              </div>
              <h2 className="font-display text-h2 font-black leading-tight text-ink">
                Geleneksel çekim vs yapay zeka video üretimi
              </h2>
              <p className="mt-4 text-body text-ink/70 max-w-prose">
                Aynı 30 saniyelik reklam videosu için iki yöntemin somut karşılaştırması. Tablo genel bir karşılaştırmadır; gerçek değerler projeye göre değişir.
              </p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="border-3 border-ink/15 shadow-brutal overflow-x-auto rounded-2xl">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-light text-ink">
                    <th className="border-3 border-ink/15 p-4 text-left font-display text-base font-black uppercase rounded-2xl">Kriter</th>
                    <th className="border-3 border-ink/15 p-4 text-left font-display text-base font-black uppercase rounded-2xl">Geleneksel Çekim</th>
                    <th className="border-3 border-ink/15 p-4 text-left font-display text-base font-black uppercase bg-light text-ink rounded-2xl">Yapay Zeka Video</th>
                  </tr>
                </thead>
                <tbody>
                  {costComparison.map((row, i) => (
                    <tr key={i} className={cn(i % 2 === 0 ? "bg-paper" : "bg-light")}>
                      <td className="border-3 border-ink/15 p-4 font-bold text-ink rounded-2xl">{row.kriter}</td>
                      <td className="border-3 border-ink/15 p-4 text-ink/80 rounded-2xl">{row.traditional}</td>
                      <td className="border-3 border-ink/15 p-4 text-ink font-bold bg-light rounded-2xl">{row.ai}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
          <Reveal delay={300}>
            <p className="mt-6 text-sm text-ink/60 max-w-3xl">
              <strong>Not:</strong> Tablo, 30 saniyelik bir sosyal medya reklam videosu için genel bir karşılaştırmadır. TVC (TV reklam filmi) gibi yüksek bütçe gerektiren projelerde geleneksel çekim maliyeti katlanarak artar. Yapay zeka video üretimi bu segmentte de çekim kalemlerini ortadan kaldırarak maliyeti düşürmeyi hedefler. Detaylı keşif için <Link href="/iletisim" className="underline font-bold">iletişim formunu</Link> kullanabilirsiniz.
            </p>
          </Reveal>
        </div>
      </section>

      </MoreDetails>
      {/* 7. SECTORS */}
      <section className="bg-white py-section border-t-3 border-ink/10">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-12 max-w-3xl">
              <div className="inline-block border-3 border-ink/15 bg-slate text-white px-3 py-1 text-xs font-black tracking-wider mb-4 shadow-brutal-sm rounded-full">
                Sektör örnekleri
              </div>
              <h2 className="font-display text-h2 font-black leading-tight text-ink">
                Yapay zeka video üretimi en çok hangi sektörlere uygun?
              </h2>
              <p className="mt-4 text-body text-ink/70 max-w-prose">
                Aşağıdaki 6 sektör için sektöre özel senaryo örneklerimiz var. Her sektörün kendine özgü görsel dili, müşteri beklentisi ve dönüşüm formülü olduğu için sektörel landing sayfalarımızda örnekleri inceleyebilirsiniz; fiyatlar tüm sektörlerde aynı paket yapısına dayanır.
              </p>
            </div>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {sectors.map((sector, i) => (
              <Reveal key={i} delay={i * 60}>
                <Link
                  href={`/ai-reklam-videosu/${sector.slug}`}
                  className="block border-3 border-ink/15 bg-paper p-6 shadow-brutal hover:shadow-brutal-lg transition-all h-full group rounded-2xl"
                >
                  <Palette className="h-7 w-7 text-ink mb-4" />
                  <h3 className="font-display text-lg font-black mb-2 text-ink">{sector.name}</h3>
                  <p className="text-sm text-ink/70 leading-relaxed mb-4">{sector.desc}</p>
                  <span className="inline-flex items-center gap-1 text-xs font-bold uppercase text-ink group-hover:gap-2 transition-all">
                    Sektör Sayfasını Gör <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CITIES */}
      <section className="bg-white text-ink py-section">
        <div className="mx-auto max-w-container px-6">
          <div className="grid lg:grid-cols-[1.4fr_1fr] gap-10 items-start">
            <div>
              <Reveal>
                <div className="inline-block border-3 border-ink/15 bg-slate text-white px-3 py-1 text-xs font-black tracking-wider mb-4 shadow-brutal-sm rounded-full">
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
                  PORTZEN İzmir Bornova merkezli çalışır. Ama yapay zeka video üretimi sürecinin hiçbir adımı fiziksel mevcudiyet gerektirmez. Brief görüşmesi Google Meet üzerinden, dosya teslimi WeTransfer ve Drive ile, revizyonlar Notion üzerinden ilerler. İstanbul, Ankara, Antalya, Bursa, Konya, Gaziantep dahil Türkiye&apos;nin her şehrindeki markalarla aynı tempoda çalışıyoruz.
                </p>
              </Reveal>
              <Reveal delay={300}>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href="/ai-reklam-videosu/izmir"
                    className="inline-flex items-center gap-2 border-3 border-ink/15 bg-paper text-ink px-4 py-2 text-xs font-bold shadow-brutal transition-all rounded-full"
                  >
                    İzmir AI Video <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                  <Link
                    href="/ai-reklam-videosu/istanbul"
                    className="inline-flex items-center gap-2 border-3 border-ink/15 bg-paper text-ink px-4 py-2 text-xs font-bold shadow-brutal transition-all rounded-full"
                  >
                    İstanbul AI Video <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </Reveal>
            </div>
            <Reveal delay={200}>
              <div className="border-3 border-ink/15 bg-paper text-ink p-6 shadow-brutal rounded-2xl">
                <div className="font-display text-xl font-black mb-3">Uzaktan iş akışı</div>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 shrink-0 mt-0.5 text-ink" />
                    <span>30 dk Google Meet keşif görüşmesi</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 shrink-0 mt-0.5 text-ink" />
                    <span>Notion brief formu + asset listesi</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 shrink-0 mt-0.5 text-ink" />
                    <span>Günlük Slack/WhatsApp güncellemesi</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 shrink-0 mt-0.5 text-ink" />
                    <span>Drive üzerinden video preview + revizyon notu</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 shrink-0 mt-0.5 text-ink" />
                    <span>Final teslim: MP4 + source files</span>
                  </li>
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FİYATLAR — kaynak: src/data/pricing.ts */}

      <PricingSection family="ai-reklam-filmi" heading="AI reklam filmi fiyatları" />


      {/* 10. FAQ */}
      <section className="bg-white text-ink py-section">
        <div className="mx-auto max-w-container px-6 max-w-4xl">
          <Reveal>
            <div className="mb-12">
              <div className="inline-block border-3 border-ink/10 bg-slate text-white px-3 py-1 text-xs font-black tracking-wider mb-4 rounded-full">
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
                <div className="border-l-3 border-lime pl-6">
                  <h3 className="font-display text-xl font-black mb-3">{f.q}</h3>
                  <p className="text-body opacity-85 leading-relaxed">{f.a}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={400}>
            <div className="mt-12 grid md:grid-cols-2 gap-4">
              <div className="border-3 border-ink/10 bg-light p-5 rounded-2xl">
                <div className="font-display text-base font-black mb-2">Blog: Reels yapay zeka ile üretim</div>
                <p className="text-sm opacity-85 mb-3">
                  Instagram Reels&apos;i yapay zeka ile haftalık ölçekte nasıl ürettiğimizi anlattığımız detaylı rehber.
                </p>
                <Link
                  href="/blog/reels-yapay-zeka-ile-uretim"
                  className="inline-flex items-center gap-1 text-xs font-bold uppercase text-ink hover:gap-2 transition-all"
                >
                  Rehberi Oku <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
              <div className="border-3 border-ink/10 bg-light p-5 rounded-2xl">
                <div className="font-display text-base font-black mb-2">Blog: Instagram Reels algoritması 2026</div>
                <p className="text-sm opacity-85 mb-3">
                  Reels algoritmasının 2026 güncellemeleri ve yapay zeka videoların algoritmadaki yeri.
                </p>
                <Link
                  href="/blog/instagram-reels-algoritmasi-2026"
                  className="inline-flex items-center gap-1 text-xs font-bold uppercase text-ink hover:gap-2 transition-all"
                >
                  Algoritmayı Anla <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
              <div className="border-3 border-ink/10 bg-light p-5 rounded-2xl">
                <div className="font-display text-base font-black mb-2">Blog: Instagram reklam vs Google Ads</div>
                <p className="text-sm opacity-85 mb-3">
                  KOBİ&apos;ler için iki kanalın yapay zeka video ile birlikte karşılaştırması.
                </p>
                <Link
                  href="/blog/instagram-reklam-vs-google-ads-kobi"
                  className="inline-flex items-center gap-1 text-xs font-bold uppercase text-ink hover:gap-2 transition-all"
                >
                  Karşılaştırmayı Oku <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
              <div className="border-3 border-ink/10 bg-light p-5 rounded-2xl">
                <div className="font-display text-base font-black mb-2">Blog: Konya mobilya Instagram Reels</div>
                <p className="text-sm opacity-85 mb-3">
                  Örnek: mobilya markası için yapay zeka video Reels üretim süreci.
                </p>
                <Link
                  href="/blog/konya-mobilya-instagram-reels"
                  className="inline-flex items-center gap-1 text-xs font-bold uppercase text-ink hover:gap-2 transition-all"
                >
                  Yazıyı Oku <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </Reveal>

          <Reveal delay={500}>
            <div className="mt-8 border-3 border-ink/10 bg-light p-6 rounded-2xl">
              <div className="flex items-start gap-4 flex-wrap">
                <Sparkles className="h-6 w-6 shrink-0 text-ink" />
                <div className="flex-1 min-w-[200px]">
                  <h3 className="font-display text-lg font-black mb-2">Organik dağıtım için Instagram DM otomasyonu</h3>
                  <p className="text-sm opacity-85 mb-3">
                    Ürettiğimiz yapay zeka videolarını Instagram&apos;da yayınlayıp yorum ve hikâye etkileşimine kural tabanlı otomatik DM göndermek için Instagram DM Otomasyonu hizmetimize bakın. DM&apos;lere AI ile serbest yanıt ise ayrı bir hizmet olan AI müşteri asistanı kapsamındadır.
                  </p>
                  <Link
                    href="/instagram-dm-otomasyonu"
                    className="inline-flex items-center gap-1 text-xs font-bold uppercase text-ink hover:gap-2 transition-all"
                  >
                    Instagram DM Otomasyonu <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={600}>
            <div className="mt-6 border-3 border-ink/10 bg-light p-6 rounded-2xl">
              <div className="flex items-start gap-4 flex-wrap">
                <Building2 className="h-6 w-6 shrink-0 text-ink" />
                <div className="flex-1 min-w-[200px]">
                  <h3 className="font-display text-lg font-black mb-2">Web sitesi hero videosu üretimi</h3>
                  <p className="text-sm opacity-85 mb-3">
                    Web sitesi açılışında otomatik oynayan, marka hikayenizi 8-12 saniyede anlatan hero video üretimini web tasarım projenizle birlikte planlıyoruz.
                  </p>
                  <Link
                    href="/web-tasarim"
                    className="inline-flex items-center gap-1 text-xs font-bold uppercase text-ink hover:gap-2 transition-all"
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
          <div className="border-3 border-ink/15 bg-light p-8 md:p-14 shadow-brutal-lg text-ink rounded-2xl">
            <Reveal>
              <h2 className="font-display text-h2 font-black leading-tight mb-4 max-w-3xl">
                İlk yapay zeka videonuzu üretelim.
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="text-body opacity-90 mb-8 max-w-2xl font-medium">
                15 dakikalık keşif görüşmesinde markanıza özel sahne önerisi çıkarıyoruz. Kapsam, teslim süresi ve koşullar teklifte yazılı olarak belirtilir.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://wa.me/905318639117"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border-3 border-ink/15 bg-slate px-5 py-3 text-sm font-bold text-white shadow-brutal transition-all rounded-full"
                >
                  <MessageCircle className="h-4 w-4" /> WhatsApp ile Brief At
                </a>
                <Link
                  href="/iletisim"
                  className="inline-flex items-center gap-2 border-3 border-ink/15 bg-paper px-5 py-3 text-sm font-bold text-ink shadow-brutal transition-all rounded-full"
                >
                  İletişim Formu <ArrowUpRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/ai-reklam-videosu/butik"
                  className="inline-flex items-center gap-2 border-3 border-ink/15 bg-paper px-5 py-3 text-sm font-bold text-ink shadow-brutal transition-all rounded-full"
                >
                  Butik Sektörü <ArrowUpRight className="h-4 w-4" />
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
