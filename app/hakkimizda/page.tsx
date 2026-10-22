import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  Sparkles,
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
  title: "Hakkımızda — PORTZEN",
  description:
    "PORTZEN; İzmir merkezli sosyal medya ve yazılım ajansı. 7 kişilik ekiple sosyal medya yönetimi, içerik üretimi, web sitesi, mobil uygulama ve işletmeye özel iç sistemler.",
  alternates: { canonical: "https://portzenai.com/hakkimizda" },
  openGraph: {
    title: "Hakkımızda — PORTZEN",
    description:
      "İzmir merkezli sosyal medya ve yazılım ajansı. Sosyal medyanızı yönetiriz, yazılımınızı geliştiririz."
  },
  robots: { index: true, follow: true }
};

const services = [
  {
    icon: MessageSquare,
    title: "Sosyal Medya Yönetimi",
    desc: "Instagram, TikTok, YouTube Shorts ve LinkedIn hesaplarınızı biz yönetiriz: aylık plan, düzenli paylaşım, aylık rapor; Büyüme ve Kurumsal paketlerde hafta içi günlük yorum ve mesaj kontrolü.",
    color: "bg-light text-ink"
  },
  {
    icon: Video,
    title: "İçerik Üretimi",
    desc: "Reels, TikTok ve Shorts için video; feed ve hikâye için görsel. Hızlı ve düzenli içerik; isterseniz hesap yönetimi sizde kalır.",
    color: "bg-light text-ink"
  },
  {
    icon: Globe,
    title: "Web Sitesi ve Web Uygulaması",
    desc: "Kurumsal site, rezervasyon veya sipariş sayfası, müşteri paneli. İşletmenize özel yazılır; hazır tema değildir.",
    color: "bg-light text-ink"
  },
  {
    icon: Database,
    title: "Mobil Uygulama ve İç Sistem",
    desc: "iOS ve Android uygulama; CRM, randevu, stok veya raporlama gibi iç sistemler. Mevcut araçlarınızla entegre çalışır.",
    color: "bg-light text-ink"
  }
];

const sectors = [
  "Eczane", "Klinik", "Diş Hekimi", "Emlak", "Restoran",
  "Kafe", "Güzellik Salonu", "Otel", "Avukat", "Mali Müşavir",
  "E-Ticaret", "Eğitim Kurumu"
];

const cities = ["İzmir", "İstanbul", "Ankara", "Kazan (Rusya)"];

