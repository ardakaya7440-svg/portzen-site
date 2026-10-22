---
title: "Mali Müşavir Ofisleri İçin Müşteri Portalı + WhatsApp Bildirim Sistemi"
slug: "mali-musavir-musteri-portali-whatsapp"
category: "sektorel"
description: "Mali müşavirlik ofisleri için müşteri portalı, WhatsApp bildirim sistemi, e-Beyanname ve KDV otomasyon rehberi. 2026 muhasebe büro otomasyonu."
keywords: ["mali müşavir whatsapp", "muhasebe büro otomasyon", "mali müşavir crm", "muhasebe portalı", "smmm yazılım"]
publishedAt: "2026-06-23"
author: "Arda Kaya"
readingTime: "12 dakika"
relatedServices: ["ai-bot", "crm-otomasyonu", "web-tasarim"]
ogImage: "/blog/og/mali-musavir-musteri-portali-whatsapp.png"
---

# Mali Müşavir Ofisleri İçin Müşteri Portalı + WhatsApp Bildirim Sistemi

Mali müşavirlik ofislerinin gündelik gerçeği, bir mevzuat ve takvim koşusudur. Her ayın ilk 5 günü muhtasar beyannamesi, 25'i KDV beyannamesi, ay sonu e-Beyanname kapanış, ara dönemlerde geçici vergi, yıllık dönemde kurumlar vergisi ve gelir vergisi beyannameleri. Bu döngünün arka planında onlarca, yüzlerce müşteri evrak gönderiyor, "beyanname çıktı mı", "tahakkuk ne kadar", "ne zaman ödeyeceğim" sorularıyla telefonu çaldırıyor, fatura görsellerini WhatsApp'a gönderiyor. Mali müşavirlik personeli zamanının yüzde altmışını mevzuat işine değil, müşteriye bilgi vermeye ayırıyor.

2026 itibarıyla bu manzara değişebilir durumda. Müşteri portalı + WhatsApp Business API üzerine kurulu bir bildirim sistemi, ofisin idari yükünün önemli bir bölümünü ortadan kaldırıyor. Müşteri "beyannamemi gönderdiniz mi" yerine portala giriyor, tahakkuklarını oradan görüyor. Vergi takvimi yaklaştığında otomatik WhatsApp hatırlatması alıyor. Evrak gönderirken portala yükleyebiliyor, e-postaya gömülü gitmiyor. Bu yazıda PORTZEN olarak mali müşavirlik ofisleri için önerdiğimiz bu sistemin nasıl kurgulandığını, hangi parçalardan oluştuğunu ve iş akışında neyi değiştirdiğini detaylı paylaşacağız. Hem ofis yöneticisi hem büyüme planlayan smmm için yol haritası niteliğinde olacak.

## Mali Müşavirlik Ofisinin İletişim Yükü Tablosu

Bir mali müşavirlik ofisinin müşteri başına aylık iletişim yükünü çıkardığımızda şu tablo ortaya çıkıyor.

- Ay başında muhtasar ve sgk hatırlatması: müşteri başına 1-2 mesaj
- KDV beyannamesi öncesi evrak isteği: müşteri başına 3-5 mesaj
- Beyanname sonrası tahakkuk paylaşımı: müşteri başına 1-2 mesaj
- Ödeme hatırlatması ve onay: müşteri başına 2-3 mesaj
- e-Fatura ve e-Defter problemleri: müşteri başına 1-2 mesaj
- Mevzuat değişikliği bildirimleri: müşteri başına 1 mesaj
- Genel sorular (vergi, sgk, banka, ihale): müşteri başına 3-5 mesaj

Toplam: müşteri başına ayda 12-20 mesaj. 100 müşteri portföyü olan bir ofiste bu ayda 1.200-2.000 mesaj demek. Personel sayısı sabit kalırken müşteri ve mevzuat yükü her yıl artıyor. Bu denklem sürdürülemez. Otomasyon, ofisin kaderini değil yapısını değiştiriyor.

## Müşteri Portalının Çekirdek İşlevleri

Müşteri portalı, mali müşavirlik ofisinin müşteriye sunduğu kendi kendine hizmet alanı. Müşteri kendi hesabıyla giriyor, kendi verisini görüyor, gerekli evrakı yüklüyor. Telefon ve WhatsApp yükü buraya kayıyor.

İyi bir mali müşavirlik portalı şunları içermeli.

- Beyanname geçmişi ve indirilebilir PDF arşivi
- Tahakkuk ve ödeme bilgileri
- Aylık vergi takvimi ve uyarılar
- e-Fatura ve e-Arşiv görüntüleyici
- Belge yükleme alanı (fatura, banka ekstresi, bordrolar)
- Bordro ve sgk işlem geçmişi
- Yıllık beyanname ve bilanço arşivi
- KVKK uyumlu güvenli giriş

