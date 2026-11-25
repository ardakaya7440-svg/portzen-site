---
title: "n8n Kendi Sunucunuzda mı, Bulutta mı Çalışmalı?"
seoTitle: "n8n Self-Hosted mı, n8n Cloud mu? Karar Rehberi"
slug: "n8n-kendi-sunucunda-mi-bulutta-mi"
category: "altyapi"
description: "n8n Cloud ile self-hosted n8n arasındaki farklar: lisans, queue mode, Postgres, yedekleme, güncelleme ve webhook güvenliği açısından hangisi size uygun?"
keywords: ["n8n self-hosted", "n8n cloud", "n8n queue mode", "n8n sustainable use license", "n8n sunucu kurulumu"]
publishedAt: "2026-11-25"
updatedAt: "2026-11-25"
author: "Arda Kaya"
relatedServices: ["n8n-otomasyon-altyapisi"]
---

# n8n Kendi Sunucunuzda mı, Bulutta mı Çalışmalı?

Kısa cevap: Sunucu yönetecek kimseniz yoksa, iş akışı sayınız makulse ve verilerinizin n8n'in bulut altyapısında işlenmesinde sakınca görmüyorsanız **n8n Cloud** ile başlamak mantıklıdır. Verinin nerede işlendiğini kontrol etmeniz gerekiyorsa, iç ağdaki sistemlere erişmeniz gerekiyorsa veya yüksek hacimli işleri kendi kaynaklarınızla ölçeklemek istiyorsanız **self-hosted** n8n daha uygundur. Ancak self-hosted'ın bedeli bakım sorumluluğudur: yedek, güncelleme ve güvenlik artık sizin işinizdir.

## İki Seçeneğin Temel Farkı

| Konu | n8n Cloud | Self-hosted n8n |
|---|---|---|
| Kurulum | Hesap açıp başlarsınız | Sunucu, Docker, veritabanı, alan adı, TLS gerekir |
| Bakım ve güncelleme | n8n yapar | Sizin sorumluluğunuzda |
| Veri yerelliği | n8n'in seçtiği altyapıda | Sizin seçtiğiniz sunucuda |
| İç ağ erişimi | Dışarıya açık servislerle sınırlı | İç ağdaki veritabanı ve servislere doğrudan erişim |
| Ölçekleme | Plan limitlerine bağlı | Donanım ve mimariyle (queue mode) siz belirlersiniz |
| Topluluk düğümleri ve özel kod | Plana göre kısıtlı olabilir | Daha esnek |
| Maliyet yapısı | Abonelik | Sunucu + bakım emeği |

