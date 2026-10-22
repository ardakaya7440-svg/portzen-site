import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowUpRight,
  Video,
  Flame,
  TrendingUp,
  Music,
  Sparkles,
  Play,
  Zap,
  Users,
  Eye,
  MessageCircle,
  CheckCircle2
} from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";
import { PricingSection } from "@/components/pricing/PricingSection";
import { ServiceAtAGlance } from "@/components/visual/ServiceAtAGlance";
import { MoreDetails } from "@/components/visual/MoreDetails";
import { familyPriceSummary } from "@/data/pricing";

export const metadata: Metadata = {
  title: "Sosyal Medya Viral Video | Reels + TikTok Üretim ve Strateji, PORTZEN",
  description:
    "Sosyal medya viral video üretimi: Reels, TikTok ve Shorts formatında hook, edit, sound trend uyumlu içerikler. Algoritma sinyallerine göre kurgulanan formül, aylık paket.",
  keywords: [
    "sosyal medya viral video",
    "viral reels",
    "viral tiktok",
    "reels üretimi",
    "tiktok video yapımı",
    "kısa video ajansı",
    "shorts üretimi",
    "viral video formülü",
    "reels ajansı",
    "hook video"
  ],
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://portzenai.com/sosyal-medya-viral-video",
    siteName: "PORTZEN",
    title: "Sosyal Medya Viral Video | Reels + TikTok Üretim ve Strateji, PORTZEN",
    description:
      "Sosyal medya viral video üretimi: Reels, TikTok ve Shorts formatında hook, edit, sound trend uyumlu içerikler. Algoritma sinyallerine göre kurgulanan formül, aylık paket."
  },
  twitter: {
    card: "summary_large_image",
    title: "Sosyal Medya Viral Video | PORTZEN",
    description:
      "Reels, TikTok ve Shorts formatında algoritma sinyallerine göre kurgulanan viral video formülü. Hook, edit, sound, caption ve yayın stratejisi tek pakette."
  },
  alternates: { canonical: "https://portzenai.com/sosyal-medya-viral-video" },
  robots: { index: true, follow: true }
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Sosyal Medya Viral Video Üretimi",
  serviceType: "Sosyal Medya Viral Video Üretimi",
  provider: {
    "@type": "Organization",
    name: "PORTZEN",
    url: "https://portzenai.com",
    telephone: "+905318639117",
    email: "destek@portzenai.com"
  },
  areaServed: { "@type": "Country", name: "Turkey" },
  description:
    "Sosyal medya viral video üretim hizmeti: Reels, TikTok ve YouTube Shorts formatında hook, edit temposu, sound trend uyumu ve caption stratejisi ile algoritma sinyallerine göre kurgulanan kısa video üretimi. Aylık paket, sürekli üretim ve viral formül danışmanlığı dahil.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Sosyal medya viral video üretiminde viral olma garantisi veriyor musunuz?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hayır. Viral olma veya izlenme garantisi vermiyoruz; algoritma, yayın saati ve gündem sonucu doğrudan etkiler. Pakette teslim edilecek video adedi, süre ve format yazılıdır; Büyüme ve Kurumsal paketlerde senaryo ve hook yazımı dahildir."
      }
    },
    {
      "@type": "Question",
      name: "Yüzümüzü kameraya göstermek zorunda mıyız?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hayır. Faceless (yüzsüz) çalışmak için ürün detay, üstten çekim, ekran kaydı, animasyon, sesli anlatım, altyazı odaklı içerik gibi formatlar kullanıyoruz. Yüz göstermek istemeyen markalar için bu formatlarla çalışıyoruz. Yine de yüz gösteren içerikler genelde daha yüksek engagement alıyor; kararı size bırakıyoruz."
      }
    },
    {
      "@type": "Question",
      name: "Videolar yapay zeka ile mi üretiliyor, gerçek çekim mi yapıyorsunuz?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "İkisi de. Saha çekimi kısa video paketlerine dahil değildir; ihtiyaç olursa ayrıca planlanır. Paket videolarını gönderdiğiniz kısa telefon çekimlerinden ve yapay zeka üretiminden kurguluyoruz. UGC tarzı reklamlarda kurumsal AI video altyapımızın UGC/hızlı render motorlarını kullanıyoruz. Karma model hem doğallığı hem üretim hızını koruyor."
      }
    },
    {
      "@type": "Question",
      name: "Kullandığınız trending sound telif hakkı sorun çıkarır mı?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Instagram ve TikTok'un ticari hesaplar için sunduğu Sound Library'den (lisanslı ticari kullanım) seçim yapıyoruz. Trending ama telifsiz olmayan sesler için orijinal remix veya ses tasarımı üretiyoruz. Ayrıca haftalık olarak müzik kütüphanesindeki lisanslı ticari seçenekleri tarayıp güncel trendlerin ticari sürümlerini kullanıyoruz. Böylece ses kaynaklı kısıtlanma ve sessize alınma riskini en aza indiriyoruz."
      }
    },
    {
      "@type": "Question",
      name: "Marka rengi, logo ve kurumsal kimlik viral videoda kullanılıyor mu?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Evet. Marka rehberinizden hex kod, font ve logo alıyoruz; sonra tüm caption, altyazı, sticker ve intro/outro şablonlarını marka kimliğinize göre hazırlıyoruz. Viral videolarda aşırı kurumsallık engagement'ı düşürdüğü için markayı görünür ama araya sıkışmayacak biçimde konumlandırıyoruz. Örneğin logo sabit köşede değil, videonun sonunda animasyonlu ortaya çıkacak şekilde tasarlanıyor."
      }
    },
    {
      "@type": "Question",
      name: "Ayda kaç farklı hook ve format deneniyor?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Büyüme ve Kurumsal paketlerde senaryo ve hook yazımı dahildir. Farklı açılışları ve içerik kurgularını (Before/After, POV, Reply to comment, Tutorial vb.) dönüşümlü kullanır, performansa göre her ay güncelleriz."
      }
    },
    {
      "@type": "Question",
      name: "Yayın saati ve gün seçimini siz mi yapıyorsunuz?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Evet. Başlangıçta rakip analizi ve hesabınızın Insights verisinden uygun yayın penceresini çıkarıyoruz. Sonrasında haftalık takvim üzerinden Reels ve TikTok yayın saatlerini belirliyor, Meta Business Suite ve TikTok Scheduler ile önceden programlıyoruz. 12:30, 19:00 ve 22:30 gibi aralıklar sık kullanılan başlangıç noktalarıdır; asıl seçim hesabınızın kendi verisine göre yapılır."
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
      name: "Sosyal Medya Viral Video",
      item: "https://portzenai.com/sosyal-medya-viral-video"
    }
  ]
};