Portal, müşteriye 7/24 erişim sağlıyor. Gece "ben dün KDV beyannamesini görmemiştim" sorusu için sabah ofise telefon açmıyor, portala giriyor. Bu kullanım, çoğu KOBİ'de ilk aylarda yavaş benimseniyor ama 3-4 ay sonra alışkanlık haline geliyor. PORTZEN olarak bu portal yapısını mali müşavirlik için özel web uygulaması olarak geliştiriyoruz ({{tekil:ozel-web-uygulamasi}}, KDV hariç); kesin bedel kapsama göre teklifte belirlenir.

## WhatsApp Bildirim Akışları: Vergi Takvimi Otomasyonu

Vergi takvimi mali müşavirlik ofisinin en kritik gündemi. Her ayın belirli günlerinde belirli beyannameler verilmek zorunda. Müşterinin de tahakkukunu zamanında öğrenip ödeme yapması gerekiyor. Bu döngünün WhatsApp üzerinden otomatikleşmesi, hem ofisi hem müşteriyi rahatlatıyor.

Aylık bildirim akışı şöyle.

1. Ayın 1'i: muhtasar beyannamesi için belge isteği gönderilir
2. Ayın 5'i: muhtasar son tarih hatırlatması
3. Ayın 10'u: muhtasar tahakkuk PDF ile gönderilir
4. Ayın 20'si: KDV beyannamesi için belge son tarih hatırlatması
5. Ayın 24'ü: KDV beyannamesi son tarih
6. Ayın 26'sı: KDV tahakkuk PDF ile gönderilir
7. Ayın son 5 günü: ödeme hatırlatması ve banka bilgileri
8. Ayın son günü: ay sonu kapanış ve ertesi ay belge istek hatırlatması

Bu akışın her adımı WhatsApp Business API üzerinden müşteriye otomatik gönderiliyor. Müşteri yanıt yazıyorsa AI asistan ilk değerlendirmeyi yapıyor, gerektiğinde personeli yönlendiriyor. [WhatsApp AI asistan nedir](/blog/whatsapp-ai-asistani-nedir) yazımız genel altyapıyı açıklıyor. Mali müşavirlik için özelleştirilmiş kurulumu PORTZEN'in [WhatsApp AI asistan](/whatsapp-ai-asistani) hizmeti kapsamında yapıyoruz.

## E-Beyanname ve E-Fatura Entegrasyonu

Mali müşavir ofisinin e-Beyanname ve e-Fatura ile günlük etkileşimi yoğun. Bu sistemlerden gelen veriyi müşteriye aktarırken çoğu ofis hâlâ PDF maile ekleyip gönderiyor. Bunun sınırı.

- Müşteri PDF'i e-postada kaybediyor
- Hangisinin son güncel beyanname olduğu karışıyor
- Geçmiş arşiv aramak zorlaşıyor
- Önemli mevzuat değişikliği e-postanın sonunda kalıyor, okunmuyor

Müşteri portalı bu evrakı kategorize bir şekilde sunuyor. Yıl/ay bazında ayrılmış, beyanname türüne göre etiketlenmiş, son durum bilgisiyle birlikte. Bunun üstüne WhatsApp bildirimi ile "yeni beyannameniz portala yüklendi" mesajı gidiyor. Müşteri linke tıklıyor, gönderilen evrakı görüyor, gerekirse indiriyor. Bu basit akış, "beyannamem yüklendi mi" türünden soruları telefondan portala ve WhatsApp bildirimine taşır; ofis aynı bilgiyi tek tek aktarmak zorunda kalmaz.

Belge yükleme açısından ters yönde de aynı yapı çalışıyor. Müşteri fatura çekiyor, WhatsApp'a gönderiyor. PORTZEN kurulumlarında bu görseller doğrudan müşteri klasörüne ayrılıyor, OCR ile temel bilgileri ayıklanıyor ve mali müşavir ekibinin gözden geçirmesi için işaretleniyor.

## CRM ve Müşteri Sınıflandırması

Mali müşavirlik müşterileri tek tip değil. Şahıs şirketi, limited şirket, anonim şirket, esnaf, serbest meslek, bireysel müşteri. Her birinin vergi yükü, beyanname türü, sgk yapısı farklı. Bu farklılığı CRM'de etiketlemek, bildirim ve hatırlatma sistemini doğru çalıştırmak için kritik.

CRM'de tutulacak etiketler.

