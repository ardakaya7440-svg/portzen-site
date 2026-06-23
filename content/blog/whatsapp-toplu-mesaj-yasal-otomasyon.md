---
title: "WhatsApp Toplu Mesaj Gönderme: Yasal Yollar ve Otomasyon Sistemleri"
slug: "whatsapp-toplu-mesaj-yasal-otomasyon"
category: "rehber"
description: "WhatsApp toplu mesaj gönderme yasal mı? KVKK ve WhatsApp Business Policy uyumlu opt-in, API ve BSP seçimi, şablon onayı ve ban riskleri için adım adım rehber."
keywords: ["whatsapp toplu mesaj", "whatsapp api toplu gönderim", "whatsapp business kvkk", "whatsapp broadcast", "whatsapp bsp", "whatsapp şablon onayı", "whatsapp toplu sms yasal mı"]
publishedAt: "2026-06-23"
author: "Arda Kaya"
readingTime: "13 dakika"
relatedServices: ["whatsapp-ai-asistani"]
ogImage: "/blog/og/whatsapp-toplu-mesaj-yasal-otomasyon.png"
---

# WhatsApp Toplu Mesaj Gönderme: Yasal Yollar ve Otomasyon Sistemleri

WhatsApp toplu mesaj gönderimi, KOBİ'ler için en yüksek dönüşümü getiren kanal olmaya devam ediyor. SMS'in açılma oranı %20, e-postanın %18 iken, WhatsApp mesajlarının açılma oranı %98, ilk saatte yanıt oranı %45 seviyesinde. Bu yüzden butiklerden e-ticaret sitelerine, kliniklerden emlak ofislerine kadar her sektör WhatsApp'tan toplu mesaj göndermek istiyor. Sorun şu: yanlış yolla göndermek hem işletmenizi kalıcı bana mahkum ediyor hem de KVKK denetimlerinde 50.000 TL'den başlayan idari para cezası getiriyor.

Bu rehberde, WhatsApp toplu mesaj göndermenin yasal yollarını, hangi yöntemde ne kadar maliyet çıktığını, WhatsApp Business App ile Business API arasındaki farkları, BSP (Business Solution Provider) seçim kriterlerini, şablon onayı sürecini, conversation pricing modelini, KVKK uyumu için opt-in alma yöntemlerini ve kesinlikle yapılmaması gereken ban riskli uygulamaları detaylı anlatıyoruz. Bu sistemi doğru kuran bir İzmir butik mağazası, ayda 12.000 kontak listesine kampanya gönderirken hem KVKK uyumlu kalıyor hem de mesaj başına 0.10 TL altında maliyetle %42 satın alma oranı yakalıyor. Kurulum 3-7 iş günü sürer ve uzun vadede sürdürülebilir tek yoldur. Bu rehberle başlayalım.

## WhatsApp Toplu Mesaj Yasal Mıdır, Yasak Mıdır?

Net cevap: WhatsApp toplu mesaj gönderimi tek başına yasak değildir; ancak iki kuralı aynı anda sağlamalıdır:

- WhatsApp'ın Business Policy ve Commerce Policy'sine uyum
- Türkiye'de 6698 sayılı KVKK ve 6563 sayılı Elektronik Ticaretin Düzenlenmesi Hakkında Kanun (ETK) uyumu

İkisinden biri eksikse, gönderim "yasal değildir" ya da "ban riski yüksektir". Pratikte üç senaryo var:

- WhatsApp App üzerinden manuel broadcast: WhatsApp tarafından kısıtlı şekilde tolere edilir, KVKK için ayrıca onay gerekir
- Bulk sender botları (kopya APK, scrcpy, otomasyon yazılımları): Hem WhatsApp banı kesin hem KVKK ihlali
- WhatsApp Business API + BSP üzerinden onaylı şablon: Yasal ve sürdürülebilir tek yol

Bu rehberde üçüncü yola odaklanıyoruz; diğer ikisinin ne zaman ne kadar risk taşıdığını da gösteriyoruz.

