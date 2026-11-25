---
title: "Dark Web Sitesi Kurmak Yasal mı? Teknik ve Hukuki Ayrımlar"
seoTitle: "Dark Web Sitesi Kurmak Yasal mı? Türkiye'de Hukuki Çerçeve"
slug: "dark-web-sitesi-kurmak-yasal-mi"
category: "altyapi"
description: "Dark web sitesi kurmak Türkiye'de yasal mı? Deep web, dark web ve .onion ayrımı; 5651, TCK ve KVKK açısından belirleyici olan içerik ve eylem nedir?"
keywords: ["dark web sitesi kurmak yasal mı", "tor kullanmak suç mu", "onion site hukuki durum", "deep web dark web farkı", "5651 sayılı kanun onion"]
publishedAt: "2026-11-25"
updatedAt: "2026-11-25"
author: "Arda Kaya"
relatedServices: ["onion-web-sitesi"]
---

# Dark Web Sitesi Kurmak Yasal mı? Teknik ve Hukuki Ayrımlar

Bir .onion ("dark web") sitesi kurmak, tek başına Türk hukukunda tanımlanmış bir suç değildir; belirleyici olan sitede ne yayımlandığı ve sitenin hangi faaliyet için kullanıldığıdır. Hukuka uygun bir içeriği Tor üzerinden yayınlamak, aynı içeriği normal bir alan adında yayınlamaktan farklı bir suç tipi oluşturmaz; hukuka aykırı bir içerik ise Tor'da yayınlandı diye hukuka uygun hâle gelmez. Bu yazı genel bilgilendirme amaçlıdır, hukuki danışmanlık değildir; somut durumunuz için bir avukata danışın.

## Önce kavramları ayıralım

"Dark web" kelimesi gündelik dilde suçla eş anlamlı kullanıldığı için tartışma çoğu zaman yanlış yerden başlar.

| Kavram | Ne demek? | Örnek |
|---|---|---|
| Yüzey web | Arama motorlarının dizinlediği açık sayfalar | Haber siteleri, bloglar |
| Deep web | Dizinlenmeyen ama sıradan içerik | E-posta kutunuz, banka paneli, şirket intraneti |
| Dark web | Özel yazılım gerektiren, örtülü ağlar | Tor onion servisleri, I2P |

Dark web bir teknoloji katmanının adıdır, içerik türünün değil. Tor'un onion servisleri BBC, Deutsche Welle, The New York Times, ProPublica ve Facebook (Meta) gibi kurumlar tarafından resmi olarak kullanılıyor. Bu kurumlar, sansürlü ağlardaki kullanıcılara ulaşmak ve okurlarının mahremiyetini korumak için onion adresleri işletiyor. Teknik tarafı merak ediyorsanız [Tor Onion Service nedir?](/blog/tor-onion-service-nedir) yazısına bakabilirsiniz.

## Türkiye'de hangi düzenlemeler devreye girer?

Türkiye'de "dark web sitesi kurmayı" doğrudan yasaklayan bir hüküm bulunmuyor. Ancak internet yayıncılığını ve içeriği düzenleyen kurallar, yayının hangi ağda yapıldığına bakmaksızın uygulanır.

### 5651 sayılı Kanun

5651 sayılı İnternet Ortamında Yapılan Yayınların Düzenlenmesi ve Bu Yayınlar Yoluyla İşlenen Suçlarla Mücadele Edilmesi Hakkında Kanun, içerik sağlayıcıyı yayımladığı içerikten sorumlu tutar. Kanunun 8. maddesi, sayılan belirli suçlarla ilgili yeterli şüphe bulunan yayınlar için hâkim veya mahkeme kararıyla erişimin engellenmesini; 8/A maddesi ise gecikmesinde sakınca bulunan hâllerde idari tedbir yoluyla erişim engeli veya içeriğin çıkarılmasını düzenler. Anayasa Mahkemesi'nin kanunun bazı hükümlerine ilişkin iptal kararları bulunduğundan, güncel metni mutlaka resmi kaynaktan kontrol edin: [mevzuat.gov.tr – 5651](https://www.mevzuat.gov.tr/mevzuat?MevzuatNo=5651&MevzuatTur=1&MevzuatTertip=5).

Pratik sonuç: Onion sitenizin içerik sağlayıcısı sizseniz, içerikten doğan sorumluluk da size aittir. Sunucu IP'sinin gizli olması bu sorumluluğu ortadan kaldırmaz.

### Türk Ceza Kanunu

5237 sayılı Türk Ceza Kanunu'nda tanımlanan suçlar (örneğin yasaklı madde ticareti, müstehcenlik, dolandırıcılık veya bilişim sistemlerine yönelik suçlar) hangi teknolojiyle işlendiğine bakılmaksızın suçtur. Tor kullanmak bir suç unsuru değildir; ancak suçun işlenmesinde araç olarak kullanılması fiilin niteliğini değiştirmez. Kanun metni: [mevzuat.gov.tr – TCK](https://www.mevzuat.gov.tr/mevzuat?MevzuatNo=5237&MevzuatTur=1&MevzuatTertip=5).

### KVKK

