---
title: "Türkiye'de .onion Web Sitesi Geliştirme Hizmeti"
seoTitle: "Türkiye'de .onion Web Sitesi Geliştirme: Süreç ve Kapsam"
slug: "turkiyede-onion-web-sitesi-gelistirme"
category: "altyapi"
description: "Türkiye'de .onion web sitesi geliştirme hizmeti neleri kapsar? Proje kabul kriterleri, teknik süreç, KVKK, erişim koşulları ve teklif öncesi hazırlık."
keywords: ["onion web sitesi geliştirme", "türkiye onion site hizmeti", "tor sitesi yaptırmak", "onion aynası kurulumu", "kurumsal onion site"]
publishedAt: "2026-11-25"
updatedAt: "2026-11-25"
author: "Arda Kaya"
relatedServices: ["onion-web-sitesi"]
---

# Türkiye'de .onion Web Sitesi Geliştirme Hizmeti

Türkiye'de .onion web sitesi geliştirme hizmeti; yasal bir amaca yönelik sitenin Tor ağına uygun şekilde tasarlanması, sunucuya kurulması, sızıntılara karşı denetlenmesi ve işletilmesini kapsar. PORTZEN bu hizmeti yalnızca hukuka uygun projeler için veriyor: kurumsal onion aynaları, mahremiyet odaklı yayınlar ve güvenli iletişim kanalları. Bu yazıda hizmetin neyi kapsadığını, hangi projeleri neden kabul etmediğimizi ve Türkiye'ye özgü dikkat edilmesi gereken noktaları anlatıyoruz.

Kavrama yeniyseniz önce [.onion uzantılı web sitesi nedir?](/blog/onion-web-sitesi-nedir-nasil-kurulur) yazısını okumanızı öneririz.

## Hangi projeler için uygun?

Onion site, her işletmenin ihtiyacı olan bir şey değildir. Anlamlı olduğu tipik senaryolar:

- **Mevcut sitenin onion aynası:** Haber sitesi, dernek, vakıf veya araştırma kurumu, okurlarına Tor üzerinden de ulaşmak ister. Uluslararası örnekleri BBC, Deutsche Welle ve The New York Times'ın resmi onion adresleridir.
- **İhbar ve belge iletim kanalı:** Gazetecilik projeleri veya kurum içi etik bildirim süreçleri için kaynağın IP adresini toplamayan bir iletim noktası.
- **Mahremiyet odaklı bilgilendirme sayfaları:** Ziyaretçisinin kim olduğunu bilmeye ihtiyacı olmayan, hassas konularda (sağlık, hukuk, danışmanlık) bilgi veren yayınlar.
- **Teknik ekipler için iç servisler:** Sunucu yönetim panellerine, port açmadan ve sabit IP gerektirmeden Tor üzerinden erişim.

## Kabul etmediğimiz projeler

Açık olmak istiyoruz: yasa dışı mal veya hizmet satışı yapan pazar yerleri, suç teşkil eden içerik barındıran siteler, telif hakkı ihlali amaçlı dağıtım platformları, dolandırıcılık veya kimlik avı (phishing) amaçlı yapılar ve hukuka aykırılığı makul biçimde öngörülebilen her türlü proje teklifini reddediyoruz. Projenin amacı belirsizse, başlamadan önce kullanım amacını yazılı olarak netleştirmenizi isteriz.

## Hizmetin kapsamı

| Aşama | Ne yapılıyor? |
|---|---|
| Keşif | Amaç, tehdit modeli, hedef kitle, mevcut altyapı |
| Mimari | Tek sunucu, ayna veya yüksek erişilebilirlik (OnionBalance) |
| Geliştirme | JavaScript'siz çalışan, dış kaynak çağırmayan arayüz |
| Kurulum | Tor, web sunucusu, `torrc` yapılandırması, anahtar yönetimi |
| Sızıntı denetimi | Başlıklar, hata sayfaları, durum modülleri, metadata, saat dilimi |
| İşletme | Güncellemeler, izleme, yedekleme, anahtar rotasyon planı |

### Geliştirme tarafındaki farklar

Onion için tasarlanan bir site, klasik kurumsal siteden farklı kararlar ister: yazı tipleri ve görseller yerel sunulur, analitik araçları ya hiç kullanılmaz ya da sunucu tarafında, kişisel veri toplamadan çalışır. Formlar JavaScript olmadan gönderilebilir, yüklenen dosyalardaki EXIF ve belge metadata'sı temizlenir. Sayfa ağırlığı düşük tutulur, çünkü Tor bağlantıları normal bağlantılardan yavaştır.

### Altyapı tarafı

Tek sunucu küçük yayınlar için yeterlidir. Trafik veya erişilebilirlik ihtiyacı büyüdüğünde OnionBalance ile aynı onion adresi birden fazla arka uç sunucuya dağıtılabilir. Barındırma seçeneklerini [.onion hosting nedir?](/blog/onion-hosting-nedir) yazısında karşılaştırdık. Kendi altyapımızda da kullandığımız yaklaşımla, izleme için Netdata ve Uptime Kuma gibi self-hosted araçları tercih ediyoruz; böylece izleme verisi üçüncü taraf bir servise gitmiyor.

## Türkiye'ye özgü dikkat edilmesi gerekenler

### Erişim koşulları

