import Link from "next/link";
import { BrandMark } from "@/components/brand/brand-mark";
import { siteConfig } from "@/lib/site";

const SERVICES = [
  { label: "AI Agent Sistemleri", href: "/hizmetler/ai-otomasyon-danismanligi" },
  { label: "WhatsApp Otomasyonu", href: "/hizmetler/musteri-lead-yonetimi-otomasyonu" },
  { label: "Lead Generation", href: "/hizmetler/is-surecleri-otomasyonu" },
  { label: "Google Ads", href: "/hizmetler/satis-sureci-otomasyonu" },
  { label: "Workflow Automation", href: "/hizmetler/operasyon-otomasyonu" },
  { label: "Web Geliştirme", href: "/hizmetler/e-ticaret-otomasyonu" },
];

export function Footer() {
  return (
    <footer
      style={{
        background: "#020710",
        borderTop: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      {/* Top glow line */}
      <div
        className="h-px"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(0,102,255,0.3), transparent)",
        }}
      />

      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-16 py-16 sm:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[2fr_1fr_1fr_1fr]">

          {/* Brand column */}
          <div>
            <div className="flex items-center gap-3.5 mb-8">
              <BrandMark className="h-10 w-10" />
              <div>
                <p
                  className="text-[9px] font-bold uppercase tracking-[0.3em] leading-none mb-1"
                  style={{ color: "rgba(0,170,255,0.45)" }}
                >
                  {siteConfig.tagline}
                </p>
                <p
                  className="text-base font-black tracking-[-0.01em] leading-none"
                  style={{ color: "rgba(255,255,255,0.92)" }}
                >
                  {siteConfig.name}
                </p>
              </div>
            </div>

            <p
              className="max-w-sm text-sm leading-[1.8] mb-8"
              style={{ color: "rgba(255,255,255,0.52)" }}
            >
              AI agent sistemleri, otomasyon altyapısı ve growth intelligence ile işletmeleri ölçeklenebilir büyüme makinelerine dönüştürüyoruz.
            </p>

            {/* Status pill */}
            <div
              className="inline-flex items-center gap-2 rounded-full px-4 py-2"
              style={{
                background: "rgba(16,185,129,0.08)",
                border: "1px solid rgba(16,185,129,0.18)",
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span
                className="text-[11px] font-semibold"
                style={{ color: "rgba(52,211,153,0.8)" }}
              >
                Tüm sistemler çevrimiçi
              </span>
            </div>
          </div>

          {/* Sistemler */}
          <div>
            <h3
              className="text-xs font-bold uppercase tracking-[0.2em] mb-5"
              style={{ color: "rgba(255,255,255,0.25)" }}
            >
              Sistemler
            </h3>
            <ul className="space-y-3">
              {SERVICES.map((s) => (
                <li key={s.href}>
                  <Link
                    className="text-sm transition-colors duration-200"
                    style={{ color: "rgba(255,255,255,0.55)" }}
                    href={s.href}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.90)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.55)")}
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Sayfalar */}
          <div>
            <h3
              className="text-xs font-bold uppercase tracking-[0.2em] mb-5"
              style={{ color: "rgba(255,255,255,0.25)" }}
            >
              Şirket
            </h3>
            <ul className="space-y-3">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    className="text-sm transition-colors duration-200"
                    style={{ color: "rgba(255,255,255,0.42)" }}
                    href={item.href}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.85)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.42)")}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  className="text-sm transition-colors duration-200"
                  style={{ color: "rgba(255,255,255,0.30)" }}
                  href="/admin/login"
                  onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.65)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.30)")}
                >
                  Admin
                </Link>
              </li>
            </ul>
          </div>

          {/* İletişim */}
          <div>
            <h3
              className="text-xs font-bold uppercase tracking-[0.2em] mb-5"
              style={{ color: "rgba(255,255,255,0.25)" }}
            >
              İletişim
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={siteConfig.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm transition-colors duration-200"
                  style={{ color: "rgba(37,211,102,0.75)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(37,211,102,1)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(37,211,102,0.75)")}
                >
                  <svg className="w-3.5 h-3.5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp Sistem Analizi
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-sm transition-colors duration-200"
                  style={{ color: "rgba(255,255,255,0.55)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.90)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.55)")}
                >
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a
                  href="/iletisim"
                  className="text-sm transition-colors duration-200"
                  style={{ color: "rgba(0,170,255,0.65)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(0,170,255,0.90)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(0,170,255,0.65)")}
                >
                  Analiz formu →
                </a>
              </li>
              <li
                className="text-sm"
                style={{ color: "rgba(255,255,255,0.52)" }}
              >
                {siteConfig.location}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-16 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
        >
          <p
            className="text-xs"
            style={{ color: "rgba(255,255,255,0.32)" }}
          >
            &copy; {new Date().getFullYear()} {siteConfig.legalName}. Tüm hakları saklıdır.
          </p>
          <div
            className="flex items-center gap-1.5 text-[11px] font-medium"
            style={{ color: "rgba(255,255,255,0.30)" }}
          >
            <span
              className="inline-block w-1.5 h-1.5 rounded-full"
              style={{ background: "rgba(0,102,255,0.6)" }}
            />
            Built on AI Infrastructure
          </div>
        </div>
      </div>
    </footer>
  );
}
