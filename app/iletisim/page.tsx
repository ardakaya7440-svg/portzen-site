import { ArrowUpRight, MessageSquare, Mail, Calendar } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

export default function Page() {
  return (
    <section className="py-section">
      <div className="mx-auto max-w-container px-6 grid lg:grid-cols-[1fr_400px] gap-12">
        <div>
          <Reveal>
            <div className="inline-block border-3 border-ink bg-brand-green text-paper px-3 py-1 text-xs font-black uppercase tracking-wider mb-3 shadow-brutal-sm">İletişim</div>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="font-display text-h1 font-black leading-[0.95]">Sistemini birlikte konuşalım.</h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-4 max-w-prose text-body text-ink/70">30 dakikalık ücretsiz analiz görüşmesi. Hangi 2-3 hizmetin sektörüne en hızlı kazanım vereceğini netleştirir, uygulanabilir bir öneri çıkarırız.</p>
          </Reveal>

          <Reveal delay={300}>
            <form className="mt-8 grid gap-4 max-w-xl">
              <input type="text" placeholder="Ad Soyad" className="border-3 border-ink bg-paper px-4 py-3 shadow-brutal-sm focus:shadow-brutal outline-none transition-shadow" />
              <input type="email" placeholder="E-posta" className="border-3 border-ink bg-paper px-4 py-3 shadow-brutal-sm focus:shadow-brutal outline-none transition-shadow" />
              <input type="tel" placeholder="Telefon (opsiyonel)" className="border-3 border-ink bg-paper px-4 py-3 shadow-brutal-sm focus:shadow-brutal outline-none transition-shadow" />
              <textarea placeholder="Hangi hizmette destek arıyorsunuz?" rows={4} className="border-3 border-ink bg-paper px-4 py-3 shadow-brutal-sm focus:shadow-brutal outline-none transition-shadow resize-none" />
              <button type="submit" className="border-3 border-ink bg-ink text-paper px-5 py-3 text-sm font-bold uppercase shadow-brutal hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all inline-flex items-center gap-2 justify-center">
                Görüşme Talebi Gönder <ArrowUpRight className="h-4 w-4" />
              </button>
            </form>
          </Reveal>
        </div>

        <aside className="space-y-4">
          <Reveal delay={150}>
            <a href="https://wa.me/905555555555" className="block border-3 border-ink bg-brand-green text-paper p-5 shadow-brutal hover:-translate-x-1 hover:-translate-y-1 hover:shadow-brutal-lg transition-all">
              <MessageSquare className="h-6 w-6 mb-2" />
              <div className="font-bold uppercase text-sm mb-1">WhatsApp</div>
              <div className="text-xs opacity-85">DM "SISTEM" yaz — bot karşılar</div>
            </a>
          </Reveal>
          <Reveal delay={200}>
            <a href="mailto:info@portzen.ai" className="block border-3 border-ink bg-brand-yellow text-ink p-5 shadow-brutal hover:-translate-x-1 hover:-translate-y-1 hover:shadow-brutal-lg transition-all">
              <Mail className="h-6 w-6 mb-2" />
              <div className="font-bold uppercase text-sm mb-1">E-posta</div>
              <div className="text-xs opacity-85">info@portzen.ai</div>
            </a>
          </Reveal>
          <Reveal delay={250}>
            <a href="#" className="block border-3 border-ink bg-brand-pink text-paper p-5 shadow-brutal hover:-translate-x-1 hover:-translate-y-1 hover:shadow-brutal-lg transition-all">
              <Calendar className="h-6 w-6 mb-2" />
              <div className="font-bold uppercase text-sm mb-1">Online Takvim</div>
              <div className="text-xs opacity-85">Müsait saatleri görüp randevu al</div>
            </a>
          </Reveal>
        </aside>
      </div>
    </section>
  );
}
