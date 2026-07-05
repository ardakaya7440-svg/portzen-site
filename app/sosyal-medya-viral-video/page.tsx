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

export const metadata: Metadata = {
  title: "Sosyal Medya Viral Video | Reels + TikTok Üretim ve Strateji, PORTZEN",
  description:
    "Sosyal medya viral video üretimi: Reels, TikTok ve Shorts formatında hook, edit, sound trend uyumlu içerikler. Algoritmayı kazanan formül, aylık paket.",
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
      "Sosyal medya viral video üretimi: Reels, TikTok ve Shorts formatında hook, edit, sound trend uyumlu içerikler. Algoritmayı kazanan formül, aylık paket."
  },
  twitter: {
    card: "summary_large_image",
    title: "Sosyal Medya Viral Video | PORTZEN",
    description:
      "Reels, TikTok ve Shorts formatında algoritmayı kazanan viral video formülü. Hook, edit, sound, caption ve yayın stratejisi tek pakette."
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
    telephone: "+905015884853",
    email: "destek@portzenai.com"
  },
  areaServed: { "@type": "Country", name: "Turkey" },
  description:
    "Sosyal medya viral video üretim hizmeti: Reels, TikTok ve YouTube Shorts formatında hook, edit temposu, sound trend uyumu ve caption stratejisi ile algoritmayı kazanan kısa video üretimi. Aylık paket, sürekli üretim ve viral formül danışmanlığı dahil.",
  offers: {
    "@type": "Offer",
    priceCurrency: "TRY",
    priceRange: "₺6.500-₺32.000/ay",
    availability: "https://schema.org/InStock"
  }
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
        text: "Tek bir video için mutlak viral garantisi kimse veremez; algoritma, saat, dış gündem ve rakip içerikler etkilidir. Ama Kurumsal pakette 90 gün içinde en az 1 videonun 250 bin izlenimi geçmesini taahhüt ediyoruz, aksi halde bir sonraki ay ücretsiz. Başlangıç ve Büyüme paketlerinde ise viral olasılığı yükseltmek için hook, edit, sound ve yayın saatinde kanıtlanmış formülleri uyguluyoruz."
      }
    },
    {
      "@type": "Question",
      name: "Yüzümüzü kameraya göstermek zorunda mıyız?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hayır. Faceless (yüzsüz) formatlar için ürün detay, üstten çekim, ekran kaydı, animasyon, sesli anlatım, altyazı odaklı içerik gibi 20+ format kütüphanemiz var. Yüz göstermek istemeyen markalar için özel bir alt paket sunuyoruz. Yine de yüz gösteren içerikler genelde daha yüksek engagement alıyor; kararı size bırakıyoruz."
      }
    },
    {
      "@type": "Question",
      name: "Videolar yapay zeka ile mi üretiliyor, gerçek çekim mi yapıyorsunuz?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "İkisi de. Restoran, kafe, klinik, kuaför gibi mekan içerikleri için aylık 1 kez saha çekim ekibi gönderiyoruz, kalan içerikleri gönderdiğiniz kısa telefon çekimlerinden ve yapay zeka üretiminden montajlıyoruz. UGC tarzı reklamlarda Higgsfield Marketing Studio ve Kling 3.0 kullanıyoruz. Karma model hem doğallığı hem üretim hızını koruyor."
      }
    },
    {
      "@type": "Question",
      name: "Kullandığınız trending sound telif hakkı sorun çıkarır mı?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Instagram ve TikTok'un ticari hesaplar için sunduğu Sound Library'den (lisanslı ticari kullanım) seçim yapıyoruz. Trending ama telifsiz olmayan sesler için orijinal remix veya ses tasarımı üretiyoruz. Ayrıca haftalık olarak müzik kütüphanesindeki lisanslı ticari seçenekleri tarayıp güncel trendlerin ticari sürümlerini kullanıyoruz. Böylece hesabınız hiç kısıtlanmaz."
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
        text: "Aylık paketlerimizde en az 5 farklı hook (ilk 3 saniye açılışı) ve en az 4 farklı format (Before/After, POV, Reply to comment, Tutorial, vs.) test ediyoruz. İlk 30 gün veri toplama ayı, ikinci 30 gün formül optimizasyonu, üçüncü 30 gün ölçekleme aşamasıdır. Hangi hook ve formatın sizin markanız için işe yaradığını haftalık raporda görebiliyorsunuz."
      }
    },
    {
      "@type": "Question",
      name: "Yayın saati ve gün seçimini siz mi yapıyorsunuz?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Evet. İlk 2 hafta rakip analizi ve hesabınızın Insights verisinden optimal yayın penceresini çıkarıyoruz. Sonrasında haftalık takvim üzerinden Reels ve TikTok yayın saatlerini belirliyor, Meta Business Suite ve TikTok Scheduler ile önceden programlıyoruz. Genel olarak Türkiye kitlesi için 12:30, 19:00 ve 22:30 aralıkları en iyi çalışır; ancak sektörünüze göre değişebilir."
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
  { metric: "8-40", label: "Aylık kısa video üretimi" },
  { metric: "3sn", label: "Hook penceresi optimizasyonu" },
  { metric: "6+", label: "Format kütüphanesi (haftalık rotasyon)" },
  { metric: "%12", label: "Engagement rate (Bornova kafe vakası)" }
];

