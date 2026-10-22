"use client";

import { useEffect, useState } from "react";
import type { FormEvent } from "react";
import { ArrowUpRight, MessageSquare, Mail, Calendar, Phone, CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { trackLeadFormSubmit, trackWhatsAppClick, trackEmailClick, trackPhoneClick } from "@/lib/analytics";
import { SERVICE_OPTIONS, TIER_NAMES, WHATSAPP_NUMBER, whatsappUrl } from "@/data/pricing";

const PHONE_HUMAN = "0531 863 91 17";
const EMAIL = "destek@portzenai.com";
const PACKAGE_OPTIONS = [TIER_NAMES.baslangic, TIER_NAMES.buyume, TIER_NAMES.kurumsal];

const inputCls =
  "w-full rounded-xl border border-slate/20 bg-white px-4 py-3 text-[15px] text-slate placeholder:text-slate/50 outline-none transition-colors focus:border-slate";

export default function Page() {
  const [submitted, setSubmitted] = useState(false);
  const [service, setService] = useState("");
  const [pkg, setPkg] = useState("");
  const [waUrl, setWaUrl] = useState(`https://wa.me/${WHATSAPP_NUMBER}`);

  // Paket kartlarından gelen ?hizmet=…&paket=… bilgisini forma taşı
  useEffect(() => {
    const p = new URLSearchParams(window.location.search);
    const h = p.get("hizmet");
    const k = p.get("paket");
    if (h) setService(SERVICE_OPTIONS.includes(h) ? h : "");
    if (k) setPkg(PACKAGE_OPTIONS.includes(k) ? k : "");
  }, []);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = String(formData.get("name") || "");
    const email = String(formData.get("email") || "");
    const phone = String(formData.get("phone") || "");
    const message = String(formData.get("message") || "");

    trackLeadFormSubmit("iletisim", service ? `${service}${pkg ? " / " + pkg : ""}` : "contact_form");

    const waMessage = [
      "Merhaba PORTZEN,",
      "",
      "Web sitesi üzerinden teklif talebi gönderiyorum.",
      "",
      `Ad Soyad: ${name}`,
      `E-posta: ${email}`,
      phone ? `Telefon: ${phone}` : "",
      service ? `Hizmet: ${service}` : "",
      pkg ? `Paket: ${pkg}` : "",
      "",
      "Konu:",
      message
    ]
      .filter((l, i, a) => l !== "" || (a[i - 1] ?? "") !== "")
      .join("\n");

    const url = whatsappUrl(waMessage);
    setWaUrl(url);
    setSubmitted(true);
    setTimeout(() => window.open(url, "_blank", "noopener,noreferrer"), 400);
  };

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-container px-6 grid gap-12 lg:grid-cols-[1fr_380px]">
        <div>
          <Reveal>
            <span className="inline-block rounded-full bg-slate px-3 py-1 text-xs font-semibold text-white">İletişim</span>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="mt-5 text-4xl lg:text-5xl font-bold leading-tight text-slate">Ne yapmak istediğinizi yazın.</h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-5 max-w-prose text-lg text-slate/70 leading-relaxed">
              30 dakikalık ücretsiz görüşmede ihtiyacı netleştiririz; ardından kapsam, süre ve fiyat içeren yazılı
              teklif göndeririz. En hızlısı WhatsApp.
            </p>
          </Reveal>

          {submitted ? (
            <Reveal>
              <div className="mt-8 max-w-xl rounded-2xl border border-slate/15 bg-light p-8">
                <CheckCircle2 className="mb-3 h-8 w-8 text-slate" />
                <h2 className="mb-2 text-2xl font-bold text-slate">Talebiniz hazır</h2>
                <p className="mb-4 text-slate/80">
                  WhatsApp yeni sekmede açılıyor; bilgileriniz mesaja eklendi. Göndermeniz yeterli.
                </p>
                <p className="text-sm text-slate/70">
                  WhatsApp açılmadıysa{" "}
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackWhatsAppClick("iletisim_success_fallback")}
                    className="font-bold underline"
                  >
                    buraya tıklayın
                  </a>
                  .
                </p>
              </div>
            </Reveal>
          ) : (
            <Reveal delay={300}>
              <form onSubmit={handleSubmit} className="mt-8 grid max-w-xl gap-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="grid gap-1.5 text-sm font-semibold text-slate">
                    Hizmet
                    <select
                      name="service"
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className={inputCls}
                    >
                      <option value="">Seçiniz (isteğe bağlı)</option>
                      {SERVICE_OPTIONS.map((o) => (
                        <option key={o} value={o}>
                          {o}
                        </option>
                      ))}
                    </select>
                  </label>
                  <label className="grid gap-1.5 text-sm font-semibold text-slate">
                    Paket
                    <select name="package" value={pkg} onChange={(e) => setPkg(e.target.value)} className={inputCls}>
                      <option value="">Henüz karar vermedim</option>
                      {PACKAGE_OPTIONS.map((o) => (
                        <option key={o} value={o}>
                          {o}
                        </option>
                      ))}
                    </select>
                  </label>
                </div>
                <label className="grid gap-1.5 text-sm font-semibold text-slate">
                  Ad Soyad
                  <input name="name" type="text" required autoComplete="name" className={inputCls} />
                </label>
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="grid gap-1.5 text-sm font-semibold text-slate">
                    E-posta
                    <input name="email" type="email" required autoComplete="email" className={inputCls} />
                  </label>
                  <label className="grid gap-1.5 text-sm font-semibold text-slate">
                    Telefon <span className="font-normal text-slate/60">(isteğe bağlı)</span>
                    <input name="phone" type="tel" autoComplete="tel" className={inputCls} />
                  </label>
                </div>
                <label className="grid gap-1.5 text-sm font-semibold text-slate">
                  Kısaca ihtiyacınız
                  <textarea name="message" required rows={4} className={`${inputCls} resize-none`} />
                </label>
                <button
                  type="submit"
                  className="inline-flex items-center justify-between gap-3 rounded-full bg-lime py-2 pl-6 pr-2 text-sm font-bold text-slate transition-colors hover:bg-lime/85 sm:justify-self-start"
                >
                  Teklif isteyin
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </button>
                <p className="text-xs text-slate/60">
                  Form gönderildiğinde WhatsApp&apos;ta önceden doldurulmuş mesajla devam edersiniz. KVKK gereği iletişim
                  için açık rızanızla verilerinizi işliyoruz.
                </p>
              </form>
            </Reveal>
          )}
        </div>

        <aside className="space-y-3">
          {[
            {
              href: whatsappUrl("Merhaba PORTZEN, bilgi almak istiyorum."),
              external: true,
              onClick: () => trackWhatsAppClick("iletisim_sidebar"),
              icon: MessageSquare,
              title: "WhatsApp",
              text: `${PHONE_HUMAN} — en hızlı yol`
            },
            { href: `mailto:${EMAIL}`, onClick: () => trackEmailClick("iletisim_sidebar"), icon: Mail, title: "E-posta", text: EMAIL },
            { href: `tel:+${WHATSAPP_NUMBER}`, onClick: () => trackPhoneClick("iletisim_sidebar"), icon: Phone, title: "Telefon", text: PHONE_HUMAN }
          ].map((c, i) => (
            <Reveal key={c.title} delay={150 + i * 50}>
              <a
                href={c.href}
                {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                onClick={c.onClick}
                className="flex items-start gap-4 rounded-2xl border border-slate/15 bg-white p-5 transition-colors hover:border-slate/40"
              >
                <c.icon className="mt-0.5 h-5 w-5 shrink-0 text-slate" />
                <span>
                  <span className="block font-bold text-slate">{c.title}</span>
                  <span className="block text-sm text-slate/70">{c.text}</span>
                </span>
              </a>
            </Reveal>
          ))}
          <Reveal delay={300}>
            <div className="flex items-start gap-4 rounded-2xl border border-slate/15 bg-white p-5">
              <Calendar className="mt-0.5 h-5 w-5 shrink-0 text-slate" />
              <span className="text-sm text-slate/70 leading-relaxed">
                <span className="block font-bold text-slate text-base">Çalışma saatleri</span>
                Pazartesi – Cumartesi, 09:30 – 18:30
                <br />
                İzmir merkez ekip
              </span>
            </div>
          </Reveal>
        </aside>
      </div>
    </section>
  );
}
