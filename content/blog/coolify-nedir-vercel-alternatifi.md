---
title: "Coolify Nedir? Vercel ve Geleneksel Hosting Alternatifi"
seoTitle: "Coolify Nedir? Vercel ve Klasik Hosting ile Karşılaştırma"
slug: "coolify-nedir-vercel-alternatifi"
category: "altyapi"
description: "Coolify, kendi sunucunuzda çalışan açık kaynak bir PaaS. Vercel ve klasik hosting ile farkları, güçlü ve zayıf yanları ve hangi durumda tercih edilmesi gerektiği."
keywords: ["coolify nedir", "vercel alternatifi", "self-hosted paas", "coolify kurulumu", "kendi sunucuda deployment"]
publishedAt: "2026-11-25"
updatedAt: "2026-11-25"
author: "Arda Kaya"
relatedServices: ["coolify-kurulumu"]
---

# Coolify Nedir? Vercel ve Geleneksel Hosting Alternatifi

Coolify, kendi sunucunuza kurduğunuz açık kaynak bir PaaS (Platform as a Service) yazılımıdır. Vercel, Netlify veya Heroku'da alıştığınız "kodu GitHub'a gönder, site yayına girsin" deneyimini, kontrolü sizde olan bir Linux sunucuda sunar. Uygulamalar Docker konteynerleri olarak çalışır; alan adı, SSL sertifikası, ortam değişkenleri ve veritabanları tek bir web panelinden yönetilir. Kısacası Coolify, yönetilen bir bulut platformunun kolaylığı ile kendi sunucunuzun esnekliği arasında bir ara yol sunar.

## Coolify Nasıl Çalışır?

Coolify'ı bir Ubuntu veya benzeri Linux sunucuya kurduğunuzda arka planda birkaç parça birlikte çalışır:

- **Docker:** Her uygulama, veritabanı veya servis ayrı bir konteynerde çalışır. Docker'ın temellerini [Docker Nedir? İşletmeler İçin Konteyner Altyapısı](/blog/docker-nedir-isletmeler-icin) yazımızda anlattık.
- **Reverse proxy:** Gelen trafiği doğru konteynere yönlendirmek için Traefik (varsayılan) ya da Caddy kullanılır. Let's Encrypt üzerinden SSL sertifikaları otomatik alınır ve yenilenir.
- **Build yöntemleri:** Coolify uygulamanızı birkaç yolla derleyebilir:
  - **Nixpacks:** Projedeki dosyalara bakıp (package.json, requirements.txt vb.) dili ve çalıştırma komutunu otomatik tespit eder.
  - **Dockerfile:** Kendi Dockerfile'ınızı yazarsanız onu kullanır.
  - **Docker Compose:** Birden fazla servisi (ör. uygulama + Redis + worker) tek dosyayla tanımlarsınız.
  - Hazır imaj: Bir registry'deki imajı doğrudan çalıştırabilirsiniz.
- **Git entegrasyonu:** GitHub App bağlantısıyla bir branch'e push geldiğinde otomatik deploy başlar. Pull request açıldığında ayrı bir URL'de **preview deployment** oluşturulabilir; bu sayede değişiklik canlıya çıkmadan önce test edilir.
- **Hazır servisler:** PostgreSQL, MySQL, Redis, MongoDB gibi veritabanları ve n8n, Uptime Kuma, Plausible gibi pek çok self-hosted uygulama tek tıkla kurulabilir.

