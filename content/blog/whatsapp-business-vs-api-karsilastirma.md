---
title: "WhatsApp Business mı, WhatsApp Business API mı? Tam Karşılaştırma"
slug: "whatsapp-business-vs-api-karsilastirma"
category: "karsilastirma"
description: "WhatsApp Business uygulaması ile WhatsApp Business API farkları. KOBİ için fiyat, özellik, otomasyon ve karar matrisi içeren tam rehber."
keywords: ["whatsapp business vs api", "whatsapp api farkı", "whatsapp business api kobi", "whatsapp api fiyat", "whatsapp otomasyon"]
publishedAt: "2026-06-23"
author: "Arda Kaya"
readingTime: "11 dakika"
relatedServices: ["ai-bot"]
ogImage: "/blog/og/whatsapp-business-vs-api-karsilastirma.png"
---

# WhatsApp Business mı, WhatsApp Business API mı? Tam Karşılaştırma

Türkiye'de işletmelerin yüzde sekseninden fazlası WhatsApp üzerinden müşteriyle iletişim kuruyor. Ancak bu işletmelerin büyük çoğunluğu hâlâ telefondan açtıkları sıradan WhatsApp Business uygulamasını kullanıyor ve günlük yüzlerce mesaja yetişmeye çalışıyor. "WhatsApp Business API var, otomasyon kurun" diyen ajanslar var, "bana yeterli" diyen işletme sahipleri var. Peki gerçekten ne zaman API'ye geçmek gerekiyor, ne zaman uygulama yeterli?

Bu yazıda WhatsApp Business uygulaması ile WhatsApp Business API'sini tüm boyutlarıyla karşılaştıracağız: özellik farkları, fiyat modelleri, hangi büyüklükteki işletme hangisine geçmeli, otomasyon kapasitesi, çok kullanıcılı erişim, raporlama, KVKK uyumu ve teknik kurulum yükü. Sonunda 5-50 kişilik bir KOBİ olarak size doğru kararı verebileceğiniz net bir matris bırakacağız. WhatsApp'ı sadece "mesaj geliyor, cevap yazıyoruz" döngüsünden çıkarıp gerçek bir satış ve destek kanalına çevirmek istiyorsanız, hangi sürümün ne işe yaradığını anlamak ilk adım. İşte iki seçeneğin gerçek hikâyesi.

## WhatsApp Business Uygulaması Nedir?

WhatsApp Business, Meta'nın 2018'de KOBİ'ler için piyasaya sürdüğü ücretsiz mobil uygulamadır. Normal WhatsApp'a çok benzer ama üzerine küçük işletme özellikleri eklenmiştir: işletme profili, kataloğun göründüğü vitrin, kısayol mesajları, otomatik karşılama ve etiketleme. Telefondan indiriyorsunuz, numarayı doğruluyorsunuz, beş dakikada kuruluyor.

- İşletme profili: ad, adres, çalışma saatleri, logo
- Katalog: ürünleri fotoğraf ve fiyatla listeleyebilirsiniz
- Hızlı yanıtlar: sık kullandığınız mesajlara kısayol
- Etiketler: müşterileri kategorilere ayırabilirsiniz
- Otomatik mesajlar: karşılama ve "uzaktayım" mesajları

Sınırlama tarafında: tek telefon, tek numara, en fazla dört ek cihazda eşzamanlı oturum (WhatsApp Web ile). Yani aynı numaraya beş kişilik bir satış ekibinin aynı anda erişip mesaj yazması mümkün değil. Toplu mesaj göndermek istiyorsanız "broadcast list" var ama 256 kişiyle sınırlı ve alıcıların sizi rehberine kaydetmiş olması gerek. Otomasyon kapasitesi ise tek satırlık karşılama mesajından öteye gitmiyor.

## WhatsApp Business API Nedir?

WhatsApp Business API, Meta'nın orta ve büyük işletmeler için sunduğu programatik erişim arayüzüdür. Burada "API" (Application Programming Interface) demek, başka yazılımların WhatsApp ile mesajlaşması için açılmış bir kapı demek. Yani uygulamayı telefondan açıp mesaj yazmak yerine, kendi CRM sisteminiz, sitenizdeki form, e-ticaret altyapınız ya da bir AI chatbot doğrudan WhatsApp üzerinden müşteriye mesaj atabiliyor.

Önemli detay: WhatsApp Business API'nin görünür bir arayüzü yoktur. Bunu kullanmak için ya kendi yazılımcı ekibinizin entegre etmesi ya da onaylanmış bir "Business Solution Provider" (BSP) üzerinden bağlanmanız gerekir. Türkiye'de bu BSP'ler Meta tarafından onaylanmış, KVKK uyumlu, faturalı çalışan firmalardır.

