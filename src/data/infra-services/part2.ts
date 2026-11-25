import type { InfraService } from "./types";

export const INFRA_PART2: InfraService[] = [
  // 9
  {
    slug: "self-hosted-yazilim-kurulumu",
    title: "Self-Hosted Yazılım Kurulumu",
    navLabel: "Self-Hosted Yazılım",
    short: "Açık kaynak araçları kendi sunucunuzda, yedekli ve güncel tutulacak şekilde kuruyoruz.",
    metaTitle: "Self-Hosted Yazılım Kurulumu: Açık Kaynak Araçlar Sizde",
    metaDescription:
      "Nextcloud, Vaultwarden, Uptime Kuma gibi açık kaynak yazılımları kendi sunucunuza Docker ile kuruyor; yedek, SSL, erişim ve güncelleme düzenini hazırlıyoruz.",
    intro:
      "Abonelikle kullandığınız birçok bulut aracının açık kaynak karşılığını kendi sunucunuzda çalıştırabilirsiniz; biz bu yazılımları Docker tabanlı, yedeklenen ve güncellenebilen bir düzende kuruyoruz. Verileriniz sizin kontrolünüzdeki diskte durur, erişimi siz belirlersiniz. Hangi aracın gerçekten self-hosted olmaya uygun olduğunu da kurulumdan önce birlikte değerlendiriyoruz.",
    description: [
      "Self-hosted yazılım, bir uygulamanın üreticinin bulutunda değil, sizin yönettiğiniz bir sunucuda çalışması demektir. Dosya paylaşımı, parola kasası, proje yönetimi, form ve anket araçları, izleme panelleri ya da iç wiki gibi pek çok ihtiyacın olgun açık kaynak alternatifleri vardır. Asıl iş kurulumdan sonra başlar: veritabanı yedeği, sürüm güncellemeleri, sertifika yenileme ve kullanıcı erişimi düzenli yürümezse bu araçlar kısa sürede bakımsız kalır.",
      "Kurulumları her uygulamayı ayrı konteynerde, kalıcı verisi belirli bir dizinde veya volume'da duracak şekilde yapıyoruz. Dışarıya açılması gereken servisleri ters vekil (reverse proxy) veya Cloudflare Tunnel arkasına alıyor, yalnızca ekibin kullanacağı panelleri Tailscale gibi özel ağ çözümleriyle internetten gizliyoruz. Kendi altyapımızda da kullandığımız yaklaşım budur: Ubuntu Server, Docker ve Coolify üzerinde servisleri ayrık tutmak.",
      "Her kurulumun sonunda hangi servisin nerede çalıştığını, verinin nereye yedeklendiğini ve bir güncellemenin nasıl geri alınacağını anlatan kısa bir işletme notu teslim ediyoruz. Böylece ekibiniz ya da ileride çalışacağınız başka bir teknik kişi sistemi devralabilir."
    ],
    problems: [
      "Kullanıcı başına ücretlendirilen SaaS araçlarında maliyetin ekip büyüdükçe öngörülemez hâle gelmesi",
      "Hassas dosya ve kayıtların üçüncü taraf sunucularda tutulmasından kaynaklanan veri yerleşimi kaygısı",
      "Daha önce denenmiş ama yedeği alınmadığı için veri kaybıyla sonuçlanan self-hosted kurulumlar",
      "Aynı sunucuda birbirine karışmış, hangi portun hangi uygulamaya ait olduğu bilinmeyen servisler",
      "Güncelleme yapılamadığı için eski ve güvenlik açığı barındıran sürümlerde kalan uygulamalar"
    ],
    scope: [
      { title: "Araç seçimi ve uygunluk analizi", description: "İhtiyacınıza karşılık gelen açık kaynak projeleri lisans, topluluk aktivitesi ve bakım yükü açısından karşılaştırıyoruz." },
      { title: "Docker Compose ile kurulum", description: "Her uygulama sürümü sabitlenmiş imajlarla, ortam değişkenleri ve kalıcı volume'larıyla tanımlanır." },
      { title: "Alan adı ve SSL", description: "Alt alan adları yönlendirilir, sertifikalar otomatik yenilenecek biçimde ayarlanır." },
      { title: "Erişim kontrolü", description: "Herkese açık olması gerekmeyen paneller özel ağ veya kimlik doğrulama katmanı arkasına alınır." },
      { title: "Yedekleme düzeni", description: "Veritabanı dökümleri ve dosya volume'ları zamanlanmış olarak sunucu dışına yedeklenir; geri yükleme bir kez denenir." },
      { title: "İzleme", description: "Servislerin ayakta olup olmadığı Uptime Kuma gibi bir araçla takip edilir, kesintide bildirim gelir." },
      { title: "Güncelleme prosedürü", description: "Sürüm yükseltme öncesi yedek, değişiklik notu kontrolü ve geri dönüş adımları yazılı hâle getirilir." }
    ],
    useCases: [
      { title: "Şirket içi dosya paylaşımı", description: "Nextcloud ile belgeleri kendi sunucunuzda tutup masaüstü ve mobil istemcilerle senkronize etmek." },
      { title: "Ekip parola kasası", description: "Vaultwarden gibi Bitwarden uyumlu bir sunucuyla ortak hesap bilgilerini paylaşımlı ve şifreli saklamak." },
      { title: "İç dokümantasyon ve wiki", description: "Süreç ve teknik notları erişimi yalnızca ekibe açık bir wiki üzerinde toplamak." },
      { title: "Durum ve kesinti takibi", description: "Web siteniz ve API'leriniz için kendi izleme panelinizi kurup kesintilerden anında haberdar olmak." }
    ],
    process: [
      { title: "İhtiyaç listesi", description: "Hangi aracı kimin, hangi cihazlardan ve hangi veriyle kullanacağını netleştiriyoruz." },
      { title: "Mimari ve kaynak planı", description: "Uygulamaların RAM, disk ve veritabanı gereksinimine göre sunucu ve yedek hedefini belirliyoruz." },
      { title: "Kurulum ve yapılandırma", description: "Servisleri konteyner olarak ayağa kaldırıyor, alan adı, SSL ve erişim kurallarını ayarlıyoruz." },
      { title: "Yedek ve geri yükleme testi", description: "İlk yedeği alıp ayrı bir ortama geri yükleyerek verinin gerçekten kurtarılabildiğini doğruluyoruz." },
      { title: "Teslim ve işletme notu", description: "Erişim bilgilerini, güncelleme adımlarını ve yedek konumlarını yazılı olarak teslim ediyoruz." }
    ],
    faqs: [
      { q: "Hangi yazılımları kurabiliyorsunuz?", a: "Docker imajı bulunan ya da Linux üzerinde çalışan açık kaynak uygulamaların büyük çoğunluğunu kurabiliyoruz. Projenin aktif bakımda olup olmadığını ve güvenlik güncellemesi alıp almadığını kurulumdan önce kontrol ediyoruz." },
      { q: "Self-hosted kullanmak her zaman daha mı ucuz?", a: "Her zaman değil. Lisans maliyeti düşer ama sunucu, yedek alanı ve bakım zamanı eklenir. Az kullanıcılı ve kritik olmayan bir araç için SaaS daha mantıklı olabilir; bunu açıkça söylüyoruz." },
      { q: "Mevcut SaaS verilerimi taşıyabilir misiniz?", a: "Kaynak aracın dışa aktarma imkânı varsa verileri yeni sisteme aktarıyoruz. Bazı platformlar yalnızca kısmi dışa aktarım sunar; bu durumda neyin taşınabileceğini önceden raporluyoruz." },
      { q: "Birden fazla uygulama aynı sunucuda çalışabilir mi?", a: "Evet. Her uygulama kendi konteynerinde ve ağında çalıştığı için birbirini etkilemeden aynı sunucuyu paylaşabilir. Toplam kaynak ihtiyacını hesaplayarak sunucu boyutunu öneriyoruz." },
      { q: "Güncellemeleri kim yapacak?", a: "Teslim ettiğimiz prosedürle ekibiniz yapabilir. İsterseniz güncelleme ve yedek kontrolünü düzenli bakım kapsamında biz üstleniyoruz." },
      { q: "Sunucum yoksa ne olacak?", a: "İhtiyaca göre bir VPS, bulut sunucu ya da ofisinizdeki fiziksel bir makine üzerinde kurulum planlıyoruz; seçim kararını erişim, maliyet ve yedek kolaylığına göre birlikte veriyoruz." }
    ],
    docs: [
      { label: "Docker Docs: Docker Compose", url: "https://docs.docker.com/compose/" },
      { label: "Coolify Documentation", url: "https://coolify.io/docs" },
      { label: "Ubuntu Server Documentation", url: "https://ubuntu.com/server/docs" }
    ],
    relatedPosts: ["docker-nedir-isletmeler-icin", "coolify-nedir-vercel-alternatifi", "self-hosted-yapay-zeka-nedir"],
    relatedServices: ["coolify-kurulumu", "sunucu-bakim-guvenlik", "n8n-otomasyon-altyapisi"],
    serviceType: "Self-Hosted Açık Kaynak Yazılım Kurulumu"
  },

  // 10
  {
    slug: "n8n-otomasyon-altyapisi",
    title: "n8n Otomasyon Altyapısı",
    navLabel: "n8n Altyapısı",
    short: "n8n'i üretim yükünü taşıyacak şekilde Postgres, kuyruk modu ve yedekle barındırıyoruz.",
    metaTitle: "n8n Otomasyon Altyapısı: Queue Mode, Postgres ve Yedekleme",
    metaDescription:
      "Self-hosted n8n için üretim altyapısı: Postgres veritabanı, Redis ile queue mode, worker ölçekleme, şifreli yedek, güvenli güncelleme ve erişim sıkılaştırma.",
    intro:
      "n8n'i tek bir Docker komutuyla çalıştırmak kolaydır; yüzlerce iş akışını kesintisiz taşıyan bir altyapı ise Postgres, kuyruk modu, yedek ve kontrollü güncelleme gerektirir. Bu sayfa n8n'in barındırma ve işletme tarafını kapsar. İş akışlarınızın tasarımı ve uygulama entegrasyonları için /n8n-kurulum-hizmeti sayfamıza bakabilirsiniz.",
    description: [
      "Varsayılan n8n kurulumu SQLite kullanır ve tüm iş akışlarını tek süreçte çalıştırır. Bu, deneme için yeterlidir; ancak webhook trafiği arttığında, uzun süren çalıştırmalar birbirini beklediğinde ya da çalıştırma geçmişi diski doldurduğunda sorun çıkar. Üretim kurulumunda veritabanını Postgres'e taşıyor, çalıştırma verisinin ne kadar süre saklanacağını ayarlıyor ve gerektiğinde Redis ile queue mode'a geçerek işleri ayrı worker süreçlerine dağıtıyoruz.",
      "Güvenlik tarafında şifreleme anahtarının (N8N_ENCRYPTION_KEY) güvenli saklanması kritik bir ayrıntıdır: bu anahtar kaybolursa yedekten dönülse bile kayıtlı kimlik bilgileri çözülemez. Anahtarı, veritabanı yedeğini ve iş akışı dışa aktarımlarını ayrı ayrı yedekliyor; editör arayüzünü internete açmak yerine özel ağ veya erişim kısıtlaması arkasına alıyor, yalnızca webhook uç noktalarını dışarıya açıyoruz.",
      "n8n sık sürüm yayınlar ve bazı sürümler kırıcı değişiklik içerir. Sürümü sabitleyip yükseltmeleri önce yedek alarak, değişiklik notlarını okuyarak ve mümkünse bir test ortamında deneyerek yapıyoruz. PORTZEN olarak kendi otomasyonlarımızı da n8n üzerinde, aynı ilkelerle işletiyoruz."
    ],
    problems: [
      "SQLite ile çalışan n8n'in yoğun webhook trafiğinde kilitlenmesi veya yavaşlaması",
      "Çalıştırma geçmişinin temizlenmemesi nedeniyle diskin ve veritabanının şişmesi",
      "Şifreleme anahtarı yedeklenmediği için geri yüklemede kimlik bilgilerinin kullanılamaz hâle gelmesi",
      "Editör panelinin doğrudan internete açık bırakılması",
      "Kontrolsüz güncelleme sonrası bozulan düğümler ve duran iş akışları",
      "Uzun süren tek bir iş akışının diğer tüm otomasyonları bekletmesi"
    ],
    scope: [
      { title: "Postgres ile kurulum", description: "n8n'i harici Postgres veritabanıyla, sürümü sabitlenmiş Docker imajıyla kuruyoruz." },
      { title: "Queue mode ve worker'lar", description: "İhtiyaç varsa Redis üzerinden ana süreç, webhook süreci ve worker'ları ayırarak yükü dağıtıyoruz." },
      { title: "Çalıştırma verisi politikası", description: "Başarılı ve hatalı çalıştırmaların ne kadar süre saklanacağını ve otomatik temizliği ayarlıyoruz." },
      { title: "Yedek ve anahtar yönetimi", description: "Veritabanı, iş akışı dışa aktarımları ve şifreleme anahtarı ayrı konumlara düzenli yedeklenir." },
      { title: "Erişim sıkılaştırma", description: "Editör özel ağa veya kısıtlı erişime alınır, webhook adresleri ters vekil üzerinden yayınlanır." },
      { title: "İzleme ve hata bildirimi", description: "Servis sağlığı ve başarısız çalıştırmalar için bildirim kanalı kurulur." },
      { title: "Güncelleme prosedürü", description: "Yedek, değişiklik notu kontrolü, test ve geri dönüş adımlarından oluşan yükseltme rehberi hazırlanır." }
    ],
    useCases: [
      { title: "SQLite'tan Postgres'e geçiş", description: "Bir süredir deneme kurulumunda çalışan n8n'in verisini kaybetmeden üretim veritabanına taşınması." },
      { title: "Yüksek webhook trafiği", description: "E-ticaret, form veya ödeme bildirimlerini alan iş akışlarının queue mode ile worker'lara dağıtılması." },
      { title: "Bulut n8n'den self-hosted'a geçiş", description: "n8n Cloud'daki iş akışlarının kendi sunucunuza aktarılıp kimlik bilgilerinin yeniden tanımlanması." },
      { title: "Ekip içi otomasyon sunucusu", description: "Birden fazla kişinin iş akışı geliştirdiği, erişimi özel ağla sınırlı merkezi bir n8n ortamı." }
    ],
    process: [
      { title: "Mevcut durum incelemesi", description: "İş akışı sayısını, tetikleyici türlerini, çalıştırma sıklığını ve mevcut kurulum biçimini inceliyoruz." },
      { title: "Mimari kararı", description: "Tek süreç mi queue mode mu, hangi veritabanı ve yedek hedefi kullanılacağına karar veriyoruz." },
      { title: "Kurulum veya taşıma", description: "Yeni ortamı kuruyor, gerekiyorsa iş akışlarını ve kimlik bilgilerini kontrollü biçimde taşıyoruz." },
      { title: "Doğrulama", description: "Webhook'ları, zamanlanmış görevleri ve hata bildirimlerini gerçek senaryolarla test ediyoruz." },
      { title: "Teslim", description: "Yedek konumlarını, güncelleme adımlarını ve acil durum geri dönüşünü belgeleyerek teslim ediyoruz." }
    ],
    faqs: [
      { q: "Bu hizmetin /n8n-kurulum-hizmeti sayfasından farkı ne?", a: "O sayfa iş akışlarının tasarımı ve uygulama entegrasyonlarına odaklanır. Bu hizmet ise n8n'in çalıştığı altyapıyı kapsar: veritabanı, ölçekleme, yedek, güvenlik ve güncelleme." },
      { q: "Queue mode'a ne zaman ihtiyaç duyulur?", a: "Eşzamanlı çalıştırma sayısı arttığında, uzun süren iş akışları diğerlerini beklettiğinde ya da webhook yanıt süreleri uzadığında. Az sayıda ve hafif iş akışı için tek süreç genellikle yeterlidir." },
      { q: "Mevcut iş akışlarım taşınırken kaybolur mu?", a: "Taşıma öncesi iş akışlarını ve kimlik bilgilerini dışa aktarıyor, şifreleme anahtarını koruyarak yeni ortama alıyoruz. Geçişi eski sistem çalışırken test edip sonra trafiği yönlendiriyoruz." },
      { q: "n8n'i hangi sunucuda çalıştırmalıyım?", a: "Kendi fiziksel sunucunuz, VPS veya bulut sunucu olabilir. Belirleyici olan iş akışı yükü, webhook'ların dışarıdan erişilebilir olması ve yedek kolaylığıdır." },
      { q: "Güncellemeleri otomatik mi yapıyorsunuz?", a: "Hayır, n8n için otomatik güncelleme önermiyoruz. Sürümü sabitleyip yükseltmeyi yedek ve test sonrasında elle yapmak daha güvenlidir." },
      { q: "Şifreleme anahtarı neden bu kadar önemli?", a: "n8n kayıtlı kimlik bilgilerini bu anahtarla şifreler. Anahtar kaybolursa veritabanı yedeği elinizde olsa bile API anahtarları ve parolalar çözülemez, hepsinin yeniden girilmesi gerekir." }
    ],
    docs: [
      { label: "n8n Docs: Hosting", url: "https://docs.n8n.io/hosting/" },
      { label: "n8n Documentation", url: "https://docs.n8n.io/" },
      { label: "Docker Docs", url: "https://docs.docker.com/" }
    ],
    relatedPosts: ["n8n-kendi-sunucunda-mi-bulutta-mi", "docker-nedir-isletmeler-icin"],
    relatedServices: ["api-entegrasyonu", "self-hosted-yazilim-kurulumu", "sunucu-bakim-guvenlik"],
    serviceType: "n8n Self-Hosted Altyapı Kurulumu ve İşletimi"
  },

  // 11
  {
    slug: "yapay-zeka-ajani-hosting",
    title: "Yapay Zekâ Ajanı Hosting",
    navLabel: "Yapay Zekâ Ajanı Hosting",
    short: "Yapay zekâ ajanlarınızı kuyruk, gizli anahtar yönetimi ve izlemeyle sürekli çalışır hâle getiriyoruz.",
    metaTitle: "Yapay Zekâ Ajanı Hosting: API ve Yerel Model Altyapısı",
    metaDescription:
      "Yapay zekâ ajanlarınız için sunucu altyapısı: API tabanlı veya yerel model seçimi, GPU ihtiyacı analizi, iş kuyruğu, gizli anahtar yönetimi ve izleme kurulumu.",
    intro:
      "Bir yapay zekâ ajanını üretimde çalıştırmak için çoğu zaman GPU'ya değil, düzgün bir sunucu, iş kuyruğu ve gizli anahtar yönetimine ihtiyaç vardır; GPU yalnızca modeli kendiniz çalıştırmak istediğinizde devreye girer. Ajanınızın hangi modeli nerede kullanacağını belirleyip onu sürekli çalışan, izlenen ve yeniden başlatılabilen bir servis hâline getiriyoruz.",
    description: [
      "İlk karar modelin nerede çalışacağıdır. API tabanlı modellerde (OpenAI, Anthropic, Google gibi sağlayıcılar) ajan kodu sıradan bir sunucuda çalışır, çıkarım sağlayıcıda yapılır; donanım ihtiyacı düşüktür ama veri sağlayıcıya gider ve kullanım başına maliyet oluşur. Yerel modellerde (Ollama veya vLLM ile açık ağırlıklı modeller) veri sunucunuzdan çıkmaz, ancak modelin boyutuna uygun VRAM'e sahip bir GPU ya da yavaş çalışmayı kabul eden bir CPU kurulumu gerekir. Birçok projede ikisini birlikte kullanan hibrit yapı en dengeli sonuçtur.",
      "Ajanlar uzun süren, dış servislere bağımlı ve zaman zaman hata veren işler yürütür. Bu nedenle istekleri doğrudan işlemek yerine bir kuyruğa alıyor, eşzamanlı çalışma sayısını sınırlıyor ve başarısız adımları kontrollü olarak yeniden deniyoruz. Kendi altyapımızda da ağır işleri, kaynak ve sıcaklık sınırlarını gözeten bir görev kuyruğuyla sırayla çalıştırıyoruz; aynı mantığı ajan altyapınıza uyarlıyoruz.",
      "API anahtarları kod deposuna veya imaja gömülmez; ortam değişkenleri ya da gizli anahtar deposu üzerinden verilir, mümkünse harcama limiti tanımlı ayrı anahtarlar kullanılır. Süreç sağlığı, kuyruk uzunluğu, hata oranı ve token tüketimi izlenir; ajan takıldığında veya beklenmedik maliyet ürettiğinde bildirim gelir."
    ],
    problems: [
      "Geliştirici bilgisayarında çalışan ajanın sunucuya taşındığında sürekli çökmesi",
      "Gereksiz yere pahalı GPU kiralanması ya da tersine yerel modelin yetersiz donanımda kullanılamayacak kadar yavaş kalması",
      "API anahtarlarının kod içinde veya paylaşılan dosyalarda açıkta durması",
      "Aynı anda gelen isteklerin hız sınırlarına (rate limit) takılıp başarısız olması",
      "Ajanın ne yaptığının, nerede takıldığının ve ne kadar harcadığının görülememesi"
    ],
    scope: [
      { title: "Model ve donanım analizi", description: "API, yerel veya hibrit seçeneklerini veri hassasiyeti, gecikme ve donanım gereksinimi açısından karşılaştırıyoruz." },
      { title: "Yerel model sunucusu", description: "Gerekirse Ollama veya vLLM ile açık ağırlıklı modelleri GPU'lu ya da CPU'lu sunucuda servis ediyoruz." },
      { title: "Konteynerleştirme", description: "Ajan kodunu bağımlılıklarıyla birlikte Docker imajına alıp yeniden başlatma politikasıyla çalıştırıyoruz." },
      { title: "İş kuyruğu", description: "İstekleri kuyruğa alan, eşzamanlılığı sınırlayan ve hatalı işleri yeniden deneyen bir yapı kuruyoruz." },
      { title: "Gizli anahtar yönetimi", description: "API anahtarları ortam değişkeni veya gizli anahtar deposuyla verilir, depo geçmişinden temizlenir." },
      { title: "İzleme ve kayıt", description: "Süreç sağlığı, kuyruk durumu, hata ve kullanım metrikleri için panel ve bildirim ayarlıyoruz." },
      { title: "Güvenli dış erişim", description: "Ajanın API'si veya webhook'u Cloudflare Tunnel ya da ters vekil üzerinden, kimlik doğrulamayla yayınlanır." }
    ],
    useCases: [
      { title: "Müşteri destek ajanı", description: "Telegram, WhatsApp veya web sohbetinden gelen soruları kuyruktan sırayla işleyen bir ajan." },
      { title: "Belge işleme hattı", description: "PDF ve e-postaları özetleyen ya da sınıflandıran, hassas veriyi yerel modelde tutan bir sistem." },
      { title: "Zamanlanmış araştırma ajanı", description: "Belirli aralıklarla kaynakları tarayıp rapor üreten ve sonucu ekibe ileten görev." },
      { title: "İç bilgi asistanı", description: "Şirket dokümanlarına dayanarak yanıt veren, yalnızca özel ağdan erişilebilen bir asistan." }
    ],
    process: [
      { title: "Ajanın incelenmesi", description: "Kod yapısını, kullandığı modelleri, dış servisleri ve beklenen yükü inceliyoruz." },
      { title: "Altyapı kararı", description: "API mi yerel model mi, GPU gerekip gerekmediği ve kuyruk yapısı netleşir." },
      { title: "Kurulum", description: "Sunucu, konteynerler, kuyruk, gizli anahtarlar ve gerekirse model sunucusu yapılandırılır." },
      { title: "Yük ve hata testi", description: "Eşzamanlı istek, sağlayıcı hatası ve yeniden başlatma senaryolarını deniyoruz." },
      { title: "İzleme ve teslim", description: "Panelleri ve bildirimleri devreye alıp işletme notlarını teslim ediyoruz." }
    ],
    faqs: [
      { q: "Yapay zekâ ajanı için GPU şart mı?", a: "Yalnızca modeli kendi sunucunuzda çalıştıracaksanız. API tabanlı modellerle çalışan bir ajan sıradan bir sunucuda rahatlıkla çalışır; GPU ihtiyacı yerel model boyutuna ve beklenen hıza göre belirlenir." },
      { q: "Yerel model mi API mi tercih etmeliyim?", a: "Veri dışarı çıkmamalıysa veya kullanım çok yoğunsa yerel model öne çıkar. En güçlü modellere erişim, düşük kurulum yükü ve değişken kullanım için API genellikle daha pratiktir. Hibrit kurulum da mümkündür." },
      { q: "Hangi framework ile yazılmış ajanları barındırıyorsunuz?", a: "Python veya Node.js ile yazılmış, konteynere alınabilen ajanların çoğunu barındırabiliyoruz. LangChain, LlamaIndex ya da kendi yazdığınız kod fark etmez; önemli olan bağımlılıkların ve çalışma biçiminin net olmasıdır." },
      { q: "API maliyetinin kontrolden çıkmasını nasıl önlüyorsunuz?", a: "Sağlayıcı tarafında harcama limiti tanımlıyor, kuyrukla eşzamanlılığı sınırlıyor ve token kullanımını izleyerek beklenmedik artışlarda bildirim gönderiyoruz." },
      { q: "Ajanın konuşma ve verileri nerede saklanır?", a: "Kendi sunucunuzdaki veritabanında. API tabanlı modellerde istek içeriği sağlayıcıya gider; sağlayıcının veri politikasını birlikte değerlendirip hassas veriyi gerekirse yerel modele yönlendiriyoruz." },
      { q: "Ajan çökerse ne olur?", a: "Konteyner otomatik yeniden başlar, kuyruktaki işler kaybolmaz ve yarıda kalan iş yeniden denenir. Tekrarlayan hatalarda izleme sistemi bildirim gönderir." }
    ],
    docs: [
      { label: "Ollama", url: "https://ollama.com/" },
      { label: "vLLM Documentation", url: "https://docs.vllm.ai/" },
      { label: "Docker Docs: GPU desteği", url: "https://docs.docker.com/compose/how-tos/gpu-support/" }
    ],
    relatedPosts: [
      "yapay-zeka-ajanlari-icin-sunucu-altyapisi",
      "self-hosted-yapay-zeka-nedir",
      "isletmeler-neden-kendi-yapay-zeka-altyapisini-kurmali"
    ],
    relatedServices: ["sunucu-kurulumu", "n8n-otomasyon-altyapisi", "telegram-bot-gelistirme"],
    serviceType: "Yapay Zekâ Ajanı Barındırma ve Altyapı Kurulumu"
  },

  // 12
  {
    slug: "api-entegrasyonu",
    title: "API ve Sistem Entegrasyonları",
    navLabel: "API Entegrasyonu",
    short: "Birbirinden kopuk yazılımlarınızı API ve webhook'larla güvenilir biçimde konuşturuyoruz.",
    metaTitle: "API Entegrasyonu: Sistemler Arası Veri Akışı ve Webhook",
    metaDescription:
      "CRM, e-ticaret, muhasebe ve mesajlaşma sistemlerinizi REST API ve webhook ile bağlıyor; hata yönetimi, yeniden deneme ve kayıt tutmayı baştan kuruyoruz.",
    intro:
      "Farklı yazılımlar arasında elle veri taşıyorsanız, bunu API ve webhook entegrasyonlarıyla otomatik ve izlenebilir hâle getirebilirsiniz. Sipariş, müşteri, stok veya fatura verisinin bir sistemden diğerine doğru, eksiksiz ve tekrar etmeden geçmesini sağlayan entegrasyonlar geliştiriyoruz. Gerektiğinde n8n gibi bir otomasyon aracı, gerektiğinde küçük ve özel bir servis kullanıyoruz.",
    description: [
      "Entegrasyon projelerinde zor kısım iki sistemi ilk kez bağlamak değil, bağlantının aylarca sorunsuz çalışmasıdır. API'ler hız sınırı uygular, zaman zaman yanıt vermez, alan adları ve sürümler değişir. Bu yüzden her entegrasyona yeniden deneme, aynı kaydın iki kez işlenmesini önleyen kontroller (idempotency) ve başarısız kayıtların kaybolmadan bekletildiği bir hata kuyruğu ekliyoruz.",
      "Uygun araç işin yapısına göre seçilir. Az sayıda adım ve standart bağlayıcı varsa n8n gibi görsel bir otomasyon platformu hızlı ve bakımı kolay bir çözümdür. Yoğun trafik, karmaşık dönüşüm veya özel kimlik doğrulama gerekiyorsa Node.js ya da Python ile yazılmış küçük bir ara servis daha uygun olur. Her iki durumda da veri eşleme tablosunu belgeliyor, hangi alanın hangi sisteme ait olduğunu açıkça tanımlıyoruz.",
      "Webhook alan uç noktaları imza doğrulaması ve erişim kısıtlamasıyla korunur, API anahtarları kod dışında saklanır. Her çalıştırma kayıt altına alınır; böylece bir siparişin neden muhasebe sistemine düşmediği sorusuna tahminle değil kayıtla yanıt verilebilir."
    ],
    problems: [
      "Sistemler arasında elle kopyala-yapıştır yapılması ve buna bağlı veri hataları",
      "Aynı siparişin veya müşterinin iki kez oluşturulmasına yol açan kontrolsüz entegrasyonlar",
      "Karşı API kısa süre yanıt vermediğinde kaybolan kayıtlar",
      "Hangi verinin hangi sistemde güncel olduğunun bilinmemesi",
      "Dokümantasyonu olmayan, yazan kişi ayrıldığında kimsenin dokunamadığı entegrasyon kodları"
    ],
    scope: [
      { title: "Sistem ve API analizi", description: "Bağlanacak sistemlerin API kapsamını, kimlik doğrulama yöntemini ve hız sınırlarını inceliyoruz." },
      { title: "Veri eşleme", description: "Alanların sistemler arasında nasıl karşılık geleceğini ve hangi sistemin esas kaynak olduğunu belgeliyoruz." },
      { title: "Entegrasyon geliştirme", description: "n8n iş akışı veya özel bir ara servis olarak entegrasyonu geliştiriyoruz." },
      { title: "Webhook uç noktaları", description: "Gelen bildirimleri imza doğrulamasıyla karşılayan ve hızlıca kuyruğa alan uç noktalar kuruyoruz." },
      { title: "Hata yönetimi", description: "Yeniden deneme, tekrar kontrolü ve başarısız kayıtlar için bekletme kuyruğu ekliyoruz." },
      { title: "Kayıt ve bildirim", description: "Her çalıştırmanın kaydı tutulur, kalıcı hatalarda sorumlu kişiye bildirim gider." }
    ],
    useCases: [
      { title: "E-ticaret ve muhasebe", description: "Tamamlanan siparişlerin muhasebe veya ön muhasebe sistemine otomatik aktarılması." },
      { title: "Form ve CRM", description: "Web formu ve reklam formlarından gelen potansiyel müşterilerin CRM'e tekilleştirilerek eklenmesi." },
      { title: "Stok senkronizasyonu", description: "Birden fazla satış kanalındaki stok bilgisinin tek merkezden güncel tutulması." },
      { title: "Mesajlaşma bildirimleri", description: "Sipariş, randevu veya destek olaylarında Telegram ya da e-posta ile otomatik bildirim gönderilmesi." }
    ],
    process: [
      { title: "Akışın çıkarılması", description: "Bugün verinin hangi adımlarla, kim tarafından taşındığını birlikte çıkarıyoruz." },
      { title: "Teknik tasarım", description: "Araç seçimi, veri eşleme ve hata senaryolarını içeren kısa bir tasarım hazırlıyoruz." },
      { title: "Geliştirme ve test", description: "Entegrasyonu test hesapları veya örnek verilerle uçtan uca deniyoruz." },
      { title: "Kademeli devreye alma", description: "Önce sınırlı veriyle çalıştırıp sonuçları kontrol ediyor, ardından tam kapsama açıyoruz." },
      { title: "Belgeleme", description: "Akış şemasını, eşleme tablosunu ve hata çözüm adımlarını teslim ediyoruz." }
    ],
    faqs: [
      { q: "API'si olmayan bir sistemi bağlayabilir misiniz?", a: "Sistem dosya dışa aktarımı, veritabanı erişimi veya e-posta çıktısı gibi başka bir kanal sunuyorsa çoğu zaman evet. Ekran kazıma gibi kırılgan yöntemleri yalnızca başka seçenek kalmadığında ve riskini açıklayarak öneriyoruz." },
      { q: "n8n mi özel kod mu kullanıyorsunuz?", a: "İşe göre. Standart bağlayıcısı olan, orta yoğunluktaki akışlarda n8n bakım açısından avantajlıdır; yüksek hacim veya karmaşık iş kuralları için özel servis yazıyoruz." },
      { q: "Karşı sistem kapalıyken gelen veriler ne olur?", a: "Kayıtlar kuyrukta bekletilir ve belirli aralıklarla yeniden denenir. Belirlenen deneme sayısını aşan kayıtlar ayrı bir listeye alınır ve bildirim gönderilir." },
      { q: "Aynı kaydın iki kez işlenmesini nasıl önlüyorsunuz?", a: "Her kayıt için benzersiz bir anahtar tutup işlenmiş olanları atlıyoruz. Webhook'ların aynı olayı birden fazla gönderebileceğini baştan varsayarak tasarlıyoruz." },
      { q: "Entegrasyon nerede çalışır?", a: "Kendi sunucunuzda, bir VPS'te veya mevcut altyapınızda. Kesintisiz çalışması gereken webhook alıcıları için erişilebilir ve izlenen bir sunucu öneriyoruz." },
      { q: "Karşı taraf API'sini değiştirirse ne olur?", a: "Hata kayıtları ve bildirimler sayesinde sorun hızla fark edilir. Bakım kapsamında API sürüm değişikliklerini takip edip entegrasyonu güncelliyoruz." }
    ],
    docs: [
      { label: "n8n Docs: Webhook node", url: "https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.webhook/" },
      { label: "MDN: HTTP", url: "https://developer.mozilla.org/en-US/docs/Web/HTTP" },
      { label: "GitHub Docs: Webhooks", url: "https://docs.github.com/en/webhooks" }
    ],
    relatedPosts: ["n8n-kendi-sunucunda-mi-bulutta-mi", "telegram-bot-ile-isletme-otomasyonu"],
    relatedServices: ["n8n-otomasyon-altyapisi", "telegram-bot-gelistirme", "yapay-zeka-ajani-hosting"],
    serviceType: "API ve Sistem Entegrasyonu Geliştirme"
  },

  // 13
  {
    slug: "sunucu-bakim-guvenlik",
    title: "Sunucu Bakım ve Güvenlik",
    navLabel: "Bakım ve Güvenlik",
    short: "Sunucunuzun güncellemesini, yedeğini, izlemesini ve sıkılaştırmasını düzenli olarak yürütüyoruz.",
    metaTitle: "Sunucu Bakım ve Güvenlik: Güncelleme, Yedek ve İzleme",
    metaDescription:
      "Linux sunucularınız için düzenli bakım: güvenlik güncellemeleri, SSH sıkılaştırma, güvenlik duvarı, yedek doğrulama, kaynak izleme ve kesinti bildirimleri.",
    intro:
      "Sunucuların çoğu tek bir büyük saldırıdan değil, uygulanmayan güncellemeler, dolan diskler ve hiç denenmemiş yedekler yüzünden sorun yaşar. Linux sunucularınızın güvenlik güncellemelerini, erişim ayarlarını, yedeklerini ve izlemesini düzenli bir bakım planıyla yürütüyoruz. Hedef, sorunları kesintiye dönüşmeden fark etmektir.",
    description: [
      "Bakım çalışması bir sıkılaştırma turuyla başlar: parola ile SSH girişini kapatıp anahtar tabanlı erişime geçmek, gereksiz açık portları kapatmak, güvenlik duvarı kuralları yazmak, otomatik güvenlik güncellemelerini açmak ve kaba kuvvet denemelerine karşı fail2ban gibi bir koruma eklemek. Yönetim panellerini ve SSH'ı internete açmak yerine Tailscale gibi özel ağ üzerinden erişilebilir kılmak saldırı yüzeyini belirgin biçimde daraltır.",
      "Sonrasında iş süreklilik kazanır. Disk, bellek, işlemci ve sıcaklık gibi kaynakları Netdata ile, servislerin dışarıdan erişilebilirliğini Uptime Kuma ile izliyoruz; kendi sunucumuzda kullandığımız düzen de budur. Eşik aşıldığında bildirim gelir, böylece disk tamamen dolmadan ya da sertifika süresi geçmeden müdahale edilebilir.",
      "Yedek, geri yüklenebildiği kadar değerlidir. Yedeklerin sunucu dışında tutulduğunu ve belirli aralıklarla gerçekten geri yüklenebildiğini kontrol ediyoruz. Her bakım döneminin sonunda yapılan güncellemeleri, gözlenen riskleri ve önerileri içeren kısa bir rapor paylaşıyoruz."
    ],
    problems: [
      "Aylardır güncellenmemiş paketler ve bilinen güvenlik açıkları",
      "Parola ile root girişine açık SSH ve sürekli gelen kaba kuvvet denemeleri",
      "Fark edilmeden dolan disk yüzünden aniden duran veritabanı veya uygulama",
      "Alındığı sanılan ama hiç denenmemiş, sonradan bozuk çıkan yedekler",
      "Süresi dolan SSL sertifikası nedeniyle erişilemeyen site",
      "Kesintiden müşteriler haber verdiğinde haberdar olmak"
    ],
    scope: [
      { title: "Güvenlik denetimi ve sıkılaştırma", description: "Kullanıcılar, açık portlar, SSH ayarları ve çalışan servisler gözden geçirilip gereksiz erişimler kapatılır." },
      { title: "Güncelleme yönetimi", description: "Güvenlik güncellemeleri otomatik, sürüm yükseltmeleri planlı ve yedek sonrası uygulanır." },
      { title: "Güvenlik duvarı ve erişim", description: "UFW kuralları, fail2ban ve özel ağ üzerinden yönetim erişimi yapılandırılır." },
      { title: "Kaynak izleme", description: "Disk, bellek, işlemci ve sıcaklık metrikleri eşik tabanlı bildirimlerle izlenir." },
      { title: "Erişilebilirlik izleme", description: "Web siteleri, API'ler ve sertifika süreleri dışarıdan kontrol edilir." },
      { title: "Yedek doğrulama", description: "Yedeklerin varlığı, boyutu ve geri yüklenebilirliği düzenli olarak test edilir." },
      { title: "Olay müdahalesi", description: "Kesinti veya şüpheli aktivitede kayıtlar incelenir, kök neden ve alınan önlem raporlanır." },
      { title: "Dönemsel rapor", description: "Yapılan işlemler, açık riskler ve önerilen iyileştirmeler yazılı olarak paylaşılır." }
    ],
    useCases: [
      { title: "Teknik ekibi olmayan işletme", description: "Kurulumu yapılmış ama kimsenin düzenli bakmadığı bir sunucunun bakımının devralınması." },
      { title: "Saldırı belirtisi görülen sunucu", description: "Beklenmedik süreçler, yüksek trafik veya şüpheli girişler sonrası inceleme ve sıkılaştırma." },
      { title: "Birden fazla VPS", description: "Farklı sağlayıcılardaki sunucuların tek bir izleme panelinden takip edilmesi." },
      { title: "Ofis içi fiziksel sunucu", description: "Donanım sıcaklığı, disk sağlığı ve elektrik kesintisi sonrası açılış kontrollerinin izlenmesi." }
    ],
    process: [
      { title: "İlk denetim", description: "Sunucunun mevcut durumunu, riskleri ve eksik yedekleri listeleyen bir inceleme yapıyoruz." },
      { title: "Sıkılaştırma", description: "Kritik açıkları kapatıyor, erişimi düzenliyor ve izlemeyi devreye alıyoruz." },
      { title: "Bakım takvimi", description: "Güncelleme, yedek testi ve rapor sıklığını birlikte belirliyoruz." },
      { title: "Düzenli bakım", description: "Belirlenen takvimde işlemleri yürütüp bildirimlere müdahale ediyoruz." },
      { title: "Raporlama", description: "Her dönem sonunda yapılanları ve önerileri paylaşıyoruz." }
    ],
    faqs: [
      { q: "Hangi sunuculara bakım veriyorsunuz?", a: "Ubuntu ve Debian başta olmak üzere Linux tabanlı VPS, bulut ve fiziksel sunuculara. Windows sunucular bu hizmetin kapsamında değil." },
      { q: "Sunucuma tam erişim vermem gerekiyor mu?", a: "Bakım için yönetici yetkisine sahip ayrı bir kullanıcı ve SSH anahtarı yeterlidir. Erişimi istediğiniz an kaldırabilirsiniz; ortak parola paylaşımı istemiyoruz." },
      { q: "Kesinti olursa ne kadar hızlı müdahale ediyorsunuz?", a: "Müdahale süresi bakım kapsamında birlikte belirlenir. Sabit bir kesintisizlik garantisi vermiyoruz; amacımız sorunları izlemeyle erken yakalamak ve hızlı geri dönüş planı hazır tutmaktır." },
      { q: "Otomatik güncellemeler bir şeyi bozar mı?", a: "Otomatik olarak yalnızca güvenlik yamalarını uyguluyoruz. Ana sürüm yükseltmeleri ve uygulama güncellemeleri yedek alındıktan sonra planlı yapılır." },
      { q: "Daha önce saldırıya uğramış bir sunucuyu kurtarabilir misiniz?", a: "Önce kayıtları inceleyip etkiyi anlamaya çalışıyoruz. Sistemin güvenilirliği şüpheliyse çoğu durumda temiz bir sunucuya, doğrulanmış yedekten yeniden kurulumu öneriyoruz." },
      { q: "Tek seferlik güvenlik denetimi mümkün mü?", a: "Evet. Sadece ilk denetim ve sıkılaştırma çalışmasını yapıp bulguları ve yapılan değişiklikleri raporlayabiliriz; sürekli bakım isteğe bağlıdır." }
    ],
    docs: [
      { label: "Ubuntu Server Documentation", url: "https://ubuntu.com/server/docs" },
      { label: "Netdata Documentation", url: "https://learn.netdata.cloud/" },
      { label: "Tailscale Docs", url: "https://tailscale.com/kb" }
    ],
    relatedPosts: ["sunucular-neden-coker", "linux-sunucu-kurulumu-rehberi"],
    relatedServices: ["sunucu-kurulumu", "vps-vds-yonetimi", "bulut-sunucu-migrasyonu"],
    serviceType: "Linux Sunucu Bakımı ve Güvenlik Sıkılaştırma"
  },

  // 14
  {
    slug: "bulut-sunucu-migrasyonu",
    title: "Bulut Altyapısı ve Sunucu Migrasyonu",
    navLabel: "Sunucu Migrasyonu",
    short: "Uygulama ve verilerinizi planlı, test edilmiş ve geri dönüşü hazır bir geçişle yeni altyapıya taşıyoruz.",
    metaTitle: "Sunucu Migrasyonu: Hosting, VPS ve Bulut Arası Planlı Geçiş",
    metaDescription:
      "Paylaşımlı hostingten VPS'e, sağlayıcıdan sağlayıcıya veya buluttan kendi sunucunuza geçiş: envanter, veri taşıma, DNS planı, test ve geri dönüş adımları.",
    intro:
      "Sunucu migrasyonu, uygulamalarınızı ve verilerinizi bir altyapıdan diğerine kesinti ve veri kaybı riskini en aza indirerek taşımaktır. Paylaşımlı hostingten VPS'e, bir bulut sağlayıcısından diğerine ya da buluttan kendi fiziksel sunucunuza geçişi envanter, prova, DNS planı ve geri dönüş adımlarıyla yürütüyoruz. Taşıma sırasında eski yapıdaki gereksiz yükleri de temizleme fırsatını değerlendiriyoruz.",
    description: [
      "Başarılı bir migrasyonun büyük bölümü taşıma gününden önce yapılır. Mevcut sunucuda çalışan her şeyi çıkarıyoruz: web siteleri, veritabanları, zamanlanmış görevler, e-posta ayarları, sertifikalar, ortam değişkenleri ve çoğu zaman unutulan küçük betikler. Bu envanter, yeni ortamda neyin eksik kaldığını taşıma sonrasında değil önceden görmenizi sağlar.",
      "Mümkün olduğunda uygulamaları Docker konteynerlerine alarak taşıyoruz; böylece yeni sunucu, işletim sistemi farklarından daha az etkilenir ve sonraki taşımalar kolaylaşır. Veritabanları için önce bir prova aktarımı yapıyor, uygulamayı yeni ortamda geçici bir adresle test ediyor, ardından son veri senkronizasyonu ve DNS değişikliğini kısa bir pencerede gerçekleştiriyoruz. DNS TTL değerlerini önceden düşürmek, geçişin hızlı yayılmasını sağlar.",
      "Eski sunucu, yeni ortam bir süre sorunsuz çalıştığı doğrulanana kadar kapatılmaz. Geri dönüş adımları yazılıdır; beklenmedik bir sorun çıkarsa DNS kaydı eski adrese çevrilerek hizmet sürdürülebilir."
    ],
    problems: [
      "Kaynakları yetmeyen paylaşımlı hostingte yavaşlayan site ve uygulamalar",
      "Beklenenden yüksek gelen bulut faturaları ve kullanılmayan kaynaklar",
      "Taşıma sonrası fark edilen eksik cron görevleri, e-posta ayarları veya dosyalar",
      "Uzun DNS yayılımı nedeniyle iki sunucu arasında bölünen trafik ve veri",
      "Kimsenin tam olarak ne çalıştığını bilmediği eski bir sunucuya bağımlılık"
    ],
    scope: [
      { title: "Envanter ve bağımlılık haritası", description: "Mevcut sunucudaki uygulamalar, veritabanları, görevler, sertifikalar ve dış bağlantılar listelenir." },
      { title: "Hedef altyapı planı", description: "Yeni ortamın türü, boyutu, yedek hedefi ve ağ yapısı ihtiyaca göre belirlenir." },
      { title: "Konteynerleştirme", description: "Uygun uygulamalar Docker'a alınarak taşınabilir ve tekrarlanabilir hâle getirilir." },
      { title: "Prova taşıma", description: "Veri ve uygulama önce test amaçlı aktarılıp geçici adresle doğrulanır." },
      { title: "DNS ve geçiş penceresi", description: "TTL önceden düşürülür, son senkronizasyon ve kayıt değişikliği planlı saatte yapılır." },
      { title: "Geçiş sonrası doğrulama", description: "Formlar, e-postalar, ödeme akışları, zamanlanmış görevler ve kayıtlar kontrol edilir." },
      { title: "Geri dönüş planı", description: "Eski ortam belirli bir süre hazır tutulur, geri dönüş adımları yazılı olarak teslim edilir." }
    ],
    useCases: [
      { title: "Paylaşımlı hostingten VPS'e", description: "Büyüyen bir web sitesinin veya uygulamanın kendi kaynaklarına sahip bir sunucuya taşınması." },
      { title: "Bulut maliyetini düşürme", description: "Sabit yükle çalışan servislerin daha öngörülebilir maliyetli bir VPS veya fiziksel sunucuya alınması." },
      { title: "Sağlayıcı değişikliği", description: "Destek, performans veya bölge nedenleriyle başka bir sağlayıcıya geçiş." },
      { title: "Dağınık servisleri birleştirme", description: "Farklı yerlerde çalışan küçük servislerin tek bir yönetilebilir altyapıda toplanması." }
    ],
    process: [
      { title: "Keşif", description: "Mevcut ortama erişip envanteri ve bağımlılıkları çıkarıyoruz." },
      { title: "Plan", description: "Hedef altyapıyı, taşıma sırasını, geçiş penceresini ve geri dönüş adımlarını belirliyoruz." },
      { title: "Prova", description: "Yeni ortamı kurup veriyi test amaçlı taşıyor ve uygulamayı doğruluyoruz." },
      { title: "Geçiş", description: "Son senkronizasyon ve DNS değişikliğini planlanan saatte yapıyoruz." },
      { title: "İzleme ve kapanış", description: "Yeni ortamı izliyor, sorun yoksa eski sunucunun kapatılmasına birlikte karar veriyoruz." }
    ],
    faqs: [
      { q: "Taşıma sırasında sitem kapanır mı?", a: "Çoğu durumda kesinti son veri senkronizasyonu ve DNS değişikliği süresiyle sınırlı kalır. Sıfır kesinti mümkün olup olmadığı uygulamanın yapısına bağlıdır; bunu planlama aşamasında netleştiriyoruz." },
      { q: "E-postalarım da taşınıyor mu?", a: "E-posta barındırma ayrı bir konudur. Mevcut e-posta servisiniz web sunucusundaysa ya ayrı bir e-posta sağlayıcısına taşınmasını ya da MX kayıtlarının korunmasını planlıyoruz." },
      { q: "Buluttan kendi sunucuma geçmek mantıklı mı?", a: "Sabit ve öngörülebilir yükte çoğu zaman maliyet avantajı sağlar; ancak donanım, elektrik, bağlantı ve yedek sorumluluğu size geçer. Kararı bu artı ve eksileri birlikte tartarak veriyoruz." },
      { q: "Veritabanı büyükse taşıma nasıl yapılır?", a: "Önce tam bir kopya aktarılır, geçiş anında yalnızca aradaki değişiklikler senkronize edilir. Böylece kesinti penceresi veritabanının toplam boyutundan bağımsız olarak kısa tutulabilir." },
      { q: "Eski sunucuya geri dönmek gerekirse ne olur?", a: "Eski ortam doğrulama süresi boyunca çalışır durumda tutulur. DNS kaydını geri çevirerek hizmeti eski sunucudan sürdürmek mümkündür." }
    ],
    docs: [
      { label: "Docker Docs: Volumes", url: "https://docs.docker.com/engine/storage/volumes/" },
      { label: "Ubuntu Server Documentation", url: "https://ubuntu.com/server/docs" },
      { label: "Cloudflare Docs: DNS", url: "https://developers.cloudflare.com/dns/" }
    ],
    relatedPosts: ["kendi-sunucunu-kurmak-mi-bulut-sunucu-mu", "vps-vds-fiziksel-sunucu-farklari", "isletmeler-icin-ozel-hosting-cozumleri"],
    relatedServices: ["vps-vds-yonetimi", "hosting-cozumleri", "coolify-kurulumu"],
    serviceType: "Sunucu ve Bulut Altyapısı Migrasyonu"
  },

  // 15
  {
    slug: "ci-cd-otomatik-deployment",
    title: "GitHub CI/CD ve Otomatik Deployment",
    navLabel: "CI/CD ve Deployment",
    short: "Kodunuz GitHub'a gönderildiğinde test edilip sunucunuza kendiliğinden yayınlanmasını sağlıyoruz.",
    metaTitle: "GitHub CI/CD Kurulumu: Otomatik Test ve Deployment",
    metaDescription:
      "GitHub Actions, Coolify webhook deploy veya kendi sunucunuzda build: projenize uygun CI/CD hattını kuruyor, gizli değişkenleri ve geri dönüşü düzenliyoruz.",
    intro:
      "CI/CD, koda yapılan her değişikliğin otomatik olarak test edilip derlenmesi ve onaylandığında sunucuya yayınlanmasıdır; elle FTP, SSH ile dosya kopyalama ve “bende çalışıyordu” sorunlarını ortadan kaldırır. Projenizin büyüklüğüne ve sunucu kaynaklarına göre GitHub Actions, Coolify ile webhook tabanlı deploy veya kendi sunucunuzda build seçeneklerinden uygun olanı kuruyoruz.",
    description: [
      "Üç yaygın yaklaşım var ve her birinin yeri farklı. GitHub Actions'ta test ve build GitHub'ın çalıştırıcılarında yapılır, hazır imaj bir registry'e gönderilir ve sunucu yalnızca imajı çeker; sunucunuz build yükü taşımaz, ancak özel depolarda dakika kotası ve registry yönetimi gündeme gelir. Coolify ile webhook tabanlı deploy'da GitHub'a yapılan push Coolify'ı tetikler, Coolify kodu çeker, imajı sunucuda oluşturur ve yayınlar; kurulumu sade ve panelden yönetilebilir olsa da build kaynakları uygulamanın çalıştığı sunucudan karşılanır. Kendi sunucunuzda çalışan bir self-hosted runner ise GitHub Actions iş akışlarını kendi donanımınızda koşturur; kota sınırını ortadan kaldırır ama o makinenin güvenliği ve bakımı size kalır.",
      "Kaynağı sınırlı sunucularda build adımı canlıdaki uygulamayı yavaşlatabilir; özellikle Next.js gibi derlemesi bellek yoğun projelerde aynı anda iki build başlarsa sunucu belleği tükenebilir. Bu yüzden build'leri sıraya alıyor, eşzamanlı deploy sayısını bire sınırlıyor, gerekiyorsa build'i GitHub Actions'a taşıyıp sunucuya yalnızca hazır imajı gönderiyoruz. Kendi altyapımızda da ağır işleri kaynak ve sıcaklık sınırı gözeten bir kuyrukla sırayla çalıştırıyoruz.",
      "Hangi yöntem seçilirse seçilsin gizli değişkenler GitHub Secrets veya Coolify ortam değişkenlerinde tutulur, depoya yazılmaz. Ana dala doğrudan push yerine pull request ve otomatik testlerle ilerleyen bir akış, sağlık kontrolü geçmeyen sürümün yayına alınmaması ve bir önceki sürüme hızlı dönüş imkânı hattın ayrılmaz parçalarıdır."
    ],
    problems: [
      "Elle yapılan deploy'larda unutulan adımlar ve sunucular arasında farklılaşan kod",
      "Test edilmeden canlıya çıkan ve siteyi bozan değişiklikler",
      "Build sırasında belleği tükenen ve canlı uygulamayı da durduran küçük sunucular",
      "Depoya veya iş akışı dosyasına açıkça yazılmış API anahtarları",
      "Hatalı bir sürümden sonra eski sürüme nasıl dönüleceğinin bilinmemesi"
    ],
    scope: [
      { title: "Yöntem seçimi", description: "GitHub Actions, Coolify webhook deploy veya self-hosted runner seçeneklerini projenize ve sunucunuza göre karşılaştırıyoruz." },
      { title: "Dockerfile ve build optimizasyonu", description: "Çok aşamalı build, önbellek kullanımı ve küçük imaj boyutu için Dockerfile'ı düzenliyoruz." },
      { title: "Test ve kontrol adımları", description: "Lint, tip kontrolü ve mevcut testleri pull request'lerde otomatik çalıştırıyoruz." },
      { title: "Otomatik deploy", description: "Ana dala birleşen değişikliklerin sunucuya kendiliğinden yayınlanmasını sağlıyoruz." },
      { title: "Build kuyruğu ve kaynak sınırı", description: "Eşzamanlı build'leri sınırlıyor, gerekirse build'i sunucu dışına alıyoruz." },
      { title: "Gizli değişken yönetimi", description: "Anahtarları GitHub Secrets veya Coolify ortam değişkenlerine taşıyıp depo geçmişini kontrol ediyoruz." },
      { title: "Sağlık kontrolü ve geri dönüş", description: "Başarısız sürümün yayına girmesini engelleyen kontrol ve önceki sürüme dönüş adımı ekliyoruz." },
      { title: "Önizleme ortamları", description: "İstenirse pull request'ler için geçici önizleme adresleri yapılandırıyoruz." }
    ],
    useCases: [
      { title: "Next.js sitesinin kendi sunucuda yayını", description: "Vercel yerine Coolify ile her push'ta otomatik güncellenen bir site." },
      { title: "Küçük VPS'te API servisi", description: "Build'i GitHub Actions'ta yapıp yalnızca hazır imajı sunucuya çeken hafif bir hat." },
      { title: "Bot ve ajan projeleri", description: "Telegram veya Discord botunun kod değişikliğinde kesintisiz yeniden başlatılması." },
      { title: "Birden fazla ortam", description: "Ayrı dallardan test ve canlı ortamlarına bağımsız deploy." }
    ],
    process: [
      { title: "Mevcut akışın incelenmesi", description: "Deponuzu, bugünkü deploy yönteminizi ve sunucu kaynaklarını inceliyoruz." },
      { title: "Hat tasarımı", description: "Seçilen yöntemi, dal stratejisini, test adımlarını ve geri dönüş yolunu belirliyoruz." },
      { title: "Kurulum", description: "İş akışı dosyalarını, Dockerfile'ı, webhook'ları ve gizli değişkenleri yapılandırıyoruz." },
      { title: "Deneme deploy'ları", description: "Başarılı ve kasıtlı olarak hatalı sürümlerle hattın doğru davrandığını test ediyoruz." },
      { title: "Teslim", description: "Ekibinize akışı anlatıyor, sorun giderme adımlarını yazılı olarak bırakıyoruz." }
    ],
    faqs: [
      { q: "GitHub Actions mı Coolify mi seçmeliyim?", a: "Sunucunuz build'i rahat taşıyabiliyorsa Coolify'ın webhook tabanlı deploy'u daha sade bir yönetim sunar. Sunucu küçükse veya build ağırsa build'i GitHub Actions'ta yapıp sunucuya hazır imaj göndermek daha güvenlidir. İkisi birlikte de kullanılabilir." },
      { q: "Self-hosted runner ne zaman mantıklı?", a: "Özel depolarda Actions dakika kotasına sık takılıyorsanız, özel donanım gerekiyorsa veya build'in iç ağınızdaki kaynaklara erişmesi gerekiyorsa. Runner'ın çalıştığı makinenin güvenliği sizin sorumluluğunuza geçer; herkese açık depolarda önerilmez." },
      { q: "Build sırasında sitem yavaşlar mı?", a: "Build aynı sunucuda yapılıyorsa yavaşlayabilir. Eşzamanlı build'leri sıraya alarak ve gerektiğinde build'i sunucu dışına taşıyarak bu etkiyi azaltıyoruz." },
      { q: "GitLab veya Bitbucket ile de çalışıyor musunuz?", a: "Bu hizmet GitHub odaklıdır; ancak Coolify'ın webhook tabanlı deploy'u diğer Git sağlayıcılarıyla da kurulabilir. Projeye göre değerlendiriyoruz." },
      { q: "Hatalı bir sürüm yayına çıkarsa ne olur?", a: "Sağlık kontrolü başarısız olursa yeni sürüm devreye alınmaz. Kontrolü geçip sonradan sorun çıkaran bir sürümde ise bir önceki imaja veya commit'e dönüş adımı hazır olur." },
      { q: "Veritabanı değişiklikleri de otomatik mi uygulanıyor?", a: "Migration'ların deploy sırasında çalıştırılması mümkündür, ancak geri alınması zor değişikliklerde önce yedek alan ve gerekiyorsa onay bekleyen bir adım öneriyoruz." }
    ],
    docs: [
      { label: "GitHub Docs: GitHub Actions", url: "https://docs.github.com/actions" },
      { label: "Coolify Documentation", url: "https://coolify.io/docs" },
      { label: "GitHub Docs: Self-hosted runners", url: "https://docs.github.com/en/actions/hosting-your-own-runners" },
      { label: "Docker Docs: Multi-stage builds", url: "https://docs.docker.com/build/building/multi-stage/" }
    ],
    relatedPosts: ["github-otomatik-deployment-nasil-calisir", "coolify-nedir-vercel-alternatifi", "docker-nedir-isletmeler-icin"],
    relatedServices: ["coolify-kurulumu", "sunucu-kurulumu", "sunucu-bakim-guvenlik"],
    serviceType: "CI/CD Hattı Kurulumu ve Otomatik Deployment"
  }
];