Onion sitenizde kişisel veri işliyorsanız (iletişim formu, üyelik, belge yükleme), 6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamındaki yükümlülükler geçerlidir. Mahremiyet odaklı mimari bu yükümlülükleri ortadan kaldırmaz, ama veri minimizasyonu ilkesine uyumu kolaylaştırır. Bkz. [kvkk.gov.tr](https://www.kvkk.gov.tr/).

## Tor'un Türkiye'deki erişim durumu

Kurmanın hukuki niteliği ile erişimin teknik durumu ayrı konulardır. Türkiye'de Tor'a doğrudan erişim geçmişte kısıtlandı: Aralık 2016'da Turkey Blocks, Tor'a doğrudan bağlantıların başlıca servis sağlayıcılarda engellendiğini, köprü (bridge) bağlantılarının ise çalışmaya devam ettiğini raporladı. Bir hizmete erişimin teknik olarak kısıtlanması, o yazılımı kullanmanın veya onunla yayın yapmanın kendiliğinden suç olduğu anlamına gelmez; ancak bu tür kısıtlamaların hukuki dayanağı ve güncel durumu değişebileceğinden, kurumsal kararlarda hukuki görüş almanızı öneririz.

## Teknik ayrım: neyi gizler, neyi gizlemez?

Hukuki tartışmada sık yapılan bir hata, Tor'un "iz bırakmadığı" varsayımıdır.

- **Gizlediği:** Ziyaretçi ile sunucunun IP adreslerini birbirinden; bağlantının içeriğini ağ üzerindeki gözlemcilerden.
- **Gizlemediği:** Sitede yayımlanan içeriği, sunucunun yapılandırma hatalarından sızan bilgileri, yönetici hesaplarına ait operasyonel izleri, ödeme ve iletişim kanallarındaki kayıtları.

Kolluk ve araştırmacıların onion servislerini tespit ettiği vakaların önemli kısmı protokol zaafından değil, yapılandırma ve operasyon hatalarından kaynaklanmıştır. Dolayısıyla "Tor'da yayınlarsam sorumluluk doğmaz" düşüncesi hem hukuken hem teknik olarak yanlıştır.

## Meşru kullanım senaryoları

- Haber kuruluşlarının sansürlü bölgelerdeki okurlar için onion aynaları
- Gazetecilerin kaynaklardan belge almak için kullandığı güvenli iletim sistemleri
- Sivil toplum kuruluşlarının hassas topluluklara yönelik bilgilendirme sayfaları
- Şirketlerin ziyaretçi IP'si toplamayan iletişim ve bildirim kanalları
- Teknik ekiplerin sunucularına port açmadan erişim sağlaması

## PORTZEN'in tutumu

PORTZEN olarak yalnızca hukuka uygun projelerde onion sitesi geliştiriyoruz. Yasa dışı ürün veya hizmet satan pazar yerleri, suç teşkil eden içerikler, telif ihlali amaçlı dağıtımlar ve dolandırıcılık amaçlı yapılar için gelen talepleri kabul etmiyoruz. Hizmetin kapsamını [Türkiye'de .onion web sitesi geliştirme](/blog/turkiyede-onion-web-sitesi-gelistirme) yazısında ayrıntılı anlattık.

## Hukuka uygun bir projeyi konuşalım

Kurumunuz için meşru bir onion yayını planlıyorsanız, teknik tarafı birlikte tasarlayabiliriz; hukuki değerlendirmeyi ise bir avukatla yapmanızı öneririz. [Detayları Konuşalım](/hizmetler/onion-web-sitesi) sayfasından veya WhatsApp (+90 531 863 91 17) üzerinden bize ulaşabilirsiniz.

## Sıkça Sorulan Sorular

### Tor Browser kullanmak Türkiye'de suç mu?

Tor kullanmayı doğrudan suç olarak tanımlayan bir kanun hükmü bilinmiyor. Ancak Tor ile gerçekleştirilen eylem suç teşkil ediyorsa sorumluluk doğar. Somut durum için avukata danışın.

### Onion sitemdeki içerikten kim sorumlu?

5651 sayılı Kanun'a göre içeriği üreten veya sağlayan kişi, yani içerik sağlayıcı sorumludur. Sitenin Tor üzerinde yayınlanması bu sorumluluğu değiştirmez.

### Onion sitelere erişim engeli getirilebilir mi?

Onion adresleri DNS'te bulunmadığından klasik alan adı engelleme yöntemleri doğrudan uygulanamaz; ancak Tor ağına erişimin kendisi kısıtlanabilir ve Türkiye'de geçmişte kısıtlanmıştır. İçerik hakkındaki hukuki süreçler ise ağdan bağımsız işler.

### KVKK onion siteler için de geçerli mi?

Evet. Kişisel veri işleniyorsa veri sorumlusu yükümlülükleri devam eder. IP adresi toplanmaması bir avantajdır, ancak formdaki veya yüklenen dosyalardaki kişisel veriler kanun kapsamındadır.

### Bu yazı hukuki görüş yerine geçer mi?

Hayır. Bu yazı genel bilgilendirme amaçlıdır; mevzuat ve yargı içtihatları değişebilir. Projenize özgü değerlendirme için bir avukata danışmanız gerekir.