### WhatsApp Business Policy'nin Üç Kritik Maddesi

WhatsApp, ticari hesapların uyması gereken üç temel kural koyar:

- Kullanıcı onayı (opt-in) almadan ilk mesaj atılamaz
- Belirli kategoriler (kumar, silah, alkol, sigara, yetişkin içerik) tamamen yasak
- "Marketing", "Utility" ve "Authentication" olmak üzere üç tür konuşma vardır, her birinin fiyatı ve kuralı farklı

Bu kurallara aykırı davranmak hesabınızın çağrı merkezi yapılan onay süreçlerinde bile kalıcı şekilde reddedilmesine yol açar.

## Çalışmaya Başlamadan Önce Hazırlık (15-30 dakika)

Yasal toplu mesaj sistemi kurmak için şu hazırlıkları yapın:

- İşletmenizin tüzel kişiliği (limited, anonim, şahıs) ve vergi levhası
- Facebook Business Manager hesabı (gerekli, BSP'ye bağlanır)
- Doğrulanmış bir telefon numarası (sabit hat veya mobil, daha önce WhatsApp App'te kullanılmamış)
- KVKK aydınlatma metni ve açık rıza formu
- BSP seçim listesi (3-5 adayı karşılaştıracaksınız)
- Kontak listenizin opt-in kaynağı (nereden, ne zaman, hangi onay alındı)

Hazırlık aşamasında en zorlanan kısım opt-in belgelemesidir. Eğer mevcut kontak listenizin onayı yoksa, listeyi gönderim öncesi temizleyeceksiniz. Bu kayıp gibi görünür ama uzun vadede markanızı korur.

## Adım 1: WhatsApp Business App ve API Arasında Karar Verin (10 dakika)

WhatsApp, ticari kullanım için iki ürün sunar:

- WhatsApp Business App: Ücretsiz, mobil uygulama, tek cihaz, manuel broadcast (256 kişilik liste, kontak rehberinde kayıtlı olanlara)
- WhatsApp Business API: Ücretli, çoklu kullanıcı, otomasyon, sınırsız broadcast (şablon onayıyla), CRM entegrasyonu

Hangisi sizin için doğru?

- Aylık 200 altı kontak: Business App yeterli olabilir
- Aylık 200-2.000 kontak: API'ye geçmek mantıklı, ROI olumlu
- Aylık 2.000+ kontak: API zorunlu, App ile sürdürülemez

Şirketinizin bir yıl içinde 2.000 kontak hedefi varsa baştan API'ye yatırım yapın, yarı yolda göç maliyeti yüksektir. [WhatsApp Business vs API karşılaştırması](/blog/whatsapp-business-vs-api-karsilastirma) yazımız bu kararı detaylı veriyor.

## Adım 2: BSP (Business Solution Provider) Seçin (1-2 saat)

WhatsApp API'ye direkt erişim sağlamak teknik olarak mümkündür ancak süreç çok karmaşıktır. Meta, "Business Solution Provider" denilen yetkili aracıları tanır. BSP'ler size:

- API kurulumu
- Şablon onay yönetimi
- Mesaj gönderim altyapısı
- Faturalandırma
- Müşteri destek

sağlar. Türkiye'de aktif BSP'ler arasında Twilio, Infobip, MessageBird, 360dialog, Wati, Interakt, Karix gibi global oyuncular ve yerel olarak bazı operatör destekli çözümler var. Seçim kriterleri:

- Mesaj fiyatlandırma şeffaflığı (conversation başına TL)
- Şablon onay hızı (1-24 saat ideal)
- Türkçe destek (e-posta, panel, dokümantasyon)
- API limitleri ve ek özellikler (chatbot, AI, CRM entegrasyonu)
- KVKK uyumlu veri merkezi (AB/Türkiye konumlu sunucu)

PORTZEN, BSP seçim danışmanlığı yaparken müşterinin işlem hacmine ve teknik kapasitesine göre öneriyi netleştirir. Eğer bu seçim aşamasını atlamak istiyorsanız [WhatsApp AI Asistanı](/whatsapp-ai-asistani) paketimizde BSP seçim, kurulum ve eğitim dahildir.

## Adım 3: Facebook Business Manager ve Numara Doğrulama (30-60 dakika)

BSP seçtikten sonra, BSP size Facebook Business Manager (business.facebook.com) üzerinden iki adım atmanızı söyler:

- Business Manager hesabı açın (varsa mevcudu kullanın)
- BSP'nizi "Partner" olarak ekleyin (hesap onayı verin)

Sonrasında telefon numarası kayıt sürecine geçersiniz. WhatsApp API için kullanacağınız numara:

- Hiç WhatsApp App'e kayıtlı olmamalı (kayıtlıysa önce App'ten silinmeli)
- Sabit hat veya mobil olabilir
- Türkiye'den olabilir (+90 ile başlamalı)
- SMS veya sesli arama ile doğrulama yapılır

BSP paneline numaranızı girin, WhatsApp size 6 haneli kod gönderir, panele yazın. Numara onayı 5-30 dakika sürer.

## Adım 4: İşletme Doğrulaması (Business Verification) (1-7 iş günü)

WhatsApp, ticari hesabınızın gerçek olduğunu kanıtlamanız için işletme doğrulaması ister. Bu adım hızlandırılabilir değildir; süreçten geçmeden şablon onayı alamazsınız.

Business Manager içinde "Güvenlik Merkezi" > "İşletme Doğrulaması" bölümüne girin. Yükleyeceğiniz belgeler:

- Vergi levhası
- Ticaret sicil gazetesi veya esnaf belgesi
- İşletme adına telefon ve adres faturası (son 3 ay)
- Resmi web sitesi (whois bilgisi işletme adıyla eşleşmeli)

Belgeler tutarsız olursa süreç 14 güne kadar uzar. NAP (Name, Address, Phone) tutarlılığı kritiktir; vergi levhası, web sitesi, KVKK aydınlatma metni ve fatura aynı bilgileri içermelidir.

## Adım 5: Mesaj Şablonu (Template) Onayı Alın (1-3 iş günü)

WhatsApp, toplu mesajların kullanıcıyı rahatsız etmemesi için "şablon" sistemi kullanır. İlk mesajınızı her zaman önceden onaylanmış bir şablonla göndermelisiniz. Şablonun yapısı:

- Header (görsel, video veya metin)
- Body (asıl mesaj, değişken alanlar {{1}}, {{2}})
- Footer (küçük not, opsiyonel)
- Buttons (CTA butonları, en fazla 3 adet)

Üç şablon kategorisi vardır:

- Marketing: Promosyon, kampanya, yeni ürün duyurusu
- Utility: Sipariş bildirimi, kargo takip, randevu hatırlatma
- Authentication: Tek kullanımlık şifre (OTP), doğrulama

Şablon yazarken yasak kelimelere dikkat: "Tıklayın", "Acele edin", "Son fırsat", "Sadece bugün", spam çağrısı içeren ifadeler reddedilir. Doğal, bilgilendirici dil kullanın.

Örnek onaylı şablon:

"Merhaba {{1}}, [Markaadı] olarak yeni yaz koleksiyonumuzu sizinle paylaşmak istedik. Üyelerimize özel %20 indirim kodumuz: {{2}}. Detaylar için web sitemizi ziyaret edebilirsiniz. Mesaj almak istemiyorsanız 'ÇIKIŞ' yazın."

Onay 1-24 saat arasında gelir. Reddedilirse BSP paneliniz neden olduğunu açıklar, düzenleyip tekrar başvurun.

## Adım 6: KVKK Uyumlu Opt-in Sistemi Kurun (1-2 gün)

KVKK Türkiye'de WhatsApp gönderimi için açık rıza (opt-in) zorunluluğu getirir. Opt-in'in geçerli olması için:

- Önceden bilgilendirme (KVKK aydınlatma metni okutulmuş olmalı)
- Özgür irade (hizmet alma şartı olarak istenemez)
- Belirli bir konu (genel onay değil, "WhatsApp tanıtım mesajı" gibi spesifik)
- Geri çekilebilir (kullanıcı istediği zaman vazgeçebilmeli)

Geçerli opt-in alma yöntemleri:

- Web sitesi formu: Kayıt sırasında ayrı işaretlenebilir kutu ("WhatsApp tanıtım mesajları almayı kabul ediyorum")
- Fiziksel form: Mağazada doldurulan kart, imza atılır
- WhatsApp opt-in: Kullanıcı kendisi mesaj başlatır ve "evet kampanya istiyorum" der
- Çift onay (double opt-in): Form doldurma + WhatsApp doğrulama mesajı (en güvenli)

[KVKK müşteri verisi rehberi](/blog/kvkk-musteri-verisi-rehberi) yazımız opt-in formu örneklerini ve aydınlatma metni şablonlarını detaylı içeriyor.

## Adım 7: Conversation Pricing'i Anlayın ve Bütçeleyin (15 dakika)

WhatsApp Haziran 2023'ten itibaren "konuşma bazlı" fiyatlandırmaya geçti. Her "conversation" 24 saatlik bir pencere açar. Bu pencerede sınırsız mesaj gönderebilirsiniz; pencere kapanınca yeni conversation başlar.

Türkiye fiyatları (BSP kar marjı hariç, Meta listesi):

- Marketing conversation: 0.0735 USD (yaklaşık 2.40 TL)
- Utility conversation: 0.0316 USD (yaklaşık 1.05 TL)
- Authentication conversation: 0.0354 USD (yaklaşık 1.15 TL)
- Service conversation (kullanıcı başlattıysa): Ücretsiz, 1.000 adete kadar/ay

Aylık 5.000 marketing conversation = 5.000 x 2.40 = 12.000 TL Meta ücreti + BSP marjı (genelde %15-30 ekstra) = 14.000-16.000 TL.

Service conversation (kullanıcı sizinle iletişim başlattığında) ücretsiz olduğu için, doğru bir asistan sistemi kurarak bütçenizi %40-60 düşürebilirsiniz. [WhatsApp chatbot fiyat](/whatsapp-chatbot-fiyat) sayfamızda gerçek senaryolar için tablolar yer alıyor.

## Adım 8: İlk Gönderiminizi Yapın ve İzleyin (1 saat)

Sistem hazır, şimdi pilot gönderim:

- Önce 100 kişilik bir alt grupla başlayın (A/B test)
- Şablonu BSP panelinde yükleyin
- Kontak listesini CSV olarak yükleyin (telefon numaraları E.164 formatında: +905XXXXXXXXX)
- Gönderim saatini ayarlayın (Türkiye için ideal: hafta içi 11:00-13:00 ve 18:00-20:00)
- Gönderim sonrası 24 saat izleyin: teslim edilme oranı, açılma oranı, yanıt oranı, opt-out oranı

Hedef metrikler:

- Teslim oranı: %95+
- Açılma oranı: %85+
- Yanıt oranı: %15-30
- Opt-out oranı: %1 altı (üstündeyse hedefleme yanlış)

## Yapılmaması Gerekenler: Ban Riski Yüksek Uygulamalar

WhatsApp hesabınızı kalıcı şekilde kaybetmenizin en hızlı yolları:

- WhatsApp Plus, GB WhatsApp gibi modifiye uygulamalar
- Toplu mesaj atan APK'lar, bot yazılımları, scrcpy otomasyonları
- Numaralarınızı satın aldığınız listelere ilk mesajı atmak
- Tek mesajda link bombardımanı (3+ link)
- Çok kısa aralıklarla aynı mesajı tekrar etmek
- Onaylanmamış şablonla 24 saat penceresi dışında mesaj atmak

Bu uygulamalardan biri tespit edilirse:

- İlk uyarı: 24-72 saat askı
- İkinci uyarı: 7-30 gün askı
- Üçüncü uyarı: Kalıcı ban (numara tekrar kullanılamaz)

Banlanan numaranın geri açılması neredeyse imkansızdır. ETK kapsamında ise spam denetimleri 50.000-1.000.000 TL ceza üretebilir.

## İleri Seviye Taktikler

Temel sistemi kurduktan sonra:

- AI destekli yanıt: Marketing conversation'ı service conversation'a dönüştürerek ücreti sıfırlayın
- Davranış bazlı segmentasyon: Son 30 günde sipariş veren, vermeyen, sepeti terk eden ayrı listelerle gönderim
- Carousel mesaj formatı: 5'e kadar ürün kartını tek mesajda göstermek
- Click-to-WhatsApp Facebook reklamları: Reklamdan tıklayan kullanıcı sizinle conversation başlatır, ücretsiz
- CRM entegrasyonu: HubSpot, Salesforce gibi sistemlere bağlayın
- [WhatsApp Business API kurulum](/blog/whatsapp-business-api-kurulum) ve [WhatsApp AI Asistanı](/whatsapp-ai-asistani) yazılarımızda bu taktikler örneklerle anlatılıyor

E-ticaret için sepet terk hatırlatması, klinikler için randevu hatırlatma, emlak için yeni ilan bildirimi en yüksek ROI getiren senaryolardır.

## Sıkça Sorulan Sorular

**Eski müşteri listemi nasıl yasal hale getirebilirim?**
İki yol: (1) Listenizdeki kullanıcılara KVKK uyumlu yeniden onay formu gönderin (e-posta veya SMS), (2) İlk WhatsApp mesajınızı sadece "onay alma" amaçlı yapın ve "EVET" yazanları aktif liste yapın.

**WhatsApp Business App ile günde kaç broadcast yapabilirim?**
WhatsApp resmi limit söylemiyor ancak günde 5-10 broadcast (her biri 256 kişiye) üstü hesap askısı riskini artırır. Yüksek hacim için API zorunludur.

**Şablon kaç defa reddedilirse hesabım kapanır?**
Sınır yok ama 5+ reddedilen şablon hesap puanınızı düşürür ve "Quality Rating" değeriniz sarı/kırmızıya döner. Kırmızı rating mesaj gönderim limitinizi düşürür.

**Conversation pricing dolar bazlı, kur dalgalanmasından nasıl korunurum?**
Meta fiyatları USD olarak listeler ama bazı BSP'ler 6 aylık TL sabit fiyat sözleşmesi sunabilir. PORTZEN ile çalışan müşterilerimize yıllık sabit TL fiyatı garanti ediyoruz.

**KVKK denetiminde hangi belgeler istenir?**
Aydınlatma metni, açık rıza formları, opt-in tarih ve IP logları, opt-out işlem kayıtları, veri saklama politikası. Tüm bunları sistematik tutmak için CRM gerekir. [CRM otomasyonu](/crm-otomasyonu) sayfamızda detay var.

## PORTZEN ile WhatsApp Toplu Mesaj İçin Sistem Kurmak

WhatsApp toplu mesaj sistemi tek seferlik bir kurulum değildir; sürekli izlenmesi, optimize edilmesi ve yasal değişikliklere uyarlanması gereken canlı bir altyapıdır. PORTZEN olarak BSP seçimi, Business Manager kurulumu, şablon yazımı ve onay alma, KVKK uyumlu opt-in form tasarımı, AI destekli yanıt sistemi ve aylık optimizasyon raporlamasını içeren paketler sunuyoruz. 150+ KOBİ'ye kurduğumuz sistemde ortalama mesaj başına maliyet 0.10 TL altı, açılma oranı %94, opt-out oranı %0.4 seviyesinde. Sisteminizi yasal ve sürdürülebilir bir altyapıyla kurmak için [WhatsApp AI Asistanı](/whatsapp-ai-asistani) sayfamızı inceleyebilir, fiyatlandırma detayı için [WhatsApp chatbot fiyat](/whatsapp-chatbot-fiyat) sayfamıza göz atabilir, ücretsiz keşif görüşmesi için [iletişim](/iletisim) sayfamızdan bize ulaşabilirsiniz.
