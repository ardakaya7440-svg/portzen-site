---
title: "Güzellik Salonu Online Randevu + WhatsApp Hatırlatma Sistemi"
slug: "guzellik-salonu-online-randevu"
category: "sektorel"
description: "Güzellik salonu için online randevu sistemi ve WhatsApp hatırlatma otomasyonu nasıl kurulur? No-show azaltma, koltuk doluluğu ve fiyatlandırma rehberi."
keywords: ["güzellik salonu randevu", "salon online randevu", "güzellik salonu whatsapp", "güzellik salonu otomasyon", "kuaför randevu sistemi", "salon yönetim yazılımı"]
publishedAt: "2026-06-23"
author: "Arda Kaya"
readingTime: "11 dakika"
relatedServices: ["ai-bot", "web-tasarim"]
ogImage: "/blog/og/guzellik-salonu-online-randevu.png"
---

# Güzellik Salonu Online Randevu + WhatsApp Hatırlatma Sistemi

Güzellik salonu işletmek, dışarıdan bakıldığında "müşteri gelir, hizmet alır, gider" gibi görünür. Gerçekte ise sektörün en zor yönlerinden biri **takvim yönetimi**. Aynı anda 4 ustanın programını tutmak, aralarına yeni randevu yerleştirmek, gelmeyen müşterinin yerini doldurmak, kaynak çakışmasını önlemek (lazer cihazı tek, iki müşteri aynı saate yazılmış) ciddi bir operasyon işidir. Üstelik bu işin büyük bölümü WhatsApp ve Instagram DM üzerinden, parça parça mesajlaşmalarla yapılıyor. Patron ve resepsiyon hem hizmete hem randevu yönetimine yetişmeye çalışıyor. Bu yazıda **güzellik salonu için online randevu sistemi** ve **WhatsApp hatırlatma otomasyonu**'nu nasıl entegre kurarak no-show oranını düşürebileceğinizi, koltuk doluluğunu nasıl artırabileceğinizi, fiyat-fayda dengesini nasıl kuracağınızı detaylıca anlatacağız.

## Güzellik Sektörünün Randevu Sorunu

Türkiye'de bir güzellik salonunun günlük operasyonu şöyle ilerler: sabah 9 randevuyla açılır, gün içinde 8-10 yeni randevu talebi gelir, 2-3 müşteri iptal eder, 1-2 müşteri "no-show" yapar (gelmez, haber vermez), randevu yoğunluğu pik saatlerde çakışır. Resepsiyonun zihninde sürekli "kim ne saatte, hangi usta müsait, lazer cihazı boş mu" soruları döner.

Sektörde **no-show oranı ortalama %15-25**. Yani randevu alan her 4-5 müşteriden biri gelmiyor ve haber de vermiyor. Bu boş koltuk doğrudan kayıp gelir demek. Aylık 600 randevu alan bir salonda %20 no-show, 120 boş koltuk ve potansiyel olarak 60.000-80.000 TL kayıp gelir anlamına geliyor.

İkincil sorun **takvim çakışması**. Resepsiyon WhatsApp'tan bir randevu alırken aynı anda telefondan başka biri aynı saate randevu veriyor. Müşteri salona gelince "üzgünüz, aynı saate başka biri yazılmış" denmek zorunda kalınıyor. Bu yaşanan her olay, müşteri kaybı demek.

### Mevcut Salon Yazılımlarının Eksikleri

Sektörde Booksy, Fresha, Salonmania, Belezza gibi yazılımlar kullanılıyor. Bunların hepsi takvim yönetimi yapıyor ama Türk salonlarının ihtiyacına tam uymuyor:

- Çoğu **yurt dışı kaynaklı**, Türkçe destek zayıf.
- Müşteri sahaya geldiğinde uygulama indirip kayıt olmasını bekliyor, Türk müşteri istemiyor.
- WhatsApp entegrasyonu sınırlı, çoğu sadece SMS gönderiyor.
- Fiyatlandırma dolar bazlı, aylık 500-1.500 TL bandında.
- Türkiye'de yaygın kullanılan ödeme sistemleriyle (iyzico, Paytr) entegrasyon eksik.

Bu yüzden son yıllarda **özel kurulmuş, WhatsApp odaklı sistemler** öne çıkıyor. Müşteri WhatsApp'tan yazıyor, randevuyu AI alıyor, takvime düşüyor, hatırlatma yine WhatsApp'tan gidiyor. Müşteri uygulama indirmiyor, hesap açmıyor, sadece zaten kullandığı WhatsApp'tan iletişim kuruyor.

## WhatsApp Üzerinden Randevu: AI Resepsiyonist

Modern bir güzellik salonu randevu sisteminin temel mantığı şu: müşteri salonun WhatsApp numarasına yazıyor, AI asistan onu karşılıyor ve şu işleri yapıyor:

- **Hizmet bilgisi:** "Manikür ne kadar sürer, fiyatı ne?" sorusuna cevap verir.
- **Müsaitlik kontrolü:** "Yarın 14.00'da Ayşe usta müsait mi?" sorusuna takvimden bakar.
- **Randevu açma:** Müşteri saat belirledikten sonra randevuyu açar, sisteme yazar.
- **Onay mesajı:** "Yarın 14.00'da Ayşe usta ile manikür randevunuz onaylandı" diye teyit verir.
- **Hatırlatma:** Randevudan 24 saat ve 2 saat önce hatırlatma atar.
- **Yön tarifi:** Müşteri "yerinizi bulamıyorum" derse konum gönderir.

Bu yapı sahibi de resepsiyonisti de mesajlaşma yükünden kurtarıyor. Patron servise odaklanıyor, AI randevuları yönetiyor. [Güzellik salonu için WhatsApp AI asistan hizmetimizi](/whatsapp-ai-asistani/guzellik-salonu) inceleyebilirsiniz.

### Çoklu Hizmet ve Usta Mantığı

Güzellik salonlarının takvim yönetimi karmaşık çünkü her ustanın yetkinliği farklı:

- Ayşe usta: lazer epilasyon + cilt bakımı
- Fatma usta: manikür + pedikür + kalıcı oje
- Selma usta: saç boyama + kesim + fön
- Ahmet usta: erkek saç + sakal + lazer

Müşteri "saç boyama" istediğinde sistem otomatik olarak sadece Selma usta'nın takvimine bakmalı. "Lazer" derken hem Ayşe hem Ahmet usta uygunsa ikisini de göstermeli. Cihaz bazlı kaynak yönetimi de kritik: lazer cihazı tekse, aynı saate iki lazer randevusu kabul edilmemeli.

Bu mantık AI asistana kurulurken bilgi tabanına yazılır. Sistem hatalı çakışma yapmaz, müşteriyi yanlış usta'ya yazmaz.

## No-Show Azaltma: Hatırlatma Sisteminin Sihri

Sektörün en büyük gizli kaybı no-show. Müşteri 1 hafta önce randevu alır, araya unutur, gün gelir kapıyı çalmaz. Boş kalan koltuk doldurulamaz çünkü bekleyen müşteri o anda haber edilemez.

Doğru kurulmuş bir WhatsApp hatırlatma sistemi no-show oranını %15-20'den **%3-5'e** düşürebiliyor. Akış şöyle:

1. Randevu alındığı an onay mesajı: "Randevunuz X tarihinde Y saatinde onaylandı."
2. Randevudan 24 saat önce: "Yarın 14.00'da Ayşe usta ile randevunuz var. Onaylıyor musunuz? Cevap: EVET / DEĞİŞTİR / İPTAL"
3. Müşteri "İPTAL" derse koltuk bekleme listesindeki müşteriye otomatik teklif edilir.
4. Randevudan 2 saat önce son hatırlatma + konum bilgisi.
5. Randevu sonrası teşekkür ve bir sonraki bakım için öneri.

