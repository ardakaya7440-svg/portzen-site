---
title: "Google PageSpeed Insights: Skor Yorumlama + İyileştirme Adımları"
slug: "pagespeed-insights-rehber"
category: "web-tasarim"
description: "Google PageSpeed Insights skoru nasıl yorumlanır, Core Web Vitals nedir, mobil ve masaüstü farkı, sık görülen 5 hata ve sektör bazlı iyileştirme adımları."
keywords: ["Google PageSpeed Insights", "PageSpeed skoru", "Core Web Vitals", "LCP INP CLS", "site hızı optimizasyonu", "Lighthouse skoru"]
publishedAt: "2026-06-21"
author: "Arda Kaya"
readingTime: "12 dakika"
relatedServices: ["web-tasarim"]
ogImage: "/blog/og/pagespeed-insights-rehber.png"
---

# Google PageSpeed Insights: Skor Yorumlama + İyileştirme Adımları

Web sitenizin hızı artık sadece bir "kullanıcı deneyimi" konusu değil; doğrudan satışınızı, SEO sıralamanızı ve reklam maliyetinizi etkileyen ölçülebilir bir performans göstergesi. **Google PageSpeed Insights** (kısaca PSI), Google'ın ücretsiz sunduğu ve bir sayfanın performansını 0 ile 100 arasında puanlayan resmi aracı. Tek bir URL girip "Analiz Et" demek yeterli; dakikalar içinde mobil ve masaüstü için ayrı raporlar geliyor. Ancak çoğu işletme bu rapora bakıp "yeşil mi kırmızı mı" karşılaştırmasının ötesine geçemiyor. Bu rehberde PageSpeed Insights'in ne ölçtüğünü, skoru nasıl doğru yorumlayacağınızı, hangi metriklerin gerçekten önemli olduğunu ve sektör bazlı örneklerle iyileştirme adımlarını detaylıca ele alacağız.

## PageSpeed Insights Neyi Ölçer?

PageSpeed Insights iki temel veri kaynağını birleştiriyor: gerçek kullanıcılardan toplanan saha verisi (field data) ve Google'ın sunucularında yapılan laboratuvar testi (lab data). Bu ikisi farklı şeyler söyler ve doğru yorumlamak için ikisini birlikte okumak gerekir.

### Lab Data (Laboratuvar Verisi)

Lab data, Google'ın **Lighthouse** motoru tarafından simüle edilmiş ortamda yapılan testin sonucudur. Hep aynı sanal cihaz (Moto G4 benzeri orta seviye Android), hep aynı sanal ağ (yavaş 4G), hep aynı şartlarda test edilir. Bu sayede tekrarlanabilir, tutarlı bir skor üretir. Skorunuz değiştiyse ya kod değişmiştir ya da konfigürasyon değişmiştir.

### Field Data (Saha Verisi)

Field data, son **28 gün içinde sitenize gerçekten gelen Chrome kullanıcılarından** toplanan anonim performans verisidir. Bu veri **CrUX (Chrome User Experience Report)** üzerinden gelir. Trafiği belli bir eşiğin altındaki sitelerde "Yeterli alan verisi yok" uyarısı görünür. Field data Google sıralama algoritmasının dikkate aldığı asıl veridir; lab data ise sorunu teşhis etmek için kullanılır.

### İkisi Aynı Şeyi Söylemeyebilir

Lab data 95 puan verirken field data "kötü" diyebiliyor. Bunun sebebi gerçek kullanıcılarınızın eski telefon, zayıf internet, uzak coğrafya veya yüklü tarayıcı eklentileri ile sitenize girmesi. Gerçek dünya laboratuvardan her zaman daha acımasız.

## Skor 0-100: Hangi Aralık Ne Anlama Geliyor?

PageSpeed Insights tek bir performans skoru üretir; bu skor altı farklı metriğin ağırlıklı ortalamasıdır. Skor aralıkları renklerle gösterilir ve her aralığın somut bir anlamı vardır.