const stats = [
  { metric: "Aylık", label: "Pakete göre belirlenen kısa video adedi" },
  { metric: "3sn", label: "Hook penceresi optimizasyonu" },
  { metric: "6+", label: "Format kütüphanesi (haftalık rotasyon)" },
  { metric: "Dikey", label: "Reels, TikTok ve Shorts için kurgu" }
];

const problems = [
  {
    icon: Flame,
    title: "Hook zayıf, izleyici ilk 3 saniyede kaçıyor",
    desc: "Videonun ilk karesi ve ilk cümlesi belirsiz. İzleyici kaydırırken gözü takılmıyor, algoritma da videoyu geri çekiyor. Reels ve TikTok'ta izlenme yüzdesi düşük kalıyor ve video geniş kitleye dağıtılmıyor."
  },
  {
    icon: Music,
    title: "Sound seçimi trend değil veya telifli",
    desc: "Rastgele bir müzik koyuyorsunuz, algoritma sesi tanımıyor. Ya da trend olan sesi kullanıyorsunuz ama telifli olduğu için ses susturuluyor. İki durumda da sesli izlenimden gelen doğal itki yok. Ses kütüphanesi haftalık takip edilmiyor."
  },
  {
    icon: Zap,
    title: "Edit temposu yavaş, dikkat dağılıyor",
    desc: "Videonuz güzel çekilmiş ama tek plan 4-5 saniye tutuyor. TikTok kuşağı için bu ölüm anlamına geliyor. 1.5-2 saniyede bir kesim, hareket, zoom ya da metin değişimi olmalı. Statik edit izlenme sürelerini yarıya düşürüyor."
  },
  {
    icon: MessageCircle,
    title: "Caption satmıyor, sadece açıklama yapıyor",
    desc: "Caption yerine 3-4 kelimelik jenerik başlık atıyorsunuz. Oysa Reels ve TikTok'ta caption ikinci bir hook. Sorulu, iddialı veya listeleyen caption'lar yorum sayısını belirgin şekilde artırıyor. Yorum sinyali algoritma için en güçlü sinyallerden biri."
  },
  {
    icon: TrendingUp,
    title: "Yayın saati sektörünüze uygun değil",
    desc: "Herkesin yayınladığı saatte siz de yayınlıyorsunuz, öne çıkamıyorsunuz. Ya da hesabınızın gerçek takipçi aktif olduğu saatlerde değil, sizin uygun olduğunuz saatte paylaşıyorsunuz. Doğru zamanlama, aynı içeriğin erişimini ciddi biçimde artırabiliyor."
  }
];

const viralFormula = [
  {
    icon: Flame,
    step: "01",
    name: "Hook (0-3sn)",
    desc: "Pattern interrupt: beklenmeyen bir ses, hareket veya cümle. Örneğin siyah ekrandan patlayan renk, ters açıdan yakalanmış an, iddialı bir cümle. Bu 3 saniye ilk 3.000 izlenimi belirler; algoritmanın videoyu daha geniş dağıtıp dağıtmayacağı burada karar verilir."
  },
  {
    icon: Video,
    step: "02",
    name: "Setup (3-5sn)",
    desc: "Problemi veya konuyu net biçimde koyuyoruz. İzleyici artık hook ile durmuş, ne izlediğini anlamak istiyor. Bu 2 saniyede 'Bu video ne hakkında?' sorusunu cevaplıyoruz. Örneğin 'Reels'iniz neden birkaç yüz izlenimde takılıyor?' cümlesi."
  },
  {
    icon: Play,
    step: "03",
    name: "Escalation (5-15sn)",
    desc: "Çözümü, eğlenceyi veya sürprizi sunuyoruz. Kesimler hızlanıyor, altyazı ritmi artıyor, ses yükseliyor. Bu bölüm izleyiciyi videonun sonuna kadar tutmak için tasarlanır. Değer yoğunluğu (value density) yüksek olmalı; her saniyede yeni bir bilgi veya reaksiyon vermeli."
  },
  {
    icon: Sparkles,
    step: "04",
    name: "Payoff (son 2-3sn)",
    desc: "Reaksiyon, tersine dönüş veya CTA. İzleyiciye tekrar izleme veya paylaşma isteği vermeli. Sonu 'Videoyu baştan izle', 'Yorumlarda tarifi paylaştım' veya döngü (loop) yaratacak biçimde kapatıyoruz. Loop, izlenim/oynatma oranını 1.4'ün üstüne çıkarmayı hedefler."
  },
  {
    icon: Music,
    step: "05",
    name: "Sound katmanı",
    desc: "Haftalık trend takibi: hangi ses son 7 günde 100 bin+ kullanım almış, hangisi düşüşe geçmiş takip ediyoruz. Trend sesi videonun beat'ine göre kesiyoruz. Ses hem algoritma sinyali hem de duygu tetikleyicisi. Aynı görsel, doğru ses ile çok daha fazla paylaşılıyor."
  }
];

