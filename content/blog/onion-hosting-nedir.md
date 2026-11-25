---
title: ".onion Hosting Nedir? Geleneksel Hosting ile Farkları Nelerdir?"
seoTitle: ".onion Hosting Nedir? Geleneksel Hosting ile Karşılaştırma"
slug: "onion-hosting-nedir"
category: "altyapi"
description: ".onion hosting nedir, paylaşımlı hostingden farkı ne? Sunucu seçimi, OnionBalance, anahtar yönetimi, izleme ve yedekleme açısından iki modeli karşılaştırıyoruz."
keywords: [".onion hosting nedir", "onion hosting farkları", "tor sunucu barındırma", "onionbalance", "onion site sunucu seçimi"]
publishedAt: "2026-11-25"
updatedAt: "2026-11-25"
author: "Arda Kaya"
relatedServices: ["tor-onion-service-kurulumu"]
---

# .onion Hosting Nedir? Geleneksel Hosting ile Farkları Nelerdir?

.onion hosting, bir web sitesini Tor onion servisi olarak yayınlamak için gereken sunucu, Tor yapılandırması ve işletme süreçlerinin tamamıdır. Geleneksel hostingden temel farkı, sitenin bir IP adresi ve DNS kaydıyla değil, sunucuda saklanan bir kriptografik anahtarla tanımlanmasıdır. Bu da sunucu seçiminden yedeklemeye, izlemeden ölçeklemeye kadar pek çok kararı değiştirir.

Protokolün nasıl çalıştığını [Tor Onion Service nedir?](/blog/tor-onion-service-nedir) yazısında, temel kurulum adımlarını ise [.onion web sitesi nasıl kurulur?](/blog/onion-web-sitesi-nedir-nasil-kurulur) yazısında anlattık. Burada barındırma ve işletme tarafına odaklanıyoruz.

## Karşılaştırma tablosu

| Konu | Geleneksel hosting | .onion hosting |
|---|---|---|
| Kimlik | Alan adı + DNS + IP | Sunucudaki ed25519 gizli anahtar |
| Erişim | Açık portlar (80/443) | Port açmaya gerek yok, Tor'a giden bağlantı yeterli |
| TLS | Sertifika gerekir | Tor bağlantısı zaten uçtan uca şifreli |
| Paylaşımlı ortam | Yaygın ve ucuz | Uygun değil; root erişimi ve izolasyon gerekir |
| CDN / önbellek | Cloudflare vb. ile kolay | Klasik CDN kullanılamaz |
| Ölçekleme | Yük dengeleyici, DNS | OnionBalance |
| Analitik | Üçüncü taraf betikler | Önerilmez; sunucu tarafı, kişisel veri toplamayan çözüm |
| Kesintide etki | Sunucu IP'si değişse de DNS güncellenir | Anahtar kaybı = adres kaybı |

## Neden paylaşımlı hosting uygun değil?

Paylaşımlı hosting panelleri Tor daemon'u çalıştırmanıza, `torrc` dosyasını düzenlemenize ve web sunucusunu yalnızca localhost'a bağlamanıza genellikle izin vermez. Daha önemlisi, aynı makinede yüzlerce site bulunduğu için yapılandırma sızıntılarını kontrol edemezsiniz. .onion hosting için en az bir VPS ya da fiziksel sunucu, root erişimi ve servis izolasyonu (ör. Docker konteynerleri) gerekir. Sunucu seçenekleri hakkında [VPS ve VDS Yönetimi](/hizmetler/vps-vds-yonetimi) sayfamızda da bilgi bulabilirsiniz.

## Sunucu seçerken nelere bakılmalı?

- **Sağlayıcının kullanım koşulları:** Bazı sağlayıcılar Tor rölesi veya exit node çalıştırmayı yasaklar; onion servisi ise genellikle sorun değildir, ama koşulları okuyun. Onion servisi exit node değildir, sunucunuz başkalarının trafiğini internete çıkarmaz.
- **Kaynak:** Tor daemon'u hafiftir; asıl yük uygulamanızdan gelir. Statik bir site için küçük bir sunucu yeterlidir.
- **Erişim:** Kendi yönetim erişiminizi de (SSH) mümkünse IP kısıtlaması, anahtar tabanlı giriş veya ayrı bir client-authorized onion servisi üzerinden sınırlayın.
- **Ayrık ortam:** Onion sitesi ile normal sitenizi aynı sunucuda barındırmak kolaydır, ancak iki yayının ilişkisinin gizli kalması gerekiyorsa ayrı sunucular kullanın. Kurumsal bir ayna söz konusuysa bu ilişki zaten herkese açıktır, sorun değildir.

## İşletme tarafındaki farklar

### Anahtar yönetimi ve yedekleme

Geleneksel hostingde sunucu çökse bile alan adınız sizindir; yeni sunucuya taşıyıp DNS'i güncellersiniz. Onion hostingde kimliğiniz `hs_ed25519_secret_key` dosyasıdır. Bu dosyanın şifreli, çevrimdışı ve en az iki ayrı konumda yedeği olmalı; erişimi sınırlı tutulmalıdır. Anahtar sızarsa tek çözüm yeni adrese geçmek ve bunu ziyaretçilerinize duyurmaktır.

