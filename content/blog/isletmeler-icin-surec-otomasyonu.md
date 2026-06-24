---
title: "İşletmeler İçin Süreç Otomasyonu: Hangi İşler Otomatikleşmeli?"
slug: "isletmeler-icin-surec-otomasyonu"
category: "otomasyon"
description: "İşletmeler için süreç otomasyonu rehberi: hangi işler otomatikleşmeli, hangi araçlar kullanılmalı, KOBİ'ler için maliyet ve geri dönüş analizi."
keywords: ["süreç otomasyonu", "işletme otomasyonu", "KOBİ otomasyon", "iş süreçleri yönetimi", "n8n make zapier", "otomasyon yazılımları", "RPA Türkiye"]
publishedAt: "2026-06-20"
author: "Arda Kaya"
readingTime: "14 dakika"
relatedServices: ["otomasyon", "ai-bot"]
ogImage: "/blog/og/isletmeler-icin-surec-otomasyonu.png"
---

# İşletmeler İçin Süreç Otomasyonu: Hangi İşler Otomatikleşmeli?

Bir KOBİ sahibi gününün ortalama 3 saat 20 dakikasını "kopyala-yapıştır" tarzı işlere harcıyor. WhatsApp'tan gelen siparişi Excel'e geçirme, e-faturayı muhasebe yazılımına işleme, müşteri listesinden mail çekme, tedarikçiye PDF gönderme... İşletmeler için süreç otomasyonu, tam bu noktada devreye giren ve "bu işi makine yapsın, sen büyük resme bak" diyen disiplin. Doğru kurulduğunda haftada 20-30 saat kazandırıyor, hata oranını sıfıra yaklaştırıyor ve veri akışını şeffaflaştırıyor. Bu yazıda hangi süreçlerin otomatikleştirilmesi gerektiğini, hangilerinin insana bırakılmasının daha mantıklı olduğunu ve KOBİ'lerin bu yolculuğa nereden başlaması gerektiğini somut örneklerle anlatacağım.

## Süreç Otomasyonu Tam Olarak Nedir?

Süreç otomasyonu, tekrar eden ve kural tabanlı işlerin yazılım aracılığıyla insandan bağımsız çalıştırılması demek. Önemli olan "kural tabanlı" kısmı: eğer bir iş net adımlardan oluşuyorsa (X olursa Y yap, Z olursa W yap) otomatikleştirilebilir. Yaratıcılık, yargı, empati gerektiren işler hâlâ insanda kalmalı.

### Otomasyon ile Yapay Zekanın Farkı

Karıştırılan iki kavram. Otomasyon "kural", AI "öğrenme" demek. Bir Zapier akışı "şu form doldurulunca şu Google Sheet'e satır ekle" der — bu otomasyon. Bir AI sistemi "şu müşterinin son 10 mesajına bakıp tonunu çöz" der — bu AI. Modern KOBİ sistemleri ikisini birlikte kullanıyor: AI karar veriyor, otomasyon o kararı uyguluyor.

### RPA, iPaaS ve Workflow Automation

Sektörde üç terim çok geçiyor:

- **RPA (Robotic Process Automation):** UI üzerinden insanı taklit eden botlar (UiPath, Automation Anywhere). Eski sistemlere uygun.
- **iPaaS (Integration Platform as a Service):** API'lerle bağlanan platformlar (Make, Zapier, n8n). KOBİ için en uygun.
- **Workflow Automation:** İş akışı motorları (Monday, Asana automations). Ekip içi süreçler için.

KOBİ'lerin %85'i için iPaaS yeterli. RPA daha kurumsal, daha pahalı.

## Hangi İşler Mutlaka Otomatikleşmeli?

Hemen otomatikleştirilmesi gereken, geri dönüşü en yüksek 10 süreç:

| Süreç | Tipik Süre (Manuel) | Otomatik Sonrası | Kazanç |
|-------|---------------------|------------------|--------|
| Lead karşılama mesajı | 5 dk/lead | 0 sn | %100 |
| Fatura kesme | 8 dk/fatura | 30 sn | %94 |
| Stok güncelleme | 25 dk/gün | 0 dk | %100 |
| Müşteri form → CRM | 3 dk/form | 0 sn | %100 |
| Randevu hatırlatma | 2 dk/randevu | 0 sn | %100 |
| Sipariş onay e-postası | 90 sn/sipariş | 0 sn | %100 |
| Sosyal medya post zamanlaması | 15 dk/post | 2 dk | %87 |
| Müşteri segmentasyonu | 4 saat/ay | 5 dk | %98 |
| Rapor hazırlama | 6 saat/ay | 10 dk | %97 |
| Personel mesai takibi | 30 dk/gün | 0 dk | %100 |

