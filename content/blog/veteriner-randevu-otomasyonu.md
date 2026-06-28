---
title: "Veteriner Klinik İçin Randevu ve Aşı Hatırlatma Sistemi 2026"
slug: "veteriner-randevu-otomasyonu"
category: "sektorel"
description: "Veteriner klinikler için WhatsApp randevu, aşı ve parazit hatırlatma sistemi kurulum rehberi. CRM, hasta dosyası, sadakat ve maliyet adım adım."
keywords: ["veteriner randevu", "veteriner whatsapp", "veteriner aşı hatırlatma", "veteriner crm", "veteriner klinik otomasyon", "veteriner randevu sistemi"]
publishedAt: "2026-06-24"
author: "Arda Kaya"
readingTime: "11 dakika"
relatedServices: ["ai-bot", "otomasyon"]
ogImage: "/blog/og/veteriner-randevu-otomasyonu.png"
---

# Veteriner Klinik İçin Randevu ve Aşı Hatırlatma Sistemi 2026

Veteriner kliniklerinin günü çoğunlukla aynı tabloyla başlıyor: sabah saat dokuzda telefon çalıyor, "Pamuk'un karma aşısı ne zamandı, kayıt bakar mısınız?" Aynı anda bekleme salonunda iki köpek, muayene odasında bir kedi, asistan elinde aşı kartı, hekim ise ultrasonun başında. Telefonu kim açacak, kim ajandaya bakacak, kim sahibe geri dönecek belli değil. Bu kaos günde bir-iki saatlik zaman kaybı, hatırlatılmayan aşılar nedeniyle düşen sahip sadakati ve "biz size mesaj atmıştık ama cevap alamadık" cümlesiyle giden hastalar olarak geri dönüyor. Türkiye'de 15 binin üzerinde veteriner kliniği var ve neredeyse hepsi bu döngüde sıkışmış durumda.

Bu yazıda veteriner klinikler için **WhatsApp randevu ve aşı hatırlatma sistemi** nasıl kurulur, hangi akışlar otomatikleşir, koruyucu hekimlik takvimi nasıl dijitalleşir, sahip iletişimi ve sadakat nasıl güçlenir adım adım anlatıyoruz. PORTZEN olarak biz İzmir, İstanbul ve Ankara başta olmak üzere 30'un üzerinde veteriner kliniğine WhatsApp asistanı ve CRM kurduk. Yazdıklarımız teorik değil, klinik içinden çıkmış deneyim. Yazının sonunda kendi kliniğinizde hangi modülleri açacağınızı, kurulumun ne kadar süreceğini ve aylık maliyetin hangi kalemlerden oluştuğunu anlamış olacaksınız.

## Veteriner Kliniklerde Aşı ve Randevu Takibi Neden Hâlâ Manuel?

Veteriner hekimlik teknik tarafta hızla dijitalleşse de hasta sahibi iletişimi çoğu klinikte hâlâ kâğıt aşı kartı, ajanda defteri ve cep telefonundan WhatsApp ile yürüyor. PORTZEN'in saha verisine göre orta ölçekli bir veteriner kliniği günde 50-120 arası WhatsApp ve telefon mesajı alıyor. Bu mesajların dağılımı oldukça tekrarlı:

- Randevu alma ve değiştirme talepleri (yaklaşık yüzde 30)
- "Sıradaki aşı ne zamandı" tarzı koruyucu hekimlik soruları (yaklaşık yüzde 20)
- Parazit, mama, vitamin tavsiyesi (yaklaşık yüzde 15)
- Ameliyat ve tahlil sonrası kontrol soruları (yaklaşık yüzde 15)
- Çalışma saatleri, acil ulaşım, adres (yaklaşık yüzde 10)
- Yeni hasta ilk muayene talebi (yaklaşık yüzde 10)

### Manuel sistemin görünmeyen maliyeti

Tek bir asistan ajandayı tutuyor, aşı kartını dolduruyor, WhatsApp'a bakıyor, telefonu açıyor. Hekim muayenedeyken bir başkasının üç işi birden yapması mümkün değil. Sonuçta randevular çakışıyor, aşı hatırlatması atlanıyor, sahip altı ay sonra "bizim Boncuk'un karma aşısı gecikti mi" diye sorduğunda iş işten geçmiş oluyor. Üstelik unutulan her aşı, kaçırılan her parazit dozu, atlanan her kontrol klinik için doğrudan ciro kaybı, hasta için ise sağlık riski.

