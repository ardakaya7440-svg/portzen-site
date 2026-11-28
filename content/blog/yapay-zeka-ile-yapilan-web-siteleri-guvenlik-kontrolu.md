---
title: "Yapay Zekâyla Yapılan Web Siteleri Güvenli mi? Yayına Almadan Önce 12 Kontrol"
slug: "yapay-zeka-ile-yapilan-web-siteleri-guvenlik-kontrolu"
category: "rehber"
description: "Yapay zekâ araçlarıyla hazırlanan web sitelerinde en sık görülen güvenlik açıklarını ve yayına almadan önce yapılması gereken 12 kontrolü anlatıyoruz."
keywords: ["yapay zeka ile site güvenli mi", "vibe coding güvenlik", "ai ile yapılan site riskleri", "api anahtarı web sitesi", "site yayına almadan kontrol"]
publishedAt: "2026-11-28"
updatedAt: "2026-11-28"
author: "Arda Kaya"
readingTime: "8 dakika"
---


# Yapay Zekâyla Yapılan Web Siteleri Güvenli mi? Yayına Almadan Önce 12 Kontrol

**Kısa cevap:** Yapay zekâ ile hazırlanan bir site mutlaka kötü yazılmış olmaz; ancak güvenlik kararları genellikle insan tarafından bilinçli olarak kontrol edilmediğinde sorun çıkar. Yapay zekâ kodu hızlı üretir, ama hangi verinin nerede tutulacağı, kimin neye erişeceği ve hataların nasıl yönetileceği kararlarını ona bırakmak riskli olabilir. Bu yazı, yayına almadan önce yapılacak temel kontrolleri anlatır.

> Bu yazı genel bilgilendirme amacıyla hazırlanmıştır; hukuki ya da teknik güvence değildir. Kendi sisteminiz için uzman görüşü alın.

## Neden risk artıyor?

Yapay zekâ araçlarıyla bir fikri birkaç saatte çalışan bir siteye dönüştürmek mümkün. Sorun şu: çalışan bir site ile güvenli bir site aynı şey değildir. En sık görülen durumlar:

- Gizli anahtarların istemci tarafı koduna gömülmesi,
- Yetkilendirme kontrolünün yalnız arayüzde yapılması,
- Veritabanına doğrudan ve sınırsız erişim,
- Hata mesajlarında iç bilgilerin görünmesi,
- Bağımlılıkların güncel olmaması.

| Risk alanı | Tipik sorun | İlgili kontrol |
|---|---|---|
| Gizli bilgi | API anahtarı tarayıcı koduna gömülü | 1 |
| Erişim | Yetki yalnız arayüzde, sunucuda yok | 2, 3, 10 |
| Veri | Kişisel verinin kontrolsüz tutulması | 9 |
| Süreklilik | Test edilmemiş yedek, izleme yok | 8, 12 |
| Bakım | Eski bağımlılık, eksik başlık | 6, 7 |

## 12 kontrol

1. **Gizli anahtarlar istemci kodunda mı?** Tarayıcıya giden dosyalarda API anahtarı, veritabanı parolası ya da servis anahtarı aramak temel adımdır. Varsa hemen yenileyin ve sunucu tarafına taşıyın.
2. **Yetkilendirme sunucuda yapılıyor mu?** Bir kullanıcının başka kullanıcının verisine erişip erişemediğini sunucu tarafında test edin.
3. **Veritabanı kuralları tanımlı mı?** Her tablo için kimin okuyup yazabileceği açıkça belirlenmiş olmalı.
4. **Giriş formlarında sınır var mı?** Deneme sayısı sınırı, parola kuralları ve oturum süresi.
5. **Hata mesajları sadeleştirildi mi?** Kullanıcıya yalnız gerekli bilgi gösterilmeli; ayrıntı günlüğe yazılmalı.
6. **Bağımlılıklar güncel mi?** Bilinen açıkları taramak için bir güvenlik kontrolü yapılmalı.
7. **HTTPS ve güvenlik başlıkları aktif mi?** HSTS, içerik türü koruması ve çerçeveleme kısıtı gibi başlıklar kontrol edilmeli.
8. **Yedek alınıyor mu ve geri yükleme denendi mi?** Yedek almak yetmez; geri yükleme bir kez gerçekten test edilmeli.
9. **Kişisel veri nerede tutuluyor?** KVKK kapsamında hangi veriyi neden topladığınızı ve ne kadar saklayacağınızı yazılı olarak bilin.
10. **Yönetim paneli herkese açık mı?** Yönetim adresi tahmin edilebilir olmamalı ve iki aşamalı doğrulama içermeli.
11. **Üçüncü taraf entegrasyonlar gözden geçirildi mi?** Her entegrasyonun neye erişim izni olduğu listelenmeli.
12. **Yayın sonrası izleme var mı?** Hata ve anormal erişim için bildirim kurulmuş olmalı.

## Test ortamı olmadan yayın yapmayın

Yayına almadan önce ayrı bir test ortamında aynı kontrolleri yapın. Canlı veriyi test için kullanmayın. Bu, hem güvenlik hem de veri bütünlüğü açısından en basit korumadır.

## Sahiplik ve sorumluluk

Yapay zekâ aracıyla siteyi kuran kişi, sitenin sahibi olarak neyin yayınlandığından sorumludur. Kimin hangi erişime sahip olduğunu, parolaların kimde olduğunu ve yedeklerin nerede tutulduğunu yazılı bir listede tutmak iyi bir alışkanlıktır.

## Sıkça Sorulan Sorular

### Yapay zekâ ile yapılan site hacklenir mi?
Her site hacklenebilir; önemli olan riski azaltmak. Yukarıdaki kontroller yaygın açıkların çoğuna yöneliktir, ama hiçbir kontrol listesi tam güvence vermez.

### Yazılımcı tamamen gereksiz mi?
Hayır. Özellikle yetkilendirme, veri modeli ve yayın sonrası izleme gibi kararlar deneyimli biri tarafından gözden geçirildiğinde güvenlik riski azalır. Bu bir tercih meselesidir; her proje için zorunlu değildir.

### Güvenlik testi ne kadar sürer ve ne kadar tutar?
Kapsama göre değişir; bu yazıda süre ya da fiyat vermiyoruz. Teklif alırken kapsamı (hangi sayfalar, hangi roller, hangi veri) yazılı isteyin.

## Kaynaklar

- OWASP Top 10: https://owasp.org/www-project-top-ten/ (erişim denetimi, kriptografi ve yapılandırma hataları gibi yaygın web risk kategorileri)
- KVKK yükümlülükleri için Kişisel Verileri Koruma Kurumu: https://www.kvkk.gov.tr
- "12 kontrol" listesi genel uygulama pratiğine dayanır; belirli bir platforma özgü değildir.

**Yazar:** Arda Kaya · **Yayın ve son güncelleme:** 28 Kasım 2026

## Sonraki adım

Kontrol listesini kendi projenizde uygulayabilirsiniz. Canlıya almadan önce bir ikinci göz ya da düzenli bakım istiyorsanız [web tasarım hizmetimiz](/web-tasarim) sayfasına ve [yapay zekâ chatbot](/ai-chatbot-turkce) çözümümüze bakabilir, WhatsApp'tan bize yazabilirsiniz.
