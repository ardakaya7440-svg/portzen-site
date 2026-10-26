import type { Metadata } from "next";
import localFont from "next/font/local";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Navbar } from "@/components/navbar/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppAttribution } from "@/components/analytics/WhatsAppAttribution";
import { MetaPixel } from "@/components/analytics/MetaPixel";
import { SiteChrome } from "@/components/layout/SiteChrome";
import "./globals.css";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? "G-ZKZGB9GPB2";

/**
 * Sitenin tek font ailesi: Manrope (değişken font, 200–800 ağırlık tek dosyada).
 * Latin + Latin Extended (Türkçe karakterler ve ₺ dahil) alt kümesi yerelde barındırılır;
 * başlık, gövde, buton, form, fiyat, menü ve footer aynı aileyi kullanır.
 */
const manrope = localFont({
  src: "./fonts/Manrope-var.woff2",
  variable: "--font-sans",
  weight: "200 800",
  display: "swap",
  fallback: ["system-ui", "-apple-system", "Segoe UI", "Arial", "sans-serif"]
});

export const metadata: Metadata = {
  metadataBase: new URL("https://portzenai.com"),
  title: {
    default: "PORTZEN — Sosyal medya yönetimi ve kişiye özel yazılım | İzmir",
    template: "%s — PORTZEN"
  },
  description:
    "PORTZEN, İzmir merkezli sosyal medya ve yazılım ajansı. Instagram, TikTok ve LinkedIn hesaplarınızı yönetir; web sitesi, mobil uygulama ve iç sistem geliştirir. Ücretsiz ilk görüşme, ardından yazılı teklif.",
  keywords: [
    "sosyal medya ajansı izmir",
    "sosyal medya yönetimi",
    "yazılım ajansı izmir",
    "web sitesi yapımı",
    "mobil uygulama geliştirme",
    "kişiye özel yazılım",
    "içerik üretimi",
    "portzen"
  ],
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://portzenai.com",
    siteName: "PORTZEN",
    title: "PORTZEN — Sosyal medya yönetimi ve kişiye özel yazılım",
    description:
      "Sosyal medyanızı yönetiriz. Yazılımınızı geliştiririz. Ücretsiz ilk görüşme, ardından yazılı teklif.",
    images: [{ url: "https://portzenai.com/og-image.png", width: 1200, height: 630, alt: "PORTZEN" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "PORTZEN — Sosyal medya yönetimi ve kişiye özel yazılım",
    description: "Sosyal medyanızı yönetiriz. Yazılımınızı geliştiririz.",
    images: ["https://portzenai.com/og-image.png"]
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
  alternateName: ["PORTZEN AI", "PORTZEN"],
  description:
    "İzmir merkezli sosyal medya ve yazılım ajansı. Sosyal medya yönetimi, içerik üretimi, web sitesi, mobil uygulama ve işletmeye özel iç sistemler. Tek ekip, tek muhatap.",
  url: "https://portzenai.com",
  logo: {
    "@type": "ImageObject",
    url: "https://portzenai.com/logo.png",
    width: 512,
    height: 512
  },
  image: "https://portzenai.com/logo.png",
  email: "destek@portzenai.com",
  telephone: "+905318639117",
  foundingDate: "2026",
  slogan: "Sosyal medyanızı yönetiriz. Yazılımınızı geliştiririz.",
  address: [
    {
      "@type": "PostalAddress",
      addressCountry: "TR",
      addressRegion: "İzmir",
      addressLocality: "İzmir"
    },
    {
      "@type": "PostalAddress",
      name: "PORTZEN Kazan ofisi (IT Park)",
      streetAddress: "IT Park, Peterburgskaya ul. 52",
      addressLocality: "Kazan",
      addressRegion: "Tataristan",
      addressCountry: "RU"
    }
  ],
  areaServed: [
    { "@type": "Country", name: "Türkiye" },
    { "@type": "City", name: "İzmir" },
    { "@type": "City", name: "İstanbul" },
    { "@type": "City", name: "Ankara" },
    { "@type": "Country", name: "Rusya" },
    { "@type": "City", name: "Kazan" }
  ],
  knowsAbout: [
    "Sosyal Medya Yönetimi",
    "İçerik Üretimi",
    "Web Sitesi ve Web Uygulaması Geliştirme",
    "Mobil Uygulama Geliştirme",
    "Kişiye Özel Yazılım",
    "CRM ve İç Sistemler",
    "Dijital Pazarlama"
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+905318639117",
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
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Sosyal Medya Yönetimi", url: "https://portzenai.com/sosyal-medya-yonetimi" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "İçerik Üretimi", url: "https://portzenai.com/sosyal-medya-viral-video" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Web Sitesi ve Web Uygulaması", url: "https://portzenai.com/hizmetler/web-yazilim" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Mobil Uygulama ve İç Sistem", url: "https://portzenai.com/hizmetler/mobil-uygulama" } }
    ]
  }
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://portzenai.com/#website",
  url: "https://portzenai.com",
  name: "PORTZEN",
  description: "Sosyal medya yönetimi ve kişiye özel yazılım",
  inLanguage: "tr-TR",
  publisher: { "@id": "https://portzenai.com/#organization" }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" className={manrope.variable}>
      <body className="bg-white text-ink antialiased">
        <SiteChrome>
          <Navbar />
        </SiteChrome>
        <main id="main" tabIndex={-1} className="outline-none">{children}</main>
        <SiteChrome>
          <WhatsAppAttribution />
          {GA_ID && <GoogleAnalytics gaId={GA_ID} />}
          <MetaPixel />
        </SiteChrome>
        {/* Schema.org JSON-LD — Organization + WebSite */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <SiteChrome>
          <Footer />
        </SiteChrome>
      </body>
    </html>
  );
}
