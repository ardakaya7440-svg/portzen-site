---
title: "Restoran QR Menü ve Online Sipariş Entegrasyonu: Tam Rehber"
slug: "restoran-qr-menu-online-siparis"
category: "sektorel"
description: "Restoranınız için QR menü, online sipariş ve WhatsApp rezervasyon entegrasyonu nasıl kurulur? Paket servis akışı, ödeme bağlantısı ve maliyet rehberi."
keywords: ["restoran qr menü", "restoran online sipariş", "qr menü sistemi", "restoran web sitesi", "paket servis otomasyonu", "restoran whatsapp rezervasyon"]
publishedAt: "2026-06-23"
author: "Arda Kaya"
readingTime: "11 dakika"
relatedServices: ["web-tasarim", "ai-bot"]
ogImage: "/blog/og/restoran-qr-menu-online-siparis.png"
---

# Restoran QR Menü ve Online Sipariş Entegrasyonu: Tam Rehber

Bir restoran işletmecisinin bugünkü gerçekliği yıllar öncesine hiç benzemiyor. Müşteri masaya oturduğunda artık fiziksel menü beklemiyor, telefonunu çıkarıp QR kodu okutmayı bekliyor. Eve gelen sipariş yandexgo, getir veya trendyol yemek üzerinden değil, çoğu zaman direkt restoranın WhatsApp'ından geçiyor. Rezervasyon arayan müşteri sizi Google'da bulduktan sonra Instagram'ı kontrol ediyor, web siteniz varsa oradan menüye bakıyor, sonra WhatsApp'tan yer ayırtıyor. Bu süreçlerin hepsi birbirine **bağlı** olduğunda restoran sahibi geceleri rahat uyuyor. Bağlı olmadığında ise müşteri kayboluyor, mutfak yanlış sipariş hazırlıyor, gün sonunda hesap tutmuyor. Bu rehberde restoran için **QR menü ve online sipariş** entegrasyonunu sıfırdan kurmanın tüm adımlarını, teknoloji seçimini, maliyetleri ve sahada işe yarayan uygulamaları anlatacağız.

## Restoranda Dijital Dönüşüm Neden Ertelenemez?

Türkiye'de bir restoranın günlük müşteri akışını üç ana kanala ayırmak mümkün: masa servisi, paket servis, rezervasyon. Pandemi sonrası bu üç kanalın hepsi dijitalleşmiş durumda. Müşterinin %78'i masaya oturmadan menüye Google'dan bakıyor. Paket servis siparişlerinin %65'i yemek sepeti, Getir Yemek gibi aracılar yerine direkt restoran üzerinden geçirilmek isteniyor. Rezervasyonların %82'si telefonla değil WhatsApp ve Instagram DM üzerinden alınıyor.

Buna rağmen pek çok restoranın **dijital altyapısı dağınık**. Menü, Word dosyası olarak masada duruyor. QR kod var ama linkler kopuk. Web sitesi varsa bile menü güncellenmiyor, fiyatlar geçen sezona ait. Instagram'a düşen rezervasyon mesajları bazen 4 saat sonra görülüyor.

Sonuç: müşteri başka restorana gidiyor, mevcut müşteri "hocam fiyat değişmiş, bilgi yok" diye şikayet ediyor, paket servis siparişleri yanlış adrese çıkıyor. Çözüm tek tek değil, **entegre** bir sistemde.

### QR Menü: Sadece Bir Link Değil, Bir Strateji

QR menü deyince akla ilk gelen, masanın üzerine yapıştırılan basit bir karekod ve onun açtığı PDF dosyası. Bu yöntem 2020-2021'de işe yarıyordu, bugün eksik kalıyor. Modern QR menü:

