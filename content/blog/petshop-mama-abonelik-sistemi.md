---
title: "Petshop Mama Abonelik ve Otomatik Sipariş Sistemi 2026"
slug: "petshop-mama-abonelik-sistemi"
category: "sektorel"
description: "Petshop için mama abonelik ve otomatik sipariş sistemi kurulum rehberi. CRM, WhatsApp onayı, e-ticaret entegrasyonu ve çapraz satış adım adım."
keywords: ["petshop abonelik", "mama abonelik sistemi", "petshop crm", "petshop whatsapp", "petshop e-ticaret", "köpek mama abonelik"]
publishedAt: "2026-06-24"
author: "Arda Kaya"
readingTime: "11 dakika"
relatedServices: ["otomasyon", "web"]
ogImage: "/blog/og/petshop-mama-abonelik-sistemi.png"
---

# Petshop Mama Abonelik ve Otomatik Sipariş Sistemi 2026

Türkiye'de petshop pazarı son beş yılda neredeyse üçe katlandı, ama aynı dönemde bağımsız petshopların pazar payı küçüldü. Sebep belli: müşteri 20 kiloluk Royal Canin çuvalını Trendyol'dan yüzde 15 indirim ve aynı gün teslimatla alıyor, semt petshopuna sadece acil ihtiyaç ve hizmet için uğruyor. Oysa mama, kum ve parazit damlası gibi ürünler düzenli, tahmin edilebilir bir tüketim ritmiyle gidiyor. 25 kiloluk köpek 14 kiloluk mama çuvalını yaklaşık 6 haftada bitiriyor, 5 kiloluk kedi 2 kiloluk paketi 4 haftada tüketiyor. Bu ritmi yakaladığınızda müşterinin pazarlama maliyeti sıfıra düşüyor, yıllık ciro öngörülebilir hale geliyor.

Bu yazıda petshoplar için **mama abonelik ve otomatik sipariş sistemi** nasıl kurulur, hayvan profili ve tüketim hesabı nasıl yapılır, WhatsApp ile sipariş onayı ve değişiklik nasıl yönetilir, çapraz satışla sepet ortalaması nasıl büyütülür adım adım anlatacağız. PORTZEN olarak biz İzmir başta olmak üzere Türkiye genelinde 30+ petshop ve veteriner kliniğine CRM ve abonelik altyapısı kurduk. Aşağıdaki rakamlar ve akışlar sahadan çıktı, teorik değil. Yazının sonunda kendi petshopunuzda hangi modülleri açacağınızı, kurulum maliyetinin hangi kalemlerden oluştuğunu netleştirmiş olacaksınız.

## Petshop İçin Abonelik Modelinin Matematiği

Petshop sahibinin en büyük yanılgısı abonelik sistemini "indirim verip mama satmak" olarak görmesi. Oysa abonelik aslında bir LTV (Lifetime Value) ve retention oyunu. Tek seferlik bir 14 kg Pro Plan çuvalında marjınız yüzde 18-22 bandında olabilir. Aynı müşteri size 12 ay boyunca otomatik sipariş veriyorsa, yıllık brüt ciro 8 katına çıkıyor, lojistik ve kampanya planlanabilir hale geliyor, çapraz satış ürünleri (oyuncak, kum, vitamin, parazit damlası, tasma) sepete kolayca giriyor.

Saha verisine göre bağımsız petshopta aktif aboneye dönüşmüş bir müşterinin 12 aylık LTV değeri tek seferlik müşteriye göre 6-9 katı oluyor. Müşteri kazanım maliyeti (CAC) aynı kalırken gelir katlanıyor, böylece [Meta reklam ajansı](/meta-reklam-ajansi) tarafında harcadığınız her ₺ daha fazla geri dönüyor.

### Abonelik neden marjı düşürmez, yükseltir?

Klasik düşünce: "Yüzde 10 indirim verirsem marj eriyor." Doğru değil. Çünkü:

- Lojistik öngörülebilir: kuryeyi sabit güne yığarsanız teslimat maliyeti düşer
- Stok yönetimi netleşir: hangi marka kaç çuval, hangi hafta lazım, önceden bilinir
- Çapraz satış patlar: her teslimatta kum, vitamin, parazit damlası önerisi sepete giriyor
- İptal düşük: hayvan aynı mamayı yiyorsa müşteri marka değiştirmek istemez

Bu dört kalem bir araya geldiğinde net marj tek seferlik satışı geçiyor.