- Programatik gönderim: yazılım tetikler, mesaj gider
- Çok kullanıcılı panel: 50 kişi aynı numaradan yazabilir
- Mavi tik kurumsal hesap (onay süreciyle)
- Şablon mesaj sistemi: pazarlama mesajı için Meta onayı gerek
- Webhook: gelen mesajları başka sistemlere yönlendirme
- AI chatbot entegrasyonu: gerçek otomasyon mümkün

API tarafında karşılığında bir fiyat ödeniyor ve teknik kurulum gerekiyor. Detayları aşağıdaki tabloda netleştirelim.

## Özellik Karşılaştırma Tablosu

| Özellik | WhatsApp Business Uygulaması | WhatsApp Business API |
|---|---|---|
| **Kurulum** | 5 dakika, telefondan | 2-7 gün, BSP üzerinden |
| **Lisans ücreti** | Ücretsiz | Konuşma bazlı (₺0.65-2.50 arası) |
| **Eşzamanlı kullanıcı** | 1 telefon + 4 cihaz | Sınırsız (panel üzerinden) |
| **Yeşil/mavi tik** | Sınırlı (yeşil tik şartlı) | Resmi başvuruyla mavi tik |
| **Toplu mesaj** | Broadcast list (256 kişi) | Şablonlu kampanya (sınırsız) |
| **Otomasyon** | Karşılama + uzakta mesajı | Tam AI chatbot, koşullu akışlar |
| **CRM entegrasyonu** | Yok | Var (Salesforce, HubSpot, kendi CRM) |
| **Raporlama** | Temel istatistik | Detaylı analiz, dönüşüm metriği |
| **API çağrısı** | Yok | REST API + webhook |
| **Şablon mesaj onayı** | Gerekmez | Meta onayı gerekir (24-48 saat) |
| **KVKK uyumu** | İşletme sorumluluğu | BSP destekli, sözleşmeli |
| **Teknik gereksinim** | Sıfır | Orta-yüksek (BSP yönetirse düşer) |
| **Aylık sabit maliyet** | 0 ₺ | BSP paketine göre ₺1.500-15.000 |
| **Numara değiştirme** | Kolay | Karmaşık, transfer süreci var |

Bu tabloyu okurken dikkat: "API mutlaka daha iyi" diye bir okuma çıkmasın. Uygulama günde 30 mesaj alan bir butik için yeterliyken, API günde 500 mesajla boğuşan bir e-ticaret için kurtarıcıdır. Doğru sorgu, sizin hacminize ve hedefinize bakmak.

## Hangi Durumda Hangisi? Kullanım Matrisi

Aşağıda gerçek sektör örnekleri üzerinden hangi sürümün ne zaman doğru olduğunu görelim. Bu matris, 5-50 kişilik KOBİ'ler için yapıldı.

**Uygulama yeterli senaryolar:**

- **Mahalle eczanesi, butik kafe, küçük market**: günde 10-50 mesaj, tek kişi cevaplıyor, ürün katalog tutmak yeterli
- **Tek kişilik freelancer ya da danışman**: müşteriyle birebir iletişim, otomasyona ihtiyaç yok
- **Yeni kurulmuş işletme**: henüz mesaj hacmi belli değil, önce öğrenmek gerekiyor
- **Düşük yoğunluklu hizmet (B2B uzun satış)**: haftada 5-10 mesaj, kişisel ilişki ana iş

**API gerekli senaryolar:**

- **E-ticaret sitesi**: sipariş takip, kargo durumu, iade süreci otomatik bildirilmeli
- **Restoran zinciri, kurumsal rezervasyon**: şubeler arası mesaj dağıtımı, 24/7 yanıt
- **Emlak ofisi, otomotiv galeri**: gelen ilan başvurularını CRM'e bağlamak gerek
- **Klinik, güzellik merkezi, randevulu hizmet**: randevu hatırlatma mesajları, iptal yönetimi
- **Eğitim kurumu, kurs**: toplu kampanya mesajı, kayıt formu entegrasyonu
- **Çağrı merkezi yerine WhatsApp**: birden çok temsilci aynı numaradan yazıyor
- **AI chatbot kullanılacak**: programatik tetikleme şart

Eğer kendinizi ikinci listede üç ya da daha fazla maddede buluyorsanız, API yatırımı geri dönüşü altı ay içinde alır. Detaylı kurulum tarafında [WhatsApp Business API kurulum rehberimiz](/blog/whatsapp-business-api-kurulum) adım adım süreci anlatıyor.

## Maliyet Karşılaştırması: Üç Boyutta Bakış

Karşılaştırmayı sadece "ne kadar ödüyorum" üzerinden yapmak yanıltıcı. Üç boyutta bakmak gerekiyor: para, zaman ve karmaşıklık.

### Para (Aylık Toplam Maliyet)

