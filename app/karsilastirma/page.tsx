import Link from "next/link";
import type { Metadata } from "next";
import { ArrowUpRight, MessageSquare, Bot, ShoppingCart, Zap, Mail, CreditCard, Utensils, Calculator, Send } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

/**
 * /karsilastirma — Piyasa alternatiflerini kategoriye göre listeler.
 * KURAL: Marka adı sadece SEO amaçlı URL'de bırakılır, görünen metinde geçmez.
 * Kullanıcı marka aramadan da kategori üzerinden bulabilsin.
 */

export const metadata: Metadata = {
  title: "Karşılaştırma — Türkçe Alternatifler | PORTZEN",
  description:
    "CRM, chatbot, e-posta pazarlama, e-ticaret, otomasyon ve daha fazlası için Türkiye pazarına uygun alternatif çözümler. Sektörünüze göre yerelleştirilmiş sistem kurulumu.",
  alternates: { canonical: "https://portzenai.com/karsilastirma" }
};

/**
 * Her kategori: başlık + kısa açıklama + link seti
 * Link metinleri generic — marka adı görünmez.
 * URL'ler orijinal (SEO için hubspot-alternatifi vs).
 */
const CATEGORIES = [
  {
    icon: MessageSquare,
    title: "CRM Sistemleri",
    tone: "bg-brand-blue text-paper",
    desc: "Müşteri kayıt, satış hunisi, iletişim geçmişi. Türkçe destek + KVKK uyumlu.",
    links: [
      { label: "Türkçe KOBİ CRM'i", href: "/hubspot-alternatifi" },
      { label: "Kurumsal Ölçekli CRM", href: "/salesforce-alternatifi" }
    ]
  },
  {
    icon: Bot,
    title: "Chatbot & Canlı Destek",
    tone: "bg-brand-green text-paper",
    desc: "WhatsApp, Instagram DM, web sitesi canlı destek. Türkçe eğitilmiş yapay zeka.",
    links: [
      { label: "Sosyal Medya Chatbot", href: "/manychat-alternatifi" },
      { label: "Web Canlı Destek Botu", href: "/tidio-alternatifi" },
      { label: "Müşteri Mesajlaşma Platformu", href: "/intercom-alternatifi" }
    ]
  },
  {
    icon: Zap,
    title: "Otomasyon Araçları",
    tone: "bg-brand-purple text-paper",
    desc: "İş akışı, entegrasyon, tetikleyici bazlı süreç. Türkçe arayüz + Türk servisleri.",
    links: [
      { label: "İş Akışı Otomasyon Aracı", href: "/zapier-alternatifi" }
    ]
  },
  {
    icon: Mail,
    title: "E-posta Pazarlama",
    tone: "bg-brand-orange text-paper",
    desc: "Newsletter, damla e-posta, otomatik seri. KVKK uyumlu izin yönetimi.",
    links: [
      { label: "Newsletter Aracı", href: "/mailchimp-alternatifi" },
      { label: "E-ticaret E-posta Otomasyonu", href: "/klaviyo-alternatifi" }
    ]
  },
  {
    icon: ShoppingCart,
    title: "E-ticaret Platformları",
    tone: "bg-brand-pink text-paper",
    desc: "Online mağaza, ödeme, kargo entegrasyon. Türk pazarına uyumlu.",
    links: [
      { label: "Yerli E-ticaret Yazılımı", href: "/ideasoft-alternatifi" },
      { label: "Kurumsal E-ticaret Çözümü", href: "/ticimax-alternatifi" },
      { label: "Basit Online Satış Aracı", href: "/shopier-alternatifi" }
    ]
  },
  {
    icon: CreditCard,
    title: "Ödeme Altyapıları",
    tone: "bg-brand-yellow text-ink",
    desc: "Sanal POS, taksit, abonelik. Türkiye BDDK onaylı sağlayıcı entegrasyonları.",
    links: [
      { label: "Online Ödeme Servisi", href: "/iyzico-alternatifi" }
    ]
  },
  {
    icon: Utensils,
    title: "Restoran & POS",
    tone: "bg-brand-orange text-paper",
    desc: "Sipariş yönetimi, adisyon, mutfak ekranı. Restoran zincirlerine uygun.",
    links: [
      { label: "Restoran POS Sistemi", href: "/sambapos-alternatifi" }
    ]
  },
  {
    icon: Calculator,
    title: "Muhasebe Yazılımları",
    tone: "bg-brand-blue text-paper",
    desc: "Ön muhasebe, fatura, e-fatura, gelir-gider takibi. Türk mali mevzuatına uygun.",
    links: [
      { label: "Ön Muhasebe Yazılımı", href: "/logo-yazilim-alternatifi" }
    ]
  },
  {
    icon: Send,
    title: "SMS & Mesajlaşma Servisleri",
    tone: "bg-brand-green text-paper",
    desc: "Toplu SMS, doğrulama SMS, WhatsApp Business API entegrasyonu.",
    links: [
      { label: "Toplu SMS Servisi", href: "/netgsm-alternatifi" }
    ]
  }
];

