---
title: "Make.com (Integromat) Türkçe Rehberi: Kurulum + İlk 5 Akış"
slug: "makecom-turkce-rehberi"
category: "otomasyon"
description: "Make.com (eski Integromat) nedir, Zapier'den farkı ne ve ilk 5 akışı nasıl kurarsınız? KOBİ'ler için 2026 Türkçe rehber, fiyatlandırma ve örneklerle."
keywords: ["make.com türkçe", "integromat türkçe", "make.com nedir", "make.com kurulum", "zapier alternatifi", "make.com örnekleri", "make.com fiyat"]
publishedAt: "2026-06-21"
author: "Arda Kaya"
readingTime: "11 dakika"
relatedServices: ["otomasyon", "ai-bot"]
ogImage: "/blog/og/makecom-turkce-rehberi.png"
---

# Make.com (Integromat) Türkçe Rehberi: Kurulum + İlk 5 Akış

İş süreçlerinizi otomatikleştirmek istediğinizde karşınıza çıkan en güçlü görsel otomasyon platformlarından biri **Make.com** (eski adıyla Integromat). 2022 yılında marka yenilemesiyle Make.com adını alan bu platform, Zapier'in yapamadığı kadar karmaşık akışları görselleştirebilen, modüler ve özellikle ajanslar için **fiyat/performans** açısından çok güçlü bir seçenek. Türkiye'de hâlâ "Make.com Türkçe" araması ayda binlerce kez yapılıyor ama doğru dürüst rehber bulmak zor. Bu yazıda Make.com'un ne olduğunu, Zapier'den temel farklarını, kayıt-kurulum sürecini, KOBİ'lerin ilk gün kurabileceği 5 hazır akışı ve Türk pazarına özel pratik kullanımları anlatacağız.

## Make.com Nedir, Eski Integromat ile İlişkisi

Make.com, Çek Cumhuriyeti merkezli bir ekip tarafından 2016'da **Integromat** adıyla kurulmuş bir iş akışı otomasyon platformudur. 2022'de Celonis tarafından satın alındıktan sonra yeniden tasarlanıp **Make.com** adıyla piyasaya çıktı. Eski Integromat kullanıcıları kademeli olarak yeni platforma taşındı; bugün artık tamamen Make.com olarak biliniyor.

Make.com'un Zapier ve n8n gibi rakiplerinden ayrıştığı temel özellik **görsel akış editörüdür**. Zapier'de akışlar yukarıdan aşağıya düz bir liste şeklinde çalışırken Make.com'da senaryolar (scenarios) bir akış şeması gibi dallanır, birleşir, paralel kollar oluşturur. Bu sayede karmaşık iş mantığını çok daha okunabilir şekilde modelleyebilirsiniz.

### Zapier ve n8n ile Hızlı Karşılaştırma

| Özellik | Zapier | Make.com | n8n |
|---|---|---|---|
| Başlangıç fiyatı | Ücretsiz / 20$ | Ücretsiz / 9$ | Ücretsiz (self-host) |
| Görsel akış editörü | Basit liste | Modüler şema | Şema bazlı |
| Karmaşık koşul desteği | Sınırlı | Çok güçlü | Çok güçlü |
| Hazır entegrasyon sayısı | 6000+ | 1500+ | 500+ |
| Türk uygulamalarına uyum | Düşük | Orta (webhook ile) | Yüksek (custom) |

Make.com'un "tatlı noktası" şudur: Zapier'den daha **karmaşık** akışları daha **ucuza** yapabilir; n8n'den daha **kolaydır**, sunucu yönetimi istemez. Bu nedenle dijital ajansların ve orta ölçekli KOBİ'lerin en sık tercih ettiği platformdur. Eğer hiç teknik bilginiz yoksa ve veriyi kendi sunucunuzda tutma derdiniz yoksa Make.com için profesyonel destek almadan da işe başlayabilirsiniz.

## Make.com Hesap Açma ve İlk Senaryoyu Kurma

Make.com'a kayıt olmak 2 dakika sürer. [make.com](https://www.make.com) adresine gidip Google veya email ile kayıt olursunuz. Ücretsiz plan kapsamında ayda **1000 operasyon** ve **iki aktif senaryo** alırsınız; başlangıç için fazlasıyla yeterlidir.

İlk senaryonuzu kurmadan önce kavramları netleştirelim:

- **Senaryo (Scenario):** Bir iş akışının tamamı. "Lead geldiğinde CRM'e yaz ve WhatsApp at" bir senaryodur.
- **Modül (Module):** Senaryo içindeki tek bir adım. Gmail'den email çekmek bir modüldür.
- **Operasyon (Operation):** Her bir modül çalıştığında 1 operasyon tüketilir. 100 lead × 4 modül = 400 operasyon.
- **Webhook:** Dış sistemlerden Make.com'a veri yollayan URL.

