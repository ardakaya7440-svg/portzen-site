---
title: "WhatsApp Business API Nedir, Nasıl Kurulur? Tam Rehber"
slug: "whatsapp-business-api-kurulum"
category: "ai"
description: "WhatsApp Business API kurulumu için tam rehber. Meta onayı, partner seçimi (Twilio/360dialog/Wati), maliyet ve KOBİ için pratik adımlar."
keywords: ["whatsapp business api kurulum", "whatsapp business api nedir", "whatsapp business api fiyat", "whatsapp resmi api", "meta business api", "whatsapp business platform"]
publishedAt: "2026-06-21"
author: "Arda Kaya"
readingTime: "12 dakika"
relatedServices: ["ai-bot"]
ogImage: "/blog/og/whatsapp-business-api-kurulum.png"
---

# WhatsApp Business API Nedir, Nasıl Kurulur? Tam Rehber

**WhatsApp Business API**, Meta'nın işletmelere sunduğu profesyonel kullanım katmanı. Telefonunuza indirdiğiniz WhatsApp Business uygulamasından farklı — bu, sunucu üzerinden çalışan, chatbot ve AI asistanlarına bağlanan, günde binlerce mesaj gönderebilen bir altyapı. KOBİ'den kurumsal markaya kadar her ölçekli işletme için kritik hâle geldi çünkü tek başına "uygulama" artık yetersiz: gelen mesajları otomatik karşılayan, randevu açan, sipariş alan sistemler için **API zorunlu**.

## WhatsApp Business App vs Business API — Fark Nedir?

İki üründü farklı amaçlara hizmet ediyor:

| Özellik | WhatsApp Business App | WhatsApp Business API |
|---|---|---|
| **Kim için?** | Tek kişi, küçük dükkân | İşletme, ekip, otomasyon |
| **Cihaz** | Telefon | Sunucu / bulut |
| **Eşzamanlı kullanıcı** | 1 telefon | Sınırsız |
| **Mesaj limiti** | Düşük | Yüksek (tier sistemli) |
| **Chatbot bağlantısı** | ❌ | ✅ |
| **Yeşil tik (resmi onay)** | ❌ | ✅ (başvuru ile) |
| **Fiyat** | Ücretsiz | Mesaj başı + platform ücreti |

Tek satırla özet: **3+ kişilik bir ekipseniz, otomasyon istiyorsanız, mesaj hacminiz günde 50+'ye çıkıyorsa Business App yetmez.** API'ye geçmek şart.

## API Nasıl Çalışır? Mimari Özet

WhatsApp Business API tek başına kullanılamıyor — **bir partner üzerinden** erişiyorsunuz. Meta'nın resmi olarak onayladığı **Business Solution Provider (BSP)** şirketleri var. Akış şöyle:

1. Müşteri WhatsApp'tan mesaj gönderiyor
2. BSP'nin sunucusu mesajı alıyor
3. Sizin chatbot/CRM/sistem'iniz BSP'ye webhook ile bağlı, mesajı alıyor
4. AI veya kural-bazlı yanıt üretiyorsunuz
5. BSP üzerinden müşteriye yanıt gönderiyorsunuz

Bu yapı sayesinde **anlık mesaj akışı + yüksek hacim + bot entegrasyonu** mümkün oluyor.

## Türkiye'de Hangi BSP'leri Seçeceksiniz?

Türk pazarında pratikte 3-4 ana seçenek var:

### 1. Twilio
- Avantaj: Global lider, doküman çok iyi, geliştirici dostu
- Dezavantaj: USD fiyat ($0.005-0.06 per mesaj), Türkçe destek yok

### 2. 360dialog
- Avantaj: Avrupa merkezli, EUR fiyat, GDPR uyumlu
- Dezavantaj: Türkçe destek kısıtlı, Türk ödeme entegrasyonu yok

### 3. Wati
- Avantaj: KOBİ dostu, hazır chatbot builder, hızlı kurulum
- Dezavantaj: Aylık platform ücreti var ($49+), mesaj başı ek ücret

### 4. Yerel partner (Türk şirket)
- Türk ödeme entegrasyonu (Iyzico, PayTR), TL fiyat
- Türkçe destek
- Dezavantaj: bazıları henüz Meta resmi BSP değil — kontrol edin

PORTZEN olarak biz **360dialog + custom backend** kombinasyonu kullanıyoruz çünkü hem Meta resmi hem de Türk uygulamalarla (Logo, Mikro, Iyzico) entegre edebiliyoruz. Detaylı karşılaştırma için [WhatsApp AI Asistanı nedir?](/blog/whatsapp-ai-asistani-nedir) yazımıza bakabilirsiniz.

## Kurulum Adımları — Adım Adım

### Adım 1: Meta Business Manager Hesabı

