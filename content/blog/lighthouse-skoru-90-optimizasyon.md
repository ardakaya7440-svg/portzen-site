---
title: "Lighthouse Skoru 90+ İçin Web Sitesi Optimizasyon Rehberi"
slug: "lighthouse-skoru-90-optimizasyon"
category: "web-tasarim"
description: "Lighthouse skoru 90+ nasıl alınır? Performance, SEO, erişilebilirlik için 15 adımlı optimizasyon rehberi, LCP, INP, CLS metrikleri ve sektörel örnekler."
keywords: ["Lighthouse skoru 90", "Lighthouse optimizasyon", "web sitesi hızlandırma", "Core Web Vitals", "LCP CLS INP", "PageSpeed Insights", "web performans optimizasyonu"]
publishedAt: "2026-06-21"
author: "Arda Kaya"
readingTime: "13 dakika"
relatedServices: ["web-tasarim"]
ogImage: "/blog/og/lighthouse-skoru-90-optimizasyon.png"
---

# Lighthouse Skoru 90+ İçin Web Sitesi Optimizasyon Rehberi

Lighthouse skoru 90 ve üzeri, 2026 itibarıyla "iyi bir web sitesi" olmanın asgari teknik kanıtı haline geldi. Google'ın açık kaynaklı bu denetim aracı; sitenizin performansını, erişilebilirliğini, SEO uyumunu ve modern web standartlarına bağlılığını tek bir rapor üzerinden ölçüyor. 50 puanlık bir site Google sıralamasında her gün geri düşüyor, kullanıcıyı 3 saniye içinde kaybediyor ve reklam bütçesini boşa harcıyor. 90+ skoru olan site ise hem organik sıralamada üst sıralara tırmanıyor hem de tıklama başına dönüşüm oranını ortalama %35 yukarı çekiyor. Bu rehberde Lighthouse skoru 90 üstüne çıkartmak için uygulanması gereken 15 adımlı somut bir yol haritası, üç ana Core Web Vitals metriği ve sektörel örneklerle pratik optimizasyon teknikleri detaylı olarak ele alınıyor.

## Lighthouse Nedir, Neden Bu Kadar Önemli?

Lighthouse, Google'ın 2016'da Chrome DevTools'a entegre ettiği açık kaynaklı bir denetim aracıdır. Bir URL'yi simüle edilmiş ortamda yükler, ölçer, kategorize eder ve 0-100 arası puanlar. Bu puan sadece "şirket içi kontrol" değil; PageSpeed Insights, Chrome UX Report, Search Console gibi ekosistemlerin tamamı aynı motoru kullanıyor.

### Lighthouse Skoru Nereden Geliyor?

Lighthouse motoru sitenizi "yavaş 4G + orta sınıf mobil cihaz" senaryosunda çalıştırır. Bu senaryo bilinçli olarak gerçek dünyaya yakın seçilmiştir; sizin masaüstündeki fiber bağlantınız değil, müşterinizin metrobüste çekilmeyen telefonu test edilir. Toplam puan beş alt kategoriden oluşur ve her birinin ağırlığı farklıdır.

### Beş Ana Kategori

Lighthouse raporu beş başlığa ayrılır ve her biri ayrı bir 0-100 puan üretir:

| Kategori | Ölçtüğü Şey | Toplam Puan İçin Önem |
|----------|-------------|----------------------|
| Performance | Yükleme hızı, etkileşim, görsel kararlılık | Çok yüksek |
| Accessibility | Erişilebilirlik standartları (WCAG) | Yüksek |
| Best Practices | Güvenlik, modern API kullanımı, hatasız konsol | Orta |
| SEO | Tarayıcı ve arama motoru uyumu | Yüksek |
| PWA | Progressive Web App yetenekleri | Düşük (opsiyonel) |

Bir sitenin "Lighthouse skoru 90+" diye anılması için bu beş başlığın en az dördünde 90 üstü puan alması beklenir. PWA çoğu kurumsal site için zorunlu değildir; bu rehberde de PWA'ya kısa değinilip ağırlık Performance ve SEO'ya verilecek.

## En Kritik Kategori: Performance ve SEO

Bütün kategoriler önemlidir ama Google sıralama algoritmasını doğrudan tetikleyen ikisi Performance ve SEO'dur. Erişilebilirlik ve Best Practices dolaylı sinyaller verir; PWA tamamen opsiyoneldir. Stratejik enerji, ilk iki kategoriye odaklanmalıdır.

### Performance Skorunun Ağırlık Dağılımı

Performance skoru tek bir metrik değildir; beş alt metriğin ağırlıklı ortalamasıdır:

| Metrik | Açılımı | Ağırlık |
|--------|---------|---------|
| LCP | Largest Contentful Paint | %25 |
| INP | Interaction to Next Paint | %25 |
| CLS | Cumulative Layout Shift | %25 |
| FCP | First Contentful Paint | %10 |
| TBT | Total Blocking Time | %15 |

LCP, INP ve CLS aynı zamanda Google'ın Core Web Vitals üçlemesidir. Bu üçü doğrudan sıralama faktörüdür. [PageSpeed Insights rehberi](/blog/pagespeed-insights-rehber) yazımızda bu metriklerin alan verisi (CrUX) ile laboratuvar verisi arasındaki farkı detaylandırdık. Hız optimizasyonu organik trafiği tetikledikten sonra büyümeyi sürdürmek için profesyonel bir [sosyal medya ajansı](/sosyal-medya-ajansi) ile sosyal kaynaklı trafiği de bu hızlı altyapıya çekmek hem dönüşüm hem SEO açısından ciddi katkı sağlıyor.

### SEO Skoru Ne Ölçüyor?

SEO kategorisi yapısal denetim yapar: meta etiketler eksik mi, viewport doğru mu, robots.txt erişilebilir mi, link metinleri açıklayıcı mı, hreflang doğru mu. Bu kategori "içerik kalitesi" ölçmez; sadece teknik altyapıyı kontrol eder. Bu yüzden 100 alması görece kolaydır ama dikkatsiz site %70'lerde takılır.

## Core Web Vitals: LCP, INP ve CLS Detaylı Açıklama

Lighthouse skoru 90 hedefinin kalbinde bu üç metrik var. Her birinin kabul edilen eşiği, ortalama pazar değeri ve düzeltme yöntemi farklıdır.

### LCP (Largest Contentful Paint)

LCP, viewport içinde görünen en büyük içerik öğesinin (genelde hero görsel veya başlık bloğu) ekrana çizilme süresidir. Kullanıcının "sayfa açıldı" hissetmesinin teknik karşılığıdır.

- **İyi:** 2.5 saniye altı
- **Geliştirme gerekli:** 2.5 - 4.0 saniye
- **Kötü:** 4.0 saniye üstü

Türkiye'de KOBİ sitelerinin ortalama LCP değeri 4.2 saniyedir, yani çoğu site mevcut haliyle "kötü" segmentindedir. LCP'yi iyileştirmenin en hızlı yolu hero görselini optimize etmek, fontları preload etmek ve render-blocking kaynakları kaldırmaktır.

### INP (Interaction to Next Paint)

INP, 2024'te FID'in (First Input Delay) yerini aldı ve çok daha katı bir metrik. Kullanıcının yaptığı her etkileşim (tıklama, dokunma, klavye girişi) ile sayfanın bir sonraki frame'i çizmesi arasındaki en uzun gecikmeyi ölçer.

- **İyi:** 200ms altı
- **Geliştirme gerekli:** 200 - 500ms
- **Kötü:** 500ms üstü

Ağır JavaScript bundle'ı, çok fazla üçüncü parti script ve main thread bloklayan işlemler INP'yi mahveder. React veya Vue ile yapılmış ama optimize edilmemiş siteler genelde 400-700ms aralığında kalır.

### CLS (Cumulative Layout Shift)

CLS, sayfa yüklenirken görsel öğelerin beklenmedik biçimde kayma toplamıdır. Kullanıcı bir butona tıklamak üzereyken üstten reklam yüklenip yazıyı aşağı itiyorsa o site CLS hatası üretir.

- **İyi:** 0.1 altı
- **Geliştirme gerekli:** 0.1 - 0.25
- **Kötü:** 0.25 üstü

CLS'i düzeltmek görece kolaydır ama çoğu site ihmal eder: görseller için width/height belirtmek, font swap'lerinde fallback boyutu vermek, dinamik içerikler için yer tutucu (placeholder) kullanmak yeterlidir.

## Lighthouse Skoru 90+ İçin 15 Adımlı Kontrol Listesi

Aşağıdaki kontrol listesi PORTZEN'in ürettiği 40+ kurumsal projede ortalama 92-97 arası Lighthouse skoru üretmiştir. Sırasıyla uygulandığında sonuç garantilidir.

