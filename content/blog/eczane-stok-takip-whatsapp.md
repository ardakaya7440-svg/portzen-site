---
title: "Eczane Stok Takibi ve WhatsApp Sipariş Hatırlatma Sistemi"
slug: "eczane-stok-takip-whatsapp"
category: "sektorel"
description: "Eczane stok takibi ve WhatsApp ile kronik hasta hatırlatma sistemi. OTC, reçeteli ve ITS uyumlu otomasyon kurulumu için 2026 rehberi."
keywords: ["eczane stok takip", "eczane whatsapp hasta hatırlatma", "eczane otomasyon", "kronik hasta takibi", "eczane crm"]
publishedAt: "2026-06-23"
author: "Arda Kaya"
readingTime: "11 dakika"
relatedServices: ["ai-bot", "otomasyon"]
ogImage: "/blog/og/eczane-stok-takip-whatsapp.png"
---

# Eczane Stok Takibi ve WhatsApp Sipariş Hatırlatma Sistemi

Türkiye'de 28 binin üzerinde eczane faaliyet gösteriyor ve neredeyse hepsinin ortak bir derdi var: stoğu doğru yönetmek ve kronik hastaları zamanında bilgilendirmek. Sabah açılışta sıraya giren hasta "ablacığım benim ilacımdan var mı?" diye soruyor, sizse arkadaki rafa koşturuyorsunuz. Aynı anda WhatsApp'a düşen "mama bitti, hazırlatabilir misiniz?" mesajı dikkat dağınıklığında kaybolup gidiyor. Akşam kasayı kapatırken fark ediyorsunuz: bugün en az 5-10 OTC satışı kaçtı, 3 kronik hasta reçetesini başka eczaneye yazdırdı, bir bebeğin maması ise hâlâ "hazır" yazılı poşette sahibini bekliyor.

Eczacılık artık sadece raf yönetimi değil; bir tarafta ITS bildirimleri, e-reçete sorguları, sigortalı satışlar, diğer tarafta OTC, kozmetik, mama-bebek bezi ve kronik hasta takibi var. Bunların hepsini tek başınıza ya da bir kalfa ile yürütmek imkânsıza yakın. İşte bu noktada WhatsApp tabanlı bir stok sorgu ve hatırlatma sistemi devreye giriyor. Günlük 80-150 mesaj trafiğini insan eli değmeden karşılayan, stoğunuzdaki ilacın var olup olmadığını saniyeler içinde söyleyen, kronik hastayı "ilacın bitmeden 3 gün önce" otomatik uyaran bir altyapı kurabilirsiniz. Bu rehberde, eczanenize özel WhatsApp + stok entegrasyonunun nasıl çalıştığını, hangi yazılımlarla nasıl konuştuğunu, KVKK ve ITS açısından nelere dikkat etmeniz gerektiğini ve hangi gelir kalemlerini büyütebileceğinizi adım adım anlatacağız.

## Eczane Stok Yönetiminde Klasik Sorunlar

Eczanenizin gerçek problemi "ilaç bulamamak" değil; **doğru ilacın doğru anda doğru hastada olmadığını fark edememek**. Klasik tabloda şu hatalar tekrar ediyor: Aynı kutu hem rafta hem çekmecede sayılıyor, OTC ürünler kasanın yanında saklandığı için sisteme girilmiyor, prospektüsü sorulan bir ilaç "bizde yok galiba" denilip geri çevriliyor; oysa stoğun arka koridorunda 4 kutu var. Sonuçta günlük 5-10 OTC satışı, aylık 3-5 bin TL'lik bir kayıp olarak geri dönüyor.

İkinci klasik sorun, **kronik hasta takibinin defterle yürütülmesi**. Diyabet, hipertansiyon, tiroid, kolesterol, KOAH ilaçlarını her ay aynı tarihlerde alan müşterileriniz var. Kronik hasta oranı toplam müşterinizin yaklaşık yüzde 30'una denk geliyor ve ciroya katkıları çok daha yüksek. Ama hangi hastanın hangi gün ilacı bittiğini ezberinizde tutmak, hatta defterden takip etmek artık mümkün değil. Hasta unutuyor, siz hatırlatamıyorsunuz, ilaç başka eczaneden alınıyor.

Üçüncü sorun **iade ve son kullanma tarihi yönetimi**. Miadı yaklaşan kutular fark edilmediğinde, ya hasta tepkisi geliyor ya da imha listesine girip doğrudan zarar yazıyorsunuz. ITS sistemine bildirilmeyen ya da geç bildirilen kutular ayrı bir baş ağrısı.

