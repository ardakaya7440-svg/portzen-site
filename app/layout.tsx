import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Navbar } from "@/components/navbar/Navbar";
import "./globals.css";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? "G-ZKZGB9GPB2";

const montserrat = Montserrat({
  subsets: ["latin", "latin-ext"],
  variable: "--font-sans",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://portzenai.com"),
  title: {
    default: "PORTZEN — İşletmeler İçin AI Destekli Büyüme Altyapısı",
    template: "%s — PORTZEN"
  },
  description:
    "İşletmeler için yapay zeka destekli sosyal medya yönetimi, WhatsApp asistanı, otomasyon ve web tasarımı. Tek ekipten tüm sistem.",
  keywords: [
    "yapay zeka ajansı",
    "whatsapp ai asistanı",
    "sosyal medya yönetimi",
    "ai reklam videosu",
    "kobi otomasyon",
    "crm otomasyonu",
    "web tasarım",
    "portzen"
  ],
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://portzenai.com",
    siteName: "PORTZEN",
    title: "PORTZEN — İşletmeler İçin AI Destekli Büyüme Altyapısı",
    description:
      "Sosyal medya, AI asistan, otomasyon ve web yazılım — tek ekipten tüm sistem."
  },
  twitter: {
    card: "summary_large_image",
    title: "PORTZEN — AI Destekli Büyüme Altyapısı",
    description: "Sosyal medya, AI asistan, otomasyon ve web yazılım."
  },
  alternates: { canonical: "https://portzenai.com" },
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" className={montserrat.variable}>
      <body className="bg-paper text-ink antialiased">
        <Navbar />
        <main className="pt-[80px]">{children}</main>
        {GA_ID && <GoogleAnalytics gaId={GA_ID} />}
        <footer className="border-t-3 border-ink bg-ink text-paper mt-section">
          <div className="mx-auto max-w-container px-6 py-12 grid gap-8 md:grid-cols-4">
            <div className="md:col-span-2">
              <div className="inline-block border-3 border-paper bg-brand-yellow px-3 py-1.5 shadow-[6px_6px_0_#FFFDF5]">
                <span className="font-display text-xl font-black text-ink">PORTZEN</span>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-paper/80 max-w-sm">
                İşletmeler için AI üretim altyapısı kurar. Reklam videosu, WhatsApp asistanı, otomasyon sistemleri, sosyal medya içerik ve web tasarımı — tek ekipten.
              </p>
            </div>
            <div>
              <div className="text-xs font-black uppercase tracking-wider text-paper/60 mb-3">Hizmetler</div>
              <ul className="space-y-2 text-sm">
                <li><a href="/whatsapp-ai-asistani" className="hover:text-brand-yellow transition-colors">WhatsApp AI Asistanı</a></li>
                <li><a href="/instagram-dm-otomasyonu" className="hover:text-brand-yellow transition-colors">Instagram DM Otomasyonu</a></li>
                <li><a href="/ai-reklam-videosu" className="hover:text-brand-yellow transition-colors">AI Reklam Videosu</a></li>
                <li><a href="/crm-otomasyonu" className="hover:text-brand-yellow transition-colors">CRM Otomasyonu</a></li>
                <li><a href="/web-tasarim" className="hover:text-brand-yellow transition-colors">Web Tasarım</a></li>
              </ul>
            </div>
            <div>
              <div className="text-xs font-black uppercase tracking-wider text-paper/60 mb-3">Kurumsal</div>
              <ul className="space-y-2 text-sm">
                <li><a href="/referanslar" className="hover:text-brand-yellow transition-colors">Referanslar</a></li>
                <li><a href="/blog" className="hover:text-brand-yellow transition-colors">Blog</a></li>
                <li><a href="/hakkimizda" className="hover:text-brand-yellow transition-colors">Hakkımızda</a></li>
                <li><a href="/iletisim" className="hover:text-brand-yellow transition-colors">İletişim</a></li>
              </ul>
            </div>
          </div>

          {/* Karşılaştırma + niş sayfalar — defansif SEO */}
          <div className="border-t-3 border-paper/20 mx-auto max-w-container px-6 py-6">
            <div className="text-xs font-black uppercase tracking-wider text-paper/60 mb-3">Karşılaştırma & Rehber</div>
            <div className="flex flex-wrap gap-2">
              {[
                {label: "ManyChat Alternatifi", href: "/manychat-alternatifi"},
                {label: "Zapier Alternatifi", href: "/zapier-alternatifi"},
                {label: "HubSpot Alternatifi", href: "/hubspot-alternatifi"},
                {label: "Tidio Alternatifi", href: "/tidio-alternatifi"},
                {label: "Intercom Alternatifi", href: "/intercom-alternatifi"},
                {label: "WhatsApp Chatbot Fiyat", href: "/whatsapp-chatbot-fiyat"},
                {label: "AI Chatbot Türkçe", href: "/ai-chatbot-turkce"},
                {label: "n8n Kurulum Hizmeti", href: "/n8n-kurulum-hizmeti"}
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-xs text-paper/70 hover:text-brand-yellow border border-paper/20 px-2 py-1 hover:border-brand-yellow transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Şehir link şeridi — defansif local SEO */}
          <div className="border-t-3 border-paper/20 mx-auto max-w-container px-6 py-6">
            <div className="text-xs font-black uppercase tracking-wider text-paper/60 mb-3">Şehrinize Özel</div>
            <div className="flex flex-wrap gap-2">
              {[
                {label: "İzmir WhatsApp AI", href: "/whatsapp-ai-asistani/izmir"},
                {label: "İstanbul WhatsApp AI", href: "/whatsapp-ai-asistani/istanbul"},
                {label: "Ankara WhatsApp AI", href: "/whatsapp-ai-asistani/ankara"},
                {label: "İzmir Instagram DM", href: "/instagram-dm-otomasyonu/izmir"},
                {label: "İstanbul Instagram DM", href: "/instagram-dm-otomasyonu/istanbul"},
                {label: "Ankara Instagram DM", href: "/instagram-dm-otomasyonu/ankara"},
                {label: "İzmir Web Tasarım", href: "/web-tasarim/izmir"},
                {label: "İstanbul Web Tasarım", href: "/web-tasarim/istanbul"},
                {label: "Ankara Web Tasarım", href: "/web-tasarim/ankara"},
                {label: "İzmir CRM Otomasyon", href: "/crm-otomasyonu/izmir"},
                {label: "İstanbul CRM Otomasyon", href: "/crm-otomasyonu/istanbul"},
                {label: "Ankara CRM Otomasyon", href: "/crm-otomasyonu/ankara"},
                {label: "İzmir AI Reklam", href: "/ai-reklam-videosu/izmir"},
                {label: "İstanbul AI Reklam", href: "/ai-reklam-videosu/istanbul"},
                {label: "Ankara AI Reklam", href: "/ai-reklam-videosu/ankara"}
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-xs text-paper/70 hover:text-brand-yellow border border-paper/20 px-2 py-1 hover:border-brand-yellow transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Sektör link şeridi — defansif SEO */}
          <div className="border-t-3 border-paper/20 mx-auto max-w-container px-6 py-6">
            <div className="text-xs font-black uppercase tracking-wider text-paper/60 mb-3">Sektörel Çözümler</div>
            <div className="flex flex-wrap gap-2">
              {[
                {label: "Eczane WhatsApp AI", href: "/whatsapp-ai-asistani/eczane"},
                {label: "Klinik WhatsApp AI", href: "/whatsapp-ai-asistani/klinik"},
                {label: "Emlak WhatsApp AI", href: "/whatsapp-ai-asistani/emlak"},
                {label: "Restoran WhatsApp AI", href: "/whatsapp-ai-asistani/restoran"},
                {label: "Avukat WhatsApp AI", href: "/whatsapp-ai-asistani/avukat"},
                {label: "Klinik Instagram DM", href: "/instagram-dm-otomasyonu/klinik"},
                {label: "Restoran Instagram DM", href: "/instagram-dm-otomasyonu/restoran"},
                {label: "Butik Instagram DM", href: "/instagram-dm-otomasyonu/butik"},
                {label: "Klinik AI Reklam", href: "/ai-reklam-videosu/klinik"},
                {label: "Restoran AI Reklam", href: "/ai-reklam-videosu/restoran"},
                {label: "Klinik Web", href: "/web-tasarim/klinik"},
                {label: "Avukat Web", href: "/web-tasarim/avukat"},
                {label: "Emlak Web", href: "/web-tasarim/emlak"},
                {label: "Restoran Web", href: "/web-tasarim/restoran"},
                {label: "Eczane Web", href: "/web-tasarim/eczane"},
                {label: "Klinik CRM", href: "/crm-otomasyonu/klinik"},
                {label: "Emlak CRM", href: "/crm-otomasyonu/emlak"},
                {label: "Avukat CRM", href: "/crm-otomasyonu/avukat"},
                {label: "Eğitim CRM", href: "/crm-otomasyonu/egitim"}
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-xs text-paper/70 hover:text-brand-yellow border border-paper/20 px-2 py-1 hover:border-brand-yellow transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          <div className="border-t-3 border-paper/20 py-4 text-center text-xs text-paper/60">
            © {new Date().getFullYear()} PORTZEN — Tüm hakları saklıdır.
          </div>
        </footer>
      </body>
    </html>
  );
}