### Yüksek erişilebilirlik: OnionBalance

Tek bir sunucu çöktüğünde onion adresi erişilemez olur. OnionBalance, birden fazla arka uç sunucunun kendi introduction point'lerini tek bir "ana" onion adresinin descriptor'ında birleştirir. Böylece ziyaretçiler tek adresi kullanırken trafik birden fazla sunucuya dağılır ve biri çöktüğünde diğerleri hizmet vermeye devam eder.

### İzleme

Uptime izleme araçlarının çoğu .onion adreslerine ulaşamaz. Çözüm, izleme aracını Tor üzerinden (SOCKS proxy ile) çalıştırmak veya iç servisleri doğrudan izlemektir. Kendi altyapımızda da kullandığımız yaklaşımla, Uptime Kuma ve Netdata gibi self-hosted araçlarla izleme verisini üçüncü taraf bir servise göndermeden tutmayı tercih ediyoruz.

### Güncellemeler

Tor sürümleri belirli aralıklarla eskir ve eski sürümler ağdan dışlanabilir. Tor'u Tor Projesi'nin resmi paket deposundan kurmak ve otomatik güvenlik güncellemelerini açmak, bakım yükünü azaltır. Güncel bilgi: [support.torproject.org](https://support.torproject.org/).

### Loglar ve sızıntılar

Onion sitede web sunucusu loglarındaki tüm istekler `127.0.0.1`'den geliyormuş gibi görünür; IP loglamak zaten anlamsızdır. Buna karşın uygulama logları, hata sayfaları, `Server` başlığı, Apache `mod_status` gibi durum sayfaları ve sunucunun saat dilimini ele veren tarih bilgileri denetlenmelidir. Saat dilimi olarak UTC kullanmak iyi bir varsayılandır.

## Hangi model ne zaman?

| Senaryo | Önerilen yaklaşım |
|---|---|
| Mevcut kurumsal sitenin aynası | Mevcut sunucuya Tor + `Onion-Location` başlığı |
| Bağımsız, düşük trafikli yayın | Tek VPS, statik site, düzenli anahtar yedeği |
| Yüksek trafikli veya kritik servis | OnionBalance ile birden fazla arka uç |
| İç yönetim paneli | Client authorization ile kısıtlı onion servisi |

Resmi kurulum ve işletme rehberleri için [community.torproject.org/onion-services](https://community.torproject.org/onion-services/) adresine bakabilirsiniz.

## Hukuki ve etik sınırlar

Barındırma modeli, içerik sorumluluğunu değiştirmez. Türkiye'deki çerçeveyi [Dark web sitesi kurmak yasal mı?](/blog/dark-web-sitesi-kurmak-yasal-mi) yazısında ele aldık. PORTZEN olarak yasa dışı içerik, pazar yeri veya benzeri projeler için barındırma ve kurulum hizmeti vermiyoruz. Ayrıca hiçbir yapılandırma mutlak anonimlik garantisi sunmaz.

## Altyapınızı birlikte planlayalım

Mevcut sitenize onion aynası eklemek, OnionBalance ile yedekli bir yapı kurmak ya da iç servislerinizi client authorization ile korumak istiyorsanız, [Detayları Konuşalım](/hizmetler/tor-onion-service-kurulumu) sayfasından veya WhatsApp (+90 531 863 91 17) üzerinden bize ulaşabilirsiniz. Teklif kapsama göre hazırlanır.

## Sıkça Sorulan Sorular

### .onion hosting için özel bir hosting firması gerekir mi?

Gerekmez. Root erişimi olan herhangi bir VPS veya fiziksel sunucu yeterlidir. Önemli olan sağlayıcının kullanım koşulları ve sizin yapılandırma kontrolünüzdür.

### Onion siteyi Cloudflare arkasına koyabilir miyim?

Hayır, klasik CDN'ler onion adreslerine hizmet vermez. Normal sitenizi Cloudflare arkasında tutup, aynı içeriği ayrıca onion servisi olarak sunabilirsiniz.

### Sunucumu taşırsam onion adresim değişir mi?

Gizli anahtarı yeni sunucuya güvenli şekilde taşırsanız adres aynı kalır. Anahtar taşınmazsa yeni bir adres oluşur.

### Onion hosting normal hostingden daha mı pahalı?

Sunucu maliyeti benzerdir; fark, kurulum, sızıntı denetimi ve işletme süreçlerinin gerektirdiği emektedir. Maliyet projenin kapsamına göre değişir.

### Aynı sunucuda birden fazla onion sitesi barındırılabilir mi?

Evet, her biri için ayrı `HiddenServiceDir` tanımlanarak yapılabilir. Ancak siteler arasında ilişki kurulmaması gerekiyorsa ayrı sunucular daha güvenlidir.