- Mobile uyumlu, hızlı yüklenen bir web sayfası açar (PDF değil).
- Kategorize edilmiştir: ana yemekler, başlangıçlar, içecekler, tatlılar ayrı bölümler.
- Yemeklerin fotoğrafları ve açıklamaları vardır.
- Allerjen bilgileri, kalori bilgisi (gerekirse) görünür.
- Sipariş tuşu olabilir, müşteri masadan WhatsApp'a sipariş geçer.
- Tek tıkla rezervasyon, telefon, yol tarifi linkleri içerir.

Bu yapı standart bir [restoran web tasarımı](/web-tasarim/restoran) projesinin temel parçasıdır. Ayrı bir QR menü hizmeti almak yerine, web sitenizin altına entegre etmek hem maliyet hem yönetim açısından çok daha mantıklıdır.

## Online Sipariş Sistemi: Direkt Sizden Almanın Yolu

Yemek Sepeti, Getir Yemek, Trendyol Yemek gibi platformlar pratik ama komisyonları %15-25 arasında. 100 TL'lik bir sipariş için ortalama 20 TL'yi platforma veriyorsunuz. Aylık 1.000 sipariş alan orta ölçekli bir restoran, bu komisyonlara aylık 20.000 TL ödüyor.

Direkt online sipariş sistemiyle bu komisyonun büyük bölümünden tasarruf edersiniz. Sistem şöyle çalışır:

1. Müşteri restoranınızın web sitesine giriyor (Google'dan, Instagram bio'sundan veya QR menü üzerinden).
2. Sepet oluşturup adres giriyor.
3. Ödeme yapıyor (kapıda nakit, kapıda kart veya online).
4. Sipariş doğrudan mutfağa düşüyor (yazıcıdan çıkıyor veya tablette görünüyor).
5. Kuryeye atanıyor.
6. Müşteri kurye konumunu takip ediyor (opsiyonel).

Bu yapıyı kurarken üç kritik bileşen vardır: hızlı çalışan web sitesi, ödeme entegrasyonu (iyzico, Paytr, Param), mutfak/kurye paneli.

### Ödeme Entegrasyonu Seçimi

Türkiye'de en yaygın 3 ödeme altyapısı: iyzico, Paytr, Param. Üçü de güvenli, üçünün de komisyonu benzer (%1,5-2,5 + 0,25 TL işlem başına). Restoran tarafında en pratik kullanılanı **iyzico**. WooCommerce, Shopify, özel yazılım, her şeyle entegre olur. Sanal POS başvurusu birkaç gün sürer, evrak işi minimal.

Kapıda ödeme opsiyonu da mutlaka olmalı. Türkiye'de paket servis siparişlerinin yaklaşık %40'ı hala kapıda ödeniyor (yarısı nakit, yarısı kart). Bu opsiyonu sunmayan restoran müşteri kaybediyor.

## WhatsApp Rezervasyon ve Sipariş Akışı

Restoranlarda WhatsApp, sipariş ve rezervasyon kanalı olarak Instagram ve telefondan daha aktif. Buna rağmen pek çok restoran WhatsApp'a düşen mesajları toplu liste halinde sabaha kadar bekletiyor.

WhatsApp AI asistanı bu sorunu çözüyor. Müşteri yazdığı an cevap veriyor, rezervasyon takvimini kontrol ediyor, paket servis siparişini menüye göre alıyor, ödeme linki gönderiyor. Sıkça karşılaşılan akışlar:

- **Rezervasyon:** "Bu akşam 4 kişilik yer var mı?" → AI takvime bakar, müsait saatleri sıralar, müşteri seçer, rezervasyon açılır, mutfağa bilgi gider.
- **Paket servis:** "Adana kebap 2 porsiyon, ayran ve künefe alabilir miyim?" → AI menüyü teyit eder, adres ister, ödeme linki gönderir, mutfağa sipariş düşer.
- **Menü sorusu:** "Vegan menünüz var mı?", "Glutensiz pizza yapıyor musunuz?" → AI menü bilgisinden cevap verir, şefe sormaya gerek kalmaz.
- **Çalışma saatleri:** "Pazar açık mısınız, kaça kadar?" → AI günün durumunu bildirir, ramazan, bayram gibi özel günlerde özel program varsa onu da söyler.

