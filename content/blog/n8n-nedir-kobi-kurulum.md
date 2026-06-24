---
title: "n8n Nedir? KOBİ'ler İçin Sıfırdan Kurulum Rehberi"
slug: "n8n-nedir-kobi-kurulum"
category: "otomasyon"
description: "n8n nedir, neden Zapier'e alternatif olarak tercih ediliyor ve KOBİ'ler için sıfırdan nasıl kurulur? 2026 için tam rehber, kurulum adımları ve örnek akışlar."
keywords: ["n8n nedir", "n8n kurulum", "n8n türkçe", "zapier alternatifi", "self hosted otomasyon", "kobi otomasyon", "n8n docker kurulum"]
publishedAt: "2026-06-21"
author: "Arda Kaya"
readingTime: "11 dakika"
relatedServices: ["otomasyon", "ai-bot"]
ogImage: "/blog/og/n8n-nedir-kobi-kurulum.png"
---

# n8n Nedir? KOBİ'ler İçin Sıfırdan Kurulum Rehberi

Türkiye'de KOBİ'lerin son iki yılda en çok araştırdığı otomasyon araçlarının başında **n8n** geliyor. Zapier'in aylık 30-50 dolarlık paketlerinden bunalan ajanslar, danışmanlar ve teknik kadrosu olan KOBİ'ler için n8n nedir sorusu artık günlük gündem. Çünkü n8n, hem ücretsiz açık kaynak olarak kendi sunucunuza kurulabiliyor, hem de Zapier'in yapabildiği her şeyi (çoğu zaman daha esnek şekilde) yapabiliyor. Bu rehberde n8n'in ne olduğunu, neden bu kadar popüler hale geldiğini, hangi durumlarda Zapier yerine n8n tercih etmeniz gerektiğini ve **kendi sunucunuza adım adım nasıl kuracağınızı** anlatacağız. Sonunda 3 hazır akış örneği ve Türk pazarına özel entegrasyon tavsiyeleri ile pratik bir yol haritası çıkarmış olacaksınız.

## n8n Nedir ve Neden Bu Kadar Popüler?

n8n (telaffuzu "n-eight-n", İngilizce "nodemation" kelimesinin kısaltılmışı) Berlin merkezli bir ekip tarafından geliştirilen, **iş akışı otomasyonu** için tasarlanmış açık kaynak bir platformdur. Görsel bir editörü vardır; sürükle-bırak şeklinde düğümleri (node) birbirine bağlarsınız ve bir tetikleyici (örneğin yeni bir form yanıtı geldiğinde) ile başlayan akış otomatik olarak çalışır.

n8n'in Zapier ve Make.com gibi rakiplerinden ayrıldığı en önemli özellik **self-hosted** olabilmesidir. Yani aracı kendi sunucunuza kurup tamamen ücretsiz çalıştırabilirsiniz. Veriler sizin sunucunuzdan çıkmaz, KVKK uyumu açısından büyük avantaj sağlar. Ayrıca akış sayısı, çalışma sayısı gibi limitler yoktur. Zapier'de 750 task için ayda 50 dolar öderken n8n'de 75.000 task'ı 10 dolarlık bir VPS'te çevirebilirsiniz.

### n8n'in Üç Büyük Avantajı

1. **Ücret avantajı:** Zapier'in 50 dolarlık paketi yerine 10 dolara VPS, sınırsız akış.
2. **Veri sahipliği:** Müşteri verileri kendi sunucunuzda kalır, üçüncü tarafa gitmez.
3. **Esneklik:** Custom JavaScript kodu yazabilir, kendi API'nizi ekleyebilir, karmaşık koşullar kurabilirsiniz.

Tabii ki bu avantajların bir bedeli var: n8n biraz daha **teknik bilgi** ister. Zapier'i 10 dakikada öğrenirsiniz, n8n'de ilk akışınızı kurmak yarım gün sürebilir. Bu nedenle pek çok KOBİ profesyonel [n8n kurulum hizmeti](/n8n-kurulum-hizmeti) almayı tercih ediyor; bir kez kurulan altyapıyı ardından kendileri yönetiyor.

