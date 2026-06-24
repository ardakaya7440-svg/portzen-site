---
title: "Klinik Online Randevu Sistemi 2026 Rehberi: WhatsApp Entegrasyonlu"
slug: "klinik-online-randevu-sistemi-2026"
category: "sektorel"
description: "Klinikler için online randevu sistemi kurulum rehberi. WhatsApp entegrasyonu, triaj, anamnez ön formu, hatırlatma ve no-show azaltma stratejileri."
keywords: ["klinik online randevu", "klinik randevu sistemi", "klinik whatsapp randevu", "online randevu yazılımı", "klinik dijitalleşme", "klinik randevu otomasyonu"]
publishedAt: "2026-06-23"
author: "Arda Kaya"
readingTime: "11 dakika"
relatedServices: ["ai-bot", "otomasyon", "web"]
ogImage: "/blog/og/klinik-online-randevu-sistemi-2026.png"
---

# Klinik Online Randevu Sistemi 2026 Rehberi: WhatsApp Entegrasyonlu

Türkiye'de özel klinik sayısı her yıl yüzde 8-10 artarken hasta beklentisi de hızla değişiyor. 2026'da bir hasta, kliniği aramadan önce Instagram'dan inceliyor, Google Maps'ten yorumlara bakıyor, web sitesini açıyor ve eğer randevu almak için telefon etmesi gerekirse büyük ihtimalle başka bir klinik arıyor. Çünkü artık standart, **çevrimiçi randevu almaktan geçiyor**. Hem de WhatsApp üzerinden, çünkü hasta zaten orada.

Klinikler için online randevu sistemi sadece "siteye takvim koymak" değil. Triaj, anamnez ön formu, hatırlatma, no-show önleme, doktor takvim eşleştirme, sigorta sorgu ve ödeme akışını birleştiren bir mimari. Bu yazıda PORTZEN olarak bizim 50+ kliniğe (estetik, diş, fizyoterapi, psikoloji, dermatoloji) kurduğumuz sistemin tüm adımlarını paylaşacağız. Sonunda kendi kliniğinizde hangi modüllerin gerekli olduğunu, hangi yazılımları seçeceğinizi ve maliyetin neye karşılık geldiğini netleştirmiş olacaksınız.

## Klinikte Randevu Akışı Neden Manuel Olarak Sürdürülemez?

Orta ölçekli bir özel klinik günde 30-80 arası randevu yönetiyor. Bu randevular farklı kanallardan geliyor: telefon, WhatsApp, Instagram DM, Google'dan, web sitesinden, yüz yüze. Klasik akışta tüm bu kanalların ortak buluşma noktası **resepsiyon** oluyor.

PORTZEN'in saha gözlemine göre bir resepsiyonist günde:

- 60-100 telefon yanıtlıyor
- 100-200 WhatsApp mesajı okuyor
- 30-50 Instagram DM'i takip ediyor
- 20-40 randevu defterine yazıyor / siliyor / değiştiriyor
- Bunların arasında hasta karşılıyor, ödeme alıyor, dosya açıyor

Sonuç: hatalı randevu, çakışma, hastayla yarım kalan iletişim, no-show oranının yüzde 18-25'e çıkması. **Online randevu sistemi bu yükün yüzde 60-70'ini otomatikleştirip resepsiyona insan yüzü gereken kısmı bırakıyor.**

## Klinik Randevu Sistemi Hangi Modüllerden Oluşur?

Tam donanımlı bir klinik randevu sistemini 7 ana modüle ayırıyoruz. Her modül bağımsız çalışabilir ama gerçek değer hepsi birlikte kullanıldığında çıkıyor.

### 1. Web sitesinde randevu takvimi

Klinik web sitenize entegre, doktor seçimi + tarih + saat akışı sunan bir takvim. Hasta birkaç tıklamayla randevu alıyor, sistem otomatik onay mesajı gönderiyor.

Burada kritik nokta web sitenizin performansı: hızlı yüklenmeyen siteden hasta randevu almıyor. Performans için [Lighthouse skoru 90+ optimizasyon](/blog/lighthouse-skoru-90-optimizasyon) ve [mobil site hızı artırma](/blog/mobil-site-hizi-artirma) yazılarımız faydalı.

### 2. WhatsApp randevu botu

En çok kullanılan kanal. Hasta WhatsApp'a mesaj atıyor, bot şunu yapıyor:

- Şikayetini soruyor (kısa triaj)
- Uygun doktoru / branşı öneriyor
- Müsait gün ve saatleri çıkarıyor
- Hasta seçiyor, randevu otomatik açılıyor
- TC ve telefon doğrulaması alınıyor
- Onay mesajı + takvim eklentisi gönderiliyor

WhatsApp'ın klinik için neden vazgeçilmez olduğunu [WhatsApp AI Asistanı klinik sayfası](/whatsapp-ai-asistani/klinik) detaylandırıyor.

### 3. Triaj modülü