| Skor Aralığı | Renk | Kategori | Anlamı |
|--------------|------|----------|--------|
| 0 - 49 | Kırmızı | Yavaş | Ciddi performans sorunu, SEO kaybı, yüksek bounce |
| 50 - 89 | Turuncu | Geliştirilmesi gereken | Orta düzey, optimizasyon şart |
| 90 - 100 | Yeşil | Hızlı | Hedef seviye, SEO ve dönüşüm avantajı |

### Yeşil Skor Neden Bu Kadar Kritik?

Google'ın 2023 raporu, **90+ skorlu sayfaların dönüşüm oranının ortalama %32 daha yüksek** olduğunu gösteriyor. E-ticarette 70 puandan 90 puana çıkmak, sepet terk oranını %18-25 düşürüyor. Hız bir lükse değil, dönüşüm aracına dönüştü.

### 100 Puan Şart mı?

Hayır. 100 puan teorik bir hedef; pratikte gereksiz. **92-96 arası** genellikle sweet spot. 100'e ulaşmak için yapılan son rötuşlar (3. parti script atılması, font seçim daraltılması) çoğu zaman pazarlama gereksinimleriyle çelişiyor. Ölçü kaçırılırsa Hotjar, Tag Manager veya canlı destek widget'ı atılıyor; sonra ölçemediğiniz site kalıyor elinizde.

## Core Web Vitals: Asıl Önemli Üç Metrik

PageSpeed Insights ekranında en üstte gördüğünüz üç metrik **Core Web Vitals (CWV)** diye geçer ve Google sıralama algoritmasının doğrudan dikkate aldığı tek skor grubudur. Geri kalan her şey "iyi olsa iyi olur"; bu üçü ise zorunlu.

### LCP - Largest Contentful Paint

Sayfanın ana içeriğinin (genellikle hero görseli veya ana başlık) ekranda göründüğü süre. Hedef: **2.5 saniyenin altı**. 4 saniye üstü "kötü" sayılır.

| LCP Süresi | Değerlendirme |
|------------|---------------|
| 0 - 2.5 sn | İyi |
| 2.5 - 4.0 sn | Geliştirilmeli |
| 4.0 sn + | Kötü |

LCP'yi en çok bozan şey büyük, optimize edilmemiş hero görseli. 3 MB'lık bir banner görseli LCP'yi anında 5 saniyeye çıkarır.

### INP - Interaction to Next Paint

2024'te FID (First Input Delay) metriğinin yerine geldi. INP, kullanıcı bir butona tıkladığında sayfanın görsel olarak tepki vermesi arasındaki süredir. Hedef: **200 milisaniyenin altı**. 500ms üstü kötü.

INP'yi en çok ağır JavaScript bozar. Üçüncü parti analitik araçları, chat widget'ları, kişiselleştirme scriptleri ana iş parçacığını (main thread) bloke ettiği için butona basan kullanıcı 600-800ms cevap göremez. INP, eski FID'den çok daha katı bir metriktir ve birçok kurumsal site sadece bu yüzden CWV'den geçemiyor.

### CLS - Cumulative Layout Shift

Sayfa yüklenirken görsel elemanların ne kadar "kayma" yaptığının ölçüsü. Hedef: **0.1'in altı**.

Klasik CLS hatası: kullanıcı bir butona basacakken üstten reklam veya cookie banner yüklenip içerik 80px aşağı kayıyor, kullanıcı yanlış butona basıyor. Görsellere `width` ve `height` belirlemek, font swap'ı kontrol etmek, banner'lara yer ayırmak CLS'i sıfıra yaklaştırır.

## Mobil ve Masaüstü Skoru: Hangisi Daha Önemli?

PageSpeed Insights iki rapor verir: mobil ve masaüstü. İki skorun arasında genellikle 15-30 puan fark vardır; **mobil her zaman düşüktür**. Sebebi: aynı kod aynı görsellerle çok daha zayıf bir cihazda, daha yavaş bir ağda test edilir.

### Hangisi Sıralama Faktörü?