## Kimler İçin n8n Doğru Seçimdir?

n8n her işletme için doğru cevap değildir. Bazı senaryolarda Zapier veya Make.com daha mantıklı kalır. Sahada gördüğümüz n8n'in en uygun olduğu profiller şunlardır:

- **Aylık 1000+ task çalıştıran KOBİ'ler:** Bu hacimden sonra Zapier maliyetleri patlar, n8n çok ucuz kalır.
- **Dijital ajanslar:** Birden çok müşteriye otomasyon kuruyorsanız her birine ayrı Zapier hesabı yerine tek n8n sunucusunda yönetebilirsiniz.
- **Veri hassasiyeti yüksek sektörler:** Hukuk büroları, klinikler, finans danışmanları için verilerin Türkiye'deki sunucuda kalması önemli.
- **Geliştirici kadrosu olan startup'lar:** Custom kod yazma esnekliğine ihtiyaç duyanlar.
- **E-ticaret işletmeleri:** Iyzico, Logo, Mikro gibi yerli sistemlere webhook ile bağlanmak gerekiyor.

### n8n Sizin İçin Uygun Değil Mi?

n8n'i tavsiye etmediğimiz durumlar da var. Eğer haftada 10-15 task çalıştıracak küçük bir kuyumcuysanız, kahve dükkanıysanız veya tek başınıza çalışan bir danışmansanız Zapier'in ücretsiz veya 20 dolarlık paketi sizin için daha mantıklı olabilir. Sunucu yönetmek istemiyorsanız, "her şey hazır olsun" diyorsanız Zapier veya Make daha az kafa karıştırır. Bu kararı verirken [Zapier vs Make vs n8n karşılaştırma](/blog/zapier-make-n8n-karsilastirma) yazımıza bakmanızı öneririz.

## n8n Kurulum Öncesi: VPS Seçimi

n8n'i çalıştırabileceğiniz birkaç yol var: kendi bilgisayarınızda (sadece test için), bir bulut sunucusunda (production için), ya da n8n'in resmi bulut hizmetinde. KOBİ'ler için en mantıklı yol **kendi VPS sunucunuza Docker ile kurmaktır**. VPS sağlayıcıları arasında en sık tercih edilenler:

| Sağlayıcı | Aylık Ücret (Minimum) | Avantaj |
|---|---|---|
| Hetzner Cloud | ~4€ (CX11) | Avrupa lokasyonu, hızlı, ucuz |
| DigitalOcean | ~6$ (Basic Droplet) | Türk geliştiriciler arasında popüler |
| Contabo | ~6€ | Daha güçlü donanım, daha yavaş network |
| AWS Lightsail | ~5$ | AWS ekosistemi |
| Yerli (TurkNet, Vargonen) | ~150 TL | Türkiye lokasyonu, KVKK uyumu |

Genel öneri: küçük-orta ölçekli bir n8n kurulumu için **Hetzner CX21 (2 vCPU, 4 GB RAM, 40 GB SSD, ~6€/ay)** fazlasıyla yeterlidir. Aylık 100.000+ task'a kadar rahat çıkar.

### Domain ve SSL Hazırlığı

Kurulum öncesi bir domain (örneğin `otomasyon.sirketiniz.com`) ayarlamanız gerekir. Cloudflare üzerinden DNS yönetimi yaparsanız hem ücretsiz CDN hem de DDoS koruması alırsınız. SSL sertifikası için Let's Encrypt kullanılır (ücretsiz, otomatik yenilenir).

## Adım Adım n8n Docker Kurulumu

Aşağıdaki adımlar Ubuntu 22.04 üzerine Docker Compose ile n8n kurulumudur. SSH ile sunucunuza bağlandıktan sonra:

### 1. Docker ve Docker Compose Kurulumu

```bash
sudo apt update && sudo apt upgrade -y
curl -fsSL https://get.docker.com | sudo bash
sudo apt install docker-compose-plugin -y
```

### 2. n8n Klasörü Oluşturma

```bash
mkdir ~/n8n && cd ~/n8n
nano docker-compose.yml
```

### 3. docker-compose.yml İçeriği

