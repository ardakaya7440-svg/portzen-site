---
title: "GitHub ile Otomatik Deployment Sistemi Nasıl Çalışır?"
seoTitle: "GitHub ile Otomatik Deployment Nasıl Çalışır?"
slug: "github-otomatik-deployment-nasil-calisir"
category: "altyapi"
description: "GitHub'a push sonrası kodun sunucuya otomatik çıkması nasıl çalışır? Webhook, GitHub App, Actions, self-hosted runner, deploy key, staging ve rollback rehberi."
keywords: ["github otomatik deployment", "github actions deploy", "ci/cd nedir", "self-hosted runner", "staging production ortamı"]
publishedAt: "2026-11-25"
updatedAt: "2026-11-25"
author: "Arda Kaya"
relatedServices: ["ci-cd-otomatik-deployment"]
---

# GitHub ile Otomatik Deployment Sistemi Nasıl Çalışır?

GitHub ile otomatik deployment, bir branch'e kod gönderildiğinde (push) veya bir pull request birleştirildiğinde, uygulamanın otomatik olarak test edilip derlenmesi ve sunucuya yayınlanmasıdır. Temelde üç parça vardır: GitHub'ın bir olayı haber vermesi (webhook veya GitHub App), bu olaya tepki olarak build ve test çalıştıran bir sistem (GitHub Actions, Coolify veya benzeri) ve yeni sürümü sunucuya güvenli şekilde çıkaran bir adım. Doğru kurulduğunda elle FTP veya SSH ile dosya taşımaya gerek kalmaz ve her yayın kayıt altındadır.

## Akışın Genel Resmi

Tipik bir akış şöyle işler:

1. Geliştirici `main` veya `staging` branch'ine push eder ya da bir pull request'i birleştirir.
2. GitHub bu olayı tetikleyici olarak kullanır.
3. Testler ve build çalışır; bir Docker imajı veya derlenmiş dosyalar üretilir.
4. Sunucu yeni sürümü alır, eski sürümü durdurmadan yenisini başlatır ve sağlık kontrolü yapar.
5. Sonuç (başarılı/başarısız) GitHub'a ve isteğe bağlı olarak bir sohbet kanalına bildirilir.

Tetikleme ve çalıştırma kısmı için birkaç farklı yöntem var.

## Tetikleme Yöntemleri

### Webhook

Webhook, GitHub'ın bir olay olduğunda belirlediğiniz bir URL'ye HTTP POST isteği göndermesidir. Sunucunuzdaki bir servis bu isteği alır, imzasını (secret ile oluşturulan `X-Hub-Signature-256` başlığı) doğrular ve deploy'u başlatır. İmza doğrulaması yapılmayan bir webhook uç noktası, isteyen herkesin deploy tetiklemesine kapı açar.

### GitHub App

GitHub App, depolara ince ayarlı izinlerle bağlanan bir uygulamadır. Kişisel erişim anahtarı (token) yerine kısa ömürlü kurulum anahtarları kullanır ve yalnızca seçtiğiniz depolara erişir. Coolify gibi platformlar GitHub App üzerinden hem özel depoları okur hem de push ve pull request olaylarını dinler; preview deploy de bu sayede çalışır. Ayrıntılar için [Coolify Nedir? Vercel ve Geleneksel Hosting Alternatifi](/blog/coolify-nedir-vercel-alternatifi) yazısına bakabilirsiniz.

### GitHub Actions

GitHub Actions, deponuzdaki `.github/workflows/` klasöründe YAML dosyalarıyla tanımlanan iş akışlarıdır. Testleri çalıştırmak, imaj oluşturup bir registry'ye göndermek ve ardından sunucuya deploy komutu vermek için yaygın olarak kullanılır:

```yaml
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    environment: production
    steps:
      - uses: actions/checkout@v4
      - run: npm ci && npm test
      - run: ./scripts/deploy.sh
        env:
          DEPLOY_TOKEN: ${{ secrets.DEPLOY_TOKEN }}
```

