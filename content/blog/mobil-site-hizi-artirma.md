---
title: "Mobil Site Hızı Nasıl Artırılır? 12 İşe Yarayan Yöntem"
slug: "mobil-site-hizi-artirma"
category: "web-tasarim"
description: "Mobil site hızı nasıl artırılır? WebP, lazy load, CDN, critical CSS, defer JS dahil 12 yöntemle Lighthouse skorunuzu 90+ seviyesine taşıyın."
keywords: ["mobil site hızı", "mobil site hızlandırma", "site hızı optimizasyonu", "lighthouse mobil skor", "WebP görsel", "lazy load", "core web vitals mobil", "pagespeed insights"]
publishedAt: "2026-06-21"
author: "Arda Kaya"
readingTime: "12 dakika"
relatedServices: ["web-tasarim"]
ogImage: "/blog/og/mobil-site-hizi-artirma.png"
---

# Mobil Site Hızı Nasıl Artırılır? 12 İşe Yarayan Yöntem

Mobil site hızı, 2026 itibarıyla bir teknik detay olmaktan çıkıp doğrudan ciroyu belirleyen tek başına en güçlü değişken haline geldi. Google'ın açıkladığı verilere göre mobil bir sayfa 3 saniyenin üzerinde yüklendiğinde ziyaretçilerin **%53'ü** sayfayı terk ediyor; yükleme süresi 1 saniyeden 5 saniyeye çıktığında ise terk oranı **%90'ın** üzerine fırlıyor. Yani site mimarisi ne kadar güzel olursa olsun, hız doğru kurgulanmamışsa kullanıcı içeriği görmeden ayrılıyor. Bu rehberde, Türkiye pazarındaki KOBİ ve orta ölçekli markalar için gerçekten işe yarayan, sahada test edilmiş 12 mobil hızlandırma yöntemini sırayla ele alacağız.

## Mobil Hız Neden Bu Kadar Kritik?

Masaüstü kullanıcısı sabırlıdır. Genellikle iyi bir bağlantıda, oturmuş, dikkatini sayfaya vermiştir. Mobil kullanıcı bunun tam tersi: ayakta, metro istasyonunda, kötü 4G çekiminde, başka uygulamalardan gelip giden bir dikkatle siteye bakıyor. Hız algısı bu yüzden mobilde masaüstüne göre **3 kat daha sert** hissediliyor.

### Sayılarla Mobil Hız Etkisi

| Yükleme Süresi | Terk Oranı | Dönüşüm Etkisi |
|----------------|------------|----------------|
| 1 saniye | %9 | Baz |
| 2 saniye | %17 | -%7 |
| 3 saniye | %32 | -%20 |
| 5 saniye | %90+ | -%50 |
| 7 saniye | %95+ | -%70 |

Bu tablo neden 0.5 saniyelik iyileştirmenin bile gerçek para olarak geri döndüğünü açıklıyor. E-ticarette LCP'yi 4 saniyeden 2.5 saniyeye düşüren bir markanın dönüşüm oranı genellikle **%15-25** arasında artıyor.

### Google'ın Sıralama Algoritmasındaki Yeri

Core Web Vitals 2021'den beri sıralama faktörü, ancak 2024 INP güncellemesiyle bu metrik mobil cihazlarda çok daha sert ölçülüyor. Mobil Lighthouse skoru 50'nin altında olan bir sayfa, Google'ın "page experience" sinyalinde negatif puan alıyor ve aynı içeriği daha hızlı sunan rakibe sıralamayı kaptırıyor. Hızın SEO ile birlikte değerlendirilmesi gerektiğini [Lighthouse skoru 90+ optimizasyon rehberi](/blog/lighthouse-skoru-90-optimizasyon) yazımızda metrik bazında işledik. Mobil hız iyileştikten sonra çok kanallı sosyal trafiği bu hızlı altyapıya çekmek için profesyonel bir [sosyal medya ajansı](/sosyal-medya-ajansi) ile içerik takvimi disiplini kurmak organik dönüşümü katlıyor.

## Önce Ölçüm: PageSpeed Insights ve GTmetrix

Hızı iyileştirmek için önce nereden başladığınızı bilmeniz lazım. Tahminle yola çıkmak, körlemesine yapılan optimizasyonların çoğunlukla yan etki yarattığı için tehlikelidir.

### PageSpeed Insights