Aylık toplam kazanç ortalama bir KOBİ için **65-85 saat**. Bu, neredeyse yarım kişilik bir maaş demek.

### Müşteri İletişim Süreçleri

İlk hedef her zaman müşteri temas noktaları olmalı çünkü kazanç direkt gelire dönüşüyor:

- WhatsApp / Instagram DM ilk cevap otomatikleştirilmeli
- Form dolduran müşteriye 30 saniyede karşılama maili gitmeli
- Telefon kaçırıldığında SMS ile dönüş notu otomatik atılmalı
- Sipariş alındığında WhatsApp onayı otomatik düşmeli

Bu konuda [WhatsApp AI asistanı nedir](/blog/whatsapp-ai-asistani-nedir) yazımız KOBİ'lere özel akış örnekleri sunuyor.

### Operasyon Süreçleri

Operasyonun arka planı görünmez ama zaman yutan kısım:

- E-fatura, e-arşiv otomatik kesimi (muhasebe yazılımı entegrasyonu)
- Stok düşünce tedarikçiye otomatik sipariş açma
- Kargo takip numarasının otomatik müşteriye gönderilmesi
- Personel maaş bordrolarının otomatik hazırlanması
- Ay sonu kapanış raporlarının PDF olarak yöneticiye düşmesi

### Pazarlama Süreçleri

Pazarlama biriminin %60 zamanı yanlış işlere gidiyor. Otomatikleştirilebilir kısımlar:

- E-bülten gönderimi (segment bazlı)
- Sosyal medya post zamanlama (Buffer, Hootsuite, Metricool)
- Reklam raporlarının haftalık otomatik PDF'e dönüşmesi
- Lead'lerin kaynak bazlı CRM etiketlenmesi
- A/B test sonuçlarının otomatik dashboard'a düşmesi

İçerik üretim ve yayın takvimini otomasyonun beslediği bir [sosyal medya ajansı](/sosyal-medya-ajansi) modelinde, pazarlama ekibi rutin post yükünden kurtulup kampanya stratejisine odaklanabiliyor.

## Hangi İşler İnsanın Elinde Kalmalı?

Otomasyon hevesi bazen mantıksız yerlere kayıyor. Şu işleri **otomatikleştirmeyin**:

**1. Hassas müşteri itirazları.** "Ürün bozuk geldi, çok kızgınım" diyen müşteriyi bot karşılamasın. İnsana yönlendir.

**2. Stratejik karar süreçleri.** Yeni ürün lansmanı, yeni şube açma, iş ortaklığı — bunlar dashboard ile desteklenir ama otomatik karar verilmez.

**3. Yaratıcı içerik üretimi.** AI yardımcı olabilir ama final içeriği bir insan kürasyonundan geçmeli. Marka tonu otomasyona bırakılırsa silikleşir. Reklam ve tanıtım klipleri tarafında [yapay zeka video üretimi](/yapay-zeka-video-uretimi) süreciyle varyasyon üretimi hızlanıyor ama son kürasyon her zaman insan elinde kalmalı.

**4. İK mülakatları.** Adayı bot eleyebilir ama final mülakat insan-insana olmalı.

**5. Kriz iletişimi.** PR krizinde otomatik mesaj yangın büyütür.

Net kural: **Etkileşim ne kadar hassas, ne kadar yargı gerektiriyorsa o kadar insana yakın olsun.**

## Otomasyon Araçları: KOBİ İçin Hangisi?

Pazarda onlarca araç var. KOBİ'ler için en pratik 4 platform:

### n8n: Açık Kaynak, Esnek

Self-hosted çalışabilir, aylık ücret yok. Teknik bilgisi olan veya yardım alan KOBİ'ler için ideal. 400+ entegrasyonu var. WhatsApp, Telegram, Google Workspace, Notion, Airtable hepsiyle konuşuyor. PORTZEN olarak çoğu kurulumda n8n kullanıyoruz çünkü hem hesaplı hem ölçeklenir.

### Make (eski Integromat): Görsel, Güçlü

Drag-drop ile akış kuruyorsunuz. 1000+ uygulama desteği. Aylık 9 dolardan başlıyor. Karmaşık akışlar için en güçlü görsel araç. Türkçe arayüzü yok ama mantığı sezgisel.

### Zapier: Basit, Popüler

En çok bilinen platform. 5000+ entegrasyon. Aylık 19 dolardan başlıyor ama task başına ücret artıyor, ölçek büyüdükçe pahalılaşıyor. Basit "form → e-posta" tarzı akışlar için iyi.

### Pipedream / Workato: Geliştirici Dostu

