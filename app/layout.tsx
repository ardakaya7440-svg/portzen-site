import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { Navbar } from "@/components/navbar/Navbar";
import "./globals.css";

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
                <li><a href="/hizmetler/ai-video" className="hover:text-brand-yellow transition-colors">AI Video</a></li>
                <li><a href="/hizmetler/whatsapp-bot" className="hover:text-brand-yellow transition-colors">WhatsApp Bot</a></li>
                <li><a href="/hizmetler/otomasyon" className="hover:text-brand-yellow transition-colors">Otomasyon</a></li>
                <li><a href="/hizmetler/sosyal-medya" className="hover:text-brand-yellow transition-colors">Sosyal Medya</a></li>
                <li><a href="/hizmetler/web-tasarim" className="hover:text-brand-yellow transition-colors">Web Tasarım</a></li>
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
          <div className="border-t-3 border-paper/20 py-4 text-center text-xs text-paper/60">
            © {new Date().getFullYear()} PORTZEN — Tüm hakları saklıdır.
          </div>
        </footer>
      </body>
    </html>
  );
}