const formats = [
  {
    icon: Sparkles,
    name: "Before/After (Transformation)",
    desc: "Öncesi kaotik, sonrası düzenli. Restoran tabak yerleşimi, klinik cilt bakım süreci, kuaför saç transformasyonu, mobilya odası dönüşümü. Split-second geçişler ile şok etkisi yaratır. Kaydetme (save) davranışını hedefleyen bir format."
  },
  {
    icon: Users,
    name: "Day in the life (Behind the scenes)",
    desc: "Bir gününüzün 45 saniyelik özeti. Kafe barista sabah rutini, klinik hekim hasta karşılama, butik sahibi sezon planı. Samimi, ham, dokümanter tarzı. Marka güvenini büyütür, takipçiyi 'aile' hissi ile bağlar."
  },
  {
    icon: Zap,
    name: "Common mistakes (Educational)",
    desc: "'Bu 5 hatayı yapıyorsanız X problem yaşıyorsunuz.' Uzmanlık pozisyonu için ideal. Klinik, danışman, ajans, avukat, kuaför sektörleri için birebir. Yorum almaya uygun bir format; her yorum algoritma için bir etkileşim sinyalidir."
  },
  {
    icon: MessageCircle,
    name: "Reply to comment (Engagement)",
    desc: "Önceki bir videonuza gelen yorumu ekran görüntüsü ile videoya taşıyıp cevaplıyorsunuz. Algoritma 'community' sinyali olarak okur, dağıtımı arttırır. Yeni takipçilere de önceki videonuzu tanıtmış olur; iki taraflı kazanç."
  },
  {
    icon: Music,
    name: "Trending audio + niche (Mash-up)",
    desc: "Haftalık trend seslerden birini alıp kendi sektörünüze uyarlıyoruz. Örneğin trend olan komedi sesini kuaför sektörüne 'salon içi anlar' olarak taşımak. Trend sesin sinyalinden yararlanır, üretimi sade tutar."
  },
  {
    icon: Video,
    name: "Product demo + POV (Satış)",
    desc: "İlk kişi ağzından (POV) ürün deneyimi. 'Sizinle kombin seçiyorum', 'Sizinle kahve hazırlıyorum' formatları. Aynı anda hem satış hem eğlence içerik. Butik, kafe, restoran ve e-ticaret markaları için siparişe yönlendirmeye uygun bir format."
  }
];

const aiSupport = [
  {
    icon: Sparkles,
    title: "Script AI ile ilk taslak",
    desc: "Her hook için premium dil modelleri ile 8-12 varyant üretiyoruz. En güçlü olanı seçip insan editörle rafine ediyoruz. Bu, haftalık üretimi ciddi biçimde hızlandırıyor, kalite düşmüyor."
  },
  {
    icon: Music,
    title: "Trending sound algoritması",
    desc: "TrendTok, TokBoard ve Sound Marketplace API'ları ile 7 günlük ses trendini otomatik tarıyoruz. Sektörünüze uygun, telifsiz ticari sürümlerini filtreliyor, haftalık öneri listesi çıkarıyoruz."
  },
  {
    icon: Eye,
    title: "Rakip viral analizi",
    desc: "Rakiplerinizin son 30 gün içindeki en viral 20 videosunu haftalık olarak analiz ediyoruz. Hangi hook, hangi format, hangi ses işe yaramış çıkarıyor, sizin markanıza uyarlıyoruz."
  },
  {
    icon: TrendingUp,
    title: "Optimal yayın saati",
    desc: "Insights verinizden ve rakip yayın saatlerinden AI ile optimal saat penceresi hesaplanıyor. Sektörünüze göre 3 en iyi saat dilimi çıkarıyor, videoları o saatlere programlıyoruz."
  }
];

const sectors = [
  {
    name: "Restoran",
    href: "/ai-reklam-videosu/restoran",
    desc: "Yemek tarifi POV, tabak yerleşim ASMR, açılış hazırlığı, chef reaksiyonu ve trending audio ile tabak transformasyonu. Sipariş tıklama odaklı caption stratejisi."
  },
  {
    name: "Klinik ve Estetik",
    href: "/ai-reklam-videosu/klinik",
    desc: "Hasta öncesi/sonrası transformation (izinli), tedavi süreci timelapse, hekim eğitim videoları, 'yaygın 5 hata' formatı, süreç anlatımı POV."
  },
  {
    name: "Butik ve Moda",
    href: "/ai-reklam-videosu/butik",
    desc: "Kombin transition, yeni sezon drop reveal, 'sizinle kombin seçiyorum' POV, model back-to-back, trending audio üzerine defile kurgusu."
  },
  {
    name: "Kafe",
    href: "/ai-reklam-videosu/kafe",
    desc: "Barista skill (latte art, filtre demleme), kahve hazırlık ASMR, 'gizli menü' formatı, açılış rutini, müşteri reaksiyon compilation."
  },
  {
    name: "Kuaför ve Berber",
    href: "/instagram-dm-otomasyonu/kuafor-berber",
    desc: "Saç transformation before/after, teknik detay yakın plan, 'yaptığımız 5 yaygın hata' eğitim, sakal şekillendirme timelapse, trending audio ile stil değişimi."
  },
  {
    name: "Fitness ve Spor Salonu",
    href: "/instagram-dm-otomasyonu/spor-salonu",
    desc: "Üye transformation (3-6 aylık), egzersiz teknik hatası, PR (personal record) reaksiyonu, sabah rutini POV, salon atmosferi timelapse."
  }
];


