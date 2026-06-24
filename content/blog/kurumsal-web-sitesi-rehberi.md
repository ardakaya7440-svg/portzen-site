---
title: "Kurumsal Web Sitesi Rehberi: 2026'da Hangi Özellikler Şart?"
slug: "kurumsal-web-sitesi-rehberi"
category: "web-tasarim"
description: "Kurumsal web sitesi rehberi 2026: hangi özellikler şart, performans, SEO, AI entegrasyonu, mobil optimizasyon ve KOBİ'ler için maliyet analizi."
keywords: ["kurumsal web sitesi", "web sitesi 2026", "kurumsal site özellikleri", "Next.js kurumsal site", "core web vitals", "AI entegrasyonlu web sitesi", "KOBİ web tasarım"]
publishedAt: "2026-06-20"
author: "Arda Kaya"
readingTime: "14 dakika"
relatedServices: ["web-tasarim", "ai-bot"]
ogImage: "/blog/og/kurumsal-web-sitesi-rehberi.png"
---

# Kurumsal Web Sitesi Rehberi: 2026'da Hangi Özellikler Şart?

Bir kurumsal web sitesi artık sadece "şirketinizin online kartviziti" değil; satış yapan, lead toplayan, müşteri eğiten, marka anlatan ve operasyonel sistemlerle konuşan bir dijital varlık. 2026 itibarıyla iyi bir kurumsal web sitesi, 2020'nin standartlarını çoktan geride bıraktı: Core Web Vitals zorunluluğu, AI entegrasyonu beklentisi, mobil-öncelik tasarımı, gerçek zamanlı kişiselleştirme ve sıkı erişilebilirlik kuralları artık opsiyonel değil. Bu rehberde KOBİ ve orta ölçekli şirketlerin 2026'da rekabet etmek için sitelerinde mutlaka bulundurması gereken özellikleri, hangi teknolojilerin tercih edilmesi gerektiğini ve yaygın yapılan tasarım/teknoloji hatalarını derinlemesine ele alacağız.

## Web Sitesinin Değişen Rolü: Kartvizit'ten Satış Motoruna

10 yıl önce bir kurumsal site demek "hakkımızda, hizmetler, iletişim" üç sayfadan ibaretti. Bugün site, satış sürecinizin tam ortasında duruyor. Müşteri Google'da arıyor, sitenize geliyor, içerikleri inceliyor, AI chatbot ile soru soruyor, randevu alıyor, ödeme yapıyor — tüm bu süreç site içinde tamamlanıyor.

### Sitesiz İşletme Görünmez İşletmedir

Google'ın 2025 verilerine göre Türkiye'de bir tüketici satın alma öncesi ortalama **6.4 dijital temas noktası** kontrol ediyor. Bu noktaların 3-4'ü doğrudan web sitenizden, geri kalanı ise [sosyal medya ajansı](/sosyal-medya-ajansi) tarafında yönetilen Instagram, TikTok ve LinkedIn profillerinden geliyor. Sitesi olmayan ya da kötü site sahibi olan KOBİ, müşterinin gözünde "ciddi olmayan" işletme kategorisine düşüyor. [Web sitesi olmayan işletmeler ne kaybediyor](/blog/web-sitesi-olmayan-isletmeler-ne-kaybediyor) yazımızda bu konunun rakamsal etkisini detaylıca inceledik.

### Satış Hunisinin Merkezi

Modern bir kurumsal site bir huni gibi tasarlanır:

- **Üst huni:** Blog, SEO içerikleri (farkındalık)
- **Orta huni:** Hizmet sayfaları, case study'ler (değerlendirme)
- **Alt huni:** Fiyatlandırma, demo talebi, iletişim (karar)

Her aşamada doğru CTA, doğru içerik, doğru hız olmazsa kullanıcı huniden düşer.

## 2026'da Mutlaka Olması Gereken 10 Özellik

Önümüzdeki sıralama "olsa iyi olur" değil, "olmazsa rekabet edemezsiniz" listesidir.