### Kâğıt aşı kartı dönemi neden bitmeli?

Kâğıt karta yazılan tarih sahibinin cüzdanında kayboluyor, klinik kaydı ise ya defterde ya da Excel'de duruyor. Hekim değişikliği, çoklu şube, tatil dönemi gibi durumlarda kayıt erişilemez hale geliyor. Dijital hasta dosyası ve otomatik hatırlatma bu sorunu kökünden çözüyor. Klinik dijitalleşme yolculuğunda nereden başlayacağınızı tartıştığımız [CRM otomasyonu rehberi](/blog/crm-otomasyonu-rehberi) yazımız genel çerçeveyi de iyi anlatıyor.

## WhatsApp ile Randevu Akışı: Tür, Irk, Yaş, Ön Muayene

Veteriner kliniği için ilk ve en hızlı kazanım WhatsApp üzerinden çalışan akıllı randevu botu. Sahip ilk mesajı attığında bot kısa bir karşılama yapıyor ve aşamalı olarak gerekli bilgileri topluyor.

### 1. Hasta tanımlama

Bot önce sahip için temel bilgileri istiyor:

- Hayvanın adı
- Türü (kedi, köpek, kuş, kemirgen, sürüngen, egzotik)
- Irk (Golden, British Shorthair, melez vb.)
- Yaş ve cinsiyet
- Kısırlaştırma durumu

Kayıtlı hastaysa bot telefon numarasından tanıyıp "Pamuk için mi geliyorsunuz, Boncuk için mi?" diye soruyor. Çoklu evcil hayvan sahipleri için bu detay kritik.

### 2. Randevu sebebi ve aciliyet

Sonraki adım randevunun sebebi:

- Rutin muayene
- Aşılama (karma, kuduz, bordatella)
- Parazit uygulaması
- Kontrol (ameliyat sonrası, tahlil sonrası)
- Hastalık şikayeti (kusma, ishal, iştahsızlık, topallama)
- Estetik ve bakım (tırnak, kulak, diş)
- Acil

Acil seçildiğinde bot doğrudan nöbetçi hekimi devreye alıyor ve klinik telefonunu paylaşıyor. Diğer sebeplerde ön muayene anketi devreye giriyor.

### 3. Ön anamnez ve fotoğraf

Şikayet bazlı randevularda bot kısa bir ön anamnez yapıyor: ne zamandır şikayet var, beslenme alışkanlığı değişti mi, kusma sıklığı, ateş kontrolü yapıldı mı. Gerekirse fotoğraf veya video isteyebiliyor. Bu bilgi hekimin paneline düşüyor ve muayene öncesi hekim 30 saniyede dosyayı okumuş oluyor. Hızlı triyaj demek, klinikte daha az bekleme ve daha doğru zaman planlaması demek.

### 4. Uygun saat seçimi

Bot klinik takvimine bağlı çalışıyor. Hekim bazlı saat öneriyor, sahibin tercihine göre yeniden öneri yapıyor, randevu onaylandığında otomatik onay mesajı gönderiyor. Klinikte birden fazla hekim varsa hekim seçimi de mümkün. Detaylı modülleri [WhatsApp AI Asistanı veteriner sayfasında](/whatsapp-ai-asistani/veteriner) bulabilirsiniz.

## Aşı Takibi ve Parazit Hatırlatma: Koruyucu Hekimlik Otomasyonu

Veteriner kliniklerinin en çok kaçırdığı satış kalemi koruyucu hekimlik. Karma aşı, kuduz, iç parazit, dış parazit takvimi her hayvana özel ve manuel takip edilmesi neredeyse imkansız. Otomasyon bu işin omurgası.

### Aşılama takvimi

Sistem her hastaya özel takvim üretiyor:

- **Yavru köpek**: 6-8. hafta ilk karma, 10-12. hafta tekrar, 14-16. hafta kuduz, yılda bir rapel
- **Yavru kedi**: 8-9. hafta ilk karma, 12. hafta rapel, 16. hafta kuduz
- **Erişkin**: yıllık karma + kuduz tekrarı
- **Bordatella**: pansiyon veya sosyalleşme öncesi
- **Lösemi (FeLV)**: kediler için dış çıkışlıysa

