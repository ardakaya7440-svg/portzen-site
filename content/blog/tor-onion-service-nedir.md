---
title: "Tor Onion Service Nedir ve Nasıl Çalışır?"
seoTitle: "Tor Onion Service Nedir? Introduction ve Rendezvous Mantığı"
slug: "tor-onion-service-nedir"
category: "altyapi"
description: "Tor onion service nedir, nasıl çalışır? v3 adres yapısı, introduction point, rendezvous noktası, descriptor ve uçtan uca şifreleme adım adım açıklanıyor."
keywords: ["tor onion service nedir", "onion service nasıl çalışır", "rendezvous point", "introduction point tor", "v3 onion adresi"]
publishedAt: "2026-11-25"
updatedAt: "2026-11-25"
author: "Arda Kaya"
relatedServices: ["tor-onion-service-kurulumu"]
---

# Tor Onion Service Nedir ve Nasıl Çalışır?

Tor onion service, bir sunucunun IP adresini açıklamadan Tor ağı üzerinden hizmet vermesini sağlayan protokoldür. İstemci ve sunucu doğrudan birbirine bağlanmaz; her ikisi de Tor ağı içinde kurdukları devrelerle ortak bir "rendezvous" (buluşma) noktasında birleşir. Böylece iki taraf da diğerinin IP adresini görmeden uçtan uca şifreli bir bağlantı kurar. Bu yazıda protokolün adım adım işleyişini anlatıyoruz.

Kurulum talimatı arıyorsanız [.onion uzantılı web sitesi nasıl kurulur?](/blog/onion-web-sitesi-nedir-nasil-kurulur) yazısına bakın; burada mekanizmaya odaklanıyoruz.

## Temel kavramlar

### Tor devresi

Tor'da her bağlantı genellikle üç röleden (guard, middle, exit) geçer ve her katman ayrı şifrelenir; "soğan" benzetmesi buradan gelir. Onion service bağlantılarında exit rölesi kullanılmaz: trafik Tor ağından hiç çıkmaz.

### v3 onion adresi

Bir v3 adresi 56 karakterdir ve üç parçadan oluşur: servisin ed25519 açık anahtarı (32 bayt), bir sağlama toplamı (2 bayt) ve sürüm baytı (`0x03`). Bu 35 bayt base32 ile kodlanır ve sonuna `.onion` eklenir. Sonuç: adresin kendisi, servisin kimliğini kanıtlayan anahtardır. Bir sertifika otoritesine veya DNS'e ihtiyaç yoktur; adrese bağlandığınızda gerçekten o anahtarın sahibine bağlandığınızı kriptografi garanti eder.

Eski v2 adresleri (16 karakter, RSA-1024 ve SHA-1 tabanlı) zayıf kriptografi ve descriptor'lardan bilgi toplanabilmesi gibi nedenlerle Tor 0.4.6 serisiyle birlikte desteklenmez hâle geldi. Bugün yalnızca v3 adresleri çalışır.

## Bağlantı adım adım nasıl kurulur?