Dördüncü sorun **mama, bebek bezi, dermokozmetik gibi tekrarlı OTC satışların kaçması**. Bir bebeğin 2 numara bezi bittiğinde anne genelde en yakın markete gidiyor; oysa eczanenizden bir hatırlatma gelse, 6 ay boyunca düzenli müşteri olabilir. Tüm bu sorunların ortak çözümü, [eczanenize özel CRM otomasyonu](/crm-otomasyonu/eczane) kurmak ve bunu WhatsApp ile birleştirmektir.

## WhatsApp Tabanlı Stok Sorgu Sistemi Nasıl Çalışır?

WhatsApp tabanlı stok sorgu sistemi, hastanın mesajla yazdığı ilaç adını arka planda eczane otomasyon yazılımınızdan sorgulayıp **saniyeler içinde "var/yok/yakın eczanede var"** yanıtı dönen bir akıştır. Mantığı oldukça basit görünür ama doğru kurulumu ince işçilik ister.

Hasta WhatsApp Business numaranıza "Concor 5 mg var mı?" yazdığında sistem önce niyet tespiti yapar: bu bir stok sorgusu mu, hatırlatma talebi mi, fiyat sorusu mu? Ardından ilaç adını normalize eder; "konkor", "Concor", "concor 5" gibi farklı yazımları aynı barkoda eşler. Sonra eczane otomasyon yazılımınızın veritabanından canlı sorgu çeker. Stoğunuzda varsa "Evet, 3 kutu mevcut, sizin için ayırayım mı?" şeklinde yanıt döner. Yoksa "Bu ilaç şu an stokta yok, ½ saatte tedarik edebilirim, hazırlamamı ister misiniz?" gibi alternatif sunar.

Bu sistemin işi sadece "var/yok" demek değildir. İyi kurulan bir akış, **hasta segmentasyonu** da yapar. Daha önce alışveriş yapmış bir kronik hastaysa otomatik olarak "her ay aldığınız Glucophage 1000 ile birlikte hazırlayayım mı?" diye sorabilir. Yeni bir hastaysa "reçeteniz var mı, e-reçete kodunuzu paylaşır mısınız?" akışına yönlendirir.

Burada hayati nokta şu: WhatsApp yanıtları **kalfa veya eczacı zamanını çalmamalı**. Botun ulaşamadığı, emin olmadığı ya da kritik (sigortalı satış, narkotik, e-reçete) durumlar otomatik olarak insan operatöre devredilmeli. Geri kalan rutin sorgular - ki günlük 80-150 mesajın yaklaşık yüzde 75'i bu kategoridedir - tamamen otomatik kapanmalı.

Akışın detaylı kurulumunu [eczanelere özel WhatsApp asistanı](/whatsapp-ai-asistani/eczane) sayfamızda anlatıyoruz; orada hangi mesaj şablonlarının onaylanması gerektiğini, Meta WhatsApp Business API limitlerinin nasıl yönetildiğini ve hangi otomasyon yazılımlarıyla doğrudan konuştuğumuzu görebilirsiniz. Aynı zamanda [eczane WhatsApp sipariş sistemi blog yazımız](/blog/eczane-whatsapp-siparis-sistemi) sipariş tarafındaki uçtan uca akışı tamamlıyor.

## Kronik Hasta Reçete Hatırlatma Otomasyonu

Eczanenizin cirosunda en istikrarlı kalem, kronik hastalardır. Bir hipertansiyon hastası 12 ay boyunca aynı ilacı alır; bir tiroid hastası belki 10 yıl. Ama bu istikrar **siz hatırlatabildiğiniz sürece** sizde kalır. Hasta kutuyu bitirdiği gün başka eczaneye uğradıysa, o zincir kırılmıştır.

Kronik hasta hatırlatma otomasyonu üç temel veri üzerine kuruludur: hastanın ilacı ne zaman aldığı, ilacın kaç günlük dozda olduğu ve hangi günden itibaren bitmeye yaklaştığı. Sistem, hasta ilacı aldığı gün otomatik bir takvim oluşturur. Örneğin 30 günlük bir tansiyon ilacı 1 Haziran'da verildiyse, 27. günde yani 27 Haziran'da WhatsApp üzerinden şu mesaj gider: "Merhaba Ayşe Hanım, Coraspin'iniz yaklaşık 3 gün sonra bitiyor. Reçetenizi hazırlayalım mı? Yanıt: 1- Evet hazırla 2- Bu hafta sonra 3- Bilgi almak istiyorum."