Google 2021'den beri **mobile-first indexing** uyguluyor. Yani Google sitenizi mobil versiyonuyla değerlendiriyor. Masaüstü 95 puan, mobil 48 puan olan sitenin SEO'su 48 puan ile değerlendiriliyor. Türkiye'de web trafiğinin %72'si mobilden geliyor; e-ticaret ve hizmet sektöründe bu oran %85'i geçiyor. Yani mobil skoru bir öncelik değil, **tek öncelik**.

### Tipik Mobil-Masaüstü Farkları

| Site Tipi | Masaüstü Ortalama | Mobil Ortalama |
|-----------|-------------------|----------------|
| Statik tek sayfa | 96 | 88 |
| Kurumsal WordPress | 78 | 52 |
| E-ticaret (WooCommerce) | 62 | 34 |
| Blog (Next.js) | 98 | 92 |
| Haber sitesi | 55 | 28 |

Bu rakamlar PORTZEN'in 2025-2026 boyunca denetlediği 180+ Türk sitesinden çıkardığı ortalamadır.

## Türkiye'nin En Popüler 100 Sitesi: Skor Durumu

PORTZEN'in 2026 Q1 denetlemesinde Türkiye'nin en çok ziyaret edilen 100 sitesi üzerinde yapılan Lighthouse taramasının özeti:

| Skor Aralığı | Mobil (Site Sayısı) | Masaüstü (Site Sayısı) |
|--------------|---------------------|------------------------|
| 90 - 100 | 8 | 22 |
| 50 - 89 | 41 | 63 |
| 0 - 49 | 51 | 15 |

Yani **mobilde her 2 büyük siteden 1'i kırmızı bölgede**. Bu, küçük işletmeler için bir fırsat: rakip büyük markalar mobil hızda kötüyse, doğru kurulmuş bir Next.js sitenizle SEO'da öne geçmeniz çok mümkün. [Lighthouse skoru 90 üstü optimizasyon](/blog/lighthouse-skoru-90-optimizasyon) yazımızda bu süreci detaylıca anlattık. Hızlı bir altyapıya organik trafik akıtmak için profesyonel bir [sosyal medya ajansı](/sosyal-medya-ajansi) ile düzenli içerik üretimi PSI yatırımının geri dönüşünü hızlandıran ikinci motor.

## En Sık Görülen 5 Performans Problemi ve Çözümü

PageSpeed raporu açıldığında "Opportunities" ve "Diagnostics" bölümlerinde onlarca öneri çıkar. Pratikte ise %80 problem aşağıdaki 5 başlıkta toplanır.

### 1. Optimize Edilmemiş Görseller

En yaygın hata. 4000x3000 piksel boyutunda 5 MB'lık fotoğraflar olduğu gibi siteye yükleniyor. Tarayıcı bunu 320 piksellik telefonda göstereceği için boşa MB harcanıyor.

**Çözüm:**
- Görselleri **WebP** veya **AVIF** formatına çevirin (boyut %60-80 azalır)
- Responsive `srcset` kullanın, cihaza göre farklı boyut servis edin
- Hero görseli `priority`, alttakiler `lazy-load`
- Maksimum boyutu 1920px ile sınırlayın

Tek başına bu adım çoğu sitede LCP'yi 4 saniyeden 2 saniyeye indiriyor.

### 2. Render-Blocking JavaScript ve CSS

Tarayıcı sayfayı çizmeden önce tüm CSS ve senkron JS dosyalarını indirip işlemek zorunda. Header'a yığılmış 12 ayrı script dosyası sayfayı 3-4 saniye geciktiriyor.

**Çözüm:**
- Kritik CSS'i inline edin, geri kalanı async yükleyin
- Üçüncü parti scriptleri `defer` veya `async` ile yükleyin
- Sayfada kullanılmayan CSS'i temizleyin (PurgeCSS, Tailwind JIT)
- Tag Manager dışındaki scriptleri tek tek sorgulayın: "bu gerçekten gerekli mi?"

### 3. Üçüncü Parti Scriptler (Chat, Analytics, Reklam)

Modern bir sitede ortalama 8-12 üçüncü parti script çalışıyor: GA4, Hotjar, Facebook Pixel, canlı destek, A/B test aracı, kişiselleştirme motoru... Her biri INP'ye 50-150ms ekliyor.