Protokolün resmi tanımı [spec.torproject.org](https://spec.torproject.org/) adresindeki rend-spec belgesindedir. Basitleştirilmiş akış şöyledir:

### 1. Servis introduction point'leri seçer

Onion servisi başladığında Tor ağında birkaç röleyi (genellikle üç) "introduction point" olarak seçer ve onlara uzun ömürlü devreler kurar. Bu röleler servisin IP'sini bilmez; yalnızca devrenin ucunda bir servis olduğunu bilir.

### 2. Servis descriptor yayınlar

Servis, hangi introduction point'lerin kullanıldığını içeren imzalı bir "descriptor" hazırlar ve bunu dağıtık bir karma tablosuna (HSDir rölelerine) yükler. v3'te descriptor, adresi bilmeyen birinin okuyamayacağı şekilde şifrelenir ve konumu zaman dilimlerine göre değişen, anahtardan türetilmiş bir kimlikle belirlenir. Bu, HSDir rölelerinin hangi servisleri barındırdığını öğrenmesini zorlaştırır.

### 3. İstemci descriptor'ı bulur

Ziyaretçi adresi Tor Browser'a yazdığında, istemci adresten ilgili HSDir'leri hesaplar, descriptor'ı indirir, şifresini çözer ve introduction point listesini öğrenir.

### 4. İstemci rendezvous point seçer

İstemci rastgele bir röleyi "rendezvous point" olarak seçer, ona bir devre kurar ve tek kullanımlık bir "rendezvous cookie" bırakır.

### 5. İstemci introduction point üzerinden mesaj gönderir

İstemci, introduction point'lerden birine (yine kendi devresi üzerinden) servisin açık anahtarıyla şifrelenmiş bir mesaj yollar. Mesajda rendezvous noktasının bilgisi, cookie ve anahtar anlaşmasının ilk yarısı bulunur. Introduction point bu mesajı servise iletir ama içeriğini okuyamaz.

### 6. Servis rendezvous noktasına bağlanır

Servis mesajı çözer, kendi devresiyle rendezvous noktasına gider, cookie'yi ve anahtar anlaşmasının ikinci yarısını sunar. Rendezvous rölesi iki devreyi birleştirir.

### 7. Uçtan uca şifreli kanal

Artık istemci ve servis arasında toplamda altı rölelik bir yol vardır (her iki taraftan üçer). Trafik uçtan uca şifrelidir; rendezvous rölesi de dahil hiçbir röle içeriği göremez ve iki tarafın IP'sini birlikte bilmez.

| Bileşen | Bildiği | Bilmediği |
|---|---|---|
| Introduction point | Bir servise hizmet verdiği | Servisin IP'si, mesaj içeriği |
| HSDir | Şifreli descriptor | Hangi adres olduğu (adresi bilmiyorsa) |
| Rendezvous point | İki devreyi birleştirdiği | Her iki tarafın IP'si, içerik |
| İstemci | Onion adresi | Servisin IP'si |
| Servis | Bir istemcinin bağlandığı | İstemcinin IP'si |

## Ek özellikler

### Client authorization

v3 servisleri, descriptor'ı yalnızca yetkili istemcilerin çözebileceği şekilde yayınlayabilir. Adresi bilen ama anahtarı olmayan biri servise ulaşamaz. Yönetim panelleri ve iç servisler için kullanışlıdır.

### Proof-of-work savunması

Yeni Tor sürümlerinde, introduction point'lere yönelik aşırı yük saldırılarına karşı istemcilerden küçük bir hesaplama kanıtı istenebilen bir DoS savunma mekanizması bulunur.

### Onion-Location

Normal bir web sitesi, `Onion-Location` HTTP başlığıyla Tor Browser kullanıcılarına onion sürümünü önerebilir. Kurumsal aynalarda yaygın bir uygulamadır.

## Protokolün sınırları

Onion service protokolü, IP adreslerini ağ düzeyinde ayırır; ancak:

- Sunucudaki uygulama sürüm bilgisi, hata sayfası veya durum modülü (ör. Apache `mod_status`) ile bilgi sızdırıyorsa protokol bunu engelleyemez.
- Ağın büyük kısmını gözleyebilen güçlü bir saldırgana karşı trafik analizi riskleri teoride mevcuttur.
- Servisin erişilebilirliği, Tor ağının durumuna ve ziyaretçinin Tor'a bağlanabilmesine bağlıdır.

Bu nedenle mutlak anonimlik vaadi gerçekçi değildir. Barındırma tarafındaki pratik farkları [.onion hosting nedir?](/blog/onion-hosting-nedir) yazısında ele aldık.

## Kim kullanıyor?

BBC, Deutsche Welle, The New York Times ve ProPublica okurları için; Facebook (Meta) ise kullanıcılarının hesaplarına güvenli erişimi için onion adresleri işletiyor. Tor Projesi'nin kendi sitesi de onion üzerinden erişilebilir. Daha fazla bilgi: [community.torproject.org/onion-services](https://community.torproject.org/onion-services/).

## Kurulum desteği

Protokolü anlamak bir şey, üretimde güvenli işletmek başka bir şeydir. Anahtar yönetimi, client authorization, OnionBalance ile yük dağıtımı ve sızıntı denetimi gibi işler için [Tor Onion Service Kurulumu](/hizmetler/tor-onion-service-kurulumu) hizmetimize göz atabilir, [Detayları Konuşalım](/hizmetler/tor-onion-service-kurulumu) sayfasından veya WhatsApp (+90 531 863 91 17) üzerinden bize yazabilirsiniz. Yalnızca hukuka uygun projeleri kabul ediyoruz.

## Sıkça Sorulan Sorular

### Onion service ile "hidden service" aynı şey mi?

Evet. "Hidden service" eski isimdir; Tor Projesi bugün "onion service" terimini kullanıyor. `torrc` içindeki `HiddenServiceDir` gibi ayar adları ise geriye dönük uyumluluk için korunuyor.

### Onion service bağlantısı neden yavaş?

Trafik toplamda altı röleden geçer ve ilk bağlantıda descriptor alma ve rendezvous kurulumu gibi ek adımlar vardır. Bağlantı kurulduktan sonra hız, rölelerin kapasitesine bağlıdır.

### Rendezvous noktası trafiği okuyabilir mi?

Hayır. Trafik istemci ile servis arasında uçtan uca şifrelidir. Rendezvous rölesi yalnızca iki devreyi birleştirir.

### v2 adresim neden artık çalışmıyor?

v2 protokolü zayıf kriptografi nedeniyle Tor'dan kaldırıldı. Aynı servisi sunmaya devam etmek için yeni bir v3 adresi oluşturmanız gerekir.

### Onion servisi için sunucuda port açmak gerekir mi?

Hayır. Servis Tor ağına giden bağlantılar kurar; gelen bağlantı kabul etmek için güvenlik duvarında port açmanız gerekmez. Bu, NAT arkasındaki sunucularda bile çalışmasını sağlar.