| # | Adım | Etkilediği Metrik | Zorluk |
|---|------|-------------------|--------|
| 1 | Görselleri WebP/AVIF formatına çevir | LCP, Performance | Kolay |
| 2 | Tüm görsellere width/height ekle | CLS | Kolay |
| 3 | Hero görseli preload et | LCP | Kolay |
| 4 | Lazy load uygula (fold altı görsellere) | Performance | Kolay |
| 5 | Fontları self-host et ve preload | LCP, CLS | Orta |
| 6 | JavaScript bundle'ını code-split et | INP, TBT | Orta |
| 7 | Üçüncü parti scriptleri ertele | INP, TBT | Orta |
| 8 | CDN (Cloudflare, Vercel Edge) kullan | Tüm metrikler | Orta |
| 9 | HTTP/2 veya HTTP/3 aktif et | Performance | Kolay |
| 10 | Gzip/Brotli sıkıştırma | Performance | Kolay |
| 11 | Critical CSS inline | FCP, LCP | Zor |
| 12 | Tüm görsellere alt text ekle | Accessibility, SEO | Kolay |
| 13 | Renk kontrast oranını 4.5:1 yap | Accessibility | Orta |
| 14 | Meta description, og tags, schema ekle | SEO | Kolay |
| 15 | Konsol hatalarını tamamen temizle | Best Practices | Orta |

Bu listenin ilk 8 adımı uygulandığında çoğu site 60'tan 85'e çıkar. Son 7 adım ise 85'ten 95+ aralığına geçişi sağlar. Kritik nokta sıra: önce performans, sonra erişilebilirlik, sonra SEO ince ayarı.

## Görsel Optimizasyonu: En Büyük Kazanım Burada

Bir web sayfasının toplam ağırlığının ortalama %62'sini görseller oluşturuyor. Yanlış yönetilen görsel, tek başına Lighthouse skorunu 30 puan düşürebiliyor.

### WebP ve AVIF Kullanımı

JPEG ve PNG formatları 30 yıllık. Aynı görsel kalitesini WebP %25-35 daha küçük dosya, AVIF ise %50 daha küçük dosya ile sağlıyor. Tarayıcı desteği 2024 itibarıyla %97+ olduğundan bu formatları kullanmamak için bir gerekçe kalmadı.

E-ticaret butiği örneği: 200 ürünlü bir online butik sitesi, ortalama 800KB JPEG ürün fotoğrafı kullanıyordu. Toplam sayfa ağırlığı 12MB. Aynı görselleri AVIF'e çevirip dinamik boyutlandırma (responsive images) ekledikten sonra ağırlık 2.8MB'a düştü, LCP 4.6 saniyeden 1.9 saniyeye geriledi, Lighthouse Performance skoru 41'den 94'e çıktı.

### Lazy Loading ve Doğru Boyutlandırma

`loading="lazy"` HTML özelliği, görüntü viewport'a yaklaşana kadar görseli indirmemeyi sağlar. Hero görseline ASLA lazy load eklenmemeli (LCP'yi kötüleştirir), ama fold altındaki her görsele eklenmeli.

Aynı şekilde mobil cihaza 1920px genişliğinde görsel göndermek anlamsız. `srcset` ve `sizes` ile her cihaz kendi çözünürlüğünü almalı:

- Mobil: 480w
- Tablet: 768w
- Masaüstü: 1280w
- Retina: 2560w

Bu tek başına LCP'yi yarıya indirebilir.

## JavaScript Bundle Boyutunu Düşürme

INP ve TBT metriklerinin baş düşmanı şişkin JavaScript bundle'larıdır. Ortalama bir React/Vue sitesi 800KB-1.5MB JS yüklerken, optimize edilmiş bir Next.js sitesi 150-250KB ile aynı işi yapabilir.

### Code Splitting ve Tree Shaking

Code splitting, sadece o sayfada kullanılan JS'in yüklenmesini sağlar. Tree shaking ise import edilen ama kullanılmayan kodu otomatik atar. Next.js, Astro, Nuxt gibi modern frameworkler bunları default olarak yapar; WordPress ise yapmaz, manuel optimize etmek gerekir.

### Üçüncü Parti Scriptlerin Yönetimi

Google Analytics, Facebook Pixel, Hotjar, Tag Manager, canlı destek widget'ları... Her biri ayrı ayrı JS yükü ekler. Klinik örneği: özel bir diş kliniği sitesi 14 farklı üçüncü parti script yüklüyordu (analitik, randevu sistemi, chat, pixel, harita, vs.). Toplam blocking time 980ms idi.

Çözüm üç aşamalı yapıldı:
1. Kritik olmayan scriptler `defer` veya `async` ile geciktirildi
2. Chat widget kullanıcı 5 saniye etkileşimsiz kaldıktan sonra yüklenecek şekilde ayarlandı
3. Facebook Pixel ve Hotjar sadece dönüşüm sayfalarına taşındı

