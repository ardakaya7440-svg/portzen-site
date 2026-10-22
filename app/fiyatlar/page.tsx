import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import {
  PricingSection,
  SectionBadge,
  SinglePriceCard,
  WebMaintenanceRow
} from "@/components/pricing/PricingSection";
import { type FamilyId, PRICING, SINGLE, TIER_NAMES, familyOffersSchema, formatTL, whatsappUrl, QUOTA_NOTE, WEB_MAINTENANCE_HOURS, tierPriceLabel } from "@/data/pricing";

const sm = PRICING["sosyal-medya"].tiers;
const ai = PRICING["ai-musteri-asistani"].tiers;

export const metadata: Metadata = {
  title: "Fiyatlar | Sosyal medya, video, reklam, AI asistan, otomasyon ve web paketleri",
  description: `PORTZEN paket fiyatları KDV hariç: sosyal medya yönetimi aylık ${formatTL(sm.baslangic.price)}'den, AI müşteri asistanı aylık ${formatTL(ai.baslangic.price)} + kurulum. Başlangıç, Büyüme ve Kurumsal paketlerin kapsamı tek sayfada.`,
  alternates: { canonical: "https://portzenai.com/fiyatlar" },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://portzenai.com/fiyatlar",
    siteName: "PORTZEN",
    title: "PORTZEN Fiyatlar — Başlangıç, Büyüme ve Kurumsal paketler",
    description: "Tüm hizmetlerin paket fiyatları ve kapsamları tek sayfada. Tutarlar KDV hariçtir."
  },
  robots: { index: true, follow: true }
};

const FAMILIES: { id: FamilyId; anchor: string }[] = [
  { id: "sosyal-medya", anchor: "sosyal-medya" },
  { id: "kisa-video", anchor: "kisa-video" },
  { id: "ai-reklam-filmi", anchor: "ai-reklam-filmi" },
  { id: "reklam-yonetimi", anchor: "reklam-yonetimi" },
  { id: "ai-musteri-asistani", anchor: "ai-musteri-asistani" },
  { id: "is-otomasyonu", anchor: "is-otomasyonu" },
  { id: "kurumsal-web-sitesi", anchor: "kurumsal-web-sitesi" },
  { id: "e-ticaret", anchor: "e-ticaret" }
];

const FAQ = [
  {
    q: "Fiyatlara KDV dahil mi?",
    a: "Hayır. Sitedeki tüm tutarlar TL ve KDV hariçtir."
  },
  {
    q: "Hangi paketle başlamalıyım?",
    a: "Çoğu küçük ve orta ölçekli işletme için Büyüme paketini öneriyoruz. Tek kanalda veya küçük ölçekte başlamak isteyenler için Başlangıç, birden fazla şube, marka ya da yüksek hacim için Kurumsal uygundur."
  },
  {
    q: "Kurulum bedeli olan hizmetler hangileri?",
    a: `AI müşteri asistanı aylık ücretin yanında tek seferlik kurulum bedeli içerir (Başlangıç ${formatTL(ai.baslangic.setupFee ?? 0)}, Büyüme ${formatTL(ai.buyume.setupFee ?? 0)}, Kurumsal ${formatTL(ai.kurumsal.setupFee ?? 0)}). Instagram DM otomasyonu ve AI telefon asistanında da kurulum bedeli vardır. İş otomasyonu tek seferlik kurulumdur; aylık bakım isteğe bağlıdır.`
  },
  {
    q: "Kurumsal paket, alt paketlerin adetlerini de içerir mi?",
    a: QUOTA_NOTE + " Örneğin Kurumsal sosyal medya paketinde ayda toplam 30 özgün içerik vardır; Başlangıç ve Büyüme adetleri bunun üzerine eklenmez."
  },
  {
    q: "Web bakımda kaç saatlik çalışma var?",
    a: `Web bakım paketlerinde ayda toplam ${WEB_MAINTENANCE_HOURS.baslangic} saat (Başlangıç, ${tierPriceLabel(PRICING["web-bakim"], "baslangic")}), ${WEB_MAINTENANCE_HOURS.buyume} saat (Büyüme, ${tierPriceLabel(PRICING["web-bakim"], "buyume")}) veya ${WEB_MAINTENANCE_HOURS.kurumsal} saat (Kurumsal, ${tierPriceLabel(PRICING["web-bakim"], "kurumsal")}) bakım ve değişiklik vardır. Süreler birbirine eklenmez, kullanılmayan saatler devretmez. Yeni modül ve kapsamlı tasarım çalışmaları ayrıca tekliflendirilir.`
  },
  {
    q: "Reklam bütçesi pakete dahil mi?",
    a: "Hayır. Reklam harcaması hizmet bedeline dahil değildir ve reklam platformuna sizin ödeme yönteminizle ödenir. Paketteki harcama sınırı aşılırsa yalnızca aşan tutarın %10'u eklenir."
  },
  {
    q: "Fiyatı “…'den başlayan” olarak yazılan hizmetler neden farklı?",
    a: `Özel web uygulaması, mobil uygulama ve mobil oyun projelerinde ekran, rol ve entegrasyon sayısı işten işe çok değişir. Bu yüzden yalnızca bu üç hizmette başlangıç bedeli yazıyoruz; kesin bedel kapsam görüşmesinden sonra yazılı teklifte belirlenir.`
  },
  {
    q: "Sonuç garantisi veriyor musunuz?",
    a: "Hayır. İzlenme, takipçi, satış veya viral başarı garantisi vermiyoruz. Teslim edilecek işleri, adetleri ve sınırları paket kapsamında açıkça yazıyoruz."
  }
];

