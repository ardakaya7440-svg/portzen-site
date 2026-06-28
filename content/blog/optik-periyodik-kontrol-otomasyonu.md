---
title: "Optik Müşterileri İçin Periyodik Göz Kontrolü Hatırlatma Otomasyonu"
slug: "optik-periyodik-kontrol-otomasyonu"
category: "sektorel"
description: "Optik mağazalar için reçete takibi, 2 yıllık göz muayenesi hatırlatma, kontak lens kutusu uyarısı ve KVKK uyumlu CRM otomasyonu rehberi."
keywords: ["optik crm otomasyon", "göz muayenesi hatırlatma", "optik müşteri takibi", "reçete geçerlilik takibi", "kontak lens hatırlatma", "optik whatsapp"]
publishedAt: "2026-06-24"
author: "Arda Kaya"
readingTime: "11 dakika"
relatedServices: ["otomasyon", "ai-bot"]
ogImage: "/blog/og/optik-periyodik-kontrol-otomasyonu.png"
---

# Optik Müşterileri İçin Periyodik Göz Kontrolü Hatırlatma Otomasyonu

Optik mağazalarının en sessiz cirosu, iki yıl önce gözlüğünü alıp gitmiş ve unutulmuş müşterilerin içindedir. Bir kişi yetişkin olarak ortalama her 24 ayda bir göz muayenesinden geçmesi gerektiğini bilir ama bu süreyi takip eden, hatırlatma yapan, kampanya öneren tek aktör çoğu zaman optisyenin kendisidir; o da haftalık ajandasında bu işe yer ayıramaz. Sonuç olarak müşteri ya yan sokakta açılan zincir mağazaya yönelir, ya da çerçeve değişimini bir yıl daha erteler. Optik sektörünün geri dönüş döngüsü tam olarak burada kırılır.

PORTZEN olarak Ankara, İstanbul, İzmir ve Bursa'da bağımsız optisyenlerden orta ölçekli zincirlere kadar farklı optik markaları için CRM ve otomasyon projeleri yürütüyoruz. Gördüğümüz tablo net: ortalama bir mağazada müşteri veritabanının yüzde 60 ile 70'i pasif, yani son 18 ayda hiçbir iletişim kurulmamış. Bu kişilerin önemli bir kısmı, doğru zamanlanmış bir hatırlatma ile kolayca yeni gözlük, kontak lens veya yıllık muayene için gelir. Bu yazıda, müşteri reçete tarihi takibinden başlayarak 23. ay hatırlatma SMS'i, kontak lens kutusu uyarısı, garanti süresi takibi, kampanya kurgusu ve KVKK uyumlu rıza yönetimine kadar bir optik mağazasının kurması gereken otomasyon mimarisini, sahadan gerçek rakamlarla anlatıyoruz.

## Optik Müşteri Veritabanını Doğru Kurmak

Hatırlatma otomasyonu, ne kadar iyi tasarlanırsa tasarlansın, altındaki müşteri verisi kirliyse hiçbir işe yaramaz. Mağazaların yarısından çoğunda müşteri bilgisi kasa programı dışında bir yerde durmuyor; durduğu yerlerde de ad soyad, telefon ve tarih dışında neredeyse hiçbir veri yok. İlk yapılması gereken iş, müşteri kartlarının zenginleştirilmesidir.

### Hangi Veri Alanları Toplanmalı

Temel müşteri kaydında bulunması gereken alanlar: ad soyad, doğum tarihi, cep telefonu, e-posta, son muayene tarihi, son reçete tarihi, reçete detayı (sağ-sol diyoptri, eksen, prizma, near-add), kullanılan ürün tipi (gözlük, kontak lens, ikisi birden), cam markası, çerçeve markası, cam tipi (tek odaklı, progresif, presbiyopi), garanti başlangıç ve bitiş tarihi, sigorta bilgisi, satış tutarı ve KVKK ile İYS izinlerinin durumu. Bu alanların her biri ileride bir kampanya veya hatırlatmanın tetikleyicisi olur.

### Mevcut Veriyi Temizleme

Eski müşterileri sisteme alırken çoğu mağaza tıkanır çünkü kasa programındaki kayıtların önemli bir kısmı eksiktir. PORTZEN olarak önerdiğimiz yöntem; ilk 3 ayda mağazaya gelen her müşteriden kart güncellemesi yapmak, geçmiş verideki eksik telefonları satın alma fişlerinden tamamlamak ve hiç ulaşılamayan kayıtları "pasif arşiv" etiketiyle ayırmak. 6 ay sonra verinizin yüzde 80'i kullanılabilir hale gelir.

