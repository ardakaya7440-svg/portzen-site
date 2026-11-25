---
title: "Self-Hosted Yapay Zekâ Sistemleri Nedir?"
seoTitle: "Self-Hosted Yapay Zekâ Nedir? Bileşenler ve Kavramlar"
slug: "self-hosted-yapay-zeka-nedir"
category: "altyapi"
description: "Self-hosted yapay zekâ nedir? Yerel model, çıkarım sunucusu (Ollama, vLLM, llama.cpp), RAG ve vektör veritabanı kavramlarını sade bir dille anlatıyoruz."
keywords: ["self-hosted yapay zeka", "yerel llm", "ollama vllm llama.cpp", "rag nedir", "vektör veritabanı"]
publishedAt: "2026-11-25"
updatedAt: "2026-11-25"
author: "Arda Kaya"
relatedServices: ["yapay-zeka-ajani-hosting"]
---

# Self-Hosted Yapay Zekâ Sistemleri Nedir?

Self-hosted yapay zekâ, bir dil modelini veya yapay zekâ uygulamasını üçüncü taraf bir API yerine sizin kontrol ettiğiniz bir sunucuda çalıştırmak demektir. Bu sunucu ofisinizdeki bir makine, kiraladığınız bir GPU sunucusu veya kendi bulut hesabınızdaki bir sanal makine olabilir. Böyle bir sistem genellikle dört bileşenden oluşur: **model**, modeli çalıştıran **çıkarım sunucusu**, şirket verisini modele taşıyan **RAG** katmanı ve bu verinin aranabilir halini tutan **vektör veritabanı**. Bu yazıda bu bileşenleri tek tek açıklıyoruz.

## API Tabanlı Model ile Yerel Model Arasındaki Fark

Yapay zekâ kullanmanın iki temel yolu vardır:

| | API tabanlı model | Yerel (self-hosted) model |
|---|---|---|
| Model nerede çalışır | Sağlayıcının sunucularında | Sizin kontrolünüzdeki sunucuda |
| Veri nereye gider | İstek sağlayıcıya iletilir | Sunucunuzdan çıkmaz (siz izin vermedikçe) |
| Donanım | Gerekmez | Modelin boyutuna göre GPU veya güçlü CPU |
| Model kalitesi | En büyük ticari modellere erişim | Açık ağırlıklı modellerle sınırlı |
| Maliyet yapısı | Kullanım başına (token) | Donanım/kira + bakım; kullanımdan büyük ölçüde bağımsız |
| Bakım | Sağlayıcı yapar | Sizin sorumluluğunuzda |

"Self-hosted yapay zekâ sistemi" ifadesi bazen yalnızca uygulamanın (sohbet arayüzü, RAG, ajan) kendi sunucunuzda çalıştığı, modelin ise API'den kullanıldığı hibrit kurulumları da kapsar. Bu ayrımı baştan netleştirmek, gereksiz donanım yatırımını önler.

## Bileşen 1: Model

Self-hosted kurulumlarda kullanılan modeller, ağırlıkları indirilebilen **açık ağırlıklı** (open-weight) modellerdir. Seçerken dikkat edilecek noktalar:

- **Parametre sayısı:** Model büyüdükçe genellikle yetenek artar, ama bellek ihtiyacı da artar.
- **Lisans:** Açık ağırlıklı her model ticari kullanıma serbest değildir; lisans koşulları model bazında okunmalıdır.
- **Dil desteği:** Türkçe performansı modelden modele belirgin biçimde değişir; kendi verinizle test etmeden karar vermeyin.
- **Görev uyumu:** Sohbet, kod, gömme (embedding) ve görsel modeller farklı işler için tasarlanır.

### Kuantizasyon ve donanım ölçeği

