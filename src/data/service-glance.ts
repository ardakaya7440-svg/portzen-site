import type { CatalogCategory } from "./catalog";

/**
 * Hizmet sayfalarındaki "Kısaca" bloğu: kısa maddeler ve süreç adımları.
 * Maddeler sayfanın mevcut içeriğinden özetlenir; yeni vaat, sonuç veya süre iddiası eklenmez.
 */
export interface Glance {
  title: string;
  bullets: string[];
  stepsTitle?: string;
  steps?: { title: string; text: string }[];
}

export const DEFAULT_STEPS: Record<CatalogCategory, { title: string; text: string }[]> = {
  "sosyal-medya": [
    { title: "Tanışma", text: "Hedefleri, hesapları ve markanızın dilini konuşuruz." },
    { title: "Plan", text: "Aylık içerik planı hazırlanır, sizin onayınıza sunulur." },
    { title: "Üretim", text: "Tasarım ve videolar üretilir; onaydan sonra paylaşılır." },
    { title: "Rapor", text: "Ay sonunda ne yapıldığını ve sonraki adımları paylaşırız." }
  ],
  "ai-otomasyon": [
    { title: "İhtiyaç", text: "Hangi soruların, hangi işlerin otomatikleşeceğini belirleriz." },
    { title: "Akış", text: "Yanıtlar, kurallar ve ekibe aktarım noktaları tasarlanır." },
    { title: "Kurulum ve test", text: "Sistem kurulur, gerçek örneklerle birlikte test edilir." },
    { title: "Yayın ve takip", text: "Canlıya alınır; ilk haftalarda birlikte iyileştiririz." }
  ],
  "web-yazilim": [
    { title: "Kapsam", text: "Sayfalar, özellikler ve entegrasyonlar yazılı teklifte netleşir." },
    { title: "Tasarım", text: "Ekranlar tasarlanır, onayınızdan sonra geliştirmeye geçilir." },
    { title: "Geliştirme ve test", text: "Kodlanır, farklı cihazlarda test edilir." },
    { title: "Yayın", text: "Yayına alınır; teslim sonrası destek kapsamı teklifte yazılıdır." }
  ]
};