### Kasa Programı ve CRM Entegrasyonu

Türkiye'de yaygın kullanılan optik kasa programları (Mikro, Logo, OptikSoft, ZenOptik gibi) ya kendi CRM modülünü sunar ya da dışa veri aktarımına izin verir. Doğru kurulumda kasa programı tek doğru kaynaktır, CRM ise hatırlatma ve kampanya katmanıdır. İkisi arasındaki senkronizasyonu webhook veya günlük export-import ile yapmak yeterlidir. Detaylı entegrasyon yaklaşımı için [CRM otomasyonu rehberimizi](/blog/crm-otomasyonu-rehberi) inceleyebilirsiniz.

## Reçete Geçerlilik Süresi ve 23. Ay Hatırlatma Kurgusu

Optik müşterisinin geri gelme döngüsü, fizyolojik olarak reçetenin yenilenmesine bağlıdır. Yetişkinde refraksiyon değişimi ortalama 2 yılda anlamlı seviyeye ulaşır, çocuklarda ve presbiyopisi ilerleyen 45+ yaş grubunda bu süre çok daha kısalır. Doğru hatırlatma kurgusu, bu fizyolojik döngüyü iş döngüsüne çevirir.

### Yetişkin Müşteri İçin Standart Akış

18-44 yaş arasındaki müşteriler için reçete tarihinden 23 ay sonra, yani yenilemeden 30 gün önce ilk hatırlatma mesajı gönderilir. Mesaj kuru bir "muayene zamanı geldi" değil, kişiselleştirilmiş bir öneri olmalıdır. "Merhaba Selin Hanım, son gözlük muayeneniz Haziran 2024'te yapılmıştı. Yetişkinler için 2 yılda bir göz kontrolü öneriliyor. Mağazamızda ücretsiz refraksiyon ölçümü için size uygun günü ayarlayabiliriz." gibi bir mesaj yüzde 18-25 bandında dönüş alır.

### Çocuk Müşteri İçin Kısa Periyot

12 yaş altı çocuklarda göz kasları ve refraksiyon değişimi hızlı olduğu için periyot 12 aya iner. Sistem, çocuk müşterileri doğum tarihinden otomatik segmentleyip ebeveyn telefonuna 11. ay hatırlatması göndermelidir. Okul döneminin başladığı eylül ayı, bu kampanyanın doğal pikidir; ağustos sonu hatırlatma ile randevu kapasiteniz erken dolar.

### 45+ Yaş ve Presbiyopi Takibi

45 yaş üstü müşterilerde presbiyopi ilerlemesi 12-18 ayda anlamlı değişim gösterebilir. Bu segment için 18. ay hatırlatması ve "yakın görüşte zorlanıyor musunuz?" sorusunu içeren kısa anket, hem sağlık takibi hem ticaret açısından çok değerlidir. PORTZEN'in optik müşterilerinde bu segmente yapılan özel kampanya, ortalama mağaza cirosuna yıllık yüzde 8-12 katkı sağlıyor.

### Mesaj Kanalı Seçimi

WhatsApp dönüş oranı SMS'in 3-4 katı olduğundan, izinli müşterilerde mutlaka [WhatsApp AI asistanı](/whatsapp-ai-asistani) kanalı tercih edilmelidir. İzni olmayan veya WhatsApp kullanmayan müşterilere SMS yedek kanaldır. Toplu mesaj göndermeden önce [WhatsApp toplu mesaj ve İYS uyumu yazımızı](/blog/whatsapp-toplu-mesaj-yasal-otomasyon) mutlaka okuyun.

## Kontak Lens Müşterileri İçin Tüketim Bazlı Hatırlatma

Kontak lens müşterisi, gözlük müşterisinden çok farklı bir döngüde yaşar. Aylık lens kullanıcısı her ay yeni kutu alır, günlük lens kullanıcısı her 30-90 günde bir 30-90'lık paketi tüketir. Bu döngüyü bilen bir sistem, müşteri stokunun bitmesinden 5-7 gün önce hatırlatma yapıp siparişi mağazaya çevirir.

### Tüketim Modeli ve Stok Hesabı

Sistem, müşterinin son aldığı kutu sayısı ve kullanım pattern'inden kalan günü hesaplar. Aylık lens için 1 kutu = 30 gün, 3 kutu = 90 gün; günlük lens için 30'luk paket = 30 gün. Müşterinin 7 günü kaldığında "Lens kutunuz tükenmek üzere, sipariş için hazırız" mesajı düşer. Bu kurgu, müşterinin yan sokaktaki rakipten online sipariş vermesini engeller.

