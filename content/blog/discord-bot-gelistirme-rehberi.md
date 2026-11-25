---
title: "Discord Bot Geliştirme: İşletmeler ve Topluluklar İçin Çözümler"
seoTitle: "Discord Bot Geliştirme: İşletme ve Topluluk Rehberi"
slug: "discord-bot-gelistirme-rehberi"
category: "altyapi"
description: "Discord bot nasıl geliştirilir? Slash komutları, Gateway intent'leri, rol yönetimi, moderasyon ve barındırma kararlarını işletme gözüyle anlatan rehber."
keywords: ["discord bot geliştirme", "discord bot yaptırmak", "discord slash komutları", "discord moderasyon botu", "discord.js discord.py"]
publishedAt: "2026-11-25"
updatedAt: "2026-11-25"
author: "Arda Kaya"
relatedServices: ["discord-bot-gelistirme"]
---

# Discord Bot Geliştirme: İşletmeler ve Topluluklar İçin Çözümler

Discord botu, bir sunucuda (guild) üyeler adına tekrar eden işleri yapan bir uygulamadır: yeni üyeyi karşılamak, rol vermek, spam'i temizlemek, destek talebi açmak ya da dış sistemlerden gelen bildirimleri kanala düşürmek gibi. İşletmeler ve topluluklar için doğru kurgulanmış bir bot, moderatör yükünü azaltır ve sunucuyu bir iletişim kanalından çalışan bir sisteme dönüştürür. Bu yazıda botun teknik olarak nasıl çalıştığını, hangi kararların baştan verilmesi gerektiğini ve nerede barındırılacağını anlatıyoruz.

## Discord Botu Teknik Olarak Nasıl Çalışır?