Estetik, fizyoterapi, dermatoloji gibi branşlarda hastanın hangi hekime gitmesi gerektiği başlangıçta belli olmuyor. Triaj modülü 4-6 soruyla şikayeti sınıflandırıyor:

- Şikayet süresi (akut / kronik)
- Daha önce tedavi alındı mı
- Bölge (yüz, vücut, eklem vb.)
- Aciliyet seviyesi

Sonuçta sistem en uygun hekime yönlendiriyor. Bu hem hasta memnuniyetini hem doktor verimliliğini artırıyor. Triaj formuna trafik akıtmak için klinikler genelde Meta lead form kampanyaları kullanıyor; bu noktada profesyonel bir [Meta reklam ajansı](/meta-reklam-ajansi) desteğiyle lead form → WhatsApp → randevu sistemi entegrasyonu kurulduğunda lead başına maliyet belirgin düşüyor.

### 4. Anamnez ön formu

Randevu onaylandıktan sonra hastaya WhatsApp veya SMS ile kısa anamnez formu gönderiliyor:

- Kullandığı ilaçlar
- Alerji öyküsü
- Daha önceki ameliyat / tedavi
- Sigara, alkol, kronik hastalık

Hasta kliniğe geldiğinde hekimin önünde dolu form duruyor, 10 dakikalık veri toplama süresi 2 dakikaya iniyor.

### 5. Hatırlatma ve no-show önleme

No-show (gelmeyen hasta) klinik için en büyük kayıp kalemi. Tipik bir klinikte no-show oranı yüzde 18-25 arası. Doğru hatırlatma akışıyla bu oran yüzde 5-8'e iniyor.

PORTZEN'in standart hatırlatma akışı:

- Randevudan 48 saat önce: nazik hatırlatma + onaylama linki
- Randevudan 24 saat önce: kesin hatırlatma + iptal/erteleme linki
- Randevudan 2 saat önce: "yola çıkmadan önce" kısa not
- Randevu sonrası: takip mesajı + memnuniyet anketi

İptal eden hasta otomatik olarak yedek listedeki hastaya yer açıyor. Boş slot oluşmuyor.

### 6. Sigorta ve ödeme sorgu

Hastanın anlaşmalı sigortası olup olmadığını sorgulayan, peşin ödeme isteyen veya ön ödeme alan modül. Estetik kliniklerde özellikle "ön ödeme alındıktan sonra randevu açılır" akışı no-show'u dramatik düşürüyor.

### 7. Doktor takvimi ve eşleştirme

Çoklu doktorlu klinikte her hekimin müsaitliği, izinleri, ofis günleri farklı. Sistem bunu tek panelden yönetiyor. Hasta randevu istediğinde sadece o anda gerçekten boş olan slotları görüyor.

## WhatsApp Entegrasyonu: Sektörde Standart Hâline Geldi

2026 itibariyle özel kliniklerde WhatsApp randevu sistemi olmaması rekabet dezavantajı. Hasta soruyu sormak için telefon etmek istemiyor, Instagram DM'inde 6 saat beklemek istemiyor. WhatsApp'tan yazıyor ve **anında cevap bekliyor**.

WhatsApp Business API kurulumu için [WhatsApp Business API kurulum rehberi](/blog/whatsapp-business-api-kurulum) ve [WhatsApp AI Asistanı nedir?](/blog/whatsapp-ai-asistani-nedir) yazılarımız teknik temeli veriyor. Klinik özelinde dikkat edilecek noktalar:

- Sağlık kategorisi seçimi gerekli, Meta onayı 7-12 gün sürebiliyor
- Hekim ve hasta arası özel iletişimde KVKK hassasiyeti yüksek
- Reçete, rapor gibi belgeler WhatsApp üzerinden değil güvenli portal üzerinden iletilmeli
- Toplu kampanya mesajı atarken hasta kategorisi için ek izin gerekiyor

## Web Sitesi Olmadan Randevu Sistemi Çalışır mı?

Çalışır ama yarım kalır. WhatsApp botu tek başına da randevu alır ama:

- Google'dan organik gelen trafik kaçar
- Reklam yönlendireceğiniz landing page olmaz
- SEO ile sürekli yeni hasta kazanma imkanı kapanır

Klinik için web sitesi sadece "vitrin" değil, randevu motoruna gelen trafik kaynağı. Web sitesi olmadan klinik işletmeye dair detaylı analiz için [web sitesi olmayan işletmeler ne kaybediyor](/blog/web-sitesi-olmayan-isletmeler-ne-kaybediyor) yazımıza bakabilirsiniz. Klinik için özel tasarlanan web sitesi şablonlarımızı ise [klinik web tasarım sayfasında](/web-tasarim/klinik) inceleyebilirsiniz. Klinik özelinde before-after, hasta yorumu ve süreç anlatımı odaklı düzenli içerik üretmek için bir [sosyal medya ajansı](/sosyal-medya-ajansi) ile haftalık reels ve story takvimi kurmak organik trafik kanalını güçlü tutuyor.

## Hangi Yazılımları Seçmeli?