### Sağlık ve Hijyen Hatırlatması

Lens hatırlatma mesajının içine eğitici bir cümle koymak, müşteri ilişkisini güçlendirir. "Lens solüsyonunuzu son ay değiştirdiniz mi?" veya "Lensi 8 saatten fazla takmayın" gibi kısa uyarılar markaya güven katar. Çok dilli içerik veya markalı PDF göndermek için içerik kütüphanesi kurmak gerekir; bu konuda [WhatsApp Business API kurulum yazımız](/blog/whatsapp-business-api-kurulum) gönderim altyapısı için yol göstericidir.

### Solüsyon, Kutu ve Aksesuar Çapraz Satışı

Lens hatırlatmasının üzerine binmesi gereken doğal ürünler: solüsyon, lens kutusu ve göz damlası. Otomasyon, müşterinin son 6 ayda hangi yan ürünleri aldığını bilirse uygun olanı teklif eder. Sepet ortalamasını yüzde 15-22 artıran küçük bir akıştır; mağaza içinde sahada hatırlanması zor olan bu detay otomasyonla kalıcı hale gelir.

## Garanti, Cam Değişimi ve Çerçeve Onarımı Takibi

Optik satışında satışın hemen ardından başlayan garanti dönemi, müşteri sadakatinin altın penceresidir. Çiziklenen cam, gevşeyen vida veya kırılan menteşe için müşteriye doğru zamanda hatırlatma yapmak, hem hizmet kalitesini yansıtır hem ek ciroya kapı açar.

### Garanti Sürelerinin Otomatik Takibi

Cam garantisi genellikle 12 ay, çerçeve garantisi 24 ay, anti-reflektif kaplama 24 ay olarak belirlenir. Sistem bu üç farklı süreyi ayrı alanlarda tutar ve bitiş tarihinden 30 gün önce müşteriye "Garantiniz dolmak üzere, herhangi bir sorun var mı?" mesajı gönderir. Bu mesaj çoğu zaman müşterinin "evet aslında küçük çizik var, kontrol etsek mi" diye cevap vermesine yol açar ve mağazaya geri çekilir.

### Cam Değişimi Kampanyası

Çerçevesi sağlam ama camı yıpranmış müşteriye, sadece cam değişim kampanyası teklif etmek hem müşteri için ekonomik hem mağaza için yüksek karlı bir işlemdir. 18. ayda gönderilen "çerçevenize yeni cam yaptıralım" kampanyası, kapasitenin yüzde 20-30'unu doldurabilir.

### İade ve Değişim Hakkı

Tüketicinin Korunması Hakkında Kanun ve ilgili yönetmelikler kapsamında optik ürünlerde mesafeli satışta 14 gün cayma hakkı vardır; mağaza içi satışlarda bu süre olmamakla birlikte ürün ayıbı durumunda yasal sorumluluk devam eder. Otomasyon, satış sonrası 7. günde "memnuniyet anketi" göndererek olası ayıpları erken yakalar ve müşteri şikayetinin Tüketici Hakem Heyeti'ne gitmesini engeller.

## Kampanya, Sigorta ve Sezonsal Otomasyonlar

Hatırlatma akışı kuruldu, müşteri segmente edildi, şimdi kampanya katmanı geliyor. Optik sektöründe kampanya tasarımı, takvim ve sigorta sürelerine sıkı bağlıdır.

### Sigorta Yenileme Hatırlatması

Çoğu müşteri, özel sağlık sigortası veya tamamlayıcı sağlık sigortasıyla yıllık gözlük çerçevesi ve cam hakkı kullanır. Sigorta poliçesinin yenileme tarihi sisteme girilirse, "Bu yılki gözlük hakkınızı kullanmadan dönem bitmesin" mesajı yılda bir kez ciddi bir trafik yaratır. PORTZEN müşterilerinde bu mesajın aralık ayında yaratttığı dönüş, yıllık cironun yüzde 6-9'una denk geliyor.

### Anneler Günü, Babalar Günü ve Doğum Günü