```yaml
services:
  n8n:
    image: n8nio/n8n:latest
    restart: always
    ports:
      - "5678:5678"
    environment:
      - N8N_HOST=otomasyon.sirketiniz.com
      - N8N_PROTOCOL=https
      - WEBHOOK_URL=https://otomasyon.sirketiniz.com/
      - GENERIC_TIMEZONE=Europe/Istanbul
    volumes:
      - ./data:/home/node/.n8n
```

### 4. Servisi Başlatma ve Reverse Proxy

```bash
sudo docker compose up -d
```

Caddy veya Nginx Proxy Manager kurarak 5678 portunu domain'inize bağlar, otomatik SSL alırsınız. Caddy tek satırla halleder:

```
otomasyon.sirketiniz.com {
  reverse_proxy localhost:5678
}
```

Yarım saat içinde `https://otomasyon.sirketiniz.com` adresinden n8n giriş ekranına ulaşabilirsiniz. İlk giriş ekranında admin hesabı oluşturduktan sonra sistem kullanıma hazırdır.

## İlk 3 Akış Örneği: Hemen Kurabileceğiniz Hazır Şablonlar

n8n'i kurmak bir şeydir, ondan verim almak başka bir şey. KOBİ'lerin ilk gün kurup faydasını gördüğü 3 klasik akış örneği şu şekilde:

### Akış 1: Web Sitesinden Lead → WhatsApp Bildirimi

Web sitenizdeki iletişim formuna gelen her lead'in hem ekibinize WhatsApp ile düşmesi hem de CRM'e yazılması.

- **Trigger:** Webhook (form gönderildiğinde)
- **Adım 1:** Form verisini parse et (isim, telefon, mesaj)
- **Adım 2:** Google Sheets'e satır ekle
- **Adım 3:** NetGSM veya Twilio üzerinden ekibe WhatsApp mesajı at
- **Adım 4:** Müşteriye otomatik "Teşekkürler, en kısa sürede döneceğiz" mesajı

Bu akış bir emlak ofisi için kurulduğunda ortalama cevap süresini 4 saatten 8 dakikaya indirdi, dönüşüm oranını %22 artırdı.

### Akış 2: Form → Email + Slack Bildirimi

Tipodform, JotForm veya kendi web formundan gelen başvuruların belirli alanlara göre filtrelenip ilgili ekip üyesine yönlendirilmesi.

