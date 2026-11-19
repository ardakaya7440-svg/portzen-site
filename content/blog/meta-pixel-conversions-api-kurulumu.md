---
title: "Meta Pixel ve Conversions API Kurulumu: 2026 Rehberi"
slug: "meta-pixel-conversions-api-kurulumu"
category: "rehber"
description: "Meta Pixel nedir, Conversions API neden gerekli? Pixel kurulumu, standart olaylar (Lead, Purchase), test etme ve KVKK uyumlu ölçüm için adım adım rehber."
keywords: ["meta pixel kurulumu", "facebook pixel kurulumu", "conversions api nedir", "meta capi kurulumu", "facebook dönüşüm takibi", "pixel olay kurulumu"]
publishedAt: "2026-11-19"
author: "Arda Kaya"
relatedServices: ["web-tasarim"]
---

# Meta Pixel ve Conversions API Kurulumu: 2026 Rehberi

**Kısa cevap:** Meta Pixel, web sitenize eklenen ve ziyaretçilerin yaptığı eylemleri (form doldurma, sepete ekleme, satın alma) Meta'ya bildiren bir kod parçasıdır. Conversions API (CAPI) ise aynı bilgiyi tarayıcı yerine sunucunuzdan gönderir. İkisi birlikte kurulduğunda reklam bloklayıcılar ve tarayıcı kısıtlamaları yüzünden kaybolan dönüşümlerin önemli bir kısmı geri gelir. Meta da reklamınızı doğru kişilere göstermeyi bu veriyle öğrenir.

*Son güncelleme: Kasım 2026*

## Pixel Olmadan Reklam Vermek Neden Para Kaybettirir?

Satış veya Potansiyel Müşteri hedefli bir kampanyada Meta'ya "şu kişi form doldurdu" bilgisini veremezseniz, algoritma kime reklam göstereceğini tıklamalara bakarak tahmin eder. Sonuç: ucuz tıklama, az müşteri. Pixel ve CAPI'nin size kazandırdıkları:

- **Optimizasyon:** Meta, form dolduran veya satın alan kişilere benzeyenleri bulur.
- **Ölçüm:** Hangi reklamın kaç satış getirdiğini görürsünüz.
- **Yeniden hedefleme:** Sitenizi ziyaret eden ama satın almayan kişilere tekrar ulaşırsınız.
- **Benzer kitle:** Müşterilerinize benzeyen yeni kişilere ulaşırsınız.

## Pixel ve Conversions API Farkı

| | Meta Pixel | Conversions API |
|---|---|---|
| Nereden çalışır? | Ziyaretçinin tarayıcısı | Sizin sunucunuz |
| Reklam engelleyiciden etkilenir mi? | Evet | Hayır |
| Kurulum | Kolay (kod veya eklenti) | Orta (sunucu, iş ortağı entegrasyonu veya ağ geçidi) |
| Önerilen | Evet | Evet, Pixel ile birlikte |

İkisi aynı olayı gönderdiğinde Meta, ortak bir **event_id** sayesinde olayı iki kez saymaz (tekilleştirme). Bu yüzden iki kaynağın da aynı olay için aynı kimliği göndermesi gerekir.

## Adım 1: Pixel (Veri Kümesi) Oluşturun

1. Meta Events Manager'ı (Olay Yöneticisi) açın.
2. "Veri kaynağı bağla" > "Web" seçin ve bir ad verin.
3. Pixel'i doğru işletme portföyüne ve reklam hesabına bağlayın.

## Adım 2: Pixel'i Sitenize Ekleyin

Üç yol vardır:

- **Hazır entegrasyon:** Shopify, WooCommerce, ikas, Ticimax gibi altyapıların çoğunda Meta entegrasyonu vardır. Pixel kimliğini girmek yeterli olur.
- **Google Etiket Yöneticisi (GTM):** Pixel temel kodunu tüm sayfalarda çalışacak bir etiket olarak ekleyin.
- **Doğrudan kod:** Pixel temel kodunu sitenin `<head>` bölümüne ekleyin. Next.js, React gibi modern sitelerde sayfa geçişlerinde PageView'in yeniden tetiklendiğinden emin olun.

## Adım 3: Doğru Olayları Tanımlayın

Her işletmenin takip etmesi gereken olaylar farklıdır. Standart olay adlarını kullanın, çünkü Meta optimizasyonu bunlarla yapar:

