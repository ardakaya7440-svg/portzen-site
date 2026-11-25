---
title: "Linux Sunucu Kurulumu: İşletmeler İçin Kapsamlı Rehber"
seoTitle: "Linux Sunucu Kurulumu: Ubuntu Server Adım Adım Rehber"
slug: "linux-sunucu-kurulumu-rehberi"
category: "altyapi"
description: "Ubuntu Server LTS ile işletme sunucusu kurulumu: kullanıcı, SSH anahtarı, ufw, otomatik güncelleme, fail2ban, zaman senkronu ve 3-2-1 yedekleme adımları."
keywords: ["linux sunucu kurulumu", "ubuntu server kurulumu", "ssh anahtar ile giriş", "ufw güvenlik duvarı", "sunucu güvenliği"]
publishedAt: "2026-11-25"
updatedAt: "2026-11-25"
author: "Arda Kaya"
relatedServices: ["sunucu-kurulumu"]
---

# Linux Sunucu Kurulumu: İşletmeler İçin Kapsamlı Rehber

Bir işletme sunucusunun güvenli temeli birkaç adımdan oluşur: uzun süreli destekli (LTS) bir dağıtım kurmak, root yerine yetkili bir kullanıcıyla çalışmak, SSH'ye yalnızca anahtarla girmek, güvenlik duvarını açmak, güvenlik güncellemelerini otomatikleştirmek, kaba kuvvet denemelerini engellemek, saati senkron tutmak ve test edilmiş yedek almak. Bu rehber, bu adımları Ubuntu Server LTS üzerinde gerçek komutlarla anlatıyor.

Komutlar Ubuntu Server 24.04 LTS için yazıldı; diğer LTS sürümlerinde küçük farklar olabilir. Her adımı uygulamadan önce mevcut bir SSH oturumunu açık tutun; yanlış bir ayar sizi sunucunun dışında bırakabilir.

## 1. Dağıtım seçimi: neden Ubuntu Server LTS?

LTS sürümleri uzun süre güvenlik güncellemesi alır, bu da her yıl büyük sürüm yükseltmesi yapma zorunluluğunu ortadan kaldırır. Docker, Coolify ve çoğu açık kaynak araç Ubuntu LTS'i birincil hedef olarak destekler. Kurulum ve yapılandırma detayları için resmi [Ubuntu Server dokümantasyonu](https://ubuntu.com/server/docs) başvuru kaynağıdır.

Kurulumdan sonra ilk iş sistemi güncellemektir:

```bash
sudo apt update && sudo apt full-upgrade -y
sudo reboot
```

## 2. Root yerine yetkili kullanıcı

Günlük işleri root ile yapmak, her hatanın sistem genelinde etkili olması demektir. Ayrı bir kullanıcı oluşturup `sudo` grubuna ekleyin:

```bash
sudo adduser deploy
sudo usermod -aG sudo deploy
```

Bulut sağlayıcıların bir kısmı zaten `ubuntu` gibi bir kullanıcıyla teslim eder; bu durumda yalnızca root ile parola girişini kapatmanız yeterlidir.

## 3. SSH anahtarıyla giriş

Parola tabanlı SSH girişi, internetteki otomatik tarayıcıların sürekli hedefidir. Anahtarı **kendi bilgisayarınızda** oluşturun ve sunucuya kopyalayın:

```bash
# Yerel bilgisayarınızda
ssh-keygen -t ed25519 -C "deploy@sirket"
ssh-copy-id deploy@SUNUCU_IP
```

Ardından yeni bir terminalde `ssh deploy@SUNUCU_IP` ile parola sormadan girebildiğinizi doğrulayın. **Bu doğrulamayı yapmadan bir sonraki adıma geçmeyin.**

### Parola ile girişi kapatma

Ana yapılandırma dosyasını düzenlemek yerine bir ek dosya kullanmak, güncellemelerde çakışmayı önler. OpenSSH bir ayar için **ilk okuduğu değeri** kullanır ve `sshd_config.d` içindeki dosyaları alfabetik sırayla okur. Bazı bulut imajlarında bulunan `50-cloud-init.conf` dosyası parola girişini açabildiği için dosya adını küçük bir numarayla başlatın:

```bash
sudo tee /etc/ssh/sshd_config.d/00-sertlestirme.conf > /dev/null <<'CONF'
PasswordAuthentication no
KbdInteractiveAuthentication no
PermitRootLogin no
PubkeyAuthentication yes
CONF

sudo sshd -t                      # sözdizimi kontrolü, çıktı yoksa sorun yok
sudo sshd -T | grep -Ei 'passwordauthentication|permitrootlogin'
sudo systemctl restart ssh
```

`sshd -T` çıktısında `passwordauthentication no` ve `permitrootlogin no` görmelisiniz. Mevcut oturumu kapatmadan yeni bir terminalden tekrar giriş yapmayı deneyin.

## 4. Güvenlik duvarı: ufw

Ubuntu ile gelen `ufw`, iptables/nftables üzerinde basit bir arayüzdür. Varsayılan olarak gelen bağlantıları reddedip yalnızca ihtiyaç duyulanlara izin verin. **SSH iznini, ufw'yi etkinleştirmeden önce ekleyin:**

```bash
sudo ufw default deny incoming
sudo ufw default allow outgoing
sudo ufw allow OpenSSH
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp
sudo ufw enable
sudo ufw status verbose
```

Önemli bir not: Docker, yayınladığı portlar için kendi iptables kurallarını ekler ve bu kurallar ufw'yi atlayabilir. `-p 5432:5432` gibi bir port yayınlarsanız ufw kapalı gösterse bile port dışarıdan erişilebilir olabilir. Veritabanı gibi servisleri ya hiç yayınlamayın ya da `127.0.0.1:5432:5432` biçiminde yalnızca yerel arayüze bağlayın. Ayrıntılar [Docker'ın paket filtreleme belgesinde](https://docs.docker.com/engine/network/packet-filtering-firewalls/) anlatılıyor.

Sunucunuz Cloudflare Tunnel üzerinden yayın yapıyorsa 80/443 portlarını hiç açmanız gerekmeyebilir; yönetim erişimini de Tailscale gibi bir VPN üzerinden yaparak SSH'yi yalnızca VPN arayüzüne açabilirsiniz. PORTZEN'in kendi sunucusunda kullandığımız yaklaşım da budur.

## 5. Otomatik güvenlik güncellemeleri

`unattended-upgrades`, güvenlik yamalarını sizin müdahaleniz olmadan uygular:

```bash
sudo apt install -y unattended-upgrades
sudo dpkg-reconfigure -plow unattended-upgrades
```

Bu komut `/etc/apt/apt.conf.d/20auto-upgrades` dosyasını oluşturur. Çekirdek güncellemeleri yeniden başlatma gerektirir; `/var/run/reboot-required` dosyasının varlığını izleyerek planlı bir bakım saatinde yeniden başlatın. Otomatik yeniden başlatma isterseniz `/etc/apt/apt.conf.d/50unattended-upgrades` içinde `Unattended-Upgrade::Automatic-Reboot "true";` ve uygun bir `Automatic-Reboot-Time` belirleyebilirsiniz.

Ne yapıldığını görmek için:

```bash
sudo unattended-upgrade --dry-run --debug
less /var/log/unattended-upgrades/unattended-upgrades.log
```

## 6. Kaba kuvvet denemelerine karşı fail2ban

Parola girişi kapalı olsa bile tekrarlayan başarısız denemeler logları şişirir. `fail2ban`, belirli sayıda başarısız denemeden sonra IP'yi geçici olarak engeller:

```bash
sudo apt install -y fail2ban
sudo tee /etc/fail2ban/jail.local > /dev/null <<'CONF'
[DEFAULT]
bantime  = 1h
findtime = 10m
maxretry = 5
backend  = systemd

[sshd]
enabled = true
CONF

sudo systemctl enable --now fail2ban
sudo fail2ban-client status sshd
```

Ayarları `jail.conf` yerine `jail.local` dosyasında tutun; paket güncellemelerinde üzerine yazılmaz.

## 7. Zaman dilimi ve saat senkronu

Yanlış saat; TLS sertifika doğrulamasını, log korelasyonunu, zamanlanmış görevleri ve yedek rotasyonunu bozar. Ubuntu'da saat senkronu varsayılan olarak etkindir; yalnızca doğrulayın ve zaman dilimini ayarlayın:

```bash
timedatectl status
sudo timedatectl set-timezone Europe/Istanbul
sudo timedatectl set-ntp true
```

Çıktıda `System clock synchronized: yes` görmelisiniz.

## 8. Yedekleme: 3-2-1 kuralı

3-2-1 kuralı: verinin **3 kopyası**, **2 farklı ortamda**, **1 tanesi farklı bir lokasyonda**. Sunucudaki canlı veri bir kopyadır; ayrı bir diskteki yedek ikincisi, başka bir lokasyondaki (başka sağlayıcı veya nesne depolama) şifreli yedek üçüncüsüdür.

Şifreleme ve tekilleştirme (deduplication) yapan araçlardan `restic` ile basit bir örnek:

```bash
sudo apt install -y restic
export RESTIC_REPOSITORY="sftp:yedek@yedek-sunucu:/srv/restic"
export RESTIC_PASSWORD_FILE="/root/.restic-parola"

restic init                                  # yalnızca ilk sefer
restic backup /etc /srv /var/backups/db
restic forget --keep-daily 7 --keep-weekly 4 --keep-monthly 6 --prune
restic check
```

Veritabanlarını dosya olarak kopyalamak yerine önce tutarlı bir döküm alın (ör. PostgreSQL için `pg_dump`), sonra o dökümü yedekleyin. Yedek parolasını sunucudan ayrı, güvenli bir yerde de saklayın; parola kaybolursa yedek açılamaz.

**En önemli kural:** Geri yükleme test edilmemiş yedek, yedek sayılmaz. Belirli aralıklarla `restic restore` ile ayrı bir dizine geri dönüp dosyaları doğrulayın.

## 9. İzleme ve sonraki adımlar

Temel kurulum bittikten sonra sunucunun sağlığını izlemek gerekir: CPU, RAM, disk doluluğu, sıcaklık ve servislerin erişilebilirliği. Netdata anlık kaynak kullanımını, Uptime Kuma dışarıdan erişilebilirliği izlemek için pratik araçlardır. Kaynak sorunlarının sunucuyu nasıl çökertebileceğini [Sunucular Neden Çöker? Performans ve Kaynak Yönetimi](/blog/sunucular-neden-coker) yazısında ayrıntılı ele aldık.

Kurulumu hangi altyapıda yapacağınıza henüz karar vermediyseniz [Kendi Sunucunuzu Kurmak mı, Bulut Sunucu Kiralamak mı?](/blog/kendi-sunucunu-kurmak-mi-bulut-sunucu-mu) yazısı başlangıç için faydalı olabilir.

## Kurulumu birlikte yapalım

Bu adımları kendi ekibinizle uygulayabilirsiniz; isterseniz kurulum, sertleştirme, yedekleme ve izleme kurgusunu sizin için yapıp belgeleyebiliriz. Detaylar için [Özel Linux Sunucu Kurulumu](/hizmetler/sunucu-kurulumu) sayfasına bakabilir, [iletişim sayfasından](/iletisim) veya WhatsApp (+90 531 863 91 17) üzerinden ulaşabilirsiniz.

## Sıkça Sorulan Sorular

### SSH portunu 22'den başka bir porta taşımalı mıyım?

Port değiştirmek log gürültüsünü azaltır ama gerçek bir güvenlik önlemi değildir. Anahtarla giriş, parola girişinin kapatılması ve fail2ban çok daha etkilidir. Port değiştirirseniz ufw kuralını önceden güncellemeyi unutmayın.

### SSH anahtarımı kaybedersem ne olur?

Parola girişi kapalı olduğu için sağlayıcının web konsolu (veya fiziksel sunucuda yerel ekran) üzerinden girip yeni anahtar eklemeniz gerekir. Bu yüzden en az iki farklı cihazda yetkili anahtar bulundurmak iyi bir pratiktir.

### unattended-upgrades bir şeyleri bozabilir mi?

Varsayılan ayar yalnızca güvenlik deposundaki güncellemeleri uygular, bu nedenle risk düşüktür. Yine de kritik sunucularda logları izlemek ve önce bir test ortamında denemek önerilir.

### Docker kullanıyorsam ufw yeterli olur mu?

Tek başına yetmez. Docker'ın yayınladığı portlar ufw kurallarını atlayabilir. Servisleri yalnızca gerektiğinde ve mümkünse `127.0.0.1` adresine bağlayarak yayınlayın, dışa açılımı bir reverse proxy veya tünel üzerinden yapın.

### Yedekleri ne sıklıkla almalıyım?

Ne kadar veri kaybını kabul edebileceğinize bağlıdır. Sık değişen veritabanları için günlük veya daha sık, yapılandırma dosyaları için değişiklik sonrası yedek mantıklıdır. Geri yükleme testini de takvime ekleyin.