[business.facebook.com](https://business.facebook.com) üzerinden ücretsiz açıyorsunuz. Şirket adı, ülke, kategori bilgileri istiyor. **5 dakika**.

### Adım 2: WhatsApp Business Account Oluşturma

Business Manager içinde sol menüden "WhatsApp Accounts" → "Add" yaparak yeni hesap oluşturuyorsunuz. Burada işletme bilgileri (logo, açıklama, kategori) doldurulur.

### Adım 3: Telefon Numarası Doğrulama

**Önemli:** Bu numara sadece API için kullanılacak — kişisel telefonunuzun ayrı olması lazım. Yeni bir SIM veya VoIP numarası alın (Webex, Toky vs).

Doğrulama: SMS veya sesli arama ile 6 haneli kod gelir, sisteme girersiniz. **5 dakika**.

### Adım 4: BSP Seçimi ve Bağlantı

Seçtiğiniz BSP'ye (Twilio, 360dialog, Wati) kayıt olup Meta Business Manager'a bağlıyorsunuz. BSP size **API anahtarı** verir. Bu anahtar ile sisteminizi (chatbot, CRM) bağlayacaksınız.

### Adım 5: Mesaj Şablonu (Template) Onayı

WhatsApp politikası: bot ilk mesajı **şablon mesaj** olarak göndermek zorunda (kullanıcı önceden onay verdiyse). Meta her şablonu manuel onaylıyor — **24-48 saat sürer**.

Örnek şablon: *"Merhaba {{1}}, randevunuz {{2}} tarihine başarıyla oluşturulmuştur. İptal için yanıtlayın."*

### Adım 6: İlk Test Mesajı

Tüm kurulum tamamlandığında BSP panelinden ya da kendi sisteminizden test mesajı gönderebilirsiniz. Başarılı geliyorsa **canlıya almaya hazırsınız**.

Tüm süreç deneyimli birinin elinde **3-5 iş günü** sürer. Acemi biri 2-3 hafta uğraşabilir çünkü Meta onayları gecikebilir, şablon redleri olur, doğrulama hatalarıyla karşılaşırsınız.

## Mesaj Fiyatlandırması — Ne Kadar Tutar?

WhatsApp Business API'nın iki maliyeti var:

### 1. Meta'nın mesaj başı ücreti

Meta, mesajları kategoriye göre fiyatlandırıyor (2026 fiyatları):

| Mesaj türü | Türkiye fiyatı |
|---|---|
| **Service** (kullanıcı sordu, siz yanıtladınız) | $0.005 |
| **Utility** (sipariş onayı, randevu hatırlatma) | $0.010 |
| **Marketing** (kampanya, promosyon) | $0.025 |
| **Authentication** (OTP) | $0.0085 |

### 2. BSP platform ücreti

Her BSP kendi ücretini ekliyor:
- Twilio: $0.005 per mesaj + AWS sunucu maliyetleri (sizin)
- 360dialog: €49/ay + mesaj maliyeti
- Wati: $49-$99/ay + mesaj maliyeti

### Toplam Aylık Maliyet Örnekleri

| Kullanım | Aylık tahmini maliyet |
|---|---|
| 1.000 service + 200 utility mesaj | $20-30 (₺600-900) |
| 5.000 service + 500 utility + 1.000 marketing mesaj | $80-120 (₺2.400-3.600) |
| 20.000+ karma mesaj | $250+ (₺7.500+) |

Bu **sadece Meta + BSP** maliyeti. Üstüne chatbot platformu, AI asistanı, kurulum ve bakım eklenir.

## 24 Saat Kuralı + Şablon Mesaj Zorunluluğu

WhatsApp'ın en önemli politikası: **müşteri size son 24 saat içinde mesaj attıysa serbest yanıt verebilirsiniz; 24 saat geçtiyse sadece onaylı şablon mesaj gönderebilirsiniz.**

Bu sebeple kampanya ya da bilgilendirme mesajları için **şablon onayı şart**. AI bot kurarken bu sınırlamayı baştan tasarlamak gerek — yoksa müşteri mesajına 25. saatte robot yanıt veremiyor.

## Sık Yapılan Hatalar

**Hata 1: Mevcut WhatsApp numaranızı API'ye geçirmek.**  
Geçiş yaparsanız o numaradan **artık telefonla giriş yapamazsınız**. Sıfırdan ayrı bir numara alın.

**Hata 2: Şablon mesajı reddedilmesinin nedenini anlamamak.**  
Meta'nın şablon politikası katı: promosyon içerikli ama "Service" kategorisinde göndermeye çalıştığınız mesajlar reddedilir. Doğru kategoride başvurun.

**Hata 3: BSP'siz API erişimi sanmak.**  
WhatsApp API'ye **mutlaka bir BSP üzerinden** erişiliyor. Meta direkt erişim vermiyor.

**Hata 4: Yeşil tik için başvurmayı atlamak.**  
İşletme adınız doğrulanırsa Meta sizin profilinize "verified" tik veriyor (Twitter/Instagram gibi). Bu tek başına güven artırır.

## API mi, Yoksa Business App mi?

**Business App yeterli, eğer:**
- Günde 50'den az mesaj alıyorsanız
- 1-2 kişilik ekipseniz
- Chatbot ihtiyacınız yok

**API'ye geçin, eğer:**
- Günde 100+ mesaj alıyorsanız
- 3+ kişilik ekip varsa
- AI chatbot, otomatik yanıt, CRM bağlantısı istiyorsanız
- Yeşil tik (resmi onay) önemliyse

## PORTZEN ile WhatsApp Business API: Tam Kurulum

PORTZEN olarak işletmeler için **WhatsApp Business API kurulumunu sıfırdan** üstleniyoruz. Meta onayı, BSP seçimi, şablon hazırlama, bilgi tabanı eğitimi, chatbot bağlantısı — hepsi tek kalemde. Detaylı paketler için [WhatsApp AI Asistanı](/whatsapp-ai-asistani) sayfamıza göz atabilir, [ManyChat alternatifi](/manychat-alternatifi) yazımızda Türk pazarı için neden tercih edildiğimizi okuyabilirsiniz.

Tipik bir KOBİ için kurulum süresi **14 iş günü**, ilk ay deneme dahil aylık ₺8.500'den başlıyor.

**Ücretsiz keşif görüşmesi:** [portzenai.com/iletisim](https://portzenai.com/iletisim) — 15 dakikada işletmeniz için uygun WhatsApp Business API yapısını birlikte netleştirelim.