## Mama Abonelik Akışı: Hayvan Profili ve Doğru Mama Önerisi

Abonelik sistemi sadece "ayda bir mama gönder" demek değil. İyi kurulduğunda müşterinin hayvanına en uygun mamayı öneren, doğru paket boyunu seçen ve tüketim hızını öğrenen bir sistem olması gerekiyor.

### Hayvan profili çıkarma

İlk kayıtta her hayvan için şu bilgiler alınıyor:

- Tür: köpek, kedi
- Irk: Golden, Pomeranian, British Shorthair, Scottish Fold, sokak melezi vb.
- Yaş grubu: yavru (0-12 ay), yetişkin (1-7 yaş), senior (7+)
- Kilo: kg cinsinden
- Kısırlaştırıldı mı: evet/hayır
- Özel durum: hassas mide, alerji, hipoallerjenik, obezite, sterilize formül ihtiyacı
- Tercih edilen marka: Royal Canin, Pro Plan, Brit, Hill's veya marka önerilsin

Bu profil hem mama önerisini hem de tüketim hesabını belirliyor. Örneğin 5 kiloluk kısırlaştırılmış British Shorthair için "Sterilised Adult 2 kg" önerilirken, 30 kiloluk Golden için "Maxi Adult 15 kg" öneriliyor.

### Doğru paket boyu seçimi

Müşteri her zaman en doğru paket boyunu bilmiyor. Çok küçük paket alırsa kg fiyatı artıyor, çok büyük paket alırsa açıldıktan sonra mama tazeliği bozuluyor. Sistem hayvanın günlük tüketim gramajını hesaplayıp ideal paket boyunu öneriyor:

- 5 kg kedi yaklaşık 60-70 gr/gün tüketiyor, 2 kg paket 4-5 haftada bitiyor
- 10 kg küçük ırk köpek yaklaşık 150-180 gr/gün, 3 kg paket 17-20 günde bitiyor
- 25 kg orta ırk köpek yaklaşık 350-400 gr/gün, 14 kg çuval 35-40 günde bitiyor
- 40 kg büyük ırk köpek yaklaşık 500-550 gr/gün, 15 kg çuval 27-30 günde bitiyor

Bu hesaba göre sistem her hayvana özel sipariş periyodu öneriyor.

## Otomatik Tekrar Sipariş: 4 Hafta, 6 Hafta, 8 Hafta

Abonelik sisteminin kalbi otomatik tekrar sipariş motoru. Müşteri "aboneliğe geç" dediğinde sistem geçmiş sipariş gününü ve hayvan tüketim hızını kullanarak bir sonraki teslimat tarihini belirliyor.

### Periyot mantığı

- 4 hafta: küçük kedi ve küçük ırk köpekler, küçük paket boyları
- 6 hafta: orta kedi ve orta ırk köpekler, 7-10 kg paket boyları
- 8 hafta: büyük ırk köpekler, 15 kg çuval

Bu periyotlar hayvanın yaşı değiştikçe (yavru → yetişkin → senior) revize ediliyor. Yavru köpek 6 ayda yetişkine geçtiğinde sistem otomatik olarak "yetişkin formülüne geçiş zamanı" uyarısı veriyor ve müşteriye WhatsApp'tan onay soruyor.

### Akıllı uyarı sistemi

Sistem teslimat tarihinden 5 gün önce müşteriye WhatsApp mesajı atıyor:

- "Pamuk'un Royal Canin Sterilised 2 kg maması 5 gün sonra gönderilecek. Devam etmek istiyor musunuz?"

Müşteri "evet" derse sipariş otomatik geçiyor, ödeme alınıyor, kurye planlanıyor. "Hayır" veya "ertele" derse sistem yeniden takvimliyor. "Marka değiştirmek istiyorum" derse personel devreye giriyor.

Bu akışın detaylarını [petshop CRM otomasyonu](/crm-otomasyonu/petshop) sayfamızda hayvan profili, periyot ayarı ve WhatsApp şablonları örnekleriyle anlattık.

## WhatsApp ile Sipariş Onayı ve Değişiklik

Müşterinin abonelik deneyiminin yüzde 80'i WhatsApp üzerinde yaşanıyor. Çünkü uygulamaya girip ayar değiştirmek yerine bir mesajla işin halledilmesi tercih ediliyor.

### Onay akışı

Teslimat öncesi onay mesajı kısa, net ve hızlı seçimli olmalı:

- "Karamel'in Pro Plan 3 kg maması yarın gönderilecek. ✅ Onayla / 📅 Ertele / 🔁 Değiştir"

Müşteri bir tuş basışıyla yanıt veriyor. Bot her senaryoyu yönetiyor.

### Değişiklik senaryoları

Müşteriler en sık şu üç değişikliği istiyor:

- Mama markası değişimi: "Royal Canin yerine Brit denemek istiyorum"
- Paket boyu değişimi: "3 kg yerine 7 kg paket gönderin, daha sık tükeniyor"
- Periyot değişimi: "6 hafta yerine 4 haftada bir gelsin"

Bot bu üç senaryoyu otomatik anlayıp panele düşürüyor. Personel onayladığında sistem güncelleniyor, müşteriye yeni planın özeti gidiyor. Bu sayede operasyonel yük yüzde 60 azalıyor.

### Yeni hayvan ekleme

Müşterinin yeni bir hayvanı olduğunda WhatsApp üzerinden "Eve yeni bir yavru kedi aldık, ona da abonelik kurmak istiyoruz" diyebiliyor. Bot tür, yaş, kilo bilgilerini topluyor, profil oluşturuyor, uygun mamayı öneriyor.

## CRM Segmentasyonu: Yaş, Mide, Kısırlaştırma, Marka

Petshop CRM'inin gücü segmentasyondan geliyor. Tek tip kampanya göndermek yerine, müşterinin hayvanının özelliğine göre özelleştirilmiş mesaj gönderdiğinizde dönüşüm 3-4 kat artıyor.

### Temel segmentler

- **Yavru sahipleri (0-12 ay)**: aşı takibi, parazit damlası, ödül maması, yavru oyuncak önerisi
- **Yetişkin sahipleri (1-7 yaş)**: ana mama aboneliği, vitamin desteği, diş bakımı
- **Senior sahipleri (7+)**: eklem desteği, light formül, periyodik veteriner kontrol hatırlatma
- **Hassas mide olanlar**: hipoallerjenik mama, sindirim destekleyici, özel formül
- **Kısırlaştırılmış olanlar**: kısırlaştırılmış formül (Sterilised), kilo kontrol mama, light formül
- **Multi-pet evler**: aynı evde birden fazla hayvan, çapraz öneri ve toplu sepet kampanyası

### Segment bazlı kampanya örnekleri

- Yavru sahiplerine: "Bella'nız 4 aylık oldu, ilk parazit damlası zamanı. Sipariş için tıklayın."
- Senior köpek sahiplerine: "Karabaş 8 yaşında, eklem destekli Hill's Mature formülü aboneliğinize eklemek ister misiniz?"
- Hassas mide kedi sahiplerine: "Royal Canin Sensitive serisinde yeni paket boyları geldi, mevcut aboneliğinizi güncellemek ister misiniz?"

Bu segment kampanyaları aylık ciroya yüzde 15-25 ek katkı sağlıyor. CRM ve abonelik altyapısının teknik mimarisini [CRM otomasyonu](/crm-otomasyonu) sayfamızdan inceleyebilirsiniz.

## E-ticaret ve Web Sitesi Entegrasyonu

Abonelik sistemi sadece WhatsApp ve CRM'den ibaret değil. Müşterinin web sitenizi de aktif kullanması gerekiyor. Çünkü ilk kayıt, kart bilgisi girme, hayvan profili oluşturma, sipariş geçmişi görme gibi işlemler web tarafında daha rahat yapılıyor.

### Kategori ve filtreleme

Petshop web sitesinde temel kategori yapısı:

- Köpek: kuru mama, yaş mama, ödül maması, oyuncak, tasma, kıyafet
- Kedi: kuru mama, yaş mama, kum, oyuncak, tırmalama tahtası, kafes
- Kuş: yem, kafes aksesuarı, vitamin
- Kemirgen ve sürüngen: yem, yatak, terraryum
- Sağlık: parazit damlası, vitamin, şampuan, ağız bakımı