const problems = [
  {
    icon: Flame,
    title: "Hook zayıf, izleyici ilk 3 saniyede kaçıyor",
    desc: "Videonun ilk karesi ve ilk cümlesi belirsiz. İzleyici kaydırırken gözü takılmıyor, algoritma da videoyu geri çekiyor. Reels ve TikTok'ta izlenme yüzdesi %30'un altında kalıyor. Bu videoların viral olma ihtimali sıfır."
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
    desc: "Problemi veya konuyu net biçimde koyuyoruz. İzleyici artık hook ile durmuş, ne izlediğini anlamak istiyor. Bu 2 saniyede 'Bu video ne hakkında?' sorusunu cevaplıyoruz. Örneğin 'Instagram takipçilerinizi 3 haftada nasıl 4 katına çıkarırsınız' cümlesi."
  },
  {
    icon: Play,
    step: "03",
    name: "Escalation (5-15sn)",
    desc: "Çözümü, eğlenceyi veya sürprizi sunuyoruz. Kesimler hızlanıyor, altyazı ritmi artıyor, ses yükseliyor. Bu bölüm izlenme yüzdesini %70'in üstüne çıkarmak için tasarlanır. Değer yoğunluğu (value density) yüksek olmalı; her saniyede yeni bir bilgi veya reaksiyon vermeli."
  },
  {
    icon: Sparkles,
    step: "04",
    name: "Payoff (son 2-3sn)",
    desc: "Reaksiyon, tersine dönüş veya CTA. İzleyiciye tekrar izleme veya paylaşma isteği vermeli. Sonu 'Videoyu baştan izle', 'Yorumlarda tarifi paylaştım' veya döngü (loop) yaratacak biçimde kapatıyoruz. Loop, izlenim/oynatma oranını 1.4'ün üstüne çıkarır."
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
    desc: "Öncesi kaotik, sonrası düzenli. Restoran tabak yerleşimi, klinik cilt bakım süreci, kuaför saç transformasyonu, mobilya odası dönüşümü. Split-second geçişler ile şok etkisi yaratır. Reels'te en yüksek save (kaydetme) oranını üreten format."
  },
  {
    icon: Users,
    name: "Day in the life (Behind the scenes)",
    desc: "Bir gününüzün 45 saniyelik özeti. Kafe barista sabah rutini, klinik hekim hasta karşılama, butik sahibi sezon planı. Samimi, ham, dokümanter tarzı. Marka güvenini büyütür, takipçiyi 'aile' hissi ile bağlar."
  },
  {
    icon: Zap,
    name: "Common mistakes (Educational)",
    desc: "'Bu 5 hatayı yapıyorsanız X problem yaşıyorsunuz.' Uzmanlık pozisyonu için ideal. Klinik, danışman, ajans, avukat, kuaför sektörleri için birebir. Yorum sayısını en çok patlatan format; her yorum algoritma için oy demek."
  },
  {
    icon: MessageCircle,
    name: "Reply to comment (Engagement)",
    desc: "Önceki bir videonuza gelen yorumu ekran görüntüsü ile videoya taşıyıp cevaplıyorsunuz. Algoritma 'community' sinyali olarak okur, dağıtımı arttırır. Yeni takipçilere de önceki videonuzu tanıtmış olur; iki taraflı kazanç."
  },
  {
    icon: Music,
    name: "Trending audio + niche (Mash-up)",
    desc: "Haftalık trend seslerden birini alıp kendi sektörünüze uyarlıyoruz. Örneğin trend olan komedi sesini kuaför sektörüne 'salon içi anlar' olarak taşımak. Algoritmik dağıtım maksimum, üretim maliyeti minimum. En hızlı viral yolu."
  },
  {
    icon: Video,
    name: "Product demo + POV (Satış)",
    desc: "İlk kişi ağzından (POV) ürün deneyimi. 'Sizinle kombin seçiyorum', 'Sizinle kahve hazırlıyorum' formatları. Aynı anda hem satış hem eğlence içerik. Butik, kafe, restoran ve e-ticaret markaları için sipariş yönlendirme oranı en yüksek format."
  }
];

