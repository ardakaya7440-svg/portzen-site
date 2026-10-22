import { familyPriceSummary } from "@/data/pricing";
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
    tagline: "Çekim ekibi yok, stüdyo yok — teslim süresi teklifte yazılı.",
    href: "/yapay-zeka-video-uretimi",
    explainer:
      "Bir kamera ekibi, kameraman, oyuncu kiralamak yerine — biz yapay zekaya \"şu sektör için şöyle bir sahne çek\" diyip tamamlanmış reklam videosunu sana teslim ediyoruz; teslim süresi kapsama göre teklifte yazılı olarak belirtilir. Stüdyo kirası yok, oyuncu maaşı yok, tekrar çekim yok. Sahneler minyatür, sinematik veya samimi sözcü tarzında olur.",
    operationRole:
      "Pazarlama ekibinin yerine geçer. Sosyal medya yöneticin haftada 1-2 reklam videosuna ihtiyaç duyuyorsa, biz paketine göre her ay düzenli video üretiriz.",
    workloadStats: [
      { metric: "Proje", label: "Proje bazlı paket fiyatı" },
      { metric: "₺0", label: "Stüdyo + oyuncu + mekan maliyeti" },
      { metric: "AI ses", label: "Seslendirme tüm paketlerde dahil" }
    ],
    useCases: [
      "Eczane için minyatür sahne reklam — sosyal medyada paylaşılır",
      "Hukuk bürosu için kurumsal anlatım videosu — sayfaya pinlenir",
      "Restoran için ürün ve atmosfer reklamı — sipariş kanallarında kullanılır",
      "İnşaat firması için sinematik proje tanıtım videosu"
    ],
    subServices: [
      { title: "Sektörel Kısa Video", href: "/yapay-zeka-video-uretimi#reels", description: "Eczane, hukuk, inşaat için minyatür sahne reklamlar — 15-30 saniye." },
      { title: "Marka Tanıtım Videosu", href: "/yapay-zeka-video-uretimi#brand", description: "Sözcü + sahne geçişli markaya özel anlatım — 30-45 saniye." },
      { title: "Yapay Zeka Influencer'lar", href: "/yapay-zeka-video-uretimi#ugc", description: "Markaya özel AI avatar — sosyal medyada yüzünüz olur, müşteri yorumu samimiyetinde içerik üretir." },
      { title: "Reklam Setleri", href: "/yapay-zeka-video-uretimi#ads", description: "Sosyal medya reklamları için varyantlı reklam setleri — kapsam teklifte belirlenir." }
    ],
    process: [
      { step: "01", title: "Brief", description: "30 dakikalık görüşme — sektör, mesaj, hedef kitle, ton birlikte belirlenir." },
      { step: "02", title: "Senaryo", description: "3-5 sahne taslağı sunulur — onay alıp ilerleriz." },
      { step: "03", title: "Üretim", description: "Yapay zeka modelleriyle sahneler hazırlanır — sen sadece beklersin." },
      { step: "04", title: "Edit + Teslim", description: "Türkçe altyazı + marka logosu + müzik eklenir; teslim süresi teklifte yazılı olarak belirtilir." }
    ],
    faqs: [
      { q: "Gerçek oyuncu veya kameraman kullanmıyor musunuz?", a: "Hayır. Sahnenin hepsi yapay zeka ile üretilir. Bu sayede çekim, ekip ve stüdyo masrafı tamamen kalkar." },
      { q: "Bir video kaç para?", a: "AI reklam filmi fiyatları proje başına yazılıdır (KDV hariç); paketler süre, sahne ve format sayısına göre ayrılır. Güncel tutarlar hizmet sayfasındaki fiyat kartlarında yer alır." },
      { q: "Kaç revize hakkım var?", a: "Revizyon kapsamı teklifte yazılı olarak belirtilir. Senaryo onaylanınca büyük dönüşler nadir olur." },
      { q: "Hangi formatlarda teslim alıyorum?", a: "Dikey (kısa video), kare (sosyal medya feed) ve yatay (YouTube). Format sayısı pakete göre değişir; üçünün birlikte teslimi Kurumsal pakette yer alır." }
    ]
  },
  {
    slug: "ai-bot",
    title: "AI Bot Kurulumu",
    shortTitle: "AI Bot",
    icon: MessageSquare,
    tone: "green",
    tagline: "WhatsApp, web sitesi, Instagram — müşteriyi otomatik karşılayan asistan.",
    href: "/whatsapp-ai-asistani",
    explainer:
      "Bir müşteri \"yarın saat 17:00'da randevu var mı?\" diye yazdığında, normalde bir personelin görüp cevaplaması saatler sürer. Biz bunun yerine yapay zeka destekli bir asistan kuruyoruz: müşteriye otomatik yanıt verir, randevu açar, fiyat bilgisi verir, ilgili müşteriyi kayıt defterine düşürür. WhatsApp, web sitesi veya Instagram — kanal sayısı pakete göre değişir, Instagram Kurumsal pakette.",
    operationRole:
      "Müşteri hizmetleri ekibinin önüne geçer. Personelin sadece sıcak ve karmaşık konuşmaları görmesini sağlar — basit soruları bot halleder.",
    workloadStats: [
      { metric: "Otomatik", label: "Gelen mesajlara ilk yanıt" },
      { metric: "WhatsApp + web", label: "Kanal (Instagram Kurumsal pakette)" },
      { metric: "İnsan devri", label: "Karmaşık konuşmalar ekibe aktarılır" }
    ],
    useCases: [
      "Klinik: tedavi türü + bütçe bilgisi alır → randevu açar",
      "Restoran: rezervasyon + masa tercihi + alerji notu alır",
      "Emlak: bütçe + lokasyon sorar → portföyden eşleştirir",
      "E-ticaret: sipariş takibi + iade süreci + ürün önerisi yapar"
    ],
    subServices: [
      { title: "WhatsApp Asistanı", href: "/whatsapp-ai-asistani#whatsapp", description: "Türkiye'de en yaygın mesajlaşma platformlarından biri — profesyonel kurulum." },
      { title: "Web Sitesi Asistanı", href: "/whatsapp-ai-asistani#web", description: "Sitenizdeki ziyaretçiyi karşılar, sık soruları yanıtlar, bilgi toplar." },
      { title: "Instagram DM Asistanı", href: "/whatsapp-ai-asistani#instagram", description: "DM'ye düşen ilgili kişileri AI ile karşılar, randevu açar. Instagram kanalı AI müşteri asistanının Kurumsal paketinde; yorum ve hikâyeye kural tabanlı otomatik DM ayrı hizmettir (Instagram DM otomasyonu)." },
      { title: "Çoklu Platform Müşteri Hizmetleri", href: "/whatsapp-ai-asistani#multi", description: "WhatsApp + web + Instagram tek panelden yönetilir (Kurumsal paket)." }
    ],
    process: [
      { step: "01", title: "Persona", description: "Asistanın nasıl konuşacağını birlikte belirleriz — samimi mi, kurumsal mı?" },
      { step: "02", title: "Bilgi Tabanı", description: "Sektör + fiyatlar + sıkça sorulanlar + portföyünü asistana öğretiriz." },
      { step: "03", title: "Entegrasyon", description: "Takvim, kayıt defteri ve diğer sistemlerine bağlanır." },
      { step: "04", title: "Test + Canlı", description: "Test → uç durumlar düzeltilir → canlıya alınır." }
    ],
    faqs: [
      { q: "Asistan gerçek insan gibi konuşuyor mu?", a: "Sektörel persona ile eğittiğimiz için doğal bir dil hedeflenir. Yine de asistanın yapay zeka olduğunu baştan belirtmenizi öneririz." },
      { q: "Personelimin işi bitiyor mu?", a: "Hayır. Asistan basit soruları ve ilgili leadleri halleder — personel sıcak ve karmaşık konuşmalara odaklanır." },
      { q: "Hangi sektörlerde kullanılıyor?", a: "Klinik, restoran, emlak, e-ticaret, eğitim, hukuk, kişisel marka — müşteri ile yazılı iletişim kuran her sektör." },
      { q: "Kurulum süresi?", a: "Teslim süresi kapsama göre teklifte yazılı olarak belirtilir. Süreç brief + persona + bilgi tabanı ile başlar, ardından entegrasyon + test gelir." }
    ]
  },
  {
    slug: "otomasyon",
    title: "Otomasyon Sistemleri",
    shortTitle: "Otomasyon",
    icon: Workflow,
    tone: "blue",
    tagline: "Tekrarlı manuel işleri otomatik akışlara dönüştüren altyapı.",
    href: "/crm-otomasyonu",
    explainer:
      "Her gün tekrar tekrar yaptığın işleri — formdan gelen veriyi kayıt defterine yazmak, müşteriye e-posta yollamak, faturayı muhasebeye atmak — biz otomatik iş akışlarına dönüştürüyoruz. Gece 03:00'te bile çalışır; sen sabah uyandığında işler hallolmuş olur.",
    operationRole:
      "Operasyon yöneticinin yerine — bilmediğin işleri sessizce yapar. Personelinin tekrarlı işlerini otomatik akışlara taşır.",
    workloadStats: [
      { metric: "Tek seferlik", label: "Kurulum + isteğe bağlı bakım" },
      { metric: "Otomatik", label: "Form ve DM'den kayıt defterine aktarım" },
      { metric: "7/24", label: "Çalışır — uyumaz, hastalanmaz, izine çıkmaz" }
    ],
    useCases: [
      "Instagram DM → AI müşteri asistanı ile ön eleme (ayrı hizmet) → kayıt defteri → WhatsApp takibi",
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
      { step: "03", title: "Kurulum + Test", description: "İş akışı canlıya alınır ve ilk dönemde gözlem altında tutulur; ilk 30 gün kurulum hatalarının giderilmesi dahildir." },
      { step: "04", title: "Eğitim + Devir", description: "Büyüme ve Kurumsal paketlerde ekip eğitimi dahil — istersen isteğe bağlı aylık bakımla biz bakarız." }
    ],
    faqs: [
      { q: "Teknik bilgi gerekli mi?", a: "Sen kullanmayacaksın — biz kuruyoruz, sen sadece sonucunu görüyorsun. İstersen sistemi sana öğretiriz; ekip eğitimi Büyüme ve Kurumsal paketlerde dahildir." },
      { q: "Diğer otomasyon araçlarından farkı ne?", a: "Daha ekonomik, daha esnek, daha güvenli. Verilerin senin kontrolünde kalır." },
      { q: "Hangi araçlara bağlanıyor?", a: "300+ servise: kayıt defterleri, ödeme sistemleri, mesajlaşma uygulamaları, e-posta servisleri ve daha fazlası. Pakete dahil bağlanan uygulama sayısı her pakette yazılıdır." },
      { q: "Ortalama kaç iş akışı kuruyorsunuz?", a: "İş akışı sayısı her pakette yazılıdır ve kurulum tek seferliktir; en fazla iş akışı Kurumsal pakette yer alır. Çoğu müşteri birkaç temel iş akışıyla başlar." }
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
      "Senin yerine Instagram, TikTok, LinkedIn için pakete göre her ay planlı kısa video, görsel set ve hikaye üretiyoruz. Markanın diline, sektörüne ve hedef kitlene uygun planlanmış aylık takvim — sen sadece onay veriyorsun, biz yayınlıyoruz. \"Bugün ne paylaşsam\" derdi tamamen kalkar.",
    operationRole:
      "Sosyal medya yöneticisinin yerine geçer. Pakete göre her ay belirli sayıda özgün içerik, video ve Story uyarlaması elde edersin; en yüksek adet Kurumsal pakette.",
    workloadStats: [
      { metric: "Aylık", label: "Pakete göre özgün içerik planı (video + tasarım + Story)" },
      { metric: "Aylık rapor", label: "Erişim, etkileşim ve takipçi takibi" },
      { metric: "Onay", label: "Sen onaylarsın, biz yayına alırız" }
    ],
    useCases: [
      "Estetik klinik: aylık kısa video planı + her hafta görsel set",
      "Online koç: kişisel marka odaklı içerik + hikaye takvimi",
      "E-ticaret: ürün showcase video + reklam görselleri",
      "Restoran: menü hikayeleri + düzenli atmosfer videosu"
    ],
    subServices: [
      { title: "Kısa Video Üretimi", href: "/sosyal-medya-yonetimi#reels", description: "Pakete göre aylık yapay zeka destekli video — platforma ve hedef kitleye uygun format." },
      { title: "Görsel Set Tasarımı", href: "/sosyal-medya-yonetimi#carousel", description: "Eğitici + satış odaklı 10 slayt set — kaydedilmeye ve paylaşılmaya uygun format." },
      { title: "Hikaye Şablonu", href: "/sosyal-medya-yonetimi#story", description: "Markaya özel haftalık hikaye takvimi + etkileşim stratejisi." },
      { title: "Reklam Görseli", href: "/sosyal-medya-yonetimi#ad", description: "Sosyal medya reklamları için varyantlı tasarım paketi." }
    ],
    process: [
      { step: "01", title: "Strateji", description: "Hedef kitle + ana konular + ton + haftalık takvim çıkarılır." },
      { step: "02", title: "Üretim", description: "Yapay zeka + manuel tasarım karması — paketindeki aylık içerikler haftalık takvimle hazırlanır." },
      { step: "03", title: "Onay + Yayın", description: "Sen onaylarsın → biz planlı yayına alırız → otomatik paylaşım." },
      { step: "04", title: "Aylık Rapor", description: "Erişim, etkileşim, takipçi büyümesi → bir sonraki ay optimize." }
    ],
    faqs: [
      { q: "Aylık paket ne kadar?", a: `Sosyal medya yönetimi aylık, KDV hariç: ${familyPriceSummary("sosyal-medya")}.` },
      { q: "Sen mi yayınlıyorsun, biz mi?", a: "İkisi de mümkün. Genelde biz planlı yayına alıyoruz, sen sadece onay veriyorsun. İstersen sen yayınlarsın." },
      { q: "İçerik stilini biz mi siz mi belirliyoruz?", a: "Birlikte. İlk hafta brief'te markanın tonu, görsel dili ve sınırları netleştirilir. Sonrasında biz üretiriz, sen onaylarsın." },
      { q: "Sonuç garantisi veriyor musunuz?", a: "Belli bir büyüme oranı garantileyemiyoruz çünkü içerik kalitesi + tutarlılık + zaman birleşik etki. Bunun yerine her ay aynı metriklerle rapor paylaşır, bir sonraki ayı bu verilere göre planlarız." }
    ]
  },
  {
    slug: "web-tasarim",
    title: "Web Tasarım Hizmetleri",
    shortTitle: "Web Tasarım",
    icon: Globe,
    tone: "orange",
    tagline: "Hızlı, mobil uyumlu, satış odaklı — markana uyarlanan site.",
    href: "/web-tasarim",
    explainer:
      "Hazır şablonlu sitelerden farklı — markana uyarlanmış, hızlı yüklenen (Lighthouse 90+ hedefi), telefonda da kusursuz çalışan modern bir web sitesi. İletişim formu her pakette dahildir; WhatsApp bildirimi veya müşteri kaydı entegrasyonu Kurumsal pakette standart entegrasyon olarak kurulur. Sadece görünmek için değil — satmak için kurulur.",
    operationRole:
      "Pazarlama altyapının kalbinde durur. Reklamlar buraya gelir, lead formu burada doldurulur, satış buradan başlar.",
    workloadStats: [
      { metric: "90+", label: "Lighthouse performans hedefi" },
      { metric: "Mobil", label: "Öncelikli tasarım" },
      { metric: "Yazılı", label: "Paket fiyatı; teslim süresi teklifte" }
    ],
    useCases: [
      "Tek sayfa satış sitesi — reklam trafiği toplama",
      "5-10 sayfalık kurumsal site + blog bölümü",
      "Online mağaza — sepet, ödeme, stok yönetimi dahil",
      "Üyelikli platform — kullanıcı girişi + panel + ödeme"
    ],
    subServices: [
      { title: "Satış Sayfası", href: "/web-tasarim#landing", description: "Tek sayfa dönüşüm odaklı satış sitesi — reklam buraya çekilir." },
      { title: "Kurumsal Site", href: "/web-tasarim#kurumsal", description: "Marka anlatımı + iletişim formu; sayfa sayısı pakete göre, blog Büyüme paketinde." },
      { title: "Online Mağaza", href: "/web-tasarim#eticaret", description: "Sepet + ödeme + stok yönetimi — büyümeye hazır altyapı." },
      { title: "Üyelikli Platform", href: "/web-tasarim#app", description: "Kullanıcı girişi + özel panel + ödeme entegrasyonu." }
    ],
    process: [
      { step: "01", title: "Brief", description: "Hedef, kitle, içerik mimarisi belirlenir. Sayfa haritası çıkar." },
      { step: "02", title: "Tasarım", description: "Yüksek detaylı görsel tasarım — onay turları teklifte yazılı olarak belirtilir." },
      { step: "03", title: "Geliştirme", description: "Site kodlanır. Kurumsal pakette WhatsApp bildirimi veya müşteri kaydı gibi standart entegrasyonlar kurulur." },
      { step: "04", title: "Lansman", description: "Domain bağlanır. Arama motoru ayarları yapılır. Site canlıya alınır; teslim süresi teklifte yazılı olarak belirtilir." }
    ],
    faqs: [
      { q: "Hazır şablonlardan farkı ne?", a: "Hazır şablonlar yavaş ve güvenlik açıkları olur. Sana özel kodlanmış site çok daha hızlı, güvenli ve markaya uygundur." },
      { q: "İçerik yönetimini ben yapabilir miyim?", a: "Büyüme ve Kurumsal paketlerde kullanması kolay bir CMS paneli kurarız — sen yazılı içeriği kendin yönetirsin. Başlangıç paketinde güncellemeler aylık Web bakım hizmetiyle yapılır." },
      { q: "Arama motoru optimizasyonuna iyi mi?", a: "Hızlı ve doğru yapılandırılmış site Google'da daha iyi değerlendirilir. Lighthouse performans skorunda 90+ hedefliyoruz." },
      { q: "Form gönderildiğinde ne olur?", a: "Form her pakette size e-posta ile ulaşır. WhatsApp bildirimi veya müşteri kayıt sistemine aktarım gibi entegrasyonlar Kurumsal pakette standart entegrasyon olarak yer alır; diğer paketlerde ayrıca tekliflendirilir." }
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
      { metric: "Size özel", label: "Kaynak kod teslim edilir" },
      { metric: "Teklifte", label: "Proje süresi kapsama göre yazılı" },
      { metric: "0", label: "PORTZEN lisans ücreti (sunucu ve üçüncü taraf servisler hariç)" }
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
      { step: "04", title: "Lansman + Destek", description: "Canlıya alınır, eğitim verilir; destek ve bakım kapsamı teklifte yazılı olarak belirtilir." }
    ],
    faqs: [
      { q: "Hazır yazılımdan farkı ne?", a: "Hazır yazılımlar sizin işinize göre değil — siz onların kalıbına göre çalışmak zorundasınız. Özel yazılımda sistem size uyar." },
      { q: "Ne kadar sürer?", a: "Süre kapsama göre teklifte yazılı olarak belirtilir; küçük bir panel, orta ölçekli bir yazılıma veya karmaşık bir platforma göre daha kısa sürer." },
      { q: "Bakım nasıl yapılıyor?", a: "Bakım kapsamı (küçük düzenlemeler, güvenlik güncellemeleri, performans takibi) teklifte yazılı olarak belirtilir." },
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
      { metric: "Push", label: "Bildirimle doğrudan erişim" },
      { metric: "Teklifte", label: "Lansman süresi kapsama göre yazılı" },
      { metric: "iOS + Android", label: "Tek üretimle iki platformda" }
    ],
    useCases: [
      "Restoran: sipariş + sadakat puanı + bildirim kampanyası",
      "Spor salonu: ders rezervasyonu + ödeme + üyelik",
      "Berber/kuaför: randevu + kuyruğa gir + tercihler",
      "Mağaza: stok kontrol + kupon + bildirim"
    ],
    subServices: [
      { title: "Sipariş & Randevu Uygulaması", href: "/hizmetler/mobil-uygulama#siparis", description: "Müşteri sipariş açar, sen anlık bildirim alırsın — telefonla gelen siparişler uygulamaya taşınır." },
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
      { q: "Güncelleme nasıl olur?", a: "Küçük güncellemelerin bakım kapsamı teklifte yazılı olarak belirtilir. Büyük yeni özellikler ayrı brief'le." },
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
      { metric: "Link", label: "Uygulama indirmeden tarayıcıdan oynanır" },
      { metric: "Kupon", label: "Tek kullanımlık kod üretimi" },
      { metric: "Teklifte", label: "Lansman süresi kapsama göre yazılı" }
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
      { title: "Sosyal Yarışma", href: "/hizmetler/mobil-oyun#sosyal", description: "Liderlik tablosu + arkadaş davet — paylaşım odaklı mekanik." }
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
  yellow: "bg-white",
  pink: "bg-white",
  blue: "bg-white",
  green: "bg-white",
  orange: "bg-white",
  purple: "bg-white"
};

export const TONE_TEXT: Record<ServiceTone, string> = {
  yellow: "text-ink",
  pink: "text-ink",
  blue: "text-ink",
  green: "text-ink",
  orange: "text-ink",
  purple: "text-ink"
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
