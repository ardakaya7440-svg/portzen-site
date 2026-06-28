---
title: "Spor Salonu İçin QR Check-in ve Üye Devam Takip Sistemi"
slug: "spor-salonu-qr-check-in"
category: "sektorel"
description: "Spor salonunuzda QR check-in, üye devam takibi, dondurma yönetimi ve churn azaltma için baştan sona otomasyon rehberi. Maliyet, kurulum, KPI."
keywords: ["spor salonu qr check-in", "üye devam takibi", "spor salonu otomasyon", "fitness crm", "churn azaltma spor salonu", "spor salonu whatsapp"]
publishedAt: "2026-06-24"
author: "Arda Kaya"
readingTime: "11 dakika"
relatedServices: ["otomasyon", "ai-bot"]
ogImage: "/blog/og/spor-salonu-qr-check-in.png"
---

# Spor Salonu İçin QR Check-in ve Üye Devam Takip Sistemi

Spor salonu işletmeciliğinin en sinsi sorunu, üyenin abone olduktan sonra sessizce yok olmasıdır. Aidat ödemesi geçen ay yapılmıştır, kart hâlâ aktiftir ve siz bu üyenin son 18 gündür tesisinize girmediğini fark etmemişsinizdir. Üye fark ettiğinde ise zaten "ben buraya gelmiyorum, dondurayım" cümlesi WhatsApp'tan düşer. Oradan tek adım sonra üyelik iptali gelir. Türkiye'deki orta ölçekli bir spor salonunda yıllık churn oranının yüzde 45 ile 70 arasında değiştiğini söylesek, çoğu işletme sahibi şaşırmaz; çünkü bu sızıntıyı her ay tabloda görüyor ama nereden başlayacağını bilmiyor.

PORTZEN olarak Ankara, İstanbul ve İzmir'deki spor salonu, CrossFit kutusu ve pilates stüdyosu projelerimizde gördüğümüz tablo net: temel sorun pazarlama değil, operasyonel sessizlik. Üyenin gelmediğini sistem görmüyor, gördüğünde uyarmıyor, uyardığında da kimse o üyeyi geri kazanmak için aramıyor. Bu yazıda, kapıya yerleştireceğiniz basit bir QR check-in noktasından başlayarak üye devam takibi, 14 gün devamsızlık alerti, dondurma talepleri, PT randevuları, aidat hatırlatma ve NPS anketine kadar uçtan uca bir otomasyon mimarisini anlatacağız. Hem teknoloji seçimini hem maliyet kalemlerini hem de gerçek hayatta görülen ölçülebilir sonuçları paylaşacağız; böylece kararı tahmine değil, sayılara dayandırırsınız.

## QR Check-in Sisteminin Mantığı ve Donanım Kurulumu

QR check-in basit görünür ama doğru kurulduğunda spor salonunuzun tüm devam takibi, kampanya kurgusu ve churn analizinin temelini oluşturur. Üye, telefonundaki dijital üyelik kartını veya uygulamadaki QR'ı tesise girişte tablete okutur; sistem o anda kim, hangi saatte girdi bilgisini veritabanına yazar. Bu sadece bir "log" değil; sonraki tüm otomasyonların tetikleyicisidir.

### Donanım Tercihi: Tablet mi, Turnike mi

Küçük ve orta ölçekli salonlarda en mantıklı çözüm, resepsiyona yerleştirilen bir Android veya iPad tablettir. 10 inçlik bir tablet (15.000 ile 25.000 TL arası), zemine sabitlenmiş bir stand (1.500 ile 3.000 TL) ve arka kamerayla QR okuyan basit bir web tabanlı uygulama yeterlidir. Turnike sistemleri 40.000 ile 120.000 TL arasında değişir ve genellikle 500+ aktif üyeli işletmeler için anlam kazanır. Yeni başlayan bir salon, ilk etapta tablet kurulumuyla yola çıkıp ileride turnikeye geçebilir.

### QR Üretimi ve Üye Kimliği