| Hacim | WhatsApp Business (Uygulama) | WhatsApp Business API (BSP üzerinden) |
|---|---|---|
| Aylık 500 mesaj | 0 ₺ | ~ 1.500 ₺ (panel + konuşma) |
| Aylık 2.500 mesaj | 0 ₺ (yetişiyorsa) | ~ 3.500 ₺ |
| Aylık 10.000 mesaj | Yetişmez | ~ 8.500 ₺ |
| Aylık 50.000 mesaj | Mümkün değil | ~ 25.000 ₺ |

Uygulama tarafında para 0 ₺ ama 10.000 mesaja insan eliyle yetişmek için en az 3 tam zamanlı temsilci tutmanız gerekir. Üç temsilcinin aylık maaşı 75.000 ₺'yi geçer. Yani "ücretsiz" görünen seçenek, hacim büyüdüğünde aslında çok daha pahalı.

### Zaman (Mesaj Başına Cevap Süresi)

Uygulama tarafında ortalama cevap süresi insan kapasitesine bağlı. Yoğun saatlerde 20-40 dakika rahat geçer. API tarafında AI bot + şablon mesaj kombosu ile saniye seviyesinde otomatik cevap mümkün. Müşteri tatmininde bu fark dönüşüm oranını ikiye katlıyor. [İlgili: WhatsApp AI asistanı nedir?](/blog/whatsapp-ai-asistani-nedir)

### Karmaşıklık (Kurulum + Bakım)

- **Uygulama:** 5 dakikada kurulur, sıfır bakım.
- **API (kendi başınıza):** Meta Business Manager + Cloud API + sunucu + webhook + güvenlik. 1-2 hafta yazılımcı işi.
- **API (BSP üzerinden):** 2-7 gün, BSP halleder. Aylık sabit ödeme karşılığında bakım dahil.

KOBİ için neredeyse her durumda BSP yolu doğru. Kendi yazılım ekibinizi bu işe sokmak, daha pahalıya geliyor ve sürekli bakım yükü doğuruyor.

## Türkiye'deki KOBİ'ler İçin Pratik Notlar

Yurt dışı kaynaklardan okuduğunuz pek çok rehber Türkiye'deki gerçekleri yansıtmıyor. Yerel pazarda dikkat etmeniz gereken birkaç pratik konu var.

**KVKK ve aydınlatma metni:** WhatsApp üzerinden müşteriyle iletişim kuruyorsanız, özellikle pazarlama mesajı atıyorsanız, açık rıza ve aydınlatma metni şart. API üzerinden çalışırken bu süreç daha disipline edilir, BSP sözleşmesinde veri işleme şartları net yazılır. Uygulama tarafında ise süreç işletme sahibinin omuzlarındadır ve denetlemede sıkıntı çıkabilir.

**Faturalandırma ve gider yazma:** WhatsApp Business uygulamasının lisansı ücretsiz olduğu için herhangi bir gider kalemi yok. API tarafında BSP size aylık TL faturalı ödeme yapma imkânı sunar; muhasebeniz için bu çok daha temiz. Doğrudan Meta üzerinden API kullanırsanız ödeme USD ile yapılır, dövizle gider yazma karmaşıklığı çıkar.

**Mavi tik kurumsal onay süreci:** API üzerinden yeşil ya da mavi tikli "Resmi İşletme" hesabı başvurusu yapılabiliyor. Bu, müşteride güven artırıyor. Uygulamada bu mümkün ama şart çok daha sıkı. Mavi tik müşteri dönüşüm oranını yüzde on beşe varan oranda etkiliyor.

**24 saat penceresi:** API tarafında müşteri size yazmadıysa ya da yazıp 24 saat geçtiyse, ona ancak Meta onaylı şablon mesaj atabilirsiniz. Bu kural pazarlama açısından önemli. Şablonu önceden yazıp onaylatmak gerekir. Uygulamada böyle bir kısıt yok ama hacim de sınırlı.

## Karar Matrisi: Hangi İşletme Hangisini Seçmeli?

| Profil | Aylık Mesaj Hacmi | Ekip | Önerimiz |
|---|---|---|---|
| Mikro işletme, tek kişi | 0-300 | 1 | WhatsApp Business Uygulaması |
| Küçük butik, yerel mağaza | 300-1.500 | 1-3 | WhatsApp Business Uygulaması + manuel etiketleme |
| Büyüyen e-ticaret | 1.500-5.000 | 2-5 | API'ye geçiş zamanı, BSP araştırın |
| Çok şubeli işletme | 5.000-20.000 | 5-15 | API + AI chatbot şart |
| Kurumsal, yüksek hacim | 20.000+ | 15+ | API + custom entegrasyon + 7/24 bot |

Karar verirken sadece bugünün hacmine değil, 6-12 ay sonraki büyüme tahmininize de bakın. API'ye geçiş, numara taşıma ve şablon onayı içerdiği için bir gecede olmaz; planlı bir geçiş gerekir.

