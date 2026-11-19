---
title: "ROAS, CPA, CPL, CTR Nedir? Reklam Metrikleri Sözlüğü ve Hesaplama"
slug: "reklam-metrikleri-roas-cpa-cpl"
category: "rehber"
description: "ROAS nedir, nasıl hesaplanır? CPA, CPL, CPC, CPM, CTR ve dönüşüm oranı formülleri, örnek hesaplar ve hangi metriğe göre karar verilmesi gerektiği."
keywords: ["roas nedir", "roas hesaplama", "cpa nedir", "cpl nedir", "ctr nedir", "cpm nedir", "reklam metrikleri"]
publishedAt: "2026-11-19"
author: "Arda Kaya"
relatedServices: ["sosyal-medya"]
---

# ROAS, CPA, CPL, CTR Nedir? Reklam Metrikleri Sözlüğü ve Hesaplama

**Kısa cevap:** **ROAS**, reklama harcanan her 1 TL'nin kaç TL ciro getirdiğini gösterir (ROAS = reklamdan gelen ciro ÷ reklam harcaması). **CPA**, bir dönüşümün (satış, randevu) maliyetidir. **CPL**, bir potansiyel müşterinin (form, mesaj) maliyetidir. **CPC** tıklama başı, **CPM** bin gösterim başı maliyettir. **CTR** ise reklamı görenlerin yüzde kaçının tıkladığıdır. Karar verirken en alttaki metriğe bakın: tıklama değil müşteri, ciro değil kâr.

*Son güncelleme: Kasım 2026*

## Metrikler ve Formüller

| Metrik | Açılımı | Formül | Ne anlatır? |
|---|---|---|---|
| CPM | Bin gösterim başı maliyet | Harcama ÷ Gösterim × 1.000 | Kitleye ulaşmanın fiyatı |
| CTR | Tıklama oranı | Tıklama ÷ Gösterim × 100 | Reklamın ilgi çekiciliği |
| CPC | Tıklama başı maliyet | Harcama ÷ Tıklama | Trafiğin fiyatı |
| CR | Dönüşüm oranı | Dönüşüm ÷ Tıklama × 100 | Sayfanın veya sohbetin ikna gücü |
| CPL | Potansiyel müşteri başı maliyet | Harcama ÷ Lead | Form veya mesajın fiyatı |
| CPA | Edinme / eylem başı maliyet | Harcama ÷ Dönüşüm | Müşterinin veya satışın fiyatı |
| ROAS | Reklam harcamasının getirisi | Ciro ÷ Harcama | Reklamın ciro verimi |
| ROI | Yatırım getirisi | (Kâr − Maliyet) ÷ Maliyet | Gerçek kârlılık |

## Örnek Hesap: E-ticaret

Bir mağaza ayda 10.000 TL reklam harcıyor.

- Gösterim: 400.000 → CPM = 10.000 ÷ 400.000 × 1.000 = **25 TL**
- Tıklama: 5.000 → CTR = %1,25, CPC = **2 TL**
- Satış: 100 → dönüşüm oranı = %2, CPA = **100 TL**
- Ciro: 50.000 TL → ROAS = 50.000 ÷ 10.000 = **5** (veya %500)

Bu iyi mi? Kâr marjına bağlı. Brüt marj %30 ise 50.000 TL ciro 15.000 TL brüt kâr demektir. 10.000 TL reklam düşüldüğünde 5.000 TL kalır. Marj %15 olsaydı aynı ROAS ile zarar ederdiniz.

## Başabaş ROAS

Reklamın zarar etmediği minimum ROAS, kâr marjınıza bağlıdır:

**Başabaş ROAS = 1 ÷ brüt kâr marjı**

| Brüt marj | Başabaş ROAS |
|---|---|
| %20 | 5,0 |
| %30 | 3,3 |
| %40 | 2,5 |
| %60 | 1,7 |

Bu hesaba kargo, iade ve ödeme komisyonu gibi giderleri eklemeyi unutmayın.

## Örnek Hesap: Hizmet İşletmesi

Bir klinik ayda 8.000 TL harcıyor, 100 WhatsApp sohbeti alıyor, bunlardan 25'i randevuya dönüşüyor.

- CPL (sohbet başı) = 8.000 ÷ 100 = **80 TL**
- Lead'den randevuya dönüşüm = %25
- CPA (randevu başı) = 8.000 ÷ 25 = **320 TL**

Ortalama tedavi değeri 3.000 TL ise reklam açıkça kârlıdır. Burada dikkat edilmesi gereken nokta: Platform sadece CPL'i gösterir. CPA'yı görmek için randevuları kendi kayıtlarınızda veya CRM'de takip etmeniz gerekir.

## Hangi Metriğe Göre Karar Verilmeli?

| Soru | Bakılacak metrik |
|---|---|
| Reklam görselim ilgi çekiyor mu? | CTR, video izlenme oranı |
| Kitleme ulaşmak pahalı mı? | CPM |
| Sayfam veya sohbetim ikna ediyor mu? | Dönüşüm oranı |
| Bir müşteri bana kaça geliyor? | CPA |
| Reklam ciro getiriyor mu? | ROAS |
| Reklam para kazandırıyor mu? | ROI, kâr |

**En sık hata:** Düşük CPC'ye bakıp kampanyayı başarılı saymak. Ucuz tıklama, satış getirmiyorsa pahalıdır.

## Platformlarda Bu Metrikler Nerede?

- **Meta Reklam Yöneticisi:** Sütunlar > Özelleştir > "Sonuç başı maliyet", "Satın alma ROAS'ı", "Bağlantı tıklaması CTR". Satın alma ROAS'ının doğru çalışması için Pixel'de değer gönderilmeli. Bkz. [Pixel rehberi](/blog/meta-pixel-conversions-api-kurulumu).
- **Google Ads:** "Dön./maliyet" (ROAS karşılığı), "Maliyet/dön." (CPA), "TO" (CTR), "Ort. TBM" (CPC). Bkz. [dönüşüm takibi rehberi](/blog/google-ads-donusum-takibi).

## Sıkça Sorulan Sorular

### İyi bir ROAS kaçtır?

Tek bir iyi ROAS yoktur. Brüt kâr marjınıza göre başabaş ROAS'ı hesaplayın. Hedefiniz bunun üzerinde olmalı.

### CPA ile CPL farkı nedir?

CPL bir potansiyel müşterinin (form, mesaj) maliyetidir. CPA ise hedeflenen asıl eylemin (satış, randevu) maliyetidir. Hizmet işletmelerinde CPL'den CPA'ya geçişi sizin satış süreciniz belirler.

### CTR düşükse ne yapmalıyım?

Reklam öğesini değiştirin: ilk saniye, başlık ve görsel. Kitle çok genişse ilgisiz kişiler görüyor olabilir. Ama düşük CTR'li bir reklam yüksek dönüşüm getiriyorsa onu kapatmayın.

## Rakamları Birlikte Okuyalım

Reklam raporları kalabalık. Önemli olan iki üç metriği doğru takip etmek. PORTZEN, [reklam yönetimi](/meta-reklam-ajansi) müşterilerine her ay CPA ve ROAS odaklı sade bir rapor sunar. Bütçenizi planlamak için [reklam bütçesi nasıl belirlenir](/blog/reklam-butcesi-nasil-belirlenir) yazısına da bakabilirsiniz.