Her üyeye özel, dinamik bir QR üretmek doğru yaklaşımdır. Üye uygulamadan veya WhatsApp üzerinden kendi kişisel kartına ulaşır; QR kodun arkasında üyenin ID'si, üyelik tipi ve geçerlilik tarihi bulunur. Statik QR (kart üzerine baskılı sabit kod) ucuz görünür ama kart paylaşımı, dondurma sonrası geçersiz kalma gibi durumları yönetemediği için tavsiye etmiyoruz.

### Yazılım Tarafı

İster özel geliştirilmiş bir CRM, ister hazır fitness yazılımı (Wellnesse, Fitnessbox, Mindbody) kullanın; kritik nokta QR okutmanın "girişe gönderdiği veriyi" otomasyon platformunuza (n8n, Make veya Zapier) iletebilmesidir. Bu entegrasyonu webhook üzerinden kurarsanız bundan sonraki tüm akışlar, üye girişini bekleyen tetikleyicilerle kolayca tasarlanabilir. Detaylı süreç tasarımı için [işletmeler için süreç otomasyonu rehberini](/blog/isletmeler-icin-surec-otomasyonu) inceleyebilirsiniz.

## Üye Devam Takibi ve Davranış Skorlama

QR ile veri akışı başladıktan sonra her üyenin haftalık, aylık ve dönemlik devam profili oluşur. Bu noktada artık "X üyemiz var" değil, "X üyemiz var ve şu kadarı düzenli geliyor, şu kadarı sallantıda, şu kadarı risk altında" diyebilirsiniz. PORTZEN'in birlikte çalıştığı kutu ve stüdyolarda kurguladığımız davranış skoru genellikle üç segmente bölünür.

### Aktif, Pasifleşen ve Risk Altındaki Üye Segmentleri

Aktif üye, son 14 günde en az 6 kez tesise gelen üyedir. Bu kişi memnun bir kullanıcıdır; ona aidat hatırlatma, PT yönlendirmesi veya arkadaş tavsiyesi kampanyası yapılır. Pasifleşen üye, son 14 günde 1 ile 3 kez gelmiş üyedir; bu kişi henüz kaybedilmedi ama motivasyon kaybı yaşıyor. Risk altındaki üye, 14 günden fazla süredir tesise hiç gelmemiş kişidir; bu kişi bir sonraki ay aidatını ödemeden iptal etme veya dondurma talebinde bulunma riskini taşır.

### Devam Skorunu Görselleştirme

Yöneticiye sade bir panel sunmak şarttır. Excel kullanan bir işletme bile, Google Data Studio veya Looker ile haftalık olarak "kırmızı listedeki üye sayısı, son hafta giriş sayısı, ortalama devam günü" gibi göstergeleri görebilir. Bizim önerdiğimiz mimaride bu panel her sabah 09.00'da işletme sahibinin e-postasına gider. Bu disiplin, üye kaybını fark ettiğiniz andan müdahale ettiğiniz ana kadarki süreyi haftalardan günlere indirir.

### Antrenörle Veriyi Paylaşmak

Çoğu spor salonu antrenörlerin müşteri ilişkisini sahiplendiği yerlerdir. PT'lere haftalık olarak kendi öğrencilerinin devam raporunu otomatik göndermek (her pazartesi WhatsApp'a düşen 3 satırlık özet) güçlü bir araçtır. Detaylı devam takibi için [spor salonu CRM otomasyonu sayfamızda](/crm-otomasyonu/spor-salonu) örnek senaryolara göz atabilirsiniz.

## 14 Gün Devamsızlık Alerti ve Otomatik Geri Kazanım

Sektörün en güçlü tek otomasyonu, 14 gün gelmeyen üyeye atılan kişiselleştirilmiş mesajdır. Bu basit akışı doğru kurgulayan salonlar, dondurma talebini yüzde 25 ile 40 arasında azaltabiliyor; tamamen iptal edilen üyelik oranını ise yüzde 15-20 bandında düşürebiliyor.

### Doğru Tetikleyici Zamanlaması

Devamsızlık alerti için en uygun pencere 12 ile 18 gün arasıdır. 7 gün çok erkendir, üye tatildeydi diye yanıt vermez. 30 gün geç kalmıştır, üye zaten kafasında "burayı bırakacağım" kararını vermiştir. Biz PORTZEN olarak 14 ile 16 gün arasını öneriyoruz; akış üyenin son giriş tarihinden itibaren saysın ve dondurma talebi olan üyeleri kapsam dışı bıraksın.