Bu hatırlatma akışı sadece no-show'u düşürmüyor, aynı zamanda müşteri sadakatini de güçlendiriyor. Müşteri "burada işime önem veriyorlar" hissi yaşıyor.

### Bekleme Listesi ve Boşluk Doldurma

İptal olan randevuların yerini doldurmak için AI asistan bekleme listesini de yönetiyor. Yoğun saatlere randevu bulamayan müşteriler "Cuma 17.00'da yer var mı?" diye sorduğunda AI "Şu an dolu ama bekleme listesine almak ister misiniz? Bir iptal olursa size haber veririm" diyor.

İptal anında bekleme listesindeki müşteriye otomatik mesaj gidiyor: "Cuma 17.00 müsait hale geldi, halen ilgileniyor musunuz?" Müşteri "evet" derse randevu açılıyor. Bu yapı sayesinde boş koltuk oranı %5'in altına iniyor.

## Online Randevu + Web Site Entegrasyonu

WhatsApp randevuya ek olarak, web sitesi üzerinden de randevu alabilen bir sistem kurmak değer katar. Müşteri Google'dan salonu bulduğunda "Randevu Al" butonuna tıklayıp hizmeti, ustayı, saati seçip ödemeyi yapabilir. Bu yapı:

- Yeni müşteri kazanımı için kritik (WhatsApp'a yazmak istemeyen, hızlı çözüm arayan müşteri için).
- SEO açısından değerli (Google'da "salon randevu" aramalarında çıkıyorsunuz).
- Ön ödeme alarak no-show'u tamamen sıfıra indirebiliyor.

[Güzellik salonu web tasarımı paketimiz](/web-tasarim/guzellik-salonu) içinde online randevu sistemi standart olarak yer alıyor. Sadece statik bir web sitesi değil, doğrudan satış üreten bir altyapı sunuyoruz.

### Ön Ödeme ile No-Show'u Sıfırlamak

Yoğun salonlar veya yüksek bütçeli hizmetler (lazer kürü, kalıcı makyaj, saç boyama paketi) için ön ödeme almak en etkili no-show önleme yöntemi. Müşteri randevu alırken iyzico veya Paytr üzerinden hizmet bedelinin %30-50'sini ödüyor. Gelmeme durumunda ödenen tutar iade edilmiyor (kullanım şartlarında belirtiliyor).

Bu yöntem agresif görünebilir ama pratiğin gösterdiği şu: ön ödeme alınmaya başladığında gerçekten gelmeyi planlayan müşteriler memnun, no-show yapanlar zaten "ciddi olmayan" müşteriler. Salon doluluğu artıyor, gelir öngörülebilir hale geliyor.

## Hizmet Bazlı Süre Yönetimi

Güzellik salonlarında her hizmetin farklı süresi var:

- Manikür: 45 dakika
- Pedikür: 60 dakika
- Klasik manikür + pedikür: 90 dakika (paket)
- Saç boyama: 120-180 dakika (uzunluğa göre)
- Lazer epilasyon (koltuk altı): 15 dakika
- Lazer epilasyon (tüm beden): 90 dakika
- Cilt bakımı: 60-90 dakika
- Kalıcı makyaj (kaş): 120 dakika

AI asistan ve randevu sistemi bu süreleri biliyor. Müşteri "manikür + pedikür" istediğinde takvime 90 dakikalık slot açıyor, 45 değil. "Saç boyama" derken müşteriye "Saç uzunluğunuz nasıl? Kısa-orta-uzun?" diye soruyor ve uygun süre ayırıyor.

Bu hassasiyet salon doluluğunu doğru hesaplamayı sağlıyor. Yanlış süre tahmini iki müşteriyi de bekletmeye, sonraki randevuların kaymasına neden oluyor.

## Yoğun Saat ve Boş Saat Dengeleme

Güzellik salonlarının klasik problemi şudur: cuma akşamı ve cumartesi gün boyu randevular dolup taşar, hafta içi sabah saatleri ise boş kalır. Boş koltuk kayıp ciro demek, dolu saat ise stres ve hata riski demek.

Dinamik fiyatlandırma ve teşvik sistemi bu dengeyi kuruyor. WhatsApp asistanı:

- Hafta içi 10.00-13.00 arası randevulara **%15 indirim** öneriyor.
- Cumartesi akşam talep edenleri "Çarşamba akşamı da müsait, hem indirimli" diye yönlendiriyor.
- İlk randevu deneyen yeni müşteriye "hoş geldin" indirimi sadece düşük yoğunluklu saatlerde sunuluyor.

Bu yapı salonu hem dengeli yüklüyor, hem ciroyu artırıyor, hem de müşteri memnuniyetini koruyor. Cuma akşamı yoğunluğunda hata yapan ustanın yerine, daha sakin bir günde dikkatli işçilik veren ustayı tercih eden müşteri sayısı az değil.

## Epilasyon Kürü ve Paket Hizmet Takibi

Güzellik salonu hizmetlerinin önemli bir kısmı tek seferlik değil, **paket** olarak satılır. Lazer epilasyon kürü genellikle 6-8 seans, kalıcı oje aboneliği aylık, cilt bakımı kürü 4 seans olarak satılır. Bu paketlerin takibi manuel yapıldığında ciddi karışıklık çıkıyor.

Sistem üzerinden paket takibi şöyle yapılıyor:

- Müşteri pakedi satın aldığında sistemde "8 seans lazer kürü, 1/8 tamamlandı" diye işleniyor.
- Her seans sonrası AI asistan otomatik güncelleme yapıyor: "Bugünkü seans 3/8 olarak kaydedildi, sonraki seans için 4-6 hafta arası ideal."
- Sonraki seans için hatırlatma 4. hafta sonu otomatik gidiyor.
- Kür bittiğinde "İdame seansı için 3 ay sonra hatırlatma yapayım mı?" diye soruluyor.

Bu yapı müşteriye profesyonel bir takip hissi veriyor ve idame randevularını da garanti altına alıyor. Manuel takipte unutulan idame randevuları, sistemli takiple geri kazanılıyor.

## Müşteri Geçmişi ve Kişiselleştirme

WhatsApp AI asistanın gizli süper gücü müşteri geçmişini hatırlaması. 3 ay önce gelen bir müşteri yeniden yazdığında AI:

- "Hoş geldiniz Ayşe Hanım, en son lazer kürünüzün 3. seansı için gelmiştiniz, 4. seans zamanı geldi sayılır."
- "Geçen sefer kullandığımız oje markasını beğenmiştiniz, hatırlatayım: O.P.I. Bubble Bath."
- "Doğum gününüze 1 hafta var, hediye bakım paketimizden faydalanmak ister misiniz?"

Bu kişiselleştirme müşteri sadakatini ciddi etkiliyor. Müşteri "burası beni tanıyor" hissi yaşadığında başka salona kolay kolay gitmiyor.

Müşteri geçmişi tutmak [CRM otomasyonu rehberimizde](/blog/crm-otomasyonu-rehberi) anlattığımız altyapıyla yapılıyor. Salon için kurduğumuz sistemlerde her müşterinin profili, gelmiş olduğu hizmetler, kullandığı ürünler, fotoğraf öncesi-sonrası kayıtları tutuluyor.

### Düzenli Müşteri Kampanyaları

CRM verisi üzerinden otomatik kampanyalar kurgulanabilir:

- 6 haftadır gelmeyen müşterilere "%15 hoş geldin indirimi" mesajı.
- Doğum günü olan müşterilere ücretsiz mini bakım hediyesi.
- Lazer kürünü tamamlayan müşterilere "İdame seansı zamanı" hatırlatması.
- Yaz ayı yaklaşırken epilasyon paketi tanıtımı.

Bu otomasyonlar elle yapılırsa hem zaman alır hem unutulur. Sistemli kurulduğunda her ay otomatik geliyor, müşteri bağlılığı sürekli artıyor.

## Sıkça Sorulan Sorular

**Mevcut salon yazılımım var, yenisine geçmem gerekiyor mu?**
Şart değil. Mevcut yazılımınız (Booksy, Belezza, Fresha vb.) ile entegre edebileceğimiz bir köprü kuruyoruz. WhatsApp asistanı randevu açtığında mevcut takviminize düşüyor. Ayrı yazılım gerekmiyor.

**Müşteri "X usta yerine Y ustaya yapsın" derse AI bunu anlar mı?**
Evet. AI usta tercihlerini, müşteri geçmişini, ustaların yetkinliklerini biliyor. "Daha önce Ayşe ustaya yaptırmıştım, yine onunla olsun" gibi taleplere doğru yanıt veriyor.

**Randevu iptali için müşteri telefon etmeyi tercih ederse?**
Sorun değil. Telefon, WhatsApp, web sitesi, hangi kanaldan iptal gelirse gelsin sistem aynı takvime düşüyor. Çoklu kanal yönetimi standart özellik.

**Hatırlatma mesajlarının maliyeti var mı?**
WhatsApp Business API üzerinden gönderilen hatırlatma mesajları (utility template) yaklaşık 0,05-0,10 TL/mesaj. Aylık 500 hatırlatma için toplam maliyet 30-50 TL bandında. İhmal edilebilir.

**Ön ödeme zorunlu olmalı mı?**
Hayır, opsiyonel. Pek çok salon sadece yüksek bütçeli hizmetlerde (saç boyama, lazer paket) ön ödeme alıyor. Manikür-pedikür gibi standart hizmetlerde gerek yok. Karma model en sık tercih edilen.

## PORTZEN ile Güzellik Salonu İçin Sistem Kurmak

PORTZEN olarak İzmir merkezli çalışıyoruz. Karşıyaka, Bostanlı, Alsancak, Bornova bölgelerinde 25'i aşkın güzellik salonu, kuaför ve estetik klinik projesi tamamladık. Tek koltuklu küçük salondan, 8 ustalı büyük güzellik merkezine kadar farklı ölçekte sistemler kurduk.

Sahada öğrendiğimiz şey şu: her salonun **kendine özgü ritmi** var. Bir salon randevuları sıkı sıkıya saat 30 dakika dilimlerine sığdırırken, başka bir salon "hizmet bitince bitti" mantığıyla çalışıyor. Bir merkez sadece kadın müşteri kabul ederken, başkası karma. Birinde lazer ağırlıklı iş varken, diğerinde saç boyama yoğun. Bu yüzden hazır paket dayatmıyoruz; her salonun çalışma şeklini tanıyıp ona göre kurulum yapıyoruz.

[Güzellik salonu için WhatsApp AI asistan hizmetimiz](/whatsapp-ai-asistani/guzellik-salonu) ile randevu otomasyonunu, [güzellik salonu web tasarımı paketimiz](/web-tasarim/guzellik-salonu) ile online görünürlüğü ve web tabanlı randevu sistemini kuruyoruz. İkisini birlikte yaptığımız projelerde randevu hacmi ilk 3 ay içinde ortalama %35-50 artıyor, no-show oranı %15'lerden %5'lere iniyor.

Kurulum süreci 7-12 iş günü, ilk ay aktif optimizasyon. Salonunuzun yapısına uygun bir yol haritası çıkarmak için: [portzenai.com/iletisim](/iletisim). 15 dakikalık ücretsiz keşif görüşmesi.