const aiSupport = [
  {
    icon: Sparkles,
    title: "Script AI ile ilk taslak",
    desc: "Her hook için Claude ve GPT ile 8-12 varyant üretiyoruz. En güçlü olanı seçip insan editörle rafine ediyoruz. Bu, haftalık üretimi ciddi biçimde hızlandırıyor, kalite düşmüyor."
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

const packages = [
  {
    name: "Başlangıç",
    price: "6.500 ₺",
    period: "/ay",
    duration: "8 video/ay",
    color: "bg-paper",
    features: [
      "8 kısa video (Reels veya TikTok)",
      "1 platform (Reels ya da TikTok)",
      "Aylık 1 saha çekim günü",
      "Trending sound seçimi",
      "Caption + hashtag stratejisi",
      "Haftalık storyboard onayı",
      "Aylık performans raporu"
    ],
    cta: "Başlangıç Paketi Al"
  },
  {
    name: "Büyüme",
    price: "15.000 ₺",
    period: "/ay",
    duration: "20 video/ay",
    color: "bg-brand-yellow",
    badge: "En Popüler",
    features: [
      "20 kısa video/ay",
      "3 platform (Reels + TikTok + Shorts)",
      "Aylık 2 saha çekim günü",
      "Hook danışmanlığı seansı",
      "Rakip viral analizi",
      "AI script + trending sound otomasyonu",
      "Haftalık performans raporu",
      "3 formatta render (9:16, 1:1, 16:9)"
    ],
    cta: "Büyüme Paketini Konuş"
  },
  {
    name: "Kurumsal",
    price: "32.000+ ₺",
    period: "/ay",
    duration: "40+ video/ay",
    color: "bg-paper",
    features: [
      "40+ kısa video/ay",
      "Sınırsız platform ve format",
      "Sınırsız edit revizyon",
      "Adanmış içerik yöneticisi",
      "Viral garantili strateji (90 gün, 250K+ izlenim)",
      "Aylık 4 saha çekim günü",
      "AI destekli trend takip sistemi",
      "Aylık kreatif strateji toplantısı"
    ],
    cta: "Kurumsal Görüşme Aç"
  }
];

const caseStudy = {
  title: "Bornova bir kafe için 'kahve latte art transition' Reels",
  metrics: [
    { label: "Toplam izlenim", value: "850.000" },
    { label: "Engagement rate", value: "%12" },
    { label: "Takipçi artışı (3 hafta)", value: "4.200 → 18.500" },
    { label: "Aylık ciro artışı", value: "%68" }
  ],
  narrative:
    "Bornova'da açılan yeni bir kafe için 3 haftalık viral kampanya kurguladık. Hook, siyah ekrandan patlayan latte art tepesiydi (0-2sn). Setup, barista'nın 'Bu tekniği 8 ayda öğrendim' cümlesiydi (2-5sn). Escalation bölümünde 3 farklı desen (kalp, yaprak, tulip) hızlı geçişlerle gösterildi (5-13sn). Payoff, kafenin logosu ile birlikte kapanan bir slow-motion an oldu. Trending audio olarak lo-fi kahve teması seçildi. Yayın saati 12:30 (öğle molası) olarak belirlendi. İlk 6 saatte 40 bin izlenim, 24 saatte 300 bin izlenim, 5 gün sonunda 850 bin izlenime ulaştı. 3 hafta içinde takipçi 4.200'den 18.500'e çıktı, kafenin haftalık sipariş sayısı 2.3 kata yükseldi, aylık ciro %68 arttı. Bu vaka PORTZEN'in viral formülünün somut karşılığıdır."
};

const comparison = [
  {
    kriter: "Aylık harcanan saat",
    self: "40-60 saat (öğrenme + üretim)",
    portzen: "0 saat (brief hariç 30 dk/hafta)"
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
    self: "40 saat × iş gücü + kaçırılan fırsat",
    portzen: "6.500 - 32.000 ₺ arası şeffaf paket"
  }
];

const faqs = [
  {
    q: "Sosyal medya viral video üretiminde viral olma garantisi veriyor musunuz?",
    a: "Tek bir video için mutlak viral garantisi kimse veremez; algoritma, saat, dış gündem ve rakip içerikler etkilidir. Ama Kurumsal pakette 90 gün içinde en az 1 videonun 250 bin izlenimi geçmesini taahhüt ediyoruz, aksi halde bir sonraki ay ücretsiz. Başlangıç ve Büyüme paketlerinde ise viral olasılığı yükseltmek için hook, edit, sound ve yayın saatinde aynı formül disiplinini uyguluyor, sonuçları haftalık raporda şeffaf paylaşıyoruz."
  },
  {
    q: "Yüzümüzü kameraya göstermek zorunda mıyız?",
    a: "Hayır. Faceless (yüzsüz) formatlar için ürün detay, üstten çekim, ekran kaydı, animasyon, sesli anlatım, altyazı odaklı içerik gibi 20+ format kütüphanemiz var. Yüz göstermek istemeyen markalar için özel bir alt paket sunuyoruz. Yine de yüz gösteren içerikler genelde daha yüksek engagement alıyor; kararı size bırakıyoruz. Yüz göstermek istemeyen sahipler için 'AI avatar üzerinden anlatım' opsiyonu da mevcut."
  },
  {
    q: "Videolar yapay zeka ile mi üretiliyor, gerçek çekim mi yapıyorsunuz?",
    a: "İkisi de. Restoran, kafe, klinik, kuaför gibi mekan içerikleri için aylık 1 kez saha çekim ekibi gönderiyoruz, kalan içerikleri gönderdiğiniz kısa telefon çekimlerinden ve yapay zeka üretiminden montajlıyoruz. UGC tarzı reklamlarda Higgsfield Marketing Studio ve Kling 3.0 kullanıyoruz. Karma model hem doğallığı hem üretim hızını koruyor. Yapay zeka ile üretim tarafını detaylı görmek için /yapay-zeka-video-uretimi sayfasına bakabilirsiniz."
  },
  {
    q: "Kullandığınız trending sound telif hakkı sorun çıkarır mı?",
    a: "Instagram ve TikTok'un ticari hesaplar için sunduğu Sound Library'den (lisanslı ticari kullanım) seçim yapıyoruz. Trending ama telifsiz olmayan sesler için orijinal remix veya ses tasarımı üretiyoruz. Ayrıca haftalık olarak müzik kütüphanesindeki lisanslı ticari seçenekleri tarayıp güncel trendlerin ticari sürümlerini kullanıyoruz. Böylece hesabınız hiç kısıtlanmaz, sesler videodan hiç silinmez."
  },
  {
    q: "Marka rengi, logo ve kurumsal kimlik viral videoda kullanılıyor mu?",
    a: "Evet. Marka rehberinizden hex kod, font ve logo alıyoruz; sonra tüm caption, altyazı, sticker ve intro/outro şablonlarını marka kimliğinize göre hazırlıyoruz. Viral videolarda aşırı kurumsallık engagement'ı düşürdüğü için markayı görünür ama araya sıkışmayacak biçimde konumlandırıyoruz. Örneğin logo sabit köşede değil, videonun sonunda animasyonlu ortaya çıkacak şekilde tasarlanıyor. Böylece hem marka bilinirliği artar hem de algoritma videoyu 'reklam' etiketiyle bastırmaz."
  },
  {
    q: "Ayda kaç farklı hook ve format deneniyor?",
    a: "Aylık paketlerimizde en az 5 farklı hook (ilk 3 saniye açılışı) ve en az 4 farklı format (Before/After, POV, Reply to comment, Tutorial, vs.) test ediyoruz. İlk 30 gün veri toplama ayı, ikinci 30 gün formül optimizasyonu, üçüncü 30 gün ölçekleme aşamasıdır. Hangi hook ve formatın sizin markanız için işe yaradığını haftalık raporda görebiliyorsunuz. Kazanan formüller ölçeklenir, çalışmayanlar kütüphaneden çıkarılır."
  },
  {
    q: "Yayın saati ve gün seçimini siz mi yapıyorsunuz?",
    a: "Evet. İlk 2 hafta rakip analizi ve hesabınızın Insights verisinden optimal yayın penceresini çıkarıyoruz. Sonrasında haftalık takvim üzerinden Reels ve TikTok yayın saatlerini belirliyor, Meta Business Suite ve TikTok Scheduler ile önceden programlıyoruz. Genel olarak Türkiye kitlesi için 12:30, 19:00 ve 22:30 aralıkları en iyi çalışır; ancak sektörünüze göre değişebilir. Hafta içi salı, çarşamba, perşembe genelde en yüksek dağıtım günleri."
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
              <span className="text-ink">Sosyal Medya Viral Video</span>
            </nav>
          </Reveal>

          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 items-start">
            <div>
              <Reveal>
                <div className="inline-flex items-center gap-2 border-3 border-ink bg-brand-pink text-paper px-3 py-1.5 shadow-brutal-sm mb-6">
                  <Flame className="h-4 w-4" />
                  <span className="text-xs font-black uppercase tracking-wider">Viral Video Stüdyosu</span>
                </div>
              </Reveal>
              <Reveal delay={100}>
                <h1 className="font-display text-h1 font-black leading-[0.95] max-w-4xl text-ink">
                  Sosyal Medya Viral Video Üretimi
                </h1>
              </Reveal>
              <Reveal delay={150}>
                <p className="mt-4 text-xl font-bold text-ink/70 max-w-3xl">
                  Reels + TikTok formatında algoritmayı kazanan formül.
                </p>
              </Reveal>
              <Reveal delay={200}>
                <p className="mt-6 max-w-prose text-body text-ink/80 font-medium">
                  Sosyal medya viral video üretimi; Reels, TikTok ve YouTube Shorts formatında algoritmanın sevdiği hook, edit temposu, trending sound ve caption formülü ile kısa video üretmektir. PORTZEN, işletmeler için haftalık ölçekte viral olma odaklı içerik üretir. İlk 3 saniyeyi kazanır, doğru sesi seçer, kesim ritmini kurar ve yayını doğru saate koyar. 8 videodan 40 videoya kadar aylık paket seçenekleri ile Türkiye genelinde uzaktan çalışırız.
                </p>
              </Reveal>
              <Reveal delay={300}>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="/iletisim"
                    className="inline-flex items-center gap-2 border-3 border-ink bg-ink px-5 py-3 text-sm font-bold uppercase text-paper shadow-brutal hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all"
                  >
                    Ücretsiz Hook Analizi İste <ArrowUpRight className="h-4 w-4" />
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

      {/* 2. WHY NOT VIRAL */}
      <section className="bg-ink text-paper py-section">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-12 max-w-3xl">
              <div className="inline-block border-3 border-paper bg-brand-green text-paper px-3 py-1 text-xs font-black uppercase tracking-wider mb-4 shadow-[6px_6px_0_#FFFDF5]">
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
                  <div className="border-3 border-paper bg-paper/5 p-6 shadow-[8px_8px_0_#FFFDF5] h-full">
                    <Icon className="h-7 w-7 text-brand-yellow mb-4" />
                    <h3 className="font-display text-lg font-black mb-3">{p.title}</h3>
                    <p className="text-sm opacity-85 leading-relaxed">{p.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={400}>
            <div className="mt-10 border-3 border-paper bg-paper/5 p-6 shadow-[6px_6px_0_#FFFDF5]">
              <p className="text-sm opacity-90 leading-relaxed">
                <strong>Not:</strong> Bu 5 problem sadece bireysel işletmelerde değil, kurumsal hesaplarda da yaygın. Kurumsal kimlik korkusu ve karar zinciri yavaşlığı, viral video için gereken hızlı reaksiyonu engelliyor. Kapsamlı içerik yönetimi için <Link href="/sosyal-medya-yonetimi" className="underline font-bold">sosyal medya yönetimi</Link> hizmetimiz haftalık takvim ve topluluk yönetimi ile birlikte çalışıyor. Kurumsal ajans desteği için <Link href="/sosyal-medya-ajansi" className="underline font-bold">sosyal medya ajansı</Link> sayfasına bakabilirsiniz.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 3. VIRAL FORMULA */}
      <section className="bg-paper py-section">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-12 max-w-3xl">
              <div className="inline-block border-3 border-ink bg-brand-purple text-paper px-3 py-1 text-xs font-black uppercase tracking-wider mb-4 shadow-brutal-sm">
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
                  <div className="border-3 border-ink bg-paper p-6 shadow-brutal hover:-translate-x-1 hover:-translate-y-1 hover:shadow-brutal-lg transition-all h-full">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 border-3 border-ink bg-brand-yellow shadow-brutal-sm">
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
      <section className="bg-paper py-section border-t-3 border-ink/10">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-12 max-w-3xl">
              <div className="inline-block border-3 border-ink bg-brand-blue text-paper px-3 py-1 text-xs font-black uppercase tracking-wider mb-4 shadow-brutal-sm">
                Format kütüphanesi
              </div>
              <h2 className="font-display text-h2 font-black leading-tight text-ink">
                Kanıtlanmış 6 format
              </h2>
              <p className="mt-4 text-body text-ink/70 max-w-prose">
                Her sektör için çalışan format farklıdır. Aşağıdaki 6 format PORTZEN'in en sık ölçeklediği ve viral sonuç aldığı çerçevelerdir. Aylık pakette bu 6 format arasından sektörünüze uygun 3-4 tanesini seçip haftalık rotasyonda uyguluyoruz.
              </p>
            </div>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {formats.map((f, i) => {
              const Icon = f.icon;
              return (
                <Reveal key={i} delay={i * 60}>
                  <div className="border-3 border-ink bg-paper p-6 shadow-brutal hover:-translate-x-1 hover:-translate-y-1 hover:shadow-brutal-lg transition-all h-full">
                    <Icon className="h-7 w-7 text-ink mb-4" />
                    <h3 className="font-display text-lg font-black mb-2 text-ink">{f.name}</h3>
                    <p className="text-sm text-ink/70 leading-relaxed">{f.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={400}>
            <div className="mt-10 border-3 border-ink bg-brand-yellow p-6 shadow-brutal flex items-center justify-between flex-wrap gap-4">
              <div>
                <div className="font-display text-lg font-black mb-1 text-ink">Kardeş hizmet: AI reklam videosu</div>
                <p className="text-sm text-ink/80">
                  Performans reklam kanalları için A/B testine uygun, dönüşüm odaklı video üretimi arıyorsanız kardeş sayfamıza bakabilirsiniz.
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

      {/* 6. AI SUPPORT */}
      <section className="bg-paper py-section">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-12 max-w-3xl">
              <div className="inline-block border-3 border-ink bg-brand-purple text-paper px-3 py-1 text-xs font-black uppercase tracking-wider mb-4 shadow-brutal-sm">
                AI destek katmanı
              </div>
              <h2 className="font-display text-h2 font-black leading-tight text-ink">
                Yapay zeka viral formülü hızlandırır
              </h2>
              <p className="mt-4 text-body text-ink/70 max-w-prose">
                Viral video üretimi sadece kreatif değil, veri işidir. Trend takibi, rakip analizi, hook varyantı ve yayın saati; AI destekli araçlar olmadan haftalık ölçekte sürdürülemez. PORTZEN'in AI katmanı üretim hızını artırıyor, ölçümü tahmine değil veriye dayandırıyor. Detaylı üretim tarafını <Link href="/yapay-zeka-video-uretimi" className="underline font-bold">yapay zeka video üretimi</Link> sayfasında görebilirsiniz.
              </p>
            </div>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2">
            {aiSupport.map((a, i) => {
              const Icon = a.icon;
              return (
                <Reveal key={i} delay={i * 80}>
                  <div className="border-3 border-ink bg-paper p-6 shadow-brutal hover:-translate-x-1 hover:-translate-y-1 hover:shadow-brutal-lg transition-all h-full">
                    <div className="inline-flex items-center justify-center w-12 h-12 border-3 border-ink bg-brand-pink text-paper shadow-brutal-sm mb-4">
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

      {/* 7. SECTORS */}
      <section className="bg-paper py-section border-t-3 border-ink/10">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-12 max-w-3xl">
              <div className="inline-block border-3 border-ink bg-brand-green text-paper px-3 py-1 text-xs font-black uppercase tracking-wider mb-4 shadow-brutal-sm">
                Sektörel örnekler
              </div>
              <h2 className="font-display text-h2 font-black leading-tight text-ink">
                6 sektörde uyguladığımız viral formatlar
              </h2>
              <p className="mt-4 text-body text-ink/70 max-w-prose">
                Her sektörün viral olma dili farklıdır. Bir kafeyi viral yapan format bir kliniği viral yapmaz. Aşağıdaki 6 sektör için özel içerik pillar'ları, hook örnekleri ve trending audio setleri ile çalışıyoruz. Detay için sektörel sayfalarımıza göz atabilirsiniz.
              </p>
            </div>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {sectors.map((sector, i) => (
              <Reveal key={i} delay={i * 60}>
                <Link
                  href={sector.href}
                  className="block border-3 border-ink bg-paper p-6 shadow-brutal hover:-translate-x-1 hover:-translate-y-1 hover:shadow-brutal-lg transition-all h-full group"
                >
                  <Flame className="h-7 w-7 text-ink mb-4" />
                  <h3 className="font-display text-lg font-black mb-2 text-ink">{sector.name}</h3>
                  <p className="text-sm text-ink/70 leading-relaxed mb-4">{sector.desc}</p>
                  <span className="inline-flex items-center gap-1 text-xs font-bold uppercase text-brand-pink group-hover:gap-2 transition-all">
                    Sektör Sayfasını Gör <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 8. PACKAGES */}
      <section className="bg-paper py-section">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-12 max-w-3xl">
              <div className="inline-block border-3 border-ink bg-brand-orange text-paper px-3 py-1 text-xs font-black uppercase tracking-wider mb-4 shadow-brutal-sm">
                Şeffaf fiyatlandırma
              </div>
              <h2 className="font-display text-h2 font-black leading-tight text-ink">
                Aylık viral video paketleri
              </h2>
              <p className="mt-4 text-body text-ink/70 max-w-prose">
                3 aylık paket: yeni başlayanlar için 8 video, büyüyen markalar için 20 video, agresif ölçekleme için 40+ video. Fiyatlar aylıktır, sürekli üretim modeline göre kurgulanmıştır. Video sayısı, platform sayısı ve çekim günü paket seçimine göre değişir.
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
                  <div className="mb-1">
                    <span className="font-display text-3xl font-black">{p.price}</span>
                    <span className="text-sm opacity-70">{p.period}</span>
                  </div>
                  <div className="text-xs font-bold opacity-75 mb-6">{p.duration}</div>
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
                <div className="font-display text-lg font-black mb-2">Kapsamlı içerik yönetimi ile birlikte</div>
                <p className="text-sm opacity-90 mb-3">
                  Sadece viral video değil, feed post, story, topluluk yönetimi ve raporlama da istiyorsanız sosyal medya yönetimi paketi ile bundle yapıyoruz.
                </p>
                <Link
                  href="/sosyal-medya-yonetimi"
                  className="inline-flex items-center gap-1 text-xs font-bold uppercase text-brand-yellow hover:gap-2 transition-all"
                >
                  Sosyal Medya Yönetimi <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
              <div className="border-3 border-ink bg-brand-purple text-paper p-5 shadow-brutal">
                <div className="font-display text-lg font-black mb-2">Instagram DM otomasyonu ile birleştirin</div>
                <p className="text-sm opacity-90 mb-3">
                  Viral videolarınızdan gelen DM'leri otomatik yanıtlayıp müşteri hunisine çevirmek için DM otomasyonu ile bundle yapıyoruz.
                </p>
                <Link
                  href="/instagram-dm-otomasyonu"
                  className="inline-flex items-center gap-1 text-xs font-bold uppercase text-brand-yellow hover:gap-2 transition-all"
                >
                  Instagram DM Otomasyonu <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 9. CASE STUDY */}
      <section className="bg-brand-blue text-paper py-section">
        <div className="mx-auto max-w-container px-6">
          <div className="grid lg:grid-cols-[1.4fr_1fr] gap-10 items-start">
            <div>
              <Reveal>
                <div className="inline-block border-3 border-ink bg-brand-yellow text-ink px-3 py-1 text-xs font-black uppercase tracking-wider mb-4 shadow-brutal-sm">
                  Viral vaka çalışması
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
                    className="inline-flex items-center gap-2 border-3 border-ink bg-paper text-ink px-4 py-2 text-xs font-bold uppercase shadow-brutal hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all"
                  >
                    Reels Üretim Rehberi <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                  <Link
                    href="/blog/konya-mobilya-instagram-reels"
                    className="inline-flex items-center gap-2 border-3 border-ink bg-paper text-ink px-4 py-2 text-xs font-bold uppercase shadow-brutal hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all"
                  >
                    Mobilya Vaka İncelemesi <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </Reveal>
            </div>
            <Reveal delay={200}>
              <div className="border-3 border-ink bg-paper text-ink p-6 shadow-brutal">
                <div className="font-display text-xl font-black mb-4">Somut sonuçlar</div>
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

      {/* 10. COMPARISON */}
      <section className="bg-paper py-section">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-10 max-w-3xl">
              <div className="inline-block border-3 border-ink bg-brand-pink text-paper px-3 py-1 text-xs font-black uppercase tracking-wider mb-4 shadow-brutal-sm">
                Karşılaştırma
              </div>
              <h2 className="font-display text-h2 font-black leading-tight text-ink">
                Kendi kendinize çekmek vs PORTZEN ile üretmek
              </h2>
              <p className="mt-4 text-body text-ink/70 max-w-prose">
                Sosyal medya viral video üretimini işletme sahibi olarak kendiniz yapmakla, uzman ekiple çıkarmak arasındaki farkı 5 kriterde karşılaştırıyoruz. Bu tablo, PORTZEN müşterilerinden ilk ay öncesi çıkarılan ortalama verilere dayanır.
              </p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="border-3 border-ink shadow-brutal overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-ink text-paper">
                    <th className="border-3 border-ink p-4 text-left font-display text-base font-black uppercase">Kriter</th>
                    <th className="border-3 border-ink p-4 text-left font-display text-base font-black uppercase">Kendiniz Çekmek</th>
                    <th className="border-3 border-ink p-4 text-left font-display text-base font-black uppercase bg-brand-yellow text-ink">PORTZEN ile Üretim</th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((row, i) => (
                    <tr key={i} className={cn(i % 2 === 0 ? "bg-paper" : "bg-paper/50")}>
                      <td className="border-3 border-ink p-4 font-bold text-ink">{row.kriter}</td>
                      <td className="border-3 border-ink p-4 text-ink/80">{row.self}</td>
                      <td className="border-3 border-ink p-4 text-ink font-bold bg-brand-yellow/30">{row.portzen}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
          <Reveal delay={300}>
            <p className="mt-6 text-sm text-ink/60 max-w-3xl">
              <strong>Not:</strong> Ortalama bir işletme sahibi haftada 10-15 saat sosyal medya için harcıyor; buna öğrenme, tasarım, çekim ve yayın dahil. Aynı süre ana işine ayrılsa yaratacağı ciro potansiyeli, aylık video paketi maliyetinin çok üstünde. Detaylı hesap için <Link href="/iletisim" className="underline font-bold">iletişim formunu</Link> kullanabilirsiniz.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 11. FAQ */}
      <section className="bg-ink text-paper py-section">
        <div className="mx-auto max-w-container px-6 max-w-4xl">
          <Reveal>
            <div className="mb-12">
              <div className="inline-block border-3 border-paper bg-brand-purple text-paper px-3 py-1 text-xs font-black uppercase tracking-wider mb-4 shadow-[6px_6px_0_#FFFDF5]">
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
                <div className="font-display text-base font-black mb-2">Blog: Instagram Reels algoritması 2026</div>
                <p className="text-sm opacity-85 mb-3">
                  Reels algoritmasının 2026 güncellemeleri: yeni sinyaller, izlenme süresi ağırlığı, tekrar izleme sinyali.
                </p>
                <Link
                  href="/blog/instagram-reels-algoritmasi-2026"
                  className="inline-flex items-center gap-1 text-xs font-bold uppercase text-brand-yellow hover:gap-2 transition-all"
                >
                  Algoritmayı Anla <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
              <div className="border-3 border-paper bg-paper/5 p-5 shadow-[6px_6px_0_#FFFDF5]">
                <div className="font-display text-base font-black mb-2">Blog: TikTok vs Instagram Reels</div>
                <p className="text-sm opacity-85 mb-3">
                  KOBİ'ler için hangi platform öncelikli? Yayın algoritması, kitle davranışı ve dönüşüm karşılaştırması.
                </p>
                <Link
                  href="/blog/tiktok-vs-instagram-reels-kobi"
                  className="inline-flex items-center gap-1 text-xs font-bold uppercase text-brand-yellow hover:gap-2 transition-all"
                >
                  Karşılaştırmayı Oku <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
              <div className="border-3 border-paper bg-paper/5 p-5 shadow-[6px_6px_0_#FFFDF5]">
                <div className="font-display text-base font-black mb-2">Blog: TikTok marka sayfası açma</div>
                <p className="text-sm opacity-85 mb-3">
                  TikTok Business Account nasıl kurulur, ilk 30 gün stratejisi, ölçümleme kurulumu ve reklam entegrasyonu.
                </p>
                <Link
                  href="/blog/tiktok-marka-sayfasi-acma"
                  className="inline-flex items-center gap-1 text-xs font-bold uppercase text-brand-yellow hover:gap-2 transition-all"
                >
                  Rehberi Oku <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
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
            </div>
          </Reveal>
        </div>
      </section>

      {/* 12. FINAL CTA */}
      <section className="py-section">
        <div className="mx-auto max-w-container px-6">
          <div className="border-3 border-ink bg-brand-yellow p-8 md:p-14 shadow-brutal-lg text-ink">
            <Reveal>
              <h2 className="font-display text-h2 font-black leading-tight mb-4 max-w-3xl">
                İlk viral videonuzu birlikte kuralım.
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="text-body opacity-90 mb-8 max-w-2xl font-medium">
                20 dakikalık ücretsiz hook analizi ile mevcut hesabınızın son 10 videosunu inceliyor, viral formüle uyarlanmış 3 yeni konsept öneriyoruz. Beğenirseniz aylık pakete geçiyoruz, beğenmezseniz veri sizin olsun. Sadece sözleşmeye bağlanmadan önce viral formülün gerçek olduğunu görün.
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
                  <MessageCircle className="h-4 w-4" /> WhatsApp ile Hook Analizi Al
                </a>
                <Link
                  href="/iletisim"
                  className="inline-flex items-center gap-2 border-3 border-ink bg-paper px-5 py-3 text-sm font-bold uppercase text-ink shadow-brutal hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all"
                >
                  İletişim Formu <ArrowUpRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/yapay-zeka-video-uretimi"
                  className="inline-flex items-center gap-2 border-3 border-ink bg-paper px-5 py-3 text-sm font-bold uppercase text-ink shadow-brutal hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all"
                >
                  Yapay Zeka Video Üretimi <ArrowUpRight className="h-4 w-4" />
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
