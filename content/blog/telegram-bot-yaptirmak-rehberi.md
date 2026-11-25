---
title: "Telegram Bot Yaptırmak İsteyen İşletmeler İçin Rehber"
seoTitle: "Telegram Bot Yaptırmak: İşletmeler İçin Rehber"
slug: "telegram-bot-yaptirmak-rehberi"
category: "altyapi"
description: "Telegram bot yaptırmadan önce gereksinimleri nasıl belirlersiniz, teklif isterken neler sorulmalı, bot nerede barındırılır ve kaynak kod kimde kalır? Pratik rehber."
keywords: ["telegram bot yaptırmak", "telegram bot geliştirme", "telegram bot teklifi", "telegram bot barındırma", "özel telegram botu"]
publishedAt: "2026-11-25"
updatedAt: "2026-11-25"
author: "Arda Kaya"
relatedServices: ["telegram-bot-gelistirme"]
---

# Telegram Bot Yaptırmak İsteyen İşletmeler İçin Rehber

Telegram bot yaptırmak isteyen bir işletmenin önce botun hangi işi çözeceğini, kimlerin kullanacağını ve hangi sistemlere bağlanacağını netleştirmesi gerekir. Ardından geliştiriciden teklif isterken barındırmanın kimde olacağını, kaynak kodun ve bot hesabının kime ait olacağını ve bakımın nasıl yürüyeceğini yazılı olarak sormalısınız. Bu rehber, iyi bir teklif almanız ve sonradan sürprizle karşılaşmamanız için gereken soruları bir araya getiriyor.

## Telegram Botu Teknik Olarak Nedir?

Telegram botu, Telegram'ın sunduğu [Bot API](https://core.telegram.org/bots/api) üzerinden mesaj alıp gönderen bir yazılımdır. Bot hesabı Telegram içindeki **@BotFather** ile oluşturulur ve size bir **token** verilir. Bu token, botun anahtarıdır: kimde varsa botu o kontrol eder. Botun "beyni" ise sizin veya geliştiricinizin sunucusunda çalışan koddur.

Bot, mesajları iki yolla alır:

- **Long polling:** Kod, Telegram'a sürekli "yeni mesaj var mı?" diye sorar. Kurulumu basittir, alan adı ve SSL gerektirmez.
- **Webhook:** Telegram, her yeni mesajı sizin belirlediğiniz HTTPS adresine gönderir. Daha verimlidir ve üretim ortamı için yaygın tercihtir, ancak geçerli SSL sertifikalı erişilebilir bir adres gerektirir.

Genel bilgi için Telegram'ın resmi bot sayfası: [core.telegram.org/bots](https://core.telegram.org/bots).

## 1. Gereksinimleri Belirleyin

Geliştiriciyle konuşmadan önce aşağıdaki soruları kendi içinizde cevaplamak, hem süreyi hem de yanlış anlaşılmaları azaltır.

**Amaç ve kullanıcılar**
- Bot hangi sorunu çözecek? (Sipariş almak, randevu, destek, ekip içi bildirim...)
- Kullanıcılar müşteriler mi, çalışanlar mı, ikisi birden mi?
- Bot birebir sohbette mi, bir grupta mı, bir kanalda mı çalışacak?

**İşlevler**
- Hangi komutlar ve menüler olacak? Inline klavye (mesajın altındaki butonlar) kullanılacak mı?
- Kullanıcıdan hangi bilgiler alınacak (isim, telefon, adres, dosya)?
- Bot içinden ödeme alınacak mı?
- Birden fazla dil gerekiyor mu?

**Entegrasyonlar**
- Bot hangi sistemlerle konuşacak? (Web siteniz, e-ticaret altyapısı, CRM, Google Sheets, muhasebe yazılımı, n8n iş akışları)
- Bu sistemlerin API'si var mı, erişim bilgileri kimde?

**Yönetim**
- İçerikleri (mesaj metinleri, ürünler, fiyatlar) kim güncelleyecek? Bir yönetim paneli gerekiyor mu?
- Raporlama isteniyor mu?

Bunları bir sayfalık bir belgeye dökmeniz, alacağınız tekliflerin birbiriyle karşılaştırılabilir olmasını sağlar.

## 2. Teklif İsterken Sorulacaklar