| İşletme türü | Takip edilecek olaylar |
|---|---|
| Hizmet / yerel işletme | Lead (form), Contact (WhatsApp/telefon tıklaması), Schedule (randevu) |
| E-ticaret | ViewContent, AddToCart, InitiateCheckout, Purchase (değer + para birimi ile) |
| SaaS / üyelik | CompleteRegistration, StartTrial, Subscribe |

**Purchase** olayında mutlaka `value` ve `currency: "TRY"` gönderin. Aksi halde ROAS hesaplanamaz.

Örnek: PORTZEN'in kendi sitesinde iletişim formu gönderildiğinde **Lead**, WhatsApp butonuna tıklandığında **Contact** olayı tetiklenir.

## Adım 4: Conversions API'yi Kurun

Teknik bilginize göre üç seçenek:

1. **İş ortağı entegrasyonu:** Shopify gibi platformlar CAPI'yi birkaç tıkla açar.
2. **Conversions API Gateway veya sunucu taraflı GTM:** Kod yazmadan, kendi bulut hesabınızda çalışan bir aracı ile.
3. **Doğrudan entegrasyon:** Geliştiriciniz form gönderimi veya ödeme onayı sırasında sunucudan Meta'ya olay yollar. Bu en esnek yöntemdir.

CAPI ile gönderilen olaylarda e-posta ve telefon gibi müşteri bilgileri **SHA-256 ile hash'lenerek** gönderilir. Eşleşme kalitesi ne kadar yüksekse Meta olayı o kadar doğru kişiye bağlar.

## Adım 5: Test Edin

- Events Manager'daki **Olayları Test Et** sekmesini açın, sitenizde formu doldurun ve olayın gelip gelmediğine bakın.
- Tarayıcı ve sunucu olaylarının **tekilleştirildiğini** kontrol edin.
- **Olay Eşleşme Kalitesi** puanını takip edin. Düşükse sunucu olaylarına daha fazla müşteri bilgisi (hash'lenmiş) ekleyin.

## KVKK ve Çerez Onayı

Pixel kişisel veri işler. Sitenizde çerez politikası ve gerekiyorsa çerez onay bandı bulunmalı, aydınlatma metniniz Meta'ya veri aktarımını kapsamalıdır. Hukuki metinleri bir uzmana kontrol ettirin. Ölçümü doğru kurarken yasal gereklilikleri atlamayın.

## Sık Yapılan Hatalar

1. **Aynı olayın iki kez sayılması:** Pixel ve CAPI aynı event_id'yi göndermiyor.
2. **Teşekkür sayfası yenilenince yeni Lead:** Olayı sayfa açılışına değil, form gönderimine bağlayın.
3. **Purchase'ta değer yok:** ROAS ölçülemez.
4. **Yanlış reklam hesabına bağlı Pixel:** Ajans değişince veri kaybolur. Pixel'in sahibi her zaman siz olun.
5. **Test olaylarının unutulması:** Canlıya geçmeden test kodunu kaldırın.

## Sıkça Sorulan Sorular

### Meta Pixel ücretli mi?

Hayır. Pixel ve Conversions API ücretsizdir. Sunucu taraflı kurulumda bulut sunucu maliyeti olabilir.

### Pixel kurulduktan sonra ne kadar sürede veri toplar?

Kurulumdan hemen sonra olaylar Events Manager'da görünmeye başlar. Optimizasyon için ise reklam setinin belli sayıda dönüşüm biriktirmesi gerekir.

### WhatsApp'tan gelen müşterileri ölçebilir miyim?

WhatsApp'a tıklama Contact olayı olarak ölçülebilir. WhatsApp'a mesaj gönderme reklamlarında ise sohbetler Reklam Yöneticisi'nde ayrıca raporlanır. Ayrıntılar için [WhatsApp reklamı rehberi](/blog/whatsapp-reklam-mesaj-kampanyasi).

### Google Ads için de benzer bir kurulum gerekir mi?

Evet. Google tarafında Google etiketi ve dönüşüm işlemleri kurulur. [Google Ads dönüşüm takibi rehberine](/blog/google-ads-donusum-takibi) bakın.

## Ölçümü Birlikte Kuralım

PORTZEN, sitelerini yaptığı ve reklamlarını yönettiği işletmeler için Pixel, Conversions API ve Google dönüşüm takibini standart olarak kurar. [Web sitesi tasarımı](/web-sitesi-tasarimi) veya [reklam yönetimi](/meta-reklam-ajansi) için [bize yazın](/iletisim).
