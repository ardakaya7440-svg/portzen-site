---
title: "Telegram Botları ile İşletme Otomasyonu Nasıl Yapılır?"
seoTitle: "Telegram Bot ile İşletme Otomasyonu: Senaryolar"
slug: "telegram-bot-ile-isletme-otomasyonu"
category: "altyapi"
description: "Telegram botlarıyla sipariş bildirimi, randevu yönetimi, ekip içi uyarılar ve n8n entegrasyonu nasıl kurulur? İşletmeler için gerçekçi otomasyon senaryoları."
keywords: ["telegram bot otomasyonu", "telegram sipariş bildirimi", "telegram randevu botu", "n8n telegram entegrasyonu", "telegram ekip bildirimi"]
publishedAt: "2026-11-25"
updatedAt: "2026-11-25"
author: "Arda Kaya"
relatedServices: ["telegram-bot-gelistirme"]
---

# Telegram Botları ile İşletme Otomasyonu Nasıl Yapılır?

Telegram botlarıyla işletme otomasyonu, mevcut sistemlerinizde (web sitesi, e-ticaret altyapısı, randevu takvimi, sunucular) olan olayları Telegram mesajına dönüştürmek ve Telegram'dan gelen butonlu cevapları da bu sistemlere geri işlemekle yapılır. En yaygın kullanım alanları yeni sipariş bildirimleri, randevu alma ve hatırlatma, ekip içi uyarılar ve onay akışlarıdır. Arada bağlayıcı olarak çoğu zaman n8n gibi bir otomasyon aracı veya küçük bir özel servis kullanılır.

## Temel Yapı Taşları

Bir otomasyon senaryosu genellikle üç parçadan oluşur:

1. **Tetikleyici:** Bir olay olur. Yeni sipariş, form gönderimi, takvimde yaklaşan randevu, sunucu uyarısı.
2. **İşleme:** Olayın verisi düzenlenir, gerekirse başka sistemlerden bilgi çekilir ve kime ne gönderileceğine karar verilir.
3. **Telegram eylemi:** Bot, Bot API'nin `sendMessage` gibi metotlarıyla mesaj gönderir. Mesaja **inline klavye** eklenirse kullanıcı "Onayla", "Reddet", "Kargoya verildi" gibi butonlara basar; bu basış bota bir `callback_query` olarak geri döner ve akış devam eder.

