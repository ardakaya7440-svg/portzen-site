import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Lock } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

export const metadata: Metadata = {
  title: "Gizlilik Politikası",
  description:
    "PORTZEN — Web sitesi gizlilik politikası, çerez kullanımı, üçüncü taraf hizmetler ve kullanıcı hakları.",
  alternates: { canonical: "https://portzenai.com/gizlilik-politikasi" },
  robots: { index: true, follow: true }
};

export default function Page() {
  return (
    <section className="py-section">
      <div className="mx-auto max-w-container px-6 max-w-4xl">
        <Reveal>
          <div className="inline-flex items-center gap-2 border-3 border-ink bg-brand-green text-paper px-3 py-1 text-xs font-black uppercase tracking-wider mb-3 shadow-brutal-sm">
            <Lock className="h-3 w-3" />
            Yasal Metin
          </div>
        </Reveal>
        <Reveal delay={100}>
          <h1 className="font-display text-h1 font-black leading-[0.95]">
            Gizlilik Politikası
          </h1>
        </Reveal>
        <Reveal delay={200}>
          <p className="mt-3 text-sm text-ink/60">
            Son güncelleme: 22 Haziran 2026
          </p>
        </Reveal>

        <Reveal delay={300}>
          <div className="mt-10 space-y-8">
            <section>
              <p className="text-ink/80 leading-relaxed">
                PORTZEN olarak gizliliğinize değer veriyoruz. Bu Gizlilik Politikası,
                <strong> portzenai.com</strong> web sitesini ziyaret ettiğinizde
                hangi bilgileri topladığımızı, nasıl kullandığımızı ve haklarınızı açıklar.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-black mb-3">1. Topladığımız Bilgiler</h2>
              <p className="text-ink/80 leading-relaxed mb-3">
                Bizimle iletişime geçtiğinizde veya sitemizi kullandığınızda aşağıdaki
                bilgileri toplayabiliriz:
              </p>
              <ul className="space-y-2 text-ink/80">
                <li>• <strong>Form bilgileri:</strong> Ad, e-posta, telefon, mesaj içeriği</li>
                <li>• <strong>Otomatik bilgiler:</strong> IP adresi, tarayıcı tipi, işletim sistemi, ziyaret saati</li>
                <li>• <strong>Çerez bilgileri:</strong> Site kullanım analitikleri, tercih ayarları</li>
                <li>• <strong>İletişim kayıtları:</strong> WhatsApp ve e-posta yazışmaları</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-2xl font-black mb-3">2. Çerezler ve Analitik</h2>
              <p className="text-ink/80 leading-relaxed mb-3">
                Web sitemizde aşağıdaki çerez ve analitik araçlarını kullanıyoruz:
              </p>
              <div className="space-y-3">
                <div className="border-3 border-ink bg-paper p-4 shadow-brutal-sm">
                  <div className="font-bold mb-1">Google Analytics 4 (GA4)</div>
                  <div className="text-sm text-ink/70">
                    Site trafiğini ve kullanıcı davranışını anonim olarak analiz eder. Topladığı
                    veri: ziyaret edilen sayfalar, oturum süresi, cihaz tipi, yaklaşık konum.
                  </div>
                </div>
                <div className="border-3 border-ink bg-paper p-4 shadow-brutal-sm">
                  <div className="font-bold mb-1">Google Tag Manager</div>
                  <div className="text-sm text-ink/70">
                    Analitik ve dönüşüm ölçüm etiketlerini yönetir.
                  </div>
                </div>
                <div className="border-3 border-ink bg-paper p-4 shadow-brutal-sm">
                  <div className="font-bold mb-1">Zorunlu çerezler</div>
                  <div className="text-sm text-ink/70">
                    Sitenin temel işlevleri için gereklidir (oturum, güvenlik).
                  </div>
                </div>
              </div>
              <p className="text-ink/80 leading-relaxed mt-3 text-sm">
                Çerezleri tarayıcı ayarlarınızdan reddedebilir veya silebilirsiniz.
                Bu durumda sitenin bazı işlevleri etkilenebilir.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-black mb-3">3. Üçüncü Taraf Hizmetler</h2>
              <p className="text-ink/80 leading-relaxed mb-3">
                Hizmetlerimizi sunarken aşağıdaki üçüncü taraf sağlayıcılarla çalışıyoruz:
              </p>
              <ul className="space-y-2 text-ink/80">
                <li>• <strong>Vercel</strong> — web sitesi hosting (ABD)</li>
                <li>• <strong>Google Workspace</strong> — kurumsal e-posta hizmeti</li>
                <li>• <strong>Google Analytics &amp; Tag Manager</strong> — site analitiği</li>
                <li>• <strong>WhatsApp Business</strong> — müşteri iletişimi</li>
                <li>• <strong>Meta &amp; LinkedIn</strong> — sosyal medya entegrasyonu (yalnızca tıklama)</li>
              </ul>
              <p className="text-ink/80 leading-relaxed mt-3 text-sm">
                Bu sağlayıcıların kendi gizlilik politikaları bulunur ve verilerinizi
                kendi politikaları çerçevesinde işlerler.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-black mb-3">4. Bilgilerin Kullanımı</h2>
              <p className="text-ink/80 leading-relaxed mb-3">
                Topladığımız bilgileri yalnızca şu amaçlarla kullanırız:
              </p>
              <ul className="space-y-2 text-ink/80">
                <li>• Hizmet talebinize cevap vermek ve teklif sunmak</li>
                <li>• Sözleşme sürecini yürütmek</li>
                <li>• Sitenin işleyişini ve güvenliğini sağlamak</li>
                <li>• Hizmetlerimizi geliştirmek</li>
                <li>• Yasal yükümlülüklere uymak</li>
                <li>• Açık rızanız varsa pazarlama iletişimi göndermek</li>
              </ul>
              <p className="text-ink/80 leading-relaxed mt-3">
                <strong>Bilgilerinizi asla satmıyoruz</strong> veya pazarlama amacıyla
                üçüncü taraflarla paylaşmıyoruz.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-black mb-3">5. Veri Güvenliği</h2>
              <p className="text-ink/80 leading-relaxed">
                Verilerinizi korumak için sektör standartlarında güvenlik önlemleri uygularız:
                HTTPS şifreleme, güvenli sunucular, erişim kontrolü ve düzenli güvenlik denetimleri.
                Ancak internet üzerinden hiçbir veri transferinin %100 güvenli olmadığını belirtmek isteriz.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-black mb-3">6. Veri Saklama Süresi</h2>
              <p className="text-ink/80 leading-relaxed">
                Kişisel verilerinizi yalnızca işleme amacının gerektirdiği süre boyunca saklarız.
                Yasal saklama yükümlülükleri kapsamında en fazla <strong>10 yıl</strong> süreyle muhafaza edilebilir.
                Süre sonunda verileriniz güvenli şekilde silinir veya anonim hale getirilir.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-black mb-3">7. Kullanıcı Hakları</h2>
              <p className="text-ink/80 leading-relaxed mb-3">
                KVKK ve GDPR kapsamında aşağıdaki haklara sahipsiniz:
              </p>
              <ul className="space-y-2 text-ink/80">
                <li>• Hangi verilerinizin işlendiğini öğrenme</li>
                <li>• Verilerinize erişim ve kopyasını isteme</li>
                <li>• Yanlış verilerin düzeltilmesini talep etme</li>
                <li>• Verilerinizin silinmesini isteme (unutulma hakkı)</li>
                <li>• Veri işlemeye itiraz etme</li>
                <li>• Açık rızanızı geri çekme</li>
              </ul>
              <p className="text-ink/80 leading-relaxed mt-3">
                Detaylı açıklama için <Link href="/kvkk" className="underline font-bold">KVKK Aydınlatma Metni</Link>&apos;ni inceleyebilir,
                taleplerinizi <a href="mailto:destek@portzenai.com" className="underline font-bold">destek@portzenai.com</a> adresine iletebilirsiniz.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-black mb-3">8. Çocukların Gizliliği</h2>
              <p className="text-ink/80 leading-relaxed">
                Hizmetlerimiz <strong>18 yaş ve üzeri</strong> kullanıcılara yöneliktir. Bilerek 18 yaş
                altındaki kişilerden kişisel veri toplamayız. 18 yaş altı bir kişiye ait
                veri topladığımızı fark edersek, bu veriler derhal silinir.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-black mb-3">9. Politika Değişiklikleri</h2>
              <p className="text-ink/80 leading-relaxed">
                Bu politikayı zaman zaman güncelleyebiliriz. Önemli değişiklikleri sitemizde
                yayınlayarak ve gerekirse e-posta ile bildiririz. Güncellemeleri takip etmek
                için bu sayfayı belirli aralıklarla kontrol etmenizi öneririz.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-black mb-3">10. İletişim</h2>
              <p className="text-ink/80 leading-relaxed">
                Gizlilik politikamız hakkındaki sorularınız için:
              </p>
              <div className="mt-4 border-3 border-ink bg-paper p-5 shadow-brutal-sm space-y-1.5 text-sm">
                <div><strong>E-posta:</strong> <a href="mailto:destek@portzenai.com" className="underline">destek@portzenai.com</a></div>
                <div><strong>Telefon:</strong> 0501 588 48 53</div>
                <div><strong>Adres:</strong> İzmir, Türkiye</div>
              </div>
            </section>
          </div>
        </Reveal>

        <Reveal delay={400}>
          <div className="mt-12 border-3 border-ink bg-brand-green text-paper p-6 shadow-brutal flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <div className="font-display text-lg font-black">Sorunuz mu var?</div>
              <div className="text-sm opacity-90">Gizlilik ile ilgili tüm sorularınız için bize yazın.</div>
            </div>
            <Link
              href="/iletisim"
              className="inline-flex items-center gap-2 border-3 border-ink bg-paper text-ink px-5 py-3 text-sm font-bold uppercase shadow-brutal-sm hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all shrink-0"
            >
              İletişime Geç <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>

        <Reveal delay={500}>
          <div className="mt-8 flex flex-wrap gap-3 text-sm">
            <Link href="/kvkk" className="underline text-ink/70 hover:text-ink">
              KVKK Aydınlatma Metni
            </Link>
            <span className="text-ink/30">·</span>
            <Link href="/kullanim-sartlari" className="underline text-ink/70 hover:text-ink">
              Kullanım Şartları
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
