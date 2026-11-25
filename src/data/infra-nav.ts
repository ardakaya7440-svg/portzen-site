import type { ServiceItem } from "./catalog";

/**
 * "Sunucu ve Dijital Altyapı" menü grubu. Hafif tutulur (istemci paketine girer);
 * sayfa içerikleri src/data/infra-services altında. Fiyat alanı bilerek yok.
 * Admin/DB kategori listesine (CatalogCategory) eklenmez: DB'de kategori CHECK kısıtı var.
 */
export const INFRA_NAV_GROUP: { id: "altyapi"; title: string; intro: string; hubHref: string; links: ServiceItem[] } = {
  id: "altyapi",
  title: "Sunucu ve dijital altyapı",
  intro: "Sunucu kurulumu, Docker ve Coolify, botlar, n8n ve yapay zekâ ajanı barındırma.",
  hubHref: "/hizmetler/sunucu-ve-altyapi",
  links: [
    { label: "Linux sunucu kurulumu", href: "/hizmetler/sunucu-kurulumu", short: "Güvenli, belgelenmiş ve izlenen Linux sunucu kurulumu.", visual: "dashboard" },
    { label: "Docker ve Coolify kurulumu", href: "/hizmetler/coolify-kurulumu", short: "Kendi sunucunuzda push ile deploy eden konteyner altyapısı.", visual: "flow" },
    { label: "Telegram bot geliştirme", href: "/hizmetler/telegram-bot-gelistirme", short: "Sipariş, bildirim ve ekip içi işler için özel Telegram botları.", visual: "chat" },
    { label: "Yapay zekâ ajanı hosting", href: "/hizmetler/yapay-zeka-ajani-hosting", short: "Ajanların güvenli, izlenen ve sınırları belli bir altyapıda çalışması.", visual: "webchat" },
    { label: ".onion web sitesi", href: "/hizmetler/onion-web-sitesi", short: "Yasal kullanım çerçevesinde Tor ağı üzerinden yayın yapan siteler.", visual: "web" }
  ]
};