Metotların tam listesi için: [core.telegram.org/bots/api](https://core.telegram.org/bots/api).

Önemli bir kural: Bot, kendisine daha önce yazmamış bir kullanıcıya mesaj gönderemez. Ekip üyeleri veya müşteriler botu bir kez başlatmalı (`/start`) ya da bot bir gruba eklenmelidir.

## Senaryo 1: Sipariş Bildirimi ve Durum Güncelleme

**Sorun:** Siparişler e-ticaret paneline düşüyor ama ekip paneli sürekli açık tutmuyor; hazırlama gecikiyor.

**Akış:**
1. E-ticaret altyapınız yeni sipariş için bir webhook gönderir.
2. n8n bu veriyi alır, ürünleri ve teslimat bilgisini okunur bir mesaja dönüştürür.
3. Bot, "Siparişler" grubuna mesajı gönderir: sipariş numarası, ürünler, teslimat türü ve "Hazırlanıyor" / "Kargoya verildi" butonları.
4. Bir çalışan butona bastığında n8n e-ticaret sistemindeki sipariş durumunu günceller ve mesajı düzenleyerek kimin işlem yaptığını yazar.

**Dikkat:** Gruba gönderilen mesajlarda müşterinin tam adresini veya telefonunu göstermek yerine yalnızca işi yapmak için gereken bilgiyi paylaşmak, kişisel veri riskini azaltır.

## Senaryo 2: Randevu Alma ve Hatırlatma

**Sorun:** Randevular telefonla alınıyor, hatırlatma yapılmadığı için gelmeyenler oluyor.

**Akış:**
1. Müşteri botu başlatır, inline klavye ile hizmeti ve uygun günü seçer.
2. Bot, takvim sisteminden (ör. Google Calendar veya kendi veritabanınız) boş saatleri çekip butonlar olarak sunar.
3. Seçim yapıldığında randevu takvime yazılır, müşteriye onay mesajı gider.
4. Randevudan bir gün önce zamanlanmış bir iş akışı müşteriye hatırlatma gönderir; "Geliyorum" / "İptal" butonlarıyla cevap alınır.
5. İptal edilirse slot tekrar açılır ve işletme sahibine bildirim gider.

Bu senaryo, müşterilerinizin Telegram'ı aktif kullandığı durumlarda anlamlıdır. Türkiye'de müşteri tarafında WhatsApp daha yaygın olabileceği için kanalı müşteri alışkanlığına göre seçmek gerekir; Telegram ekip içi kullanımda genellikle daha kolay benimsenir.

## Senaryo 3: Ekip İçi Uyarılar

Telegram'ın en verimli kullanıldığı alan ekip içi bildirimlerdir; çünkü kullanıcılar sizin çalışanlarınızdır ve botu başlatma şartı kolayca sağlanır.

| Olay | Kaynak | Bildirim |
|---|---|---|
| Web sitesi erişilemez | Uptime Kuma | "Site yanıt vermiyor" + durum sayfası bağlantısı |
| Sunucu diski %90 dolu | Netdata / izleme aracı | Hangi sunucu, hangi disk |
| Deploy başarısız | GitHub Actions / Coolify | Depo, branch, hata bağlantısı |
| Yeni form başvurusu | Web sitesi | Başvuru özeti, CRM bağlantısı |
| Stok kritik seviyede | Stok sistemi | Ürün ve kalan miktar |
| Yüksek tutarlı iade talebi | E-ticaret | Onay/ret butonları |

Uptime Kuma gibi araçların Telegram bildirim desteği yerleşiktir; yalnızca bot token'ı ve sohbet kimliği girmek yeterlidir. Kendi altyapımızda da Uptime Kuma ve Netdata uyarılarını bu şekilde alıyoruz. Deploy bildirimlerinin arka planını [GitHub ile Otomatik Deployment Sistemi Nasıl Çalışır?](/blog/github-otomatik-deployment-nasil-calisir) yazısında anlattık.

**İpucu:** Her şeyi tek gruba göndermek bir süre sonra bildirim körlüğü yaratır. Kritik uyarıları ayrı bir gruba, bilgi amaçlı bildirimleri başka bir gruba ayırın.

## Senaryo 4: Onay Akışları

Satın alma talebi, izin talebi veya indirim onayı gibi süreçlerde bot, ilgili yöneticiye talebin özetini butonlarla gönderir. Yönetici "Onayla"ya bastığında ilgili sistemde kayıt güncellenir ve talep sahibine sonuç bildirilir. E-posta zinciriyle günler süren onaylar böylece kayıt altında ve hızlı ilerler.

## n8n ile Bağlamak

[n8n](https://docs.n8n.io), bu senaryoların çoğunu kod yazmadan veya az kodla kurmanızı sağlayan bir iş akışı aracıdır. Telegram için hazır bir düğümü (node) ve Telegram Trigger düğümü vardır:

- **Telegram Trigger:** Bota gelen mesajları ve buton basışlarını dinler. Arka planda Telegram'a bir webhook tanımlar; bu yüzden n8n'in HTTPS ile dışarıdan erişilebilir olması gerekir.
- **Telegram düğümü:** Mesaj gönderme, mesaj düzenleme, dosya gönderme, callback cevaplama gibi işlemleri yapar.
- **Diğer düğümler:** Webhook, HTTP Request, Google Sheets, veritabanları, CRM'ler ile Telegram arasında köprü kurar.

Basit bir örnek akış: `Webhook (yeni sipariş) → Set (mesaj metni) → Telegram (gruba gönder)`. Buton cevapları için ikinci bir akış: `Telegram Trigger (callback_query) → Switch (hangi buton) → HTTP Request (sipariş durumunu güncelle) → Telegram (mesajı düzenle)`.

n8n'i kendi sunucunuzda çalıştırıyorsanız Cloudflare Tunnel gibi bir yöntemle webhook adresini sunucu portu açmadan dışarıya güvenli şekilde sunabilirsiniz; biz de kendi altyapımızda bu yaklaşımı kullanıyoruz.

## Uygularken Dikkat Edilecekler

- **Hız sınırları:** [Telegram Bot SSS](https://core.telegram.org/bots/faq) sayfasına göre bir gruba dakikada 20'den fazla mesaj gönderilemez ve tek sohbete saniyede yaklaşık bir mesaj önerilir. Yoğun anlarda bildirimleri birleştirmek veya kuyruğa almak gerekir.
- **Token güvenliği:** Bot token'ını iş akışlarında düz metin olarak değil, kimlik bilgisi (credential) alanında saklayın.
- **Hata yönetimi:** Telegram'a gönderim başarısız olursa olay kaybolmamalı; n8n'de hata iş akışı tanımlayıp tekrar deneme yapın.
- **Yetki kontrolü:** Butonlara herkes basabiliyorsa, onay gibi kritik işlemlerde basan kullanıcının kimliğini kontrol edin.
- **KVKK:** Otomasyonların taşıdığı müşteri verilerini en aza indirin, kimlerin eriştiğini sınırlayın ve saklama sürelerini belirleyin. Genel çerçeve için [kvkk.gov.tr](https://www.kvkk.gov.tr) kaynağına bakabilir, kendi durumunuz için hukuk danışmanınızdan görüş alabilirsiniz.

Bir bot projesini dışarıdan yaptıracaksanız gereksinim, barındırma ve kaynak kod sahipliği gibi konuları [Telegram Bot Yaptırmak İsteyen İşletmeler İçin Rehber](/blog/telegram-bot-yaptirmak-rehberi) yazısında ele aldık.

## Otomasyonlarınızı Birlikte Kuralım

Hangi süreçlerinizin Telegram'a taşınabileceğini birlikte değerlendirmek, botu ve n8n akışlarını kurmak için [Telegram Bot Geliştirme](/hizmetler/telegram-bot-gelistirme) hizmetimize göz atın. Kapsama göre teklif hazırlıyoruz; [Detayları Konuşalım](/iletisim) ya da WhatsApp üzerinden +90 531 863 91 17 numarasına yazabilirsiniz.

## Sıkça Sorulan Sorular

### Telegram otomasyonu için kod bilmek gerekir mi?

Basit bildirim akışları n8n ile kod yazmadan kurulabilir. Çok adımlı sohbetler, karmaşık menüler veya yüksek mesaj hacmi gerektiren durumlarda özel bir bot uygulaması geliştirmek daha sağlıklıdır.

### Telegram mı, WhatsApp mı kullanmalıyım?

Ekip içi bildirimler için Telegram'ın Bot API'si ücretsiz, esnek ve kurulumu kolaydır. Müşteri iletişiminde ise müşterilerinizin hangi uygulamayı kullandığı belirleyicidir; Türkiye'de bu çoğu zaman WhatsApp olabilir.

### Bot bir grupta tüm mesajları okuyabilir mi?

Varsayılan olarak botlar gizlilik modunda çalışır ve gruplarda yalnızca komutları ve kendisine verilen cevapları görür. Bu ayar BotFather üzerinden değiştirilebilir, ancak gerçekten gerekmiyorsa açık bırakmak daha doğrudur.

### n8n'i kendi sunucumda mı çalıştırmalıyım?

Kendi sunucunuzda çalıştırmak veriyi kontrolünüzde tutar ve iş akışı sayısında esneklik sağlar; buna karşılık bakım ve güvenlik sizin sorumluluğunuzdadır. n8n'in bulut sürümü ise bu yükü üstlenir. İhtiyaca göre karar verilmelidir.

### Mevcut sistemimin API'si yoksa ne olur?

API yoksa e-posta bildirimleri, dışa aktarılan dosyalar veya veritabanına doğrudan okuma gibi alternatif yollar değerlendirilebilir. Bu yöntemler daha kırılgandır; mümkünse API veya webhook desteği olan bir çözüm tercih edilmelidir.
