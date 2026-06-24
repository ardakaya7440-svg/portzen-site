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

/* ============================================================
   Schema.org Structured Data (AI visibility + Knowledge Panel)
   ChatGPT, Gemini, Perplexity ve Google bot'ları PORTZEN'i
   buradan tanır.
   ============================================================ */
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "ProfessionalService"],
  "@id": "https://portzenai.com/#organization",
  name: "PORTZEN",
  alternateName: ["PORTZEN AI", "PORTZEN AI Ajansı"],
  description:
    "İzmir merkezli, KOBİ'ler için AI destekli sosyal medya yönetimi, WhatsApp asistanı, otomasyon ve web tasarım hizmetleri sunan dijital ajans. Beş ayrı ajans yerine tek ekipten tüm sistem.",
  url: "https://portzenai.com",
  logo: {
    "@type": "ImageObject",
    url: "https://portzenai.com/logo.png",
    width: 512,
    height: 512
  },
  image: "https://portzenai.com/logo.png",
  email: "destek@portzenai.com",
  telephone: "+905015884853",
  foundingDate: "2026",
  slogan: "Beş ajans yerine tek ekip",
  address: {
    "@type": "PostalAddress",
    addressCountry: "TR",
    addressRegion: "İzmir",
    addressLocality: "İzmir"
  },
  areaServed: [
    { "@type": "Country", name: "Türkiye" },
    { "@type": "City", name: "İzmir" },
    { "@type": "City", name: "İstanbul" },
    { "@type": "City", name: "Ankara" }
  ],
  knowsAbout: [
    "Yapay Zeka",
    "Sosyal Medya Yönetimi",
    "WhatsApp AI Asistanı",
    "Instagram DM Otomasyonu",
    "AI Reklam Videosu",
    "CRM Otomasyonu",
    "Web Tasarım",
    "Dijital Pazarlama",
    "KOBİ Otomasyonu",
    "Türk KOBİ AI Çözümleri"
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+905015884853",
    contactType: "customer service",
    email: "destek@portzenai.com",
    availableLanguage: ["Turkish"],
    areaServed: "TR"
  },
  sameAs: [
    "https://www.linkedin.com/company/portzenai/"
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "PORTZEN Hizmetleri",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "WhatsApp AI Asistanı",
          url: "https://portzenai.com/whatsapp-ai-asistani"
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Instagram DM Otomasyonu",
          url: "https://portzenai.com/instagram-dm-otomasyonu"
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "AI Reklam Videosu",
          url: "https://portzenai.com/ai-reklam-videosu"
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Web Tasarım",
          url: "https://portzenai.com/web-tasarim"
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "CRM Otomasyonu",
          url: "https://portzenai.com/crm-otomasyonu"
        }
      }
    ]
  }
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://portzenai.com/#website",
  url: "https://portzenai.com",
  name: "PORTZEN",
  description: "İşletmeler için AI destekli büyüme altyapısı",
  inLanguage: "tr-TR",
  publisher: { "@id": "https://portzenai.com/#organization" }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" className={montserrat.variable}>
      <body className="bg-paper text-ink antialiased">
        <Navbar />
        <main className="pt-[80px]">{children}</main>
        {GA_ID && <GoogleAnalytics gaId={GA_ID} />}
        {/* Schema.org JSON-LD — Organization + WebSite */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
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
                  <a href="mailto:destek@portzenai.com" className="text-paper/80 hover:text-brand-yellow transition-colors">
                    destek@portzenai.com
                  </a>
                </div>
                <div className="text-paper/60 text-xs pt-1">İzmir, Türkiye</div>
              </div>
            </div>

            {/* Orta: Hizmetler */}
            <div>
              <div className="text-xs font-black uppercase tracking-wider text-paper/60 mb-3">Hizmetler</div>
              <ul className="space-y-2 text-sm">
                <li><a href="/sosyal-medya-ajansi" className="hover:text-brand-yellow transition-colors">Sosyal Medya Ajansı</a></li>
                <li><a href="/meta-reklam-ajansi" className="hover:text-brand-yellow transition-colors">Meta Reklam Ajansı</a></li>
                <li><a href="/yapay-zeka-video-uretimi" className="hover:text-brand-yellow transition-colors">Yapay Zeka Video Üretimi</a></li>
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
                <li className="pt-2 mt-2 border-t border-paper/15"><a href="/kvkk" className="text-paper/60 hover:text-brand-yellow transition-colors text-xs">KVKK</a></li>
                <li><a href="/gizlilik-politikasi" className="text-paper/60 hover:text-brand-yellow transition-colors text-xs">Gizlilik Politikası</a></li>
                <li><a href="/kullanim-sartlari" className="text-paper/60 hover:text-brand-yellow transition-colors text-xs">Kullanım Şartları</a></li>
                <li><a href="/sitemap.xml" className="text-paper/40 hover:text-brand-yellow transition-colors text-xs">Sitemap</a></li>
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
