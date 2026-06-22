import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  Sparkles,
  Bot,
  MessageSquare,
  Video,
  Database,
  Globe,
  Target,
  Eye,
  Users,
  MapPin,
  Zap
} from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

export const metadata: Metadata = {
  title: "Hakkımızda — PORTZEN AI Ajansı",
  description:
    "PORTZEN; İzmir merkezli, KOBİ'ler için AI destekli sosyal medya, WhatsApp asistanı, otomasyon ve web tasarım hizmetleri sunan dijital ajans. Tek ekipten tüm sistem.",
  alternates: { canonical: "https://portzenai.com/hakkimizda" },
  openGraph: {
    title: "Hakkımızda — PORTZEN",
    description:
      "İzmir merkezli AI destekli dijital ajans. WhatsApp asistanı, sosyal medya, web tasarım ve otomasyon tek ekipten."
  },
  robots: { index: true, follow: true }
};

const services = [
  {
    icon: MessageSquare,
    title: "WhatsApp AI Asistanı",
    desc: "24/7 müşteri sorularına Türkçe cevap veren, randevu alan, satışa yönlendiren AI asistanları kuruyoruz.",
    color: "bg-brand-green text-paper"
  },
  {
    icon: Bot,
    title: "Instagram DM Otomasyonu",
    desc: "Yorumdan DM'e dönüş, otomatik yanıt, takipçi → müşteri akışları. ManyChat'ten daha akıllı.",
    color: "bg-brand-pink text-paper"
  },
  {
    icon: Video,
    title: "AI Reklam Videosu",
    desc: "Higgsfield, Seedance ve Veo 3 ile profesyonel reklam videoları üretiyoruz. Stüdyo maliyetinin onda biri.",
    color: "bg-brand-yellow text-ink"
  },
  {
    icon: Globe,
    title: "Web Tasarım",
    desc: "Next.js + Adelia UI Kit ile hızlı, SEO uyumlu, dönüşüm odaklı kurumsal ve e-ticaret siteleri.",
    color: "bg-brand-blue text-paper"
  },
  {
    icon: Database,
    title: "CRM Otomasyonu",
    desc: "n8n, Make ve Zapier ile satış, müşteri takip, fatura, raporlama süreçlerini otomatikleştiriyoruz.",
    color: "bg-brand-orange text-ink"
  }
];

const sectors = [
  "Eczane", "Klinik", "Diş Hekimi", "Emlak", "Restoran",
  "Kafe", "Güzellik Salonu", "Otel", "Avukat", "Mali Müşavir",
  "E-Ticaret", "Eğitim Kurumu"
];

const cities = ["İzmir", "İstanbul", "Ankara"];