### Mesaj İçeriği ve Kişiselleştirme

Mesaj kuru kuruya "bir süredir gelmiyorsun" olmamalı. PORTZEN ekibiyle test ettiğimiz en iyi performans veren şablon şu yapıdadır: ismiyle hitap, son geliş tarihini hatırlatma, kısa bir motivasyon cümlesi, somut bir teklif. Örneğin: "Merhaba Mert, son ziyaretin 3 Haziran'dı. Antrenmana ara vermek normal, ama tempoyu tekrar yakalamak için bu hafta PT Burak ile 1 ücretsiz seans hediyemiz var. Hangi gün uygun olur?" Bu mesaj, otomatik olarak [WhatsApp AI asistanı](/whatsapp-ai-asistani) üzerinden gönderilir ve cevap geldiğinde takvime oturur.

### Cevap Yönetimi ve Sahaya Aktarma

Otomasyonun zayıf halkası genellikle "üye cevap verdi ama kimse görmedi" senaryosudur. Bunu önlemek için cevaplar resepsiyon WhatsApp'ına düşmeli, panelde "cevapladı, takip ediliyor" etiketi açılmalı ve 24 saat içinde insan elinden geçmelidir. Bot başlatır, insan kapatır kuralı her zaman geçerlidir. Cevap verme oranları ortalama yüzde 22-35 bandındadır ve bu mesajların yüzde 60'ı geri dönen üyeye dönüşebilir.

## Üyelik Dondurma, Aidat ve Sözleşme Otomasyonu

Spor salonunun arka ofis işleri ne kadar düzenli ise çalışan memnuniyeti ve kasa düzeni o kadar iyidir. Dondurma, aidat hatırlatma ve sözleşme yenileme süreçlerinin otomasyonu, hem işletme sahibinin zamanını hem de gereksiz yüz yüze tartışmaları azaltır.

### Dondurma Talepleri ve Limit Yönetimi

Türkiye'deki tipik bir yıllık üyelikte 4 ile 8 hafta arası dondurma hakkı tanınır. Bu hakkın takibinin manuel yapılması ciddi hatalara ve müşteri şikayetine yol açar. Otomasyonda dondurma talebi WhatsApp üzerinden gelir, sistem üyenin kalan hakkını kontrol eder, uygunsa otomatik onaylar ve üyeliğin bitiş tarihini günceller. Uygun değilse resepsiyona düşer. Bu basit akış bile haftada 2-3 saat zaman kazandırır.

### Aidat Hatırlatma ve Tahsilat

Aylık üyeliklerde aidatın yenileme tarihinden 5 gün önce, 1 gün önce ve gününde olmak üzere üç kademeli WhatsApp hatırlatma kurmak idealdir. Yıllık üyeliklerde 30 gün ve 7 gün önce hatırlatma yapmak ve son hafta bir kampanya teklifi sunmak, üye kaybının önüne geçer. Tahsilat linkini mesajın içine eklemek (iyzico, Param veya benzeri sanal POS), ofise gelme zahmetini ortadan kaldırır ve ödeme oranlarını yüzde 30'a kadar artırır.

### Sözleşme ve KVKK Yönetimi

Yeni üye kaydında ıslak imza, sözleşme arşivi ve KVKK rızası kâbus olabiliyor. e-İmza veya KEP zorunlu olmasa da [KVKK uyumlu müşteri verisi yönetimi](/blog/kvkk-musteri-verisi-rehberi) için sözleşmenin dijital onayı, tarih damgası ve geri çekme hakkının açıkça belirtilmesi şarttır. Üyenin telefonuna gelen onay linki, hem yasal hem operasyonel olarak işinizi kolaylaştırır.

## PT Randevuları, Beslenme Programı ve Üye Deneyimi

Salonun temel ürünü grup dersi veya serbest çalışma olsa da müşteri sadakatini belirleyen şey kişiselleştirilmiş ek hizmetlerdir. PT randevuları, beslenme programı ve özel etkinliklerin otomasyonu, üyeyi sadece "salona giden biri"nden "buranın insanı" haline getirir.