Google'ın resmi aracı. Hem laboratuvar (Lighthouse) hem saha (CrUX) verisi sunuyor. Ücretsiz, ek kurulum gerektirmez. LCP, INP, CLS, TTFB ve TBT gibi metriklerin mobil ve masaüstü için ayrı raporlarını verir. PageSpeed'i etkin kullanmanın detayları için [PageSpeed Insights rehberi](/blog/pagespeed-insights-rehber) yazımıza bakabilirsiniz.

### GTmetrix

GTmetrix saha simülasyonunda daha esnek. Farklı şehirlerden, farklı bağlantı hızlarından test yapabiliyorsunuz. Waterfall grafiği özellikle "hangi dosya neyi geciktiriyor" sorusunu cevaplamak için altın değerinde.

### WebPageTest

İleri seviye optimizasyon için olmazsa olmaz. Filmstrip görünümü ile sayfanın milisaniye milisaniye nasıl render edildiğini görüyorsunuz. Üçüncü parti scriptleri ayrıntılı analiz etmek için en güçlü araç.

## 12 İşe Yarayan Mobil Hızlandırma Yöntemi

Bu yöntemler önem sırasına göre dizildi. İlk 6 madde tek başına bir sitenin Lighthouse mobil skorunu **40'tan 85'e** çıkarabiliyor.

### 1. Görselleri WebP veya AVIF Formatına Çevirin

Geleneksel JPEG/PNG görseller bir sitenin ağırlığının ortalama **%60-70'ini** oluşturuyor. WebP, JPEG'e göre %25-35, AVIF ise %50'ye varan boyut tasarrufu sağlıyor — aynı görsel kalitesinde.

Sahadan örnek: İstanbul'da çalıştığımız bir e-ticaret butiği, ana sayfasında 28 JPEG ürün görseliyle 4.8 MB ağırlığındaydı. WebP'ye geçişten sonra aynı sayfa **1.6 MB**'a düştü, LCP 4.2 saniyeden 2.1 saniyeye indi.

| Format | Tipik 1200px Görsel | Tarayıcı Desteği |
|--------|---------------------|-------------------|
| JPEG | 240 KB | %100 |
| PNG | 480 KB | %100 |
| WebP | 145 KB | %97 |
| AVIF | 90 KB | %93 |

Next.js, Astro, Nuxt gibi modern framework'lerde `<Image>` bileşeni dönüşümü otomatik yapar. WordPress için Imagify veya ShortPixel eklentileri tercih edilir.

### 2. Lazy Load: İhtiyaç Olmadan Yükleme

Lazy load, ekrana girmemiş görselleri ve iframe'leri yüklemeyi erteliyor. Mobilde özellikle uzun ürün listeleri, blog grid'leri, alt bölümdeki videolar için kritik.

HTML standardında artık `loading="lazy"` özelliği tüm modern tarayıcılarda destekleniyor. Tek satırla %30-40 ilk yükleme tasarrufu mümkün. Ancak **hero bölümündeki görseller** asla lazy load edilmemeli; aksi takdirde LCP metriği zarar görür.

### 3. CDN (Content Delivery Network) Kullanın

CDN, içeriklerinizi dünyaya yayılmış edge sunuculardan servis ediyor. Türkiye'deki kullanıcı Frankfurt'taki ana sunucunuza değil, İstanbul'daki CDN düğümüne bağlanıyor. TTFB değeri genellikle 700ms'den 80ms seviyesine iniyor.

Popüler CDN seçenekleri:

- **Cloudflare:** Ücretsiz katmanı bile çoğu KOBİ için yeterli
- **BunnyCDN:** Türkiye edge'i ile çok hızlı, aylık 1-5 dolar
- **Vercel Edge:** Next.js siteleri için sıfır konfigürasyon
- **AWS CloudFront:** Kurumsal ölçek için

Antalya'daki bir gayrimenkul ofisinin sitesinde Cloudflare aktive ettikten sonra mobil LCP **3.4s'den 1.9s'ye** indi, bu tek değişiklik organik trafikte 60 günde %22 artış getirdi.

### 4. Critical CSS: İlk Ekrana Özel Stil

Bir web sayfası açıldığında tarayıcı önce CSS'in tamamını indirip işliyor, ondan sonra çizmeye başlıyor. CSS dosyanız 280 KB ise, mobilde bu işlem 600-900ms blokluyor. Critical CSS yaklaşımı, sadece ilk ekrana (above the fold) ait stilleri `<style>` etiketinde inline veriyor, geri kalanı async yüklüyor.

İyi yapılmış bir critical CSS uygulaması, First Contentful Paint metriğini **0.8-1.2 saniye** kısaltıyor. Bu işlem için Critical, Penthouse veya Beasties gibi araçlar var; Next.js ve Astro bu optimizasyonu kutudan çıkar çıkmaz yapıyor.