Doğum gününde yüzde 15 ek hediye çeki veya babalar gününde "babanıza güneş gözlüğü hediye edin" kampanyası, klasik ama hâlâ çalışan kurgulardır. Otomasyon, müşteri doğum tarihini ve eş-ebeveyn ilişkilerini biliyorsa, mesajları doğru kişiye doğru zamanda gönderir. Sosyal medya kampanyalarıyla birleştirilmesi gerekir; [sosyal medya ajansı](/sosyal-medya-ajansi) hizmetimiz bu entegrasyonu sağlar.

### Sezonsal Trafik: Eylül ve Aralık

Eylül ayı (okulun başlangıcı) ve aralık ayı (sigorta hakkının son ayı) optik sektörünün iki ana sezonudur. Bu iki ayda kampanya yoğunluğunu artırmak, mesaj sayısını da otomatik olarak ayarlamak gerekir. Müşteriyi spamlamadan ama görünür kalmaktır püf nokta; haftada birden fazla pazarlama mesajı atmamak doğru kuraldır.

### Reklam Trafiğiyle Entegrasyon

Sadece mevcut müşteri değil, yeni müşteri çekme tarafında [Meta reklam ajansı](/meta-reklam-ajansi) çalışmaları otomasyon sisteminizle entegre olmalıdır. Reklamdan gelen müşteri Excel'e değil doğrudan CRM'e düşmeli, otomatik karşılama mesajı almalı, randevuya çevrilmelidir. Ayrıntılı yaklaşım için [klinik online randevu sistemi yazımız](/blog/klinik-online-randevu-sistemi-2026) optik mağazalar için de uyarlanabilir bir çerçeve sunuyor.

## KVKK, Sağlık Verisi ve İYS Uyumu

Optik mağazalarda toplanan veriler arasında refraksiyon değerleri ve göz sağlığı bilgisi olduğu için KVKK kapsamında özel nitelikli kişisel veri sınıfına girer. Bu, sıradan müşteri verisinden çok daha sıkı kurallara tabi olduğu anlamına gelir.

### Açık Rıza ve Aydınlatma Metni

Müşteri kaydı alınırken iki ayrı imza gerekir: birincisi sağlık verisinin işlenmesine açık rıza, ikincisi pazarlama mesajları için İYS izni. Bu rızalar dijital ortamda da alınabilir ancak hangi gün, hangi yöntemle alındığı ispatlanabilir biçimde saklanmalıdır. Açık rıza alınmadan reçete bilgisi kaydedilirse, denetimde mağazaya 1 milyon TL üzeri ceza riski doğar.

### İYS Üzerinden SMS ve E-Posta İzni

Ticari elektronik ileti (SMS, e-posta, otomatik arama) göndermek için İYS sistemine onay yüklenmesi şarttır. WhatsApp mesajları bu kapsamda farklı yorumlanıyor olsa da pazarlama amaçlı toplu WhatsApp gönderiminin de iznine sahip olmak güvenlidir. Detaylı uygulama için [KVKK müşteri verisi rehberimiz](/blog/kvkk-musteri-verisi-rehberi) ve [e-posta pazarlama otomasyonu rehberimiz](/blog/email-pazarlama-otomasyonu-rehber) doğrudan başvuru kaynaklarıdır.

### Veri Saklama ve Silme Hakkı

Müşteri istediği zaman verisinin silinmesini talep edebilir. Sistemde "silme talebi alındı, 30 gün içinde işleme alınır" akışı otomatik kurulmalıdır. Pasif müşterinin verisi de mevzuata göre belirlenen süre dolduğunda otomatik arşivlenmeli veya silinmelidir. Bu disiplin denetim açısından kritik, müşteri güveni açısından değerlidir.

## Yaygın Hatalar

- Tüm müşterilere aynı şablonu göndermek. 28 yaşındaki kontak lens kullanıcısı ile 62 yaşındaki progresif gözlük kullanıcısı aynı mesajı almamalıdır.
- Reçete tarihini değil satış tarihini hatırlatmaya tetikleyici yapmak. Müşteri reçete aldığı tarihten 23 ay sonra muayene olmalı, gözlüğü teslim aldığı tarihten değil.
- Çocuk müşterilere yetişkin periyodu uygulamak. 12 yaş altı her 12 ayda hatırlatılmalı; aksi takdirde göz sağlığını riske atan bir hizmet sunmuş olursunuz.
- KVKK izni almadan toplu SMS göndermek. 2026 itibarıyla ceza taban tutarı 200 bin TL'den başlıyor ve şikayet sayısıyla katlanıyor.
- Kontak lens müşterisini "lens tükendi mi" diye sormadan, doğrudan "yeni paket aldık, gel" diye davet etmek. Müşteri henüz tüketmediğinden gelmiyor, mesajı spam olarak algılıyor.
- Garanti süresi takibi tutmayıp, çiziklenen camla gelen müşteriye "garantiniz bitmiş" demek. İlişki onarılması zor şekilde zedeleniyor.
- Sigorta yenileme hatırlatmasını mart ayında değil, aralık ayında göndermek. Müşteri hakkını kullanamadan dönem bitiyor ve bir sonraki yıl rakip mağazayı tercih ediyor.

