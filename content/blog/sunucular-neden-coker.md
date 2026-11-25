---
title: "Sunucular Neden Çöker? Performans ve Kaynak Yönetimi"
seoTitle: "Sunucular Neden Çöker? RAM, Disk ve Isı Sorunları"
slug: "sunucular-neden-coker"
category: "altyapi"
description: "Sunucu çökmelerinin gerçek nedenleri: OOM killer, cgroup bellek limitleri, swap thrashing, dolan disk, inode, termal kısma ve kontrolsüz eşzamanlı işler."
keywords: ["sunucu neden çöker", "oom killer", "sunucu ram yetersiz", "disk doldu linux", "thermal throttling sunucu", "kaynak yönetimi"]
publishedAt: "2026-11-25"
updatedAt: "2026-11-25"
author: "Arda Kaya"
relatedServices: ["sunucu-bakim-guvenlik"]
---

# Sunucular Neden Çöker? Performans ve Kaynak Yönetimi

Sunucuların büyük çoğunluğu donanım bozulduğu için değil, kaynaklar tükendiği için çöker: bellek biter ve çekirdek süreçleri öldürür, disk dolar ve veritabanı yazamaz, makine ısınır ve işlemci yavaşlar, ya da aynı anda çalışan birkaç ağır iş birbirini boğar. İyi haber şu ki bu sorunların çoğu öngörülebilir; doğru limitler, izleme ve iş sıralamasıyla önlenebilir.

Aşağıda en sık karşılaşılan nedenleri, belirtilerini ve teşhis komutlarını sırayla ele alıyoruz.

## 1. Bellek tükenmesi ve OOM killer

Linux'ta fiziksel bellek ve swap tükendiğinde çekirdek, sistemi ayakta tutmak için bir süreci seçip sonlandırır. Buna **OOM (Out of Memory) killer** denir. Genellikle en çok bellek kullanan süreç, yani çoğu zaman veritabanınız veya ana uygulamanız, seçilir.

**Belirti:** Servis aniden kapanır, loglarda uygulama tarafında bir hata görünmez.

**Teşhis:**

```bash
sudo journalctl -k | grep -iE 'out of memory|oom-kill|killed process'
free -h
```

`Killed process 1234 (node)` gibi bir satır, sürecin çekirdek tarafından sonlandırıldığını gösterir.

## 2. cgroup bellek limitleri ve konteynerler