Her bot, [Discord Developer Portal](https://discord.com/developers/docs) üzerinde oluşturulan bir "Application" ve ona bağlı bir bot kullanıcısıdır. Bot, iki kanal üzerinden Discord ile konuşur:

- **Gateway (WebSocket):** Bot sürekli açık bir bağlantı tutar ve mesaj, üye katılımı, tepki gibi olayları gerçek zamanlı alır.
- **REST API:** Mesaj gönderme, rol atama, kanal oluşturma gibi işlemler HTTP istekleriyle yapılır.

Bu yüzden klasik bir Discord botu "her zaman açık" bir süreçtir. Bilgisayarınızda çalışan bir script kapandığında bot da çevrimdışı olur; üretimde bir sunucuda, yeniden başlatma politikasıyla çalışması gerekir.

### Gateway Intent'leri ve Privileged Intent'ler

Discord, botun hangi olayları alacağını **intent** adı verilen izinlerle sınırlar. Bot, bağlanırken hangi intent'lere ihtiyaç duyduğunu bildirir. Bazıları ise **privileged** (ayrıcalıklı) kabul edilir ve Developer Portal'da ayrıca açılması gerekir:

| Intent | Ne sağlar | Not |
|---|---|---|
| `GUILDS` | Sunucu, kanal, rol bilgileri | Neredeyse her botta gerekir |
| `GUILD_MESSAGES` | Mesaj olayları | Mesaj içeriği için tek başına yetmez |
| `GUILD_MEMBERS` | Üye katılma/ayrılma, üye listesi | Privileged |
| `GUILD_PRESENCES` | Çevrimiçi durumu, aktivite | Privileged |
| `MESSAGE_CONTENT` | Mesajların metin içeriği | Privileged |

Belirli bir sunucu sayısını aşan doğrulanmış botlarda privileged intent'ler için Discord'a gerekçe sunmanız gerekir. Pratik sonuç şudur: botu tasarlarken "bu özellik gerçekten mesaj içeriğini okumayı gerektiriyor mu?" sorusunu sormak hem gizlilik hem de onay süreci açısından önemlidir. Çoğu senaryo slash komutlarıyla mesaj içeriğine erişmeden çözülebilir.

### Slash Komutları ve Etkileşimler

Modern Discord botlarında kullanıcı etkileşiminin ana yolu **application commands**, yani `/destek`, `/rol-al` gibi slash komutlarıdır. Avantajları:

- Komutlar Discord arayüzünde otomatik tamamlanır, parametreler tiplidir.
- Mesaj içeriği intent'ine gerek kalmaz.
- Butonlar, seçim menüleri ve modal formlarla birleştirilebilir.

Etkileşimler belirli bir süre içinde yanıtlanmalıdır; uzun süren işler (ör. bir API'den rapor çekmek) için önce "erteleme" yanıtı verilip sonuç sonradan gönderilir. Bu ayrıntı, botun arka planda kuyruk veya iş parçacığı kullanmasını gerektirebilir.

## Hangi Kütüphane: discord.js mi, discord.py mi?

Bot herhangi bir dille yazılabilir, ama iki kütüphane en yaygın olanlardır:

| | discord.js | discord.py |
|---|---|---|
| Dil | JavaScript / TypeScript (Node.js) | Python |
| Güçlü yanı | Geniş ekosistem, TypeScript tipleri | Okunabilir sözdizimi, veri/yapay zekâ kütüphaneleriyle kolay entegrasyon |
| Uygun olduğu durum | Ekibiniz Node.js kullanıyorsa, web projeleriyle ortak kod | Analiz, yapay zekâ veya Python tabanlı iç araçlarla bağlantı |

Seçim çoğunlukla ekibin bildiği dile ve botun bağlanacağı sistemlere göre yapılır. Teknik olarak ikisi de intent, slash komutu, buton ve modal gibi güncel özellikleri destekler.

## İşletmeler ve Topluluklar İçin Gerçekçi Kullanım Senaryoları

### Rol yönetimi ve üye karşılama

Yeni üye katıldığında kurallar kanalına yönlendirme, kuralları kabul edince "Doğrulanmış" rolü verme, ilgi alanına göre rol seçtirme (buton veya menü ile) en yaygın ihtiyaçtır. Burada dikkat edilmesi gereken nokta **rol hiyerarşisidir**: bot yalnızca kendi en yüksek rolünün altındaki rolleri atayabilir. Bota "Administrator" vermek kolay yoldur ama güvenli değildir; yalnızca gerekli izinler (Manage Roles, Manage Messages gibi) verilmelidir.

### Moderasyon

- Belirli kelime veya bağlantı kalıplarına göre mesaj silme ve uyarı
- Zaman aşımı (timeout), atma ve yasaklama komutlarının kayıt altına alınması
- Moderasyon kararlarını ayrı bir log kanalına yazma

Discord'un kendi **AutoMod** özelliği temel filtrelemeyi bot olmadan yapar. Bot, AutoMod'un yetmediği yerde devreye girmelidir: özel kurallar, uyarı sayacı, kayıt ve raporlama gibi.

### Destek ve ticket sistemi

`/destek` komutu ile yalnızca kullanıcı ve destek ekibinin görebildiği özel bir kanal veya thread açmak, kapanınca konuşmayı arşivlemek; oyun toplulukları, SaaS ürünleri ve eğitim toplulukları için sık kullanılan bir yapıdır.

### Dış sistem entegrasyonu

Bot; ödeme altyapısından gelen bir webhook'a göre üyeye "Premium" rolü verebilir, bir CRM'e kayıt açabilir veya GitHub, form ya da e-ticaret olaylarını ilgili kanala bildirebilir. Bu tür akışlar bazen bot kodunda, bazen de n8n gibi bir otomasyon aracında daha bakımı kolay olur. Bu karşılaştırma için [n8n kendi sunucunuzda mı, bulutta mı?](/blog/n8n-kendi-sunucunda-mi-bulutta-mi) yazısına bakabilirsiniz.

## Barındırma: Botu Nerede Çalıştırmalı?

Gateway tabanlı bir bot sürekli açık bir süreç olduğu için şu gereksinimler ortaya çıkar:

- **Süreç yönetimi:** Çökme veya sunucu yeniden başlatmasında otomatik ayağa kalkma (Docker `restart` politikası, systemd veya bir süreç yöneticisi).
- **Gizli anahtar yönetimi:** Bot token'ı kod deposuna yazılmamalı, ortam değişkeni veya gizli anahtar deposunda tutulmalıdır. Token sızarsa Developer Portal'dan hemen yenilenmelidir.
- **Kalıcı veri:** Uyarı sayıları, ticket kayıtları, ayarlar için bir veritabanı (küçük botlarda SQLite, büyüyünce PostgreSQL).
- **İzleme:** Botun bağlantısının kopup kopmadığını gösteren basit bir uptime kontrolü ve hata logları.
- **Ölçek:** Çok sayıda sunucuya hizmet veren botlarda Discord **sharding** gerektirir; tek bir topluluk veya işletme sunucusu için bu genellikle gündeme gelmez.

Biz kendi altyapımızda da kullandığımız yaklaşımla botları Docker konteynerinde, yeniden başlatma politikası ve Uptime Kuma gibi bir izleme aracıyla çalıştırmayı tercih ediyoruz. Benzer bir mesajlaşma botu mimarisini Telegram tarafında merak ediyorsanız [Telegram bot yaptırmak rehberimize](/blog/telegram-bot-yaptirmak-rehberi) göz atabilirsiniz.

## Bot Geliştirmeden Önce Netleştirilmesi Gerekenler

1. **Hangi işleri yapacak?** Özellik listesini önceliklendirin; ilk sürüm küçük tutulmalı.
2. **Hangi intent'lere ihtiyaç var?** Privileged intent gerekiyorsa gerekçesi açık olmalı.
3. **Kim, hangi komutu kullanabilir?** Komut izinleri rollere göre sınırlandırılmalı.
4. **Hangi veriler saklanacak?** Kullanıcı kimlikleri ve mesaj kayıtları kişisel veri sayılabilir; saklama süresi ve amacı belirlenmeli.
5. **Kim bakım yapacak?** Discord API'si zamanla değişir; kütüphane güncellemeleri ihmal edilmemeli.

## Discord Botunuzu Birlikte Planlayalım

Topluluğunuz veya işletmeniz için moderasyon, rol yönetimi, ticket ya da entegrasyon botu düşünüyorsanız ihtiyaçlarınızı birlikte netleştirebiliriz. Kapsama göre teklif hazırlıyor, botu geliştirip barındırma ve bakım tarafını da üstlenebiliyoruz. Ayrıntılar için [Discord Bot Geliştirme](/hizmetler/discord-bot-gelistirme) sayfasına bakabilir, [iletişim](/iletisim) sayfasından veya WhatsApp üzerinden (+90 531 863 91 17) bize ulaşabilirsiniz.

## Sıkça Sorulan Sorular

### Discord botu yapmak ücretsiz mi?

Discord, bot oluşturmak ve API'yi kullanmak için ücret almaz. Maliyet; geliştirme emeği, botun çalışacağı sunucu ve bakım tarafından gelir.

### Botum neden mesajların içeriğini göremiyor?

Mesaj içeriği privileged bir intent'tir. Developer Portal'da `MESSAGE_CONTENT` açılmalı ve bot bağlanırken bu intent'i istemelidir. Çoğu durumda slash komutlarına geçmek daha sağlıklı bir çözümdür.

### Bota yönetici (Administrator) yetkisi vermeli miyim?

Önerilmez. Bot token'ı sızarsa sunucunun tamamı risk altına girer. Yalnızca gereken izinleri verin ve bot rolünü, atayacağı rollerin üstüne konumlandırın.

### discord.js ile discord.py arasında performans farkı var mı?

Tek bir işletme veya topluluk sunucusu ölçeğinde fark genellikle belirleyici değildir. Ekibin bildiği dil ve entegre edilecek sistemler daha önemli bir seçim ölçütüdür.

### Bot kendi bilgisayarımda çalışabilir mi?

Test için evet, ancak bilgisayar kapandığında bot da çevrimdışı olur. Sürekli hizmet için bir sunucu veya konteyner ortamında, otomatik yeniden başlatma ve izleme ile çalıştırılmalıdır.