- Şirket türü (şahıs, limited, anonim, serbest meslek)
- KDV mükellefiyet türü
- Geçici vergi durumu
- e-Fatura mükellefi mi
- e-Defter mükellefi mi
- BA-BS bildirim zorunluluğu
- KGK denetim kapsamına giriyor mu (büyük şirketler için)
- Aylık ücret kategorisi (küçük, orta, büyük müşteri)
- Personel sayısı bandı

Bu etiketler hem doğru hatırlatmanın doğru müşteriye gitmesini hem de mali müşavirlik ofisinin müşteri yapısını anlamasını sağlıyor. "Hangi müşteri tipi en çok zamanımı alıyor", "hangi yapı en kârlı" sorularına veri ile cevap verilebiliyor. PORTZEN'in [CRM otomasyonu](/crm-otomasyonu) hizmeti tam bu kurguyu yapıyor. Konunun teorik altyapısı için [CRM otomasyonu rehberi](/blog/crm-otomasyonu-rehberi) faydalı.

## Yeni Müşteri Kazanımı: Web Site ve Lead Sistemi

Mali müşavirlik ofislerinin büyük çoğunluğu büyümeyi referans yoluyla yapıyor. Bu güzel ama tek başına yetersiz. Yeni nesil KOBİ sahipleri "İzmir mali müşavir" diye Google'da arıyor ve referansı olmasa da işini iyi yapan ofisleri keşfediyor.

Mali müşavirlik web sitesinde olması gerekenler.

- Hizmet alanları (şahıs şirket kurulumu, defter tutma, beyanname, dış ticaret vb.)
- Sektörel uzmanlık alanları varsa belirtilmesi (restoran, sağlık, e-ticaret vb.)
- SMMM ve ekibin tanıtımı
- Hizmet paketleri ve fiyatlandırma yaklaşımı (net olmasa bile genel bilgi)
- Vergi takvimi ve sık aranan mevzuat içerikleri (blog)
- KVKK uyumlu iletişim formu
- WhatsApp butonu

Web sitesinin SEO açısından da düzgün olması gerekiyor. Mali müşavirlik araması yapan kişi hem yerel hem mesleki güven arıyor. [Kurumsal web sitesi rehberi](/blog/kurumsal-web-sitesi-rehberi) yazımız bu konuda detaylı. SMMM ofisinin LinkedIn ve Instagram'da kurumsal görünür kalması için ayrıca bir [sosyal medya ajansı](/sosyal-medya-ajansi) desteğiyle düzenli içerik üretmek, referans dışında gelen leadlerin kalitesini artırıyor.

Site üzerinden gelen lead, CRM'e otomatik düşmeli. "İzmir limited şirket kurulumu" araması yaparak gelen birinin formu doldurması, hangi serbest muhasebeci mali müşavire atanacağı belli olmalı. Bu konuda [sales funnel KOBİ kurulumu](/blog/sales-funnel-kobi-kurulum) yazımız genel yaklaşımı açıklıyor.

## Mevzuat Değişikliği Bildirimleri

Vergi mevzuatı her yıl güncelleniyor. Yeni indirimler, oran değişiklikleri, sgk değişiklikleri, asgari ücret etkileri. Müşterinin bunları takip etmesi mümkün değil. Mali müşavir ofisinin görevi bu değişiklikleri sade dilde müşteriye iletmek.

WhatsApp üzerinden mevzuat bildirimi şöyle yapılabilir.

- Genel bildirim: tüm müşterilere giden mesaj (asgari ücret değişti, sgk oranları şu oldu)
- Hedefli bildirim: belirli mükellefiyet grubuna giden mesaj (e-Defter mükellefleri için yeni süre)
- Bireysel bildirim: müşteri özel durumu için (sizin işletmenizde geçen ay X değişikliği yapıldı, dikkatinize)

Bu bildirimler hem müşteri memnuniyetini artırıyor hem de "mali müşavirim bilgiyi geç verdi" şikayetini ortadan kaldırıyor. Toplu mesaj yöneticisinin masaüstünde değil, sistemde otomatik akış halinde olmalı.

## KVKK ve Müşteri Verisi Hassasiyeti

Mali müşavirlik ofisi, müşterinin tüm finansal verisini tutuyor. Bu KVKK kapsamında özellikle hassas. Tutulan veri.

- Vergi numarası, ticari sicil bilgisi
- Banka hesap bilgileri ve hareketleri
- Faturalar ve gelir/gider kayıtları
- Bordrolar ve personel bilgileri
- Beyanname geçmişi ve ödeme bilgileri

