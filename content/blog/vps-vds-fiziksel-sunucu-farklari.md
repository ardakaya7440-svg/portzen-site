---
title: "VPS, VDS ve Fiziksel Sunucu Arasındaki Farklar"
seoTitle: "VPS, VDS ve Fiziksel Sunucu Farkları: Hangisi Uygun?"
slug: "vps-vds-fiziksel-sunucu-farklari"
category: "altyapi"
description: "VPS, VDS ve fiziksel (dedicated) sunucu arasındaki farklar: kaynak paylaşımı, performans tutarlılığı, izolasyon ve hangi iş yüküne hangisinin uyduğu."
keywords: ["vps nedir", "vds nedir", "vps vds farkı", "fiziksel sunucu", "dedicated sunucu", "sanal sunucu seçimi"]
publishedAt: "2026-11-25"
updatedAt: "2026-11-25"
author: "Arda Kaya"
relatedServices: ["vps-vds-yonetimi"]
---

# VPS, VDS ve Fiziksel Sunucu Arasındaki Farklar

Temel fark, kaynakların ne kadar paylaşıldığıdır. VPS'te fiziksel bir makinenin işlemci çekirdekleri birden fazla müşteri arasında paylaşılır; VDS'te size ayrılmış (dedicated) çekirdekler tahsis edilir; fiziksel sunucuda ise makinenin tamamı sizindir. Paylaşım azaldıkça performans daha tutarlı, kontrol daha fazla ve sorumluluk daha büyük olur.

Önemli bir not: "VPS" ve "VDS" pazarlama terimleridir ve sağlayıcıdan sağlayıcıya farklı anlamda kullanılır. Bir paketi seçerken isme değil, teknik detaylara bakmak gerekir. Bu yazıda neye bakmanız gerektiğini anlatıyoruz.

## Sanallaştırma kısaca nasıl çalışır?

Fiziksel bir sunucunun üzerinde bir hipervizör (çoğunlukla KVM) çalışır. Hipervizör, makinenin CPU, RAM, disk ve ağ kaynaklarını sanal makinelere böler. Her sanal makine kendi işletim sistemini çalıştırır ve diğerlerinden izole edilir.

Farkı yaratan, bu bölüşümün **nasıl** yapıldığıdır:

- **CPU:** Sanal çekirdekleriniz (vCPU) fiziksel çekirdeklere sabit olarak mı bağlı, yoksa diğer müşterilerle zaman paylaşımlı mı kullanılıyor?
- **RAM:** Size ayrılan bellek gerçekten rezerve mi, yoksa sağlayıcı fiziksel bellekten fazlasını mı satmış (overcommit)?
- **Disk:** Yerel NVMe mi, ağ üzerinden bağlanan paylaşımlı depolama mı? IOPS sınırı var mı?

## VPS (Virtual Private Server)

VPS, fiziksel kaynakların paylaşımlı kullanıldığı sanal sunucudur. vCPU'larınız aynı makinedeki diğer müşterilerin vCPU'larıyla fiziksel çekirdekleri paylaşır.

**Artıları:** Ekonomik, hızlı açılır, kolay yükseltilir; çoğu web sitesi ve küçük uygulama için yeterlidir.

**Eksileri:** "Gürültülü komşu" (noisy neighbor) etkisi. Aynı makinedeki başka bir müşteri yoğun CPU veya disk kullandığında sizin performansınız düşebilir. Linux'ta bunu `top` çıktısındaki **steal time** (`st`) değeriyle görebilirsiniz; bu değer sürekli yüksekse sanal makineniz CPU için bekletiliyor demektir.

## VDS (Virtual Dedicated Server)

VDS de sanal bir sunucudur, ancak size ayrılmış CPU çekirdekleri ve rezerve RAM ile gelir. Bazı sağlayıcılar aynı ürünü "dedicated vCPU", "CPU-optimized" ya da "dedicated core" adıyla satar.

**Artıları:** Performans tutarlıdır; derleme, veritabanı, kuyruk işleme gibi CPU'ya duyarlı işlerde öngörülebilir sonuç verir. Yine de sanal olduğu için yeniden boyutlandırma ve snapshot kolaylığı korunur.

**Eksileri:** Aynı kaynak miktarında VPS'ten daha maliyetlidir. Disk ve ağ hâlâ paylaşımlı olabilir; "dedicated" ifadesinin yalnızca CPU'yu kapsayıp kapsamadığını kontrol etmek gerekir.

## Fiziksel sunucu (Dedicated / Bare Metal)

Makinenin tamamı sizindir. Arada başka müşteri yoktur; isterseniz kendi hipervizörünüzü kurup üzerinde sanal makineler çalıştırabilirsiniz.

**Artıları:** En yüksek ve en tutarlı performans, donanım seçiminde özgürlük (GPU, çok RAM, birden fazla NVMe), tam izolasyon.

**Eksileri:** Kurulum süresi daha uzundur, ölçeklemek donanım değişikliği gerektirir. Donanım arızasında sanal makine gibi saniyeler içinde başka bir host'a taşınamazsınız. Kiralık fiziksel sunucuda donanım sağlayıcıdadır; kendi makinenizse her şey sizdedir. Sahip olma ile kiralama arasındaki kararı [Kendi Sunucunuzu Kurmak mı, Bulut Sunucu Kiralamak mı?](/blog/kendi-sunucunu-kurmak-mi-bulut-sunucu-mu) yazısında ayrıca ele aldık.

## Karşılaştırma tablosu