export default function KarsilastirmaPage() {
  return (
    <>
      {/* HERO */}
      <section className="py-section bg-paper">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="inline-block border-3 border-ink bg-ink text-paper px-3 py-1.5 text-[11px] font-black uppercase tracking-[0.2em] mb-6 shadow-brutal-sm">
              Karşılaştırma
            </div>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="font-serif font-black text-ink leading-[1.02] tracking-tight text-[clamp(2.5rem,6vw,5rem)] max-w-4xl">
              Türkiye pazarına uygun{" "}
              <span className="text-brand-orange italic font-normal">alternatifler</span>.
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 max-w-2xl text-lg text-ink/75 leading-relaxed">
              Kategoriye göre eşleştirilmiş, yerel destek + KVKK uyumlu + Türkçe arayüz sunan sistemler. Marka bağımsız — ihtiyacınıza göre kurgu.
            </p>
          </Reveal>
        </div>
      </section>

      {/* KATEGORİLER */}
      <section className="py-section bg-paper border-t-3 border-ink">
        <div className="mx-auto max-w-container px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {CATEGORIES.map((cat, i) => {
              const Icon = cat.icon;
              return (
                <Reveal key={cat.title} delay={i * 60}>
                  <div className="border-3 border-ink bg-paper shadow-brutal h-full flex flex-col">
                    {/* Icon başlık kutusu */}
                    <div className={`p-5 border-b-3 border-ink ${cat.tone}`}>
                      <div className="border-3 border-ink bg-paper text-ink p-2 inline-block shadow-brutal-sm mb-3">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h2 className="font-display text-xl font-black leading-tight">
                        {cat.title}
                      </h2>
                    </div>

                    {/* İçerik */}
                    <div className="p-5 flex-1 flex flex-col">
                      <p className="text-sm text-ink/70 mb-5 flex-1">{cat.desc}</p>
                      <ul className="space-y-2">
                        {cat.links.map((link) => (
                          <li key={link.href}>
                            <Link
                              href={link.href}
                              className="group flex items-center justify-between gap-2 border-3 border-ink bg-paper px-3 py-2 text-sm font-bold text-ink shadow-brutal-sm hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-brutal transition-all"
                            >
                              <span>{link.label}</span>
                              <ArrowUpRight className="h-4 w-4 opacity-50 group-hover:opacity-100 transition-opacity" />
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-section">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="relative">
              <div className="absolute inset-0 border-3 border-ink bg-brand-yellow translate-x-3 translate-y-3" aria-hidden />
              <div className="relative border-3 border-ink bg-paper p-8 md:p-16">
                <div className="max-w-2xl">
                  <h2 className="font-serif text-4xl md:text-5xl font-black leading-tight text-ink">
                    Sistemini{" "}
                    <span className="italic font-normal text-brand-orange">birlikte</span>{" "}
                    kuralım.
                  </h2>
                  <p className="mt-3 text-body text-ink/80">
                    Hangi kategoride hangi çözüm size uygun? 30 dakikalık analiz görüşmesinde birlikte belirleyelim.
                  </p>
                  <div className="mt-6">
                    <Link
                      href="/iletisim"
                      className="inline-flex items-center gap-2 border-3 border-ink bg-brand-yellow px-6 py-4 text-sm font-black uppercase tracking-wide text-ink shadow-brutal hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-brutal-lg transition-all"
                    >
                      Görüşme Al
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