| Özellik | Neden Şart? | Etki Düzeyi |
|---------|-------------|-------------|
| Core Web Vitals geçer puanı | Google sıralama faktörü | Çok yüksek |
| Mobil-öncelik tasarım | Trafiğin %72'si mobilden | Çok yüksek |
| AI chatbot entegrasyonu | Müşteri 7/24 cevap bekliyor | Yüksek |
| HTTPS ve güvenlik sertifikası | Tarayıcı uyarısı, SEO penaltisi | Çok yüksek |
| WCAG 2.1 AA erişilebilirlik | Yasal + kullanıcı tabanını büyütür | Yüksek |
| Yapısal veri (Schema.org) | Zengin sonuç görünümü | Yüksek |
| CMS / kolay içerik yönetimi | Pazarlama hızı | Orta |
| Analitik (GA4 + Hotjar) | Veri olmadan iyileştirme yok | Çok yüksek |
| CRM / lead toplama entegrasyonu | Lead asla kaybolmaz | Yüksek |
| Çok dilli yapı | İhracat & SEO avantajı | Orta |

## 1. Core Web Vitals: Performans Yeni SEO'dur

Google sıralama algoritması 2021'den beri Core Web Vitals'ı (CWV) doğrudan kullanıyor. 2026'da bu metrikler daha da ağırlık kazandı. Üç ana metrik:

### LCP (Largest Contentful Paint)

Sayfanın ana içeriğinin yüklenme süresi. Hedef: **2.5 saniyenin altı**. Bunun üstündeki siteler hem sıralamada düşüyor hem kullanıcıyı kaybediyor. Pazardaki ortalama LCP 3.8 saniye, yani çoğu site sınıfta kalıyor.

### INP (Interaction to Next Paint)

Kullanıcının tıkladıktan sonra sayfanın tepki vermesi. Hedef: **200ms altı**. 2024'te FID yerine INP geldi, çok daha katı bir metrik. Ağır JavaScript'li siteler buradan kalıyor.

### CLS (Cumulative Layout Shift)

Sayfa yüklenirken görsel elemanların kayma miktarı. Hedef: **0.1 altı**. Üstte reklam yüklenince yazının aşağı kayması tipik CLS hatasıdır.

### Performansı Nasıl Yakalanır?

- Next.js veya Astro gibi modern frameworkler tercih edin
- Görseller WebP/AVIF formatında, lazy-load
- Üçüncü parti scriptler minimum (Tag Manager hariç)
- Font dosyaları self-host, preload edilmiş
- Edge CDN kullanın (Cloudflare, Vercel Edge)
- Server-side rendering veya static generation

WordPress hâlâ pazarın %40'ı ama performans için **headless WordPress + Next.js** veya doğrudan Next.js + Sanity/Strapi gibi modern alternatifler tercih edilmeli.

## 2. Mobil-Öncelik Tasarım: Masaüstü Artık Sonra

Türkiye'de web trafiğinin %72'si mobilden geliyor. Bazı sektörlerde (e-ticaret, yemek, eğlence) bu oran %85+. "Önce masaüstünde tasarla, sonra mobile uydur" yaklaşımı 2026'da resmi olarak öldü.

### Mobil Tasarımın Olmazsa Olmazları

- Tıklama hedefleri en az **48x48 piksel** (Apple/Google standartı)
- Font büyüklüğü en az **16px** (mobilde okunabilirlik)
- Hero bölümünde max **3 görsel öğe** (karmaşa olmasın)
- Sticky CTA buton (her sayfada ulaşılabilir)
- Form alanları otomatik klavye tipi (telefon → number pad, e-mail → e-mail klavye)
- One-thumb navigasyon (tek elle gezinilebilir)

### Mobil Performans Özel Dikkat

Mobil cihazların CPU gücü masaüstünün 3-4 katı az. Aynı JavaScript yükü mobilde 3 kat daha yavaş çalışıyor. Mobile özel optimizasyon yapılmazsa CWV puanları çakılıyor.

## 3. AI Chatbot Entegrasyonu: 7/24 Müşteri Hizmetleri

2024 sonrası kullanıcı beklentisi değişti: müşteri site açtığında "siteyi gezeyim" değil "sorumu hemen sorayım" diyor. Sağ alt köşede bir AI bot olmayan kurumsal site artık eksik.

### Chatbot vs AI Chatbot

