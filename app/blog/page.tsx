import Link from "next/link";
import { ArrowUpRight, Clock } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

const POSTS = [
  {
    title: "Eczaneler için yapay zeka reklam: 1.023 görüntülenme nasıl elde edildi?",
    excerpt: "Tek bir minyatür sahne reklam ile bir eczane Instagram'da nasıl 10x organik erişim aldı — adım adım hikaye.",
    date: "Yakında",
    tag: "Vaka Çalışması",
    tone: "bg-brand-pink",
    textTone: "text-paper"
  },
  {
    title: "WhatsApp asistanı kurmadan önce bilmen gereken 7 şey",
    excerpt: "Pek çok işletme botu yanlış kuruyor. İşte bizim 50+ kurulumdan öğrendiğimiz pratik dersler.",
    date: "Yakında",
    tag: "Rehber",
    tone: "bg-brand-green",
    textTone: "text-paper"
  },
  {
    title: "Otomasyon = işten çıkarma değil. KOBİ'lerde gerçek kullanım",
    excerpt: "Personeli ezmek yerine onları tekrarlı işten kurtaran 5 otomasyon örneği.",
    date: "Yakında",
    tag: "Rehber",
    tone: "bg-brand-blue",
    textTone: "text-paper"
  },
  {
    title: "Sosyal medyada büyümenin sırrı içerik değil — tutarlılık",
    excerpt: "30 günde 100 takipçi mi, 90 günde 5.000 takipçi mi? İçerik hacminin altında yatan gerçek.",
    date: "Yakında",
    tag: "Strateji",
    tone: "bg-brand-yellow",
    textTone: "text-ink"
  }
];

export default function Page() {
  return (
    <>
      <section className="py-section">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="inline-block border-3 border-ink bg-brand-purple text-paper px-3 py-1 text-xs font-black uppercase tracking-wider mb-3 shadow-brutal-sm">
              Blog
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="font-display text-h1 font-black leading-[0.95] max-w-3xl">
              Rehberler, vaka çalışmaları, sektör notları.
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-4 max-w-prose text-body text-ink/70">
              Yapay zeka ile iş yapan KOBİ'ler için pratik içerikler. İlk yazılarımız hazırlanıyor — kayıt ol, çıkar çıkmaz haberin olsun.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-section">
        <div className="mx-auto max-w-container px-6 grid gap-6 md:grid-cols-2">
          {POSTS.map((p, i) => (
            <Reveal key={i} delay={i * 80}>
              <div className={cn("border-3 border-ink p-6 shadow-brutal flex flex-col gap-4 h-full", p.tone, p.textTone)}>
                <div className="flex items-center gap-2">
                  <span className="border-3 border-ink bg-paper text-ink px-2 py-0.5 text-[10px] font-black uppercase tracking-wider">{p.tag}</span>
                  <span className="text-xs opacity-75 flex items-center gap-1">
                    <Clock className="h-3 w-3" /> {p.date}
                  </span>
                </div>
                <h3 className="font-display text-2xl font-black leading-tight">{p.title}</h3>
                <p className="text-sm opacity-85 leading-relaxed flex-1">{p.excerpt}</p>
                <div className="text-xs font-bold uppercase opacity-60">Hazırlanıyor</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-section">
        <div className="mx-auto max-w-container px-6">
          <div className="border-3 border-ink bg-brand-yellow p-8 shadow-brutal-lg">
            <h2 className="font-display text-h2 font-black leading-tight mb-3">İçerikler çıkar çıkmaz haberin olsun.</h2>
            <p className="text-body text-ink/80 mb-6 max-w-2xl">Sıkça e-posta atmıyoruz — ayda 1-2 yazı, sadece KOBİ'ler için pratik öneriler.</p>
            <Link href="/iletisim" className="inline-flex items-center gap-2 border-3 border-ink bg-ink px-5 py-3 text-sm font-bold uppercase text-paper shadow-brutal hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all">
              E-Bültene Kayıt Ol <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