export default function FiyatlarPage() {
  const offerCatalog = {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    name: "PORTZEN paket fiyatları (KDV hariç)",
    url: "https://portzenai.com/fiyatlar",
    itemListElement: FAMILIES.map(({ id }) => ({
      "@type": "OfferCatalog",
      name: PRICING[id].title,
      itemListElement: familyOffersSchema(PRICING[id])
    }))
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } }))
  };

  return (
    <div className="bg-white text-slate">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(offerCatalog) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="bg-white pt-16 pb-12 lg:pt-24">
        <div className="mx-auto max-w-container px-6">
          <SectionBadge>Fiyatlar</SectionBadge>
          <h1 className="mt-5 max-w-3xl text-4xl lg:text-5xl font-bold leading-tight">Paketler ve fiyatlar</h1>
          <p className="mt-6 max-w-2xl text-lg text-slate/70 leading-relaxed">
            Her hizmette üç paket: {TIER_NAMES.baslangic}, {TIER_NAMES.buyume} ve {TIER_NAMES.kurumsal}. Tutarlar TL ve KDV
            hariçtir. Kurulum bedelleri ve fiyata dahil olmayan giderler her paketin yanında yazılıdır. Paketlerdeki adetler o paketin toplam hakkıdır; alt paketin adetleri üst pakete eklenmez.
          </p>
          <nav aria-label="Hizmetler" className="mt-10 flex flex-wrap gap-2">
            {FAMILIES.map(({ id, anchor }) => (
              <a
                key={id}
                href={`#${anchor}`}
                className="rounded-full border border-slate/20 px-4 py-2 text-sm font-semibold text-slate hover:bg-slate hover:text-white transition-colors"
              >
                {PRICING[id].title.replace(/ \(.*\)$/, "")}
              </a>
            ))}
            <a
              href="#diger-hizmetler"
              className="rounded-full border border-slate/20 px-4 py-2 text-sm font-semibold text-slate hover:bg-slate hover:text-white transition-colors"
            >
              Diğer hizmetler
            </a>
          </nav>
        </div>
      </section>

      {FAMILIES.map(({ id, anchor }) => (
        <PricingSection
          key={id}
          family={id}
          id={anchor}
          badge={PRICING[id].title.replace(/ \(.*\)$/, "")}
          heading={PRICING[id].title}
          intro={
            id === "ai-musteri-asistani"
              ? "WhatsApp ve web sitesi chatbotu aynı hizmet ailesidir. Aylık ücretin hemen altında tek seferlik kurulum bedeli ve ilk ay toplamı yazılıdır."
              : id === "is-otomasyonu"
                ? "CRM, n8n ve Make çözümleri tek başlık altında. Kurulum tek seferliktir; aylık bakım isteğe bağlıdır ve ikinci aydan itibaren başlar."
                : undefined
          }
        />
      ))}

      <section id="diger-hizmetler" className="bg-white py-16 lg:py-24 border-t border-slate/10 scroll-mt-24">
        <div className="mx-auto max-w-container px-6">
          <div className="max-w-2xl">
            <SectionBadge>Diğer hizmetler</SectionBadge>
            <h2 className="mt-5 text-3xl lg:text-4xl font-bold leading-tight">Tekil hizmetler ve özel projeler</h2>
            <p className="mt-4 text-lg text-slate/70 leading-relaxed">
              Sabit fiyatlı tekil hizmetler ve kesin bedeli kapsama göre teklifte belirlenen özel projeler. Tutarlar TL ve
              KDV hariçtir.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <SinglePriceCard id="landing-page" />
            <SinglePriceCard id="instagram-dm" />
            <SinglePriceCard id="ai-telefon-asistani" />
            <SinglePriceCard id="ozel-web-uygulamasi" />
            <SinglePriceCard id="mobil-uygulama" />
            <SinglePriceCard id="mobil-oyun" />
          </div>
          <div className="mt-6">
            <WebMaintenanceRow />
          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-24 border-t border-slate/10">
        <div className="mx-auto max-w-container px-6 grid gap-10 xl:grid-cols-[1fr_2fr]">
          <div>
            <SectionBadge>Sık sorulanlar</SectionBadge>
            <h2 className="mt-5 text-3xl lg:text-4xl font-bold leading-tight">Fiyatlarla ilgili kısa cevaplar</h2>
          </div>
          <div className="divide-y divide-slate/15 border-y border-slate/15">
            {FAQ.map((f) => (
              <details key={f.q} className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-lg font-bold [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-slate/20 text-xl font-light transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="pb-6 max-w-2xl leading-relaxed text-slate/70">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white pb-20 lg:pb-28">
        <div className="mx-auto max-w-container px-6">
          <div className="rounded-2xl border border-slate/15 p-8 lg:p-12 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-xl">
              <h2 className="text-2xl lg:text-3xl font-bold leading-tight">Hangi paketin uygun olduğundan emin değil misiniz?</h2>
              <p className="mt-3 text-slate/70">30 dakikalık ücretsiz görüşmede ihtiyacınızı dinler, ardından kapsam, süre ve fiyat içeren yazılı teklif göndeririz.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/iletisim"
                className="inline-flex items-center gap-3 rounded-full bg-lime py-2 pl-6 pr-2 text-sm font-bold text-slate hover:bg-lime/85"
              >
                Teklif isteyin
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </Link>
              <a
                href={whatsappUrl("Merhaba PORTZEN, hangi paketin bana uygun olduğunu konuşmak istiyorum.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-full border border-slate/20 py-2 pl-6 pr-2 text-sm font-bold text-slate hover:bg-slate hover:text-white transition-colors"
              >
                WhatsApp&apos;tan yazın
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-slate">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </a>
            </div>
          </div>
          <p className="mt-6 text-sm text-slate/60">
            Özel projeler: {SINGLE["ozel-web-uygulamasi"].title} {formatTL(SINGLE["ozel-web-uygulamasi"].price)}&apos;den,{" "}
            {SINGLE["mobil-uygulama"].title.toLowerCase()} {formatTL(SINGLE["mobil-uygulama"].price)}&apos;den, {SINGLE["mobil-oyun"].title.toLowerCase()}{" "}
            {formatTL(SINGLE["mobil-oyun"].price)}&apos;den başlar.
          </p>
        </div>
      </section>
    </div>
  );
}