Sonuç: TBT 240ms'e düştü, INP 180ms oldu, Lighthouse Performance skoru 58'den 91'e tırmandı.

## CDN ve Edge Hosting Kullanımı

İçeriğinizin sunucusu Frankfurt'ta ise İstanbul'daki kullanıcı her isteğe 80ms latency yiyor. CDN (Content Delivery Network) sayesinde içerik dünya üzerindeki 200+ noktada cache'leniyor ve kullanıcı kendisine en yakın noktadan içeriği alıyor.

### Cloudflare ve Vercel Karşılaştırması

| Özellik | Cloudflare | Vercel |
|---------|-----------|--------|
| Ücretsiz plan | Var (sınırsız trafik) | Var (100GB/ay) |
| Edge sayısı | 300+ | 100+ |
| Türkiye noktası | İstanbul | Frankfurt (en yakın) |
| Static cache | Mükemmel | Mükemmel |
| Image optimization | Polish (ücretli) | Built-in |
| Kurulum | DNS değişikliği | Git push |

Çoğu kurumsal site için Vercel'in built-in image optimization ve otomatik edge cache'i Lighthouse skorunu sıfır manuel iş ile 8-12 puan yukarı çekiyor. Cloudflare ise mevcut sunucunuza dokunmadan önüne CDN koymanızı sağladığı için legacy projelerde tercih edilir.

### Edge Caching Stratejisi

Statik dosyalar (görsel, font, CSS, JS) için cache süresi 1 yıl olmalı. HTML içeriği için 5-60 dakika arası dinamik bir politika tercih edilir. Yanlış konfigürasyon ile blog sayfaları cache'lenmezse her ziyaret server'a iniyor ve hızı çakılıyor. [Mobil site hızı artırma](/blog/mobil-site-hizi-artirma) yazımızda mobil cihazlar için özel CDN ayarlarını daha derin işledik.

## Sektörel Lighthouse Hikayeleri

Her sektörün kendine has darboğazları var. Üç gerçek müşteri örneği üzerinden somut sonuçlar.

### E-Ticaret Butiği: 200 Ürün, 41'den 94'e

Hedef kitlesi 25-40 yaş kadın olan online butik, mobilde haftada 14.000 ziyaret alıyordu ama dönüşüm oranı %0.6 idi. Lighthouse skoru 41. Üç haftalık optimizasyon sonrası:

- Görseller AVIF, lazy load uygulandı
- WordPress'ten Next.js'e migrasyon yapıldı
- Vercel Edge'e taşındı
- Ürün sayfalarında critical CSS inline edildi

Sonuç: LCP 1.7s, INP 140ms, CLS 0.05. Lighthouse Performance 94, SEO 100. Üç ay sonra dönüşüm oranı %2.4'e, aylık ciro 2.8 katına çıktı.

### Diş Kliniği: Randevu Formu Bouncing Rate Sorunu

Bir özel diş kliniği sitesi mobilde %78 bounce rate ile çalışıyordu. Form sayfasına gelen kullanıcılar yüklemeyi beklemeden çıkıyordu. Lighthouse skoru 52, INP 620ms.

Optimizasyon:
- Tüm üçüncü parti scriptler defer edildi
- Form sayfası static export ile dağıtıldı
- Chat widget gecikmeli yükleme
- Font self-host

Sonuç: INP 170ms, Lighthouse 93. Bounce rate %78'den %38'e indi, randevu formu dolum oranı %210 arttı.

### Emlak Ofisi: 1500 İlanlı Site, SEO Skoru 100

Anadolu yakasında orta ölçekli bir emlak ofisi, 1500 aktif ilanlı sitesinde Google'da hiç görünemiyordu. Lighthouse SEO 64, Performance 58.

Yapılanlar:
- Tüm ilanlar için Schema.org RealEstateListing markup eklendi
- Görseller WebP'ye çevrildi
- Sayfalandırma yerine infinite scroll yerine SSG (static site generation) tercih edildi
- Sitemap.xml ve robots.txt yeniden yazıldı

Sonuç: SEO 100, Performance 92. İlk 3 ayda organik trafik %460 arttı, semt bazlı aramaların %70'inde ilk sayfada görünmeye başladı.

## Sık Yapılan 6 Lighthouse Hatası

**1. Sadece masaüstü test etmek.** Lighthouse'un mobil simülasyonu çok daha sıkıdır. Masaüstünde 95 alan site mobilde 60'ta kalabilir. Her zaman mobil moda raporu okuyun.

