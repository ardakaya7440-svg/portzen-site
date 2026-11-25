---
title: "Yapay Zekâ Ajanları İçin Özel Sunucu Altyapısı"
seoTitle: "Yapay Zekâ Ajanları İçin Sunucu Altyapısı Mimarisi"
slug: "yapay-zeka-ajanlari-icin-sunucu-altyapisi"
category: "altyapi"
description: "Yapay zekâ ajanları üretimde nasıl çalıştırılır? Süreç yönetimi, kuyruk, araç erişimi izolasyonu, gizli anahtarlar ve gözlemlenebilirlik için mimari rehber."
keywords: ["yapay zeka ajanı hosting", "ai agent sunucu", "ajan altyapısı", "llm ajan izolasyonu", "yapay zeka gözlemlenebilirlik"]
publishedAt: "2026-11-25"
updatedAt: "2026-11-25"
author: "Arda Kaya"
relatedServices: ["yapay-zeka-ajani-hosting"]
---

# Yapay Zekâ Ajanları İçin Özel Sunucu Altyapısı

Bir yapay zekâ ajanını üretimde çalıştırmak, bir sohbet botunu yayına almaktan farklıdır: ajan uzun süren görevler yürütür, araç çağırır (API, veritabanı, dosya sistemi, tarayıcı) ve hata yapabilir. Bu yüzden ihtiyaç duyduğu altyapı; süreçleri yöneten, işleri kuyruğa alan, ajanın erişebildiği araçları izole eden ve her adımı kayıt altına alan bir mimaridir. Bu yazı modelin kendisini değil, **ajanın etrafındaki altyapıyı** anlatıyor. Model ve çıkarım sunucusu gibi kavramlar için [Self-hosted yapay zekâ sistemleri nedir?](/blog/self-hosted-yapay-zeka-nedir) yazısına bakabilirsiniz.

## Ajan Neden Sıradan Bir Web Uygulaması Gibi Barındırılamaz?

Klasik bir web isteği milisaniyeler içinde biter. Bir ajan görevi ise dakikalar sürebilir, onlarca model çağrısı ve araç kullanımı içerebilir. Bu durum dört sorun doğurur:

1. **Zaman aşımı:** Sunucusuz (serverless) fonksiyonların ve ters vekillerin süre limitleri uzun görevleri keser.
2. **Kaynak tüketimi:** Aynı anda başlayan görevler bellek ve API kotalarını tüketir.
3. **Yan etki riski:** Ajan e-posta gönderebiliyor, dosya silebiliyor veya kod çalıştırabiliyorsa yanlış bir karar gerçek bir sonuç doğurur.
4. **Görünmezlik:** Ajanın neden belirli bir karar verdiğini kayıt olmadan anlamak mümkün değildir.

İyi bir ajan altyapısı bu dört sorunu ayrı katmanlarla çözer.

## Katman 1: Süreç Yönetimi

Ajanlar genellikle şu bileşenlerden oluşur: dışarıdan görev alan bir API veya tetikleyici, görevleri çalıştıran worker süreçleri ve zamanlanmış işler. Bunların her biri:

- **Konteyner içinde** (Docker) çalışmalı, bağımlılıkları sabitlenmiş olmalı
- **Yeniden başlatma politikasına** sahip olmalı; çöken worker otomatik ayağa kalkmalı
- **Kaynak limiti** almalı (CPU, bellek); tek bir kontrolsüz görev sunucuyu kilitlememeli
- **Sağlık kontrolü** (health check) sunmalı

Coolify gibi bir platform veya Docker Compose bu katmanı yönetmeyi kolaylaştırır. Kendi altyapımızda da benzer bir yaklaşımla, kaynak ve sıcaklık sınırlarını gözeten bir görev kuyruğu üzerinden ağır işleri sırayla çalıştırıyoruz.

## Katman 2: Kuyruk ve Eşzamanlılık Kontrolü

Görevler doğrudan çalıştırılmak yerine bir kuyruğa yazılmalıdır. Yaygın seçenekler Redis tabanlı kuyruklar (BullMQ, Celery, RQ gibi) veya PostgreSQL tabanlı iş tablolarıdır. Kuyruk şunları sağlar:

| İhtiyaç | Kuyruk ne yapar |
|---|---|
| Ani yük | Görevler birikir ama sistem çökmez |
| API oran limitleri | Worker sayısıyla eşzamanlı model çağrısı sınırlanır |
| Hata yönetimi | Başarısız görev geri çekilmeyle (backoff) yeniden denenir |
| Tekrarlanmaması gereken işler | Idempotency anahtarı ile aynı görev iki kez çalışmaz |
| Önceliklendirme | Acil görevler ayrı kuyrukta öne alınır |

Yerel model kullanılıyorsa kuyruk daha da kritiktir: GPU belleği sınırlıdır ve aynı anda çok fazla istek gelmesi tüm sistemi yavaşlatır. Kuyruk, çıkarım sunucusuna giden yükü kontrol altında tutar.

## Katman 3: Araç Erişimi ve İzolasyon

Ajanı güçlü yapan araçlar, aynı zamanda en büyük risktir. Temel ilke **en az yetki**dir:

- **Ayrı kimlik bilgileri:** Ajan, insan kullanıcıların hesaplarıyla değil, yalnızca gereken yetkilere sahip servis hesaplarıyla çalışmalı. Veritabanı erişimi mümkünse salt okunur olmalı.
- **Kod çalıştırma sandbox'ı:** Ajan kod çalıştırıyorsa bu iş, ağ erişimi kısıtlı, kısa ömürlü, ayrı bir konteynerde yapılmalı; ana sunucunun dosya sistemine erişmemeli.
- **Ağ sınırları:** Ajanın erişebileceği iç servisler ve dış alan adları açıkça listelenmeli (allowlist).
- **İnsan onayı:** Para transferi, toplu e-posta, kayıt silme gibi geri alınamaz işlemler, ajanın önerisi ve bir insanın onayı ile çalışmalı.
- **Prompt injection'a karşı tasarım:** Ajanın okuduğu web sayfası veya e-posta içeriği talimat taşıyabilir. Dış içerik "veri" olarak işlenmeli, yüksek yetkili araçlar bu içerik tarafından tetiklenememelidir.