Bot tarih yaklaştığında sahibe otomatik mesaj atıyor: "Sayın Ayşe Hanım, Pamuk'un karma aşısı 12 Temmuz'da bitiyor. 5-12 Temmuz arası randevu almak ister misiniz?" Bağlantı tıklandığında doğrudan randevu akışına giriyor.

### Parazit takvimi

İç ve dış parazit takvimi de aynı mantıkla işliyor:

- İç parazit (kapsül, tablet): köpek için 3 ayda bir, kedi için 3-6 ayda bir
- Dış parazit (sprey, damla, tasma): aylık veya 3 aylık ürüne göre değişken
- Kalp kurdu önleyici: endemik bölgelerde aylık

Sahip "kullandım" cevabı verdiğinde sistem otomatik bir sonraki tarihi hesaplıyor. "Stoktan ister misiniz" sorusu ile mama ve parazit satışı da klinik içinde tutuluyor.

### Doğum günü ve yaş geçişi

Köpeğin 7, kedinin 10 yaşına gelmesi gibi yaş geçişlerinde sistem otomatik olarak "senior check-up" önerisi gönderiyor: tahlil, ultrason, diş kontrolü paketi. Bu yaklaşım hem hasta sağlığı hem klinik cirosu açısından dönüştürücü.

## CRM ve Hasta Dosyası Entegrasyonu

WhatsApp asistanı tek başına bir mesajlaşma aracı. Gerçek değer CRM ve hasta dosyasıyla birleştiğinde ortaya çıkıyor. Veteriner CRM sisteminde her hayvan için tutulması gereken alanlar:

- Künye bilgileri (ad, tür, ırk, yaş, cinsiyet, renk, mikroçip numarası, kısırlaştırma)
- Sahip bilgileri (ad, telefon, adres, e-posta, KVKK onayı)
- Anamnez geçmişi (kronik hastalık, alerji, geçirilen ameliyatlar)
- Aşı geçmişi ve takvimi
- Parazit uygulama geçmişi
- Tahlil ve görüntüleme sonuçları
- Reçete ve ilaç geçmişi
- Mama tercihi ve diyet notları

### Entegrasyon noktaları

PORTZEN olarak biz VetHospital, VetSoft, Provet, Animavita gibi yaygın veteriner yazılımlarıyla entegrasyon kuruyoruz. Sizin yazılımınız listede yoksa API olup olmadığını kontrol ediyor, yoksa orta katman çözüm sunuyoruz. Veteriner odaklı [CRM otomasyonu sayfası](/crm-otomasyonu/veteriner) bu entegrasyonu nasıl yaptığımızı detaylı anlatıyor.

### Kronik hasta takibi

Diyabet, böbrek yetmezliği, kalp hastası gibi kronik takip gerektiren hastalar için sistem özel bir akış kuruyor. Sahibe haftalık veya iki haftalık kontrol mesajı, ilaç hatırlatması, tahlil zamanı bildirimi gidiyor. Klinik bu sayede sadece "hastalık geldiğinde gelen yer" olmaktan çıkıp sürekli iletişimde kalan bir sağlık partnerine dönüşüyor.

## Klinik İçi İş Akışı: Resepsiyon, Hekim, Tahlil, Ameliyat

WhatsApp ve CRM dış dünyaya bakan yüz. Klinik içinde işin akması için iç süreçlerin de dijitalleşmesi gerekiyor.

### Resepsiyon akışı

Sahip kliniğe geldiğinde resepsiyonist tabletten randevu listesini görüyor. Hastanın dosyası, ön anamnez, getiriliş sebebi ekrana düşüyor. Tartım, ateş ölçümü gibi ilk veriler doğrudan dosyaya işleniyor. Hekim odasına çağrı sırası otomatik geliyor.

### Hekim odası

Hekim hasta odaya girdiğinde dosya açık. Geçmiş muayeneler, son tahlil, kullanmakta olduğu ilaçlar, alerji uyarısı, kronik hastalık notu hepsi görünür. Muayene sırasında hekim sesli not alabiliyor, sistem transkripte çevirip dosyaya işliyor. Reçete ve ilaç çıkışı tek tıkla.

