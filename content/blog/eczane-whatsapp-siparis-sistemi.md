---
title: "Eczane WhatsApp Sipariş Sistemi Nasıl Kurulur? 2026 Rehberi"
slug: "eczane-whatsapp-siparis-sistemi"
category: "sektorel"
description: "Eczaneler için WhatsApp sipariş ve otomasyon sistemi kurulum rehberi. Reçete alımı, OTC sipariş, stok sorgu ve teslimat akışını adım adım anlatıyoruz."
keywords: ["eczane whatsapp otomasyon", "eczane sipariş whatsapp", "eczane whatsapp asistanı", "eczane dijitalleşme", "eczane sipariş sistemi", "whatsapp eczane bot"]
publishedAt: "2026-06-23"
author: "Arda Kaya"
readingTime: "10 dakika"
relatedServices: ["ai-bot", "otomasyon"]
ogImage: "/blog/og/eczane-whatsapp-siparis-sistemi.png"
---

# Eczane WhatsApp Sipariş Sistemi Nasıl Kurulur? 2026 Rehberi

Türkiye'de eczane sayısı 28 binin üzerinde ve neredeyse hepsinin müşterisi aynı soruyu soruyor: "Şu ilaç sizde var mı, ne zaman gelir, kapıya gönderir misiniz?" Bu sorular telefonla geldiğinde eczacının iş akışı kesiliyor, reçeteli müşteri beklerken yanıt veremiyor. WhatsApp'tan geldiğindeyse mesaj kaynıyor, biri yanıt yazmaya başlıyor, müşteri yarım saat sonra cevap alıyor. Sonuç: müşteri başka eczaneye gidiyor, OTC satış kaçıyor, kronik hasta takibi yapılamıyor.

Bu yazıda eczaneler için **WhatsApp sipariş ve otomasyon sistemi** nasıl kurulur, hangi akışlar otomatikleştirilebilir, reçete fotoğrafı geldiğinde ne yapılır, KVKK ve ITS entegrasyonu nasıl çözülür adım adım anlatacağız. Yazının sonunda kendi eczanenizde hangi modülleri açacağınızı netleştirmiş, kurulum maliyetinin hangi kalemlerden oluştuğunu anlamış olacaksınız.

## Eczanede WhatsApp Otomasyonu Hangi Akışları Çözer?

Eczane operasyonu sandığınızdan daha çok mesajlaşma içeriyor. Orta ölçekli bir eczane gün içinde onlarca WhatsApp mesajı alabiliyor. Bu mesajların çoğu tekrar eden sorulardan oluşuyor:

- "X ilaç var mı?" tarzı stok sorgu
- Reçete fotoğrafı gönderip "hazırlar mısınız" talebi
- OTC ürün (vitamin, ağrı kesici, bebek bezi) siparişi
- Kronik hasta tekrarlı reçete takibi
- Çalışma saatleri, nöbet bilgisi, adres

Bu beş kategorinin neredeyse tamamı otomatikleştirilebilir. Eczacı sadece ITS doğrulaması, ilaç hazırlama ve hassas vakalarda devreye giriyor. Bu sayede eczacının telefon ve mesaj yükü belirgin şekilde azalıyor. Yeni müşteri akışını da büyütmek isteyen eczaneler, [Meta reklam ajansı](/meta-reklam-ajansi) desteğiyle Click-to-WhatsApp reklamlarını devreye alarak çevre semtlerden doğrudan sipariş mesajı topluyor.

### Klasik akışta neden tıkanıyor?

Tek bir personel WhatsApp'ı açıp mesajları okuyor, eczacıya "X ilaç var mı" diye soruyor, eczacı stoktan bakıyor, personel cevabı yazıyor. Bu zincir bir kişi için bile sürdürülebilir değil. Üstelik akşam ve nöbet saatlerinde mesajlar birikiyor, sabah yığılma oluşuyor.

## WhatsApp Business API mi, Business App mi?

Eczane gibi günlük 50+ mesaj alan bir işletme için **WhatsApp Business App yetersiz**. Tek telefonda çalışıyor, bot bağlanmıyor, otomatik yanıt sınırlı. Profesyonel bir sipariş sistemi için **WhatsApp Business API** şart.

API ile şunlar mümkün oluyor:

- Birden fazla operatör aynı numarayı kullanabiliyor
- Chatbot ve AI asistanı bağlanabiliyor
- Stok yazılımı ile entegrasyon yapılabiliyor
- Mesaj şablonu (template) ile toplu bilgilendirme gönderilebiliyor
- Resmi işletme hesabı doğrulaması için başvurulabiliyor (onay Meta'nın kararına bağlıdır)

API kurulumunun teknik detayları için [WhatsApp Business API kurulum rehberi](/blog/whatsapp-business-api-kurulum) yazımıza bakabilirsiniz. Eczane özelinde Meta onay sürecinde "sağlık" kategorisi seçildiğinde ek belge istenebiliyor, bunu kuruluma başlarken hazır tutmak süreç hızlandırıyor.

## Eczane WhatsApp Asistanı: Modül Modül Akış

Bir eczane WhatsApp asistanını altı ana modül üzerine kuruyoruz. Tümünü aynı anda açmak zorunda değilsiniz, ihtiyaca göre kademeli devreye alabilirsiniz.

### 1. Karşılama ve menü yönlendirme

Müşteri ilk mesaj attığında bot kısa bir karşılama yapıyor ve ne yapmak istediğini soruyor:

- 1: Reçete gönder
- 2: İlaç stok sorgula
- 3: Sipariş ver (OTC)
- 4: Çalışma saatleri ve nöbet
- 5: Müşteri temsilcisi

Bu menü AI destekli olduğunda müşteri rakam yazmak zorunda kalmıyor, "B12 vitamini var mı" derse direkt stok sorguya yönlendiriliyor.

### 2. Reçete alımı ve ön hazırlık

Müşteri reçete fotoğrafı gönderdiğinde bot şu adımları atıyor:

- Fotoğrafı kayıt altına alıyor
- TC kimlik son 4 hane ve doğum yılı istiyor (açık rıza alınarak)
- "Reçeteniz alındı, hazır olduğunda bilgi vereceğiz" mesajı gönderiyor
- Eczacının paneline reçete fotoğrafı + müşteri bilgileri düşüyor

Eczacı reçeteyi hazırladığında tek tıkla "Hazır, gelebilirsiniz" mesajı gidiyor. Müşteri eczaneye geldiğinde beklemek zorunda kalmıyor.

### 3. OTC ve serbest satış siparişi

Reçetesiz ürünlerde (vitamin, ağrı kesici, bebek ürünü, kozmetik) bot doğrudan sipariş alabiliyor:

- Ürün adını yazıyor
- Bot stok yazılımından kontrol ediyor
- Stoktaysa fiyat ve adet soruyor
- Teslimat: kapıda, kuryeyle, gelip alma seçenekleri sunuyor
- Ödeme: havale, IBAN, link ile kart ödemesi

### 4. Stok sorgu

"Aspirin 500 mg var mı?" gibi sorularda bot eczane stok yazılımına bağlanıp anlık cevap veriyor. Net 100, Farmasoft, Bilge gibi yazılımlarla entegrasyon kuruyoruz. Stokta yoksa "yarın gelecek" veya alternatif öneriyor.

### 5. Kronik hasta tekrarlı reçete takibi

Tansiyon, diyabet, kolesterol hastaları gibi her ay aynı ilacı kullananlar için bot otomatik hatırlatma gönderiyor: "Sayın Ahmet Bey, geçen ay aldığınız Coraspin'iniz bitiyor olabilir, yeni reçete ister misiniz?" Bu özellik, ilacı biten hastanın başka eczaneye gitmeden önce hatırlatılmasını sağlıyor.

### 6. Nöbet ve çalışma saati bilgisi

Akşam saatlerinde sık sorulan "açık mısınız" sorusuna bot anlık cevap veriyor. Nöbetçi olunduğu günlerde otomatik bilgilendirme yapıyor.

## KVKK ve ITS Uyumu: Eczane İçin Kritik Konu

Eczane sağlık verisi işlediği için KVKK kapsamında hassas veri kategorisinde. WhatsApp asistanı kurarken şu noktalar kritik:

- **Açık rıza**: İlk mesajda kullanıcıdan veri işleme onayı alınmalı
- **Veri saklama süresi**: Reçete fotoğrafları yasal süre dışında silinmeli
- **Veri minimizasyonu**: Sadece gerekli alanlar (TC son 4 hane, telefon) toplanmalı
- **ITS entegrasyonu**: Reçete satışı yapılacaksa İlaç Takip Sistemi üzerinden ilerlenmeli, bot karekod doğrulamasını eczacıya bırakmalı

KVKK detayları için [KVKK müşteri verisi rehberi](/blog/kvkk-musteri-verisi-rehberi) yazımız konuya ayrıntılı giriyor. Eczane özelinde ek olarak Türk Eczacılar Birliği'nin elektronik iletişim yönergesini de takip etmek faydalı.

## Maliyet ve Kurulum Adımları

Piyasada bir eczanenin tam donanımlı WhatsApp sipariş sistemi için beklenen maliyet kalemleri:

- WhatsApp Business API başvuru ve onay: ücretsiz, 5-10 gün
- BSP (Business Solution Provider) aylık ücreti: 800-2.500 TL
- Mesaj başı ücret (servis sohbeti): yaklaşık 0.05-0.15 TL
- Bot ve AI altyapısı kurulumu: tek seferlik 25.000-60.000 TL
- Stok yazılımı entegrasyonu: tek seferlik 8.000-20.000 TL
- Aylık bakım ve içerik güncelleme: 2.500-5.000 TL

PORTZEN'de bu kurulum AI müşteri asistanı paketleriyle yapılır: {{fiyatlar:ai-musteri-asistani}} (KDV hariç; Meta mesaj ücretleri hariç). Stok yazılımı bağlantısı gerekiyorsa tek seferlik iş otomasyonu paketleriyle ({{fiyatlar:is-otomasyonu}}) kurulur. Detaylı bilgi için [WhatsApp AI Asistanı eczane sayfasına](/whatsapp-ai-asistani/eczane) bakabilirsiniz.

Kurulum adımları (teslim süresi kapsama göre teklifte yazılı olarak belirtilir):

- 1. adım: API başvurusu, BSP onayı, stok yazılım entegrasyonu
- 2. adım: Bot akışlarının yazılması, eczacıyla özel ürün listesi hazırlığı
- 3. adım: Test, eczacı eğitimi, canlıya alma

## Kurulumdan Sonra Neler Değişir?

WhatsApp asistanı kurulduktan sonra ilk aylarda izlenmesi gereken değişimler:

- Telefon trafiği (rutin sorular WhatsApp'a ve otomatik yanıtlara kayar)
- OTC satışlar (özellikle akşam ve hafta sonu gelen talepler)
- Kronik hastaların düzenli geri dönüşü
- Eczacının günlük "ekran arkası" iş süresi
- Müşteri memnuniyeti anketlerinde "ulaşılabilirlik" puanı

Bu metrikleri kurulum öncesi değerlerle karşılaştırmak, eczane gibi marjı dar bir işletmede sistemin gerçek katkısını net gösterir.

## Sıkça Sorulan Sorular

**Eczanede WhatsApp asistanı reçeteyi onaylayabilir mi?**
Hayır. Reçete onayı ve karekod doğrulaması yasal olarak eczacıya ait. Bot sadece reçete fotoğrafını alıyor, müşteri bilgilerini topluyor ve eczacının paneline iletiyor. Onay ve satış eczacı tarafından yapılıyor.

**KVKK açısından risk var mı?**
Doğru kurulduğunda risk minimumda. Açık rıza alınmalı, veri sadece gerekli süre saklanmalı, BSP ile veri işleme sözleşmesi imzalanmalı. PORTZEN olarak kurulumda açık rıza ve aydınlatma adımlarını akışa ekliyoruz; metinlerin hukuki içeriğinin eczanenin kendi hukuk danışmanınca onaylanması önerilir.

**Eczane stok yazılımıma entegre olur mu?**
Net 100, Farmasoft, Bilge, Logo, Mikro gibi yaygın yazılımlarla entegrasyon yapıyoruz. Sizin yazılımınız listede yoksa API olup olmadığını kontrol ediyoruz, yoksa manuel stok yükleme paneli sunuyoruz.

**Çalışanım WhatsApp'a bakmıyor mu artık?**
Tam tersi: çalışan sadece bota geçmeyen, gerçekten insan müdahalesi gereken mesajlara bakıyor. Tekrar eden 100 mesajı sıfırdan yazmak yerine 10 önemli mesaja kaliteli cevap veriyor.

**Birden fazla şubem var, tek sistem olur mu?**
Olur. Şubelere göre numaralandırma ve yönlendirme yapılıyor. Merkezi panelden tüm şubelerin mesajları yönetilebiliyor.

## PORTZEN ile Eczane İçin WhatsApp Sipariş Sistemi Kurmak

Eczanenizde tekrar eden mesaj yükünü azaltmak, OTC satışı artırmak ve kronik hasta sadakatini güçlendirmek istiyorsanız PORTZEN olarak biz tam paket çözüm sunuyoruz: WhatsApp Business API kurulumu, stok yazılımı entegrasyonu, KVKK gerekliliklerini dikkate alan bot akışları, eczacı eğitimi ve aylık bakım. Daha geniş otomasyon ihtiyaçlarınız için [iş süreçleri otomasyonu](/blog/isletmeler-icin-surec-otomasyonu) ve [CRM otomasyonu rehberi](/blog/crm-otomasyonu-rehberi) yazılarımız da yol gösterici olabilir.

Eczaneniz için özel kurulum teklifi almak ve mevcut iş akışınıza uygun modülleri konuşmak için [iletişime geçin](/iletisim). İlk görüşmede biz sizin günlük mesaj hacminizi, stok yazılımınızı ve hedeflerinizi anlıyoruz, ardından net bir teklif sunuyoruz.