**2. Tek test sonucuna güvenmek.** Lighthouse her çalıştırmada %5-10 sapma gösterir. En az 5 ölçüm alıp ortalamayı değerlendirin.

**3. PWA için zorlanmak.** Çoğu kurumsal sitenin PWA olmasına gerek yok. Bu kategoriye enerji harcamak yerine Performance'a odaklanın.

**4. SEO skorunu içerik kalitesi sanmak.** Lighthouse SEO sadece teknik kontrol yapar; içeriğinizin Google'da sıralanması ayrı bir disiplindir.

**5. Hero görselini lazy load etmek.** En sık görülen hatalardan. LCP'yi mahveder. Hero görseli her zaman eager yüklenmeli ve preload edilmelidir.

**6. Üçüncü parti script bağımlılığı.** Reklam ağları, eski analitik araçları, ağır chat widget'ları... Bu scriptler optimize edilemezse Lighthouse'da 90 almak matematik olarak imkansız.

## Lighthouse'un Sınırları: Gerçek Kullanıcı Verisi

Lighthouse laboratuvar testidir; gerçek kullanıcı deneyimini birebir yansıtmaz. Google sıralama için **CrUX (Chrome User Experience Report)** verisini kullanır, yani gerçek kullanıcılarınızın tarayıcısından gelen verileri.

### Lab Data vs Field Data

Search Console'daki Core Web Vitals raporu CrUX verisidir. Lighthouse 95 olan bir site, gerçek kullanıcıların yavaş internet veya eski cihaz kullanması nedeniyle CrUX'ta "kötü" görünebilir. Asıl hedef hem Lighthouse hem CrUX yeşil olmalıdır.

### Sürekli İzleme

Bir kerelik optimizasyon yeterli değil. Sitede her güncelleme, her yeni plugin, her içerik ekleme skoru etkiler. Aylık otomatik Lighthouse raporu kurulmalı ve düşüş tespit edildiğinde anında müdahale edilmelidir. Web sitenizin teknik durumundan emin değilseniz [web sitesi olmayan işletmeler ne kaybediyor](/blog/web-sitesi-olmayan-isletmeler-ne-kaybediyor) yazımızdaki maliyet analizine de göz atmanızı öneririz. Site hızı 90+ olduktan sonra trafiği reklamla katlamak için profesyonel bir [Meta reklam ajansı](/meta-reklam-ajansi) desteğiyle hızlı sayfalara doğru kreatif akıtmak en yüksek ROAS getiren kombinasyon.

## PORTZEN ile Lighthouse 90+ Skoru

PORTZEN olarak teslim ettiğimiz her web sitesinin minimum Lighthouse skoru garantisi 90'dır; ortalamamız 94'tür. Bunu sağlamamızın yolu sihirli bir araç değil, ilk günden doğru altyapıyı seçmek: Next.js 15, Sanity CMS, Vercel Edge dağıtımı ve sıkı bir performans bütçesi. Mevcut sitenizin skoru düşükse iki yol var: ya yamayarak iyileştirmek (kısa vadeli, sınırlı kazanç), ya da modern bir altyapıya geçmek (uzun vadeli, yüksek kazanç). Hangisinin sizin için doğru olduğunu birkaç dakikalık denetim sonucu net görüyoruz.

[Web tasarım](/web-tasarim) hizmetimiz kapsamında sadece site teslim etmiyoruz; teslim sonrası 6 ay boyunca aylık Lighthouse, CrUX, Search Console takibi yapıyor, skor düşüşlerini anında düzeltiyoruz. E-ticaret butikleri, klinikler, emlak ofisleri, B2B kurumsal şirketler için ürettiğimiz 40+ projenin tamamı 90+ skorla canlıda çalışıyor. Bu sayede müşterilerimiz hem organik sıralamada üst seviyelere çıkıyor hem de reklam Quality Score'ları yükseliyor, tıklama maliyetleri düşüyor.

Lighthouse skoru bir hedef değil, sürekli izlenen bir sağlık göstergesidir. Sitenizin bugünkü puanını bilmiyorsanız ilk adım ücretsiz bir denetim almak. Sizinle birlikte raporu açıp hangi 5 değişikliğin en hızlı kazanç sağlayacağını gösteriyoruz; uygulamayı kendiniz mi yoksa PORTZEN ile mi yapacağınıza sonra karar verirsiniz.

**Ücretsiz keşif görüşmesi:** [portzenai.com/iletisim](https://portzenai.com/iletisim) — 15 dakikada işletmeniz için uygun yapıyı netleştiririz.