İkisi farklı. Klasik chatbot (Tidio, Crisp) sadece form veya hazır cevap. AI chatbot (özel kurgulanmış) sitenin tüm içeriğini biliyor, hizmetlerden bahsediyor, randevu açabiliyor, CRM'e lead düşürebiliyor. Fark dağ kadar.

### Site İçi AI Bot Akışı

Tipik bir akış:

1. Kullanıcı 30 saniye sayfada bekledi
2. Bot proaktif açılıyor: "Hangi konuda yardımcı olabilirim?"
3. Kullanıcı "fiyat" yazıyor
4. Bot fiyat sayfasına yönlendiriyor ve özet veriyor
5. Hâlâ soru varsa lead formuna geçiyor
6. CRM'e otomatik düşüyor

Bu yapıyı [WhatsApp AI asistanı nedir](/blog/whatsapp-ai-asistani-nedir) yazısında WhatsApp için anlattık; web için de aynı altyapı kullanılır.

## 4. SEO İçin Yapısal Veri (Schema.org)

Yapısal veri (structured data), Google'a sayfanızın ne içerdiğini "anlatan" gizli kod katmanı. Doğru kullanıldığında arama sonuçlarında **rich snippet** (yıldız, fiyat, fotoğraf, FAQ) çıkıyor ve tıklama oranınız %35-50 artıyor.

### Kurumsal Site İçin Mutlaka Olması Gerekenler

- **Organization schema:** Şirket bilgisi, logo, sosyal hesaplar
- **LocalBusiness schema:** Adres, çalışma saatleri, harita konumu
- **Service schema:** Her hizmet için ayrı
- **Article / BlogPosting:** Blog yazıları için
- **FAQ schema:** SSS sayfaları için
- **Breadcrumb:** Site içi navigasyon yolu
- **Review / AggregateRating:** Müşteri yorumları varsa

JSON-LD formatında head içine eklenir. Sayfa görünümünü etkilemez ama Google'ın anlama hızını uçurur.

### AI Search Optimization

ChatGPT, Perplexity, Claude, Gemini gibi AI arama motorları kaynak olarak yapısal veriyi tercih ediyor. 2026'da AI Search'ten gelen trafik Google'dan gelen trafiğin %25-30'una ulaştı. Yapısal veri olmayan siteler bu kaynaktan görünmez kalıyor.

## 5. Erişilebilirlik (WCAG 2.1 AA): Yasal ve Etik

Avrupa Erişilebilirlik Yasası 2025'te yürürlüğe girdi. Türkiye'de de KVKK çerçevesinde benzer düzenlemeler yolda. Bir e-ticaret veya kurumsal sitenin erişilebilir olmaması artık dava konusu.

### Temel Erişilebilirlik Gereksinimleri

- Tüm görseller için alt text
- Renk kontrast oranı en az 4.5:1 (metin için)
- Klavye ile tam navigasyon (mouse olmadan)
- Form etiketleri (label) ve hata mesajları
- Video içerikler için altyazı
- Ekran okuyucu uyumu (semantik HTML, ARIA etiketleri)
- Tüm interaktif öğeler için focus indicator
- Skip-to-content link

### Pratik Faydası

Erişilebilir site sadece engelli kullanıcıyı değil herkesi memnun eder: yaşlı kullanıcı, kötü gözlük takan kullanıcı, gürültülü ortamda video izleyen kullanıcı, parlak güneşte mobil kullanan kullanıcı. Erişilebilirlik = kalite.

## 6. İçerik Yönetimi: CMS Seçimi

Site bir kere kuruldu, sonra ne olacak? Pazarlama ekibi her hafta blog yazısı eklemek isteyecek, kampanya için yeni sayfa açmak isteyecek. Bu işler için her seferinde geliştiriciye gitmek delilik. CMS şart.

### Kurumsal Site CMS Seçenekleri

| CMS | Avantaj | Dezavantaj | Aylık Maliyet |
|-----|---------|------------|----------------|
| WordPress | Esnek, ucuz, çok eklenti | Performans, güvenlik | 50-500 TL |
| Sanity | Headless, geliştirici dostu | Öğrenme eğrisi | 0-1000 TL |
| Strapi | Açık kaynak, self-host | Sunucu yönetimi | 0-200 TL |
| Webflow | Görsel düzenleme | Kilit, pahalı | 600-3500 TL |
| Contentful | Kurumsal, ölçeklenir | Pahalı | 1500+ TL |