Konteynerler, Linux'un **cgroup** mekanizmasıyla sınırlandırılır. Docker'da `--memory` ile ya da Compose'da `mem_limit` / `deploy.resources.limits.memory` ile bir konteynere bellek sınırı koyduğunuzda, konteyner bu sınırı aştığında makinede boş RAM olsa bile içindeki süreç OOM killer tarafından sonlandırılır. cgroup v2'nin `memory.max` ve `memory.high` davranışı [kernel.org cgroup v2 belgesinde](https://docs.kernel.org/admin-guide/cgroup-v2.html), Docker tarafındaki ayarlar [Docker resource constraints sayfasında](https://docs.docker.com/engine/containers/resource_constraints/) anlatılıyor.

```bash
docker stats --no-stream
docker inspect --format '{{.State.OOMKilled}}' konteyner_adi
```

`OOMKilled` değeri `true` ise konteyner kendi limitine takılmıştır.

### Node.js ve Next.js build süreçleri

Bu durumun en yaygın örneklerinden biri, konteyner içinde çalışan Node.js veya Next.js build işlemidir. Build sırasında bellek kullanımı kısa süreliğine sıçrar ve konteyner limitini aşar; sonuç genellikle `Killed` mesajı veya çıkış kodu 137'dir.

Burada iki ayrı sınır vardır: konteynerin cgroup limiti ve V8'in JavaScript yığın (heap) limiti. Node.js yığın boyutunu `--max-old-space-size` ile ayarlayabilirsiniz ([Node.js CLI belgesi](https://nodejs.org/api/cli.html)):

```bash
NODE_OPTIONS="--max-old-space-size=2048" npm run build
```

Değer megabayt cinsindendir ve **konteyner limitinin altında** kalmalıdır; çünkü süreç yığın dışında da (native bellek, tamponlar, alt süreçler) bellek kullanır. Yığını konteyner limitine eşit veya üstünde ayarlamak, sorunu JavaScript hatasından OOM killer'a taşımaktan başka işe yaramaz. Kalıcı çözüm çoğu zaman build'i ayrı bir ortamda (CI) yapmak, ya da build sırasında başka ağır işlerin çalışmamasını sağlamaktır.

## 3. Swap thrashing

Swap, bellek dolduğunda sayfaların diske yazılmasını sağlar ve ani sıçramalarda bir tampon görevi görür. Ancak çalışan iş yükü sürekli RAM'den büyükse, sistem zamanının çoğunu sayfaları disk ile bellek arasında taşımaya harcar. Buna **swap thrashing** denir: sunucu kapanmaz ama tepki vermez hale gelir, SSH bile dakikalar sürer.

```bash
vmstat 1 5        # si/so sütunları sürekli yüksekse thrashing var
cat /proc/pressure/memory
```

`/proc/pressure/memory` (PSI) çıktısındaki `some` ve `full` değerleri, süreçlerin bellek yüzünden ne kadar beklediğini gösterir. Çözüm daha fazla swap değil; iş yükünü küçültmek, sınırlamak veya RAM eklemektir.

## 4. Disk dolması

Disk dolduğunda veritabanları yazamaz, loglar kesilir, Docker yeni imaj çekemez ve bazı servisler başlamaz. En yaygın suçlular: dönmeyen loglar, birikmiş Docker imajları ve build önbellekleri, yerel tutulan eski yedekler.

```bash
df -h
sudo du -xh --max-depth=1 /var | sort -h | tail
docker system df
sudo journalctl --disk-usage
```

Kullanılmayan Docker verisi için `docker system prune` kullanılabilir; ancak `-a` ve `--volumes` bayrakları veri silebileceği için ne yaptığınızı bilmeden eklemeyin. journald için `/etc/systemd/journald.conf` içinde `SystemMaxUse=` ile üst sınır koymak kalıcı çözümdür.

### Silinmiş ama açık kalan dosyalar

Bazen büyük bir log dosyasını silersiniz ama yer açılmaz; çünkü bir süreç dosyayı hâlâ açık tutuyordur:

```bash
sudo lsof +L1
```

İlgili servisi yeniden başlatmak alanı serbest bırakır.

## 5. Inode tükenmesi

`df -h` boş alan gösterdiği halde "No space left on device" hatası alıyorsanız, sorun inode'lardır. Her dosya bir inode kullanır; milyonlarca küçük dosya (oturum dosyaları, önbellek parçaları, `node_modules` kopyaları) inode tablosunu doldurabilir.

```bash
df -i
```

`IUse%` %100'e yakınsa çok sayıda küçük dosya üreten dizini bulup temizlemek gerekir.

## 6. Termal kısma ve NVMe sıcaklığı

İşlemci belirli bir sıcaklığı aştığında kendini korumak için frekansını düşürür; buna **termal kısma (thermal throttling)** denir. Sunucu çalışmaya devam eder ama işler beklenenden çok daha yavaş biter, zaman aşımları başlar. Bu durum özellikle ofiste, dolapta veya yetersiz havalandırılan bir alanda çalışan fiziksel sunucularda görülür.

NVMe diskler de ısınır ve yüksek sıcaklıkta kendi hızlarını düşürebilir. Uzun süreli yazma işlemleri (yedek, büyük build, veritabanı içe aktarma) sırasında disk sıcaklığını izlemek önemlidir.

```bash
sudo apt install -y lm-sensors nvme-cli smartmontools
sensors
sudo nvme smart-log /dev/nvme0 | grep -i temperature
sudo smartctl -a /dev/nvme0
```

Çözüm donanım tarafındadır (hava akışı, toz temizliği, soğutucu), ama yazılım tarafında da ağır işleri sıcaklık yükselmişken başlatmamak işe yarar.

## 7. Eşzamanlı ağır işler

Tek tek sorunsuz çalışan işler aynı anda başladığında sunucuyu kilitleyebilir: bir build, bir yedekleme, bir veritabanı bakımı ve bir yapay zekâ işleminin aynı dakikaya denk gelmesi gibi. Cron'da hepsini "gece 03:00"e koymak tipik bir hatadır.

Pratik önlemler:

- **Tek seferde bir ağır iş:** `flock` ile aynı kilit dosyasını kullanan işler sırayla çalışır.

```bash
flock -n /run/lock/agir-is.lock /usr/local/bin/yedek-al.sh
```

- **Öncelik düşürme:** Arka plan işleri `nice -n 10 ionice -c3` ile başlatılabilir, böylece canlı servislere öncelik kalır.
- **systemd kaynak sınırları:** Bir servise `MemoryMax=` ve `CPUQuota=` tanımlamak, onun tüm makineyi tüketmesini engeller.
- **Kaynak farkındalıklı kuyruk:** İşleri bir kuyruğa koyup, boş RAM ve sıcaklık belirli eşiklerin altındayken tek tek çalıştırmak.

PORTZEN'in kendi sunucusunda da bu son yaklaşımı kullanıyoruz: ağır işler bir kuyruğa giriyor ve bir sonraki iş, ancak boş bellek ve sıcaklık eşiklerinin uygun olduğu görüldüğünde başlıyor. Karmaşık bir sistem değil; ama birden fazla ağır işin üst üste binip sunucuyu kilitlemesini büyük ölçüde engelliyor.

## İzleme: sorunu müşteriden önce görmek

Yukarıdaki sorunların hepsi önceden sinyal verir: RAM eğrisi yükselir, disk yavaş yavaş dolar, sıcaklık artar. Netdata gibi bir araç bu metrikleri anlık gösterip eşik aşımında uyarı verebilir; Uptime Kuma ise servislerin dışarıdan erişilebilirliğini izler. Temel sunucu kurulumu ve sertleştirme adımları için [Linux Sunucu Kurulumu rehberimize](/blog/linux-sunucu-kurulumu-rehberi), kaynak tutarlılığını etkileyen sunucu tipi seçimi için [VPS, VDS ve Fiziksel Sunucu Arasındaki Farklar](/blog/vps-vds-fiziksel-sunucu-farklari) yazısına bakabilirsiniz.

## Sunucunuzun sağlığını birlikte inceleyelim

Sunucunuz zaman zaman yavaşlıyor, servisler nedensiz kapanıyor veya disk sürekli doluyorsa, kök nedeni bulup limit, izleme ve iş sıralaması kurgusunu birlikte oluşturabiliriz. Kapsam için [Sunucu Bakım ve Güvenlik](/hizmetler/sunucu-bakim-guvenlik) sayfasına göz atabilir, [iletişim sayfasından](/iletisim) veya WhatsApp (+90 531 863 91 17) üzerinden ulaşabilirsiniz.

## Sıkça Sorulan Sorular

### Çıkış kodu 137 ne anlama gelir?

137, sürecin SIGKILL (9) sinyaliyle sonlandırıldığını gösterir (128 + 9). Konteynerlerde bu çoğunlukla bellek limitine takılıp OOM killer tarafından öldürülme anlamına gelir; `docker inspect` ile `OOMKilled` değerini kontrol edin.

### Swap'ı tamamen kapatmak daha mı iyi?

Genellikle hayır. Küçük bir swap, kısa süreli bellek sıçramalarını absorbe eder. Sorun swap'ın varlığı değil, iş yükünün sürekli RAM'i aşmasıdır.

### --max-old-space-size değerini ne kadar vermeliyim?

Konteyner veya makinedeki kullanılabilir belleğin altında, süreç dışı bellek kullanımına pay bırakacak bir değer seçin. Kesin değer projeye göre değişir; build sırasında `docker stats` ile gerçek kullanımı gözlemleyerek ayarlayın.

### Sunucumun termal kısmaya girdiğini nasıl anlarım?

`sensors` ile CPU sıcaklığını, yoğun yük altında işlemci frekansını (`grep MHz /proc/cpuinfo`) izleyin. Sıcaklık yükseldikçe frekans belirgin biçimde düşüyorsa kısma yaşanıyordur.

### Disk doluluğu için hangi eşikte uyarı almalıyım?

Tek bir doğru değer yok; doluluk hızınıza bağlıdır. Hem yüzde bazlı bir eşik hem de "bu hızla kaç gün içinde dolacak" tahmini veren bir uyarı kurmak en sağlıklısıdır.