const caseStudy = {
  title: "Örnek senaryo: bir kafe için 'latte art transition' Reels",
  metrics: [
    { label: "Hook", value: "Siyah ekrandan latte art" },
    { label: "Format", value: "Transition Reels" },
    { label: "Ses", value: "Lisanslı lo-fi trend audio" },
    { label: "Yayın", value: "Insights verisine göre saat" }
  ],
  narrative:
    "Yeni açılan bir kafe için viral formülün tek bir videoya nasıl uygulandığını gösteren örnek bir kurgu. Hook, siyah ekrandan beliren latte art tepesidir (0-2 sn). Setup, baristanın tekniği nasıl öğrendiğini anlatan kısa bir cümledir (2-5 sn). Escalation bölümünde 3 farklı desen (kalp, yaprak, tulip) hızlı geçişlerle gösterilir (5-13 sn). Payoff, kafenin logosuyla kapanan bir slow-motion andır. Ses olarak lisanslı lo-fi kahve temalı bir trend audio seçilir; yayın saati hesabın Insights verisine göre (örneğin öğle molası) belirlenir. Yayından sonra izlenme süresi, kaydetme ve yorum sinyalleri takip edilir; zayıf kalan bölüm bir sonraki videoda yeniden kurgulanır. Bu bir örnek senaryodur, sonuç taahhüdü değildir."
};

const comparison = [
  {
    kriter: "Aylık harcanan saat",
    self: "Öğrenme + üretim için düzenli zaman",
    portzen: "Brief ve onay için kısa haftalık görüşme"
  },
  {
    kriter: "Edit yumuşaklığı",
    self: "Amatör kesim, 3-5 saniye plan",
    portzen: "1.5-2 sn ritim, senkron kesim"
  },
  {
    kriter: "Trend takibi (sound + format)",
    self: "Rastgele TikTok scroll",
    portzen: "Haftalık AI destekli trend tarama"
  },
  {
    kriter: "Ölçüm ve raporlama",
    self: "Insights'a bakma alışkanlığı yok",
    portzen: "Haftalık performans raporu"
  },
  {
    kriter: "Toplam aylık maliyet",
    self: "Harcanan zaman × iş gücü + kaçırılan fırsat",
    portzen: `Aylık paket: ${familyPriceSummary("kisa-video")} (KDV hariç)`
  }
];

