---
title: "Google Ads Dönüşüm Takibi Kurulumu: Form, Arama ve WhatsApp Ölçümü"
slug: "google-ads-donusum-takibi"
category: "rehber"
description: "Google Ads dönüşüm takibi nasıl kurulur? Google etiketi, form gönderimi, telefon ve WhatsApp tıklaması, GA4 içe aktarma, gelişmiş dönüşümler ve test adımları."
keywords: ["google ads dönüşüm takibi", "google ads dönüşüm kurulumu", "google etiketi kurulumu", "ga4 dönüşüm google ads", "gelişmiş dönüşümler", "form dönüşüm takibi"]
publishedAt: "2026-11-19"
author: "Arda Kaya"
relatedServices: ["web-tasarim"]
---

# Google Ads Dönüşüm Takibi Kurulumu: Form, Arama ve WhatsApp Ölçümü

**Kısa cevap:** Google Ads dönüşüm takibi; sitenize **Google etiketi** ekleyip, Google Ads'te form gönderimi, telefon araması, WhatsApp tıklaması veya satın alma gibi **dönüşüm işlemleri** tanımlamaktır. İki yol vardır: Google Ads etiketini doğrudan kullanmak veya Google Analytics 4'teki temel etkinlikleri Google Ads'e içe aktarmak. Doğru kurulduğunda Google hangi anahtar kelimenin müşteri getirdiğini öğrenir ve teklifleri buna göre ayarlar. Kurulmazsa Akıllı Teklif ve Performance Max körlemesine çalışır.

*Son güncelleme: Kasım 2026*

## Neyi Dönüşüm Olarak Saymalısınız?

Her tıklama dönüşüm değildir. İşletmeniz için gerçek değer taşıyan eylemleri seçin:

| İşletme türü | Birincil dönüşüm | İkincil (bilgi amaçlı) |
|---|---|---|
| Hizmet / yerel işletme | Form gönderimi, 60 sn+ telefon araması, WhatsApp tıklaması | Fiyat sayfası görüntüleme |
| E-ticaret | Satın alma (değerle birlikte) | Sepete ekleme, ödeme başlatma |
| B2B | Teklif formu, demo talebi | Broşür indirme |

Google Ads'te dönüşümler **birincil** ve **ikincil** olarak işaretlenir. Teklif stratejileri yalnızca birincil dönüşümlere göre optimize eder. Sayfa görüntülemeyi birincil yapmak en sık ve en pahalı hatalardan biridir.

## Yöntem 1: Google Ads Etiketi ile Kurulum

1. Google Ads > Hedefler > Dönüşümler > **Yeni dönüşüm işlemi**.
2. "Web sitesi" seçin, sitenizin adresini girin.
3. Google, sitenizi tarayıp olası etkinlikleri önerebilir. Ya bu önerileri kullanın ya da manuel olarak tanımlayın.
4. **Google etiketini** (gtag.js) sitenin tüm sayfalarına ekleyin. Doğrudan kodla, Google Etiket Yöneticisi ile veya altyapınızın entegrasyonuyla yapabilirsiniz.
5. Her dönüşüm için olay kodunu ilgili eyleme bağlayın: form başarıyla gönderildiğinde, WhatsApp butonuna tıklandığında, ödeme tamamlandığında.

## Yöntem 2: GA4'ten İçe Aktarma

Google Analytics 4 kullanıyorsanız:

1. GA4'te ilgili etkinliği (ör. `generate_lead`) **temel etkinlik** olarak işaretleyin.
2. Google Ads ile GA4'ü bağlayın.
3. Google Ads > Dönüşümler > İçe aktar > Google Analytics 4 > ilgili etkinliği seçin.

İçe aktarılan dönüşümler bazen birkaç saat gecikmeyle gelir. Teklif optimizasyonu için Google Ads etiketi biraz daha hızlı sinyal verir. Birçok hesap ikisini birlikte kullanır ama aynı eylem iki kez birincil olarak işaretlenmemelidir.

## Telefon Aramalarını Ölçmek

- **Reklamdan gelen aramalar:** Arama öğesi eklediğinizde Google, belirlediğiniz süreden uzun aramaları dönüşüm sayabilir (ör. 60 saniye).
- **Siteden yapılan aramalar:** Sitedeki telefon numarasına tıklamayı dönüşüm olarak ölçebilirsiniz.