Güncel plan içerikleri ve limitler değişebildiği için karar vermeden önce [n8n dokümantasyonunu](https://docs.n8n.io) ve fiyat sayfasını kontrol etmenizi öneririz.

## Lisans: Self-Hosted n8n Ne Kadar "Ücretsiz"?

n8n açık kaynak değil, **fair-code** bir modelle dağıtılır. Self-hosted sürüm **Sustainable Use License** ile lisanslanır. n8n'in kendi dokümantasyonuna göre bu lisans, n8n'i kendi iç iş süreçleriniz için kullanmanıza izin verir; sınırlama, değeri tamamen veya büyük ölçüde n8n işlevselliğinden gelen bir ürünü ya da hizmeti satmaya ilişkindir. Örneğin müşterilerinizin kendi hesaplarını bağlayıp iş akışı kurduğu bir "n8n barındırma" hizmeti sunmak lisans kapsamında sorun yaratabilir.

Bunun yanında SSO, gelişmiş yetkilendirme ve log akışı gibi bazı kurumsal özellikler ayrı bir Enterprise lisans anahtarı gerektirir. Kullanım senaryonuz sınırda kalıyorsa n8n'in lisans SSS sayfasını okumak ve gerekirse doğrudan n8n'e sormak en doğru yoldur. Bu not hukuki danışmanlık değildir.

## Self-Hosted n8n'i Üretime Hazır Yapan Bileşenler

Tek bir `docker run` komutuyla n8n'i çalıştırmak mümkündür ama bu kurulum test içindir. Üretimde şu başlıklar ele alınmalıdır. Ayrıntılar için [n8n hosting dokümantasyonu](https://docs.n8n.io/hosting/) iyi bir başlangıç noktasıdır.

### Veritabanı: SQLite yerine PostgreSQL

n8n varsayılan olarak SQLite kullanır. Az sayıda iş akışı için yeterlidir, ancak eşzamanlı yük arttığında ve özellikle queue mode'a geçildiğinde **PostgreSQL** gerekir. Postgres, yedekleme ve geri yükleme açısından da daha öngörülebilirdir.

### Queue mode ve Redis

Varsayılan modda tek bir n8n süreci hem arayüzü, hem webhook'ları, hem de çalıştırmaları üstlenir. Ağır bir iş akışı bu süreci yavaşlatırsa diğer her şey etkilenir. **Queue mode**'da:

- Ana süreç tetikleyicileri ve webhook'ları alır, işleri **Redis** üzerindeki kuyruğa koyar.
- Bir veya daha fazla **worker** süreci kuyruktan iş çekip çalıştırır.
- Gerekirse webhook'lar için ayrı süreçler çalıştırılabilir.

Bu yapı yükü dağıtır ve worker sayısını artırarak ölçeklemeyi mümkün kılar. Her şirketin buna ihtiyacı yoktur; günde birkaç yüz çalıştırma yapan bir kurulum tek süreçle rahatça çalışabilir.

### Bellek limitleri

n8n, bir çalıştırma boyunca işlenen veriyi bellekte tutar. Büyük dosyalar, binlerce satırlık tablolar veya döngüler bellek tüketimini hızla artırır ve süreç "out of memory" ile düşebilir. Pratik önlemler:

- Konteynere açık bir bellek limiti vermek, sunucunun tamamını kilitlemesini önlemek
- Büyük veriyi parçalara bölmek (batch), ikili verileri bellek yerine dosya sisteminde tutmak
- Çalıştırma geçmişinin otomatik budanmasını (pruning) açmak; aksi halde veritabanı büyür

### Yedekleme

Yedeklenmesi gerekenler: Postgres veritabanı (iş akışları, kimlik bilgileri, çalıştırma geçmişi) ve **şifreleme anahtarı** (`N8N_ENCRYPTION_KEY`). Kayıtlı kimlik bilgileri bu anahtarla şifrelenir; anahtarı kaybederseniz yedekten dönseniz bile kimlik bilgilerini çözemezsiniz. Yedekler sunucunun dışında saklanmalı ve geri yükleme düzenli olarak denenmelidir.

### Güncelleme

n8n sık sürüm yayımlar. Güncelleme öncesinde sürüm notlarını okumak, yedek almak ve mümkünse önce bir test ortamında denemek gerekir. Sürüm etiketini sabitlemek (`latest` yerine belirli bir sürüm) beklenmedik güncellemeleri önler.

### Webhook güvenliği

Webhook URL'leri internete açıktır. Alınması gereken önlemler:

- Webhook düğümlerinde kimlik doğrulama (header, basic auth) veya imza doğrulama kullanmak
- Editör arayüzünü herkese açık bırakmamak; VPN, Cloudflare Access veya Tailscale gibi bir katmanın arkasına almak
- TLS'i zorunlu tutmak, ters vekil (reverse proxy) üzerinden yayınlamak
- Kullanıcı hesaplarında güçlü parola ve mümkünse iki aşamalı doğrulama

Kendi altyapımızda da kullandığımız yaklaşım, n8n'i Docker ve Coolify ile çalıştırıp dış dünyaya Cloudflare Tunnel üzerinden açmak ve yönetim erişimini Tailscale ile sınırlamaktır.

## Hangi Durumda Hangisi?

**n8n Cloud mantıklıdır, eğer:**

- Ekipte sunucu yönetecek kimse yoksa
- İş akışları çoğunlukla bulut servisleri arasında veri taşıyorsa (form → CRM → e-posta gibi)
- Hızlı başlamak, bakım yükü almamak öncelikliyse

**Self-hosted mantıklıdır, eğer:**

- Kişisel veri işleniyor ve verinin nerede tutulduğunu kontrol etmek istiyorsanız (KVKK değerlendirmesini hukuk danışmanınızla yapmanız gerekir)
- İç ağdaki ERP, veritabanı veya dosya sunucularına erişmeniz gerekiyorsa
- Yüksek hacimli veya uzun süren iş akışlarınız varsa
- Yerel bir yapay zekâ modeliyle aynı sunucuda çalışmak istiyorsanız (bkz. [Self-hosted yapay zekâ sistemleri nedir?](/blog/self-hosted-yapay-zeka-nedir))

Ara yol da vardır: Cloud ile başlayıp ihtiyaç netleştiğinde iş akışlarını dışa aktarıp self-hosted'a taşımak. İş akışları JSON olarak taşınabilir; kimlik bilgilerinin yeniden tanımlanması gerekir.

## Kurulum mu, İşletme mi?

Sitemizde iki ayrı hizmet bulunuyor: iş akışlarınızın tasarlanması ve kurulması için [n8n kurulum hizmeti](/n8n-kurulum-hizmeti), n8n'in çalıştığı sunucunun kurulması ve işletilmesi (queue mode, Postgres, yedek, güncelleme, güvenlik) için [n8n Otomasyon Altyapısı](/hizmetler/n8n-otomasyon-altyapisi). n8n'in genel olarak ne olduğunu merak ediyorsanız [n8n nedir](/blog/n8n-nedir-kobi-kurulum) yazımıza bakabilirsiniz.

## n8n Altyapınızı Birlikte Değerlendirelim

Mevcut kullanımınıza bakıp Cloud'da kalmanın mı, kendi sunucunuza geçmenin mi daha mantıklı olduğunu birlikte değerlendirebiliriz. Self-hosted'a karar verirseniz kurulumu, yedekleme ve güncelleme düzenini kapsama göre teklif ederek üstlenebiliriz. [Detayları Konuşalım](/hizmetler/n8n-otomasyon-altyapisi) veya [iletişim](/iletisim) sayfasından yazın.

## Sıkça Sorulan Sorular

### Self-hosted n8n'i şirket içinde ücretsiz kullanabilir miyim?

n8n'in dokümantasyonuna göre Sustainable Use License iç iş amaçlı kullanıma izin verir. n8n'i başkalarına hizmet olarak sunmak gibi durumlar kısıtlanır ve bazı kurumsal özellikler ayrı lisans gerektirir. Sınırda bir senaryonuz varsa lisans metnini ve SSS'yi inceleyin.

### Queue mode'a ne zaman geçmeliyim?

Ağır iş akışları arayüzü ve webhook yanıtlarını yavaşlatmaya başladığında, ya da paralel çalıştırma ihtiyacı arttığında. Düşük hacimde tek süreç yeterlidir ve daha basittir.

### SQLite ile üretimde çalışmak sorun olur mu?

Küçük kurulumlarda çalışır, ancak queue mode için PostgreSQL gerekir ve büyüyen kurulumlarda Postgres yedekleme ile eşzamanlılık açısından daha güvenilirdir.

### Şifreleme anahtarını kaybedersem ne olur?

Kayıtlı kimlik bilgileri çözülemez; tüm bağlantıları yeniden tanımlamanız gerekir. Anahtar, veritabanı yedeğinden ayrı ve güvenli bir yerde saklanmalıdır.

### n8n Cloud'dan self-hosted'a geçiş zor mu?

İş akışları dışa aktarılıp içe alınabilir. Asıl iş; kimlik bilgilerini yeniden girmek, webhook URL'lerini güncellemek ve yeni sunucunun yedek ve güvenlik düzenini kurmaktır.
