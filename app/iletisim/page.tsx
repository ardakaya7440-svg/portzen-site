"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { ArrowUpRight, MessageSquare, Mail, Calendar, Phone, CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { trackLeadFormSubmit, trackWhatsAppClick, trackEmailClick, trackPhoneClick } from "@/lib/analytics";

const WHATSAPP_NUMBER = "905015884853";
const PHONE_HUMAN = "0501 588 48 53";
const EMAIL = "portzenajans@gmail.com";

export default function Page() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = String(formData.get("name") || "");
    const email = String(formData.get("email") || "");
    const phone = String(formData.get("phone") || "");
    const message = String(formData.get("message") || "");

    // GA4 conversion event
    trackLeadFormSubmit("iletisim", "contact_form");

    // WhatsApp'a önceden doldurulmuş mesaj olarak yönlendir
    const waMessage = [
      `Merhaba PORTZEN,`,
      ``,
      `Web sitesi üzerinden görüşme talebi gönderiyorum.`,
      ``,
      `Ad Soyad: ${name}`,
      `E-posta: ${email}`,
      phone ? `Telefon: ${phone}` : "",
      ``,
      `Konu:`,
      message
    ]
      .filter(Boolean)
      .join("\n");

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(waMessage)}`;

    setSubmitted(true);

    // Önce başarı state'i yansısın, sonra yeni sekmede WhatsApp aç
    setTimeout(() => window.open(url, "_blank", "noopener,noreferrer"), 400);
  };

  return (
    <section className="py-section">
      <div className="mx-auto max-w-container px-6 grid lg:grid-cols-[1fr_400px] gap-12">
        <div>
          <Reveal>
            <div className="inline-block border-3 border-ink bg-brand-green text-paper px-3 py-1 text-xs font-black uppercase tracking-wider mb-3 shadow-brutal-sm">
              İletişim
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="font-display text-h1 font-black leading-[0.95]">
              Sistemini birlikte konuşalım.
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-4 max-w-prose text-body text-ink/70">
              30 dakikalık ücretsiz analiz görüşmesi. Hangi 2-3 hizmetin sektörüne en hızlı kazanım vereceğini netleştirir, uygulanabilir bir öneri çıkarırız.
            </p>
          </Reveal>

          {submitted ? (
            <Reveal>
              <div className="mt-8 border-3 border-ink bg-brand-green text-paper p-8 shadow-brutal-lg max-w-xl">
                <CheckCircle2 className="h-10 w-10 mb-3" />
                <h2 className="font-display text-2xl font-black mb-2">Talep alındı! 🎉</h2>
                <p className="text-paper/90 mb-4">
                  Şu an WhatsApp'a yönlendiriliyorsun — bilgilerin önceden mesaja yapıştırıldı. Sadece gönder butonuna basman yeterli.
                </p>
                <p className="text-paper/70 text-sm">
                  WhatsApp açılmadıysa{" "}
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackWhatsAppClick("iletisim_success_fallback")}
                    className="underline font-bold"
                  >
                    buraya tıkla
                  </a>
                  .
                </p>
              </div>
            </Reveal>
          ) : (
            <Reveal delay={300}>
              <form onSubmit={handleSubmit} className="mt-8 grid gap-4 max-w-xl">
                <input
                  name="name"
                  type="text"
                  required
                  placeholder="Ad Soyad"
                  className="border-3 border-ink bg-paper px-4 py-3 shadow-brutal-sm focus:shadow-brutal outline-none transition-shadow"
                />
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="E-posta"
                  className="border-3 border-ink bg-paper px-4 py-3 shadow-brutal-sm focus:shadow-brutal outline-none transition-shadow"
                />
                <input
                  name="phone"
                  type="tel"
                  placeholder="Telefon (opsiyonel)"
                  className="border-3 border-ink bg-paper px-4 py-3 shadow-brutal-sm focus:shadow-brutal outline-none transition-shadow"
                />
                <textarea
                  name="message"
                  required
                  placeholder="Hangi hizmette destek arıyorsunuz?"
                  rows={4}
                  className="border-3 border-ink bg-paper px-4 py-3 shadow-brutal-sm focus:shadow-brutal outline-none transition-shadow resize-none"
                />
                <button
                  type="submit"
                  className="border-3 border-ink bg-ink text-paper px-5 py-3 text-sm font-bold uppercase shadow-brutal hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all inline-flex items-center gap-2 justify-center"
                >
                  Görüşme Talebi Gönder <ArrowUpRight className="h-4 w-4" />
                </button>
                <p className="text-xs text-ink/60">
                  Form gönderildiğinde WhatsApp'ta önceden doldurulmuş mesajla devam edebilirsiniz.
                  KVKK gereği iletişim için açık rızanızla verilerinizi işliyoruz.
                </p>
              </form>
            </Reveal>
          )}
        </div>

        <aside className="space-y-4">
          <Reveal delay={150}>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick("iletisim_sidebar")}
              className="block border-3 border-ink bg-brand-green text-paper p-5 shadow-brutal hover:-translate-x-1 hover:-translate-y-1 hover:shadow-brutal-lg transition-all"
            >
              <MessageSquare className="h-6 w-6 mb-2" />
              <div className="font-bold uppercase text-sm mb-1">WhatsApp</div>
              <div className="text-xs opacity-85">{PHONE_HUMAN} — anında yanıt</div>
            </a>
          </Reveal>
          <Reveal delay={200}>
            <a
              href={`mailto:${EMAIL}`}
              onClick={() => trackEmailClick("iletisim_sidebar")}
              className="block border-3 border-ink bg-brand-yellow text-ink p-5 shadow-brutal hover:-translate-x-1 hover:-translate-y-1 hover:shadow-brutal-lg transition-all"
            >
              <Mail className="h-6 w-6 mb-2" />
              <div className="font-bold uppercase text-sm mb-1">E-posta</div>
              <div className="text-xs opacity-85">{EMAIL}</div>
            </a>
          </Reveal>
          <Reveal delay={250}>
            <a
              href={`tel:+${WHATSAPP_NUMBER}`}
              onClick={() => trackPhoneClick("iletisim_sidebar")}
              className="block border-3 border-ink bg-brand-pink text-paper p-5 shadow-brutal hover:-translate-x-1 hover:-translate-y-1 hover:shadow-brutal-lg transition-all"
            >
              <Phone className="h-6 w-6 mb-2" />
              <div className="font-bold uppercase text-sm mb-1">Telefon</div>
              <div className="text-xs opacity-85">{PHONE_HUMAN}</div>
            </a>
          </Reveal>
          <Reveal delay={300}>
            <div className="border-3 border-ink bg-paper text-ink p-5 shadow-brutal-sm">
              <Calendar className="h-6 w-6 mb-2" />
              <div className="font-bold uppercase text-sm mb-1">Çalışma Saatleri</div>
              <div className="text-xs text-ink/70 leading-relaxed">
                Pazartesi – Cumartesi
                <br />
                09:30 – 18:30
                <br />
                <span className="text-ink/50">İzmir merkez ekip</span>
              </div>
            </div>
          </Reveal>
        </aside>
      </div>
    </section>
  );
}