Kuantizasyon, model ağırlıklarını daha düşük hassasiyette (ör. 16 bit yerine 4 bit) saklayarak bellek ihtiyacını azaltan tekniktir. Kabaca kural şudur: modelin bellekte kapladığı yer, parametre sayısı ile parametre başına bit sayısının çarpımına yakındır; buna bağlam (context) için ek bellek eklenir. Bu yüzden küçük modeller (birkaç milyar parametre) kuantize edilerek tüketici sınıfı bir ekran kartında veya hatta CPU'da çalışabilirken, büyük modeller veri merkezi sınıfı GPU'lar veya birden fazla GPU gerektirir. Kesin gereksinim; model, kuantizasyon seviyesi, bağlam uzunluğu ve eşzamanlı kullanıcı sayısına göre değişir. En güvenilir yol, hedef modelin kendi sayfasındaki önerilere bakmak ve kendi iş yükünüzle denemektir.

## Bileşen 2: Çıkarım Sunucusu

Çıkarım (inference) sunucusu, modeli belleğe yükleyip gelen isteklere yanıt üreten yazılımdır. Çoğu, OpenAI uyumlu bir API sunduğu için uygulamalar az değişiklikle bulut API'sinden yerel modele geçebilir. Yaygın üç seçenek:

| Araç | Öne çıkan yanı | Uygun olduğu durum |
|---|---|---|
| [llama.cpp](https://github.com/ggml-org/llama.cpp) | C/C++ ile yazılmış, CPU ve çeşitli GPU'larda çalışır, GGUF formatı | Kısıtlı donanım, gömülü veya hafif kurulumlar |
| [Ollama](https://ollama.com) | Model indirme ve çalıştırmayı tek komuta indirir | Hızlı başlangıç, geliştirme, küçük ekip kullanımı |
| [vLLM](https://docs.vllm.ai) | Yüksek verim için optimize edilmiş, çok sayıda eşzamanlı isteği verimli işler | GPU sunucusunda çok kullanıcılı üretim ortamı |

Basitleştirerek söylersek: tek kullanıcılı veya düşük trafikli işlerde Ollama ya da llama.cpp yeterlidir; aynı anda çok sayıda isteğe hizmet verilecekse vLLM gibi verim odaklı bir sunucu daha uygundur.

## Bileşen 3: RAG (Retrieval-Augmented Generation)

Bir dil modeli sizin sözleşmelerinizi, ürün kataloğunuzu veya iç prosedürlerinizi bilmez. Modeli bu verilerle yeniden eğitmek (fine-tuning) çoğu zaman gereksiz ve pahalıdır. **RAG** bunun yerine şunu yapar:

1. Belgeler parçalara (chunk) bölünür.
2. Her parça bir **embedding modeli** ile sayısal vektöre dönüştürülür ve saklanır.
3. Kullanıcı soru sorduğunda soru da vektöre çevrilir, en ilgili parçalar bulunur.
4. Bu parçalar soruyla birlikte modele verilir; model yanıtı bu bağlama dayanarak üretir.

RAG'in kalitesi büyük ölçüde belgelerin nasıl parçalandığına, arama kalitesine ve kaynakların yanıtta gösterilip gösterilmediğine bağlıdır. Model ne kadar iyi olursa olsun, yanlış parça getirilirse yanıt da yanlış olur.

## Bileşen 4: Vektör Veritabanı

Vektör veritabanı, embedding'leri saklayan ve "anlamca en yakın" kayıtları hızla bulan veri deposudur. Seçenekler kabaca ikiye ayrılır:

- **Mevcut veritabanına eklenti:** PostgreSQL için pgvector gibi. Zaten Postgres kullanıyorsanız ayrı bir sistem işletmeden başlamanızı sağlar.
- **Ayrı vektör veritabanları:** Qdrant, Weaviate, Milvus, Chroma gibi. Büyük veri hacimlerinde ve gelişmiş filtrelemede avantaj sağlayabilir.

Orta ölçekli bir belge arşivi için çoğu zaman pgvector yeterlidir; karar veri hacmi ve ekibin işletme kapasitesine göre verilmelidir.

## Diğer Bileşenler

- **Arayüz:** Kullanıcıların modelle konuştuğu web arayüzü veya mevcut sistemlere (Slack, Discord, WhatsApp, iç portal) entegrasyon. Mesajlaşma tarafı için [Discord bot geliştirme](/blog/discord-bot-gelistirme-rehberi) yazımıza bakabilirsiniz.
- **Kuyruk ve izleme:** Çok kullanıcılı kurulumlarda isteklerin sıraya alınması ve GPU kullanımının izlenmesi. Bu konunun mimari tarafını [Yapay zekâ ajanları için özel sunucu altyapısı](/blog/yapay-zeka-ajanlari-icin-sunucu-altyapisi) yazısında ele aldık.
- **Erişim kontrolü:** Kimin hangi belgelere RAG üzerinden erişebileceği. Yetki kontrolü arama aşamasında uygulanmazsa model, kullanıcının görmemesi gereken belgeyi yanıta katabilir.

## Veri Yerelliği ve KVKK

Self-hosted kurulumun en sık gerekçesi verinin kontrol altında kalmasıdır. Model kendi sunucunuzda çalıştığında istekler bir yapay zekâ sağlayıcısına gönderilmez. Ancak bu tek başına KVKK uyumu anlamına gelmez: veri işleme amacı, saklama süresi, erişim yetkileri ve kayıtlar yine sizin sorumluluğunuzdadır. Ayrıntılı değerlendirme için [kvkk.gov.tr](https://www.kvkk.gov.tr) kaynaklarına ve hukuk danışmanınıza başvurun.

Self-hosted bir sistemin işletmeniz için gerçekten mantıklı olup olmadığını iş açısından [İşletmeler neden kendi yapay zekâ altyapısını kurmalı?](/blog/isletmeler-neden-kendi-yapay-zeka-altyapisini-kurmali) yazısında tartışıyoruz.

## Kendi Yapay Zekâ Sisteminizi Planlayalım

Hangi bileşenlere gerçekten ihtiyacınız olduğunu, mevcut verilerinizi ve kullanım senaryonuzu birlikte değerlendirebiliriz. Kurulum ve işletme için kapsama göre teklif hazırlıyoruz. [Detayları Konuşalım](/hizmetler/yapay-zeka-ajani-hosting) veya [iletişim](/iletisim) sayfasından yazın.

## Sıkça Sorulan Sorular

### Self-hosted yapay zekâ için mutlaka GPU gerekir mi?

Hayır. Küçük, kuantize edilmiş modeller CPU'da çalışabilir; ancak yanıt hızı düşer. Çok kullanıcılı veya büyük modelli kurulumlar için GPU pratikte gereklidir.

### Ollama ile vLLM arasındaki temel fark nedir?

Ollama kurulum ve model yönetimini kolaylaştırmaya odaklanır, vLLM ise GPU üzerinde çok sayıda eşzamanlı isteği yüksek verimle işlemeye odaklanır. Kullanıcı sayısı ve donanım, seçimi belirler.

### RAG mı, fine-tuning mi?

Şirket bilgisini modele tanıtmak için çoğu durumda RAG yeterlidir ve belgeler güncellendiğinde yeniden eğitim gerektirmez. Fine-tuning daha çok üslup, format veya özel bir görev davranışı kazandırmak için tercih edilir.

### Açık ağırlıklı modeller ticari olarak kullanılabilir mi?

Modele göre değişir. Bazı lisanslar serbest ticari kullanıma izin verirken bazıları kullanım koşulları veya kısıtlamalar içerir. Her modelin lisansını ayrıca okumak gerekir.

### Yerel model, bulut API'sindeki büyük modeller kadar iyi mi?

Genellikle en büyük ticari modellerin gerisinde kalır, ancak sınıflandırma, özetleme ve belge üzerinden soru-cevap gibi tanımlı görevlerde yeterli olabilir. Kendi verinizle test etmek en sağlıklı yoldur.