KOBİ'ler için PORTZEN olarak **headless Sanity + Next.js** kombinasyonunu tercih ediyoruz: performans yüksek, içerik düzenleme kolay, ölçeklenebilir.

### İçerik Stratejisi

Site açılışı sonrası 6 ay içinde en az **30 blog yazısı** üretilmeli. SEO görünürlüğü için minimum içerik kütlesi bu. Yoksa site Google'da görünmez kalır.

## 7. Analitik ve Ölçüm: Veri Olmadan İyileştirme Yok

Sitesinin trafiğini bilmeyen KOBİ, gözü kapalı uçak uçuran pilota benzer. 2026'da en az 3 araç birlikte kullanılmalı.

### Olmazsa Olmaz Analitik Stack

- **GA4 (Google Analytics 4):** Trafik, dönüşüm, kullanıcı davranışı
- **Hotjar / Microsoft Clarity:** Heatmap, session recording
- **Google Search Console:** Arama performansı, indexing sorunları
- **Plausible / Fathom:** Privacy-friendly alternatif (KVKK uyumlu)

### Takip Edilmesi Gereken Metrikler

- Aylık organik trafik
- Sayfa başı ortalama süre
- Bounce rate
- Dönüşüm oranı (form, telefon, WhatsApp tıklama)
- En çok ziyaret edilen 10 sayfa
- En yüksek terk oranlı sayfalar

Bu verileri ayda bir gözden geçirip içerik ve UX iyileştirmeleri yapılmalı. Yoksa site canlanmaz.

## 8. CRM ve Lead Toplama Entegrasyonu

Site sadece "form göndersin, mail gelsin" yetersiz. Modern site CRM ile gerçek zamanlı konuşmalı.

### Otomatik Lead Akışı

1. Kullanıcı form doldurur
2. Veri anında CRM'e (HubSpot, Pipedrive, Zoho) düşer
3. Satış temsilcisine Slack/WhatsApp bildirim gider
4. Kullanıcıya otomatik karşılama maili gider
5. 24 saat sonra hatırlatma akışı tetiklenir

Bu akışın detayını [CRM otomasyonu rehberi](/blog/crm-otomasyonu-rehberi) yazısında işledik.

### Form Tasarımı: Az Alan, Yüksek Dönüşüm

Tipik hata: 12 alanlı form. Sonuç: %2 dönüşüm. Doğru tasarım: 3-4 alan (isim, telefon, ihtiyaç açıklaması). Sonuç: %18 dönüşüm.

## 9. Çok Dilli Yapı ve Uluslararası SEO

İhracat yapan veya yapmak isteyen KOBİ için çok dilli site mecburi. Tek sayfa "İngilizce versiyon" değil, ayrı domain veya subdirectory yapısı şart.

### Doğru Çok Dilli Yapı

- `domain.com/tr/` (Türkçe)
- `domain.com/en/` (İngilizce)
- `domain.com/de/` (Almanca)

Her sayfa için **hreflang** etiketi kullanılmalı. Google'a "bu sayfanın İngilizce versiyonu burada" diye söylenmeli. Yoksa duplicate content cezası yenir.

### Yerel SEO

Sadece İstanbul'da hizmet veriyorsanız da yerel SEO şart: Google Business Profile, semt bazlı içerikler, yerel schema. Bu çalışma "İstanbul web tasarım" gibi yerel aramalarda öne çıkarır.

## 10. AI Destekli Kişiselleştirme: 2026'nın Yeni Standardı

2026 itibarıyla statik site fikri ölüyor. Modern site ziyaretçiye göre dinamik içerik gösteriyor:

- İlk gelen kullanıcı vs geri dönen kullanıcı farklı hero görüyor
- Şehir bazlı içerik (İzmir'den gelene İzmir şube bilgisi)
- Geçmiş davranışa göre öneri (önceden hangi hizmete baktıysa öne çıkıyor)
- Saat dilimine göre CTA (mesai saatinde "arayın", mesai dışı "form bırakın")

Bu kişiselleştirme küçük gözükür ama dönüşümü %20-35 artırıyor.

## Web Sitesi Yatırım Maliyeti: KOBİ İçin Gerçek Rakamlar

2026 itibarıyla kurumsal web sitesi pazar fiyatları:

| Paket | İçerik | Tutar |
|-------|--------|-------|
| Şablon site (WordPress) | 5-7 sayfa, tema bazlı | 15.000 - 35.000 TL |
| Özel tasarım (WP) | 8-12 sayfa, custom design | 45.000 - 95.000 TL |
| Headless modern (Next.js) | 10-15 sayfa, CMS, performans | 75.000 - 180.000 TL |
| Kurumsal + AI entegre | Tam paket, CRM, AI bot, SEO | 150.000 - 400.000 TL |

Aylık bakım ortalama 3.000 - 10.000 TL (hosting, güncelleme, içerik desteği).

### Yatırımın Geri Dönüşü

İyi bir kurumsal site aylık ortalama:

- 800-2.500 organik ziyaret getirir (12. ay)
- 40-150 lead toplar
- Bunların 8-30'u müşteriye dönüşür
- Müşteri başı ortalama 5-50 bin TL ciro

Yatırım 6-12 ay içinde geri döner. Sonraki her ay net kar.

## Sık Yapılan 7 Web Sitesi Hatası

**1. Hero'da otomatik video oynatmak.** Performansı öldürür, kullanıcıyı sinirlendirir. Statik görsel veya isteğe bağlı video kullanın; hero için gerekli kısa tanıtım klibini geleneksel çekim yerine [yapay zeka video üretimi](/yapay-zeka-video-uretimi) ile günler içinde hazırlayıp 5 MB altına optimize etmek mümkün.

**2. Çok fazla pop-up.** Aynı anda 3 pop-up gösteren site dönüşümü %40 düşürüyor. Tek, akıllı, zamanlı pop-up.

**3. İletişim sayfasında sadece form.** Telefon, WhatsApp, e-posta, adres, harita — hepsi olmalı. Müşteri kendi tercih ettiği kanaldan ulaşmak istiyor.

**4. Mobilde otomatik açılan menü/chat.** Kullanıcı sayfayı görmeden engelleniyor. Bouncing rate %75'e fırlıyor.

**5. SSS sayfası yok.** Hem SEO için (FAQ schema) hem destek yükü için kritik. Yoksa eklemek 1 günlük iş.

**6. Blog güncellenmiyor.** Son yazısı 2 yıl önceden olan blog, Google'a "bu site terk edilmiş" sinyali veriyor.

**7. Tek dil, tek persona içerik.** B2B müşteri ile B2C müşteri aynı içerikle ikna olmuyor. Persona bazlı sayfalar açın.

## PORTZEN ile Kurumsal Web Sitesi: Sıfırdan Sisteme

PORTZEN olarak kurumsal web sitesi projelerini "site yapımı" değil, **dijital satış altyapısı kurulumu** olarak ele alıyoruz. Tipik projemiz 6-10 hafta sürer ve 4 aşamadan oluşur: keşif & strateji, UI/UX tasarım, geliştirme (Next.js + Sanity headless), entegrasyon (AI bot, CRM, analitik, e-posta otomasyonu).

Site teslim sonrası bitmiyor; sonraki 6 ay aylık SEO içerik üretimi, performans optimizasyonu, A/B test yönetimi sürüyor. [Web Tasarım](/web-tasarim) hizmetimiz [AI Bot Kurulumu](/whatsapp-ai-asistani) ve [Otomasyon Sistemleri](/crm-otomasyonu) ile birleştiğinde gerçek anlamda "kendi başına satış yapan site" deneyimini yaşıyorsunuz. Müşterilerimizde 6. ay sonunda ortalama organik trafik artışı %340, lead dönüşümü %215 oldu.

Kurumsal site kalıcı bir yatırım. Doğru kurulursa 5-7 yıl size hizmet eder. Yanlış kurulursa 18 ayda yenilemek zorunda kalırsınız. Kısa vadeli kararlar yerine doğru altyapıyı seçmek uzun vadede en büyük tasarruf.

**Ücretsiz keşif görüşmesi:** [portzenai.com/iletisim](https://portzenai.com/iletisim) — 15 dakikada işletmeniz için uygun yapıyı netleştiririz.
