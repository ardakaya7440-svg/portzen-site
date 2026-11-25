---
title: ".onion Uzantılı Web Sitesi Nedir? Nasıl Kurulur?"
seoTitle: ".onion Web Sitesi Nedir, Adım Adım Nasıl Kurulur?"
slug: "onion-web-sitesi-nedir-nasil-kurulur"
category: "altyapi"
description: ".onion uzantılı web sitesi nedir, normal siteden farkı ne, nasıl kurulur? torrc ayarları, v3 adres, güvenlik kontrolleri ve yayına alma adımlarını anlatıyoruz."
keywords: [".onion web sitesi nedir", "onion site nasıl kurulur", "tor web sitesi kurma", "onion adresi oluşturma", "torrc hiddenservicedir"]
publishedAt: "2026-11-25"
updatedAt: "2026-11-25"
author: "Arda Kaya"
relatedServices: ["onion-web-sitesi"]
---

# .onion Uzantılı Web Sitesi Nedir? Nasıl Kurulur?

.onion uzantılı web sitesi, yalnızca Tor ağı üzerinden erişilebilen ve adresi DNS yerine kriptografik bir anahtardan türetilen bir sitedir. Kurmak için bir web sunucusu (ör. Nginx), Tor yazılımı ve `torrc` dosyasına eklenen iki satır yeterlidir; asıl iş, sitenin kimlik ve sunucu bilgisi sızdırmayacak şekilde yapılandırılmasıdır. Bu yazıda kavramı ve kurulumun pratik adımlarını anlatıyoruz.

## .onion sitesini normal siteden ayıran ne?

Normal bir sitede alan adı satın alırsınız, DNS kaydı sunucunuzun IP adresini gösterir ve ziyaretçi doğrudan o IP'ye bağlanır. .onion sitede bunların hiçbiri yoktur:

| Özellik | Normal site | .onion site |
|---|---|---|
| Adres kaynağı | Kayıt kuruluşundan alınan alan adı | Sitenin açık anahtarından türetilen 56 karakterlik ad |
| Sunucu IP'si | DNS ile herkese açık | Ziyaretçiye gösterilmez |
| Erişim | Her tarayıcı | Tor Browser veya Tor destekli istemci |
| Şifreleme | TLS sertifikasına bağlı | Tor bağlantısı uçtan uca şifreli |
| Port açma | Genelde 80/443 açık | Sunucuda dışarıya port açmak gerekmez |

Güncel adresler "v3" biçimindedir: 56 karakter + `.onion`, ed25519 anahtarına dayanır. Eski 16 karakterlik v2 adresleri Tor Projesi tarafından kullanımdan kaldırıldı ve artık çalışmıyor. Protokolün ayrıntısını [Tor Onion Service nedir ve nasıl çalışır?](/blog/tor-onion-service-nedir) yazımızda ayrıca ele aldık.

## Kimler .onion site kurar?

Yasal ve yaygın kullanım örnekleri:

- **Haber kuruluşları:** BBC, Deutsche Welle, The New York Times ve ProPublica, sansürlü ağlardaki okurlara ulaşmak için sitelerinin resmi onion aynalarını işletiyor.
- **Platformlar:** Facebook (Meta), Tor kullanıcılarının hesaplarına güvenli erişimi için uzun süredir bir onion adresi sunuyor.
- **Kaynak koruma:** Gazeteciler ve kurumlar, ihbar ve belge iletimi için onion tabanlı bildirim sistemleri kullanıyor.
- **Mahremiyete önem veren kurumlar:** Ziyaretçisinin konumunu ve IP'sini görmek istemeyen dernekler, araştırma grupları, açık kaynak projeleri.

## Adım adım kurulum

