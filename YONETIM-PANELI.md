# PORTZEN yönetim paneli (/admin)

Panelden dört şeyi yönetirsiniz: **fiyatlar**, **markalar (logo şeridi)**, **müşteri yorumları**, **görseller ve işler**.
Panel `/admin` adresindedir; arama motorlarına kapalıdır (noindex, robots.txt).

## Yerel önizleme (canlıya dokunmaz)

```bash
npm install
npm run preview
```

- İlk çalıştırmada `.data/preview.env` oluşturulur ve terminalde **e-posta + şifre** yazdırılır.
- Site: http://localhost:3000 · Panel: http://localhost:3000/admin
- Veriler `.data/pglite` klasöründe kalıcıdır (sunucuyu kapatıp açınca kaybolmaz). `.data/` git'e eklenmez.
- Fiyat "Yayımla" denildiğinde önizleme sunucusu siteyi yeniden derler ve yeniden başlatır (birkaç dakika). Üretimde bunu Vercel yapar.
- Önizlemede yaptığınız fiyat ve içerik değişiklikleri yalnızca `.data/` klasöründe kalır; `src/data/` altındaki dosyalar değişmez. Bu yüzden yerelde denediğiniz fiyatlar yanlışlıkla git'e veya canlıya gitmez.
- Yerel önizlemede sürüm numaraları zaman zaman atlayabilir (ör. v1 → v34); sunucu kapatılırken veritabanının kısa yoldan kapanmasından kaynaklanır, veriyi etkilemez.

## Bölümler

### Fiyatlar
1. **Yeni taslak oluştur** → yayındaki fiyatlar kopyalanır. Yayındaki sürüm değişmez.
2. Her hizmet ve paket için aylık/proje bedeli, varsa kurulum ve bakım bedelini girin. **İlk ay toplamı** yazdıkça hesaplanır. Yayındakinden farklı alanlar sarı görünür.
3. **Kaydet ve önizle** → değişen tutarlar tablosu ve sitedeki kartların bu sürümle çizilmiş hâli.
4. **Yayımla** → sürüm yayımlanır, site yeniden derlenir. Paket kartları, karşılaştırma tabloları, SSS cevaplarındaki tutarlar, yapılandırılmış veri (schema.org) ve WhatsApp mesajları aynı kaynaktan güncellenir.
5. **Sürüm geçmişi → Bu sürüme dön**: eski sürümün kopyası yeni sürüm olarak yayımlanır; geçmiş silinmez.

Fiyatlar hiçbir zaman kendiliğinden değişmez; başlangıç sürümü (v1) sitedeki mevcut fiyatlardır.

### Markalar
- Logo ekleyin: ad, (isteğe bağlı) bağlantı, başlık: **Müşteri logosu** veya **Araç / platform logosu**.
- Eklenen ve görünür logolar ana sayfadaki şeride hemen eklenir. Gizle / göster, sırala (↑ ↓), logoyu değiştir, kaldır.
- Logolar kırpılmaz; farklı en-boy oranları dengeli boyutta gösterilir. 6 ve üzeri logoda şerit yavaşça kayar (durdur düğmesi var; "hareketi azalt" ayarında kaymaz), daha azında sabit dizilir. Hiç logo yoksa bölüm görünmez.
- Yalnızca kullanım izniniz olan logoları ekleyin.

### Müşteri yorumları
- Yorumu elle girin. Kaynak **Google** ise yorumu Google'dan kopyalayıp yapıştırın — otomatik çekme yoktur.
- Alanlar: yorum metni, görünen ad, şirket, unvan, görsel, tarih, puan, kaynak bağlantısı.
- **Puan yok** seçilirse yıldız gösterilmez. Toplam puan veya yorum sayısı hiçbir yerde hesaplanmaz.
- Taslak / yayımla / yayından kaldır / sırala / sil. Yayımlanmış yorum yoksa sitede yorum bölümü görünmez.

### Görseller ve işler
- **Seçilmiş işler**: Referanslar sayfasındaki "Seçilmiş işler" kartları. Yayımlanmış iş yoksa bölüm görünmez.
- **Hizmet görselleri**: hizmet sayfalarının "Kısaca" bölümünde kullanılır. Görsel yoksa kodla çizilmiş temsili görsel kullanılır.
- Alanlar: görsel/video (birden fazla), başlık, kısa açıklama, kategori, alternatif metin (yayın için zorunlu), proje ve video bağlantısı, **Demo** işareti (varsayılan açık).
- Kapak seçimi, dosya sırası, dosya kaldırma, taslak/yayımla.

## Dosya kuralları
- Görsel: JPG, PNG, WebP, GIF, SVG · Video: MP4, WebM · Dosya başına en fazla **4 MB**.
- Tür, dosya uzantısına değil içeriğe bakılarak doğrulanır. Görseller WebP'ye çevrilir ve küçültülür; SVG güvenlik için resme dönüştürülür.
- Daha büyük videolar için "Video bağlantısı" alanını kullanın.

## Güvenlik
- Panel oturumla korunur (imzalı, httpOnly çerez, 12 saat). Her yazma işleminde sunucu tarafında yetki kontrolü yapılır.
- 15 dakikada 5 hatalı girişten sonra o IP için giriş durur.
- Şifre ve anahtarlar yalnızca sunucu ortam değişkenlerindedir; tarayıcıya gönderilmez.
- Her değişiklik `audit_log` tablosuna kaydedilir.

## Canlıya almadan önce gereken altyapı (henüz kurulu değil)

| Ortam değişkeni | Ne için | Nasıl |
|---|---|---|
| `PORTZEN_DATABASE_URL` | Kalıcı veri ve yüklenen dosyalar | Vercel → Storage → Neon, "PORTZEN" önekiyle bağlandı (kuruldu). Eski `DATABASE_URL` bilerek kullanılmaz. |
| `ADMIN_EMAIL` | Giriş e-postası | Vercel → Settings → Environment Variables |
| `ADMIN_PASSWORD_HASH` | Şifre özeti (şifrenin kendisi saklanmaz) | `npm run admin:hash` çıktısı |
| `SESSION_SECRET` | Oturum çerezi imzası (≥32 karakter) | `npm run admin:hash -- --secret` çıktısı |
| `DEPLOY_HOOK_URL` | Fiyat yayınında siteyi yeniden derlemek | Vercel → Settings → Git → Deploy Hooks → `main` için hook oluşturun, adresi buraya ekleyin |

- **Önemli:** Deploy hook, Vercel projesine bağlı git dalını (ör. `main`) derler. Site şu an CLI ile (`vercel --prod`) yayınlandığı için git deposundaki kod geride kalmış olabilir. Hook'u kullanmadan önce güncel kodun git'e gönderilmiş olması gerekir; aksi hâlde hook eski kodu yayınlar.
- Tablolar ilk bağlantıda otomatik oluşturulur; başlangıç fiyat sürümü sitedeki mevcut fiyatlardır.
- Build öncesi `scripts/sync-content.mjs`, yayımlanmış fiyat sürümünü ve içerik anlık görüntüsünü veritabanından okur. Vercel'de `PORTZEN_DATABASE_URL` tanımlıyken veritabanı okunamazsa build durur (eski fiyatla yayına çıkılmaz).
- Logolar, yorumlar ve işler kaydedildiği anda sitede yenilenir (önbellek etiketi). Fiyatlar derleme ile yayına çıkar, çünkü sayfalarda, SSS metinlerinde ve yapılandırılmış veride de kullanılır.