const faqs = [
  {
    q: "Sosyal medya viral video üretiminde viral olma garantisi veriyor musunuz?",
    a: "Hayır. Viral olma veya izlenme garantisi vermiyoruz; algoritma, yayın saati ve gündem sonucu doğrudan etkiler. Pakette teslim edilecek video adedi, süre ve format yazılıdır; Büyüme ve Kurumsal paketlerde senaryo ve hook yazımı dahildir."
  },
  {
    q: "Yüzümüzü kameraya göstermek zorunda mıyız?",
    a: "Hayır. Faceless (yüzsüz) çalışmak için ürün detay, üstten çekim, ekran kaydı, animasyon, sesli anlatım, altyazı odaklı içerik gibi formatlar kullanıyoruz. Yüz göstermek istemeyen markalar için bu formatlarla çalışıyoruz. Yine de yüz gösteren içerikler genelde daha yüksek engagement alıyor; kararı size bırakıyoruz. Yüz göstermek istemeyen sahipler için 'AI avatar üzerinden anlatım' opsiyonu da mevcut."
  },
  {
    q: "Videolar yapay zeka ile mi üretiliyor, gerçek çekim mi yapıyorsunuz?",
    a: "İkisi de. Saha çekimi kısa video paketlerine dahil değildir; ihtiyaç olursa ayrıca planlanır. Paket videolarını gönderdiğiniz kısa telefon çekimlerinden ve yapay zeka üretiminden kurguluyoruz. UGC tarzı reklamlarda kurumsal AI video altyapımızın UGC/hızlı render motorlarını kullanıyoruz. Karma model hem doğallığı hem üretim hızını koruyor. Yapay zeka ile üretim tarafını detaylı görmek için /yapay-zeka-video-uretimi sayfasına bakabilirsiniz."
  },
  {
    q: "Kullandığınız trending sound telif hakkı sorun çıkarır mı?",
    a: "Instagram ve TikTok'un ticari hesaplar için sunduğu Sound Library'den (lisanslı ticari kullanım) seçim yapıyoruz. Trending ama telifsiz olmayan sesler için orijinal remix veya ses tasarımı üretiyoruz. Ayrıca haftalık olarak müzik kütüphanesindeki lisanslı ticari seçenekleri tarayıp güncel trendlerin ticari sürümlerini kullanıyoruz. Böylece ses kaynaklı kısıtlanma ve sessize alınma riskini en aza indiriyoruz."
  },
  {
    q: "Marka rengi, logo ve kurumsal kimlik viral videoda kullanılıyor mu?",
    a: "Evet. Marka rehberinizden hex kod, font ve logo alıyoruz; sonra tüm caption, altyazı, sticker ve intro/outro şablonlarını marka kimliğinize göre hazırlıyoruz. Viral videolarda aşırı kurumsallık engagement'ı düşürdüğü için markayı görünür ama araya sıkışmayacak biçimde konumlandırıyoruz. Örneğin logo sabit köşede değil, videonun sonunda animasyonlu ortaya çıkacak şekilde tasarlanıyor. Amaç, markayı görünür kılarken videonun reklam gibi algılanmasını önlemektir."
  },
  {
    q: "Ayda kaç farklı hook ve format deneniyor?",
    a: "Büyüme ve Kurumsal paketlerde senaryo ve hook yazımı dahildir. Farklı açılışları ve içerik kurgularını (Before/After, POV, Reply to comment, Tutorial vb.) dönüşümlü kullanır, performansa göre her ay güncelleriz."
  },
  {
    q: "Yayın saati ve gün seçimini siz mi yapıyorsunuz?",
    a: "Evet. Başlangıçta rakip analizi ve hesabınızın Insights verisinden uygun yayın penceresini çıkarıyoruz. Sonrasında haftalık takvim üzerinden Reels ve TikTok yayın saatlerini belirliyor, Meta Business Suite ve TikTok Scheduler ile önceden programlıyoruz. 12:30, 19:00 ve 22:30 gibi aralıklar ve hafta ortası günler sık kullanılan başlangıç noktalarıdır; asıl seçim hesabınızın kendi verisine göre yapılır."
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
              <span className="text-ink">Sosyal Medya Viral Video</span>
            </nav>
          </Reveal>

          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 items-start">
            <div>
              <Reveal>
                <div className="inline-flex items-center gap-2 border-3 border-ink/15 bg-slate text-white px-3 py-1.5 shadow-brutal-sm mb-6 rounded-full">
                  <Flame className="h-4 w-4" />
                  <span className="text-xs font-black uppercase tracking-wider">Viral Video Stüdyosu</span>
                </div>
              </Reveal>
              <Reveal delay={100}>
                <h1 className="font-display text-h1 font-black leading-tight max-w-4xl text-ink">
                  Sosyal Medya Viral Video Üretimi
                </h1>
              </Reveal>
              <Reveal delay={150}>
                <p className="mt-4 text-xl font-bold text-ink/70 max-w-3xl">
                  Reels + TikTok formatında algoritma sinyallerine göre kurgulanan formül.
                </p>
              </Reveal>
              <Reveal delay={200}>
                <p className="mt-6 max-w-prose text-body text-ink/80 font-medium">
                  Sosyal medya viral video üretimi; Reels, TikTok ve YouTube Shorts formatında algoritmanın sevdiği hook, edit temposu, trending sound ve caption formülü ile kısa video üretmektir. PORTZEN, işletmeler için haftalık ölçekte viral olma odaklı içerik üretir. İlk 3 saniyeyi hook ile kurgular, sesi trend ve lisans durumuna göre seçer, kesim ritmini kurar ve yayını hesabınızın verisine göre planlar. Ayda 4, 12 veya 24 videoluk aylık paketlerle Türkiye genelinde uzaktan çalışırız.
                </p>
              </Reveal>
              <Reveal delay={300}>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="/iletisim"
                    className="inline-flex items-center gap-2 border-3 border-ink/15 bg-slate px-5 py-3 text-sm font-bold text-white shadow-brutal transition-all rounded-full"
                  >
                    Ücretsiz Hook Analizi İste <ArrowUpRight className="h-4 w-4" />
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

      <ServiceAtAGlance href="/sosyal-medya-viral-video" />

      <MoreDetails title="Ayrıntılar: Videolar neden yayılmıyor?" summary="En sık gördüğümüz 5 sorun">
      {/* 2. WHY NOT VIRAL */}
      <section className="bg-white text-ink py-section">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-12 max-w-3xl">
              <div className="inline-block border-3 border-ink/10 bg-slate text-white px-3 py-1 text-xs font-black tracking-wider mb-4 rounded-full">
                Sorun tespiti
              </div>
              <h2 className="font-display text-h2 font-black leading-tight">
                Neden hala viral olamıyorsunuz?
              </h2>
              <p className="mt-4 text-body opacity-85 max-w-prose">
                İyi bir ürününüz, doğru bir hedef kitleniz ve düzenli içeriğiniz var ama Reels ve TikTok videolarınız 500-2.000 izlenimde takılıyor. Sebep kalite değil, algoritmanın beklediği 5 sinyali karşılamamanız. Aşağıda en sık gördüğümüz 5 problem var. Bu 5 nokta düzeltildiğinde algoritmanın videoyu geniş kitleye dağıtma şansı belirgin şekilde artıyor.
              </p>
            </div>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {problems.map((p, i) => {
              const Icon = p.icon;
              return (
                <Reveal key={i} delay={i * 80}>
                  <div className="border-3 border-ink/10 bg-light p-6 h-full rounded-2xl">
                    <Icon className="h-7 w-7 text-ink mb-4" />
                    <h3 className="font-display text-lg font-black mb-3">{p.title}</h3>
                    <p className="text-sm opacity-85 leading-relaxed">{p.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={400}>
            <div className="mt-10 border-3 border-ink/10 bg-light p-6 rounded-2xl">
              <p className="text-sm opacity-90 leading-relaxed">
                <strong>Not:</strong> Bu 5 problem sadece bireysel işletmelerde değil, kurumsal hesaplarda da yaygın. Kurumsal kimlik korkusu ve karar zinciri yavaşlığı, viral video için gereken hızlı reaksiyonu engelliyor. Kapsamlı içerik yönetimi için <Link href="/sosyal-medya-yonetimi" className="underline font-bold">sosyal medya yönetimi</Link> hizmetimiz haftalık takvim ve topluluk yönetimi ile birlikte çalışıyor. Kurumsal ajans desteği için <Link href="/sosyal-medya-ajansi" className="underline font-bold">sosyal medya ajansı</Link> sayfasına bakabilirsiniz.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      </MoreDetails>
      {/* 3. VIRAL FORMULA */}
      <section className="bg-white py-section">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-12 max-w-3xl">
              <div className="inline-block border-3 border-ink/15 bg-slate text-white px-3 py-1 text-xs font-black tracking-wider mb-4 shadow-brutal-sm rounded-full">
                Viral formül
              </div>
              <h2 className="font-display text-h2 font-black leading-tight text-ink">
                PORTZEN viral video formülü: 5 element
              </h2>
              <p className="mt-4 text-body text-ink/70 max-w-prose">
                Viral olma tesadüf değildir; ölçülebilir bir formüle dayanır. Her elementin görevi net, süresi net, ölçüm sinyali net. Aşağıda 5 elementli formülümüzü açıklıyoruz. Bu formül her videoda storyboard aşamasından itibaren uygulanan, sinyalleri tanımlı bir çerçevedir.
              </p>
            </div>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {viralFormula.map((v, i) => {
              const Icon = v.icon;
              return (
                <Reveal key={i} delay={i * 80}>
                  <div className="border-3 border-ink/15 bg-paper p-6 shadow-brutal hover:shadow-brutal-lg transition-all h-full rounded-2xl">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 border-3 border-ink/15 bg-lime shadow-brutal-sm rounded-full">
                        <Icon className="h-5 w-5 text-ink" />
                      </div>
                      <div className="font-display text-3xl font-black text-ink/20">{v.step}</div>
                    </div>
                    <h3 className="font-display text-xl font-black mb-3 text-ink">{v.name}</h3>
                    <p className="text-sm text-ink/70 leading-relaxed">{v.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. FORMAT LIBRARY */}
      <section className="bg-white py-section border-t-3 border-ink/10">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-12 max-w-3xl">
              <div className="inline-block border-3 border-ink/15 bg-slate text-white px-3 py-1 text-xs font-black tracking-wider mb-4 shadow-brutal-sm rounded-full">
                Format kütüphanesi
              </div>
              <h2 className="font-display text-h2 font-black leading-tight text-ink">
                6 temel format
              </h2>
              <p className="mt-4 text-body text-ink/70 max-w-prose">
                Her sektör için çalışan format farklıdır. Aşağıdaki 6 format PORTZEN&apos;in üretimde en sık kullandığı çerçevelerdir. Aylık pakette bu 6 format arasından, paketinizdeki format sayısına göre sektörünüze en uygun olanları seçip rotasyonda uyguluyoruz.
              </p>
            </div>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {formats.map((f, i) => {
              const Icon = f.icon;
              return (
                <Reveal key={i} delay={i * 60}>
                  <div className="border-3 border-ink/15 bg-paper p-6 shadow-brutal hover:shadow-brutal-lg transition-all h-full rounded-2xl">
                    <Icon className="h-7 w-7 text-ink mb-4" />
                    <h3 className="font-display text-lg font-black mb-2 text-ink">{f.name}</h3>
                    <p className="text-sm text-ink/70 leading-relaxed">{f.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={400}>
            <div className="mt-10 border-3 border-ink/15 bg-light p-6 shadow-brutal flex items-center justify-between flex-wrap gap-4 rounded-2xl">
              <div>
                <div className="font-display text-lg font-black mb-1 text-ink">Kardeş hizmet: AI reklam videosu</div>
                <p className="text-sm text-ink/80">
                  Performans reklam kanalları için A/B testine uygun, dönüşüm odaklı video üretimi arıyorsanız kardeş sayfamıza bakabilirsiniz.
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

      <MoreDetails title="Ayrıntılar: AI destek katmanı" summary="Script, ses trendi, rakip analizi ve yayın saati">
      {/* 6. AI SUPPORT */}
      <section className="bg-white py-section">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-12 max-w-3xl">
              <div className="inline-block border-3 border-ink/15 bg-slate text-white px-3 py-1 text-xs font-black tracking-wider mb-4 shadow-brutal-sm rounded-full">
                AI destek katmanı
              </div>
              <h2 className="font-display text-h2 font-black leading-tight text-ink">
                Yapay zeka viral formülü hızlandırır
              </h2>
              <p className="mt-4 text-body text-ink/70 max-w-prose">
                Viral video üretimi sadece kreatif değil, veri işidir. Trend takibi, rakip analizi, hook varyantı ve yayın saati; AI destekli araçlar olmadan haftalık ölçekte sürdürülemez. PORTZEN&apos;in AI katmanı üretim hızını artırıyor, ölçümü tahmine değil veriye dayandırıyor. Detaylı üretim tarafını <Link href="/yapay-zeka-video-uretimi" className="underline font-bold">yapay zeka video üretimi</Link> sayfasında görebilirsiniz.
              </p>
            </div>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2">
            {aiSupport.map((a, i) => {
              const Icon = a.icon;
              return (
                <Reveal key={i} delay={i * 80}>
                  <div className="border-3 border-ink/15 bg-paper p-6 shadow-brutal hover:shadow-brutal-lg transition-all h-full rounded-2xl">
                    <div className="inline-flex items-center justify-center w-12 h-12 border-3 border-ink/15 bg-slate text-white shadow-brutal-sm mb-4 rounded-full">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-display text-lg font-black mb-2 text-ink">{a.title}</h3>
                    <p className="text-sm text-ink/70 leading-relaxed">{a.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      </MoreDetails>
      {/* 7. SECTORS */}
      <section className="bg-white py-section border-t-3 border-ink/10">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-12 max-w-3xl">
              <div className="inline-block border-3 border-ink/15 bg-slate text-white px-3 py-1 text-xs font-black tracking-wider mb-4 shadow-brutal-sm rounded-full">
                Sektörel örnekler
              </div>
              <h2 className="font-display text-h2 font-black leading-tight text-ink">
                6 sektörde uyguladığımız viral formatlar
              </h2>
              <p className="mt-4 text-body text-ink/70 max-w-prose">
                Her sektörün viral olma dili farklıdır. Bir kafeyi viral yapan format bir kliniği viral yapmaz. Aşağıdaki 6 sektör için özel içerik pillar&apos;ları, hook örnekleri ve trending audio setleri ile çalışıyoruz. Detay için sektörel sayfalarımıza göz atabilirsiniz.
              </p>
            </div>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {sectors.map((sector, i) => (
              <Reveal key={i} delay={i * 60}>
                <Link
                  href={sector.href}
                  className="block border-3 border-ink/15 bg-paper p-6 shadow-brutal hover:shadow-brutal-lg transition-all h-full group rounded-2xl"
                >
                  <Flame className="h-7 w-7 text-ink mb-4" />
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

      {/* FİYATLAR — kaynak: src/data/pricing.ts */}

      <PricingSection family="kisa-video" heading="Kısa video üretimi fiyatları" />


      {/* 9. CASE STUDY */}
      <section className="bg-white text-ink py-section">
        <div className="mx-auto max-w-container px-6">
          <div className="grid lg:grid-cols-[1.4fr_1fr] gap-10 items-start">
            <div>
              <Reveal>
                <div className="inline-block border-3 border-ink/15 bg-slate text-white px-3 py-1 text-xs font-black tracking-wider mb-4 shadow-brutal-sm rounded-full">
                  Örnek senaryo
                </div>
              </Reveal>
              <Reveal delay={100}>
                <h2 className="font-display text-h2 font-black leading-tight">
                  {caseStudy.title}
                </h2>
              </Reveal>
              <Reveal delay={200}>
                <p className="mt-4 text-body opacity-90 max-w-prose">
                  {caseStudy.narrative}
                </p>
              </Reveal>
              <Reveal delay={300}>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href="/blog/reels-yapay-zeka-ile-uretim"
                    className="inline-flex items-center gap-2 border-3 border-ink/15 bg-paper text-ink px-4 py-2 text-xs font-bold shadow-brutal transition-all rounded-full"
                  >
                    Reels Üretim Rehberi <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                  <Link
                    href="/blog/konya-mobilya-instagram-reels"
                    className="inline-flex items-center gap-2 border-3 border-ink/15 bg-paper text-ink px-4 py-2 text-xs font-bold shadow-brutal transition-all rounded-full"
                  >
                    Mobilya Reels İncelemesi <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </Reveal>
            </div>
            <Reveal delay={200}>
              <div className="border-3 border-ink/15 bg-paper text-ink p-6 shadow-brutal rounded-2xl">
                <div className="font-display text-xl font-black mb-4">Kurgu özeti</div>
                <ul className="space-y-4">
                  {caseStudy.metrics.map((m, i) => (
                    <li key={i} className="border-b-3 border-ink/10 pb-3 last:border-0 last:pb-0">
                      <div className="text-xs font-bold uppercase text-ink/60 mb-1">{m.label}</div>
                      <div className="font-display text-2xl font-black text-ink">{m.value}</div>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <MoreDetails title="Ayrıntılar: Kendiniz çekmek mi, PORTZEN mi?" summary="Beş kriterde karşılaştırma">
      {/* 10. COMPARISON */}
      <section className="bg-white py-section">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-10 max-w-3xl">
              <div className="inline-block border-3 border-ink/15 bg-slate text-white px-3 py-1 text-xs font-black tracking-wider mb-4 shadow-brutal-sm rounded-full">
                Karşılaştırma
              </div>
              <h2 className="font-display text-h2 font-black leading-tight text-ink">
                Kendi kendinize çekmek vs PORTZEN ile üretmek
              </h2>
              <p className="mt-4 text-body text-ink/70 max-w-prose">
                Sosyal medya viral video üretimini işletme sahibi olarak kendiniz yapmakla, uzman ekiple çıkarmak arasındaki farkı 5 kriterde karşılaştırıyoruz. Bu tablo genel bir karşılaştırmadır; ayrılan süre işletmeden işletmeye değişir.
              </p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="border-3 border-ink/15 shadow-brutal overflow-x-auto rounded-2xl">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-light text-ink">
                    <th className="border-3 border-ink/15 p-4 text-left font-display text-base font-black uppercase rounded-2xl">Kriter</th>
                    <th className="border-3 border-ink/15 p-4 text-left font-display text-base font-black uppercase rounded-2xl">Kendiniz Çekmek</th>
                    <th className="border-3 border-ink/15 p-4 text-left font-display text-base font-black uppercase bg-light text-ink rounded-2xl">PORTZEN ile Üretim</th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((row, i) => (
                    <tr key={i} className={cn(i % 2 === 0 ? "bg-paper" : "bg-light")}>
                      <td className="border-3 border-ink/15 p-4 font-bold text-ink rounded-2xl">{row.kriter}</td>
                      <td className="border-3 border-ink/15 p-4 text-ink/80 rounded-2xl">{row.self}</td>
                      <td className="border-3 border-ink/15 p-4 text-ink font-bold bg-light rounded-2xl">{row.portzen}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
          <Reveal delay={300}>
            <p className="mt-6 text-sm text-ink/60 max-w-3xl">
              <strong>Not:</strong> Sosyal medyaya öğrenme, tasarım, çekim ve yayın için ayrılan süre birçok işletme sahibi için her hafta birkaç saati bulur. Bu süreyi ana işinize ayırabilmek, paket maliyetini değerlendirirken hesaba katılması gereken bir kalemdir. Detaylı hesap için <Link href="/iletisim" className="underline font-bold">iletişim formunu</Link> kullanabilirsiniz.
            </p>
          </Reveal>
        </div>
      </section>

      </MoreDetails>
      {/* 11. FAQ */}
      <section className="bg-white text-ink py-section">
        <div className="mx-auto max-w-container px-6 max-w-4xl">
          <Reveal>
            <div className="mb-12">
              <div className="inline-block border-3 border-ink/10 bg-slate text-white px-3 py-1 text-xs font-black tracking-wider mb-4 rounded-full">
                Sıkça Sorulan Sorular
              </div>
              <h2 className="font-display text-h2 font-black leading-tight">
                Sosyal medya viral video üretimi hakkında merak edilenler
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
                <div className="font-display text-base font-black mb-2">Blog: Instagram Reels algoritması 2026</div>
                <p className="text-sm opacity-85 mb-3">
                  Reels algoritmasının 2026 güncellemeleri: yeni sinyaller, izlenme süresi ağırlığı, tekrar izleme sinyali.
                </p>
                <Link
                  href="/blog/instagram-reels-algoritmasi-2026"
                  className="inline-flex items-center gap-1 text-xs font-bold uppercase text-ink hover:gap-2 transition-all"
                >
                  Algoritmayı Anla <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
              <div className="border-3 border-ink/10 bg-light p-5 rounded-2xl">
                <div className="font-display text-base font-black mb-2">Blog: TikTok vs Instagram Reels</div>
                <p className="text-sm opacity-85 mb-3">
                  KOBİ&apos;ler için hangi platform öncelikli? Yayın algoritması, kitle davranışı ve dönüşüm karşılaştırması.
                </p>
                <Link
                  href="/blog/tiktok-vs-instagram-reels-kobi"
                  className="inline-flex items-center gap-1 text-xs font-bold uppercase text-ink hover:gap-2 transition-all"
                >
                  Karşılaştırmayı Oku <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
              <div className="border-3 border-ink/10 bg-light p-5 rounded-2xl">
                <div className="font-display text-base font-black mb-2">Blog: TikTok marka sayfası açma</div>
                <p className="text-sm opacity-85 mb-3">
                  TikTok Business Account nasıl kurulur, ilk 30 gün stratejisi, ölçümleme kurulumu ve reklam entegrasyonu.
                </p>
                <Link
                  href="/blog/tiktok-marka-sayfasi-acma"
                  className="inline-flex items-center gap-1 text-xs font-bold uppercase text-ink hover:gap-2 transition-all"
                >
                  Rehberi Oku <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
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
            </div>
          </Reveal>
        </div>
      </section>

      {/* 12. FINAL CTA */}
      <section className="py-section">
        <div className="mx-auto max-w-container px-6">
          <div className="border-3 border-ink/15 bg-light p-8 md:p-14 shadow-brutal-lg text-ink rounded-2xl">
            <Reveal>
              <h2 className="font-display text-h2 font-black leading-tight mb-4 max-w-3xl">
                İlk videonuzu birlikte kurgulayalım.
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="text-body opacity-90 mb-8 max-w-2xl font-medium">
                20 dakikalık ücretsiz hook analizi ile mevcut hesabınızın son 10 videosunu inceliyor, viral formüle uyarlanmış 3 yeni konsept öneriyoruz. Beğenirseniz aylık pakete geçiyoruz; sözleşme süresi ve fesih koşulları teklifte yazılı olarak belirtilir.
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
                  <MessageCircle className="h-4 w-4" /> WhatsApp ile Hook Analizi Al
                </a>
                <Link
                  href="/iletisim"
                  className="inline-flex items-center gap-2 border-3 border-ink/15 bg-paper px-5 py-3 text-sm font-bold text-ink shadow-brutal transition-all rounded-full"
                >
                  İletişim Formu <ArrowUpRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/yapay-zeka-video-uretimi"
                  className="inline-flex items-center gap-2 border-3 border-ink/15 bg-paper px-5 py-3 text-sm font-bold text-ink shadow-brutal transition-all rounded-full"
                >
                  Yapay Zeka Video Üretimi <ArrowUpRight className="h-4 w-4" />
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
