export type ServiceContent = {
  slug: string;
  href: string;
  shortTitle: string;
  title: string;
  description: string;
  seoTitle: string;
  metaDescription: string;
  heroTitle: string;
  heroDescription: string;
  targetAudience: string[];
  problems: string[];
  solution: string;
  benefits: string[];
  process: string[];
  ctaTitle: string;
  ctaDescription: string;
};

export const serviceContents: ServiceContent[] = [
  {
    slug: "otomasyon-danismanligi",
    href: "/hizmetler/otomasyon-danismanligi",
    shortTitle: "AI Büyüme Danışmanlığı",
    title: "AI Büyüme Danışmanlığı",
    description:
      "İşletmeniz için en yüksek büyüme etkisi yaratacak sistemi belirleyen; web sitesi, sosyal medya ve otomasyon stratejisi danışmanlığı.",
    seoTitle: "AI Büyüme Danışmanlığı | Web Sitesi, Sosyal Medya ve Otomasyon Stratejisi",
    metaDescription:
      "Büyüme hedefiniz için doğru sistemi kurmadan önce nereden başlayacağınızı netleştiren AI odaklı büyüme danışmanlığı.",
    heroTitle: "Doğru Sistemi Kurmadan Önce Doğru Soruları Soralım",
    heroDescription:
      "Web sitesi mi, sosyal medya mı, otomasyon mu? Her işletme için cevap farklı. Size en hızlı büyümeyi getirecek sistemi birlikte belirleyelim.",
    targetAudience: [
      "Nereye odaklanacağını bilemeyen işletmeler",
      "Dijital varlığını büyüme motoruna çevirmek isteyenler",
      "Web sitesi, sosyal medya ve otomasyon üçlüsünde strateji arayanlar"
    ],
    problems: [
      "Her kanal önemli görünür ama hangisinden başlanacağı belirsizdir",
      "Yanlış öncelikler bütçe ve zaman kaybına yol açar",
      "Sistemsiz büyüme girişimleri ölçeklenmez"
    ],
    solution:
      "Mevcut dijital varlığınızı, hedef kitlenizi ve büyüme potansiyelinizi analiz ederek en yüksek etkiyi yaratacak sistemi ve uygulama sırasını belirleriz.",
    benefits: [
      "Net bir başlangıç noktası",
      "Ölçeklenebilir büyüme yol haritası",
      "Bütçenin doğru alana ayrılması",
      "Daha hızlı karar alma süreci"
    ],
    process: [
      "Mevcut dijital varlığı analiz ederiz",
      "Büyüme fırsatlarını belirleriz",
      "Öncelik sırasını çıkarırız",
      "Uygulama planını teslim ederiz"
    ],
    ctaTitle: "İşletmeniz İçin Doğru Büyüme Sistemini Belirleyelim",
    ctaDescription:
      "Web sitesi, sosyal medya ve otomasyon üçlüsünde hangisinin size en hızlı büyümeyi getireceğini birlikte netleştirelim."
  },
  {
    slug: "is-surecleri-otomasyonu",
    href: "/hizmetler/is-surecleri-otomasyonu",
    shortTitle: "n8n İş Akışı Otomasyonu",
    title: "n8n İş Akışı Otomasyonları",
    description:
      "Instagram DM, form yanıtları, CRM kayıtları ve tekrarlayan işleri n8n ile otomatize eden; size zaman ve müşteri kazandıran sistem.",
    seoTitle: "n8n İş Akışı Otomasyonu | DM, Form ve CRM Otomasyonları",
    metaDescription:
      "Instagram DM, form yanıtları ve CRM süreçlerini n8n ile otomatize ederek manuel iş yükünü sıfıra indirin.",
    heroTitle: "Tekrarlayan İşler Sizin Yerinize Çalışsın",
    heroDescription:
      "Instagram'dan gelen DM, web formundan gelen başvuru, randevu hatırlatması — bunların hepsi n8n ile otomatik çalışabilir. Siz asıl işinize odaklanın.",
    targetAudience: [
      "Instagram DM ve form yanıtlarını manuel yöneten işletmeler",
      "CRM ve müşteri takibini elle yapan ekipler",
      "Tekrarlayan operasyon yükünü azaltmak isteyenler"
    ],
    problems: [
      "Gelen mesaj ve başvurular zamanında yanıtlanamıyor",
      "CRM kayıtları manuel tutulduğu için eksik kalıyor",
      "Ekip tekrarlayan işlerle vakit kaybediyor"
    ],
    solution:
      "n8n ile iş akışlarınızı otomatize eder; DM yanıtları, form bildirimleri, CRM kayıtları ve raporları sisteme bağlarız.",
    benefits: [
      "7/24 otomatik yanıt sistemi",
      "Sıfır manuel veri girişi",
      "Gerçek zamanlı bildirimler",
      "Ölçeklenebilir iş akışı altyapısı"
    ],
    process: [
      "Tekrarlayan iş akışlarını tespit ederiz",
      "n8n ile otomasyon senaryoları tasarlarız",
      "Sistemleri birbirine bağlarız",
      "Test edip teslim ederiz"
    ],
    ctaTitle: "Manuel İş Yükünüzü n8n ile Sıfıra İndirin",
    ctaDescription:
      "DM, form, CRM ve raporlama süreçlerinizi otomatize ederek haftada 12+ saat kazanın."
  },
  {
    slug: "musteri-lead-yonetimi-otomasyonu",
    href: "/hizmetler/musteri-lead-yonetimi-otomasyonu",
    shortTitle: "CRM Takip Sistemi",
    title: "CRM ve Müşteri Takip Sistemi",
    description:
      "Instagram, form ve web kanallarından gelen leadleri kaçırmayan, CRM'e otomatik kaydeden ve satışa hazır hale getiren entegre müşteri takip sistemi.",
    seoTitle: "CRM ve Müşteri Takip Sistemi | Lead Kaybetmeden Büyüyün",
    metaDescription:
      "Instagram, form ve web kanallarından gelen leadleri otomatik takip eden, CRM'e kaydeden ve satışa hazırlayan sistem.",
    heroTitle: "Gelen Her Lead Satışa Yaklaşsın",
    heroDescription:
      "Bir işletme lead azlığından değil, lead yönetimindeki boşluklardan kaybeder. Her kanaldan gelen başvuruyu otomatik takip eden bir sistem kuruyoruz.",
    targetAudience: [
      "Instagram, form ve web'den gelen leadleri kaçıran işletmeler",
      "Takip disiplini düşük satış ekipleri",
      "CRM kullanmak isteyen ama kuramamış şirketler"
    ],
    problems: [
      "Leadler farklı kanallardan gelir ama tek yerde toplanmaz",
      "İlk yanıt gecikmesi ilgiyi soğutur",
      "Takip eksikliği satış fırsatlarını öldürür"
    ],
    solution:
      "Lead akışını merkezileştirir, otomatik ilk yanıt sistemi kurar ve CRM entegrasyonuyla her fırsatın takip edilmesini sağlarız.",
    benefits: [
      "Sıfır lead kaybı",
      "Anında otomatik ilk yanıt",
      "CRM'e otomatik kayıt",
      "Takip hatırlatma sistemi"
    ],
    process: [
      "Lead kanallarını haritalandırırız",
      "Otomatik yanıt senaryoları kurarız",
      "CRM entegrasyonunu yaparız",
      "Takip sistemini devreye alırız"
    ],
    ctaTitle: "Her Lead'i Satışa Yaklaştıran Sistemi Kuralım",
    ctaDescription:
      "Kaçan müşterileri durdurun. Otomatik takip ve CRM sistemiyle büyüyün."
  },
  {
    slug: "satis-sureci-otomasyonu",
    href: "/hizmetler/satis-sureci-otomasyonu",
    shortTitle: "Satış Süreci Otomasyonu",
    title: "Satış Süreci Otomasyonu",
    description:
      "Tekliften kapanışa kadar satış sürecini otomatize eden; takip hatırlatmaları, teklif akışları ve satış raporlaması sistemi.",
    seoTitle: "Satış Süreci Otomasyonu | Daha Hızlı Kapanış, Daha Az Kayıp",
    metaDescription:
      "Teklif, takip ve satış süreçlerini otomatize eden sistem. Satışı kişilerden bağımsız, ölçeklenebilir hale getirin.",
    heroTitle: "Satışı Kişilere Değil, Sisteme Bırakın",
    heroDescription:
      "Satış kaybı çoğu zaman üründen değil, dağınık takipten doğar. Tekliften kapanışa kadar olan akışı otomatize eden bir satış sistemi kuruyoruz.",
    targetAudience: [
      "Teklif verip dönüş alamayan ekipler",
      "Takip disiplini düşük satış operasyonları",
      "Satış sürecini ölçeklemek isteyen işletmeler"
    ],
    problems: [
      "Teklif sonrası süreç dağılıyor",
      "Önemli fırsatlar unutuluyor veya gecikmeli takip ediliyor",
      "Satış performansı görünür değil"
    ],
    solution:
      "Tekliften kapanışa kadar olan akışı görünür hale getirir, takibi standardize eder ve satış sürecinin kişilere bağlı kalmasını azaltırız.",
    benefits: [
      "Otomatik takip hatırlatmaları",
      "Teklif ve kapanış görünürlüğü",
      "Satış süresi kısalır",
      "Yönetim net tablo görür"
    ],
    process: [
      "Mevcut satış akışını analiz ederiz",
      "Kritik kayıp noktalarını buluruz",
      "Teklif ve takip sistemini kurarız",
      "Satış raporlamasını devreye alırız"
    ],
    ctaTitle: "Satış Sürecinizi Güçlendirelim",
    ctaDescription:
      "Satışı kişilerden bağımsız, daha tutarlı ve daha hızlı bir yapıda yürütecek sistemi birlikte kuralım."
  },
  {
    slug: "operasyon-otomasyonu",
    href: "/hizmetler/operasyon-otomasyonu",
    shortTitle: "AI Web Sitesi",
    title: "AI Destekli Web Sitesi",
    description:
      "Müşteri kazandıran, 7/24 çalışan ve arama motorlarında görünen; AI altyapısıyla güçlendirilmiş kurumsal web sitesi.",
    seoTitle: "AI Destekli Web Sitesi | Müşteri Kazandıran Dijital Altyapı",
    metaDescription:
      "SEO uyumlu, hızlı ve dönüşüm odaklı AI destekli web sitesi. İşletmenizin 7/24 çalışan satış temsilcisi.",
    heroTitle: "Web Siteniz 7/24 Çalışan Satış Temsilciniz Olsun",
    heroDescription:
      "Çoğu işletmenin web sitesi sadece dijital bir kartvizit. Müşteri kazandıran, arama motorlarında görünen ve lead toplayan bir web sitesi kuruyoruz.",
    targetAudience: [
      "Dijital varlığı zayıf veya güncelliğini yitirmiş işletmeler",
      "Web sitesinden lead almak isteyen şirketler",
      "Arama motorlarında rakiplerinden önce görünmek isteyenler"
    ],
    problems: [
      "Web sitesi trafik çekmiyor ve ziyaretçi müşteriye dönüşmüyor",
      "Arama motorlarında rakipler önde görünüyor",
      "İçerik güncelleme yavaş ve maliyetli"
    ],
    solution:
      "SEO altyapısı, hız optimizasyonu, dönüşüm odaklı sayfa tasarımı ve AI içerik sistemiyle işletmenizi 7/24 çalışan bir dijital büyüme motoruna dönüştürürüz.",
    benefits: [
      "Organik trafik artışı",
      "Daha yüksek dönüşüm oranı",
      "AI ile hızlı içerik üretimi",
      "Mobil ve hız optimizasyonu"
    ],
    process: [
      "Mevcut dijital varlığı analiz ederiz",
      "SEO ve içerik stratejisini belirleriz",
      "Web sitesini tasarlar ve kurarız",
      "İçerik sistemini devreye alırız"
    ],
    ctaTitle: "Web Sitenizi Büyüme Motoruna Dönüştürelim",
    ctaDescription:
      "7/24 müşteri kazandıran, SEO uyumlu ve AI destekli web sitesi için konuşalım."
  },
  {
    slug: "e-ticaret-otomasyonu",
    href: "/hizmetler/e-ticaret-otomasyonu",
    shortTitle: "Sosyal Medya Büyüme Sistemi",
    title: "Sosyal Medya & İçerik Büyüme Sistemi",
    description:
      "Instagram ve sosyal medyada görünürlük, takipçi büyümesi ve potansiyel müşteri akışı sağlayan AI destekli içerik sistemi.",
    seoTitle: "Sosyal Medya Büyüme Sistemi | Instagram ve İçerik Otomasyonu",
    metaDescription:
      "AI ile içerik üretimi, Instagram büyümesi ve sosyal medya otomasyonu. Takipçiyi müşteriye dönüştürün.",
    heroTitle: "Sosyal Medyanız Müşteri Getirsin",
    heroDescription:
      "Sosyal medyada görünür olmak yeterli değil; doğru kitleyi çekip müşteriye dönüştüren bir sistem gerekiyor. AI destekli içerik ve büyüme sistemi kuruyoruz.",
    targetAudience: [
      "Instagram'da büyümek isteyen işletmeler",
      "İçerik üretmekte zorlanan ekipler",
      "Sosyal medyadan lead almak isteyenler"
    ],
    problems: [
      "İçerik üretimi düzensiz ve yorucu",
      "Takipçi sayısı büyüyor ama müşteriye dönüşmüyor",
      "Hangi içerik işe yarıyor belli değil"
    ],
    solution:
      "AI destekli içerik planlama sistemi, otomatik yayın takvimi ve DM entegrasyonuyla sosyal medyanızı düzenli ve dönüşüm odaklı bir büyüme kanalına taşırız.",
    benefits: [
      "%340+ takipçi büyüme potansiyeli",
      "AI ile aylık içerik planı",
      "Otomatik yayın takvimi",
      "DM → Lead otomasyonu"
    ],
    process: [
      "Hedef kitle ve içerik stratejisini belirleriz",
      "AI içerik üretim sistemini kurarız",
      "Otomasyon ve takvimi devreye alırız",
      "Büyüme metriklerini takip ederiz"
    ],
    ctaTitle: "Sosyal Medyanızı Büyüme Motoruna Çevirelim",
    ctaDescription:
      "AI destekli içerik sistemi ve DM otomasyonuyla Instagram'dan düzenli müşteri akışı oluşturun."
  }
];