### Tahlil ve görüntüleme

Klinik içi kan analizörü, idrar tahlili, ultrason cihazlarından çıkan veriler otomatik olarak hasta dosyasına aktarılıyor. Dışarıya gönderilen patoloji ve genetik testlerin sonuçları geldiğinde sahibe otomatik bildirim gidiyor: "Pamuk'un tahlil sonucu hazır, dosyada görüntüleyebilir veya kliniğe gelerek hekimle değerlendirebilirsiniz."

### Ameliyat süreci

Operasyon planlanan hastalar için ayrı bir akış: ameliyat öncesi açlık uyarısı, sabah getiriş saati, anestezi onay formu dijital imza, ameliyat sırasında sahibe ilerleme bilgisi, sonrasında kontrol takvimi ve dikiş alımı hatırlatması. Sahip gerginlik içinde "ne durumda" diye sürekli arama yapmıyor, sistem haberdar ediyor.

## Sahip İletişimi ve Sadakat Programı

Veteriner kliniği sadakat işi. Bir köpeğin 12, bir kedinin 15 yıllık ömrü boyunca aynı klinikte kalması müthiş bir müşteri yaşam boyu değeri. Bu sadakati besleyen şey insani iletişim. Otomasyon bunu öldürmüyor, tam tersine zaman açıp besliyor.

### Puan ve sadakat

Her muayene, aşı, ürün satışı için puan veriyorsunuz. 1000 puanda ücretsiz parazit, 2000 puanda tırnak kesimi, 5000 puanda tam check-up gibi ödüller koyuyorsunuz. Sistem hesaplamayı otomatik yapıyor, sahip WhatsApp'tan "puanım kaç" diye sorduğunda anında cevap alıyor.

### Doğum günü ve özel günler

Hayvanın doğum gününde sahibe samimi bir mesaj, küçük bir indirim veya ücretsiz keyk hatırlatması gidiyor. Bu küçük dokunuşlar klinik ile sahip arasındaki bağı çok güçlendiriyor.

### Taziye ve hafıza

Ne yazık ki kaybedilen hastalar oluyor. Sistem bu durumda hassas davranıyor: o hasta için otomatik mesaj göndermiyor, sahibin ekranda görünen geçmişine "taziye mesajı gönderildi" notu düşüyor. Belirli bir süre sonra "yeni bir aile üyesi düşünüyor musunuz" tarzı yumuşak iletişim açılıyor. Bu detaylar markanın insani yüzünü güçlendiriyor.

### Tavsiye programı

Memnun sahipler kliniği tanıdığına önerdiğinde her iki tarafa avantaj sağlayan tavsiye programı kuruyorsunuz. Sistem tavsiyenin kimden geldiğini takip ediyor, ödülü otomatik tanımlıyor. WhatsApp tabanlı bu pazarlamayı daha büyük çaplı yürütmek için [WhatsApp Business API kurulum](/blog/whatsapp-business-api-kurulum) yazımız teknik altyapıya yön veriyor.

## Maliyet ve Kurulum Süresi

Bir veteriner kliniği için tam donanımlı randevu, aşı hatırlatma ve CRM sistemi maliyet kalemleri:

- WhatsApp Business API başvuru ve onay: ücretsiz, 5-10 gün
- BSP (Business Solution Provider) aylık ücreti: 900-2.500 ₺
- Mesaj başı ücret (servis ve şablon): yaklaşık 0.05-0.20 ₺
- Bot ve AI altyapısı kurulumu: tek seferlik 30.000-70.000 ₺
- Veteriner CRM ve hasta dosyası modülü: tek seferlik 20.000-50.000 ₺
- Veteriner yazılım entegrasyonu (VetSoft, VetHospital vb.): tek seferlik 10.000-25.000 ₺
- Aylık bakım ve içerik güncelleme: 3.000-6.000 ₺

PORTZEN olarak biz **veteriner paketinde** kurulum, ilk 6 ay bakım, CRM ve yazılım entegrasyonunu birlikte sunuyoruz. Tek seferlik bütçe baskısını düşürmek için aylık abonelik modelimiz de mevcut. Detay için [WhatsApp AI Asistanı](/whatsapp-ai-asistani) ana sayfamıza bakabilirsiniz.

