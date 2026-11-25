import path from 'node:path';

// Yerel önizleme: içerik (CMS) anlık görüntüsü .data/generated/ klasöründen okunur (src/data/ değişmez). Fiyat anlık görüntüsü YOKTUR (fiyat tek kaynağı veritabanı).
const previewDataDir = process.env.PZ_PREVIEW_DATA_DIR ? path.resolve(process.env.PZ_PREVIEW_DATA_DIR) : null;

// Önizleme veri dosyalarının yerine geçecek yollar (yalnızca PZ_PREVIEW_DATA_DIR tanımlıyken).
// Next 16 varsayılan derleyicisi Turbopack: modül değişimi turbopack.resolveAlias ile yapılır;
// `next build --webpack` ile derlenirse aynı değişim webpack eklentisiyle uygulanır.
// Turbopack resolveAlias proje köküne göreli yol ister (mutlak yol "server relative" sayılır).
const rel = (f) => './' + path.relative(process.cwd(), path.join(previewDataDir, f)).split(path.sep).join('/');
const previewAliases = previewDataDir
  ? {
      '@/data/cms.snapshot.json': rel('cms.snapshot.json')
    }
  : null;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Yerel geliştirmede ayrı derleme klasörü kullanılabilsin (önizleme sunucusuyla çakışmasın)
  distDir: process.env.NEXT_DIST_DIR || '.next',
  // Sunucu tarafı veritabanı/görsel paketleri paketlenmeden Node'da çalışsın
  serverExternalPackages: ['@electric-sql/pglite', 'pg', 'sharp'],
  experimental: {
    // Admin yüklemeleri: dosya sınırı 4 MB (Vercel istek sınırı ~4,5 MB)
    serverActions: { bodySizeLimit: '5mb' },
    // Kaynak sınırlı sunucu build'i: statik sayfa üretim worker sayısı NEXT_BUILD_CPUS ile sınırlanır
    // (Dockerfile builder aşamasında 2). Tanımsızsa (Vercel) Next varsayılanı kullanılır.
    ...(Number(process.env.NEXT_BUILD_CPUS) > 0 ? { cpus: Number(process.env.NEXT_BUILD_CPUS) } : {})
  },
  // Güvenlik: next/image yalnızca yerel (public/) görselleri kullanıyor; uzak host izni YOK.
  // (Eski '**' joker izni Image Optimizer'ı SSRF/RCE saldırılarına açıyordu: GHSA-2xp9-vwfh-vxw4, GHSA-2464-fhr4-w9xw, GHSA-cjq9-62q9-8jv4.)
  // Uzak görsel gerekirse yalnızca ilgili https hostunu tam adıyla ekleyin.
  images: {
    remotePatterns: [],
    localPatterns: [{ pathname: '/**', search: '' }],
    formats: ['image/webp'],
    qualities: [75],
    minimumCacheTTL: 14400,
    dangerouslyAllowSVG: false
  },
  ...(previewAliases
    ? {
        turbopack: { resolveAlias: previewAliases },
        webpack(config, { webpack }) {
          config.plugins.push(
            new webpack.NormalModuleReplacementPlugin(/cms\.snapshot\.json$/, path.join(previewDataDir, 'cms.snapshot.json'))
          );
          return config;
        }
      }
    : {}),
  async headers() {
    const rules = [{ source: '/admin/:path*', headers: [{ key: 'X-Robots-Tag', value: 'noindex, nofollow' }] }];
    // Staging/önizleme (NEXT_PUBLIC_SITE_ENV tanımlı ve "production" değil): sayfa bazlı robots metadata'sı
    // index:true dese bile tüm site noindex. Tanımsızsa production sayılır → bu kural eklenmez.
    if ((process.env.NEXT_PUBLIC_SITE_ENV || 'production') !== 'production') {
      rules.push({ source: '/:path*', headers: [{ key: 'X-Robots-Tag', value: 'noindex, nofollow' }] });
    }
    return rules;
  },
  async redirects() {
    return [
      { source: '/referanslar', destination: '/', permanent: true },
      { source: '/hizmetler', destination: '/', permanent: true },
      { source: '/hizmetler/web-tasarim', destination: '/web-tasarim', permanent: true },
      { source: '/hizmetler/ai-bot', destination: '/whatsapp-ai-asistani', permanent: true },
      { source: '/hizmetler/ai-video', destination: '/yapay-zeka-video-uretimi', permanent: true },
      { source: '/hizmetler/otomasyon', destination: '/crm-otomasyonu', permanent: true },
      { source: '/hizmetler/sosyal-medya', destination: '/sosyal-medya-yonetimi', permanent: true }
    ];
  }
};
export default nextConfig;