Bu basit akış üç şey kazandırır: birincisi, hasta o ilacı sizden almaya devam eder; ikincisi, siz reçeteyi önceden hazırlayıp hastanın eczanede sadece 30 saniye durmasını sağlarsınız; üçüncüsü, e-reçete kodu varsa baştan alıp tedarik sürecini başlatırsınız.

Daha gelişmiş kurulumlarda kronik hasta hatırlatması **çoklu ilaç senkronizasyonu** ile yapılır. Yani aynı hastanın 3 farklı kronik ilacı varsa, bunların hepsi aynı gün bitecek şekilde dozlar senkronize edilir ve tek mesajla tek hatırlatma gönderilir. Bu, hem sizin için iş yükünü azaltır hem hastanın aklını karıştırmaz.

Hatırlatma sıklığını da iyi ayarlamak gerekir. Her 3 günde bir mesaj atmak hastayı engellemeye iter. Tipik bir kurulumda hasta için ayda 1-2 anlamlı temas hedeflenir: bitmeden 3 gün önce hatırlatma, aldıktan 1 gün sonra "ilacı düzenli kullanıyor musunuz?" tipi kısa bir takip. Türkiye'de ortalama bir eczanenin 200-400 aktif kronik hastası vardır; bu hastaların yüzde 30'una bile düzenli hatırlatma yapmak ayda 60-120 ekstra reçete demektir.

## OTC ve Sigortalı Satış Ayrımı: WhatsApp'ta Nasıl Yönetilir?

WhatsApp üzerinden gelen taleplerin önemli bir kısmı OTC'dir: ağrı kesici, vitamin, soğuk algınlığı, dermokozmetik, mama, bebek bezi. Bu ürünlerde reçete gerekmediği için akış hızlıdır: hasta sorar, sistem stok kontrolü yapar, fiyat söyler, kapıda ödeme ya da nakit/kart bilgisini alır, kuryeye ya da hastanın gelmesine yönlendirir. Burada otomasyonun yüzde 90 oranda devreye girmesi mümkündür.

Sigortalı (SGK kapsamında reçeteli) satışta ise işler çok farklıdır. Sistem **kesinlikle "ilacı hazırladım, getirin parayı" diye yanıt vermez**. Çünkü ortada e-reçete sorgusu, SGK provizyonu, hastanın T.C. kimlik doğrulaması, muafiyet/katılım payı hesaplaması ve kupon süreci vardır. WhatsApp akışı burada şu adımları izler: hastadan T.C. ve e-reçete kodunu alır, eczacı veya kalfaya bildirir, e-reçete sorgulanır, provizyon alındıktan sonra hastaya "ilacınız hazır, kimliğinizle birlikte uğrayabilirsiniz" mesajı gider.

Kritik nokta şudur: WhatsApp botu sigortalı satışta **sadece ön hazırlık adımını otomatize eder**, ödeme ve teslim adımını otomatize etmez. Bu hem yasal gereklilik hem de hata payını sıfıra indirmenin tek yoludur. Çünkü yanlış kişiye verilen reçeteli ilaç sizin ruhsatınızı tehlikeye atabilir.

OTC tarafında ise tam tersine, sistemi olabildiğince derinleştirmek mantıklıdır. Örneğin müşteri "C vitamini önerir misiniz?" diye yazdığında bot, eczacının onayladığı bir öneri listesinden (Redoxon, Supradyn, Solgar gibi) 2-3 ürün önerip fiyat ve stok bilgisini paylaşabilir. Önemli olan, önerilen ürünlerin **eczacı tarafından önceden onaylanmış bir kütüphaneden** gelmesidir; bot rastgele tıbbi tavsiye vermez.

Aynı ayrımın bir benzeri kupon ve sadakat tarafında da işler. OTC alışverişlerde "5. mama alımınızda 1 mama hediye" tipi otomatik kupon biriktirme yapılabilir; reçeteli satışlarda ise sadakat sistemi çalışmaz, mevzuat buna izin vermez.

## ITS, E-reçete ve KVKK Uyumluluğu