Bu yapı için [restoran WhatsApp AI asistan hizmetimizi](/whatsapp-ai-asistani/restoran) inceleyebilirsiniz. Konunun teknik altyapısı için [WhatsApp AI asistanı nedir](/blog/whatsapp-ai-asistani-nedir) yazımız faydalı olacaktır.

### Rezervasyon Yoğunluğu ve Çift Kayıt Sorunu

Manuel rezervasyon takibinin en büyük sorunu **çift kayıt**. Sabah biri WhatsApp'tan rezervasyon alır, akşam başka biri telefondan aynı masayı verir. Çakışma akşam servisinde patlar, müşteriden özür dilenmek zorunda kalınır.

AI asistan rezervasyonları tek bir takvime yazıyor. Sahibinin telefonundan, ofis temsilcisinin bilgisayarından, mutfaktan, kasadan, hepsinden aynı takvim görülüyor. Çakışma fiziksel olarak imkansız hale geliyor.

Cuma ve cumartesi akşamları gibi yoğun zamanlarda AI **bekleme listesi** de yönetiyor. Tüm masalar dolduysa müşteriye "Saat 20.00 dolu ama 21.30'a çıkarsanız müsait" diyor veya "İptal olursa size haber verelim mi?" diye soruyor. Bekleme listesindeki kişiler iptal anında otomatik bilgilendiriliyor.

## QR Menü Teknolojisi: Statik mi, Dinamik mi?

QR menü kurulumunda iki yol var:

**Statik QR (PDF tabanlı):** Menünüzü PDF'e dönüştürüp herhangi bir hosting servisine yüklüyorsunuz, üzerine QR oluşturuyorsunuz. Ucuz, kurulumu 1 saat. Sorun: fiyat değiştiğinde yeni PDF yükleniyor, QR kodu da yeniden bastırılması gerekebiliyor. Mobile uyumu kötü, SEO değeri sıfır.

