---
title: "Kendi Sunucunuzu Kurmak mı, Bulut Sunucu Kiralamak mı?"
seoTitle: "Kendi Sunucusu mu, Bulut Sunucu mu? Karar Rehberi"
slug: "kendi-sunucunu-kurmak-mi-bulut-sunucu-mu"
category: "altyapi"
description: "Kendi fiziksel sunucunuzu mu kurmalısınız, bulut sunucu mu kiralamalısınız? Maliyet yapısı, kontrol, bakım yükü ve risk açısından karar rehberi."
keywords: ["kendi sunucunu kurmak", "bulut sunucu kiralama", "fiziksel sunucu mu bulut mu", "on-premise sunucu", "işletme sunucu seçimi"]
publishedAt: "2026-11-25"
updatedAt: "2026-11-25"
author: "Arda Kaya"
relatedServices: ["sunucu-kurulumu"]
---

# Kendi Sunucunuzu Kurmak mı, Bulut Sunucu Kiralamak mı?

Kısa cevap: İş yükünüz sürekli, öngörülebilir ve donanıma yakın çalışmayı gerektiriyorsa (yüksek RAM, büyük disk, GPU, sürekli çalışan otomasyonlar) kendi sunucunuz uzun vadede mantıklı olabilir. Trafiğiniz dalgalıysa, ekibinizde donanım ve ağ bakımı yapacak kimse yoksa veya birden fazla bölgede hizmet vermeniz gerekiyorsa bulut sunucu kiralamak daha az riskli başlangıçtır. Çoğu işletme için doğru cevap ikisinin bir karışımıdır.

Bu yazıda kararı etkileyen gerçek değişkenleri, iki modelin güçlü ve zayıf yanlarını ve hangi senaryoda hangisinin öne çıktığını anlatıyoruz.

## İki modeli doğru tanımlamak

**Kendi sunucunuz (on-premise / self-hosted donanım):** Fiziksel makineyi siz satın alırsınız; ofiste, bir dolapta ya da bir colocation alanında durur. Elektrik, soğutma, internet bağlantısı, donanım arızası ve işletim sistemi bakımı sizin sorumluluğunuzdadır.

**Bulut sunucu:** Bir sağlayıcının veri merkezindeki sanallaştırılmış kaynakları (vCPU, RAM, disk, ağ) kiralarsınız. Donanım, elektrik ve fiziksel güvenlik sağlayıcıdadır; işletim sistemi ve uygulama katmanı genellikle hâlâ sizdedir.

VPS, VDS ve fiziksel sunucu arasındaki teknik farkları ayrı bir yazıda ele aldık: [VPS, VDS ve Fiziksel Sunucu Arasındaki Farklar](/blog/vps-vds-fiziksel-sunucu-farklari). Burada odak, "sahip olmak mı, kiralamak mı" sorusu.

## Karşılaştırma tablosu

| Kriter | Kendi sunucunuz | Bulut sunucu |
|---|---|---|
| Maliyet yapısı | Başta donanım yatırımı, sonra elektrik ve bağlantı | Aylık/saatlik düzenli ödeme, kullanıma göre artar |
| Kaynak başına maliyet (uzun vade) | Sürekli yükte genellikle avantajlı | Sürekli yükte birikerek artabilir |
| Ölçekleme hızı | Yeni donanım almak gerekir (gün/hafta) | Dakikalar içinde yükseltme |
| Donanım arızası | Sizin sorununuz; yedek parça ve plan gerekir | Sağlayıcı çözer, sanal makine taşınır |
| İnternet ve elektrik | Ofis hattına ve UPS'e bağlı | Veri merkezi altyapısı |
| Veri konumu ve kontrol | Fiziksel olarak sizde | Sağlayıcının bölgesinde, sözleşmeye bağlı |
| Donanım özelleştirme | Tam (GPU, çok RAM, büyük NVMe) | Sağlayıcının paketleriyle sınırlı |
| Bakım yükü | Donanım + işletim sistemi + uygulama | İşletim sistemi + uygulama |
| Coğrafi dağıtım | Zor | Kolay (birden fazla bölge) |