WhatsApp asistanı kurarken aklınızdaki en büyük sorulardan biri muhtemelen şudur: "Bu yasal mı, hasta verilerini WhatsApp'ta tutmak doğru mu, ITS'ye uygun mu?" Cevap net: doğru kurulduğunda hepsi uyumludur, ama kuralları atlamak felaket getirir.

**KVKK** açısından üç temel kural vardır: birincisi, hastanın WhatsApp üzerinden iletişime açık rıza vermesi gerekir. Bu rıza bir kez alınır, kayıt altında tutulur ve hasta istediği an "iletişim listesinden çıkar" diyerek geri çekebilir. İkincisi, ilaç adları ve sağlık verileri **özel nitelikli kişisel veri** kapsamındadır; açık rıza olmadan saklanamaz. Üçüncüsü, veri merkezinin Türkiye'de ya da güvenli kabul edilen ülkelerde olması ve aktarımların şifreli yapılması gerekir.

**E-reçete** tarafında, hastanın T.C. ve e-reçete kodu WhatsApp üzerinden alındığında bu bilgi otomatik olarak şifrelenir ve sadece eczacı/kalfanın görebileceği bir panele düşer; chat geçmişinde uzun süre tutulmaz. İyi kurulan sistemlerde reçete kodu işlem tamamlandıktan sonra konuşmadan otomatik silinir.

**ITS** (İlaç Takip Sistemi) açısından önemli olan, satışın yapıldığı anda karekod okutmasının yine eczanenizin otomasyon yazılımı üzerinden yapılmasıdır. WhatsApp botu ITS bildirimini doğrudan göndermez; sadece hastayı yönlendirir, satışın kayıt adımını otomasyon yazılımı tamamlar. Yani sistem ITS'yi atlamaz, sadece müşteri trafiğini düzenler.

Buna ek olarak, hassas konularda otomatik mesaj atılmaz. Örneğin doğum kontrol hapı, antidepresan, narkotik ilaçlar gibi kategorilerde hatırlatma akışı **kapalı tutulur** ya da hasta açık rıza verdiyse sadece kişiselleştirilmiş ve gizliliği koruyan kısa mesajla yapılır. PORTZEN ekibi sistemi kurarken bu ayarları sizinle birlikte tek tek belirler; standart bir akış değil, eczanenize özel bir akış kurulur. Süreç boyunca veri güvenliği ve uyumluluk denetimleri için [CRM otomasyon rehberimizi](/blog/crm-otomasyonu-rehberi) de incelemenizi öneririz.

## Mama, Bebek Bezi ve Düzenli OTC Aboneliği

Eczanenizin yan gelir kapısı OTC'dir ama OTC'nin de en istikrarlı kalemi mama ve bebek bezidir. Bir bebek doğduğu andan itibaren ortalama 24-30 ay düzenli mama, 30-36 ay düzenli bez tüketir. Bu, ortalama bir aile için aylık 1.500-3.000 TL'lik bir harcamadır ve bu harcamanın nereye gideceğini büyük oranda **hatırlatma ve kolaylık** belirler.

Klasik tabloda anne ya da baba beze "az kaldı" dediğinde önce telefonunu açıp en yakın eczaneyi arar ya da markete uğrar. Eczanenizin WhatsApp asistanı varsa ve aile daha önce sizden bez aldıysa, bot 2 hafta sonra otomatik mesaj atar: "Merhaba Ayşe Hanım, küçük Defne için son aldığınız 3 numara Prima bezler bitmek üzere olabilir. Stoğumuzda mevcut, aynı paketi hazırlayıp kapınıza yollayalım mı?"

Bu basit mesaj iki şey yapar: birincisi, ailenin başka eczaneye gitmesini engeller; ikincisi, bir sonraki bez numarasına geçildiğinde de sizi adres haline getirir. Aynı mantık mama, bezelye/pirinç ek mama, vitamin damlaları, D vitamini, demir takviyeleri, probiyotikler ve dermokozmetik (Bioderma, La Roche-Posay, Avene) için geçerlidir.

WhatsApp aboneliği tarzı bir sistem kurmak da mümkündür. Aile "evet, her ay aynı paketi hazırlatın" derse, sistem otomatik olarak ayda bir hatırlatma + sipariş onayı + kurye atama yapar. Bu model özellikle siteye yakın oturan ailelerde aylık 800-1.500 TL gibi sabit bir abonelik geliri yaratır.