### İlk Senaryo: Webhook ile Form Tetikleme

İlk senaryonuz olarak web sitenizdeki bir formdan gelen veriyi Google Sheets'e yazan basit bir akış kurabilirsiniz. Make.com'a giriş yaptıktan sonra:

1. **Create a new scenario** butonuna basın.
2. İlk modül olarak **Webhooks > Custom webhook** seçin, Make.com size bir URL verir.
3. Bu URL'yi web formunuza endpoint olarak ekleyin, bir test form gönderin.
4. Make.com gelen veriyi otomatik tanır.
5. İkinci modül olarak **Google Sheets > Add a row** seçin, alanları eşleştirin.
6. Sağ alttaki **Run once** ile test edin, çalışıyorsa **Save** + **Schedule On**.

Bu kadar. İlk senaryonuz canlıda. Daha karmaşık ihtiyaçlar için [n8n kurulum hizmeti](/n8n-kurulum-hizmeti) ile karşılaştırarak hangi platformun sizin için uygun olduğunu seçebilirsiniz.

## KOBİ'ler İçin Hazır 5 Make.com Akışı

Make.com'u kurduktan sonra "ne yapsam" diye düşünmenize gerek yok. Aşağıdaki 5 akış neredeyse her sektörde işe yarar; kurulumu 30 dakika ile 2 saat arasındadır.

### Akış 1: Instagram Lead → CRM + WhatsApp

Instagram reklamlarınızdan veya organik DM'lerinizden gelen potansiyel müşterilerin Pipedrive/HubSpot'a yazılması ve ekibinize anında WhatsApp ile bildirilmesi.

- **Trigger:** Instagram for Business > Watch comments (veya Manychat webhook)
- **Filtre:** Belirli anahtar kelimeler ("fiyat", "bilgi", "randevu")
- **Adım 1:** Pipedrive > Create deal
- **Adım 2:** WhatsApp Business Cloud > Send message (ekibe bildirim)

Bir estetik kliniği bu akışı kurduktan sonra Instagram'dan gelen lead'lerin %85'ine 5 dakika içinde dönüş yapmaya başladı. Bu konuyu daha derin işlediğimiz [Instagram DM otomasyonu](/instagram-dm-otomasyonu) sayfamıza bakabilirsiniz.

### Akış 2: Gmail → Notion Bilgi Tabanı

Müşteri destek ekibinize gelen tüm soruların otomatik olarak Notion'daki bir veritabanına işlenmesi; haftalık SSS analizi için kullanılır.

- **Trigger:** Gmail > Watch emails (belirli etiket)
- **Adım 1:** Email içeriğini OpenAI ile özetle (1 satır başlık + 3 satır içerik)
- **Adım 2:** Notion > Create database item
- **Adım 3:** Eğer "aciliyet" tespit edilirse Slack'e #destek-acil kanalına push

Bu akış ayda 800-1000 email işleyen bir hukuk bürosunda manuel kayıt yükünü %90 azalttı.

### Akış 3: Stripe Ödeme → Google Sheets + Slack Kutlama

Online ödeme aldığınızda satış ekibinizin moralini yüksek tutmak için Slack'e "yeni satış" bildirimi atan keyifli bir akış.

- **Trigger:** Stripe > Watch events (charge.succeeded)
- **Adım 1:** Google Sheets > Add row (tarih, ürün, tutar, müşteri)
- **Adım 2:** Slack > Create message ("Yeni satış: 2.450 TL")
- **Adım 3:** Eğer tutar >5000 TL ise yöneticiye SMS

### Akış 4: WhatsApp → Pipedrive

WhatsApp'tan gelen yeni müşteri mesajlarının otomatik olarak Pipedrive'da "deal" oluşturması.

- **Trigger:** WhatsApp Cloud API > New message
- **Adım 1:** Pipedrive'da numara daha önce kayıtlı mı kontrol et
- **Adım 2:** Yeni ise contact + deal oluştur, eski ise mevcut deal'a not düş
- **Adım 3:** Sahibine atama yap (round-robin)

### Akış 5: Calendly → Slack + Otomatik Hatırlatma

Calendly'den alınan her randevunun ekibe Slack'ten bildirilmesi ve randevudan 1 saat önce müşteriye WhatsApp hatırlatma mesajı.

- **Trigger:** Calendly > New event
- **Adım 1:** Slack > #randevular kanalına post
- **Adım 2:** Sleep modülü ile randevudan 1 saat önce uyan
- **Adım 3:** WhatsApp ile müşteriye hatırlatma

