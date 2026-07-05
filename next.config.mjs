/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: { remotePatterns: [{ protocol: 'https', hostname: '**' }] },
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