Code yazabilen ekipler için. Pipedream ücretsiz başlıyor, Workato kurumsal.

| Araç | Başlangıç Ücreti | Karmaşıklık | Ölçeklenme |
|------|------------------|-------------|------------|
| n8n | 0 TL (self-host) | Orta | Mükemmel |
| Make | 9 $/ay | Düşük | İyi |
| Zapier | 19 $/ay | Çok düşük | Pahalı |
| Pipedream | 0 $ | Yüksek | İyi |

## Adım Adım Otomasyon Kurulum Yol Haritası

Bir KOBİ otomasyon yolculuğuna nereden başlamalı? 8 adımlık plan:

### 1. Süreç Envanteri Çıkar

Bir hafta boyunca işletmenizdeki tüm tekrar eden işleri yazın. Kim yapıyor, ne kadar sürüyor, ne sıklıkta tekrar ediyor. Bu liste otomasyon yol haritanızın temeli.

### 2. Önceliklendir: ROI Matrisi

Her süreci iki eksende puanlayın:

- **Zaman kazancı** (1-10)
- **Kurulum kolaylığı** (1-10)

Toplam puanı yüksek olanlar önce. Düşük efor – yüksek getiri olanlar "quick win".

### 3. Entegrasyon Haritası

Hangi sistemler birbiriyle konuşacak? WhatsApp ↔ CRM ↔ Muhasebe ↔ E-ticaret. Bu haritayı çizdiğinizde teknik yapı netleşir.

### 4. Pilot Süreç Seçimi

İlk projede en kolay ve etkili olanı seç. Genelde "form → CRM → karşılama maili" akışı. 2 günde kurulur, ertesi gün etkisi görülür.

### 5. Kurulum ve Test

Akışı kurun, **canlıya almadan önce** en az 20 farklı senaryo ile test edin. Edge case'leri yakalayın.

### 6. Ekip Eğitimi

Otomasyon kurmak yarısı, ekibin benimsemesi diğer yarısı. Her birime ne değiştiğini, nasıl kullanacaklarını, sorun olursa kime danışacaklarını gösterin.

### 7. Monitoring

Akışların çalışıp çalışmadığını izleyen bir dashboard kurun. Bir akış kırıldığında 5 dakika içinde haberiniz olmalı.

### 8. Sürekli İyileştirme

İlk 3 ay her hafta otomasyon performansını gözden geçirin. Hatalı senaryoları temizleyin, yeni süreçleri ekleyin.

## Sektör Örnekleri: Otomasyon Pratikte

### Restoran: Rezervasyon ve Tedarik

3 şubeli bir İtalyan restoranı şu otomasyonları kurdu:

- Instagram DM rezervasyon → AI ile masa kontrolü → onay
- Stoğu biten malzeme → tedarikçiye otomatik WhatsApp siparişi
- Müşteri yorumu (Google, TripAdvisor) → kayıt
- Haftalık satış raporu → işletme sahibine PDF olarak Pazartesi 09:00

Aylık kazanım: 38 saat. Müşteri memnuniyeti %18 arttı çünkü hiç soru cevapsız kalmıyor.

### Hukuk Bürosu: Dosya Yönetimi

12 avukatlı bir hukuk bürosu UYAP entegrasyonu ile şu akışı kurdu:

- Duruşma tarihi UYAP'tan çekiliyor → ilgili avukatın takvimine düşüyor
- Duruşmadan 24 saat önce müvekkile otomatik SMS hatırlatma
- Yeni dosya açılınca müvekkile karşılama maili + sözleşme PDF
- Aylık dosya durumu özeti müvekkillere otomatik gönderiliyor

Sekretere haftada 22 saat zaman kazandırdı. Müvekkil memnuniyeti ölçülebilir şekilde arttı.

### Emlak Ofisi: Lead Yönetimi

İzmir'de 4 ofisli bir emlak şirketi:

- sahibinden.com / hepsiemlak'tan gelen ilanlar → CRM'e otomatik düşüyor
- Yeni lead → segmentlere ayrılıyor (kira/satılık, lokasyon, bütçe)
- Uygun ilan çıkınca → tüm uygun müşterilere WhatsApp ile öneri
- Görüşme sonrası → otomatik geri bildirim formu

Lead'den göstermeye dönüşüm %23'ten %41'e çıktı. [İnstagram'dan müşteri bulma rehberi](/blog/instagramdan-musteri-bulma-rehberi) yazısında da bu sektöre özel taktikler var.

## Otomasyon Maliyetleri ve ROI Hesabı

Bir orta ölçekli KOBİ için tipik otomasyon yatırımı:

| Kalem | Tutar (TL) |
|-------|------------|
| Keşif ve süreç analizi | 8.000 - 15.000 |
| n8n / Make platform kurulumu | 5.000 - 10.000 |
| 8-12 akış geliştirme | 25.000 - 50.000 |
| Entegrasyonlar (CRM, muhasebe, e-ticaret) | 15.000 - 35.000 |
| Test ve eğitim | 5.000 - 10.000 |
| **Toplam kurulum** | **58.000 - 120.000** |
| Aylık bakım / hosting | 2.000 - 5.000 |

ROI hesabı: 65 saat/ay × bir personelin saat ücreti (ortalama 250 TL) = aylık 16.250 TL tasarruf. 100.000 TL'lik bir yatırım 6-7 ay içinde kendini ödüyor. Sonraki her ay net kar.

Bunun yanında ölçülemeyen kazanımlar var: hata azalması, müşteri memnuniyeti, çalışan motivasyonu, karar verme hızı. Bunları para cinsinden ölçmek zor ama etkisi çok büyük.

## Otomasyonun Tuzakları: Sık Yapılan 6 Hata

**1. Bozuk süreci otomatikleştirmek.** Önce süreci optimize edin, sonra otomatikleştirin. Yoksa bozukluğu hızlandırırsınız.

**2. Tek tedarikçi kilidi.** Tüm akışlarınız Zapier'de olursa fiyat artarsa çıkamazsınız. n8n gibi açık kaynak alternatifleri tercih edin.

**3. Hatasız varsayım.** Her otomasyon kırılabilir. Mutlaka monitoring ve fallback olsun. "Akış kırılırsa şu kişiye Slack mesajı gitsin" gibi.

**4. Dokümantasyon eksikliği.** 6 ay sonra "bu akış neden bu mantıkla kurulmuş?" sorusuna cevap bulamazsanız sistem hapsedersiniz.

**5. Aşırı otomasyon hevesi.** Her şeyi otomatikleştirmek değil, doğru şeyleri otomatikleştirmek. İnsan dokunuşunun değerli olduğu noktaları koruyun.

**6. Veri güvenliği ihmali.** Otomasyonlar çoğu sistemle konuşur. KVKK uyumu, API anahtarı yönetimi, log saklama mutlaka düşünülmeli.

## Otomasyon + AI: Yeni Nesil İş Modeli

2024'ten itibaren saf otomasyon yetersiz kalıyor. Yeni nesil sistemler AI ile birleşiyor. Bir örnek:

**Eski otomasyon:** Form gelir → CRM'e satır eklenir → karşılama maili gider.

**AI destekli otomasyon:** Form gelir → AI mesajı analiz eder, niyeti çıkarır, müşteriyi 5 personadan birine sokar → CRM'e zenginleştirilmiş veriyle yazılır → persona bazlı kişiselleştirilmiş karşılama maili gider → 3 gün sonra davranış puanlamasına göre takip akışı tetiklenir.

Bu yeni yapıyı [yapay zeka müşteri hizmetleri](/blog/yapay-zeka-musteri-hizmetleri) yazımızda daha detaylı işledik. Otomasyon kasları, AI ise beyni.

## PORTZEN ile Süreç Otomasyonu: Sıfırdan Sisteme

PORTZEN olarak KOBİ'lere "sadece akış kurmuyoruz", iş süreçlerini baştan tasarlıyoruz. Önce 5-7 günlük bir keşif yapıyoruz: işletmenizdeki tüm tekrar eden işleri haritalandırıyoruz, hangi sistemler birbirleriyle konuşmalı çıkarıyoruz, hangi süreçlerin önce otomatikleştirilmesi gerektiğini ROI'a göre sıralıyoruz.

Sonraki 3-4 hafta içinde n8n veya Make üzerinde sisteminizi kuruyor, mevcut yazılımlarınızla (Logo, Mikro, Netsis, NetGSM, e-ticaret platformları, WhatsApp Business API) entegre ediyor, ekibinize kullanım eğitimi veriyoruz. [Otomasyon Sistemleri](/crm-otomasyonu) hizmetimiz [AI Bot Kurulumu](/whatsapp-ai-asistani) ile birleştiğinde gerçek anlamda "kendi kendine çalışan işletme" deneyimini yaşıyorsunuz.

Sonraki 6 ay boyunca aylık optimizasyon görüşmeleri yapıyor, kırılan akışları izliyor, yeni süreçleri ekliyoruz. Çünkü otomasyon kur-bırak değil, yaşayan bir sistem.

**Ücretsiz keşif görüşmesi:** [portzenai.com/iletisim](https://portzenai.com/iletisim) — 15 dakikada işletmeniz için uygun yapıyı netleştiririz.