Bu 5 akış bir araya getirildiğinde tipik bir KOBİ'nin müşteri operasyonu büyük ölçüde otomatikleşmiş olur. [CRM otomasyonu](/crm-otomasyonu) sayfamızda bu yapıların entegre nasıl çalıştığını anlatıyoruz.

## Make.com Fiyatlandırması ve Türk Pazarında Pratik Kullanım

Make.com'un en sevilen yanlarından biri **şeffaf ve esnek** fiyatlandırmasıdır. Operasyon bazlı çalışır, akış sayısına göre değil. Güncel paketler (2026):

| Plan | Aylık Fiyat | Operasyon | Aktif Senaryo |
|---|---|---|---|
| Free | 0$ | 1.000 | 2 |
| Core | 9$ | 10.000 | Sınırsız |
| Pro | 16$ | 10.000 + öncelik | Sınırsız |
| Teams | 29$ | 10.000 + takım | Sınırsız |
| Enterprise | Özel | 1M+ | Sınırsız |

Aynı 10.000 task için Zapier'in 50$ Professional planına ihtiyacınız olur; aradaki fiyat farkı yıllık 500$+ olur. Türk pazarındaki en büyük zorluk **ödeme yöntemidir**. Make.com sadece USD kabul eder, kredi kartınızda yurt dışı kullanım açık olmalıdır. Yıllık ödemede %16 indirim alırsınız.

### Yerli Uygulamalarla Make.com Entegrasyonu

Make.com'un hazır 1500+ entegrasyonu var ama Türk uygulamaları (Logo, Mikro, NetGSM, Paraşüt, Iyzico) doğrudan listede yok. Bu durumda kurtarıcı **HTTP modülü** ve **Webhook** olur:

- **NetGSM SMS:** HTTP > Make a request modülü ile NetGSM'in REST API'sine POST atarsınız.
- **Iyzico ödeme bildirimi:** Iyzico panelinden webhook URL'sini Make'a verirsiniz.
- **Paraşüt fatura:** Paraşüt'ün resmi API'si var; HTTP modülü ile fatura kesilebilir.
- **Logo Tiger / Mikro:** Aralarına bir middleware (basit bir Node.js servisi) koyup Make'a webhook gönderirsiniz.

Yerel entegrasyonları doğru kurmak için [Zapier alternatifi](/zapier-alternatifi) yazımızda detaylı karşılaştırmaları bulabilirsiniz.

## Yaygın Make.com Hataları ve Çözümleri

Make.com kullanırken ilk aylarda karşılaşacağınız klasik problemler ve çözüm önerileri:

### Operasyon Tüketimi Patlaması

Bir akış beklenmedik şekilde 10.000 operasyonu tüketip planınızı doldurabilir. Çözüm: her senaryoda **Max number of consecutive cycles** değerini sınırlayın, "scheduling" intervalini ihtiyacınıza göre seçin (15 dk yerine 1 saat yeterliyse 1 saat seçin).

### Webhook Veri Eksik Geliyor

Custom webhook'ta gelen veriler bazen tam tanınmaz. Çözüm: bir kez "Run once" ile test edip Make.com'a yapıyı öğretin, sonra senaryoyu kaydedin.

### Senaryo Durdu, Bildirim Gelmedi

Make.com hata olduğunda senaryoyu otomatik durdurur. Bildirim almak için Settings > Email Notifications açın, kritik akışlar için ayrıca Slack kanalına error webhook bağlayın.

## PORTZEN ile Make.com Kurulumu: Sıfırdan Sisteme

Make.com KOBİ'ler için harika bir araç ama "doğru senaryoyu tasarlamak" ayrı bir uzmanlık alanı. PORTZEN olarak müşterilerimize Make.com hesabı kurulumundan başlayarak işletmenizin spesifik ihtiyaçlarına göre 5-15 akış tasarlıyor, Türk uygulamalarınızı (Paraşüt, NetGSM, Iyzico, Logo) bağlıyor ve ekibinize eğitim veriyoruz.

Bir spa zincirinden bir mimarlık ofisine kadar 30+ Make.com kurulumu yaptık. Tipik bir proje 5-7 iş gününde teslim ediliyor; ardından aylık bakım paketleriyle akışlarınızı izliyoruz, hata olduğunda 1 saat içinde müdahale ediyoruz.

**Ücretsiz keşif görüşmesi:** [portzenai.com/iletisim](https://portzenai.com/iletisim) — 15 dakikada işletmeniz için uygun yapıyı netleştiririz.
