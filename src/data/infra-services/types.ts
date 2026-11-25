/**
 * "Sunucu ve Dijital Altyapı" hizmet sayfaları için veri modeli.
 * Bu hizmetlerde fiyat GÖSTERİLMEZ; tek CTA "Detayları Konuşalım" (WhatsApp, hizmete özel hazır mesaj).
 */
export interface InfraDoc {
  /** Bağlantı metni, ör. "Tor Project: Onion Services" */
  label: string;
  /** Resmi dokümantasyon adresi (https) */
  url: string;
}

export interface InfraService {
  /** URL: /hizmetler/<slug> */
  slug: string;
  /** Sayfa H1 */
  title: string;
  /** Menü / kart etiketi (kısa) */
  navLabel: string;
  /** Kart açıklaması: 1 kısa cümle */
  short: string;
  /** SEO title (marka eki şablonda eklenmez; 60 karakter civarı, benzersiz) */
  metaTitle: string;
  /** Meta description (140–160 karakter, benzersiz) */
  metaDescription: string;
  /** Hero altındaki giriş: kullanıcının sorusuna ilk cümlede doğrudan cevap veren 2–4 cümlelik paragraf */
  intro: string;
  /** "Bu hizmet ne yapar?" bölümü: 2–3 paragraf düz metin (paragraflar dizi elemanı) */
  description: string[];
  /** Çözülen problemler: 4–6 madde */
  problems: string[];
  /** Hizmet kapsamı: 5–8 kalem */
  scope: { title: string; description: string }[];
  /** Kullanım senaryoları: 3–5 senaryo */
  useCases: { title: string; description: string }[];
  /** Çalışma süreci: 4–5 adım */
  process: { title: string; description: string }[];
  /** SSS: 5–7 soru */
  faqs: { q: string; a: string }[];
  /** İsteğe bağlı önemli not (ör. yasal çerçeve). Düz metin. */
  notice?: string;
  /** Resmi teknik dokümantasyon bağlantıları: 2–4 adet */
  docs: InfraDoc[];
  /** İlgili blog yazılarının slug'ları (content/blog/<slug>.md) */
  relatedPosts: string[];
  /** İlgili diğer altyapı hizmetlerinin slug'ları: 2–3 adet */
  relatedServices: string[];
  /** Schema.org Service.serviceType */
  serviceType: string;
}
