import Link from "next/link";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";

/**
 * Footer — Studiova düzeni, koyu zemin.
 * İç linkler SEO için korunur (hizmet, karşılaştırma, sektörel, kurumsal, yasal).
 */

const HIZMETLER = [
  { label: "Sosyal Medya Yönetimi", href: "/sosyal-medya-yonetimi" },
  { label: "Sosyal Medya Ajansı", href: "/sosyal-medya-ajansi" },
  { label: "Viral Video Üretimi", href: "/sosyal-medya-viral-video" },
  { label: "Meta Reklam Ajansı", href: "/meta-reklam-ajansi" },
  { label: "Web Yazılım", href: "/hizmetler/web-yazilim" },
  { label: "Mobil Uygulama", href: "/hizmetler/mobil-uygulama" },
  { label: "Mobil Oyun", href: "/hizmetler/mobil-oyun" },
  { label: "Web Tasarım", href: "/web-tasarim" },
  { label: "Web Sitesi Tasarımı", href: "/web-sitesi-tasarimi" },
  { label: "CRM Otomasyonu", href: "/crm-otomasyonu" },
  { label: "WhatsApp Asistanı", href: "/whatsapp-ai-asistani" },
  { label: "Instagram DM Otomasyonu", href: "/instagram-dm-otomasyonu" },
  { label: "Reklam Videosu Üretimi", href: "/yapay-zeka-video-uretimi" },
  { label: "Çağrı Merkezi Otomasyonu", href: "/yapay-zeka-call-center" },
  { label: "n8n Kurulum", href: "/n8n-kurulum-hizmeti" },
  { label: "Türkçe Chatbot", href: "/ai-chatbot-turkce" }
];

const KARSILASTIRMA = [
  { label: "Türkçe KOBİ CRM'i", href: "/hubspot-alternatifi" },
  { label: "Kurumsal Ölçekli CRM", href: "/salesforce-alternatifi" },
  { label: "Sosyal Medya Chatbot", href: "/manychat-alternatifi" },
  { label: "Web Canlı Destek Botu", href: "/tidio-alternatifi" },
  { label: "Müşteri Mesajlaşma", href: "/intercom-alternatifi" },
  { label: "İş Akışı Otomasyonu", href: "/zapier-alternatifi" },
  { label: "Newsletter Aracı", href: "/mailchimp-alternatifi" },
  { label: "E-ticaret E-postası", href: "/klaviyo-alternatifi" },
  { label: "Online Ödeme Servisi", href: "/iyzico-alternatifi" },
  { label: "Basit Online Satış", href: "/shopier-alternatifi" },
  { label: "Yerli E-ticaret Yazılımı", href: "/ideasoft-alternatifi" },
  { label: "Kurumsal E-ticaret", href: "/ticimax-alternatifi" },
  { label: "Restoran POS Sistemi", href: "/sambapos-alternatifi" },
  { label: "Ön Muhasebe Yazılımı", href: "/logo-yazilim-alternatifi" },
  { label: "Toplu SMS Servisi", href: "/netgsm-alternatifi" }
];

const KURUMSAL = [
  { label: "Fiyatlar", href: "/fiyatlar" },
  { label: "Hakkımızda", href: "/hakkimizda" },
  { label: "Referanslar", href: "/referanslar" },
  { label: "Blog", href: "/blog" },
  { label: "Karşılaştırma", href: "/karsilastirma" },
  { label: "İletişim", href: "/iletisim" }
];

const SEKTOREL = [
  { label: "Restoran Web Tasarım", href: "/web-tasarim/restoran" },
  { label: "Klinik Web Tasarım", href: "/web-tasarim/klinik" },
  { label: "Emlak WhatsApp Asistanı", href: "/whatsapp-ai-asistani/emlak" },
  { label: "Butik Instagram DM", href: "/instagram-dm-otomasyonu/butik" },
  { label: "Eczane Reklam Videosu", href: "/ai-reklam-videosu/eczane" }
];

const YASAL = [
  { label: "KVKK", href: "/kvkk" },
  { label: "Gizlilik Politikası", href: "/gizlilik-politikasi" },
  { label: "Kullanım Şartları", href: "/kullanim-sartlari" },
  { label: "Sitemap", href: "/sitemap.xml" }
];

function Col({ title, items }: { title: string; items: { label: string; href: string }[] }) {
  return (
    <div>
      <div className="text-[11px] font-bold uppercase tracking-wider text-white/50 mb-3">{title}</div>
      <ul className="space-y-1.5 text-sm">
        {items.map((i) => (
          <li key={i.href}>
            <Link href={i.href} className="text-white/80 hover:text-lime transition-colors">
              {i.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="bg-slate text-white">
      <div className="mx-auto max-w-container px-6 py-16 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="flex flex-col gap-8 lg:pr-8">
            <h2 className="text-3xl lg:text-4xl font-bold leading-tight">Birlikte çalışalım mı?</h2>
            <div className="flex flex-col gap-2 text-[15px]">
              <a
                href="https://wa.me/905318639117"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 hover:text-lime transition-colors"
              >
                <ArrowUpRight className="h-4 w-4 text-lime" />
                +90 531 863 91 17
              </a>
              <a href="mailto:destek@portzenai.com" className="inline-flex items-center gap-3 hover:text-lime transition-colors">
                <Mail className="h-4 w-4 text-lime" />
                destek@portzenai.com
              </a>
              <span className="inline-flex items-center gap-3 text-white/80">
                <MapPin className="h-4 w-4 text-lime" />
                İzmir, Türkiye
              </span>
              <span className="inline-flex items-center gap-3 text-white/80">
                <MapPin className="h-4 w-4 text-lime" />
                Kazan IT Park, Rusya
              </span>
            </div>
            <p className="text-sm text-white/60 max-w-sm">
              İzmir merkezli, Kazan IT Park ofisli sosyal medya ve yazılım ajansı. Sosyal medyanızı yönetiriz, yazılımınızı geliştiririz.
            </p>
          </div>

          <Col title="Hizmetler" items={HIZMETLER} />
          <Col title="Karşılaştırma" items={KARSILASTIRMA} />
          <div className="flex flex-col gap-8">
            <Col title="Kurumsal" items={KURUMSAL} />
            <Col title="Sektörel örnekler" items={SEKTOREL} />
            <Col title="Yasal" items={YASAL} />
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <img src="/logo-h-white.png" alt="PORTZEN" width={116} height={30} className="h-7 w-auto opacity-90" />
          <span>© {new Date().getFullYear()} PORTZEN — Tüm hakları saklıdır.</span>
        </div>
      </div>
    </footer>
  );
}
