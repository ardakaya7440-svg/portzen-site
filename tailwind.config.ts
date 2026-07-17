import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Neobrutalist base
        paper: "var(--paper)", // #FBFAF5 page background
        ink: "var(--ink)", // #0B0B0C text + all borders
        mute: "#F0EEE6", // hero video kutu bg
        // Vivid block palette
        brand: {
          yellow: "#FFE04A",
          pink: "#FF5CA8",
          blue: "#2D6CDF",
          green: "#22C55E",
          purple: "#7C3AED",
          orange: "#FF7A1A",
        },
      },
      fontFamily: {
        display: ["var(--font-sans)", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        // Editorial serif — italic vurgu, hero mark, wordmark
        serif: ["var(--font-serif)", "Georgia", "serif"],
      },
      maxWidth: {
        container: "1200px",
        prose: "680px",
      },
      borderRadius: {
        base: "12px",
      },
      borderWidth: {
        3: "3px",
      },
      boxShadow: {
        // Hard offset shadows (revision §2)
        brutal: "6px 6px 0 #0A0A0A",
        "brutal-lg": "8px 8px 0 #0A0A0A",
        "brutal-sm": "4px 4px 0 #0A0A0A",
      },
      fontSize: {
        h1: ["clamp(2.75rem, 1.4rem + 6vw, 6rem)", { lineHeight: "0.98", letterSpacing: "-0.03em" }],
        h2: ["clamp(2rem, 1.3rem + 3vw, 3.5rem)", { lineHeight: "1.02", letterSpacing: "-0.02em" }],
        h3: ["clamp(1.375rem, 1.1rem + 1vw, 1.875rem)", { lineHeight: "1.1", letterSpacing: "-0.01em" }],
        body: ["clamp(1.0625rem, 1rem + 0.2vw, 1.1875rem)", { lineHeight: "1.6" }],
        small: ["0.875rem", { lineHeight: "1.5" }],
      },
      spacing: {
        section: "clamp(5rem, 3.5rem + 7vw, 9rem)",
      },
      transitionTimingFunction: {
        brutal: "cubic-bezier(0.2, 0.9, 0.3, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