Gizli bilgiler (API anahtarları, SSH anahtarları) koda değil, depo veya ortam **secrets** alanına konur. `environment` tanımıyla production ortamına çıkmadan önce onay şartı da eklenebilir. Resmi dokümantasyon: [docs.github.com/actions](https://docs.github.com/en/actions).

### Self-Hosted Runner

GitHub'ın sağladığı runner'lar GitHub'ın sunucularında çalışır. Self-hosted runner ise iş akışlarını sizin sunucunuzda çalıştıran bir ajandır. Avantajı, iç ağdaki kaynaklara erişebilmesi ve build'in kendi donanımınızda yapılmasıdır. Dikkat edilmesi gerekenler:

- Herkese açık (public) depolarda self-hosted runner kullanmak risklidir; dışarıdan gelen bir pull request sunucunuzda kod çalıştırabilir. GitHub da bunu önermez.
- Runner'ı ayrı, yetkisi kısıtlı bir kullanıcıyla ve mümkünse izole bir ortamda çalıştırın.
- Runner'ın bakımı ve güncellemesi sizin sorumluluğunuzdadır.

## Sunucuya Erişim: Deploy Key ve Yetkiler

Sunucunun özel bir depodan kod çekmesi gerekiyorsa **deploy key** kullanılır: yalnızca tek bir depoya bağlı bir SSH anahtarıdır ve varsayılan olarak salt okunurdur. Kişisel hesabınızın SSH anahtarını sunucuya koymak, o sunucu ele geçirildiğinde tüm depolarınızı riske atar.

Genel kurallar:

- En az yetki: Deploy işlemi için kullanılan anahtar veya token yalnızca gerekeni yapabilmeli.
- Anahtarları düzenli yenileyin ve kullanılmayanları silin.
- Sunucudaki SSH erişimini parola yerine anahtarla, mümkünse yalnızca VPN (ör. Tailscale) üzerinden açın.

## Branch Stratejisi: Staging ve Production

Her push'un doğrudan canlıya çıkması küçük projelerde kabul edilebilir, ancak müşterinin kullandığı sistemlerde ara bir aşama gerekir:

| Branch | Ortam | Ne zaman deploy olur? | Amaç |
|---|---|---|---|
| Özellik branch'leri | Preview | Pull request açıldığında | Değişikliği ayrı bir URL'de görmek |
| `staging` | Staging | Push sonrası otomatik | Canlıya benzer ortamda son test |
| `main` | Production | Birleştirme sonrası, gerekirse onaylı | Kullanıcıların gördüğü sürüm |

Staging ortamı, production ile aynı yapılandırmayı ama ayrı veritabanını ve ayrı gizli bilgileri kullanmalıdır. Branch koruma kurallarıyla `main`'e doğrudan push engellenip pull request ve başarılı test şartı konabilir.

## Rollback: Geri Dönüş Planı

Otomatik deployment'ın en az konuşulan ama en önemli kısmı, işler ters gittiğinde ne olacağıdır:

- **Sürüm etiketli imajlar:** Her deploy'da imajı commit SHA'sı veya sürüm numarasıyla etiketleyin. `latest` etiketine güvenmek, önceki sürüme dönmeyi zorlaştırır.
- **Eski imajları hemen silmeyin:** Agresif disk temizliği geri dönülecek sürümü yok edebilir. Bu konudaki riskleri [Docker Nedir? İşletmeler İçin Konteyner Altyapısı](/blog/docker-nedir-isletmeler-icin) yazısında anlattık.
- **Sağlık kontrolü:** Yeni konteyner sağlık kontrolünü geçmeden trafiği ona yönlendirmeyin; geçemezse eski sürüm çalışmaya devam etsin.
- **Veritabanı migrasyonları:** Kod geri alınabilir ama silinen bir sütun geri gelmez. Migrasyonları geriye uyumlu tasarlayın ve öncesinde yedek alın.
- **Git ile geri alma:** `git revert` ile sorunlu commit'i geri alan yeni bir commit oluşturup aynı otomatik akıştan yayına çıkmak, izlenebilir bir yoldur.

## Kaynak Sınırlı Tek Sunucuda Build Yönetimi

Birçok küçük işletme ve ajans, uygulamalarını tek bir sunucuda çalıştırır. Bu durumda build ve canlı uygulamalar aynı CPU ve RAM'i paylaşır. Aynı anda üç deponun build'i başlarsa sunucu darboğaza girer, canlı site yavaşlar, hatta bellek yetersizliği nedeniyle süreçler sonlandırılabilir.

Çözüm yolları:

- **Build'leri kuyruğa almak:** Eşzamanlı build sayısını bir veya ikiyle sınırlamak. Coolify'da bu bir ayar olarak bulunur; GitHub Actions'ta `concurrency` anahtarı aynı gruba ait iş akışlarının üst üste binmesini engeller.
- **Build'i başka yerde yapmak:** İmajı GitHub'ın runner'larında oluşturup registry'ye göndermek, sunucunun yalnızca hazır imajı çekip çalıştırmasını sağlamak.
- **Kaynak limitleri:** Build konteynerlerine ve uygulamalara bellek limiti koymak.
- **Zamanlama:** Ağır işleri yoğun olmayan saatlere bırakmak.

Kendi altyapımızda da ağır işleri, sunucunun kaynak ve sıcaklık durumunu gözeten bir görev kuyruğuyla sırayla çalıştırıyoruz; tek sunuculu yapılarda bu yaklaşım ciddi fark yaratıyor.

## Bildirim ve İzleme

Deploy sonucunun bir yerde görünmesi gerekir. GitHub'daki iş akışı geçmişi temel kayıttır; buna ek olarak başarısız deploy'ları bir Telegram grubuna bildirmek ekibin hızlı tepki vermesini sağlar. Bu tür iç ekip uyarılarını [Telegram Botları ile İşletme Otomasyonu Nasıl Yapılır?](/blog/telegram-bot-ile-isletme-otomasyonu) yazısında örnekledik.

## Otomatik Deployment Kurulumu

Depolarınız için staging/production ayrımı, GitHub Actions veya Coolify tabanlı otomatik deploy, rollback planı ve bildirimleri kurmak isterseniz [GitHub CI/CD ve Otomatik Deployment](/hizmetler/ci-cd-otomatik-deployment) hizmetimizi inceleyin. Mevcut yapınızı değerlendirip kapsama göre teklif sunuyoruz; [Detayları Konuşalım](/iletisim).

## Sıkça Sorulan Sorular

### CI/CD ile otomatik deployment aynı şey mi?

CI (Continuous Integration) kodun sürekli birleştirilip test edilmesidir; CD ise test edilen kodun otomatik olarak teslim edilmesi veya yayınlanmasıdır. Otomatik deployment, CD'nin yayına çıkış kısmıdır.

### GitHub Actions mı, Coolify mi kullanmalıyım?

Coolify, push'ta deploy ve preview deploy'u panelden kolayca sağlar. Karmaşık test adımları, birden fazla ortam veya onay mekanizması gerekiyorsa GitHub Actions daha esnektir. İkisi birlikte de kullanılabilir: testler Actions'ta, deploy Coolify'da.

### Webhook URL'im ele geçirilirse ne olur?

İmza doğrulaması yapıyorsanız, secret'ı bilmeyen biri geçerli istek oluşturamaz. Yine de secret'ı düzenli yenilemek ve uç noktayı yalnızca deploy tetikleyecek şekilde sınırlamak iyi bir uygulamadır.

### Otomatik deploy canlı siteyi kesintiye uğratır mı?

Yeni sürüm sağlık kontrolünü geçtikten sonra trafiği ona yönlendiren bir yapıda kesinti genellikle fark edilmez. Tek konteynerin durdurulup yeniden başlatıldığı basit kurulumlarda ise kısa bir kesinti yaşanabilir.

### Sorunlu bir sürümden ne kadar hızlı geri dönülebilir?

Sürüm etiketli imajlar saklanıyorsa önceki imaja dönmek genellikle dakikalar sürer. Veritabanı şemasında geri uyumsuz bir değişiklik yapıldıysa süreç daha uzun olur; bu yüzden migrasyon öncesi yedek önemlidir.