**Dinamik QR (web tabanlı):** Restoranın web sitesinin altına /menu sayfası olarak ekleniyor. Fiyat güncellemesi yönetim panelinden anında yapılıyor. Aynı QR kodu hep aynı sayfayı açıyor, kod değişmiyor. Mobile uyum mükemmel, SEO değeri yüksek (Google'da menü aratan müşteri sizi buluyor).

Hangisini seçeceğiniz konusunda kararsızsanız, kesinlikle dinamik tarafa gidin. İlk kurulum biraz daha pahalı (8.000-15.000 TL) ama 6 ayda kendini amorti ediyor.

### Çoklu Dil Desteği: Turistik Bölgelerde Şart

İzmir, Antalya, Bodrum, İstanbul'un turistik bölgelerinde çalışan restoranlar için QR menü çoklu dil desteği vazgeçilmez. Modern bir QR menü sistemi:

- Türkçe, İngilizce, Almanca, Rusça, Arapça seçeneklerini destekler.
- Müşterinin telefon dili algılanarak otomatik seçer.
- Her dil için ayrı fiyat göstermek gerekmez (TL üzerinden devam eder).
- Yemek isimlerini hem orijinal hem çeviriyle gösterir (örneğin "Lahmacun (Turkish Pizza)").

Bu detay turist müşterilerin sipariş hızını ciddi artırıyor. Garsonun "what is this?" sorularına vakit ayırmasına gerek kalmıyor.

## Mutfak ve Kasa Entegrasyonu: Sipariş Tek Yerden

Online sipariş sisteminin en büyük başarısızlık noktası mutfakla bağlantı kopukluğudur. Sipariş web sitesine düşer ama mutfak haberdar olmaz, garson sürekli telefonu kontrol etmek zorunda kalır. Çözüm: doğrudan mutfak yazıcısına entegrasyon.

Kurduğumuz restoran sistemlerinde sipariş şu yolu izliyor:

1. Müşteri web sitesinden sipariş veriyor, ödeme yapıyor.
2. Sipariş anında mutfaktaki termal yazıcıdan çıkıyor (Bixolon, Epson, Star).
3. Aynı anda kasadaki tablete de düşüyor, durumu (hazırlanıyor / hazır / yolda) güncelleniyor.
4. Sipariş hazırsa kurye paneline atanıyor.
5. Müşteriye WhatsApp ile durum bilgisi gidiyor.

Bu entegrasyon Adisyo, Logo Mokken, Sambapos gibi restoran kasa sistemleriyle yapılabiliyor. Mevcut kasanız varsa onunla entegre ediyoruz, yoksa basit bir tablet üzerinden başlatıyoruz.

## Stok ve Tükenen Ürün Yönetimi

Restoranlarda günlük gerçekliklerden biri "stok bitti" durumu. Akşam servisinde levrek tükenir, hafta sonu künefe bitiverir, brunch saatinde simit kalmaz. Müşteri online sipariş verir, kasa onaylar, mutfak "ya bizde kalmadı ki" der. Bu mahcup edici durum müşteri kaybına yol açar.

Modern bir sipariş sisteminde her ürünün **stok durumu** anlık yönetilir. Mutfak yöneticisi tabletten "levrek bitti" tuşuna bastığında ürün anında menüden gri renkle "tükendi" olarak görünür, sipariş alınamaz hale gelir. WhatsApp AI asistanı bile bu bilgiyi kullanır; müşteri "levrek var mı?" diye sorduğunda doğrudan "bugün maalesef bitti, ızgara çupra önerebilirim" diye cevap verir.

Bu yapı özellikle deniz ürünleri, mevsimsel meyveler, sınırlı sayıda yapılan günlük tatlılar (tiramisu, sufle gibi) için kritik. Müşteri yanıltılmıyor, mutfak baskı altında kalmıyor, satış kaybı yaşanmıyor.

## Sadakat Programı ve Müşteri Geri Dönüşü

Restoranda en değerli müşteri, ayda en az 2-3 kez gelen düzenli müşteri. Bu müşteriyi takip etmek ve ödüllendirmek satış kalıcılığını ciddi etkiliyor. WhatsApp odaklı bir sadakat sistemi şöyle çalışır:

- Her sipariş sonrası müşteriye puan eklenir (örneğin 1 TL = 1 puan).
- 500 puana ulaşan müşteri ücretsiz tatlı veya içecek kazanır.
- Doğum gününde özel indirim mesajı.
- 30 gün ziyaret etmeyen müşteriye "Sizi özledik, bu hafta %15 indirim" mesajı.
- Yeni menü çıktığında düzenli müşterilere özel deneme daveti.

Bu yapı CRM tabanlı çalışıyor ve [CRM otomasyonu rehberimizde](/blog/crm-otomasyonu-rehberi) anlattığımız mantığa dayanıyor. Müşteri verisi sistematik tutulduğunda kişiselleştirilmiş kampanyalar otomatik tetiklenebiliyor.

## Google İşletme Profili ve Yerel SEO

Restoran için en kritik trafik kaynağı Google İşletme Profili. "İzmir kebapçı", "Karşıyaka pizza" gibi aramalarda harita üzerinde çıkmazsanız müşterinin ekranında yoksunuz demektir. Restoran web sitesi kurarken Google İşletme Profili ile entegrasyon mutlaka düşünülmeli:

- Menü Google İşletme Profili'ne otomatik senkronize olmalı.
- Açılış-kapanış saatleri tek bir yerden güncellenmeli.
- Müşteri yorumları sitede de görünmeli (sosyal kanıt).
- "Sipariş Ver" butonu Google üzerinden doğrudan sitenize akıtmalı.

Bu detaylar [restoran web tasarımı paketimizin](/web-tasarim/restoran) içinde yer alıyor. Sadece web sitesi yapıp bırakmak yerine Google ekosistemine entegre edilmiş bir yapı sunuyoruz.

## Maliyet Tablosu

Tam entegre bir restoran dijital sisteminin tipik maliyet aralığı:

| Bileşen | Kurulum Maliyeti | Aylık Gider |
|---|---|---|
| Web sitesi + QR menü | 12.000-25.000 TL | 250-500 TL hosting |
| WhatsApp AI asistanı | 20.000-40.000 TL | 1.500-3.000 TL |
| Online sipariş + ödeme | 8.000-15.000 TL | %1,5-2,5 komisyon |
| Mutfak entegrasyonu | 5.000-12.000 TL | – |
| Google İşletme + SEO | 5.000-10.000 TL | 1.000-2.500 TL aylık takip |

Toplam kurulum 50.000-100.000 TL aralığında, aylık işletme 3.000-6.000 TL bandında. Yemek Sepeti'ne aylık 20.000 TL komisyon ödeyen bir restoran için 3-4 ayda kendini amorti ediyor.

## Sıkça Sorulan Sorular

**Mevcut Yemek Sepeti hesabımı kapatmalı mıyım?**
Hayır. Yemek Sepeti aracı kanal olarak kalsın, kendi sisteminiz **yan ana kanal** olsun. Müşterilerinizi yavaş yavaş kendi kanalınıza yönlendirin (siparişe küçük indirim koyarak, kartvizit basarak).

**Mevcut kasa sistemim varsa entegre olur mu?**
Adisyo, Sambapos, Logo Mokken gibi sistemlerin çoğu API destekliyor. Olmayanlar için basit bir köprü kuruyoruz. Mutfak yazıcısı bağlantısı her durumda yapılabiliyor.

**QR menü için ayrı yazılım almak gerekir mi?**
Hayır. Web sitenizin altına /menu sayfası olarak entegre ediyoruz. Ayrı yazılım aboneliği yok.

**Çoklu şubem var, hepsi tek sistemde olur mu?**
Evet. Çoklu şube yönetimi standart özellik. Her şubenin kendi menüsü, fiyatı, çalışma saati, rezervasyon takvimi olur ama yönetim tek panelden yapılır.

**WhatsApp asistanı vegan müşteriye doğru cevap verir mi?**
Bilgi tabanı doğru kurgulandıysa evet. Menüdeki vegan, vejetaryen, glutensiz, allerjen bilgileri sisteme girilir; AI bu detayları ezbere bilir, hatasız iletir.

## PORTZEN ile Restoran İçin Sistem Kurmak

PORTZEN olarak İzmir merkezli restoran projelerine sıkça giriyoruz. Alsancak, Bostanlı, Kordon, Bornova bölgelerinde 30'un üzerinde restoranın dijital altyapısını kurduk. Cafe, kebapçı, pizza, sushi, balıkçı, tatlıcı, hepsinde benzer prensiplerle çalışıyoruz ama her birinin kendi özelliklerine göre uyarlıyoruz.

Bir balıkçı için "balığın tezgahtaki güncel fiyatı" değişken olduğundan menü yönetim panelini özelleştiriyoruz. Bir pizzacı için "yarı yarıya farklı malzemeli pizza" seçeneği eklemek gerekiyor. Cafe için brunch menüsü saat aralıklı görünür/görünmez yapılıyor. Her restoranın ihtiyacı farklı, paket dayatmıyoruz.

[Restoran web tasarımı hizmetimiz](/web-tasarim/restoran) ile dijital cephe oluşturuyor, [restoran WhatsApp AI asistanı](/whatsapp-ai-asistani/restoran) ile müşteri iletişimini otomatikleştiriyor, mutfağa ve ödemeye entegre ediyoruz. Kurulum süreci 10-15 iş günü sürüyor, ilk ay aktif optimizasyon yapıyoruz.

İlk QR menünüzü ve WhatsApp asistanınızı yayına almak için: [portzenai.com/iletisim](/iletisim). 15 dakikalık ücretsiz keşif görüşmesinde restoranınıza özel yol haritası çıkaralım.
