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
          <div className="mx-auto max-w-container px-6 py-12 grid gap-8 md:grid-cols-[1.5fr_1fr_1fr]">
            {/* Sol: Marka + iletişim */}
            <div>
              <div className="inline-block border-3 border-paper bg-brand-yellow px-3 py-1.5 shadow-[6px_6px_0_#FFFDF5]">
                <span className="font-display text-xl font-black text-ink">PORTZEN</span>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-paper/80 max-w-sm">
                Sosyal medya tarafında klasik ajanslardan farklı çalışıyoruz — AI destekli içerik, DM yönetimi ve büyüme sistemleri.
              </p>
              <div className="mt-5 space-y-1.5 text-sm">
                <div>
                  <a href="https://wa.me/905015884853" target="_blank" rel="noopener noreferrer" className="text-paper hover:text-brand-yellow transition-colors font-bold">
                    WhatsApp: 0501 588 48 53
                  </a>
                </div>
                <div>
                  <a href="mailto:portzenajans@gmail.com" className="text-paper/80 hover:text-brand-yellow transition-colors">
                    portzenajans@gmail.com
                  </a>
                </div>
                <div className="text-paper/60 text-xs pt-1">İzmir, Türkiye</div>
              </div>
            </div>

            {/* Orta: Hizmetler */}
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

            {/* Sağ: Kurumsal */}
            <div>
              <div className="text-xs font-black uppercase tracking-wider text-paper/60 mb-3">Kurumsal</div>
              <ul className="space-y-2 text-sm">
                <li><a href="/blog" className="hover:text-brand-yellow transition-colors">Blog</a></li>
                <li><a href="/referanslar" className="hover:text-brand-yellow transition-colors">Referanslar</a></li>
                <li><a href="/hakkimizda" className="hover:text-brand-yellow transition-colors">Hakkımızda</a></li>
                <li><a href="/iletisim" className="hover:text-brand-yellow transition-colors">İletişim</a></li>
                <li><a href="/sitemap.xml" className="hover:text-brand-yellow transition-colors text-paper/50">Sitemap</a></li>
              </ul>
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