Bu verinin hangi sağlayıcıda ve hangi bölgede saklandığının bilinmesi, erişimin loglanması, müşteri başına erişim yetkisinin doğru tanımlanması gerekiyor. PORTZEN olarak portal ve CRM altyapısını KVKK gerekliliklerini dikkate alarak kurguluyoruz (açık rıza, aydınlatma akışı, erişim yetkileri); verinin hangi sağlayıcıda ve bölgede tutulacağı kullanılan altyapıya göre teklifte yazılı olarak belirtilir. KVKK genel rehberi için [KVKK müşteri verisi rehberi](/blog/kvkk-musteri-verisi-rehberi) yazımız faydalı bir kaynak.

VERBİS kaydı mali müşavirlik ofisleri için çoğu durumda zorunlu. Ofisin kendi bu yükümlülüğünü atlamış olması paradoksal bir tutarsızlık yaratıyor.

## Yapay Zeka Asistanın Ofisteki Yeri

AI asistan, mali müşavirlik ofisinde hangi rolde durmalı. Sorulara verdiğimiz net cevaplar şunlar.

AI'ın yapacakları.

- Sık sorulan müşteri sorularına ilk yanıt vermek
- Belge eksiklerini hatırlatmak
- Beyanname son tarihlerini otomatik bildirmek
- Vergi takvimi ve genel mevzuat bilgisi sunmak
- Müşterinin doğru personele yönlendirilmesi
- Faturayı OCR ile tarayıp ilk veri çıkarımını yapmak

AI'ın yapmayacakları.

- Vergi tavsiyesi vermek
- Belge eksikliği konusunda kararname üretmek
- Personel onayı olmadan beyanname göndermek
- Müşterinin özel finansal durumu hakkında yorum yapmak
- Mevzuat yorumu yapmak

Bu sınırlar net çizildiğinde AI, ofisin yorulan personelinin yükünü alıyor ama sorumluluk her zaman SMMM ve ekibinde kalıyor. Konunun ana hatlarına [yapay zeka müşteri hizmetleri](/blog/yapay-zeka-musteri-hizmetleri) yazımızdan bakabilirsiniz.

## Ofis Büyüklüğüne Göre Sistem Önerileri

Tek SMMM + 1-2 personel ofis. Bu ölçekte ana ihtiyaç WhatsApp Business altyapısı ve basit bir müşteri portalı. Karmaşık CRM gereksiz, basit bir takip sistemi yeterli. PORTZEN'de bu ölçeğe genellikle tek kanallı AI müşteri asistanı Başlangıç paketi uyar: {{fiyat:ai-musteri-asistani:baslangic}} + {{kurulum:ai-musteri-asistani:baslangic}} kurulum (KDV hariç).

Orta ölçekli ofis (3-7 personel, 50-200 müşteri). Bu ölçekte tam paket. Portal, WhatsApp Business API, CRM, otomatik bildirim akışları, vergi takvimi entegrasyonu. PORTZEN'de WhatsApp tarafı AI müşteri asistanı Büyüme paketiyle ({{fiyat:ai-musteri-asistani:buyume}} + {{kurulum:ai-musteri-asistani:buyume}} kurulum), bildirim ve CRM akışları ise tek seferlik iş otomasyonu paketiyle kurulur (KDV hariç).

Büyük ofis (8+ personel, 200+ müşteri). Tam paket + sektörel uzmanlaşma sayfaları, müşteri segmentasyonu, gelişmiş raporlama. Bu ölçekte AI müşteri asistanı Kurumsal paketi ({{fiyat:ai-musteri-asistani:kurumsal}} + {{kurulum:ai-musteri-asistani:kurumsal}} kurulum) ile iş otomasyonu paketleri ({{fiyatlar:is-otomasyonu}}) öne çıkar; fiyatlar KDV hariçtir.

Geri dönüş süresi ofisin müşteri sayısına ve mevcut iş yüküne göre değişir; bunu ilk görüşmede personel verimliliği ve müşteri kaybını önleme üzerinden sizinle birlikte hesaplıyoruz. Müşteri portalı ise özel web uygulaması olarak ayrıca tekliflendirilir ({{tekil:ozel-web-uygulamasi}}, KDV hariç). Tüm paketler için [fiyatlar sayfası](/fiyatlar).

## Süreç Otomasyonu: n8n ve Make Rolü

Mali müşavirlik ofisindeki otomasyonun arkasında n8n ya da Make gibi araçlar çalışıyor. Bu araçlar, e-Beyanname ekranlarından çıkan veriyi okuyup CRM'e kaydedebilir, banka ekstresini analiz edip müşteriye gönderebilir, ya da WhatsApp'tan gelen evrak görsellerini doğru klasöre düşürebilir.