### PT Randevu Yönetimi

Antrenörlerin takvimi WhatsApp üzerinden açılabilir. Üye "Burak hocayla PT istiyorum" yazdığında bot Burak'ın boş saatlerini gösterir, üye seçer, sistem her iki tarafa onay mesajı gönderir, randevudan 24 saat önce ve 2 saat önce otomatik hatırlatma yapılır. No-show oranı bu kurguyla yüzde 30'lardan yüzde 8-10 bandına iner.

### Beslenme Programı ve İçerik Dağıtımı

Üyeye haftalık beslenme önerisi, antrenman programı veya motivasyon içeriği PDF olarak göndermek artık standart bekleniyor. Bu içerikleri toplu ve segmente göre göndermek için [WhatsApp Business API kurulumu rehberimizi](/blog/whatsapp-business-api-kurulum) incelemenizi öneririz. Yasal toplu mesaj göndermek için [WhatsApp toplu mesaj ve İYS uyumu yazımız](/blog/whatsapp-toplu-mesaj-yasal-otomasyon) da kritik kaynaktır.

### NPS Anketi ve Memnuniyet Takibi

Üyelik 30. günde, 90. günde ve yıllık olarak otomatik NPS anketi göndermek, sahada hissedemeyeceğiniz problemleri yüzeye çıkarır. 0-10 ölçeğindeki tek soru ve isteğe bağlı bir açık uçlu kutucuk yeterlidir. 0-6 puan veren üye için sistem otomatik olarak yönetici WhatsApp'ına alarm düşürür; bu kişiyi şahsen aramak, churn ihtimalini ciddi şekilde düşürür.

## Maliyet, ROI ve Tahmini Geri Dönüş Süresi

Çoğu salon sahibi otomasyona karar verirken iki rakam arasında sıkışıyor: aylık yazılım maliyeti ve elde edilecek tasarruf. Sayıları açık koymak gerekiyor.

### Aylık ve Tek Seferlik Maliyetler

Tek seferlik kurulum giderleri: tablet (15.000-25.000 TL), zemin standı (1.500-3.000 TL), QR yazılımı geliştirme veya entegrasyon (15.000-40.000 TL). Aylık tekrarlayan giderler: CRM yazılımı (500-1.500 TL/ay), WhatsApp Business API mesaj ücreti (üye sayısına bağlı, ortalama 1.000-3.500 TL/ay), otomasyon platformu (n8n self-host ücretsiz, Make 800-2.500 TL/ay), SMS paketi (gerekirse, 0,15 TL/adet).

### Beklenen Tasarruf

400 aktif üyeli orta ölçekli bir salonda otomasyon sonrası tipik kazanımlar: dondurma talebinde yüzde 25 azalma, churn'da yüzde 15-20 düşüş, no-show'da yüzde 60'a varan iyileşme, resepsiyon iş yükünde haftada 8-12 saat tasarruf. Yıllık üyelik ortalaması 9.000 TL kabul edersek, 30 üye daha az kaybetmek 270.000 TL doğrudan ciro demektir. Bu rakamın yanında 12.000 TL/yıl yazılım maliyeti tartışmasız geri döner.

### Geri Dönüş Süresi

PORTZEN projelerinde uçtan uca kurulan sistemlerin başabaş süresi ortalama 3 ile 5 ay arasıdır. Bu süre küçük stüdyolarda 6 aya çıkabilir, büyük zincirlerde 2 aya kadar inebilir. Karar verirken sadece maliyeti değil, fırsat maliyetini de hesaplamak gerekir.

## Yaygın Hatalar