Türkiye'de klinik yönetim yazılımı sayısı 30+ ama randevu modülünde gerçekten iyi olan az. Üç kategoride değerlendirme:

### Hazır klinik yönetim yazılımları
Medula uyumlu, faturalandırma + randevu birleşik. Yıllık 8.000-25.000 TL aralığı. Avantaj: kurulum hızlı. Dezavantaj: WhatsApp ve AI entegrasyonu zayıf.

### Hazır randevu yazılımları (Calendly, Setmore, Acuity tarzı)
Global, kolay kurulum, ucuz (aylık 200-600 TL). Avantaj: hızlı başlangıç. Dezavantaj: Türkçe destek yok, KVKK uyumsuz, klinik-özgü akış (triaj, anamnez) yok.

### Özel geliştirme (PORTZEN yaklaşımı)
Klinik özelinde, mevcut yazılım ve WhatsApp ile entegre, branş bazlı triaj. Tek seferlik 40.000-120.000 TL kurulum + aylık bakım. Avantaj: tam ihtiyaca uyum, ölçek geldikçe genişleme. Dezavantaj: başlangıç maliyeti hazır yazılımdan yüksek.

PORTZEN olarak biz 8-10 hekime kadar olan kliniklerde hibrit yaklaşım öneriyoruz: kullandığınız klinik yönetim yazılımının üzerine WhatsApp bot + triaj + hatırlatma katmanı kuruyoruz, mevcut faturalandırma ve hasta dosyası akışınızı bozmuyoruz.

## Beklenen Sonuçlar ve Yatırım Geri Dönüşü

Saha verisinden ortalama rakamlar (kurulumdan sonra ilk 6 ay):

- No-show oranı yüzde 18-25'ten yüzde 5-8'e düşüyor
- Randevu doluluk oranı yüzde 15-25 artıyor
- Resepsiyon iş yükü yüzde 50-60 azalıyor
- Hasta memnuniyet skorunda "ulaşılabilirlik" puanı belirgin yükseliyor
- Aylık yeni hasta kazanım oranı yüzde 20-35 artıyor (organik + reklam birleşik)

Tipik bir klinikte sistem 4-7 ay içinde kendini amorti ediyor. Estetik gibi ortalama gelir yüksek branşlarda 2-3 ay yetiyor.

## Sıkça Sorulan Sorular

**Sistem mevcut klinik yazılımıma entegre olur mu?**
Çoğu durumda evet. Medula, Logo, KlinikSoft, Hekimce gibi yaygın yazılımlarla API ya da CSV köprüsü kuruyoruz. Yazılımın API'si yoksa randevu verilerini ayrı tutup günlük senkron çalıştırıyoruz.

**Hasta verisi WhatsApp'tan geçince KVKK ihlali olur mu?**
Sadece randevu bilgisi (isim, telefon, randevu tarihi) ihlal değil, hatta meşru menfaat kapsamında. Tıbbi rapor, reçete, görüntüleme gibi hassas veriler WhatsApp'tan değil güvenli portal veya e-Nabız yönlendirmesi ile iletilmeli.

**Sistem doktorun takvimine müdahale eder mi?**
Hayır, doktor takvimi her zaman doktorun ve klinik yöneticisinin kontrolünde. Sistem sadece doktor tarafından "müsait" işaretlenen slotları hastaya gösteriyor.

**Çoklu lokasyonum var, tek sistem yönetir mi?**
Yönetir. Lokasyon, hekim, branş bazlı yönlendirme yapılıyor. Hasta hangi şubeye yakınsa oraya yönlendiriliyor, isterse seçtiriliyor.

**Reklam kampanyalarımla nasıl bağlanır?**
Google Ads ve Meta Ads kampanyalarınızdan gelen trafik direkt web sitesindeki randevu takvimine ya da WhatsApp botuna yönlendirilebiliyor. Dönüşüm ölçümü kurulduğunda hangi reklamın gerçekten randevu getirdiği netleşiyor. [CRM otomasyonu rehberi](/blog/crm-otomasyonu-rehberi) bu konuda yol gösterici.

## PORTZEN ile Klinik İçin Online Randevu Sistemi Kurmak

Kliniğinizde no-show'u düşürmek, resepsiyon yükünü hafifletmek ve hastaya 7/24 ulaşılabilir olmak istiyorsanız PORTZEN olarak biz uçtan uca çözüm sunuyoruz: WhatsApp randevu botu, triaj modülü, anamnez ön formu, hatırlatma otomasyonu ve mevcut klinik yazılımınızla entegrasyon. Web siteniz yoksa veya yenilenmesi gerekiyorsa [klinik web tasarım](/web-tasarim/klinik) hizmetimizle birlikte tek paket olarak sunuyoruz.

Kliniğinizin günlük randevu hacmine, branş yapısına ve mevcut yazılımına uygun özel teklif almak için [iletişime geçin](/iletisim). İlk görüşmede biz iş akışınızı dinliyoruz, ardından net ve şeffaf bir kurulum planı çıkarıyoruz.
