import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Ortak tasarım dili (ana sayfa referansı): beyaz zemin, slate metin
        paper: "var(--paper)", // #FFFFFF — tüm sayfa zeminleri
        ink: "var(--ink)", // #1F2A2E — metin (slate ile aynı)
        mute: "#F3F7F9", // eski kutu zemini → açık nötr
        // Yeni ana sayfa / navbar / footer paleti (Studiova)
        lime: "#C1FF72",
        slate: "#1F2A2E",
        light: "#F3F7F9",
        // Eski renkli blok paleti — yeni tasarımda kullanılmaz; kalan referanslar
        // ana sayfa paletine eşlenir (vurgu: lime, diğerleri açık nötr).
        brand: {
          yellow: "#C1FF72",
          pink: "#F3F7F9",
          blue: "#F3F7F9",
          green: "#F3F7F9",
          purple: "#F3F7F9",
          orange: "#F3F7F9",
        },
      },
      fontFamily: {
        display: ["var(--font-sans)", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        // Tek font ailesi: serif sınıfı da aynı aileye düşer
        serif: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        container: "1200px",
        prose: "680px",
      },
      borderRadius: {
        base: "12px",
      },
      borderWidth: {
        // Eski kalın kenarlık sınıfları ince kenarlığa eşlenir
        3: "1px",
      },
      boxShadow: {
        // Ölçülü gölgeler (eski sert offset gölgelerin yerine)
        brutal: "0 1px 2px rgba(31, 42, 46, 0.05)",
        "brutal-lg": "0 10px 30px -18px rgba(31, 42, 46, 0.25)",
        "brutal-sm": "none",
        card: "0 1px 2px rgba(31, 42, 46, 0.05)",
        "card-lg": "0 16px 40px -24px rgba(31, 42, 46, 0.30)",
      },
      fontWeight: {
        // Başlık hiyerarşisi ana sayfadaki gibi bold (700) sınırında kalır
        black: "700",
        extrabold: "700",
      },
      fontSize: {
        h1: ["clamp(2.25rem, 1.6rem + 2.6vw, 3.5rem)", { lineHeight: "1.08", letterSpacing: "-0.02em" }],
        h2: ["clamp(1.75rem, 1.35rem + 1.6vw, 2.75rem)", { lineHeight: "1.12", letterSpacing: "-0.015em" }],
        h3: ["clamp(1.25rem, 1.1rem + 0.6vw, 1.5rem)", { lineHeight: "1.25", letterSpacing: "-0.01em" }],
        body: ["clamp(1.0625rem, 1rem + 0.2vw, 1.1875rem)", { lineHeight: "1.6" }],
        small: ["0.875rem", { lineHeight: "1.5" }],
      },
      spacing: {
        section: "clamp(4rem, 3rem + 4vw, 7rem)",
      },
      transitionTimingFunction: {
        brutal: "cubic-bezier(0.2, 0.9, 0.3, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