PORTZEN olarak orta ve büyük ofisler için n8n tabanlı otomasyon altyapısı kuruyoruz. Bu konuda [n8n kobi kurulum](/blog/n8n-nedir-kobi-kurulum) ve [Zapier Make n8n karşılaştırma](/blog/zapier-make-n8n-karsilastirma) yazıları teknik karşılaştırmayı içeriyor.

## Sıkça Sorulan Sorular

**Mevcut LUCA ya da Mikro kullanıyoruz, portala entegre olur mu?**
Bu muhasebe programlarının çoğu API üzerinden veri çıkışına izin veriyor ya da otomatik raporlama özellikleri var. Portalı bu programa entegre etmek mümkün. PORTZEN kurulumlarında müşterinin mevcut muhasebe programını koruyoruz, üzerine portal/CRM katmanı ekliyoruz.

**Müşterinin portala girmemesi durumunda ne oluyor?**
Sistem hibrit çalışıyor. Müşteri portala girmek istemese de tüm bildirimler WhatsApp üzerinden geliyor. Tahakkuk PDF olarak da ekleniyor. Portal "ekstra" bir avantaj. Zorunlu kullanım değil.

**WhatsApp'tan gelen fatura görselleri otomatik defter giriyor olabilir mi?**
Tam otomatik değil. OCR ile tarayıp ilk veri çıkarımı yapılıyor (tarih, tutar, tedarikçi). Bu veri muhasebe ekibinin onayına düşüyor. Doğrudan defter girişi yapılmıyor çünkü hata payı kabul edilemez. Hız kazanıyorsunuz ama kontrol ekipte kalıyor.

**Sistem kurulurken ofis kapanıyor mu?**
Hayır. Geçiş paralel çalışma şeklinde yapılıyor; teslim süresi kapsama göre teklifte yazılı olarak belirtilir. Mevcut akış devam ediyor, yeni sistem yan yana kuruluyor, müşteriler kademeli olarak yeni sisteme geçiyor. Kesinti yaşanmıyor.

**Yıllık abonelik mi kuruluş paketi mi mantıklı?**
PORTZEN'de model hizmete göre değişir. WhatsApp AI asistanı tek seferlik kurulum + aylık ücretle çalışır: {{fiyatlar:ai-musteri-asistani}} (KDV hariç). CRM ve bildirim otomasyonları ise tek seferlik kurulumdur: {{fiyatlar:is-otomasyonu}} (KDV hariç); ilk 30 gün kurulum hataları giderilir, ikinci aydan itibaren isteğe bağlı aylık bakım alınabilir.

**Mali müşavir asistan robot olmayacak mı gelecekte?**
AI'ın bazı işleri devralacağı kesin ama mali müşavirin yerini tamamen alması yakın gelecekte mümkün değil. Çünkü sorumluluk ve yorum kısmı mevzuat tarafından muhasebeciye verilmiş durumda. AI, mali müşavirin yerine geçen değil onunla çalışan bir asistan olacak.

## PORTZEN ile Mali Müşavirlik Ofisi İçin Sistem Kurmak

Mali müşavirlik ofisinin günlük gerçeği telefon, WhatsApp ve e-posta seli. Bu selin içinde mevzuat işine yoğunlaşmak zorlaşıyor, hata riski artıyor, personel tükeniyor. Doğru kurulmuş bir müşteri portalı + WhatsApp bildirim sistemi, bu seli akıcı bir nehre dönüştürüyor. Müşteri kendi verisini görüyor, hatırlatmaları otomatik alıyor, ofis personeli mevzuat işine odaklanıyor.

PORTZEN olarak İzmir başta olmak üzere Türkiye genelindeki mali müşavirlik ofisleri için bu sistemi anahtar teslim sunuyoruz. Sistem [WhatsApp AI asistan](/whatsapp-ai-asistani), [CRM otomasyonu](/crm-otomasyonu) ve özel web uygulaması olarak geliştirilen müşteri portalından oluşur; her parça kendi paketiyle fiyatlanır, güncel tutarlar [fiyatlar sayfasında](/fiyatlar). Geçiş süreci kademeli, mevcut LUCA/Mikro gibi muhasebe programlarınızla uyumlu çalışıyor.

Ofisinizin yapısına özel bir kurulum önerisi almak için [iletişim sayfamızdan](/iletisim) bize ulaşabilirsiniz. İlk görüşmede mevcut iş akışınızı ücretsiz olarak inceliyor, hangi parçanın otomasyondan en büyük geri dönüşü sağlayacağını size paylaşıyoruz.