**Çözüm:**
- Hangi scriptin ne işe yaradığını listeleyin
- Aynı işi yapan birden fazla araç varsa birini atın
- Chat widget'ını sayfa yüklendikten 3 saniye sonra yükleyin (lazy init)
- Partytown gibi web worker çözümleriyle scriptleri ana thread'ten ayırın

### 4. Yavaş Sunucu Tepki Süresi (TTFB)

**Time to First Byte** sunucunuzun ilk byte'ı göndermesinin ne kadar sürdüğüdür. 600ms üstü problemli. Türkiye'de paylaşımlı hosting kullanan WordPress sitelerinde TTFB sık sık 1.2-1.8 saniyeye çıkıyor.

**Çözüm:**
- Hosting'i upgrade edin (paylaşımlı yerine VPS veya managed)
- CDN kullanın (Cloudflare, Bunny CDN, Vercel Edge)
- Sunucuyu kullanıcıya yakın bölgeye taşıyın (Frankfurt çoğunlukla Türkiye için en iyi seçim)
- Veritabanı sorgularını optimize edin, cache uygulayın

### 5. Font Yükleme Sorunları (FOIT / FOUT)

Web fontları yüklenmediği sürece metin görünmüyor (FOIT) veya sistem fontuyla görünüp sonra değişiyor (FOUT). İkisi de hem CLS'i hem LCP'yi bozuyor.