### Gizli anahtar yönetimi

Model API anahtarları, veritabanı parolaları ve üçüncü taraf token'ları:

- Kod deposunda veya imajda değil, ortam değişkeni ya da bir gizli anahtar deposunda tutulmalı
- Ajanın kendisine (modelin bağlamına) asla verilmemeli; araç katmanı anahtarı kullanır, model yalnızca sonucu görür
- Servis başına ayrı ve düzenli yenilenen anahtarlar kullanılmalı
- Harcama limiti destekleyen sağlayıcılarda üst sınır tanımlanmalı

## Katman 4: Gözlemlenebilirlik

Bir ajan "çalışıyor" görünürken yanlış sonuç üretebilir. Bu yüzden izlenmesi gerekenler, klasik sunucu metriklerinin ötesine geçer:

- **Altyapı metrikleri:** CPU, bellek, disk, GPU kullanımı ve sıcaklığı (Netdata gibi araçlarla)
- **Erişilebilirlik:** Uç noktalar ve worker'lar ayakta mı (Uptime Kuma gibi araçlarla)
- **Görev metrikleri:** Kuyruk uzunluğu, görev süresi, başarısızlık oranı, yeniden deneme sayısı
- **İz kaydı (trace):** Her görev için hangi model çağrıları yapıldı, hangi araç hangi parametreyle çağrıldı, ne döndü
- **Maliyet:** Görev başına token tüketimi veya GPU süresi

İz kayıtları kişisel veri içerebilir. Saklama süresi belirlenmeli, hassas alanlar maskelenmelidir. KVKK açısından değerlendirme için [kvkk.gov.tr](https://www.kvkk.gov.tr) kaynaklarına ve hukuk danışmanınıza başvurmanızı öneririz.

## Örnek Mimari

Tek sunuculu, orta ölçekli bir ajan kurulumu şöyle görünebilir:

1. **Giriş:** Cloudflare Tunnel arkasında bir API veya n8n webhook'u; görev kuyruğa yazılır
2. **Kuyruk:** Redis
3. **Worker'lar:** Konteynerde çalışan, eşzamanlılığı sınırlı ajan süreçleri
4. **Model katmanı:** Bulut API'si veya aynı ağdaki yerel çıkarım sunucusu ([Ollama](https://ollama.com), [vLLM](https://docs.vllm.ai) gibi)
5. **Araç katmanı:** Yetkisi kısıtlı servis hesapları, kod çalıştırma için ayrı sandbox
6. **Durum ve kayıt:** PostgreSQL (görev geçmişi), log ve trace deposu
7. **İzleme ve yönetim:** Metrik paneli, uptime kontrolü, yönetim erişimi için Tailscale gibi özel ağ

Bu mimarinin her parçası her proje için gerekli değildir. Bazı ajanlar n8n'in yapay zekâ düğümleriyle tamamen çözülebilir; bu durumda [n8n'i nerede çalıştıracağınız](/blog/n8n-kendi-sunucunda-mi-bulutta-mi) asıl soru haline gelir. Kendi altyapınızın gerçekten gerekip gerekmediğini ise [İşletmeler neden kendi yapay zekâ altyapısını kurmalı?](/blog/isletmeler-neden-kendi-yapay-zeka-altyapisini-kurmali) yazısında tartışıyoruz.

## Ajan Altyapınızı Birlikte Tasarlayalım

Çalıştırmak istediğiniz ajanı, kullanacağı araçları ve yük beklentisini konuşarak ihtiyacınıza uygun bir mimari önerebilir, kurulumu ve işletmesini üstlenebiliriz. Kapsama göre teklif için [Detayları Konuşalım](/hizmetler/yapay-zeka-ajani-hosting) ya da [iletişim](/iletisim) sayfasından bize ulaşın.

## Sıkça Sorulan Sorular

### Yapay zekâ ajanı için GPU'lu sunucu şart mı?

Hayır. Model bulut API'si üzerinden kullanılıyorsa ajan altyapısı GPU olmadan çalışır; GPU yalnızca modeli yerelde çalıştırmak istediğinizde gerekir.

### Ajanları serverless ortamda çalıştırabilir miyim?

Kısa süren, basit görevler için mümkündür. Uzun süren, çok adımlı veya kuyruk gerektiren görevlerde süre limitleri ve durum yönetimi nedeniyle kalıcı worker süreçleri daha uygundur.

### Ajanın yanlış bir işlem yapmasını nasıl önlerim?

Yetkileri en aza indirerek, geri alınamaz işlemleri insan onayına bağlayarak, kod çalıştırmayı sandbox'ta yaparak ve her adımı kayıt altına alarak riski azaltabilirsiniz. Riski tamamen sıfırlayan bir yöntem yoktur.

### API anahtarlarını ajana nasıl vermeliyim?

Modele değil, araç katmanına verin. Anahtarlar ortam değişkeni veya gizli anahtar deposunda durmalı, model yalnızca aracın döndürdüğü sonucu görmelidir.

### Ajanın ne yaptığını nasıl izlerim?

Görev başına iz kaydı tutarak: hangi model çağrıları yapıldı, hangi araçlar hangi parametrelerle çalıştı, sonuç ne oldu. Buna kuyruk ve maliyet metrikleri eklendiğinde sorunlar erken fark edilir.