## WhatsApp Tıklamasını Ölçmek

WhatsApp butonuna (wa.me bağlantısı) tıklamayı bir olay olarak tanımlayın. Bu, sohbetin gerçekleştiğini garanti etmez ama iyi bir sinyaldir. PORTZEN'in kendi sitesinde WhatsApp tıklaması "Contact", form gönderimi "Lead" olarak ölçülür. Aynı mantıkla Meta tarafında da ölçüm kurulur; bkz. [Meta Pixel ve Conversions API rehberi](/blog/meta-pixel-conversions-api-kurulumu).

## Gelişmiş Dönüşümler

**Gelişmiş dönüşümler**, form gönderimi sırasında alınan e-posta veya telefon gibi bilgileri hash'leyerek (SHA-256) Google'a gönderir. Böylece çerez kısıtlamaları yüzünden kaybolan dönüşümlerin bir kısmı eşleştirilir. Google Ads'te dönüşüm ayarlarından açılır ve etiket veya GTM üzerinden yapılandırılır.

## Çevrimdışı Dönüşümler: Formdan Satışa

Formu dolduran herkes müşteri olmaz. Gerçek satış verisini Google'a geri beslemek için:

- CRM'de her lead'in **gclid** (Google tıklama kimliği) bilgisini saklayın.
- Satış gerçekleşince bu kaydı Google Ads'e çevrimdışı dönüşüm olarak yükleyin (manuel, zamanlanmış dosya veya API ile).

Bu yapı, Google'ın "form dolduran" yerine "satın alan" kişilere benzeyenleri bulmasını sağlar.

## Test Etme

- **Google Tag Assistant** ile etiketin tetiklendiğini kontrol edin.
- Formu kendiniz doldurup dönüşümün Google Ads'te birkaç saat içinde görünüp görünmediğine bakın.
- Dönüşüm durumunun "Kayıt yok" yerine "Etkin" olduğunu kontrol edin.

## KVKK ve Çerezler

Google etiketi ve gelişmiş dönüşümler kişisel veri işler. Çerez politikanız ve gerekiyorsa çerez onay mekanizmanız bu işlemleri kapsamalıdır. Hukuki metinler için uzman desteği alın.

## Sık Yapılan Hatalar

1. **Teşekkür sayfası yenilendikçe yeni dönüşüm:** Dönüşüm sayımını "Bir" olarak ayarlayın (lead'lerde).
2. **Sayfa görüntülemesi birincil dönüşüm:** Teklif stratejisini yanıltır.
3. **Aynı eylem hem etiketle hem GA4'ten birincil:** Çift sayım.
4. **Satın almada değer göndermemek:** ROAS ölçülemez.
5. **Form başarısız olsa da dönüşüm saymak:** Olayı butona tıklamaya değil, başarılı gönderime bağlayın.

## Sıkça Sorulan Sorular

### Dönüşüm takibi olmadan Google reklamı verilir mi?

Verilir, ama hangi anahtar kelimenin müşteri getirdiğini bilemezsiniz ve otomatik teklif stratejileri verimli çalışmaz.

### Dönüşümler ne zaman görünür?

Etiket dönüşümleri genellikle birkaç saat içinde, GA4 içe aktarmaları biraz daha gecikmeli görünür.

### Hangi teklif stratejisini kullanmalıyım?

Dönüşüm takibi çalışıyorsa "Dönüşümleri en üst düzeye çıkar" ile başlayın. Yeterli veri biriktikten sonra hedef EBM veya hedef ROAS ekleyin. Başlangıç için [Google Ads ile reklam verme](/blog/google-ads-reklam-verme) rehberine bakın.

## Ölçümü Biz Kuralım

PORTZEN, yaptığı sitelerde ve yönettiği reklam hesaplarında Google etiketi, GA4, Meta Pixel ve dönüşüm işlemlerini standart olarak kurar. [Web sitesi tasarımı](/web-sitesi-tasarimi) ve [reklam yönetimi](/meta-reklam-ajansi) için [bize yazın](/iletisim).