- **Trigger:** Typeform new submission
- **Koşul:** Form alanına göre dallanma (örn. "bütçe > 50.000 TL" ise satış müdürüne, aksi halde junior'a)
- **Adım:** Gmail üzerinden personalize email + Slack DM

### Akış 3: Stripe / Iyzico Ödeme → Google Sheets + Fatura

Online ödeme alan bir KOBİ için ödeme geldiğinde otomatik fatura kesilmesi ve muhasebeye düşmesi.

- **Trigger:** Stripe payment_succeeded (Iyzico için webhook)
- **Adım 1:** Müşteri bilgilerini Sheets'e yaz
- **Adım 2:** e-Arşiv API'sine fatura kesim isteği gönder
- **Adım 3:** Müşteriye PDF fatura mail at
- **Adım 4:** Eğer ödeme >5000 TL ise satıcıya Telegram bildirimi

Bu tip akışları kendi sektörünüze uyarlamak için [CRM otomasyonu](/crm-otomasyonu) sayfamızdaki örneklere bakabilirsiniz. n8n ile gelen lead'leri Meta tarafına geri besleyen retargeting ve lookalike kampanyaları için [Meta reklam ajansı](/meta-reklam-ajansi) hizmetimiz, otomasyon zincirinin satış tarafını kapatıyor.

## Türk Uygulamalarıyla n8n Entegrasyonu

n8n'in 500'den fazla hazır entegrasyonu var ama Türk pazarına özel uygulamalar (Logo, Mikro, Paraşüt, Iyzico, NetGSM) için doğrudan node yok. Bu durumda **HTTP Request node** veya **Webhook** kullanarak entegre edersiniz. İşte en sık karşılaşılan Türk entegrasyonları:

| Uygulama | Entegrasyon Yöntemi | Zorluk |
|---|---|---|
| Iyzico | Webhook + HTTP Request | Orta |
| NetGSM (SMS/WhatsApp) | HTTP Request | Kolay |
| Logo Tiger | REST API (eğer açıksa) | Zor |
| Mikro Fly | Webhook + custom script | Zor |
| Paraşüt | Resmi API var | Kolay |
| e-Arşiv (GİB) | HTTP Request + XML | Orta |
| Iyzilink ödeme bağlantısı | API key | Kolay |

Logo ve Mikro gibi eski yazılımların entegrasyonu için genellikle aralarına bir **middleware** koyulur; n8n bu middleware ile konuşur. [Zapier alternatifi](/zapier-alternatifi) olarak n8n'in bu esnekliği özellikle Türk pazarında değerlidir; Zapier bu tür yerel sistemlere bağlanmaz.

### NetGSM Üzerinden WhatsApp Gönderimi

Türk işletmelerinin çoğu WhatsApp mesajlaşma için NetGSM kullanıyor. n8n'den NetGSM API'sine bir HTTP POST göndererek mesaj atabilirsiniz. Örnek body:

```json
{
  "usercode": "8503456789",
  "password": "xxxx",
  "gsmno": "905XXXXXXXXX",
  "message": "Randevunuz onaylandı."
}
```

## Bakım, Güncelleme ve Yedekleme

Self-hosted bir sistemin en sık ihmal edilen tarafı **bakımıdır**. n8n her ay yeni sürüm yayınlar; güncel kalmamak güvenlik açıklarına davetiye çıkarır. Önerilen bakım rutini:

- **Haftalık:** `docker compose pull && docker compose up -d` ile güncel sürüme geçiş
- **Günlük:** `~/n8n/data` klasörünü Restic veya rsync ile uzak sunucuya yedekleme
- **Aylık:** Çalışmayan akışları (error rate >%5) gözden geçirme
- **3 aylık:** Sunucu disk doluluk ve RAM kullanımı kontrolü

Çok kritik akışlarınız varsa (örneğin sipariş işleme) **monitoring** kurmanız şart. Uptime Kuma gibi bir araçla webhook URL'lerini düzenli pinglemek, bozulan akışları 1 dakika içinde fark etmenizi sağlar.

### Yaygın Hatalar ve Çözümleri

İlk 3 ay n8n kullanırken karşılaşacağınız klasik hatalar:

- **Workflow timeout:** Uzun süren akışlarda `EXECUTIONS_TIMEOUT` değerini artırın.
- **Memory shortage:** Node sayısı arttıkça RAM ihtiyacı büyür, 4 GB altına düşmeyin.
- **Webhook URL ulaşılmıyor:** Cloudflare proxy ayarınız webhook'ları engelliyor olabilir, "DNS only" moduna alın.
- **Disk dolması:** Execution log'ları büyür, `EXECUTIONS_DATA_PRUNE` ile otomatik temizleyin.

## PORTZEN ile n8n Kurulumu: Sıfırdan Sisteme

n8n'i kendi başınıza kurmak teknik olarak mümkün ama **iş akışı tasarımı**, **Türk uygulamalarına entegrasyon** ve **kesintisiz operasyon** kısımları sahada en çok zorlanılan noktalar. PORTZEN olarak müşterilerimize anahtar teslim n8n altyapısı kuruyoruz: Hetzner'da sunucu, Docker, SSL, ilk 5-10 akış, NetGSM/Iyzico/Logo entegrasyonları, monitoring ve eğitim dahil.

Bir eczanenin reçete takip akışından bir hukuk bürosunun lead skorlama sistemine kadar 50+ farklı sektörde n8n altyapısı kurduk. Ortalama proje teslim süresi 7-10 iş günü, sonrasında ekibinizin akışları yönetebilmesi için 2 saatlik eğitim veriyoruz. Aylık bakım paketleriyle sistem hep güncel ve sorunsuz kalıyor.

**Ücretsiz keşif görüşmesi:** [portzenai.com/iletisim](https://portzenai.com/iletisim) — 15 dakikada işletmeniz için uygun yapıyı netleştiririz.