- QR check-in'i kurup verilerle hiçbir şey yapmamak. Sistem sadece kim girdi diye saymak için değil, kim gelmedi diye uyarmak için vardır.
- 14 gün devamsızlık mesajını şablon halinde, isimsiz ve teklifsiz göndermek. Geri dönüş oranı yüzde 5'in altında kalır.
- Dondurma süresini manuel takip etmek. Üye 6 hafta hakkı varken siz farkında olmadan 8 hafta verirsiniz ve ciro kaybına uğrarsınız.
- WhatsApp toplu mesajları kişisel hattan göndermek. Numaranız bir hafta içinde banlanır ve 200+ üye ile iletişim kanalınız kapanır.
- PT no-show'larını sadece sözel uyarmak. Antrenörün boş kalan saati maliyetlidir; ücretlendirme politikası ve hatırlatma akışı net olmalıdır.
- KVKK ve İYS izinlerini almadan pazarlama mesajları göndermek. 2026 itibarıyla cezalar küçük bir salonu zora sokacak boyutta.
- Sadece yeni üye kazanmaya odaklanıp mevcut üyenin sessiz kaybını görmezden gelmek. Yeni üye edinme maliyeti, mevcut üyeyi tutmanın 5-7 katıdır.

## Sıkça Sorulan Sorular

### QR check-in sistemi için kaç tablet gerekir?

Tek girişli salonlarda bir tablet yeterlidir. Çift girişi veya kadın-erkek ayrı katları olan salonlarda her giriş için ayrı bir tablet kurmak doğrudur. 600+ üyeli yoğun saatlerde 2 tablet veya bir turnike sistemi yığılmaları engeller.

### Üye telefonu yanında yoksa nasıl girer?

Sistem üyenin TC kimlik, telefon numarası veya 4 haneli özel PIN ile manuel girişine de izin vermelidir. Bu özelliği kapatmamak, telefonunu unutan üyenin mağdur olmaması için kritiktir; ancak bu girişler ayrı raporlanmalı ki istismar tespit edilebilsin.

### Manuel devam takibine kıyasla otomasyon ne kazandırır?

PORTZEN olarak ölçtüğümüz ortalama; resepsiyon iş yükünde yüzde 35 azalma, üye memnuniyet skorunda 12-18 puan artış, yıllık churn'da yüzde 20'ye varan iyileşme. Sayısal etki salonun mevcut disiplinine göre değişir; halihazırda Excel'de düzenli takip yapan bir işletmenin kazanımı, hiç takip yapmayana göre daha sınırlıdır.

### Hangi CRM veya yazılımı seçmeliyim?

Hazır çözümlerden Wellnesse, Fitnessbox, Mindbody ve Gymify yaygın seçimlerdir. Özel ihtiyaçlarınız varsa veya WhatsApp AI asistanını derinlemesine entegre etmek istiyorsanız, mevcut bir CRM üstüne özel akışlar kurmak daha sürdürülebilir olur. Karar vermeden önce [HubSpot ve Zoho karşılaştırma yazımız](/blog/hubspot-vs-zoho-crm-turkce) genel CRM perspektifi sunar.

### Üye verilerinin güvenliği nasıl sağlanır?

KVKK kapsamında üye verileri Türkiye'de bulunan sunucularda tutulmalı, açık rıza alınmalı, üyenin verisini silme ve düzeltme hakkı net olarak sözleşmede yer almalıdır. Yedekleme, şifreleme ve yetki yönetimi olmadan kurulan hiçbir sistem güvenli sayılmaz.

## PORTZEN ile Spor Salonu Otomasyonu Kurmak

QR check-in, devam takibi ve WhatsApp tabanlı üye iletişimi tek başına bir yazılım değil; sahanızı tanıyan, hata noktalarını gözlemleyen ve günden güne iyileştirilen bir sistemdir. PORTZEN olarak Ankara merkezli olarak Türkiye'nin farklı şehirlerinde spor salonu, CrossFit kutusu, pilates ve yoga stüdyosu projeleri yürütüyoruz. Size özel donanım, yazılım ve süreç önerisi için [iletişim sayfamızdan](/iletisim) ulaşabilir; [spor salonu için WhatsApp AI asistanı](/whatsapp-ai-asistani/spor-salonu) ve [spor salonu web tasarım](/web-tasarim/spor-salonu) hizmetlerimizi inceleyebilirsiniz. İlk demo görüşmesinde mevcut üye verinizden çıkardığımız kaba bir kayıp tablosu paylaşıyoruz; rakamı görmek karar vermeyi kolaylaştırıyor.