Türkiye'de Tor'a doğrudan erişim geçmişte kısıtlandı: Aralık 2016'da bağımsız izleme grubu Turkey Blocks, Tor'a doğrudan bağlantıların büyük servis sağlayıcılarda engellendiğini, köprü (bridge) bağlantılarının ise çalışmaya devam ettiğini raporladı. Durum zaman içinde değişebildiği için, hedef kitleniz Türkiye'deyse ziyaretçilerin köprü kullanması gerekebileceğini sayfada anlatmak iyi bir uygulamadır. Köprüler hakkında güncel bilgi [support.torproject.org](https://support.torproject.org/) adresinde bulunur.

### KVKK

Onion site kurmak, 6698 sayılı Kişisel Verilerin Korunması Kanunu'ndan muaf olmak anlamına gelmez. Formla ad, e-posta veya belge topluyorsanız veri sorumlusu yükümlülükleri (aydınlatma, güvenlik tedbirleri, saklama süreleri) devam eder. Onion mimarisi aslında veri minimizasyonunu kolaylaştırır: IP adresi zaten toplanmaz, gereksiz alanlar formdan çıkarılabilir. Kanun metni için [mevzuat.gov.tr](https://www.mevzuat.gov.tr/mevzuat?MevzuatNo=6698&MevzuatTur=1&MevzuatTertip=5), rehberler için [kvkk.gov.tr](https://www.kvkk.gov.tr/) adreslerine bakabilirsiniz.

### İçerik sorumluluğu

İçerik sağlayıcının sorumluluğu, sitenin hangi ağda yayınlandığına göre değişmez. 5651 sayılı Kanun ve Türk Ceza Kanunu açısından değerlendirmeyi [Dark web sitesi kurmak yasal mı?](/blog/dark-web-sitesi-kurmak-yasal-mi) yazısında ayrıntılı ele aldık. Bu yazı hukuki danışmanlık değildir; projenize özgü sorular için bir avukata danışmanızı öneririz.

## Teklif öncesi hazırlamanız gerekenler

Görüşmeyi verimli kılmak için şu soruların cevaplarını hazırlamanız işimizi kolaylaştırır:

1. Sitenin amacı ve hedef kitlesi kim?
2. Mevcut bir site var mı, onion sürümü onun aynası mı olacak?
3. Ziyaretçiden herhangi bir veri (form, dosya) alınacak mı?
4. Sunucu sizin mi olacak, yoksa barındırmayı da bizden mi bekliyorsunuz?
5. Yayın sonrası bakım ve güncelleme kimde olacak?

Fiyatlandırma bu cevaplara ve kapsama göre belirlenir; sabit paket sunmuyoruz.

## Mutlak anonimlik vaadi neden yok?

Tor, sunucu ve ziyaretçi IP'lerinin protokol düzeyinde gizlenmesine yardımcı olur. Ancak uygulama açıkları, operasyonel hatalar, içerikte yer alan bilgiler veya yasal süreçler sonucunda kimlik ortaya çıkabilir. Bu nedenle "tamamen iz bırakmaz" gibi bir taahhütte bulunmuyoruz; riski azaltan iyi uygulamaları uygular ve sınırlarını açıkça anlatırız.

## Projenizi konuşalım

Kurumunuz için bir onion aynası, güvenli iletim kanalı ya da mahremiyet odaklı bir yayın düşünüyorsanız, [Detayları Konuşalım](/hizmetler/onion-web-sitesi) sayfasından veya WhatsApp (+90 531 863 91 17) üzerinden bize yazabilirsiniz. Tor servisinin yalnızca kurulumuna ihtiyacınız varsa [Tor Onion Service Kurulumu](/hizmetler/tor-onion-service-kurulumu) hizmetine de göz atabilirsiniz.

## Sıkça Sorulan Sorular

### Onion site geliştirme ile Tor servisi kurulumu arasındaki fark nedir?

Kurulum, mevcut bir siteyi Tor üzerinden erişilebilir kılmakla sınırlıdır. Geliştirme ise sitenin kendisinin Tor kullanıcılarına uygun biçimde (JS'siz, dış kaynaksız, düşük ağırlıklı) tasarlanmasını da içerir.

### Sunucunun Türkiye'de olması gerekir mi?

Teknik olarak gerekmez; onion servisi internete bağlı herhangi bir sunucuda çalışabilir. Sunucu konumu seçimi veri işleme, hukuki gereklilikler ve erişim ihtiyaçlarına göre birlikte değerlendirilir.

### Türkiye'deki ziyaretçiler siteye erişebilir mi?

Tor'a doğrudan bağlantı zaman zaman kısıtlandığından ziyaretçilerin köprü kullanması gerekebilir. Bu durum sitenizden değil, ziyaretçinin bağlantısından kaynaklanır.

### Projemin uygun olup olmadığını nasıl anlarım?

Amacınızı açıkça anlatmanız yeterlidir. Hukuka aykırı içerik veya faaliyet içermeyen projeleri değerlendiriyoruz; şüpheli durumlarda önce hukuki görüş almanızı öneriyoruz.

### Mevcut WordPress sitemin onion aynası yapılabilir mi?

Evet, ancak eklentiler, dış kaynaklar ve JavaScript bağımlılıkları denetlenmeli. Çoğu durumda statik bir ayna üretmek daha güvenli ve hızlı bir çözümdür.
