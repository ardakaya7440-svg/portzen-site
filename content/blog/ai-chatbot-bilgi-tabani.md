---
title: "AI Chatbot Nasıl Eğitilir? Bilgi Tabanı Hazırlama Rehberi"
slug: "ai-chatbot-bilgi-tabani"
category: "ai"
description: "AI chatbot bilgi tabanı (knowledge base) hazırlama rehberi. RAG nedir, hangi içerikler eklenir, Türkçe sorunlar nasıl çözülür?"
keywords: ["ai chatbot eğitim", "chatbot bilgi tabanı", "knowledge base hazırlama", "rag nedir", "chatbot training", "ai chatbot türkçe"]
publishedAt: "2026-06-21"
author: "Arda Kaya"
readingTime: "11 dakika"
relatedServices: ["ai-bot"]
ogImage: "/blog/og/ai-chatbot-bilgi-tabani.png"
---

# AI Chatbot Nasıl Eğitilir? Bilgi Tabanı Hazırlama Rehberi

Bir **AI chatbot bilgi tabanı**, botun "neyi nasıl cevaplayacağını" belirleyen veri kaynağıdır. GPT-4 ya da Claude gibi büyük dil modelleri genel bilgiyi biliyor; ama sizin işletmenizdeki iade politikasını, randevu süreçlerini, fiyat aralıklarını, sektör jargonunu bilmiyor. Bilgi tabanı kurmadan bot canlıya çıkarsa **uydurma yanıtlar (hallucination)** vererek müşteri kaybettiriyor. Bu yazıda bilgi tabanı hazırlama adımlarını, RAG (Retrieval-Augmented Generation) mantığını ve Türkçe için kritik ipuçlarını ele alacağız.

## Neden "Sadece GPT" Yetmez?

Genel amaçlı AI modelleri size hava durumunu, tarih bilgisini, yemek tariflerini söyleyebilir. Ama:
- "Bizim eczanede X ilacı var mı?"
- "Sizin klinikte botoks ücreti ne kadar?"
- "Ankara şubeniz pazar açık mı?"

Bu sorulara doğru cevap veremez. **Çünkü bilgi modelin eğitildiği veride yok.** Eğer bot uydurursa müşteri yanlış bilgiyle gelir, hayal kırıklığı yaşar, bir daha gelmez.

Çözüm: **Bilgi tabanı + RAG**.

## RAG Nedir? 30 Saniyede Açıklama

RAG = **Retrieval-Augmented Generation**.

Mantık şöyle: Kullanıcı soru sorduğunda, AI önce sizin bilgi tabanınızdan **alakalı parçaları arıyor** (retrieval), sonra o parçaları kullanarak **yanıt üretiyor** (generation).

```
Müşteri: "Botoks ücreti ne kadar?"
    ↓
RAG sistem: Bilgi tabanında "botoks", "ücret", "fiyat" geçen parçaları bul
    ↓
Bulunan parça: "Botoks fiyatımız 4.500-7.500 TL aralığında, bölgeye göre değişir"
    ↓
AI: Yukarıdaki parçayı kullanarak doğal Türkçe yanıt yazar
    ↓
Müşteri: Doğru, sektörel, makul yanıt alır
```

Bu yapı sayesinde AI **sadece sizin verdiğiniz bilgiyi** kullanır. Uydurmaz.

## Bilgi Tabanı 5 Kaynaktan Beslenir

### 1. SSS (Sık Sorulan Sorular)

İşletmenizin müşteri hizmetlerine en sık gelen 50-100 sorunun cevabı. Genelde personeliniz ezbere bilir, dökmek 1 günde biter.

**İpucu:** Son 3 ay WhatsApp mesajlarınızı tarayın — en sık gelen sorular orada.

### 2. Doküman PDF / Kataloglar

- Fiyat listeniz
- Hizmet kataloğu
- Ürün özellikleri
- Şirket politikaları (iade, kargo, garanti)

PDF'leri olduğu gibi ekleyebilirsiniz — modern RAG sistemleri (LlamaIndex, LangChain) otomatik parse eder.

### 3. Web Sitesi İçerikleri

Site sayfalarınız (hakkımızda, hizmetler, blog yazıları) ham veri olarak çekilir. Sitenizde olan her bilgi bot için erişilebilir hale gelir.

### 4. Eski WhatsApp / E-posta Yanıtları

Personelinizin son 6 ay verdiği yanıtlar — özellikle iyi yanıtlar — bot için altın değerinde. Hem **tonu** hem **doğru cevabı** öğretir.

### 5. Sektör Jargonu Sözlüğü

Eczane için: ITS, e-reçete, kupür, nöbet, mevsimsel ilaçlar  
Hukuk için: müvekkil, dosya, karar, temyiz, ihtarname  
Emlak için: tapu, müstakil, daire planı, fizibilite

Bu terimlerin tanımı + işletmenizdeki kullanımı bot için ayrı bir liste.

## Bilgi Tabanı Hazırlama 5 Adımlı Süreç

### Adım 1: İçerik Toplama (1-2 gün)

Yukarıdaki 5 kaynağı tek klasörde toplayın. PDF, DOC, txt, screenshot — ne varsa.

### Adım 2: Temizleme + Bölme (chunking)

Uzun dokümanları **300-500 kelimelik parçalara** bölün. Çok kısa olursa bağlam kaybolur, çok uzun olursa AI'ın retrieval kalitesi düşer.

### Adım 3: Vektör Veritabanına Yükleme