export default function Page() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-paper border-b-3 border-ink">
        <div className="mx-auto max-w-container px-6 py-section">
          <Reveal>
            <div className="inline-flex items-center gap-2 border-3 border-ink bg-brand-yellow px-3 py-1.5 shadow-brutal-sm mb-6">
              <Sparkles className="h-3.5 w-3.5" />
              <span className="text-xs font-black uppercase tracking-wider">Hakkımızda</span>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="font-display text-h1 font-black leading-[0.95] text-ink max-w-4xl">
              Beş ayrı ajansın yaptığını — <br />
              <span className="bg-brand-pink text-paper px-3 -mx-1 inline-block border-3 border-ink shadow-brutal">tek ekipten</span> alın.
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-6 max-w-2xl text-body text-ink/80 leading-relaxed">
              <strong>PORTZEN</strong>, İzmir merkezli; yapay zeka destekli sosyal medya yönetimi,
              WhatsApp asistanı, otomasyon ve web tasarımı hizmetlerini tek bir koordinasyon
              altında sunan dijital ajanstır. KOBİ&apos;ler için sistem kurarız — bütçeyi beş
              ayrı ajansa dağıtmak yerine, tüm dijital altyapınızı bir ekiple inşa ederiz.
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-8 grid gap-4 sm:grid-cols-3 max-w-3xl">
              {[
                { value: "5", label: "ana hizmet", color: "bg-brand-yellow" },
                { value: "3 hafta", label: "ortalama teslim", color: "bg-brand-green text-paper" },
                { value: "%80", label: "manuel iş azalma", color: "bg-brand-pink text-paper" }
              ].map((stat, i) => (
                <div
                  key={i}
                  className={`border-3 border-ink p-4 shadow-brutal-sm ${stat.color}`}
                >
                  <div className="font-display text-3xl font-black leading-none mb-1">{stat.value}</div>
                  <div className="text-xs font-bold uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* HİKAYE */}
      <section className="py-section">
        <div className="mx-auto max-w-container px-6 grid lg:grid-cols-[1fr_1.2fr] gap-12 items-start">
          <Reveal>
            <div>
              <div className="inline-block border-3 border-ink bg-brand-blue text-paper px-3 py-1 text-xs font-black uppercase tracking-wider mb-3 shadow-brutal-sm">
                Hikayemiz
              </div>
              <h2 className="font-display text-h2 font-black leading-tight">
                Bir KOBİ, beş ayrı ajansla uğraşmamalı.
              </h2>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="space-y-4 text-ink/80 leading-relaxed">
              <p>
                Yıllarca KOBİ&apos;lerin aynı sorunu yaşadığını gördük: sosyal medya için bir ajans,
                web sitesi için başka biri, reklam için bir tane daha, otomasyon için ayrı bir
                serbest çalışan… Her biri farklı tonla, farklı raporlama düzeniyle, farklı bütçeyle.
                Sonuç: koordinasyon kaybı, çift çalışan ekipler, ay sonunda toplamı şişen fatura.
              </p>
              <p>
                <strong>PORTZEN&apos;i bu yüzden kurduk.</strong> Beş ayrı ajansın yapacağı işi tek bir ekibe
                topladık — ve yapay zekayı omurgasına yerleştirdik. WhatsApp&apos;a gelen mesajları
                karşılayan AI, içerik üreten AI, video çeken AI, raporlayan otomasyon — hepsi
                aynı sistem altında konuşur.
              </p>
              <p>
                Yaklaşımımız basit: <strong>tek brief, tek koordinasyon, tek sistem.</strong> İşletmenizin
                tüm dijital altyapısını üç haftada teslim ederiz; sonra siz işe odaklanırsınız,
                biz sistemi büyütürüz.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* MİSYON / VİZYON / DEĞERLER */}
      <section className="py-section bg-ink text-paper border-y-3 border-ink">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="max-w-2xl mb-12">
              <div className="inline-block border-3 border-paper bg-brand-yellow px-3 py-1 text-ink text-xs font-black uppercase tracking-wider mb-3 shadow-[6px_6px_0_#FFFDF5]">
                Bizi Yürüten
              </div>
              <h2 className="font-display text-h2 font-black leading-tight">
                Neden PORTZEN var?
              </h2>
            </div>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                icon: Target,
                title: "Misyon",
                text: "KOBİ'lerin büyük şirketlerin sahip olduğu dijital altyapıya — daha düşük maliyetle, daha hızlı erişebilmesini sağlamak. Yapay zekayı küçük işletmenin hizmetine sunmak."
              },
              {
                icon: Eye,
                title: "Vizyon",
                text: "Türkiye'nin her şehrinde, her sektörden KOBİ'nin AI destekli sistemini kurmak. Sosyal medya tarafında klasik ajans modelinin alternatifi olmak."
              },
              {
                icon: Zap,
                title: "Değerlerimiz",
                text: "Şeffaf fiyat, gerçek teslim süresi, müşterinin yararına en hızlı çözüm. Hayalsel vaatler değil — ölçülebilir sonuçlar. Tek ekipten, tek koordinasyondan."
              }
            ].map((v, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="border-3 border-paper bg-ink p-6 shadow-[8px_8px_0_#FFFDF5] h-full">
                  <div className="border-3 border-paper bg-paper text-ink p-2 inline-block mb-3 shadow-[4px_4px_0_#FFFDF5]">
                    <v.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-xl font-black mb-3">{v.title}</h3>
                  <p className="text-paper/85 text-sm leading-relaxed">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* HİZMETLER */}
      <section className="py-section">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-12 max-w-2xl">
              <div className="inline-block border-3 border-ink bg-brand-green text-paper px-3 py-1 text-xs font-black uppercase tracking-wider mb-3 shadow-brutal-sm">
                Hizmetlerimiz
              </div>
              <h2 className="font-display text-h2 font-black leading-tight">
                Beş hizmet, tek altyapı.
              </h2>
              <p className="mt-3 text-body text-ink/70">
                Her hizmeti diğeriyle konuşacak şekilde tasarlarız. Bütünsel bir sistem alırsınız —
                parçaları sonradan birleştirmekle uğraşmazsınız.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={i} delay={i * 60}>
                <div className={`border-3 border-ink p-6 shadow-brutal h-full ${s.color}`}>
                  <div className="border-3 border-ink bg-paper text-ink p-2 inline-block shadow-brutal-sm mb-4">
                    <s.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-display text-xl font-black leading-tight mb-2">{s.title}</h3>
                  <p className="text-sm opacity-90">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SEKTÖRLER + LOKASYONLAR */}
      <section className="py-section bg-paper border-t-3 border-ink">
        <div className="mx-auto max-w-container px-6 grid lg:grid-cols-2 gap-12">
          <Reveal>
            <div>
              <div className="inline-flex items-center gap-2 border-3 border-ink bg-brand-orange text-ink px-3 py-1 text-xs font-black uppercase tracking-wider mb-3 shadow-brutal-sm">
                <Users className="h-3 w-3" />
                Çalıştığımız Sektörler
              </div>
              <h2 className="font-display text-2xl font-black mb-4">
                12+ sektör için özel çözümler
              </h2>
              <div className="flex flex-wrap gap-2">
                {sectors.map((s) => (
                  <span
                    key={s}
                    className="border-3 border-ink bg-paper text-ink px-3 py-1.5 text-sm font-bold shadow-brutal-sm"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div>
              <div className="inline-flex items-center gap-2 border-3 border-ink bg-brand-blue text-paper px-3 py-1 text-xs font-black uppercase tracking-wider mb-3 shadow-brutal-sm">
                <MapPin className="h-3 w-3" />
                Hizmet Verdiğimiz Şehirler
              </div>
              <h2 className="font-display text-2xl font-black mb-4">
                İzmir merkez, Türkiye geneli uzaktan.
              </h2>
              <div className="flex flex-wrap gap-2">
                {cities.map((c) => (
                  <span
                    key={c}
                    className="inline-flex items-center gap-1.5 border-3 border-ink bg-ink text-paper px-3 py-1.5 text-sm font-bold shadow-brutal-sm"
                  >
                    <MapPin className="h-3 w-3" />
                    {c}
                  </span>
                ))}
              </div>
              <p className="mt-4 text-sm text-ink/70 leading-relaxed">
                İzmir&apos;de yüz yüze görüşme, Türkiye geneli için uzaktan iş birliği.
                Müşterilerimizin %70&apos;i İzmir dışından.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-section">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="border-3 border-ink bg-brand-yellow p-8 md:p-16 shadow-brutal-lg">
              <div className="max-w-2xl">
                <h2 className="font-display text-h2 font-black leading-tight text-ink">
                  Sistemini birlikte konuşalım.
                </h2>
                <p className="mt-3 text-body text-ink/80">
                  30 dakikalık ücretsiz analiz görüşmesi. Hangi 2-3 hizmetin işletmenize en hızlı
                  kazanım vereceğini netleştirir, uygulanabilir bir öneri çıkarırız.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href="/iletisim"
                    className="inline-flex items-center gap-2 border-3 border-ink bg-ink px-5 py-3 text-sm font-bold uppercase text-paper shadow-brutal hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-brutal-lg transition-all"
                  >
                    Ücretsiz Analiz Al
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