## Sıkça Sorulan Sorular

**API'ye geçince mevcut WhatsApp numaramı kaybeder miyim?**
Hayır, numaranızı API'ye taşıyabilirsiniz. Ancak bu süreçte numaranın WhatsApp Business uygulamasından silinmesi gerekiyor. Geçiş kalıcıdır, API'ye taşıdıktan sonra aynı numarayla mobil uygulamayı kullanamazsınız.

**WhatsApp Business uygulamasında otomatik cevap yapay zeka mı?**
Hayır. Uygulamadaki "otomatik karşılama" yalnızca önceden yazdığınız sabit metni gönderir. Gelen mesajı anlayıp uygun cevap üretme, sadece API üzerinde AI chatbot ile mümkün.

**API ile gönderilen her mesaj ücretli mi?**
Tek tek mesaj değil, 24 saatlik "konuşma" bazında ücretlendirilir. Müşteri size yazdıktan sonra 24 saat boyunca cevap vermeniz tek konuşma sayılır. Pazarlama mesajları (şablon) daha pahalıdır, hizmet ve doğrulama mesajları daha ucuzdur. Detaylı fiyatlar [WhatsApp chatbot fiyat sayfamızda](/whatsapp-chatbot-fiyat).

**BSP olmadan API'yi tek başıma kurabilir miyim?**
Teknik olarak mümkün (Meta Cloud API). Ancak Türkiye'den fatura, KVKK uyumu, sürekli destek ve şablon onay süreci için BSP kullanmak çok daha pratiktir.

**WhatsApp Business uygulaması ile toplu mesaj atabilir miyim?**
Sadece "broadcast list" ile, en fazla 256 kişiye ve sadece sizi rehberine kaydetmiş kişilere. Pazarlama amaçlı toplu gönderim için tek yasal ve sürdürülebilir yol API + şablon mesajdır. Aksi yöntemler (toplu gönderim aracı, ikinci telefon, taklit uygulamalar) numaranızın Meta tarafından kalıcı olarak banlanmasına neden olur ve bu ban geri alınamaz.

**API'ye geçince mesaj cevap süresi gerçekten kısalır mı?**
Çok kısalır. Uygulamada insan eli ortalama 15-40 dakikada cevap verirken, API üzerinde AI chatbot saniye seviyesinde geri dönüş yapar. Müşteri "ilgilenildiğini" hissettiği için satın alma kararı %20-35 oranında artar. Özellikle e-ticarette terk edilmiş sepet kurtarma akışları en yüksek getiriyi sağlıyor.

**Hangi sektörler API'ye geçişten en çok kazanıyor?**
Sıralama olarak: e-ticaret, kargo/lojistik, klinik ve güzellik merkezleri, emlak ve otomotiv galerileri, kurumsal eğitim, çağrı merkezi yerine WhatsApp kullanan finans/sigorta. Bu sektörlerde API yatırımının geri dönüş süresi genelde 4-7 ay arasında.

## PORTZEN ile Doğru Seçimi Yapmak

WhatsApp Business uygulaması ile API arasındaki karar, basit bir "hangisi daha iyi" sorusu değil. İşletmenizin mesaj hacmi, ekip büyüklüğü, otomasyon ihtiyacı ve büyüme planına göre cevap değişiyor. Yanlış zamanda API'ye geçmek aylık 3.500 ₺'lik gereksiz bir gider, doğru zamanda geçmemek ise kaçırılan müşteri ve yorgun ekip demek.

PORTZEN olarak İzmir merkezli, 5-50 kişilik KOBİ'lerle çalışan bir ajansız. WhatsApp tarafında size üç adımda destek oluyoruz:

- **Mevcut durum analizi**: hacminizi, ekibinizi ve hedefinizi konuşup hangi sürümün uygun olduğunu netleştiriyoruz
- **Kurulum ve geçiş**: eğer API doğru çözümse, BSP seçimi, numara taşıma, şablon onayı ve panel kurulumu bizde
- **AI chatbot entegrasyonu**: [WhatsApp AI asistanımız](/whatsapp-ai-asistani) Türkçe diyalog, ürün katalog cevabı, randevu alma ve sipariş takibi gibi senaryoları işletmenize uyarlıyor

Eğer hâlâ kararsızsanız ya da API'ye geçişin sizin için doğru zamanlama olup olmadığını konuşmak istiyorsanız [iletişim sayfamızdan](/iletisim) ulaşın. 30 dakikalık ücretsiz görüşmede mesaj hacminize bakıp size en mantıklı yolu öneriyoruz. Hazırsanız, WhatsApp'ı pasif bir gelen kutusu olmaktan çıkarıp aktif bir satış kanalına çevirelim.
