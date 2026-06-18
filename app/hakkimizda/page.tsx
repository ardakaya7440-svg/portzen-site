import { Reveal } from "@/components/ui/reveal";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Page() {
  return (
    <>
      <section className="py-section">
        <div className="mx-auto max-w-container px-6 max-w-3xl">
          <Reveal>
            <div className="inline-block border-3 border-ink bg-brand-blue text-paper px-3 py-1 text-xs font-black uppercase tracking-wider mb-3 shadow-brutal-sm">Hakkımızda</div>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="font-display text-h1 font-black leading-[0.95] mb-6">Beş ajansla uğraşmak istemeyen KOBİ'ler için kurduk.</h1>
          </Reveal>
          <Reveal delay={200}>
            <div className="prose prose-lg max-w-none">
              <p>PORTZEN; web tasarımı, AI reklam videosu, WhatsApp asistanı, otomasyon sistemleri ve sosyal medya içerik üretimini <strong>tek bir ekipten</strong> sunan AI üretim ajansıdır.</p>
              <p className="mt-4">Beş farklı ajansla uğraşmak yerine — bir brief, bir koordinasyon, bir fatura. Sistemini birlikte konuşur, üç haftada teslim ederiz.</p>
            </div>
          </Reveal>
          <Reveal delay={300}>
            <Link href="/iletisim" className="mt-8 inline-flex items-center gap-2 border-3 border-ink bg-ink text-paper px-5 py-3 text-sm font-bold uppercase shadow-brutal hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all">
              Görüşme Al <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