### 5. JavaScript'i Defer veya Async ile Yükleyin

`<script>` etiketi varsayılan davranışta render'ı bloklar. Yani 200 KB'lık bir JS dosyası tarayıcı tarafından parse edilene kadar kullanıcı boş ekrana bakıyor.

Çözüm:
- **defer:** HTML parse edildikten sonra çalışsın, sıralı kalsın
- **async:** Mümkün olduğunca erken çalışsın, sıra önemli değil

Üçüncü parti scriptler (Google Analytics, Meta Pixel, Hotjar, chat widget'ları) mutlaka `defer` veya `async` ile yüklenmeli. Bir kliniğin web sitesinde 4 üçüncü parti scripti defer ettikten sonra TBT (Total Blocking Time) **1.8s'den 240ms'ye** düştü.

### 6. HTML, CSS, JS Dosyalarını Minify Edin

Minify, dosyalardaki boşlukları, satır sonlarını, yorum satırlarını ve gereksiz karakterleri kaldırıyor. Ortalama tasarruf:

| Dosya Tipi | Tasarruf Oranı |
|------------|----------------|
| HTML | %15-25 |
| CSS | %20-30 |
| JavaScript | %30-50 |

Modern build araçları (Vite, Webpack, esbuild, Turbopack) bu işlemi production build sırasında otomatik yapıyor. WordPress için Autoptimize veya WP Rocket eklentisi yeterli. Manuel optimize edilen bir KOBİ sitesinde toplam sayfa boyutu **1.2 MB'dan 780 KB'a** inebiliyor.

### 7. Gzip veya Brotli ile Sıkıştırma

Sunucudan tarayıcıya giden dosyalar sıkıştırılırsa boyut **%70-85** azalıyor. Gzip neredeyse her sunucuda standart; Brotli ise daha modern ve %15-25 daha iyi sıkıştırma yapıyor.

Cloudflare, Vercel, Netlify gibi platformlarda Brotli zaten aktif. Geleneksel Apache/Nginx sunucularda tek satırlık konfigürasyonla açılır. Sıkıştırma aktif olmadan canlıya çıkmış bir kurumsal site görmek 2026'da hâlâ şaşırtıcı şekilde sık karşılaşılan bir durum; oysa bu tek değişiklik aktarım süresini yarıdan fazla kısaltıyor.

### 8. Cache (Önbellek) Header'larını Doğru Ayarlayın

İlk ziyaret sonrası tarayıcı statik dosyaları (CSS, JS, görsel, font) bilgisayarda saklamalı ki ikinci ziyarette tekrar indirilmesin. Doğru `Cache-Control` header'ları:

- **Statik varlıklar (görsel, font, hash'li JS/CSS):** `max-age=31536000, immutable` (1 yıl)
- **HTML:** `no-cache` veya kısa süre (çünkü içerik değişir)
- **API yanıtları:** Değişkenlik durumuna göre `s-maxage` ile edge cache

Doğru cache stratejisi tekrar eden ziyaretlerde sayfa açılışını **%80-90** hızlandırıyor. Mevcut müşteri tabanı ağırlıklı kurumsal siteler için en büyük kazanım buradan geliyor.

### 9. Yönlendirmeleri (Redirect) Azaltın

Her HTTP yönlendirmesi mobilde ortalama **300-600ms** ek süre ekliyor. Klasik hata zinciri:

`http://site.com` → `https://site.com` → `https://www.site.com` → `https://www.site.com/tr/`

Bu dört adım birlikte mobilde **1.5-2 saniyeye** mal oluyor. Doğru kurulum tek bir 301 yönlendirme ile direkt nihai URL'ye atmalı. Site taşınırken oluşan eski redirect zincirleri özellikle e-ticaret sitelerinde sessiz performans katili olarak duruyor.

### 10. Font Display Swap: Yazı Görünmezliğini Bitirin

Web fontları yüklenirken tarayıcı varsayılan olarak yazıyı gizliyor (FOIT — Flash of Invisible Text). Kullanıcı 1-2 saniye boş arka plana bakıyor.

CSS'te `font-display: swap` kullanıldığında tarayıcı sistem fontuyla yazıyı hemen gösteriyor, web fontu yüklendiğinde değiştiriyor. Bu küçük değişiklik LCP metriğini **300-700ms** iyileştiriyor.

Bonus: Self-host edilmiş font dosyaları (Google Fonts'tan değil, kendi sunucunuzdan servis edilen) hem KVKK/GDPR uyumu hem performans açısından doğru tercih. Font dosyaları WOFF2 formatında olmalı ve preload edilmeli.

### 11. Preconnect ve DNS Prefetch

Üçüncü parti servislerle (Google Tag Manager, Analytics, fonts, CDN) bağlantı kurmak DNS lookup + TCP handshake + TLS negotiation süreci yaşıyor. Bu zincir mobilde **400-800ms** harcanıyor.

`<link rel="preconnect" href="https://fonts.googleapis.com">` etiketi tarayıcıya "bu domain'e bağlantı kuracağız, hazırlığını şimdiden yap" diyor. Sayfa içeriği parse edilirken arka planda bağlantı kuruluyor.

Tipik bir kurumsal sitede 3-4 preconnect etiketi mobil hız skorunu **5-8 puan** artırıyor. Çok fazla preconnect ise tersine yavaşlatır; sadece kritik domainler için kullanılmalı.

### 12. Service Worker ile Offline ve Cache Stratejisi

Service worker, tarayıcıda arka planda çalışan bir script. Tekrar ziyaretlerde sayfayı neredeyse anında açıyor, hatta internet bağlantısı yoksa bile temel sayfaları gösterebiliyor (PWA — Progressive Web App).

İyi yazılmış bir service worker ile tekrar ziyaret yükleme süresi **2.8 saniyeden 0.4 saniyeye** inebiliyor. E-ticaret ve içerik ağırlıklı sitelerde dönüş kullanıcı dönüşümünü ciddi şekilde artırıyor. Workbox kütüphanesi service worker yazımını çok kolaylaştırıyor.

## Optimizasyon Öncesi ve Sonrası: Gerçek Karşılaştırma

Aşağıdaki tablo PORTZEN olarak 2025-2026 arasında optimize ettiğimiz 14 kurumsal sitenin ortalama değişimini gösteriyor.

| Metrik | Önce (Ortalama) | Sonra (Ortalama) | İyileşme |
|--------|------------------|-------------------|----------|
| Mobil Lighthouse | 38 | 92 | +142% |
| LCP | 4.8s | 1.9s | -60% |
| INP | 380ms | 145ms | -62% |
| CLS | 0.26 | 0.04 | -85% |
| TBT | 1.4s | 180ms | -87% |
| Toplam sayfa ağırlığı | 3.2 MB | 980 KB | -69% |
| Organik trafik (90 gün) | Baz | +%47 | +%47 |
| Mobil dönüşüm oranı | Baz | +%28 | +%28 |

Sayılar gösteriyor ki, hız optimizasyonu yalnızca teknik puan kazandırmıyor; doğrudan satış ve müşteri kazanımı sağlıyor.

## Sektörel Örnekler: Hız İyileştirmesinin Pratik Etkisi

### E-Ticaret Butik: 3 Saniye Engelinin Aşılması

Kadıköy'de butik koleksiyonlar satan bir markamızın mobil sitesi Lighthouse 31 puan ve 5.2 saniye LCP ile çalışıyordu. Sepete ekleme oranı %1.8 seviyesindeydi. WebP geçişi, lazy load, critical CSS, defer JS ve Cloudflare CDN aktivasyonu sonrası LCP 1.7 saniyeye düştü, sepete ekleme oranı **%4.3'e** yükseldi. Aynı reklam bütçesiyle aylık ciro 2.4 katına çıktı.

### Klinik: Randevu Formuna Ulaşma Oranı

Bir estetik kliniğin sitesinde randevu formunun bulunduğu sayfa mobilde 6.1 saniyede açılıyordu. Kullanıcıların %62'si forma ulaşmadan ayrılıyordu. Font display swap, üçüncü parti script'leri defer, görselleri WebP'ye geçirme ve preconnect etiketleri sonrası sayfa 2.3 saniyede açılır oldu. Randevu formu tamamlama oranı **%2.1'den %5.7'ye** çıktı.

### Emlak Ofisi: Listeleme Sayfası Performansı

İzmir'de faaliyet gösteren bir gayrimenkul ofisinin listeleme sayfasında 40-50 ilan görseli aynı anda yükleniyor, mobilde sayfa 8 saniye sürüyordu. Lazy load, AVIF formatı, virtual scrolling ve görsel CDN entegrasyonu sonrası sayfa 1.8 saniyede tam interaktif oluyor. İlan detay sayfasına geçiş oranı **%140 artış** kaydetti.

## Yöntem Karşılaştırması: Hangisini Ne Zaman Uygulamalı?

| Yöntem | Zorluk | Kazanç | Uygulama Süresi |
|--------|--------|--------|------------------|
| WebP/AVIF görsel | Kolay | Çok yüksek | 1-3 saat |
| Lazy load | Çok kolay | Yüksek | 30 dakika |
| CDN | Kolay | Çok yüksek | 1-2 saat |
| Critical CSS | Orta | Yüksek | 4-8 saat |
| Defer JS | Kolay | Yüksek | 1-2 saat |
| Minify | Çok kolay | Orta | 30 dakika |
| Sıkıştırma | Kolay | Yüksek | 1 saat |
| Cache header | Orta | Yüksek | 2-3 saat |
| Redirect temizlik | Kolay | Orta | 1-2 saat |
| Font swap | Çok kolay | Orta | 15 dakika |
| Preconnect | Çok kolay | Düşük-Orta | 15 dakika |
| Service worker | Zor | Yüksek | 8-16 saat |

Başlangıçta düşük zorluk + yüksek kazanç oranlı maddeleri (WebP, lazy load, CDN, defer, sıkıştırma, font swap) sırayla uygulamak en hızlı sonucu veren yol.

## Yaygın Hız Optimizasyonu Hataları

**1. Tek bir devasa eklenti ile her şeyi çözmeye çalışmak.** "Tek tıkla site hızlansın" eklentileri çoğunlukla CSS ve JS'i bozuyor, görsel bozuklukları yaratıyor. Manuel ve kontrollü ilerlemek şart.

**2. Test ortamı olmadan canlıda denemek.** Critical CSS veya minify gibi işlemler yan etki çıkarabilir. Staging ortamında test edilmeden canlıya gitmek tehlikeli.

**3. Sadece Lighthouse skoru için optimize etmek.** Skor 100 olabilir ama gerçek kullanıcı deneyimi yine kötü olabilir. Saha verisi (CrUX) ve gerçek kullanıcı testleri (RUM) takip edilmeli.

**4. Görsel kaliteyi aşırı kısarak hız kazanmak.** Markanın görsel itibarı zedelenir. Doğru denge: WebP %80 kalite, görsel kalitesini koruyup boyutu yarıya indirir.

**5. Cache stratejisini düzgün kurmadan optimizasyon yapmak.** Statik dosyalara doğru `max-age` vermeden hız iyileştirmesi yarım kalır.

## PORTZEN ile Mobil Hız Optimizasyonu

PORTZEN olarak mobil hız optimizasyonunu izole bir teknik iş olarak değil, sitenin tüm satış altyapısının bir parçası olarak ele alıyoruz. Bir sitenin Lighthouse skorunu 90'a çıkarmak başlangıç noktası; asıl hedef bu skorun arkasına gerçek dönüşüm kazancını koymak. Bu yüzden hız optimizasyonu projelerimiz analitik takip kurulumu, dönüşüm noktası ölçümü ve A/B test ile birlikte ilerliyor.

Tipik bir hız optimizasyonu projemiz 2-4 hafta sürer ve dört aşamadan oluşur: mevcut durum tespiti (Lighthouse, GTmetrix, WebPageTest, CrUX), önceliklendirme (kazanç/zorluk matrisi), uygulama (12 yöntem + sitenize özel teknikler), ölçüm ve raporlama. Daha köklü bir yenileme planlıyorsanız [web tasarım hizmetimiz](/web-tasarim) çerçevesinde Next.js + Sanity tabanlı modern bir altyapıya geçişin maliyet/fayda analizini birlikte yapıyoruz. Konunun stratejik tarafı için [kurumsal web sitesi rehberi](/blog/kurumsal-web-sitesi-rehberi) yazımızı da incelemenizi öneririz.

Site hızı, ertelenen ama her ay para kaybettiren bir konudur. Mobil ziyaretçinin yarısı 3 saniyede gidiyorsa, reklam bütçenizin yarısı boşa harcanıyor demektir. Doğru kurulduğunda hız optimizasyonu kendisini 30-90 gün içinde fazlasıyla amorti eden bir yatırım. Asıl soru "ne zaman yapacağız" değil, "kaç ay daha kaybedeceğiz" sorusu. Sayfa hızı düzeldikten sonra reklam tarafında da kaybı durdurmak için deneyimli bir [Meta reklam ajansı](/meta-reklam-ajansi) ile mobile-first kreatif yapısı kurmak şart.

**Ücretsiz keşif görüşmesi:** [portzenai.com/iletisim](https://portzenai.com/iletisim) — 15 dakikada işletmeniz için uygun yapıyı netleştiririz.