Her kategoride marka filtresi (Royal Canin, Pro Plan, Brit, Hill's vb.), yaş grubu filtresi (yavru, yetişkin, senior), özel durum filtresi (hipoallerjenik, sterilize, light) olmalı. Bu filtreleme yapısı dönüşüm oranını yüzde 30-40 artırıyor.

### Sepet ve ödeme akışı

Petshop sepeti sade ve hızlı olmalı:

- Tek sayfada ürün listesi, adres, ödeme
- Abonelik checkbox'ı: "Bu ürünü her 6 haftada bir gönder, yüzde 10 indirim"
- Çapraz satış kartları: "Bu mamayı alanlar şunları da aldı"
- Kart kaydet seçeneği: bir sonraki otomatik siparişte tekrar girmesin

Hangi e-ticaret altyapısının petshop için uygun olduğuna dair detayları [Shopify vs WooCommerce Türkiye](/blog/shopify-vs-woocommerce-turkiye) yazımızdan okuyabilirsiniz. Genel kural olarak orta ve büyük petshoplar için WooCommerce veya özel kodlu Next.js altyapısı, küçük petshoplar için Shopify mantıklı oluyor.

### Mobil uyum

Petshop web sitelerinin trafiğinin yüzde 75'i mobilden geliyor. Mobil deneyim kötüyse dönüşüm yarıya iniyor. [Petshop web tasarımı](/web-tasarim/petshop) sayfamızda referans tasarımları ve dönüşüm odaklı mobil sepet örneklerini görebilirsiniz.

## Çapraz Satış: Oyuncak, Kum, Vitamin, Parazit Damlası, Tasma

Aboneliğin en güçlü tarafı çapraz satış imkanı. Çünkü her teslimatta müşteri "zaten kurye geliyor" mantığıyla ek ürünleri kolayca sepete ekliyor.

### Her hayvan grubuna göre çapraz satış önerileri

**Kedi sahibine her teslimatta:**

- Kedi kumu (5 kg, 10 kg paket)
- Tırmalama tahtası
- Oyuncak fare, oltalı oyuncak
- Yaş mama poşeti (kuru maması yanına)
- Hairball control vitamin

**Köpek sahibine her teslimatta:**

- Ödül maması (eğitim için)
- Çiğneme kemiği
- Tasma, gezdirme ipi
- Şampuan, koku giderici
- Parazit damlası (sezonsal)

**Tüm hayvan sahiplerine:**

- Vitamin ve takviye
- Aşı takip hatırlatması (veteriner yönlendirme)
- Mevsimsel kampanya (yaz: pire-kene; kış: kuru cilt bakımı)

### Çapraz satış otomasyon mantığı

Sistem her teslimat öncesi şu mantıkla çalışıyor:

- Geçmiş sipariş analizi: "Bu müşteri 3 aydır oyuncak almamış"
- Mevsim analizi: "Yaz başladı, parazit damlası önerelim"
- Hayvan yaşı analizi: "Pamuk 7 yaşına girdi, eklem desteği önerelim"
- Stok analizi: "Kedi kumu son siparişten 2 ay geçti, bitmiş olmalı"

Bu dört sinyal birleşince WhatsApp mesajı şu hale geliyor:

- "Pamuk'un mamasıyla birlikte 5 kg kedi kumu ve hairball vitamin de eklemek ister misiniz? Sepet toplamı ₺X olacak."

Bu yapı sepet ortalamasını yüzde 35-50 büyütüyor. Sepet terk eden müşterilere ne tür e-posta zincirleri kurulabileceğini [abandoned cart email şablonları](/blog/abandoned-cart-email-sablonlari) yazımızda detaylandırdık, aynı mantık WhatsApp tarafında da uygulanabilir.

## Maliyet ve Kurulum: Petshop Abonelik Sistemi Ne Tutar?

Petshop abonelik ve otomatik sipariş sisteminin maliyeti, mevcut altyapınıza göre değişiyor. Sıfırdan kurulum ile mevcut sisteme entegrasyon arasında ciddi fark var.

### Kurulum kalemleri ve yaklaşık fiyatlar (2026 ortalama)

- WhatsApp Business API kurulumu ve Meta onay: ₺6.000-12.000 tek seferlik
- CRM ve abonelik motoru (hayvan profili, periyot, ödeme): ₺25.000-60.000 tek seferlik
- E-ticaret entegrasyonu (Shopify/WooCommerce/özel): ₺15.000-50.000 tek seferlik
- Web tasarımı (mevcut yoksa): ₺20.000-70.000 tek seferlik
- Aylık WhatsApp mesaj ve API maliyeti: ₺1.500-5.000 (mesaj hacmine göre)
- Aylık CRM ve abonelik altyapısı bakım: ₺2.500-7.500
- Aylık ödeme komisyonu (iyzico/PayTR): yüzde 1,8-2,5

Orta ölçekli bir petshop için toplam kurulum yaklaşık ₺60.000-120.000 arası, aylık işletme maliyeti ₺5.000-12.000 bandında çıkıyor. Aylık ek ciro 100-300 aktif abone ile ₺80.000-250.000 arasına ulaşabiliyor, yatırım geri dönüşü 3-6 ay sürüyor.

### Aşamalı kurulum

Bütçe tek seferde yeterli değilse aşamalı ilerleyebilirsiniz:

- **Aşama 1 (ay 1-2)**: WhatsApp API + temel CRM + ilk 50 aboneye manuel yönetim
- **Aşama 2 (ay 3-4)**: Otomatik tekrar sipariş motoru + web sitesi entegrasyonu
- **Aşama 3 (ay 5-6)**: Çapraz satış otomasyonu + segment kampanyaları + raporlama

Bu aşamalı yaklaşım nakit akışını korurken sistemi olgunlaştırıyor.

## Sıkça Sorulan Sorular

### Müşteri abonelik istemiyorum derse ne olur?

Hiç sorun değil. Abonelik bir seçenek, zorunluluk değil. Müşteri klasik tek seferlik sipariş geçmeye devam edebilir. Sistem aynı altyapı üzerinde her iki müşteri tipini de yönetiyor.

### Mama markası tükenirse ne yapılıyor?

Sistem stok yazılımıyla entegre çalıştığı için tedarik problemini önceden görüyor. Müşteriye WhatsApp'tan "Royal Canin Sterilised 2 kg stoğumuzda 1 hafta gecikme olabilir, Pro Plan Sterilised veya 1 hafta ertelemek ister misiniz?" sorusu otomatik gidiyor.

### Veteriner kliniğiyle birlikte çalışıyoruz, sistem destekliyor mu?

Evet. Petshop ve veteriner birlikte çalışıyorsa CRM'de aynı müşteri kartında hem ürün hem hizmet geçmişi tutuluyor. Aşı tarihleri, parazit damlası periyotları, mama önerileri tek panelden yönetiliyor.

### Trendyol ve Hepsiburada satışlarımı buraya bağlayabilir miyim?

Pazaryeri entegrasyonları (Trendyol, Hepsiburada, N11) abonelik motoruna doğrudan bağlanmıyor çünkü pazaryeri müşterisi sizin değil, platformun müşterisi. Ancak stok ve sipariş yönetimi tarafında entegrasyon kuruyoruz, böylece envanteriniz tek yerden yönetiliyor.

### Mevcut WooCommerce sitem var, sıfırdan başlamak zorunda mıyım?

Hayır. Mevcut WooCommerce, OpenCart veya Ticimax altyapınızın üzerine abonelik modülü ve CRM bağlıyoruz. Sıfırdan başlamak gerekmiyor, üstüne katman ekliyoruz.

## PORTZEN ile Petshop Abonelik Sistemi Kurmak

PORTZEN olarak biz petshop ve veteriner kliniği projelerinde standart bir paket sunmuyoruz. Önce işletmenizin mevcut altyapısını, müşteri tabanınızı, satılan ana markaları ve hizmet semtinizi inceliyoruz. Sonra hangi modüllerin hangi sırayla açılması gerektiğine birlikte karar veriyoruz.

İlk görüşmede genelde şu soruları soruyoruz:

- Aktif müşteri sayınız ve aylık tekrar eden müşteri oranınız ne?
- WhatsApp'tan günde kaç mesaj alıyorsunuz?
- En çok satan 5 mama markanız ve paket boyunuz hangileri?
- Mevcut web siteniz var mı, hangi altyapıda?
- Veteriner kliniği veya pet otel hizmetiniz var mı?
- Hangi semtlere kurye gönderiyorsunuz?

Bu soruların cevabına göre size 3 aşamalı bir yol haritası ve net bir teklif çıkarıyoruz. Petshopunuz için abonelik ve otomatik sipariş sistemi kurmayı düşünüyorsanız [iletişim](/iletisim) sayfasından bize ulaşabilirsiniz. İlk görüşme ücretsiz, sonrasında size özel bir mimari ve fiyat teklifi hazırlıyoruz. Sistem canlıya alındıktan sonra ilk 3 ay yakın takip ediyor, sipariş akışını ve müşteri geri bildirimlerini birlikte değerlendirip optimizasyon yapıyoruz.