export const serviceMap = Object.fromEntries(
  serviceContents.map((service) => [service.slug, service])
) as Record<string, ServiceContent>;

export const homeContent = {
  hero: {
    eyebrow: "AI Growth Systems",
    title: "AI Destekli Web Sitesi, Sosyal Medya ve Otomasyon ile Büyüyün",
    description:
      "Web sitesi, sosyal medya içerik sistemi ve n8n otomasyonlarıyla işletmenizi daha fazla müşteri alan, daha az manuel çalışan bir büyüme altyapısına dönüştürüyoruz.",
    bullets: [
      "AI destekli web sitesi ile 7/24 müşteri kazanın",
      "Instagram ve sosyal medyada düzenli büyüyün",
      "n8n ile tekrarlayan işleri otomatize edin",
      "Üç sistem, tek strateji, ölçeklenebilir büyüme"
    ]
  },
  painPoints: [
    "Web sitesi var ama müşteri getirmiyor",
    "Sosyal medyada içerik düzensiz ve yorucu",
    "Gelen leadler takip edilemiyor",
    "Manuel işler ekibi büyümekten alıkoyuyor"
  ],
  solution:
    "Dağınık araçlar yerine birbirine bağlı bir büyüme sistemi: AI destekli web sitesi, sosyal medya büyüme sistemi ve n8n otomasyonunu tek platformda birleştiriyoruz.",
  process: [
    {
      title: "Büyüme Fırsatlarını Belirleriz",
      description:
        "Mevcut dijital varlığınızı analiz eder, en yüksek büyüme etkisi yaratacak alanları tespit ederiz."
    },
    {
      title: "Sistemi Tasarlarız",
      description:
        "Web sitesi, sosyal medya ve otomasyon sistemlerini birbirine bağlı bir büyüme altyapısı olarak planlarız."
    },
    {
      title: "Kurar ve Devreye Alırız",
      description:
        "Sistemleri 48 saat içinde kurar, testlerini yapar ve teslim ederiz."
    },
    {
      title: "Büyümeyi Ölçeriz",
      description:
        "Gerçek büyüme verileriyle sistemi optimize eder, ölçeklendiririz."
    }
  ],
  whyUs: [
    "Dağınık araçlar değil, birbirine bağlı büyüme sistemi kurarız",
    "Web sitesi + sosyal medya + otomasyon üçlüsünü entegre kurarız",
    "Kurulumu değil, getirdiği müşteriyi merkeze alırız",
    "Net, hızlı ve ölçeklenebilir sistemler teslim ederiz"
  ],
  outcomes: [
    "Daha fazla organik müşteri",
    "Daha hızlı lead dönüşümü",
    "Daha düzenli sosyal medya",
    "Daha az manuel iş yükü",
    "Daha görünür dijital varlık",
    "Daha güçlü büyüme zemini"
  ]
};