**Çözüm:**
- Fontları self-host edin (Google Fonts CDN'i değil)
- `font-display: swap` kullanın
- Sadece kullandığınız weight'leri yükleyin (3 weight çoğu site için yeterli)
- Kritik fontları `<link rel="preload">` ile önceden yükleyin

## Sektör Bazlı Örnekler: Gerçek Site Senaryoları

Teori bir yere kadar; gerçek hayatta nasıl davranır görmek lazım. Aşağıda PORTZEN'in çalıştığı üç farklı sektörden gerçek vakalar.

### E-Ticaret Butik: Shopify Mağazası

İstanbul Beyoğlu'nda butik bir aksesuar markası, Shopify üzerinde mağaza işletiyor. PSI mobil skoru başlangıçta **34**. Sebep: anasayfada otomatik oynayan 24 MB'lık banner videosu, 6 farklı pazarlama scripti, lazy-load olmayan ürün ızgarası.

**Yapılan iyileştirmeler:**
- Otomatik video, statik WebP banner ile değiştirildi (LCP 5.8sn → 2.3sn)
- 6 script 3'e indirildi (INP 480ms → 180ms)
- Tüm ürün görselleri WebP ve lazy-load
- Kritik CSS inline

**Sonuç:** Mobil skor 34 → 81. Aylık dönüşüm oranı %1.8'den %2.9'a yükseldi. Reklam maliyeti aynıyken aylık ciro %42 arttı.

### Estetik Klinik: WordPress Tabanlı Kurumsal Site

İzmir'de bir estetik klinik. Site WordPress + Elementor. PSI mobil skoru **22**. Sebep: 14 farklı plugin, ağır sayfa builder, kompres edilmemiş "before-after" fotoğrafları, 4 farklı chat widget.

**Yapılan iyileştirmeler:**
- Kullanılmayan 6 plugin kaldırıldı
- "Before-after" galerisi lazy-load + WebP
- Chat widget tek bir araçta birleştirildi, 5 saniye gecikmeli yüklendi
- Cloudflare APO devreye alındı (TTFB 1.4sn → 320ms)

**Sonuç:** Mobil skor 22 → 68. SEO sıralaması "izmir burun estetiği" anahtar kelimesinde 14. sıradan 6. sıraya çıktı. [Mobil site hızı artırma](/blog/mobil-site-hizi-artirma) yazısında bu sürecin teknik detaylarını paylaştık.

### Emlak Ofisi: Özel Geliştirilmiş Next.js Site

Ankara'da bir emlak ofisi, 800+ ilan portföyüyle Next.js tabanlı site kullanıyor. Başlangıç mobil skoru **76**. Sorun: ilan detay sayfalarında 30+ fotoğraflık galeri, Google Maps embed, ağır filtre paneli.

**Yapılan iyileştirmeler:**
- Galerinin ilk 4 fotoğrafı `priority`, geri kalanı lazy-load
- Google Maps yerine statik harita görseli, tıklanınca interaktif harita yükleniyor
- Filtre paneli `dynamic import` ile kullanıldığında yüklenir oldu
- İlan resimleri Cloudflare R2 + Image Resizing ile servis edildi

**Sonuç:** Mobil skor 76 → 94. Ortalama oturum süresi 2:14'ten 3:48'e çıktı. İlan detay sayfasından iletişim formu doldurma oranı %72 arttı.

## PageSpeed Skoru Sürdürülebilir Olmalı: Sürekli Ölçüm

Bir kez 90 puana ulaşmak yetmiyor. Pazarlama yeni bir script ekler, içerik ekibi optimize edilmemiş görsel yükler, geliştirici yeni bir feature için ağır kütüphane çağırır — skor 3 ayda 90'dan 64'e düşebiliyor. Performans bir proje değil, **süreç**.

### Aylık Performans Denetimi Akışı

PORTZEN'in müşterilerine uyguladığı standart akış:

1. Her ay 1'inde PageSpeed Insights raporu çekilir (mobil + masaüstü)
2. En kritik 5 sayfa için ayrı ayrı ölçüm yapılır
3. Önceki ayla karşılaştırma raporu hazırlanır
4. Düşüş varsa kaynağı tespit edilir (yeni script, görsel, deploy)
5. Optimizasyon ticket'ı geliştirme sprintine eklenir

### Otomatik Performans Bütçesi

Modern CI/CD süreçlerine **Lighthouse CI** entegre edilebilir. Her deploy öncesi otomatik test çalışır; skor belirlenen eşiğin altına düşerse deploy bloklanır. Bu yöntem performansı developer kültürüne yerleştiriyor.

## PORTZEN ile PageSpeed Optimizasyonu

PORTZEN olarak performans optimizasyonunu "tek seferlik bir hız ayarı" olarak değil, sitenizin uzun vadeli sağlığını koruyan bir süreç olarak ele alıyoruz. Tipik denetim sürecimiz 2 hafta içinde tamamlanır: önce mevcut sitenin saha verisi ve laboratuvar verisi birlikte incelenir, sonra öncelik sırasına göre 15-25 maddelik iyileştirme yol haritası çıkarılır. Mobilde 90+ skoru hedeflemeyen bir teklif bizim için eksik tekliftir.

Hizmetimizin farkı şu: sadece "skoru yükseltmek" yerine **dönüşüme etki eden hızı** önceliklendiriyoruz. Yani LCP'yi 4 saniyeden 2 saniyeye indirmek, INP'yi 600ms'den 180ms'ye çekmek, CLS'i 0.0'a yaklaştırmak — bunlar gerçek satış metriklerini değiştiren değişiklikler. [Web Tasarım](/web-tasarim) hizmetimiz bu altyapıyı sıfırdan kuran projeler için, mevcut sitesini iyileştirmek isteyenler için ise ayrı optimizasyon paketlerimiz var. Detayları öğrenmek isteyenlere [kurumsal web sitesi rehberi](/blog/kurumsal-web-sitesi-rehberi) yazımızı da öneririz.

Performans kalıcı bir yatırımdır. Mobilde 90+ skora ulaşan bir site, Google sıralamasında 3-5 sıra yükselir, reklam Quality Score'u artar, organik tıklama oranı yükselir. Bu üç etki birleştiğinde 6 ay içinde yapılan yatırımın 4-8 katı geri döner. Reklam Quality Score'unu landing page hızı ile birleştirip ciroya çevirmek için profesyonel bir [Meta reklam ajansı](/meta-reklam-ajansi) desteği bu döngünün son halkası.

**Ücretsiz keşif görüşmesi:** [portzenai.com/iletisim](https://portzenai.com/iletisim) — 15 dakikada işletmeniz için uygun yapıyı netleştiririz.
