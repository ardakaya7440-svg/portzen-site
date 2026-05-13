import { ImageResponse } from "next/og";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get("title") || "PORTZEN";
  const description =
    searchParams.get("description") || "AI destekli web sitesi, sosyal medya ve otomasyon sistemleri.";

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          background: "linear-gradient(135deg, #060b14 0%, #0b1628 50%, #060e1e 100%)",
          padding: "64px 72px",
          justifyContent: "space-between",
          alignItems: "stretch",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Ambient glow top-left */}
        <div
          style={{
            position: "absolute",
            top: -80,
            left: -80,
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: "rgba(0,102,255,0.18)",
            filter: "blur(80px)",
          }}
        />
        {/* Ambient glow bottom-right */}
        <div
          style={{
            position: "absolute",
            bottom: -60,
            right: 200,
            width: 300,
            height: 300,
            borderRadius: "50%",
            background: "rgba(0,212,255,0.10)",
            filter: "blur(60px)",
          }}
        />

        {/* Left: text content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "68%",
            position: "relative",
          }}
        >
          {/* Brand label */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              fontSize: 14,
              textTransform: "uppercase",
              letterSpacing: "0.28em",
              color: "rgba(0,212,255,0.65)",
              fontWeight: 600,
            }}
          >
            <div
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "#00d4ff",
              }}
            />
            AI Growth Infrastructure · PORTZEN
          </div>

          {/* Title + description */}
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div
              style={{
                fontSize: 62,
                lineHeight: 1.05,
                fontWeight: 800,
                color: "#ffffff",
                letterSpacing: "-0.02em",
              }}
            >
              {title}
            </div>
            <div
              style={{
                fontSize: 26,
                lineHeight: 1.45,
                color: "rgba(255,255,255,0.5)",
                fontWeight: 400,
              }}
            >
              {description}
            </div>
          </div>

          {/* Bottom domain */}
          <div
            style={{
              fontSize: 18,
              color: "rgba(255,255,255,0.25)",
              letterSpacing: "0.04em",
            }}
          >
            portzen.ai
          </div>
        </div>

        {/* Right: brandmark card */}
        <div
          style={{
            display: "flex",
            width: 220,
            borderRadius: 32,
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.10)",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06)",
            position: "relative",
          }}
        >
          <svg
            width="100"
            height="100"
            viewBox="0 0 128 128"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="mhz" x1="32" x2="96" y1="34" y2="94" gradientUnits="userSpaceOnUse">
                <stop stopColor="#ffffff" />
                <stop offset="0.6" stopColor="rgba(255,255,255,0.85)" />
                <stop offset="1" stopColor="rgba(255,255,255,0.6)" />
              </linearGradient>
              <linearGradient id="accent" x1="72" x2="100" y1="30" y2="52" gradientUnits="userSpaceOnUse">
                <stop stopColor="#00d4ff" />
                <stop offset="1" stopColor="#0066ff" />
              </linearGradient>
            </defs>
            <path
              d="M35 89V40L53 65L64 79L75 65L93 40V89"
              stroke="url(#mhz)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="10"
            />
            <path
              d="M64 79C71 69 79 58 90 46"
              stroke="url(#accent)"
              strokeLinecap="round"
              strokeWidth="4"
            />
            <circle cx="95" cy="38" r="7" fill="url(#accent)" />
            <circle cx="95" cy="38" r="11" fill="#0066ff" fillOpacity="0.18" />
          </svg>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