| Konu | Sorulacak soru | Neden önemli? |
|---|---|---|
| Kapsam | Teklife hangi özellikler dahil, hangileri değil? | Sonradan "bu ek iş" tartışmasını önler |
| Barındırma | Bot nerede çalışacak, sunucu kimin adına? | Erişim ve süreklilik |
| Bot hesabı | BotFather'da bot hangi Telegram hesabıyla oluşturulacak? | Token ve bot üzerindeki kontrol |
| Kaynak kod | Kod bize teslim edilecek mi, hangi depoda tutulacak? | Geliştirici değişirse devam edebilmek |
| Lisans | Kodun kullanım hakları kimde olacak? | Hukuki netlik |
| Bakım | Teslimden sonra hata düzeltme ve güncelleme nasıl işleyecek? | Telegram API ve bağımlılıklar değişir |
| Test | Kabul testleri nasıl yapılacak, test botu olacak mı? | Canlıya çıkmadan doğrulama |
| Veri | Hangi kişisel veriler tutulacak, nerede, ne kadar süre? | KVKK uyumu |
| Yedekleme ve izleme | Bot çökerse nasıl fark edilecek? | Kesintinin uzun sürmemesi |
| Dokümantasyon | Kurulum ve işletme belgesi verilecek mi? | Başka ekibin devralabilmesi |

Fiyatı tek başına karşılaştırmak yanıltıcı olur; düşük bir teklif barındırmayı, bakımı veya kaynak kod teslimini kapsamıyor olabilir.

## 3. Bot Kim Tarafından ve Nerede Barındırılacak?

Botun kodu bir yerde 7/24 çalışmak zorundadır. Seçenekler:

- **Geliştiricinin sunucusu:** Başlangıçta pratiktir ama geliştiriciye bağımlı kalırsınız. Sözleşmede çıkış senaryosu (kodun ve verinin teslimi) yazılı olmalıdır.
- **Sizin adınıza açılan bir VPS veya bulut hesabı:** Fatura ve erişim sizde olur; geliştirici yetkili kullanıcı olarak çalışır. Uzun vadede en sağlıklı yöntemdir.
- **Kendi fiziksel sunucunuz:** Veriyi tamamen kendi kontrolünüzde tutmak istiyorsanız uygundur; ancak elektrik, internet ve bakım sorumluluğu sizdedir.

Hangi seçeneği tercih ederseniz edin, botun Docker konteynerinde çalışması ve otomatik yeniden başlatma, log ve izleme ayarlarının yapılması iyi bir standarttır. Bu yapıların arka planını [Docker Nedir? İşletmeler İçin Konteyner Altyapısı](/blog/docker-nedir-isletmeler-icin) yazısında bulabilirsiniz.

## 4. Sahiplik: Token, Kod ve Veri

Üç şeyin sahipliğini ayrı ayrı netleştirin:

1. **Bot hesabı ve token:** Bot, işletmeye ait bir Telegram hesabıyla oluşturulmalı veya teslimde sahipliği aktarılmalıdır. BotFather'da bot sahipliğini başka bir hesaba devretme imkânı bulunur. Token sızarsa BotFather üzerinden yenilenebilir.
2. **Kaynak kod:** İşletmenin erişebildiği bir Git deposunda (ör. şirket GitHub hesabı) tutulmalıdır. Sadece "çalışan bot" teslim almak, geliştirici ortadan kalktığında botu değiştiremeyeceğiniz anlamına gelir.
3. **Veri:** Bot üzerinden toplanan kullanıcı bilgileri işletmenin veritabanında durmalı ve dışa aktarılabilir olmalıdır.

## 5. Bilinmesi Gereken Teknik Sınırlar

Telegram'ın kendi koyduğu bazı sınırlar, botun tasarımını etkiler. [Telegram Bot SSS](https://core.telegram.org/bots/faq) sayfasına göre:

- Tek bir sohbete saniyede yaklaşık bir mesajdan fazla gönderilmemesi önerilir; aşılırsa 429 hatası alınır.
- Bir gruba dakikada 20 mesajdan fazla gönderilemez.
- Toplu gönderimde (ücretli yayın özelliği kullanılmadan) saniyede yaklaşık 30 mesaj sınırı vardır.
- Bot API üzerinden gönderilen dosyalar en fazla 50 MB, indirilebilen dosyalar en fazla 20 MB olabilir.
- Bot, kendisine önce yazmamış bir kullanıcıya mesaj gönderemez.