export const SERVICE_GLANCE: Record<string, Glance> = {
  // ── Sosyal medya ve içerik ──
  "/sosyal-medya-yonetimi": {
    title: "Planı biz hazırlarız, siz onaylarsınız, biz üretip yayınlarız.",
    bullets: [
      "Aylık içerik takvimi; onay panelinden baştan sonra görülür",
      "Görsel tasarım ve kısa video üretimi; adetler pakete göre değişir",
      "Pakete göre 1–5 kanal: Instagram, Facebook, TikTok, LinkedIn, YouTube Shorts",
      "Yorum ve DM kontrolü (Büyüme ve Kurumsal) ve aylık 8 metrikli rapor"
    ]
  },
  "/sosyal-medya-viral-video": {
    title: "Algoritma sinyallerine göre kurgulanan kısa videolar.",
    bullets: [
      "Reels, TikTok ve YouTube Shorts için dikey kurgu",
      "İlk 3 saniye hook ile kurgulanır; ses trend ve lisans durumuna göre seçilir",
      "Before/After, POV, eğitim gibi formatlardan sektörünüze uygun olanlar",
      "Yayın saati hesabınızın Insights verisine göre planlanır"
    ],
    steps: [
      { title: "Brief", text: "Markanızı, hedefinizi ve kullanılacak çekimleri konuşuruz." },
      { title: "Hook ve format", text: "İlk 3 saniye ve sektörünüze uygun format belirlenir." },
      { title: "Kurgu", text: "Çekimleriniz ve AI üretimiyle; ses, altyazı ve kesim ritmi kurulur." },
      { title: "Yayın", text: "Yayın saati hesabınızın verisine göre planlanır." },
      { title: "Takip", text: "İzlenme, kaydetme ve yorum sinyallerine göre sonraki videolar kurgulanır." }
    ]
  },
  "/yapay-zeka-video-uretimi": {
    title: "Çekim ekibi ve lokasyon olmadan, markanıza özel video.",
    bullets: [
      "Çekim ekibi, lokasyon kirası ve oyuncu ajansı gerekmez",
      "UGC tarzı reklam, ürün tanıtımı, hizmet anlatımı ve brand film",
      "AI seslendirme tüm paketlerde dahil",
      "9:16, 1:1 ve 16:9 oranları; teslim edilen oran sayısı pakete göre değişir"
    ],
    steps: [
      { title: "Keşif", text: "Markanızı ve videonun amacını kısa bir görüşmede konuşuruz." },
      { title: "Brief", text: "Brief formu ve kullanılacak görsel, logo listesi hazırlanır." },
      { title: "Üretim", text: "Sahnenin ihtiyacına göre AI motorları seçilir; seslendirme ve kurgu yapılır." },
      { title: "Önizleme", text: "Önizleme paylaşılır; revizyon kapsamı teklifte yazılıdır." },
      { title: "Teslim", text: "Video dosyaları ve kaynak dosyalar teslim edilir." }
    ]
  },
  "/meta-reklam-ajansi": {
    title: "Facebook ve Instagram reklamları, ölçerek ve test ederek yönetilir.",
    bullets: [
      "E-ticarette ROAS, hizmet sektöründe CPA odaklı kampanya yönetimi",
      "Pixel + Conversions API kurulumu ve olay testi dahil",
      "AI destekli kreatif varyantlar düzenli A/B testine girer",
      "Reklam bütçesi ayrıdır, doğrudan platforma ödenir; reklam hesabı size aittir"
    ],
    steps: [
      { title: "Audit", text: "Mevcut hesap ve kurulum incelenir; hedef ROAS veya CPA birlikte belirlenir." },
      { title: "Teknik kurulum", text: "Pixel, Conversions API ve Domain Verification kurulup test edilir." },
      { title: "Kampanya", text: "Funnel'a göre kampanya yapısı, hedef kitleler ve kreatifler hazırlanır." },
      { title: "Test", text: "Kreatif varyantlar test edilir, kazanan kreatif ölçeklenir." },
      { title: "Rapor", text: "Haftalık dashboard ve aylık rapor; bir sonraki ayın planı dahil." }
    ]
  },

  // ── AI ve otomasyon ──
  "/whatsapp-ai-asistani": {
    title: "WhatsApp mesajlarına otomatik yanıt veren yapay zeka asistanı.",
    bullets: [
      "Gelen mesajlara otomatik ilk yanıt; gece ve hafta sonu da",
      "Menü, fiyat listesi ve kampanyalar tek panelden güncellenir",
      "Karmaşık veya hassas konuşmalar ekibinize devredilir",
      "Meta'nın resmi WhatsApp Business API'si; numaranız aynı kalır"
    ],
    stepsTitle: "Bir mesaj geldiğinde",
    steps: [
      { title: "Mesaj gelir", text: "Müşteri WhatsApp'tan yazar; mesai dışında da olabilir." },
      { title: "Asistan yanıtlar", text: "Bilgi tabanına eklenen bilgilerle yanıt verir." },
      { title: "Talep kaydedilir", text: "Randevu talebi takvime düşer (Büyüme ve Kurumsal paketlerde)." },
      { title: "Ekibe devreder", text: "Yanıt veremeyeceği veya hassas durumları ekibinize devreder." }
    ]
  },
  "/ai-chatbot-turkce": {
    title: "Sitenizdeki ziyaretçi sorularını doğal Türkçeyle yanıtlayan asistan.",
    bullets: [
      "Doğal Türkçe yanıt; markanızın tonuna göre sen veya siz",
      "Sektör terimleriniz ve sık sorulan sorularınız bilgi tabanına yüklenir",
      "Aydınlatma, açık rıza ve anonim mod KVKK gereklilikleri dikkate alınarak kurulur",
      "Web sitesi, WhatsApp ve Instagram tek bilgi tabanıyla; kanallar pakete göre"
    ],
    stepsTitle: "Bir ziyaretçi yazdığında",
    steps: [
      { title: "Soru gelir", text: "Ziyaretçi sitenizdeki sohbet penceresinden sorusunu yazar." },
      { title: "Türkçe yanıt", text: "Asistan bilgi tabanındaki bilgilerle, markanızın tonunda yanıt verir." },
      { title: "Hassas soru", text: "Anonim modda kişisel veri sormadan genel bilgi verir." },
      { title: "Ekibe devir", text: "Gerektiğinde, örneğin randevu aşamasında, konuşma ekibinize devredilir." }
    ]
  },
  "/instagram-dm-otomasyonu": {
    title: "Instagram etkileşimlerine anahtar kelimeye göre otomatik DM.",
    bullets: [
      "DM, hikâye yanıtı, yorum ve reklam sohbetlerine otomatik ilk mesaj",
      "'Fiyat', 'kargo', 'beden' gibi anahtar kelimelere göre farklı akışlar",
      "Kural tabanlıdır; serbest sorulara AI yanıtı ayrı bir hizmettir",
      "Meta'nın resmi Messenger Platform API'si üzerinden çalışır"
    ],
    stepsTitle: "Bir DM geldiğinde",
    steps: [
      { title: "Etkileşim gelir", text: "DM, hikâye yanıtı, post yorumu veya reklamdan gelen sohbet." },
      { title: "Kelime eşleşir", text: "Tanımlı anahtar kelimeye göre ilgili akış tetiklenir." },
      { title: "Hazır mesaj gider", text: "Markanızın tonunda önceden yazılmış mesaj otomatik gönderilir." },
      { title: "İnsana devir", text: "Eşleşmeyen serbest sorular ve hassas konular ekibinize kalır." }
    ]
  },
  "/yapay-zeka-call-center": {
    title: "Gelen aramaları Türkçe karşılayan sesli AI asistanı.",
    bullets: [
      "Gelen çağrıları Türkçe karşılar; 7/24 çalışır",
      "Randevu açar, sipariş alır, fiyat ve ürün bilgisi verir",
      "Hassas durumlarda çağrıyı ekibinize aktarır veya geri arama listesine ekler",
      "Mevcut numaranıza bağlanabilir ya da yeni bir Türkiye numarası alınabilir"
    ],
    stepsTitle: "Bir çağrı geldiğinde",
    steps: [
      { title: "Çağrı karşılanır", text: "Asistan arayanı Türkçe selamlar; gerekiyorsa aydınlatma metni oynatılır." },
      { title: "Konu anlaşılır", text: "Arayanı dinler, gerekli soruları sorar, bilgi tabanından yanıt verir." },
      { title: "İşlem kaydedilir", text: "Randevu, sipariş veya talep takvime ya da CRM'e yazılır." },
      { title: "Ekibe aktarılır", text: "Hassas veya karmaşık durumda çağrı ekibinize aktarılır." }
    ]
  },
  "/crm-otomasyonu": {
    title: "Lead takibini ve tekrar eden işleri otomatikleştiren akışlar.",
    bullets: [
      "Formdan, DM'den ve WhatsApp'tan gelen lead'ler otomatik olarak CRM'e düşer",
      "WhatsApp ve e-posta ile otomatik karşılama ve takip dizileri",
      "HubSpot, Pipedrive, Notion, Google Sheets gibi mevcut araçlarınızla çalışır",
      "Veriler size ait sistemlerde kalır; kurulum tek seferlik, bakım isteğe bağlı"
    ],
    stepsTitle: "Bir lead geldiğinde",
    steps: [
      { title: "Lead gelir", text: "Form, landing, Instagram DM veya WhatsApp'tan gelen lead CRM'e düşer." },
      { title: "Etiketlenir", text: "Kaynağa göre etiketlenir ve satıcıya atanır." },
      { title: "Karşılama", text: "WhatsApp ve e-posta karşılama mesajı otomatik gider." },
      { title: "Takip", text: "Isıtma dizisi ve takip hatırlatmaları başlar; satıcıya bildirim gider." },
      { title: "Rapor", text: "Hangi kaynağın lead getirdiği tek panelden izlenir." }
    ]
  },

  // ── Web ve yazılım ──
  "/web-tasarim": {
    title: "Mobil uyumlu, hızlı yüklenen, markanıza uygun web sitesi.",
    bullets: [
      "Kurumsal site, landing page ve e-ticaret; mobil öncelikli tasarım",
      "WordPress değil, Next.js + React ile geliştirilir",
      "Her projede Lighthouse 90+ hedefi ve temel SEO",
      "Tasarım, paketinize göre markanıza uyarlanır veya tamamen özel yapılır"
    ]
  },
  "/hizmetler/web-yazilim": {
    title: "İşletmenize özel kodlanmış panel, dashboard ve sistemler.",
    bullets: [
      "Müşteri paneli, çalışan dashboard'u, sipariş takibi, randevu sistemi",
      "Hazır şablonla çözülemeyen ihtiyaçlar için sıfırdan yazılım",
      "Mevcut sistemlerinizi birbirine bağlayan entegrasyonlar",
      "Kaynak kod size teslim edilir; süre ve bakım kapsamı teklifte yazılıdır"
    ]
  },
  "/hizmetler/mobil-uygulama": {
    title: "İşletmenize özel iOS ve Android uygulaması.",
    bullets: [
      "Sipariş, randevu, sadakat programı ve bildirim gibi özellikler",
      "Tek kod tabanından iOS ve Android için hibrit geliştirme",
      "App Store ve Google Play için; mağaza hesap ücretleri ayrıdır",
      "Güncelleme ve bakım kapsamı teklifte yazılıdır"
    ]
  },
  "/hizmetler/mobil-oyun": {
    title: "Markanıza özel, kupon kazandıran mini oyun.",
    bullets: [
      "Çark, kart eşleştirme, hızlı tıkla gibi markaya özel temalı oyunlar",
      "Uygulama indirmeden, linkle tarayıcıdan oynanır",
      "Tek kullanımlık kupon kodu üretimi",
      "Instagram bio, WhatsApp, QR kod veya e-postayla paylaşılabilir"
    ]
  }
};
