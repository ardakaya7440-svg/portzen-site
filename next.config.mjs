import path from 'node:path';

// Yerel önizleme: fiyat ve içerik anlık görüntüsü .data/generated/ klasöründen okunur (src/data/ değişmez).
const previewDataDir = process.env.PZ_PREVIEW_DATA_DIR ? path.resolve(process.env.PZ_PREVIEW_DATA_DIR) : null;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Yerel geliştirmede ayrı derleme klasörü kullanılabilsin (önizleme sunucusuyla çakışmasın)
  distDir: process.env.NEXT_DIST_DIR || '.next',
  experimental: {
    // Sunucu tarafı veritabanı/görsel paketleri paketlenmeden Node'da çalışsın
    serverComponentsExternalPackages: ['@electric-sql/pglite', 'pg', 'sharp'],
    // Admin yüklemeleri: dosya sınırı 4 MB (Vercel istek sınırı ~4,5 MB)
    serverActions: { bodySizeLimit: '5mb' }
  },
  images: { remotePatterns: [{ protocol: 'https', hostname: '**' }] },
  webpack(config, { webpack }) {
    if (previewDataDir) {
      config.plugins.push(
        new webpack.NormalModuleReplacementPlugin(/pricing\.published\.json$/, path.join(previewDataDir, 'pricing.published.json')),
        new webpack.NormalModuleReplacementPlugin(/cms\.snapshot\.json$/, path.join(previewDataDir, 'cms.snapshot.json'))
      );
    }
    return config;
  },
  async headers() {
    return [{ source: '/admin/:path*', headers: [{ key: 'X-Robots-Tag', value: 'noindex, nofollow' }] }];
  },
  async redirects() {
    return [
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