Tabloda fiyat yok, çünkü doğru karşılaştırma liste fiyatıyla yapılmaz. Asıl hesap: donanımın kaç yıl kullanılacağı, sürekli ne kadar yük çalıştığı, elektrik tüketimi ve arıza durumunda yaşanacak kesintinin size maliyeti.

## Kendi sunucusu ne zaman mantıklı?

### Sürekli ve ağır iş yükleri

7/24 çalışan otomasyonlar, veritabanları, yerel yapay zekâ modelleri, video işleme veya büyük derleme süreçleri bulutta yüksek kaynaklı paketlere ihtiyaç duyar. Aynı kaynakları fiziksel olarak sahiplenmek, iş yükü gerçekten sürekli ise uzun vadede daha hesaplı olabilir.

### Donanım üzerinde tam kontrol

Belirli bir GPU, yüksek RAM kapasitesi veya hızlı yerel NVMe depolama gerekiyorsa bulutta bunları bulmak ya pahalı ya da kısıtlıdır. Kendi makinenizde BIOS ayarından disk düzenine kadar her şeyi belirlersiniz.

### Verinin fiziksel olarak sizde kalması

Bazı işletmeler müşteri verisinin belirli bir lokasyonda tutulmasını tercih eder. KVKK kapsamındaki yükümlülükler hem bulut hem kendi sunucunuzda geçerlidir; kendi sunucu tek başına uyumluluk sağlamaz ama veri akışını sadeleştirebilir. Hukuki değerlendirme için avukatınıza danışın.

### Dikkat edilmesi gerekenler

- **Elektrik ve UPS:** Ani elektrik kesintisi dosya sistemine ve veritabanlarına zarar verebilir. Kesintide düzgün kapanmayı tetikleyen bir UPS kurgusu gerekir.
- **İnternet bağlantısı:** Ev/ofis hatlarında sabit IP olmayabilir, yükleme hızı sınırlı olabilir. Cloudflare Tunnel gibi çözümler port açmadan yayın yapmayı sağlar, ama hattın kesilmesini çözmez.
- **Soğutma:** Kapalı bir dolapta çalışan sunucu termal kısmaya girebilir. Bunun etkilerini [Sunucular Neden Çöker?](/blog/sunucular-neden-coker) yazısında anlatıyoruz.
- **Fiziksel güvenlik:** Makineye fiziksel erişim, birçok yazılım önlemini anlamsız kılar. Disk şifreleme ve kilitli alan düşünülmelidir.

## Bulut sunucu ne zaman mantıklı?

### Değişken trafik

Kampanya dönemlerinde trafiği katlanan bir e-ticaret sitesi, kapasiteyi geçici olarak artırıp sonra düşürebilmekten fayda sağlar. Fiziksel sunucuda en yoğun ana göre donanım almak gerekir.

### Teknik ekip yoksa

Bulut, donanım tarafını tamamen ortadan kaldırır. Disk bozulduğunda kimsenin ofise gitmesi gerekmez. Yine de işletim sistemi güncellemeleri, güvenlik duvarı ve yedekleme sizin sorumluluğunuzda kalır; "bulut = bakım yok" yanlış bir varsayımdır.

### Hızlı başlangıç ve deneme

Yeni bir ürünü test ediyorsanız, donanım almadan dakikalar içinde bir sunucu açıp kapatabilmek ciddi bir esneklik sağlar.

### Birden fazla bölge

Kullanıcılarınız farklı ülkelerdeyse, yakın bölgelerde sunucu açmak gecikmeyi düşürür. Bunu kendi donanımınızla yapmak pratik değildir.

## Hibrit yaklaşım: çoğu işletme için gerçekçi cevap

Pratikte en sağlam yapı çoğu zaman ikisini birleştirir:

- **Ağır ve sürekli işler kendi sunucuda:** otomasyon motorları, yerel yapay zekâ modelleri, derleme işleri, iç araçlar.
- **Dışa açık ve kritik servisler bulutta veya CDN arkasında:** ana web sitesi, ödeme akışları, durum sayfası.
- **Yedekler en az bir farklı lokasyonda:** kendi sunucunun yedeği bulutta, bulutun yedeği başka bir sağlayıcıda.