Aşağıdaki adımlar Debian/Ubuntu tabanlı bir sunucu içindir. Resmi kurulum rehberi [community.torproject.org/onion-services](https://community.torproject.org/onion-services/) adresindedir.

### 1. Web sunucusunu yalnızca localhost'ta dinletin

Sitenizin yalnızca Tor üzerinden erişilebilmesi için web sunucusunu `127.0.0.1`'e bağlayın. Nginx örneği:

```nginx
server {
    listen 127.0.0.1:8080;
    server_name _;
    root /var/www/onion;
    server_tokens off;
}
```

Bu, sunucunun gerçek IP'si üzerinden siteye ulaşılmasını ve iki adresin birbiriyle ilişkilendirilmesini zorlaştırır.

### 2. Tor'u resmi depodan kurun

Dağıtımın kendi paketi eski kalabilir; Tor Projesi'nin Debian/Ubuntu deposunu eklemek önerilir. Kurulumdan sonra `tor` servisi arka planda çalışır.

### 3. torrc dosyasına onion servisini tanımlayın

`/etc/tor/torrc` içine:

```
HiddenServiceDir /var/lib/tor/sitem/
HiddenServicePort 80 127.0.0.1:8080
```

`HiddenServiceDir`, anahtarların tutulacağı dizindir; `HiddenServicePort`, onion adresine gelen 80 numaralı port isteklerinin yerel 8080'e yönleneceğini söyler. Servisi yeniden başlatın: `sudo systemctl restart tor`.

### 4. Adresinizi alın ve anahtarı yedekleyin

`/var/lib/tor/sitem/hostname` dosyasında 56 karakterlik adresiniz yazar. Aynı dizindeki `hs_ed25519_secret_key` dosyası sitenin kimliğidir: kaybederseniz adresi kaybedersiniz, sızarsa başkası sizin adınıza yayın yapabilir. Şifreli ve çevrimdışı bir yedek alın.

### 5. (İsteğe bağlı) Akılda kalıcı adres

`mkp224o` gibi araçlarla belirli bir önekle başlayan "vanity" adres üretilebilir. Önek uzadıkça gereken hesaplama süresi katlanarak artar; 5–7 karakterlik önekler pratikte makuldür. Bu aracı yalnızca güvendiğiniz bir makinede çalıştırın, çünkü ürettiği şey gizli anahtardır.

## Yayına almadan önce güvenlik kontrolleri

Kurulumun kolay kısmı bitti; .onion sitelerin çoğu protokol yüzünden değil, yapılandırma hataları yüzünden sızıntı yaşar:

- **Sunucu durum sayfaları:** Apache `mod_status` veya Nginx `stub_status` açıksa, localhost'tan gelen Tor istekleri "yerel" sayılır ve iç bilgiler görünebilir. Kapatın.
- **Hata sayfaları ve başlıklar:** Varsayılan 404/500 sayfaları ve `Server` başlığı yazılım sürümünü verir. Özel hata sayfaları kullanın.
- **Saat dilimi ve dil:** Tarih başlıkları ve uygulama logları sunucunun saat dilimini ele verebilir; UTC kullanın.
- **Dış kaynaklar:** Google Fonts, CDN, analitik betikleri ziyaretçiyi Tor dışına yönlendirmez ama üçüncü tarafa istek yaptırır; tüm varlıkları yerel sunun.
- **JavaScript'siz çalışma:** Pek çok Tor Browser kullanıcısı "Safest" güvenlik seviyesinde JavaScript'i kapatır. Sitenin temel işlevleri JS olmadan çalışmalı.
- **Aynı sunucuda başka siteler:** Aynı makinede normal bir site barındırıyorsanız, ikisi arasındaki ilişki ortaya çıkabilir. Gerekirse ayrı sunucu kullanın.

## Mevcut sitenize onion aynası eklemek

Zaten bir web siteniz varsa ayrı bir site kurmak yerine onu Tor üzerinden de sunabilirsiniz. Normal sitenize `Onion-Location` HTTP başlığı eklediğinizde, Tor Browser kullanıcılarına ".onion sürümü mevcut" bildirimi gösterilir. BBC ve Deutsche Welle gibi yayıncıların kullandığı yaklaşım budur. Hosting tarafındaki farkları [.onion hosting nedir?](/blog/onion-hosting-nedir) yazısında karşılaştırdık.

## Hukuki çerçeve hakkında kısa not

.onion site kurmak tek başına bir suç değildir; belirleyici olan yayımlanan içerik ve yürütülen faaliyettir. Türkiye'deki mevzuat açısından ayrıntılı değerlendirme için [Dark web sitesi kurmak yasal mı?](/blog/dark-web-sitesi-kurmak-yasal-mi) yazımıza bakabilirsiniz. Bu yazı hukuki danışmanlık değildir.

## Profesyonel kurulum ne zaman mantıklı?

Kişisel bir deneme için yukarıdaki adımlar yeterlidir. Kurumsal bir yayın, kaynak koruma sistemi veya mevcut sitenin onion aynası söz konusuysa; anahtar yönetimi, sızıntı denetimi, izleme ve güncelleme süreçleri önem kazanır. PORTZEN olarak bu işleri [.onion Web Sitesi Geliştirme](/hizmetler/onion-web-sitesi) hizmeti kapsamında üstleniyoruz. Yasa dışı içerik, pazar yeri veya benzeri projeleri kabul etmiyoruz.

## Projenizi birlikte değerlendirelim

Kurumunuz için bir onion aynası ya da yalnızca Tor üzerinden erişilen bir yayın planlıyorsanız, kapsamı birlikte netleştirebiliriz. [Detayları Konuşalım](/hizmetler/onion-web-sitesi) sayfasından ya da WhatsApp (+90 531 863 91 17) üzerinden bize ulaşabilirsiniz; teklif kapsama göre hazırlanır.

## Sıkça Sorulan Sorular

### .onion sitesine normal tarayıcıdan girilebilir mi?

Hayır. .onion adresleri DNS'te bulunmaz; Tor Browser veya Tor ağına bağlanan bir istemci gerekir. Bazı üçüncü taraf "gateway" hizmetleri bulunsa da bunlar Tor'un sağladığı korumayı ortadan kaldırır.

### .onion site için alan adı satın almak gerekir mi?

Gerekmez. Adres, Tor'un ürettiği anahtar çiftinden türetilir ve ücretsizdir. Bir kayıt kuruluşu ya da yenileme süresi yoktur.

### Onion adresimi değiştirebilir miyim?

Adres anahtara bağlı olduğu için yeni anahtar yeni adres demektir. Eski adresi korumak istiyorsanız gizli anahtarı yedeklemeniz gerekir.

### .onion site için HTTPS sertifikası şart mı?

Tor bağlantısı zaten uçtan uca şifrelidir, bu nedenle zorunlu değildir. Bazı kurumlar kimlik doğrulama amacıyla onion adresleri için sertifika alır, ancak çoğu site için gerekli değildir.

### .onion site kurmak sunucumu tamamen anonim yapar mı?

Hayır. Tor, sunucu IP'sinin protokol düzeyinde gizlenmesine yardımcı olur; ancak yapılandırma hataları, uygulama açıkları veya içerikteki bilgiler kimliği ortaya çıkarabilir. Mutlak anonimlik garanti edilemez.
