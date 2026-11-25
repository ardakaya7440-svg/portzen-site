---
title: "Docker Nedir? İşletmeler İçin Konteyner Altyapısı"
seoTitle: "Docker Nedir? İşletmeler İçin Konteyner Rehberi"
slug: "docker-nedir-isletmeler-icin"
category: "altyapi"
description: "Docker nedir, imaj, konteyner, volume ve network ne işe yarar? Docker Compose, kaynak limitleri ve docker system prune riskleriyle işletmeler için pratik rehber."
keywords: ["docker nedir", "docker konteyner", "docker compose", "docker volume", "işletmeler için docker"]
publishedAt: "2026-11-25"
updatedAt: "2026-11-25"
author: "Arda Kaya"
relatedServices: ["coolify-kurulumu"]
---

# Docker Nedir? İşletmeler İçin Konteyner Altyapısı

Docker, bir uygulamayı ihtiyaç duyduğu her şeyle (kod, çalışma ortamı, kütüphaneler, ayarlar) birlikte paketleyip her sunucuda aynı şekilde çalıştırmayı sağlayan bir konteyner platformudur. "Benim bilgisayarımda çalışıyordu" sorununu büyük ölçüde ortadan kaldırır ve aynı sunucuda birbirinden izole birçok uygulamayı düzenli biçimde çalıştırmanıza imkân verir. İşletmeler için anlamı: daha öngörülebilir kurulumlar, daha kolay taşıma ve daha az sürpriz.

## Temel Kavramlar

### İmaj (Image)

İmaj, uygulamanın salt okunur bir şablonudur. Örneğin "Node.js 22 + uygulama kodu + bağımlılıklar" bir imaj olarak paketlenir. İmajlar katmanlı yapıdadır ve genellikle bir `Dockerfile` ile tarif edilir. Hazır imajlar Docker Hub gibi registry'lerden çekilebilir.

### Konteyner (Container)

Konteyner, bir imajın çalışan örneğidir. Aynı imajdan birden fazla konteyner başlatabilirsiniz. Konteyner sanal makine değildir: kendi işletim sistemi çekirdeğini taşımaz, sunucunun çekirdeğini paylaşır. Bu yüzden saniyeler içinde başlar ve sanal makineye göre çok daha az kaynak tüketir.

Önemli nokta: Konteyner silindiğinde içine yazılan veriler de gider. Kalıcı veri için volume gerekir.

### Volume

Volume, konteynerin dışında, Docker tarafından yönetilen kalıcı depolama alanıdır. Veritabanı dosyaları, yüklenen görseller, uygulama ayarları gibi kaybolmaması gereken veriler volume'larda tutulur. Konteyneri silip yeni sürümle yeniden oluşturduğunuzda volume yerinde kalır. Yedekleme stratejiniz de bu volume'ları kapsamalıdır.

### Network

Docker, konteynerlerin birbirleriyle konuşması için sanal ağlar oluşturur. Örneğin uygulama konteyneri veritabanına `db` adıyla erişir; veritabanı portunu internete hiç açmanız gerekmez. Ağları ayırmak, bir servisin yalnızca ihtiyaç duyduğu servislere erişmesini sağlar.

## Docker Compose: Birden Fazla Servisi Birlikte Yönetmek

Gerçek bir uygulama genellikle tek konteynerden oluşmaz: web uygulaması, veritabanı, önbellek (Redis), arka plan işçisi... Docker Compose, bunları tek bir `compose.yaml` dosyasında tanımlamanızı sağlar:

```yaml
services:
  app:
    image: ornek/uygulama:1.4.0
    env_file: .env
    depends_on:
      - db
    deploy:
      resources:
        limits:
          cpus: "1.0"
          memory: 512M
  db:
    image: postgres:16
    volumes:
      - db-data:/var/lib/postgresql/data
volumes:
  db-data:
```

`docker compose up -d` komutuyla tüm yapı ayağa kalkar. Bu dosya Git'te tutulduğunda altyapınız da sürüm kontrollü hale gelir. Ayrıntılar için resmi dokümantasyon: [docs.docker.com/compose](https://docs.docker.com/compose/).

## Kaynak Limitleri Neden Önemli?

Varsayılan olarak bir konteyner sunucunun tüm CPU ve RAM'ini kullanabilir. Bellek sızıntısı olan tek bir uygulama, aynı sunucudaki diğer her şeyi yavaşlatabilir veya işletim sisteminin bellek yetersizliği nedeniyle süreç sonlandırmasına (OOM killer) yol açabilir.

Bu yüzden:

- Her servise mantıklı bir **bellek limiti** ve gerekirse **CPU limiti** verin (Compose'ta `deploy.resources.limits` veya `docker run --memory --cpus`).
- Veritabanı gibi kritik servislere daha cömert, deneysel servislere daha sıkı limit tanıyın.
- `restart: unless-stopped` gibi bir yeniden başlatma politikası tanımlayın.
- Kaynak kullanımını izleyin. `docker stats` anlık görüntü verir; sürekli izleme için Netdata gibi araçlar kullanılabilir. Kendi sunucumuzda da Netdata ve Uptime Kuma ile kaynakları ve servislerin ayakta olup olmadığını takip ediyoruz.

## `docker system prune` ve Disk Temizliğinin Riskleri

Docker kullanan sunucularda disk zamanla eski imajlar, durmuş konteynerler ve build önbelleğiyle dolar. Temizlik için sık önerilen komut `docker system prune`'dur. Faydalıdır ama ne yaptığını bilmeden çalıştırmak risklidir:

| Komut | Ne siler? | Risk |
|---|---|---|
| `docker system prune` | Durmuş konteynerler, kullanılmayan ağlar, etiketsiz (dangling) imajlar, build önbelleği | Geçici olarak durdurulmuş bir konteyneri de siler |
| `docker system prune -a` | Yukarıdakiler + çalışan bir konteyner tarafından kullanılmayan **tüm** imajlar | Geri dönüş (rollback) için tuttuğunuz eski sürüm imajları gider; sonraki başlatmada imajların yeniden indirilmesi gerekir |
| `docker system prune --volumes` | Yukarıdakiler + kullanılmayan volume'lar | **En tehlikelisi.** O an bağlı olmayan bir veritabanı volume'u kalıcı olarak silinebilir |
| `docker volume prune` | Kullanılmayan volume'lar | Aynı veri kaybı riski |

Güvenli bir yaklaşım:

1. Önce `docker system df` ile neyin yer kapladığını görün.
2. Hedefli temizlik yapın: `docker image prune` veya `docker builder prune` gibi.
3. `--volumes` bayrağını yedeğinizi doğrulamadan asla kullanmayın.
4. Otomatik temizlik betikleri yazıyorsanız `--filter "until=168h"` gibi filtrelerle yalnızca eski nesneleri hedefleyin.

## İşletmeler İçin Docker Ne Kazandırır?

- **Tekrarlanabilir kurulum:** Yeni bir sunucuya geçerken aynı Compose dosyasıyla aynı ortamı kurarsınız.
- **İzolasyon:** Farklı PHP veya Node.js sürümü isteyen uygulamalar aynı sunucuda çakışmadan çalışır.
- **Kolay geri dönüş:** Sürüm etiketli imajlar kullanırsanız sorunlu bir güncellemeden sonra önceki imaja dönmek dakikalar alır.
- **Self-hosted yazılım:** n8n, Uptime Kuma, Metabase gibi birçok açık kaynak araç resmi Docker imajlarıyla gelir.

Dezavantajları da var: Ek bir soyutlama katmanı öğrenmek gerekir, log ve ağ sorunlarında hata ayıklama başlangıçta daha zor gelebilir ve yanlış yapılandırılmış port yayınlamaları güvenlik açığı yaratabilir. Docker, yayınlanan portlar için güvenlik duvarı kurallarını kendisi düzenlediğinden UFW gibi araçlarla beklenmedik etkileşimler olabileceğini de bilmek gerekir.

## Docker'ı Panelden Yönetmek

Docker'ı komut satırından yönetmek her ekip için pratik değildir. [Coolify Nedir? Vercel ve Geleneksel Hosting Alternatifi](/blog/coolify-nedir-vercel-alternatifi) yazısında anlattığımız Coolify gibi araçlar, konteynerleri, alan adlarını ve deploy süreçlerini web panelinden yönetmeyi sağlar. Uygulamalarınızın GitHub'dan otomatik güncellenmesi için de [GitHub ile Otomatik Deployment Sistemi Nasıl Çalışır?](/blog/github-otomatik-deployment-nasil-calisir) yazısına göz atabilirsiniz.

## Docker Altyapınızı Birlikte Kuralım

Mevcut uygulamalarınızı konteynerlere taşımak, Compose yapısını, kaynak limitlerini, yedeklemeyi ve izlemeyi doğru kurmak için [Docker ve Coolify Kurulumu](/hizmetler/coolify-kurulumu) hizmetimize göz atın. İhtiyacınızı dinleyip kapsama göre teklif hazırlıyoruz; [Detayları Konuşalım](/iletisim).

## Sıkça Sorulan Sorular

### Docker ile sanal makine arasındaki fark nedir?

Sanal makine kendi işletim sistemi çekirdeğiyle tam bir bilgisayarı taklit eder. Docker konteyneri ise sunucunun çekirdeğini paylaşır ve yalnızca uygulamanın ihtiyaç duyduğu dosyaları taşır. Bu yüzden daha hafif ve hızlıdır, ancak izolasyon seviyesi sanal makine kadar güçlü değildir.

### Docker ücretli mi?

Linux sunucularda kullanılan Docker Engine açık kaynaktır. Docker Desktop ise belirli büyüklükteki şirketlerin ticari kullanımında ücretli abonelik gerektirebilir; güncel koşullar için Docker'ın lisans sayfasını kontrol edin.

### Veritabanını Docker'da çalıştırmak güvenli mi?

Volume ile kalıcı depolama ve düzenli, test edilmiş yedekleme kullanıldığı sürece küçük ve orta ölçekli projeler için yaygın bir yöntemdir. Asıl risk, volume'ların yanlışlıkla silinmesi ve yedeğin geri yüklenmesinin hiç denenmemiş olmasıdır.

### Docker sunucunun diskini neden dolduruyor?

Her build yeni imaj katmanları üretir, eski imajlar ve build önbelleği birikir, konteyner logları da sınırlanmazsa büyür. Hedefli temizlik ve log boyutu sınırı (`max-size`) ayarlamak bu sorunu çözer.

### Hangi uygulamalar Docker'a uygun değildir?

Donanıma çok doğrudan erişmesi gereken bazı yazılımlar veya tek bir masaüstü bilgisayarda çalışan basit araçlar için Docker gereksiz karmaşıklık katabilir. Sunucu tarafındaki web uygulamalarının büyük çoğunluğu ise konteynere uygundur.