export default function Page() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-white border-b-3 border-ink/15">
        <div className="mx-auto max-w-container px-6 py-section">
          <Reveal>
            <div className="inline-flex items-center gap-2 border-3 border-ink/15 bg-lime px-3 py-1.5 shadow-brutal-sm mb-6 rounded-full">
              <Sparkles className="h-3.5 w-3.5" />
              <span className="text-xs font-black uppercase tracking-wider">Hakkımızda</span>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="font-display text-h1 font-black leading-tight text-ink max-w-4xl">
              Sosyal medyanızı yönetiriz. <br />
              <span className="underline decoration-lime decoration-[6px] underline-offset-[6px]">Yazılımınızı</span> geliştiririz.
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-6 max-w-2xl text-body text-ink/80 leading-relaxed">
              <strong>PORTZEN</strong>, İzmir merkezli bir sosyal medya ve yazılım ajansıdır. İki iş
              yaparız: işletmenizin sosyal medya hesaplarını yönetiriz ve ihtiyacınız olan web sitesini,
              mobil uygulamayı ya da iç sistemi sizin için yazarız. 7 kişilik ekibimizle, iki hizmeti de
              aynı masadan yürütürüz.
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-8 grid gap-4 sm:grid-cols-3 max-w-3xl">
              {[
                { value: "2", label: "hizmet alanı", color: "bg-light" },
                { value: "7 kişi", label: "uzman ekip", color: "bg-light text-ink" },
                { value: "Yazılı", label: "teklif", color: "bg-light text-ink" }
              ].map((stat, i) => (
                <div
                  key={i}
                  className={`border-3 border-ink/15 p-4 shadow-brutal-sm rounded-2xl ${stat.color}`}
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
              <div className="inline-block border-3 border-ink/15 bg-slate text-white px-3 py-1 text-xs font-black tracking-wider mb-3 shadow-brutal-sm rounded-full">
                Hikayemiz
              </div>
              <h2 className="font-display text-h2 font-black leading-tight">
                Bir işletme, iki ayrı ajansla uğraşmamalı.
              </h2>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="space-y-4 text-ink/80 leading-relaxed">
              <p>
                İşletmelerin aynı sorunu yaşadığını gördük: sosyal medya için bir ajans, web sitesi
                için başka biri, uygulama için ayrı bir yazılımcı… Her biri farklı tonla, farklı
                raporlama düzeniyle, farklı bütçeyle. Sonuç: birbiriyle konuşmayan işler ve ay sonunda
                toplamı şişen fatura.
              </p>
              <p>
                <strong>PORTZEN&apos;i bu yüzden kurduk.</strong> Sosyal medya ve yazılımı tek ekipte
                topladık. İçerik üreten, hesabı yöneten, siteyi ve uygulamayı yazan kişiler aynı
                masada oturur; işiniz dışarıya devredilmez.
              </p>
              <p>
                Yaklaşımımız basit: <strong>tek muhatap, yazılı teklif, sürpriz yok.</strong> Kapsam,
                süre ve fiyat baştan nettir; her hafta nerede olduğumuzu görürsünüz, teslimden sonra
                da yanınızdayız.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* MİSYON / VİZYON / DEĞERLER */}
      <section className="py-section bg-white text-ink border-y-3 border-ink/15">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="max-w-2xl mb-12">
              <div className="inline-block border-3 border-ink/10 bg-slate px-3 py-1 text-white text-xs font-black tracking-wider mb-3 rounded-full">
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
                text: "İşletmelerin sosyal medya ve yazılım ihtiyacını tek yerden, anlaşılır bir dille ve net bir teklifle karşılamak."
              },
              {
                icon: Eye,
                title: "Vizyon",
                text: "Türkiye'nin her şehrinden işletmenin, sosyal medyası ve yazılımı için aklına ilk gelen ekip olmak."
              },
              {
                icon: Zap,
                title: "Değerlerimiz",
                text: "Yazılı teklif, gerçek teslim süresi, müşterinin yararına en kısa yol. Büyük vaat yok; yapılan iş ve ölçülen sonuç var."
              }
            ].map((v, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="border-3 border-ink/10 bg-light p-6 h-full rounded-2xl">
                  <div className="border-3 border-ink/10 bg-paper text-ink p-2 inline-block mb-3 rounded-full">
                    <v.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-xl font-black mb-3">{v.title}</h3>
                  <p className="text-ink/85 text-sm leading-relaxed">{v.text}</p>
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
              <div className="inline-block border-3 border-ink/15 bg-slate text-white px-3 py-1 text-xs font-black tracking-wider mb-3 shadow-brutal-sm rounded-full">
                Hizmetlerimiz
              </div>
              <h2 className="font-display text-h2 font-black leading-tight">
                Dört hizmet, tek ekip.
              </h2>
              <p className="mt-3 text-body text-ink/70">
                İlk ikisi sosyal medya tarafı, son ikisi yazılım tarafı. Her biri tek başına alınabilir;
                birlikte alındığında aynı ekip yürütür.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={i} delay={i * 60}>
                <div className={`border-3 border-ink/15 p-6 shadow-brutal h-full rounded-2xl ${s.color}`}>
                  <div className="border-3 border-ink/15 bg-paper text-ink p-2 inline-block shadow-brutal-sm mb-4 rounded-full">
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
      <section className="py-section bg-white border-t-3 border-ink/15">
        <div className="mx-auto max-w-container px-6 grid lg:grid-cols-2 gap-12">
          <Reveal>
            <div>
              <div className="inline-flex items-center gap-2 border-3 border-ink/15 bg-slate text-ink px-3 py-1 text-xs font-black tracking-wider mb-3 shadow-brutal-sm rounded-full">
                <Users className="h-3 w-3" />
                Odaklandığımız Sektörler
              </div>
              <h2 className="font-display text-2xl font-black mb-4">
                12+ sektör için özel çözümler
              </h2>
              <div className="flex flex-wrap gap-2">
                {sectors.map((s) => (
                  <span
                    key={s}
                    className="border-3 border-ink/15 bg-paper text-ink px-3 py-1.5 text-sm font-bold shadow-brutal-sm rounded-full"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div>
              <div className="inline-flex items-center gap-2 border-3 border-ink/15 bg-slate text-white px-3 py-1 text-xs font-black tracking-wider mb-3 shadow-brutal-sm rounded-full">
                <MapPin className="h-3 w-3" />
                Hizmet Verdiğimiz Şehirler
              </div>
              <h2 className="font-display text-2xl font-black mb-4">
                İzmir merkez, Kazan IT Park ofisi.
              </h2>
              <div className="flex flex-wrap gap-2">
                {cities.map((c) => (
                  <span
                    key={c}
                    className="inline-flex items-center gap-1.5 border-3 border-ink/15 bg-slate text-white px-3 py-1.5 text-sm font-bold shadow-brutal-sm rounded-full"
                  >
                    <MapPin className="h-3 w-3" />
                    {c}
                  </span>
                ))}
              </div>
              <p className="mt-4 text-sm text-ink/70 leading-relaxed">
                İzmir&apos;deki merkezimiz ve Kazan IT Park&apos;taki ofisimizle Türkiye ve Rusya&apos;daki işletmelerle çalışıyoruz.
                Görüşmeler online yapılır; şehir fark etmez.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-section">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="border-3 border-ink/15 bg-light p-8 md:p-16 shadow-brutal-lg rounded-2xl">
              <div className="max-w-2xl">
                <h2 className="font-display text-h2 font-black leading-tight text-ink">
                  Ne yapmak istediğinizi yazın.
                </h2>
                <p className="mt-3 text-body text-ink/80">
                  30 dakikalık ücretsiz görüşmede ihtiyacı netleştiririz; ardından kapsam,
                  süre ve fiyat içeren yazılı teklif göndeririz.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href="/iletisim"
                    className="inline-flex items-center gap-2 border-3 border-ink/15 bg-slate px-5 py-3 text-sm font-bold text-white shadow-brutal hover:shadow-brutal-lg transition-all rounded-full"
                  >
                    Teklif İsteyin
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href="/referanslar"
                    className="inline-flex items-center gap-2 border-3 border-ink/15 bg-paper px-5 py-3 text-sm font-bold text-ink shadow-brutal-sm hover:shadow-brutal transition-all rounded-full"
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