PORTZEN olarak kendi altyapımızda da bu yaklaşımı kullanıyoruz: kendi fiziksel sunucumuzda Ubuntu Server üzerinde Docker ve Coolify çalışıyor; dışarıya Cloudflare Tunnel ile açılıyor, yönetim erişimi Tailscale üzerinden yapılıyor, izleme için Netdata ve Uptime Kuma kullanıyoruz. Bu kombinasyon port açmadan yayın yapmayı ve yönetim panellerini internete açmamayı mümkün kılıyor.

## Karar için kontrol listesi

Aşağıdaki soruları dürüstçe cevaplamak kararın büyük kısmını verir:

1. İş yükü günün büyük kısmında yüksek mi, yoksa ani zirveler mi yapıyor?
2. Donanım arızasında kaç saat kesintiyi kaldırabilirsiniz?
3. Sunucuyu fiziksel olarak kim, nerede barındıracak? Elektrik ve soğutma uygun mu?
4. İşletim sistemi güncellemelerini, yedekleri ve izlemeyi kim yapacak?
5. Özel donanıma (GPU, çok RAM, büyük disk) ihtiyacınız var mı?
6. Yedekler hangi lokasyonda tutulacak ve geri dönüş en son ne zaman test edildi?

Sunucuyu hangi modelde seçerseniz seçin, kurulumun kendisi aynı disiplini ister. Adım adım bir kurulum için [Linux Sunucu Kurulumu: İşletmeler İçin Kapsamlı Rehber](/blog/linux-sunucu-kurulumu-rehberi) yazısına bakabilirsiniz. Kaynak planlaması için Ubuntu'nun resmi [sunucu dokümantasyonu](https://ubuntu.com/server/docs) iyi bir başlangıç noktasıdır.

## Altyapı kararınızı birlikte netleştirelim

Hangi modelin size uygun olduğundan emin değilseniz, mevcut iş yüklerinizi ve büyüme planınızı birlikte değerlendirebiliriz. Kendi donanımınız için kurulum ve sertleştirme hizmetimizin detaylarına [Özel Linux Sunucu Kurulumu](/hizmetler/sunucu-kurulumu) sayfasından ulaşabilir, [iletişim sayfası](/iletisim) veya WhatsApp (+90 531 863 91 17) üzerinden bize yazabilirsiniz. Teklif, kapsama göre hazırlanır.

## Sıkça Sorulan Sorular

### Kendi sunucum bulut sunucudan her zaman daha ucuz mu olur?

Hayır. Sürekli yüksek yük çalıştıran ve donanımı birkaç yıl kullanılan senaryolarda avantajlı olabilir. Düşük ve dalgalı yükte, elektrik, bağlantı ve bakım emeği eklendiğinde bulut daha hesaplı kalabilir.

### Ofiste duran bir sunucuyu internete açmak güvenli mi?

Doğrudan port yönlendirme yerine Cloudflare Tunnel gibi giden bağlantı kuran çözümler ve yönetim için VPN (ör. Tailscale) kullanmak saldırı yüzeyini ciddi biçimde azaltır. Güvenlik duvarı, güncellemeler ve SSH sertleştirmesi yine şarttır.

### Bulut sunucu kullanırsam yedek almama gerek kalır mı?

Kalmaz. Sağlayıcının donanım yedekliliği, sizin yanlışlıkla sildiğiniz veriyi veya bozulan veritabanını geri getirmez. Bağımsız, farklı lokasyonda tutulan ve düzenli test edilen yedekler gerekir.

### Kendi sunucudan buluta sonradan geçmek zor mu?

Uygulamalar Docker gibi konteynerlerle paketlenmişse geçiş görece kolaydır. Veritabanı taşıma, DNS değişikliği ve kesinti planlaması dikkat ister; doğru planla kesinti kısa tutulabilir.

### Hibrit yapı yönetimi zorlaştırmaz mı?

Bir miktar karmaşıklık ekler. Ancak tek bir izleme paneli, ortak deployment aracı ve özel ağ (VPN) ile iki ortam tek bir sistem gibi yönetilebilir.