Binlerce kişiye duyuru yapmayı planlıyorsanız, gönderim kuyruğu bu sınırlara göre tasarlanmalıdır.

**Ödemeler:** Telegram, botlar içinde ödeme alma altyapısı sunar. Dijital ürün ve hizmetlerde Telegram Stars kullanımı zorunlu tutulurken, fiziksel ürünlerde desteklenen ödeme sağlayıcıları üzerinden ödeme alınabilir. Türkiye'deki sağlayıcı desteği değişkenlik gösterebildiğinden, ödeme senaryosunu proje başında Telegram'ın güncel ödeme dokümantasyonuyla birlikte doğrulamak gerekir. Birçok işletme için bot içinde sipariş toplayıp ödemeyi mevcut sanal POS'a yönlendiren bir bağlantıyla almak daha pratik olabilir.

## 6. KVKK Açısından Not

Bot; isim, telefon numarası, adres veya sipariş geçmişi gibi bilgileri işliyorsa 6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında veri sorumlusu işletmenizdir. Pratikte:

- Kullanıcıya hangi verinin hangi amaçla işlendiğini anlatan bir aydınlatma metni (ör. ilk mesajda bir bağlantı) sunun.
- Yalnızca gerekli veriyi toplayın ve saklama süresini belirleyin.
- Verileri güvenli bir sunucuda, erişimi sınırlandırılmış şekilde tutun.
- Telegram'ın kendisinin de mesajları kendi sunucularında işlediğini, yani üçüncü taraf bir hizmet kullandığınızı göz önünde bulundurun; yurt dışına veri aktarımı konusunu hukuk danışmanınızla değerlendirin.

Güncel düzenlemeler için [kvkk.gov.tr](https://www.kvkk.gov.tr) adresine bakabilirsiniz. Bu bölüm hukuki danışmanlık değildir; kendi durumunuz için bir avukata danışmanızı öneririz.

## Bot Projenizi Konuşalım

Hangi otomasyon senaryolarının bota uygun olduğunu görmek için [Telegram Botları ile İşletme Otomasyonu Nasıl Yapılır?](/blog/telegram-bot-ile-isletme-otomasyonu) yazımıza göz atabilirsiniz. Gereksinimlerinizi birlikte netleştirmek, barındırma ve sahiplik konularını baştan doğru kurmak için [Telegram Bot Geliştirme](/hizmetler/telegram-bot-gelistirme) hizmetimizi inceleyin; kapsama göre teklif hazırlıyoruz. [Detayları Konuşalım](/iletisim) ya da WhatsApp: +90 531 863 91 17.

## Sıkça Sorulan Sorular

### Telegram botu yaptırmak ne kadar sürer?

Süre kapsama bağlıdır. Birkaç komut ve bildirimden oluşan bir bot kısa sürede hazırlanabilirken; ödeme, yönetim paneli ve birden fazla sisteme entegrasyon içeren bir bot daha uzun bir geliştirme ve test süreci gerektirir.

### Bot için ayrı bir sunucu gerekli mi?

Bot kodunun sürekli çalışacağı bir ortam gerekir. Bu, ayrı bir küçük VPS olabileceği gibi zaten kullandığınız bir sunucudaki bir konteyner de olabilir. Önemli olan erişimin ve faturanın işletmede olmasıdır.

### Geliştirici ile çalışmayı bırakırsam botum ne olur?

Bot hesabı, token, kaynak kod ve sunucu erişimi sizdeyse başka bir geliştirici kaldığı yerden devam edebilir. Bu yüzden sözleşmede kaynak kod teslimini ve dokümantasyonu yazılı hale getirin.

### Telegram botu müşterilerin telefon numarasını görebilir mi?

Hayır, otomatik olarak göremez. Kullanıcı, botun istediği "telefon numarasını paylaş" butonuna kendi isteğiyle basarsa numara bota iletilir. Bu durumda verinin KVKK'ya uygun işlenmesi gerekir.

### Webhook mu, long polling mi tercih edilmeli?

Üretim ortamında, SSL'li bir alan adınız varsa webhook genellikle daha verimlidir. Geliştirme aşamasında veya dışarıya açık bir adres istemediğiniz durumlarda long polling pratik bir seçenektir.