## Sıkça Sorulan Sorular

### Optik için en uygun CRM hangisidir?

Türkiye pazarında doğrudan optik sektörüne özel az sayıda CRM var. Çoğu mağaza, kasa programı (OptikSoft, ZenOptik, Mikro) üstüne genel amaçlı bir CRM (HubSpot, Zoho, Pipedrive) ekliyor. PORTZEN olarak bizim önerimiz, küçük bağımsız mağazalar için kasa programı + WhatsApp AI asistanı kombinasyonu; zincir mağazalar için tam CRM entegrasyonu. Karşılaştırma için [HubSpot vs Zoho CRM yazımız](/blog/hubspot-vs-zoho-crm-turkce) faydalı bir başlangıçtır.

### Aylık otomasyon maliyeti nedir?

Orta ölçekli bir optik mağazası için tipik aylık maliyet: CRM yazılımı 750-2.500 TL, WhatsApp Business API mesaj ücretleri 600-1.800 TL, SMS paketi 0,15 TL/adet (genelde ay 800-1.500 TL), otomasyon platformu 0-2.000 TL arası. Toplam 2.500-7.000 TL/ay bandında bir bütçe yeterlidir. Kurulum tek seferlik 25.000-60.000 TL arasında değişir.

### Hatırlatma mesajları ne sıklıkta gönderilmeli?

Aktif müşteriye ayda en fazla 1 pazarlama mesajı, 1 servis mesajı (randevu, hatırlatma) doğru ölçüdür. Bu sınırın aşılması müşterinin engellemesine ve numaranızın spam etiketi almasına yol açar. Kontak lens müşterileri için tüketim bazlı tetikleyici farklı çalıştığı için bu sınırın dışındadır.

### Müşteriye yanlış reçete bilgisi gönderirsek ne olur?

Otomasyonda en kritik kontrol noktası, reçetenin hatasız aktarılmasıdır. Yanlış diyoptri ile cam üretimi hem ekonomik hem hukuki olarak ciddi sorun doğurur. Bu yüzden otomatik mesajlarda reçete detayını paylaşmak yerine "muayene tarihi yaklaştı" şeklinde genel hatırlatma yapmak, reçete detayını sadece kayıtlı müşteri portalı üzerinden erişilebilir tutmak en güvenlisidir.

### Reklamdan gelen yeni müşteriler otomasyona nasıl dahil ediliyor?

Meta veya Google reklamından gelen lead, doğrudan CRM'e düşmeli, "yeni müşteri" segmentinde işaretlenmeli, 5 dakika içinde otomatik karşılama mesajı almalıdır. Sonra randevu için müşteri temsilcisi devreye girer. Tüm süreç [WhatsApp AI asistanı sayfamızda](/whatsapp-ai-asistani) detaylı anlatılmıştır.

## PORTZEN ile Optik Otomasyonu Kurmak

Bir optik mağazasının cirosunun en büyük kısmı, kapısından bir kez girip kaybolan müşterilerin geri dönüşünden gelir. Bu döngüyü insan eliyle takip etmek pratikte mümkün değil; doğru tasarlanmış bir otomasyon ise aynı işi sessizce, doğru zamanda ve yüksek dönüş oranıyla yapar. PORTZEN olarak Ankara merkezli olarak Türkiye'nin farklı şehirlerinde optik mağazaları için reçete takibi, kontak lens hatırlatması, sigorta yenileme kampanyası ve KVKK uyumlu müşteri verisi yönetimi projeleri kurguluyoruz. Mevcut müşteri veritabanınız üzerinden çıkardığımız "23. ay penceresine giren müşteri" raporu ile ilk demo görüşmesine geliyoruz; rakamı görmek karar vermeyi kolaylaştırıyor. Detaylı bilgi ve teklif için [iletişim sayfamızdan](/iletisim) ulaşabilir, sektöre özel çözümler için [CRM otomasyonu](/crm-otomasyonu) ve [otomasyon hizmetleri](/whatsapp-ai-asistani) sayfalarımızı inceleyebilirsiniz.
