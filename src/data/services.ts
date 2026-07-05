import { Video, MessageSquare, Workflow, Sparkles, Globe, LucideIcon } from "lucide-react";

export type ServiceTone = "yellow" | "pink" | "blue" | "green" | "orange" | "purple";

export interface SubService {
  title: string;
  href: string;
  description: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface FAQ {
  q: string;
  a: string;
}

export interface WorkloadStat {
  metric: string;
  label: string;
}

export interface ServiceCategory {
  slug: string;
  title: string;
  shortTitle: string;
  icon: LucideIcon;
  tone: ServiceTone;
  tagline: string;
  href: string;
  explainer: string;
  operationRole: string;
  workloadStats: WorkloadStat[];
  useCases: string[];
  subServices: SubService[];
  process: ProcessStep[];
  faqs: FAQ[];
}

export const SERVICES: ServiceCategory[] = [
  {
    slug: "ai-video",
    title: "AI Reklam Video Üretimi",
    shortTitle: "AI Video",
    icon: Video,
    tone: "pink",
    tagline: "Çekim ekibi yok, stüdyo yok — 3 günde teslim.",
    href: "/yapay-zeka-video-uretimi",
    explainer:
      "Bir kamera ekibi, kameraman, oyuncu kiralamak yerine — biz yapay zekaya \"şu sektör için şöyle bir sahne çek\" diyip 3 günde tamamlanmış reklam videosunu sana teslim ediyoruz. Stüdyo kirası yok, oyuncu maaşı yok, tekrar çekim yok. Sahneler minyatür, sinematik veya samimi sözcü tarzında olur.",
    operationRole:
      "Pazarlama ekibinin yerine geçer. Sosyal medya yöneticin haftada 1-2 reklam videosuna ihtiyaç duyuyorsa, biz sana ayda 4-12 video üretiriz.",
    workloadStats: [
      { metric: "3 gün", label: "Tek video teslim süresi (eski yöntemde 2-3 haftaydı)" },
      { metric: "₺0", label: "Stüdyo + oyuncu + mekan maliyeti" },
      { metric: "%85", label: "Maliyet azalma — klasik prodüksiyona göre" }
    ],
    useCases: [
      "Eczane için minyatür sahne reklam — sosyal medyada paylaşılır",
      "Hukuk bürosu için kurumsal anlatım videosu — sayfaya pinlenir",
      "Restoran için ürün ve atmosfer reklamı — sipariş artırır",
      "İnşaat firması için sinematik proje tanıtım videosu"
    ],
    subServices: [
      { title: "Sektörel Kısa Video", href: "/yapay-zeka-video-uretimi#reels", description: "Eczane, hukuk, inşaat için minyatür sahne reklamlar — 15-30 saniye." },
      { title: "Marka Tanıtım Videosu", href: "/yapay-zeka-video-uretimi#brand", description: "Sözcü + sahne geçişli markaya özel anlatım — 30-45 saniye." },
      { title: "Yapay Zeka Influencer'lar", href: "/yapay-zeka-video-uretimi#ugc", description: "Markaya özel AI avatar — sosyal medyada yüzünüz olur, müşteri yorumu samimiyetinde içerik üretir." },
      { title: "Reklam Setleri", href: "/yapay-zeka-video-uretimi#ads", description: "Sosyal medya reklamları için 5-10 varyantlı paket." }
    ],
    process: [
      { step: "01", title: "Brief", description: "30 dakikalık görüşme — sektör, mesaj, hedef kitle, ton birlikte belirlenir." },
      { step: "02", title: "Senaryo", description: "1 gün içinde 3-5 sahne taslağı sunulur — onay alıp ilerleriz." },
      { step: "03", title: "Üretim", description: "Yapay zeka modelleriyle sahneler hazırlanır — sen sadece beklersin." },
      { step: "04", title: "Edit + Teslim", description: "Türkçe altyazı + marka logosu + müzik eklenir. 3. gün elinde." }
    ],
    faqs: [
      { q: "Gerçek oyuncu veya kameraman kullanmıyor musunuz?", a: "Hayır. Sahnenin hepsi yapay zeka ile üretilir. Bu sayede çekim, ekip ve stüdyo masrafı tamamen kalkar." },
      { q: "Bir video kaç para?", a: "Tek video ₺2.500'den başlar. Aylık 4 videoluk seri ₺8.500'dür. Detaylı paket için bize yazın." },
      { q: "Kaç revize hakkım var?", a: "Tek video pakette 1 revize, seri pakette aylık 8 revize. Senaryo onaylanınca büyük dönüşler nadir olur." },
      { q: "Hangi formatlarda teslim alıyorum?", a: "Dikey (kısa video), kare (sosyal medya feed) ve yatay (YouTube) — üçü birden tek üretimden çıkar." }
    ]
  },
  {
    slug: "ai-bot",
    title: "AI Bot Kurulumu",
    shortTitle: "AI Bot",
    icon: MessageSquare,
    tone: "green",
    tagline: "WhatsApp, Telegram, Instagram — müşteriyi 60 saniyede karşılayan asistan.",
    href: "/whatsapp-ai-asistani",
    explainer:
      "Bir müşteri \"yarın saat 17:00'da randevu var mı?\" diye yazdığında, normalde bir personelin görüp cevaplaması saatler sürer. Biz bunun yerine yapay zeka destekli bir asistan kuruyoruz: 60 saniye içinde müşteriye yanıt verir, randevu açar, fiyat bilgisi verir, ilgili müşteriyi kayıt defterine düşürür. WhatsApp, Telegram veya Instagram — hangisinde olursan ol.",
    operationRole:
      "Müşteri hizmetleri ekibinin önüne geçer. Personelin sadece sıcak ve karmaşık konuşmaları görmesini sağlar — basit soruları bot halleder.",
    workloadStats: [
      { metric: "60 sn", label: "İlk yanıt süresi (eskiden 4 saat)" },
      { metric: "%87", label: "Randevu doluluğu artışı (ortalama)" },
      { metric: "%75", label: "Müşteri hizmetleri iş yükü azalma" }
    ],
    useCases: [
      "Klinik: tedavi türü + bütçe bilgisi alır → randevu açar",
      "Restoran: rezervasyon + masa tercihi + alerji notu alır",
      "Emlak: bütçe + lokasyon sorar → portföyden eşleştirir",
      "E-ticaret: sipariş takibi + iade süreci + ürün önerisi yapar"
    ],
    subServices: [
      { title: "WhatsApp Asistanı", href: "/whatsapp-ai-asistani#whatsapp", description: "Türkiye'nin %95'inin kullandığı platform — profesyonel kurulum." },
      { title: "Telegram Asistanı", href: "/whatsapp-ai-asistani#telegram", description: "Hızlı, çoklu kullanıcı destekli — topluluk ve müşteri hizmeti." },
      { title: "Instagram DM Asistanı", href: "/whatsapp-ai-asistani#instagram", description: "DM'ye düşen ilgili kişileri otomatik karşılar, randevu açar." },
      { title: "Çoklu Platform Müşteri Hizmetleri", href: "/whatsapp-ai-asistani#multi", description: "WhatsApp + Telegram + Instagram tek panelden yönetilir." }
    ],
    process: [
      { step: "01", title: "Persona", description: "Asistanın nasıl konuşacağını birlikte belirleriz — samimi mi, kurumsal mı?" },
      { step: "02", title: "Bilgi Tabanı", description: "Sektör + fiyatlar + sıkça sorulanlar + portföyünü asistana öğretiriz." },
      { step: "03", title: "Entegrasyon", description: "Takvim, kayıt defteri ve diğer sistemlerine bağlanır." },
      { step: "04", title: "Test + Canlı", description: "1 hafta test → tüm uç durumlar düzeltilir → canlıya alınır." }
    ],
    faqs: [
      { q: "Asistan gerçek insan gibi konuşuyor mu?", a: "Evet. Sektörel persona ile eğittiğimiz için müşteri çoğunlukla yapay zeka olduğunu anlamaz." },
      { q: "Personelimin işi bitiyor mu?", a: "Hayır. Asistan basit soruları ve ilgili leadleri halleder — personel sıcak ve karmaşık konuşmalara odaklanır." },
      { q: "Hangi sektörlerde kullanılıyor?", a: "Klinik, restoran, emlak, e-ticaret, eğitim, hukuk, kişisel marka — müşteri ile yazılı iletişim kuran her sektör." },
      { q: "Kurulum süresi?", a: "1-2 hafta. İlk hafta brief + persona + bilgi tabanı, ikinci hafta entegrasyon + test." }
    ]
  },
  {
    slug: "otomasyon",
    title: "Otomasyon Sistemleri",
    shortTitle: "Otomasyon",
    icon: Workflow,
    tone: "blue",
    tagline: "Manuel işleri %80 azaltan iş akışı altyapısı.",
    href: "/crm-otomasyonu",
    explainer:
      "Her gün tekrar tekrar yaptığın işleri — formdan gelen veriyi kayıt defterine yazmak, müşteriye e-posta yollamak, faturayı muhasebeye atmak — biz otomatik iş akışlarına dönüştürüyoruz. Gece 03:00'te bile çalışır; sen sabah uyandığında işler hallolmuş olur.",
    operationRole:
      "Operasyon yöneticinin yerine — bilmediğin işleri sessizce yapar. Personelinin günde 2-4 saat tekrarlı işlerini ortadan kaldırır.",
    workloadStats: [
      { metric: "%80", label: "Tekrarlı manuel iş azalma" },
      { metric: "5 dk", label: "Yeni müşteri kayıt süresi (eskiden 4 saat)" },
      { metric: "7/24", label: "Çalışır — uyumaz, hastalanmaz, izine çıkmaz" }
    ],
    useCases: [
      "Instagram DM → yapay zeka ile kalifiye → kayıt defteri → WhatsApp takibi",
      "Web sitesi form → e-posta + kayıt defteri + randevu slotu otomatik açılır",
      "Terk edilmiş sepet → 2 saat sonra WhatsApp kurtarma mesajı gider",
      "Her gece 03:00 → günlük satış raporu ekibe iletilir"
    ],
    subServices: [
      { title: "Lead Toplama", href: "/crm-otomasyonu#lead", description: "Form, DM, reklam → kayıt defteri otomatik akış + bildirim." },
      { title: "Email & WhatsApp Dizisi", href: "/crm-otomasyonu#sequence", description: "İlgili → sıcak → satış akışları — 7-21 günlük zincir." },
      { title: "Müşteri Kayıt Sistemi", href: "/crm-otomasyonu#crm", description: "Tüm kanallardaki müşteri verisi tek panelde senkronize." },
      { title: "Sosyal Medya Otomasyonu", href: "/crm-otomasyonu#sosyal", description: "İçerik takvimi → Instagram + LinkedIn + X otomatik yayın." }
    ],
    process: [
      { step: "01", title: "Akış Analizi", description: "Hangi işlerini ne kadar zaman alıyorsun? Birlikte haritalayalım." },
      { step: "02", title: "Tasarım", description: "Görsel iş akışı çizilir — sen onaylarsın." },
      { step: "03", title: "Kurulum + Test", description: "İş akışı canlıya alınır, 1 hafta gözlem altında." },
      { step: "04", title: "Eğitim + Devir", description: "Sana nasıl yöneteceğini gösteririz — istersen biz bakarız." }
    ],
    faqs: [
      { q: "Teknik bilgi gerekli mi?", a: "Sen kullanmayacaksın — biz kuruyoruz, sen sadece sonucunu görüyorsun. İstersen sistemi sana öğretiriz." },
      { q: "Diğer otomasyon araçlarından farkı ne?", a: "Daha ekonomik, daha esnek, daha güvenli. Verilerin senin kontrolünde kalır." },
      { q: "Hangi araçlara bağlanıyor?", a: "300+ servise: kayıt defterleri, ödeme sistemleri, mesajlaşma uygulamaları, e-posta servisleri ve daha fazlası." },
      { q: "Ortalama kaç iş akışı kuruyorsunuz?", a: "Büyüme pakette aylık 10 iş akışı tipik. Çoğu müşteri 5-7 iş akışı ile yetinir." }
    ]
  },
  {
    slug: "sosyal-medya",
    title: "Sosyal Medya İçerik Üretimi",
    shortTitle: "Sosyal Medya",
    icon: Sparkles,
    tone: "yellow",
    tagline: "Aylık paket — kısa video, görsel set, hikaye tek yerden.",
    href: "/sosyal-medya-yonetimi",
    explainer:
      "Senin yerine Instagram, TikTok, LinkedIn için her hafta yeni kısa video, görsel set ve hikaye üretiyoruz. Markanın diline, sektörüne ve hedef kitlene uygun planlanmış aylık takvim — sen sadece onay veriyorsun, biz yayınlıyoruz. \"Bugün ne paylaşsam\" derdi tamamen kalkar.",
    operationRole:
      "Sosyal medya yöneticisinin yerine geçer. Genelde 1 kişiye verdiğin maaşın yarısı kadar fiyata haftada 5-7 içerik elde edersin.",
    workloadStats: [
      { metric: "20+", label: "İçerik / ay (video + görsel + hikaye)" },
      { metric: "%54", label: "Ortalama takipçi artışı (3 ay)" },
      { metric: "0", label: "İçerik fikri bulmaya harcadığın zaman" }
    ],
    useCases: [
      "Estetik klinik: aylık 20 kısa video + her hafta görsel set",
      "Online koç: kişisel marka odaklı içerik + hikaye takvimi",
      "E-ticaret: ürün showcase video + reklam görselleri",
      "Restoran: günlük menü hikayesi + haftalık atmosfer videosu"
    ],
    subServices: [
      { title: "Kısa Video Üretimi", href: "/sosyal-medya-yonetimi#reels", description: "Haftada 3-5 yapay zeka destekli video — platforma ve hedef kitleye uygun format." },
      { title: "Görsel Set Tasarımı", href: "/sosyal-medya-yonetimi#carousel", description: "Eğitici + satış odaklı 10 slayt set — kayıt ve paylaşım canavarı." },
      { title: "Hikaye Şablonu", href: "/sosyal-medya-yonetimi#story", description: "Markaya özel haftalık hikaye takvimi + etkileşim stratejisi." },
      { title: "Reklam Görseli", href: "/sosyal-medya-yonetimi#ad", description: "Sosyal medya reklamları için varyantlı tasarım paketi." }
    ],
    process: [
      { step: "01", title: "Strateji", description: "Hedef kitle + ana konular + ton + haftalık takvim çıkarılır." },
      { step: "02", title: "Üretim", description: "Yapay zeka + manuel tasarım karması — her hafta 5-7 içerik hazır olur." },
      { step: "03", title: "Onay + Yayın", description: "Sen onaylarsın → biz planlı yayına alırız → otomatik paylaşım." },
      { step: "04", title: "Aylık Rapor", description: "Erişim, etkileşim, takipçi büyümesi → bir sonraki ay optimize." }
    ],
    faqs: [
      { q: "Aylık paket ne kadar?", a: "Başlangıç paketi ₺2.500 (4 video). Büyüme paketi ₺8.500 (4 video + görsel set + hikaye takvimi). Özel paket için bize yazın." },
      { q: "Sen mi yayınlıyorsun, biz mi?", a: "İkisi de mümkün. Genelde biz planlı yayına alıyoruz, sen sadece onay veriyorsun. İstersen sen yayınlarsın." },
      { q: "İçerik stilini biz mi siz mi belirliyoruz?", a: "Birlikte. İlk hafta brief'te markanın tonu, görsel dili ve sınırları netleştirilir. Sonrasında biz üretiriz, sen onaylarsın." },
      { q: "Sonuç garantisi veriyor musunuz?", a: "Belli bir büyüme oranı garantileyemiyoruz çünkü içerik kalitesi + tutarlılık + zaman birleşik etki. Ama 3 ay sonu net rapor + optimizasyon sözümüz var." }
    ]
  },
  {
    slug: "web-tasarim",
    title: "Web Tasarım Hizmetleri",
    shortTitle: "Web Tasarım",
    icon: Globe,
    tone: "orange",
    tagline: "Hızlı, mobil uyumlu, satış odaklı — şablonsuz markaya özel site.",
    href: "/web-tasarim",
    explainer:
      "Hazır şablonlu sitelerden farklı — sana özel tasarlanmış, 1 saniyenin altında yüklenen, telefonda da kusursuz çalışan modern bir web sitesi. Form gönderildiğinde otomatik olarak WhatsApp'ına bildirim gelir, müşteri kaydı sistemine düşer. Sadece görünmek için değil — satmak için kurulur.",
    operationRole:
      "Pazarlama altyapının kalbinde durur. Reklamlar buraya gelir, lead formu burada doldurulur, satış buradan başlar.",
    workloadStats: [
      { metric: "0.9 sn", label: "Sayfa yükleme süresi (klasik sitelerde 4-5 sn)" },
      { metric: "%30+", label: "Mobil dönüşüm oranı artışı" },
      { metric: "14 gün", label: "Lansman süresi (klasik ajansta 8-12 hafta)" }
    ],
    useCases: [
      "Tek sayfa satış sitesi — reklam trafiği toplama",
      "5-10 sayfalık kurumsal site + blog bölümü",
      "Online mağaza — sepet, ödeme, stok yönetimi dahil",
      "Üyelikli platform — kullanıcı girişi + panel + ödeme"
    ],
    subServices: [
      { title: "Satış Sayfası", href: "/web-tasarim#landing", description: "Tek sayfa dönüşüm odaklı satış sitesi — reklam buraya çekilir." },
      { title: "Kurumsal Site", href: "/web-tasarim#kurumsal", description: "5-10 sayfalık marka anlatımı + blog + iletişim formu." },
      { title: "Online Mağaza", href: "/web-tasarim#eticaret", description: "Sepet + ödeme + stok yönetimi — büyümeye hazır altyapı." },
      { title: "Üyelikli Platform", href: "/web-tasarim#app", description: "Kullanıcı girişi + özel panel + ödeme entegrasyonu." }
    ],
    process: [
      { step: "01", title: "Brief", description: "Hedef, kitle, içerik mimarisi belirlenir. Sayfa haritası çıkar." },
      { step: "02", title: "Tasarım", description: "Yüksek detaylı görsel tasarım — 2-3 turla onay alınır." },
      { step: "03", title: "Geliştirme", description: "Site kodlanır. WhatsApp bildirim + müşteri kaydı entegrasyonu kurulur." },
      { step: "04", title: "Lansman", description: "Domain bağlanır. Arama motoru ayarları yapılır. 14. günde canlı." }
    ],
    faqs: [
      { q: "Hazır şablonlardan farkı ne?", a: "Hazır şablonlar yavaş ve güvenlik açıkları olur. Sana özel kodlanmış site çok daha hızlı, güvenli ve markaya uygundur." },
      { q: "İçerik yönetimini ben yapabilir miyim?", a: "Evet. Kullanması kolay bir panel kurarız — sen yazılı içeriği kendi yönetirsin." },
      { q: "Arama motoru optimizasyonuna iyi mi?", a: "Çok iyi. Hızlı ve doğru yapılandırılmış site Google'da yükselir. Performans skoru genelde 95+ olur." },
      { q: "Form gönderildiğinde ne olur?", a: "Otomatik akış tetiklenir — WhatsApp bildirim + e-posta + müşteri kayıt sistemi. Tek formdan 4 yere düşer." }
    ]
  },
  {
    slug: "web-yazilim",
    title: "Web Yazılım Hizmetleri",
    shortTitle: "Web Yazılım",
    icon: Globe,
    tone: "purple",
    tagline: "Markaya özel kodlanmış SaaS, panel, dashboard ve özel sistemler.",
    href: "/hizmetler/web-yazilim",
    explainer:
      "Hazır şablonlar veya WordPress eklentileri ile çözülemeyen — sektörünüze özel ihtiyaçlar için sıfırdan kodlanmış yazılım. Müşteri paneli, çalışan dashboard'u, sipariş takibi, randevu sistemi, üyelik portalı — neye ihtiyacın varsa.",
    operationRole:
      "İşletmenin teknik altyapısı. Tüm dijital sistemlerin merkezi — diğer hizmetlerle (otomasyon, bot, sosyal medya) konuşan beyin.",
    workloadStats: [
      { metric: "%60+", label: "Operasyonel verimlilik artışı" },
      { metric: "4-8 hafta", label: "Tipik proje süresi" },
      { metric: "0", label: "Lisans veya eklenti maliyeti" }
    ],
    useCases: [
      "Klinik için müşteri portalı + randevu yönetimi",
      "Restoran zinciri için merkezi sipariş paneli",
      "Eğitim platformu için ders takip sistemi",
      "Hizmet işletmesi için müşteri kayıt + faturalama"
    ],
    subServices: [
      { title: "Müşteri Paneli", href: "/hizmetler/web-yazilim#panel", description: "Üyelik girişi + işlem geçmişi + iletişim — markaya özel." },
      { title: "Çalışan Dashboard", href: "/hizmetler/web-yazilim#dashboard", description: "Operasyonel iş takibi + raporlama + yetkilendirme." },
      { title: "Özel Yazılım", href: "/hizmetler/web-yazilim#saas", description: "Sektörünüze özel sıfırdan yazılım — kullanıcı, ödeme, abonelik dahil." },
      { title: "Sistem Entegrasyonu", href: "/hizmetler/web-yazilim#api", description: "Mevcut sistemlerinizi birbirine bağlama — özel köprü yazılımı." }
    ],
    process: [
      { step: "01", title: "İhtiyaç Analizi", description: "Hangi sorunu çözüyor? Kim kullanacak? Net plan çıkarılır." },
      { step: "02", title: "Tasarım + Prototip", description: "Ekran tasarımları + tıklanabilir prototip — onay alınır." },
      { step: "03", title: "Geliştirme", description: "Modüler şekilde yazılır — sen test edersin, biz iyileştiririz." },
      { step: "04", title: "Lansman + Destek", description: "Canlıya alınır, eğitim verilir, 1 ay ücretsiz destek." }
    ],
    faqs: [
      { q: "Hazır yazılımdan farkı ne?", a: "Hazır yazılımlar sizin işinize göre değil — siz onların kalıbına göre çalışmak zorundasınız. Özel yazılımda sistem size uyar." },
      { q: "Ne kadar sürer?", a: "Küçük panel: 3-4 hafta. Orta ölçekli yazılım: 6-8 hafta. Karmaşık platform: 3-4 ay." },
      { q: "Bakım nasıl yapılıyor?", a: "Aylık bakım paketi var — küçük düzenlemeler, güvenlik güncellemeleri, performans takibi dahil." },
      { q: "Kod kime ait?", a: "Tamamen size. Tüm kaynak kod teslim edilir — istediğiniz zaman başka ekipler de devam edebilir." }
    ]
  },
  {
    slug: "mobil-uygulama",
    title: "Mobil Uygulama Geliştirme",
    shortTitle: "Mobil Uygulama",
    icon: Sparkles,
    tone: "pink",
    tagline: "İşletmenize özel iOS ve Android uygulaması — müşterinizin cebinde markanız.",
    href: "/hizmetler/mobil-uygulama",
    explainer:
      "Müşterinizin telefon ekranında sürekli görünür bir marka olun. Sipariş alma, randevu, sadakat programı, bildirim — uygulamanız sayesinde müşteri her açtığında sizi hatırlar. iOS App Store ve Google Play'de yayında.",
    operationRole:
      "Müşteri sadakatinin teknik temeli. Push bildirim, kişiselleştirme, ölçümleme — geleneksel web sitesinin yapamadığı şeyler.",
    workloadStats: [
      { metric: "5x", label: "Web sitesine göre etkileşim oranı" },
      { metric: "8-12 hafta", label: "Tipik lansman süresi" },
      { metric: "iOS + Android", label: "Tek üretimle iki platformda" }
    ],
    useCases: [
      "Restoran: sipariş + sadakat puanı + bildirim kampanyası",
      "Spor salonu: ders rezervasyonu + ödeme + üyelik",
      "Berber/kuaför: randevu + kuyruğa gir + tercihler",
      "Mağaza: stok kontrol + kupon + bildirim"
    ],
    subServices: [
      { title: "Sipariş & Randevu Uygulaması", href: "/hizmetler/mobil-uygulama#siparis", description: "Müşteri sipariş açar, sen anlık bildirim alırsın — telefon trafiği biter." },
      { title: "Sadakat Programı", href: "/hizmetler/mobil-uygulama#sadakat", description: "Puan toplama + kampanya + kişiye özel teklif." },
      { title: "Saha Çalışan Uygulaması", href: "/hizmetler/mobil-uygulama#saha", description: "Servis, kurye, teknik destek için iş takibi + raporlama." },
      { title: "Bildirim Sistemi", href: "/hizmetler/mobil-uygulama#bildirim", description: "Doğru zamanda doğru mesaj — yeni kampanya, hatırlatma, geri kazanım." }
    ],
    process: [
      { step: "01", title: "Strateji", description: "Ne yapacak? Kim kullanacak? Hangi platform önce — iOS mu Android mı?" },
      { step: "02", title: "Tasarım", description: "Ekran akışları + interaktif prototip — onaylanır." },
      { step: "03", title: "Geliştirme", description: "Tek kod tabanından iOS + Android paralel üretim." },
      { step: "04", title: "Mağaza Yayını", description: "App Store + Google Play'e gönderilir, onay süreci yönetilir." }
    ],
    faqs: [
      { q: "Sadece iOS veya Android olur mu?", a: "Evet ama önerimiz ikisi birden — tek üretimden hibrit teknoloji ile çıkıyor, ek maliyet düşük kalıyor." },
      { q: "Mağaza ücreti ne kadar?", a: "Apple yıllık 99 USD, Google Play tek seferlik 25 USD hesap ücreti — ayrı, biz kuruluma yardımcı olabiliriz." },
      { q: "Güncelleme nasıl olur?", a: "Aylık küçük güncellemeler bakım paketinde. Büyük yeni özellikler ayrı brief'le." },
      { q: "Native mi hibrit mi?", a: "Hibrit teknoloji kullanıyoruz — native gibi hızlı, daha ucuz, tek kod tabanı." }
    ]
  },
  {
    slug: "mobil-oyun",
    title: "Mobil Promosyon Oyunu",
    shortTitle: "Promosyon Oyunu",
    icon: Sparkles,
    tone: "yellow",
    tagline: "Markaya özel mini oyun — müşteri eğlenirken kupon kazanır, siz veri toplar.",
    href: "/hizmetler/mobil-oyun",
    explainer:
      "Müşteriye yüzde 10 indirim demek yerine — markanıza özel basit ama bağımlılık yapan bir mini oyun. Çark çevir, kart eşle, hızlı tıkla — kazandığında kupon alır. Hem eğlence, hem dönüşüm, hem marka hatırlanırlığı.",
    operationRole:
      "Pazarlama kampanyalarının dönüşüm motoru. Sosyal medya reklamı + e-posta kampanyası + mağaza içi etkileşim — hepsi oyuna yönlenir, oyundan satışa gider.",
    workloadStats: [
      { metric: "3-4x", label: "Klasik kupona göre etkileşim" },
      { metric: "%40+", label: "Oynayan müşteri dönüşüm oranı" },
      { metric: "2-3 hafta", label: "Lansman süresi" }
    ],
    useCases: [
      "Restoran: Pizza Yarışı — kazanan ücretsiz tatlı",
      "Mağaza: Şanslı Çark — anlık indirim kuponu",
      "Online satış: Kart Eşleştirme — yıldız müşteriye yüzde 20 hediye",
      "Etkinlik: Hızlı Tıkla — bilet çekilişi katılım"
    ],
    subServices: [
      { title: "Çark / Şans Oyunları", href: "/hizmetler/mobil-oyun#cark", description: "Klasik çark, kazı-kazan, kupa çekilişi — markaya özel temalı." },
      { title: "Refleks Oyunları", href: "/hizmetler/mobil-oyun#refleks", description: "Hızlı tıkla, hedef vur, kart eşle — bağımlılık yaratan kısa oyunlar." },
      { title: "Marka Hikayesi Oyunu", href: "/hizmetler/mobil-oyun#hikaye", description: "Kısa interaktif hikaye — müşteri sizin dünyanızı keşfeder." },
      { title: "Sosyal Yarışma", href: "/hizmetler/mobil-oyun#sosyal", description: "Liderlik tablosu + arkadaş davet — viral mekanik." }
    ],
    process: [
      { step: "01", title: "Konsept", description: "Hangi oyun türü size en uygun? Ödül mekaniği nasıl olacak?" },
      { step: "02", title: "Tasarım", description: "Marka renkleri + karakterler + ses + ekran tasarımı." },
      { step: "03", title: "Geliştirme", description: "Web tabanlı oyun (link ile paylaşılır) veya uygulama içi modül." },
      { step: "04", title: "Lansman + Analiz", description: "Kampanya başlar, oynanma + dönüşüm raporlanır." }
    ],
    faqs: [
      { q: "Hangi tür markalara uygun?", a: "F&B, perakende, e-ticaret, etkinlik, online hizmet — kuponla satışa dönüştürülebilecek her sektör." },
      { q: "Müşteri nasıl ulaşır?", a: "Link ile — Instagram bio, WhatsApp paylaşımı, QR kod, e-posta. Uygulama indirmeye gerek yok, tarayıcıdan açılır." },
      { q: "Kupon nasıl yönetilir?", a: "Otomatik kod üretim + tek kullanım kilidi. Sizin mevcut sisteminizle entegre çalışır." },
      { q: "Sahtekarlığa karşı korumalı mı?", a: "Evet. Tek kullanım, IP limit, telefon doğrulaması seçenekleri var." }
    ]
  }
];

export const TONE_BG: Record<ServiceTone, string> = {
  yellow: "bg-brand-yellow",
  pink: "bg-brand-pink",
  blue: "bg-brand-blue",
  green: "bg-brand-green",
  orange: "bg-brand-orange",
  purple: "bg-brand-purple"
};

export const TONE_TEXT: Record<ServiceTone, string> = {
  yellow: "text-ink",
  pink: "text-paper",
  blue: "text-paper",
  green: "text-paper",
  orange: "text-paper",
  purple: "text-paper"
};

export interface NavGroup {
  slug: string;
  label: string;
  shortLabel: string;
  tagline: string;
  serviceSlugs: string[];
}

export const NAV_GROUPS: NavGroup[] = [
  {
    slug: "sosyal-medya-hizmetleri",
    label: "Sosyal Medya Hizmetleri",
    shortLabel: "Sosyal Medya Hizmetleri",
    tagline: "Markanı sosyal medyada büyüten içerik + reklam üretimi.",
    serviceSlugs: ["ai-video", "sosyal-medya"]
  },
  {
    slug: "ajans-hizmetleri",
    label: "Ajans Hizmetleri",
    shortLabel: "Ajans Hizmetleri",
    tagline: "İşletmenin altyapısını kuran sistemler — bot, otomasyon, web.",
    serviceSlugs: ["ai-bot", "otomasyon", "web-tasarim", "web-yazilim", "mobil-uygulama", "mobil-oyun"]
  }
];