Önemli detay: bu sistemi çalıştırırken aile hayatına çok girmemek gerekir. Ayda 1 hatırlatma yeterlidir. Aşırı mesaj atmak hem WhatsApp'ın botu engellemesine yol açar hem ailenin sinirini bozar. PORTZEN ekibi bu sıklığı sizin müşteri profilinize göre ayarlar.

## Stok Yazılımı ile WhatsApp Entegrasyonu (Farmasis, Eczanem, Nartek vb.)

WhatsApp asistanının kalbi, eczane otomasyon yazılımınızla kurduğu canlı entegrasyondur. Türkiye'de en yaygın kullanılan eczane yazılımları Farmasis, Eczanem, Nartek, Farmakod, Net Eczane gibi sistemlerdir. PORTZEN olarak hem API erişimi olan modern yazılımlar hem de doğrudan API'si olmayan klasik yazılımlar için iki ayrı entegrasyon yaklaşımı kullanıyoruz.

API erişimi olan yazılımlarda iş kolaydır: bot, ilaç adı veya barkod sorgusunda doğrudan API'ye gider, stoğu okur, sonucu döner. Burada gecikme genelde 1-2 saniye altındadır ve hata payı sıfıra yakındır. Stok değişiklikleri (satış, iade, depo girişi) anlık olarak senkronize olur, dolayısıyla bot her zaman güncel veriye sahiptir.

API'si olmayan ya da kapalı sistemlerde alternatif yöntemler vardır: yazılımın export dosyalarını belirli aralıklarla okumak, ekran üzerinden veri çekmek (RPA tarzı), ya da bir köprü servis yazmak. PORTZEN'in eczanelerle çalışırken kullandığı yöntem, **eczanenin günlük operasyonunu hiç bozmadan veri köprüsü kurmaktır**. Yani siz Farmasis'i nasıl kullanıyorsanız aynı şekilde kullanmaya devam edersiniz, sistem arka planda veriyi okur.

Entegrasyonun en önemli parçası **çift yönlü senkronizasyon**dur. Sadece "ilaç var mı?" sorgusu değil, WhatsApp üzerinden gelen siparişin de otomasyon yazılımına bir "sipariş kaydı" olarak düşmesi gerekir. Böylece kalfa, paneli açtığında hangi hastaya hangi ilacın hazırlanacağını net görür; hangi sipariş kuryeye verildi, hangisi teslim edildi, hangisi iade oldu - hepsi takip edilebilir.

Bunun yanında bot, depo yönetimi açısından da değerli veri üretir. Hangi ilacın haftada kaç defa sorulduğunu, hangi OTC ürünün hangi yaş grubuna sık satıldığını, hangi gün ve saatte talep yoğunluğu olduğunu raporlar. Bu veriler sayesinde stoğunuzu daha akıllı kurar, ölü stoğu azaltır, miadı yaklaşan ürünleri proaktif yönetirsiniz. Eczanenizin dijital yüzünü de güçlendirmek isterseniz [eczane web tasarımı](/web-tasarim/eczane) hizmetimizle randevu sistemi, ilaç sorgu formu ve OTC kataloğunu sitenize entegre ediyoruz.

## Sıkça Sorulan Sorular

### WhatsApp asistanı eczane yazılımıma müdahale eder mi, çalışma düzenimi bozar mı?

Hayır, doğru kurulduğunda mevcut çalışma düzeninizi hiç değiştirmez. PORTZEN olarak Farmasis, Eczanem, Nartek gibi yazılımlarınızı olduğu gibi bırakırız; sistemimiz arka planda veri köprüsü kurar. Siz ilacı satarken eskisi gibi karekod okutursunuz, ITS bildirimini yine yazılımınız gönderir. WhatsApp tarafı sadece hasta ile ilk teması, stok sorgusunu, hatırlatmayı ve sipariş ön hazırlığını otomatikleştirir. Kalfa ve eczacı operasyonunun temposu bozulmaz; aksine günlük 80-150 mesaja cevap yetiştirme yükü ortadan kalkar.

### Kronik hasta hatırlatmaları KVKK'ya aykırı mı, hasta şikayet eder mi?

Açık rıza alındığı sürece tamamen mevzuata uygundur. Sistemin ilk kurulumunda her hastaya bir defaya mahsus rıza metni gönderilir; hasta "evet, ilaç bittiğinde hatırlatın" derse devam edilir, "hayır" derse o hastaya hiçbir mesaj gitmez. Hasta istediği an "beni listeden çıkar" yazarak iletişimi durdurabilir ve sistem o anda devre dışı kalır. PORTZEN ekibi rıza metnini, veri saklama sürelerini ve hassas kategori istisnalarını (doğum kontrol, antidepresan vb.) eczanenize özel şekilde düzenler.