Ayrıntılı bilgi ve güncel kurulum adımları için resmi dokümantasyona bakabilirsiniz: [coolify.io/docs](https://coolify.io/docs).

## Vercel ile Coolify Karşılaştırması

İki aracı "hangisi daha iyi" diye değil, "hangisi hangi işe daha uygun" diye değerlendirmek gerekir. Vercel, özellikle Next.js gibi frontend framework'leri için olgun, yönetilen bir platformdur. Coolify ise sunucuyu sizin yönettiğiniz bir araçtır.

| Kriter | Vercel | Coolify (self-hosted) |
|---|---|---|
| Altyapı yönetimi | Tamamen yönetilen; sunucu düşünmezsiniz | Sunucunun bakımı, güncellemesi ve güvenliği sizde |
| Kurulum süresi | Dakikalar | Sunucu hazırlığı + kurulum gerekir |
| Next.js desteği | Next.js'in geliştiricisi; yeni özelliklere en hızlı ve en derin destek | Next.js çalışır, ancak bazı platforma özel özellikler (edge, görüntü optimizasyonu ayrıntıları vb.) kendi yapılandırmanızı gerektirebilir |
| Küresel dağıtım (CDN/edge) | Yerleşik küresel edge ağı | Tek sunucu veya kendi kurduğunuz sunucular; CDN için ayrıca Cloudflare gibi bir katman eklenebilir |
| Ölçekleme | Otomatik, trafik dalgalanmalarını platform karşılar | Sunucu kapasitesi kadar; ölçekleme sizin planlamanızla olur |
| Backend, worker, veritabanı | Serverless fonksiyonlar ve entegre depolama ürünleri; uzun süre çalışan süreçler için sınırlı | Uzun süreli süreçler, cron, worker, veritabanı aynı sunucuda çalışabilir |
| Maliyet modeli | Kullanım ve plan bazlı; trafik ve fonksiyon kullanımı arttıkça değişir | Yazılım ücretsiz; sunucu maliyeti sabit ve öngörülebilir |
| Veri konumu | Platformun bölgeleri | Sunucunuz nerede ise orada (ör. Türkiye'deki bir sunucu) |
| Bağımlılık | Platforma özel özellikler taşınmayı zorlaştırabilir | Docker tabanlı; başka sunucuya taşınması görece kolay |
| Preview deploy | Var, çok olgun | Var (GitHub App ile) |

Kısaca: Küresel trafik alan, Next.js'in en yeni özelliklerini yoğun kullanan ve altyapıyla hiç uğraşmak istemeyen bir ekip için Vercel güçlü bir seçimdir. Birden fazla uygulamayı, veritabanını ve arka plan işini tek bir yerde, öngörülebilir bir sunucu maliyetiyle çalıştırmak isteyen ve sunucu yönetimini üstlenebilecek (veya devredebilecek) bir ekip için Coolify mantıklıdır.

## Geleneksel Hosting ile Farkı

Paylaşımlı hosting ve cPanel/Plesk tabanlı paneller uzun yıllar PHP siteleri için standart oldu. Coolify'ın farkı şurada:

- **Teknoloji bağımsızlığı:** Paylaşımlı hostingde genellikle PHP ve MySQL ile sınırlısınız. Coolify'da Node.js, Python, Go, PHP veya Dockerfile ile tanımlanabilen her şey çalışır.
- **Git tabanlı akış:** FTP ile dosya yüklemek yerine her değişiklik Git üzerinden, kayıtlı ve geri alınabilir biçimde yayına çıkar.
- **İzolasyon:** Her uygulama kendi konteynerinde çalışır; bir uygulamanın bağımlılığı diğerini bozmaz.
- **Sorumluluk:** Paylaşımlı hostingde sunucu güvenliği sağlayıcıdadır. Coolify'da sunucu sizindir; işletim sistemi güncellemeleri, güvenlik duvarı, yedekleme ve izleme sizin (veya hizmet aldığınız ekibin) sorumluluğundadır.

## Coolify Kimler İçin Uygun?

Gerçekçi birkaç senaryo:

1. **Birden fazla küçük projesi olan ajans veya işletme:** Kurumsal site, bir yönetim paneli, n8n otomasyonları ve bir Telegram botu aynı sunucuda, tek panelden yönetilir.
2. **Arka plan işi olan uygulamalar:** Kuyruk işleyen worker'lar, zamanlanmış görevler, uzun süren API çağrıları serverless sınırlarına takılmadan çalışır.
3. **Verinin belirli bir sunucuda kalması gereken durumlar:** Müşteri verisini kendi kontrolünüzdeki bir sunucuda tutmak isteyen şirketler.
4. **Staging ortamı ihtiyacı:** Canlı ortamın bir kopyasını ek bir platform aboneliği olmadan ayağa kaldırmak.

Uygun olmayabileceği durumlar da var: Dünya genelinde düşük gecikme gereken yüksek trafikli bir vitrin sitesi, sunucu yönetimine hiç kaynak ayıramayan bir ekip veya ani ve büyük trafik sıçramaları bekleyen bir kampanya sayfası için yönetilen bir platform daha az risklidir.

## Dikkat Edilmesi Gerekenler

- **Kaynak planlaması:** Build işlemleri CPU ve RAM tüketir. Küçük bir sunucuda aynı anda birden fazla build çalışırsa canlıdaki uygulamalar yavaşlayabilir. Coolify'da eşzamanlı build sayısını sınırlamak veya build'i ayrı bir sunucuda yapmak bu sorunu azaltır. Kendi altyapımızda da ağır işleri, kaynak ve sıcaklık durumuna göre sırayla çalıştıran bir kuyruk yaklaşımı kullanıyoruz.
- **Yedekleme:** Coolify veritabanları için zamanlanmış yedekleri (S3 uyumlu depolamaya) destekler; ancak bunu kurmak ve geri yüklemeyi test etmek gerekir.
- **Güncellemeler:** Coolify aktif geliştirilen bir proje; sürüm notlarını okumadan üretim sunucusunda güncelleme yapmamak iyi bir alışkanlıktır.
- **Erişim güvenliği:** Yönetim panelini doğrudan internete açmak yerine Tailscale gibi bir VPN veya Cloudflare Tunnel arkasına almak saldırı yüzeyini küçültür.

Otomatik deploy akışının arka planını [GitHub ile Otomatik Deployment Sistemi Nasıl Çalışır?](/blog/github-otomatik-deployment-nasil-calisir) yazısında ayrıca ele aldık.

## Coolify Kurulumu İçin Destek

Coolify'ı kendi sunucunuzda kurmak, alan adı ve SSL'i bağlamak, GitHub'dan otomatik deploy, yedekleme ve izleme ayarlarını yapmak için [Docker ve Coolify Kurulumu](/hizmetler/coolify-kurulumu) hizmetimizi inceleyebilirsiniz. Kapsamı birlikte belirleyip teklif hazırlıyoruz; [Detayları Konuşalım](/iletisim) ya da WhatsApp üzerinden +90 531 863 91 17 numarasına yazabilirsiniz.

## Sıkça Sorulan Sorular

### Coolify ücretsiz mi?

Coolify açık kaynaktır ve kendi sunucunuza ücretsiz kurulabilir. Sizin ödediğiniz maliyet sunucu, alan adı ve varsa harici yedekleme depolamasıdır. Projenin ayrıca kendi sunucularında barındırılan ücretli bir bulut sürümü de bulunur.

### Coolify Vercel'in yerini tamamen tutar mı?

Her durumda değil. Uygulamanızı çalıştırır ve push'ta otomatik deploy, preview deploy gibi benzer bir akış sunar; ancak Vercel'in küresel edge ağı, otomatik ölçekleme ve Next.js'e özel derin optimizasyonlarını birebir sağlamaz. İhtiyaca göre değerlendirmek gerekir.

### Coolify'ı kurmak için nasıl bir sunucu gerekir?

Resmi dokümantasyonda belirtilen minimum gereksinimler küçük bir VPS ile karşılanabilir; ancak gerçek ihtiyaç çalıştıracağınız uygulama sayısına ve build yüküne bağlıdır. Birkaç uygulama ve veritabanı için daha fazla RAM ve disk planlamak gerekir.

### Coolify ile WordPress çalıştırılabilir mi?

Evet. WordPress hazır servis olarak veya Docker Compose ile veritabanıyla birlikte kurulabilir. Yedekleme ve eklenti güncellemeleri yine düzenli takip edilmelidir.

### Coolify'dan başka bir platforma geçmek zor mu?

Uygulamalar Docker tabanlı çalıştığı için Dockerfile veya Compose dosyanız başka bir sunucuya ya da platforma görece kolay taşınır. Veritabanı taşıma ve DNS geçişi ise ayrıca planlanmalıdır.