| Özellik | VPS | VDS | Fiziksel sunucu |
|---|---|---|---|
| CPU | Paylaşımlı vCPU | Ayrılmış çekirdek | Tüm işlemci sizin |
| RAM | Sanal, bazen overcommit | Rezerve | Tüm bellek sizin |
| Performans tutarlılığı | Değişken | Yüksek | En yüksek |
| Gürültülü komşu riski | Var | Düşük (disk/ağda olabilir) | Yok |
| Ölçekleme | Dakikalar | Dakikalar | Donanım değişikliği |
| Snapshot / taşıma | Kolay | Kolay | Kendi çözümünüzle |
| Donanım seçimi (GPU vb.) | Sınırlı | Sınırlı | Geniş |
| Yönetim sorumluluğu | OS + uygulama | OS + uygulama | OS + uygulama (+ donanım izleme) |
| Tipik kullanım | Site, küçük API, bot | Veritabanı, CI, otomasyon | Yoğun veri, yapay zekâ, çoklu VM |

## Hangi iş yükü için hangisi?

### Kurumsal site, blog, küçük bot

Bir tanıtım sitesi, Telegram/Discord botu veya düşük trafikli bir API için VPS genellikle yeterlidir. Statik siteler CDN arkasında çok az kaynakla çalışır.

### n8n, veritabanı, CI/CD runner

Sürekli arka planda çalışan otomasyonlar, PostgreSQL gibi veritabanları ve build işleri CPU tutarlılığından fayda görür. Burada VDS veya dedicated vCPU sınıfı daha güvenli seçimdir. Özellikle Next.js gibi projelerin build aşaması kısa süreli ama yoğun CPU ve RAM tüketir.

### Yapay zekâ modelleri, büyük veri, sanallaştırma

Yerel dil modeli çalıştırmak, GPU kullanmak veya bir makinede birden fazla izole ortam kurmak istiyorsanız fiziksel sunucu öne çıkar.

## Paket seçerken sağlayıcıya sorulacaklar

İsimden bağımsız olarak şu soruların cevabı netleşmeli:

1. vCPU'lar ayrılmış mı, paylaşımlı mı? CPU kullanımında adil kullanım (fair use) sınırı var mı?
2. RAM rezerve mi?
3. Disk yerel NVMe mi, ağ depolaması mı? IOPS veya throughput sınırı nedir?
4. Ağ bant genişliği ve trafik kotası nedir?
5. Snapshot ve yedek hizmeti var mı, ayrı mı ücretlendiriliyor?
6. Hangi sanallaştırma teknolojisi kullanılıyor (KVM tam sanallaştırma mı, konteyner tabanlı mı)? Konteyner tabanlı sanallaştırmada kendi çekirdek modüllerinizi yükleyemeyebilir, Docker gibi araçlarda kısıtla karşılaşabilirsiniz.

## Kurulumdan sonra ne olacak?

Hangisini seçerseniz seçin, teslim aldığınız şey çoğunlukla çıplak bir işletim sistemidir. SSH sertleştirme, güvenlik duvarı, otomatik güvenlik güncellemeleri ve yedekleme sizin işinizdir. Bu adımları [Linux Sunucu Kurulumu rehberimizde](/blog/linux-sunucu-kurulumu-rehberi) komutlarıyla anlattık. Uygulamaları konteynerle çalıştıracaksanız Docker'ın [resmi dokümantasyonu](https://docs.docker.com/) ve sanallaştırma katmanı için [KVM projesi](https://linux-kvm.org/) faydalı kaynaklardır.

Kaynakları doğru seçmek kadar doğru kullanmak da önemlidir: yetersiz RAM ve kontrolsüz eşzamanlı işler, iyi bir VDS'i bile kilitleyebilir.

## Doğru sunucu tipini birlikte seçelim

Mevcut iş yüklerinizi inceleyip VPS, VDS veya fiziksel sunucudan hangisinin uygun olduğunu, kurulum ve sonrasındaki yönetimle birlikte planlayabiliriz. Hizmet detayları için [VPS ve VDS Yönetimi](/hizmetler/vps-vds-yonetimi) sayfasına göz atabilir, [iletişim sayfasından](/iletisim) veya WhatsApp (+90 531 863 91 17) üzerinden ulaşabilirsiniz.

## Sıkça Sorulan Sorular

### VDS, VPS'ten her zaman daha hızlı mıdır?

Aynı çekirdek sayısında, yoğun saatlerde genellikle daha tutarlıdır. Ancak bu sağlayıcının "VDS" ile neyi kastettiğine bağlıdır; ayrılmış çekirdek olup olmadığını teknik dokümandan teyit edin.

### Sunucumun gürültülü komşudan etkilendiğini nasıl anlarım?

`top` veya `vmstat` çıktısında steal time (`st`) değerine bakın. Uygulamanız boştayken bile bu değer sürekli yüksekse, fiziksel CPU başka sanal makinelerce kullanılıyor demektir.

### Fiziksel sunucu kiralamak ile kendi sunucumu almak aynı şey mi?

Hayır. Kiralık fiziksel sunucuda donanım, elektrik ve ağ sağlayıcıdadır; siz yalnızca makinenin tamamını kullanırsınız. Kendi sunucunuzda bunların hepsi sizin sorumluluğunuzdadır.

### VPS üzerinde Docker çalıştırabilir miyim?

KVM tabanlı VPS'lerde genellikle sorunsuz çalışır. Konteyner tabanlı (ör. OpenVZ/LXC) sanallaştırmada kısıtlamalar olabilir; satın almadan önce sağlayıcıya sorun.

### Küçük başlayıp sonra büyütmek mümkün mü?

Evet. VPS ve VDS'te paket yükseltmek genellikle kısa bir yeniden başlatmayla olur. Uygulamaları baştan konteynerle paketlemek, ileride fiziksel sunucuya geçişi de kolaylaştırır.