### Sistemi kurmanın maliyeti ne kadar, kaç ayda kendini amorti eder?

Kurulum maliyeti eczanenin büyüklüğüne, kullandığınız otomasyon yazılımına ve aylık mesaj hacmine göre değişir. Ortalama bir mahalle eczanesi için kurulum + ilk ay birkaç bin TL bandındadır; sonrasında aylık sabit bir hizmet bedeli vardır. Amortisman süresi genelde 2-4 ay arasıdır. Sebebi basit: kronik hasta kaçışını yüzde 20-30 azaltmak, OTC tekrar siparişlerini düzenli hale getirmek ve mama/bez aboneliklerini başlatmak, aylık 15-30 bin TL ek ciroya denk gelir. Detaylı fizibilite için PORTZEN ekibi sizinle ücretsiz bir analiz görüşmesi yapar.

### Hangi büyüklükte eczane bu sisteme uygundur, küçük eczane için anlamlı mı?

Küçük eczaneler için bu sistem belki de en anlamlı yatırımdır. Çünkü büyük zincir eczanelerin reklam ve sadakat bütçesiyle rekabet etmek mümkün değildir; ama bir mahalle eczanesi, müşterileriyle daha sıkı bir iletişim ve daha hızlı bir hizmetle bu rekabeti dengeleyebilir. Günlük 50 mesaj alan bir eczane de, 300 mesaj alan bir eczane de aynı altyapıdan yararlanır; sadece mesaj hacmine göre paket farklılaşır. PORTZEN bugüne kadar 40+ eczaneye sistem kurdu ve bunların önemli kısmı tek kalfa ile çalışan küçük ölçekli işletmelerdi.

### WhatsApp Business numarası mı kullanılır, normal WhatsApp olur mu?

Bu tip bir otomasyon için Meta'nın resmi **WhatsApp Business API**'si kullanılır, normal WhatsApp ya da basit WhatsApp Business uygulaması yeterli değildir. Çünkü otomatik mesaj şablonlarının Meta tarafından onaylanması, çoklu kullanıcı erişimi, güvenlik denetimi ve numaranızın bot olarak engellenmemesi için bu altyapı şarttır. PORTZEN olarak Meta WhatsApp Business API başvurusunu, doğrulamasını ve şablon onaylarını sizin adınıza biz yürütüyoruz; eczacının teknik bir iş yapması gerekmiyor.

## PORTZEN ile Sistem Kurmak

PORTZEN, İzmir merkezli bir dijital ajans olarak Türkiye genelinde 40'tan fazla eczaneye WhatsApp asistanı, stok entegrasyonu ve kronik hasta hatırlatma sistemi kurdu. Farmasis, Eczanem, Nartek gibi yaygın otomasyon yazılımlarıyla entegrasyon deneyimine sahibiz; Meta WhatsApp Business API başvurusundan KVKK uyum metinlerine, mesaj şablon onaylarından kalfa eğitimine kadar tüm süreci uçtan uca yönetiyoruz. Eczanenizin günlük operasyonunu bozmadan, mevcut yazılımınıza dokunmadan, sadece WhatsApp tarafını kurup hasta-eczane temasını otomatikleştiriyoruz.

Sistemin kurulum süresi ortalama 7-14 gündür. Önce ücretsiz bir analiz görüşmesi yapar, eczanenizin günlük mesaj hacmini, kronik hasta sayısını, OTC kategorilerinizi ve hedeflerinizi inceleriz. Ardından size özel bir teklif hazırlar; onayınızın ardından entegrasyon, şablon hazırlığı, KVKK rıza akışları ve test sürecini başlatırız. Canlıya alındıktan sonra ilk 30 gün boyunca her gün proaktif takip yapar, akışı sizin eczanenizin temposuna göre ince ayarlarız.

Eczanenizin OTC kayıplarını durdurmak, kronik hastalarınızı sizde tutmak ve mama-bebek bezi gibi düzenli alışverişleri abonelik gelirine dönüştürmek istiyorsanız, [iletişim sayfamızdan](/iletisim) ücretsiz analiz randevusu alabilirsiniz. PORTZEN ekibi 24 saat içinde size dönüş yapar ve eczanenize özel bir yol haritası sunar.
