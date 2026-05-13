import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", '"SF Pro Display"', "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', '"Fira Code"', "monospace"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        muted: "var(--muted)",
        "muted-foreground": "var(--muted-foreground)",
        border: "var(--border)",
        panel: "var(--panel)",
        accent: "var(--accent)",
        "accent-strong": "var(--accent-strong)",
        "accent-soft": "var(--accent-soft)",
        success: "var(--success)",
        pz: {
          base:    "var(--pz-base)",
          surface: "var(--pz-surface)",
          panel:   "var(--pz-panel)",
          accent:  "var(--pz-accent)",
          cyan:    "var(--pz-cyan)",
        }
      },
      boxShadow: {
        soft:  "0 24px 80px rgba(0,0,0,0.5)",
        card:  "0 12px 40px rgba(0,0,0,0.4)",
        glow:  "0 0 40px rgba(0,102,255,0.35)",
        "glow-sm": "0 0 20px rgba(0,102,255,0.25)",
        "inner-top": "inset 0 1px 0 rgba(255,255,255,0.08)",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      backgroundImage: {
        "pz-hero": "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(0,102,255,0.12), transparent), linear-gradient(180deg, #020710 0%, #050d1c 100%)",
        "pz-card": "linear-gradient(145deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)",
        "pz-gradient": "linear-gradient(135deg, #0066ff 0%, #00aaff 100%)",
      },
      animation: {
        "pulse-slow":  "pulse 4s cubic-bezier(0.4,0,0.6,1) infinite",
        "float":       "float 8s ease-in-out infinite",
        "scan-line":   "scan-line 3s linear infinite",
      },
      keyframes: {
        float: {
          "0%,100%": { transform: "translateY(0px)" },
          "50%":     { transform: "translateY(-12px)" },
        },
        "scan-line": {
          "0%":   { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
      },
    }
  },
  plugins: []
};

export default config;