### Kurulum süresi

Standart bir veteriner kliniği için kurulum 3-4 hafta:

- Hafta 1: WhatsApp API başvurusu, BSP onayı, klinik yazılımı entegrasyon planı
- Hafta 2: CRM kurulumu, hasta dosyalarının aktarımı, aşı takvimi şablonlarının hazırlanması
- Hafta 3: Bot akışlarının yazılması, hekim ve resepsiyon paneli kurulumu
- Hafta 4: Test, ekip eğitimi, canlıya alma ve ilk hafta yakın takip

Çoklu şube veya özel iş akışı olan kliniklerde süre 5-6 haftaya çıkabiliyor.

### Beklenen geri dönüş

Sahada gözlediğimiz tipik sonuçlar:

- Telefon trafiği yüzde 45-60 azalıyor
- Aşı ve parazit takip oranı yüzde 50 artıyor
- Randevu çakışması neredeyse sıfırlanıyor
- Hasta başına yıllık ortalama klinik ziyareti 2.1'den 3.4'e çıkıyor
- Sahip memnuniyetinde "ulaşılabilirlik" puanı belirgin biçimde yükseliyor

Bu rakamlar üç-beş aylık bir dönemde sistemin kendini fazlasıyla amorti ettiğini gösteriyor.

## Sıkça Sorulan Sorular

**Veteriner WhatsApp botu hastalık teşhisi koyabilir mi?**
Hayır. Bot yalnızca ön anamnez topluyor, sahibi yönlendiriyor ve randevu açıyor. Tanı, tedavi ve reçete kararı her zaman veteriner hekime ait. Bu hem yasal hem etik bir sınır.

**Aşı hatırlatması ne kadar önceden gidiyor?**
Standart kurulumda iki hatırlatma gönderiyoruz: bir hafta önce ve aşı tarihinde. Sahibin cevap vermemesi durumunda üç gün sonra üçüncü bir nazik hatırlatma gidiyor. Klinik isterse sıklığı özelleştiriyoruz.

**Mevcut veteriner yazılımıma entegre olur mu?**
VetSoft, VetHospital, Provet, Animavita gibi yaygın yazılımlarla doğrudan entegrasyon yapıyoruz. Sizin yazılımınız listede yoksa API kontrolü yapıyor, gerekirse orta katman çözüm üretiyoruz. Çok eski Excel temelli sistemler için içe aktarma scripti yazıyoruz.

**KVKK açısından risk var mı?**
Hasta sahibinden açık rıza alınıyor, veriler sözleşmeli BSP üzerinden işleniyor, fotoğraf ve video gibi medya yasal süre dışında siliniyor. PORTZEN kurulumda KVKK metinlerini ve aydınlatma formlarını da hazırlıyor.

**Birden fazla şubem var, tek sistem olur mu?**
Olur. Şube bazlı randevu takvimi, hekim atama ve hasta yönlendirme yapılıyor. Sahip "merkez şubeye geliyorum" dediğinde sistem doğru şubeye randevu açıyor. Merkezi panelden tüm şubeler tek ekrandan yönetiliyor.

## PORTZEN ile Veteriner Klinik Otomasyonu Kurmak

Kliniğinizdeki telefon yoğunluğunu azaltmak, aşı ve parazit takibini kaçırmadan yürütmek, hasta dosyasını tek ekranda görmek ve sahip sadakatini artırmak istiyorsanız PORTZEN olarak biz tam paket çözüm sunuyoruz: WhatsApp Business API kurulumu, AI destekli randevu botu, veteriner CRM, koruyucu hekimlik takvimi, yazılım entegrasyonu, ekip eğitimi ve aylık bakım. İhtiyacınıza göre kademeli devreye alma planı çıkarıyoruz, hepsini ilk gün açmak zorunda değilsiniz.

Kliniğiniz için özel kurulum teklifi almak ve mevcut iş akışınıza uygun modülleri konuşmak için [iletişime geçin](/iletisim). İlk görüşmede sizin günlük hasta sayınızı, kullandığınız yazılımı, hekim ve şube sayınızı anlıyoruz, ardından net bir teklif ve uygulama takvimi sunuyoruz.