İçeriği **vektör veritabanına** (Pinecone, Chroma, Qdrant, Weaviate) yüklersiniz. AI artık semantik aramayla "botoks ücreti" sorusu için "fiyat tarifesi" bölümünü bulabilir.

### Adım 4: Test Sorular Yazma + Düzeltme

50-100 test sorusu hazırlayın. Botun yanıtlarını inceleyin:
- Doğru cevap mı? → Onayla
- Yanlış cevap mı? → Bilgi tabanına ekleme yap
- "Bilmiyorum" mu? → İlgili bilgi tabanına eklenmemiş, ekle

İlk hafta günde 20-30 düzeltme yaparsınız, ikinci hafta 5-10'a düşer.

### Adım 5: Canlı + Sürekli Öğrenme

Bot canlıya çıktıktan sonra **her yanlış yanıt** bir öğrenme fırsatı. Aylık olarak:
- Yanıtsız kalan soruları toplayın
- Bilgi tabanına ekleyin
- Eski yanlış bilgileri güncelleyin

## Türkçe AI Chatbot'un 5 Sorunu + Çözümü

### Sorun 1: Sen / Siz Karmaşası
GPT modelleri Türkçe ton seçimini iyi yapamaz. Çözüm: System prompt'ta açıkça **"her zaman 'siz' diliyle hitap et"** komutu verin.

### Sorun 2: Sektör Terimleri
Genel AI "irsaliye"yi "fatura" zannedebilir. Çözüm: Sektör jargonu sözlüğünü mutlaka ekleyin.

### Sorun 3: Eski / Yanlış Bilgi
GPT-4'ün eğitim verisi 2023 sonunda kesilmiş. 2026 KVKK ceza tutarlarını bilmez. Çözüm: Güncel bilgiler için RAG **şart**.

### Sorun 4: Hallucination (uydurma)
"Bilmiyorum" demektense uydurmayı tercih eder. Çözüm: System prompt'ta **"bilmediğin bir şey varsa 'Bu bilgiye sahip değilim, sizi bir yetkiliye yönlendireyim' de"** komutu verin.

### Sorun 5: Yerel Mesafe / Lokasyon
"En yakın eczane nerede?" sorusuna sadece Google Maps API ile cevap verilebilir. Sadece dil modeli yetmez — entegrasyon gerekir.

Bu konuda daha derin teknik bilgi için [AI Chatbot Türkçe](/ai-chatbot-turkce) sayfamıza bakabilirsiniz.

## Hangi Platformla Kuralım?

| Platform | Türkçe | Self-host | RAG hazır | KVKK |
|---|---|---|---|---|
| **OpenAI Assistants** | ✅ İyi | ❌ | ✅ Built-in | ⚠️ (US sunucu) |
| **Anthropic Claude** | ✅ Çok iyi | ❌ | ⚠️ (custom) | ⚠️ (US sunucu) |
| **LangChain + GPT/Claude** | ✅ | ✅ | ✅ | ✅ (sizin sunucu) |
| **Rasa** (Open Source) | ⚠️ Orta | ✅ | ⚠️ | ✅ |
| **Botpress** | ✅ | ✅ | ✅ | ✅ |

PORTZEN olarak biz **LangChain + Claude/GPT karması** kullanıyoruz çünkü KVKK uyumlu, Türkçe kalitesi yüksek, sektör jargonu eğitimine açık. Aynı bilgi tabanı altyapısı Instagram ve Facebook DM'lerine de bağlanabiliyor; bu noktada [sosyal medya ajansı](/sosyal-medya-ajansi) ekibimiz DM otomasyonu ve içerik üretimini bot ile entegre yönetiyor.

## Sık Yapılan Hatalar

**Hata 1: Bilgi tabanını "Hepsini koyalım" diye şişirmek.**  
1.000+ dokümanlı bir bilgi tabanı retrieval kalitesini düşürür. **Az ve odaklı** içerik daha iyi.

**Hata 2: Test yapmadan canlıya almak.**  
İlk hafta 50 test sorusu çevirmeden bot kullanıcıyla buluşmamalı. Yoksa marka itibarı sıfırlanır.

**Hata 3: "GPT bilir" diye sektör bilgisini eklemeyi atlayanlar.**  
GPT bilmez — sizin işletmenizdeki spesifik bilgiyi bilmez. Bilgi tabanı şart.

**Hata 4: Eski yanıtları güncellemeyi unutmak.**  
6 ay önce "ücretsiz danışmanlık" verdiğinizi yazdıysanız ama artık vermiyorsanız bot eski bilgiyle yanıtlar. Aylık review zorunlu.

## PORTZEN ile AI Chatbot Eğitimi

PORTZEN olarak işletmeler için AI chatbot bilgi tabanını **uçtan uca biz hazırlıyoruz**. SSS toplama, dokümanları çıkarma, sektör jargonu listesi, RAG kurulumu, test, canlıya alma — tek bir paket. Sonrası için aylık optimizasyon dahil. Detaylı paketler için [WhatsApp AI Asistanı](/whatsapp-ai-asistani) sayfamıza, sektörünüzde özel kurulumlar için [WhatsApp AI Asistanı + Klinik](/whatsapp-ai-asistani/klinik) gibi sektörel sayfalarımıza bakabilirsiniz.

**Ücretsiz keşif görüşmesi:** [portzenai.com/iletisim](https://portzenai.com/iletisim) — 15 dakikada işletmeniz için uygun bilgi tabanı yapısını birlikte belirleyelim.
