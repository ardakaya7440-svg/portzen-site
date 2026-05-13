import type { ReactNode } from "react";
import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";

import { SiteChrome } from "@/components/layout/site-chrome";
import { createMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  ...createMetadata({
    title: siteConfig.title,
    description: siteConfig.description,
    path: "/"
  }),
  metadataBase: new URL(siteConfig.url)
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="tr" className={plusJakarta.variable}>
      <head>
        {/* Preload mobile hero — CSS background-image is not auto-discovered by browser */}
        <link
          rel="preload"
          as="image"
          href="/images/poseidon-hero-mobile.jpg"
          fetchPriority="high"
          media="(max-width: 767px)"
        />
      </head>
      <body className="antialiased">
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
