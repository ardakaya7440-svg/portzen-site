import Link from "next/link";
import { ArrowUpRight, Sparkles, Play } from "lucide-react";
import { SERVICES, TONE_BG, TONE_TEXT } from "@/data/services";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/reveal";
import {
  SERVICE_META,
  getSectorLanding,
  getSectorSlugsForServiceByType,
  type ServiceSlug
} from "@/lib/landings";
import { ServiceSelectorGrid, type ServicePanelData } from "@/components/landing/ServiceSelectorGrid";

export default function HomePage() {
  return (
    <>
      {/* HERO — solid transition: gradient stops, sticky video bg */}
      <section className="relative overflow-hidden">
        {/* Hero arka plan animasyonu */}
        <div className="absolute inset-0 -z-10">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover"
          >
            <source src="/assets/hero/hero-bg.mp4" type="video/mp4" />
          </video>
          {/* Solid transition layer — top to bottom: paper transparent → paper solid */}
          <div className="absolute inset-0 bg-gradient-to-b from-paper/40 via-paper/70 to-paper" />
        </div>

        <div className="mx-auto max-w-container px-6 pt-16 pb-24 md:pt-24 md:pb-32 relative">
          <Reveal>
            <div className="inline-flex items-center gap-2 border-3 border-ink bg-brand-yellow px-3 py-1.5 shadow-brutal-sm mb-6">
              <Sparkles className="h-3.5 w-3.5" />
              <span className="text-xs font-black uppercase tracking-wider">KOBİ AI Üretim Altyapısı</span>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="font-display text-h1 font-black leading-[0.95] text-ink max-w-4xl">
              Üç farklı ajansla uğraşma. <br />
              <span className="bg-brand-pink text-paper px-3 -mx-1 inline-block border-3 border-ink shadow-brutal">Tek ekip</span>{" "}
              <span className="whitespace-nowrap">sistemini kursun.</span>
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-6 max-w-prose text-body text-ink/80">
              PORTZEN; yapay zeka reklam videosu, WhatsApp asistanı, otomasyon sistemleri, sosyal medya içerik ve web tasarımını <strong>tek bir ekipten</strong> üretir. Beş ajans yerine — bir altyapı.
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="/iletisim"
                className="inline-flex items-center gap-2 border-3 border-ink bg-ink px-5 py-3 text-sm font-bold uppercase text-paper shadow-brutal hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-brutal-lg transition-all"
              >
                Ücretsiz Sistem Analizi
                <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link
                href="/referanslar"
                className="inline-flex items-center gap-2 border-3 border-ink bg-paper px-5 py-3 text-sm font-bold uppercase text-ink shadow-brutal-sm hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-brutal transition-all"
              >
                <Play className="h-4 w-4" />
                Referansları Gör
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* HIZMETLER GRID — 5 hizmet kart */}
      <section className="bg-paper py-section">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-12 max-w-2xl">
              <div className="inline-block border-3 border-ink bg-brand-blue px-3 py-1 text-paper text-xs font-black uppercase tracking-wider mb-3 shadow-brutal-sm">
                Hizmetler
              </div>
              <h2 className="font-display text-h2 font-black leading-tight text-ink">
                Beş hizmet, tek koordinasyon.
              </h2>
              <p className="mt-3 text-body text-ink/70">
                Brief'i tek yere veriyorsun — sistem altyapısı çıkıyor. Her hizmet diğeriyle konuşacak şekilde tasarlanır.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((svc, i) => (
              <Reveal key={svc.slug} delay={i * 60}>
                <Link
                  href={svc.href}
                  className={cn(
                    "group block border-3 border-ink p-6 shadow-brutal hover:-translate-x-1 hover:-translate-y-1 hover:shadow-brutal-lg transition-all h-full",
                    TONE_BG[svc.tone],
                    TONE_TEXT[svc.tone]
                  )}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="border-3 border-ink bg-paper text-ink p-2 shadow-brutal-sm">
                      <svc.icon className="h-6 w-6" />
                    </div>
                    <ArrowUpRight className="h-5 w-5 opacity-50 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <h3 className="font-display text-xl font-black leading-tight mb-2">{svc.title}</h3>
                  <p className="text-sm opacity-85 mb-4">{svc.tagline}</p>
                  <ul className="space-y-1.5 text-sm">
                    {svc.subServices.slice(0, 3).map((sub) => (
                      <li key={sub.href} className="flex items-center gap-1.5">
                        <span className="h-1.5 w-1.5 bg-ink rounded-full flex-shrink-0" />
                        {sub.title}
                      </li>
                    ))}
                  </ul>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SİZE ÖZEL — kompakt 5 hizmet kartı + modal pop-up */}
      <section className="bg-paper py-section border-t-3 border-ink">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-10 max-w-2xl">
              <div className="inline-block border-3 border-ink bg-brand-green px-3 py-1 text-paper text-xs font-black uppercase tracking-wider mb-3 shadow-brutal-sm">
                Size Özel
              </div>
              <h2 className="font-display text-h2 font-black leading-tight text-ink">
                Sektörünüz ya da şehriniz için hazır sayfa
              </h2>
              <p className="mt-3 text-body text-ink/70">
                Hizmeti seçin — sektör (eczane, klinik, emlak…) ve şehir (İzmir, İstanbul, Ankara) seçenekleri pop-up'ta açılır.
              </p>
            </div>
          </Reveal>

          {(() => {
            const panels: ServicePanelData[] = (
              [
                "whatsapp-ai-asistani",
                "instagram-dm-otomasyonu",
                "ai-reklam-videosu",
                "web-tasarim",
                "crm-otomasyonu"
              ] as ServiceSlug[]
            ).map((serviceSlug) => {
              const meta = SERVICE_META[serviceSlug];
              const sectorSlugs = getSectorSlugsForServiceByType(serviceSlug, "sector");
              const locationSlugs = getSectorSlugsForServiceByType(serviceSlug, "location");

              const sectors = sectorSlugs
                .map((slug) => {
                  const data = getSectorLanding(serviceSlug, slug);
                  return data ? { slug, name: data.sectorName } : null;
                })
                .filter((s): s is { slug: string; name: string } => s !== null);

              const locations = locationSlugs
                .map((slug) => {
                  const data = getSectorLanding(serviceSlug, slug);
                  return data ? { slug, name: data.sectorName } : null;
                })
                .filter((s): s is { slug: string; name: string } => s !== null);

              return {
                serviceSlug,
                label: meta.label,
                shortLabel: meta.shortLabel,
                tone: meta.tone,
                sectors,
                locations
              };
            });

            return <ServiceSelectorGrid panels={panels} />;
          })()}
        </div>
      </section>

      {/* SOSYAL KANIT */}
      <section className="bg-ink text-paper py-section">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="max-w-3xl">
              <div className="inline-block border-3 border-paper bg-brand-pink px-3 py-1 text-paper text-xs font-black uppercase tracking-wider mb-3 shadow-[6px_6px_0_#FFFDF5]">
                Niye Çalışıyor
              </div>
              <h2 className="font-display text-h2 font-black leading-tight">
                Beş ajansla 80.000 TL ödediğin işi — bir ekiple <span className="bg-brand-yellow text-ink px-2 -mx-0.5">3 hafta</span> içinde teslim alıyorsun.
              </h2>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { label: "Ortalama teslim süresi", value: "3 hafta", color: "bg-brand-yellow" },
              { label: "Manuel iş azalma oranı", value: "%80", color: "bg-brand-green" },
              { label: "Tek brief = tek koordinasyon", value: "1 ekip", color: "bg-brand-orange" }
            ].map((stat, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className={cn("border-3 border-paper p-6 shadow-[8px_8px_0_#FFFDF5]", stat.color)}>
                  <div className="text-ink font-display text-5xl font-black leading-none mb-2">{stat.value}</div>
                  <div className="text-ink text-xs font-bold uppercase tracking-wider">{stat.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BLOCK */}
      <section className="py-section">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="border-3 border-ink bg-brand-yellow p-8 md:p-16 shadow-brutal-lg">
              <div className="max-w-2xl">
                <h2 className="font-display text-h2 font-black leading-tight text-ink">
                  Sistemini birlikte konuşalım.
                </h2>
                <p className="mt-3 text-body text-ink/80">
                  Ücretsiz 30 dakikalık analiz görüşmesi. İşletmenize hangi 2-3 hizmetin en hızlı kazanım vereceğini netleştirir, uygulanabilir bir öneri çıkarırız.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href="/iletisim"
                    className="inline-flex items-center gap-2 border-3 border-ink bg-ink px-5 py-3 text-sm font-bold uppercase text-paper shadow-brutal hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-brutal-lg transition-all"
                  >
                    Görüşme Al
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href="/referanslar"
                    className="inline-flex items-center gap-2 border-3 border-ink bg-paper px-5 py-3 text-sm font-bold uppercase text-ink shadow-brutal-sm hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-brutal transition-all"
                  >
                    Referansları Gör
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