export const aboutContent = {
  title: "AI Destekli Büyüme Sistemi Kuruyoruz",
  intro:
    "Çoğu işletmenin dijital varlığı büyümesini desteklemiyor. Web sitesi müşteri getirmiyor, sosyal medya düzensiz, manuel işler ekibi meşgul ediyor. Biz bu üçünü birbirine bağlı tek bir büyüme sistemine dönüştürüyoruz.",
  mission:
    "Amacımız işletmeleri daha 'dijital görünür' yapmak değil; web sitesi, sosyal medya ve otomasyon üçlüsüyle gerçek müşteri ve gelir büyümesi yaratmaktır.",
  principles: [
    {
      title: "Sistem Odaklı",
      description:
        "Tek seferlik projeler değil, büyüdükçe daha güçlü çalışan birbirine bağlı sistemler kurarız."
    },
    {
      title: "Sonuç Odaklı",
      description:
        "Teknik detaylarla değil; kazanılan müşteri, artan takipçi ve azalan manuel iş yüküyle ilgileniriz."
    },
    {
      title: "Hız ve Netlik",
      description:
        "Uzun analiz süreçleri yerine hızlı hareket eder, net sonuçlar teslim ederiz."
    }
  ]
};

export const faqItems = [
  {
    question: "Hangi hizmetleri sunuyorsunuz?",
    answer:
      "Üç ana alanda çalışıyoruz: AI destekli web sitesi, sosyal medya ve içerik büyüme sistemi, n8n otomasyon kurulumu. Bu üçünü birlikte veya ayrı ayrı uygulayabiliyoruz."
  },
  {
    question: "AI web sitesi normal web sitesinden ne farkı var?",
    answer:
      "AI web sitesi; SEO altyapısı, dönüşüm optimizasyonu ve AI destekli içerik sistemiyle birlikte çalışır. Sadece görsel değil, 7/24 müşteri kazandıran bir dijital altyapı."
  },
  {
    question: "Sosyal medya büyüme sistemi nasıl çalışır?",
    answer:
      "AI ile aylık içerik planı üretir, yayın takvimini otomatize eder, Instagram DM'lerini lead yönetim sistemine bağlarız. Ortalama %340+ takipçi büyümesi hedefliyoruz."
  },
  {
    question: "n8n nedir ve neden kullanıyorsunuz?",
    answer:
      "n8n açık kaynaklı bir otomasyon aracı. DM yanıtları, form bildirimleri, CRM kayıtları ve raporlamaları otomatize etmek için kullanıyoruz. Her sisteme entegre olur."
  },
  {
    question: "Kurulum ne kadar sürer?",
    answer:
      "Tek bir sistem (web sitesi, otomasyon veya sosyal medya paketi) için ortalama 48 saat. Kapsamlı sistemler için 1-2 hafta. Hız bizim önceliğimiz."
  },
  {
    question: "Teknik ekip kurmam gerekir mi?",
    answer:
      "Hayır. Sistemleri tamamen kurar ve devreye alırız. Size sadece içerik onayı ve yönlendirme gerekir. Sonrasında bakım desteği de sunuyoruz."
  }
];

export const contactFitNotes = [
  "AI destekli web sitesi kurmak isteyen işletmeler",
  "Instagram ve sosyal medyadan müşteri kazanmak isteyenler",
  "n8n ile otomasyon kurmak isteyen ekipler",
  "Büyüme sistemini hızla devreye almak isteyen şirketler"
];
