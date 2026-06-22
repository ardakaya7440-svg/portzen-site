import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Shield } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

export const metadata: Metadata = {
  title: "KVKK Aydınlatma Metni",
  description:
    "PORTZEN — 6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında veri işleme aydınlatma metni.",
  alternates: { canonical: "https://portzenai.com/kvkk" },
  robots: { index: true, follow: true }
};

export default function Page() {
  return (
    <section className="py-section">
      <div className="mx-auto max-w-container px-6 max-w-4xl">
        <Reveal>
          <div className="inline-flex items-center gap-2 border-3 border-ink bg-brand-blue text-paper px-3 py-1 text-xs font-black uppercase tracking-wider mb-3 shadow-brutal-sm">
            <Shield className="h-3 w-3" />
            Yasal Metin
          </div>
        </Reveal>
        <Reveal delay={100}>
          <h1 className="font-display text-h1 font-black leading-[0.95]">
            KVKK Aydınlatma Metni
          </h1>
        </Reveal>
        <Reveal delay={200}>
          <p className="mt-3 text-sm text-ink/60">
            Son güncelleme: 22 Haziran 2026
          </p>
        </Reveal>

        <Reveal delay={300}>
          <div className="mt-10 prose-content space-y-8">
            <section>
              <h2 className="font-display text-2xl font-black mb-3">1. Veri Sorumlusunun Kimliği</h2>
              <p className="text-ink/80 leading-relaxed">
                6698 sayılı Kişisel Verilerin Korunması Kanunu (&ldquo;KVKK&rdquo;) uyarınca,
                kişisel verileriniz; veri sorumlusu sıfatıyla <strong>PORTZEN</strong> (&ldquo;PORTZEN&rdquo;,
                &ldquo;biz&rdquo;) tarafından aşağıda açıklanan kapsamda işlenecektir.
              </p>
              <div className="mt-4 border-3 border-ink bg-paper p-5 shadow-brutal-sm space-y-1.5 text-sm">
                <div><strong>Unvan:</strong> PORTZEN</div>
                <div><strong>Adres:</strong> İzmir, Türkiye</div>
                <div><strong>E-posta:</strong> <a href="mailto:destek@portzenai.com" className="underline">destek@portzenai.com</a></div>
                <div><strong>Telefon:</strong> 0501 588 48 53</div>
                <div><strong>Web:</strong> <a href="https://portzenai.com" className="underline">portzenai.com</a></div>
              </div>
            </section>

            <section>
              <h2 className="font-display text-2xl font-black mb-3">2. İşlenen Kişisel Veriler</h2>
              <p className="text-ink/80 leading-relaxed mb-3">
                PORTZEN, hizmet süreçlerinin yürütülmesi amacıyla aşağıdaki kişisel verilerinizi işleyebilir:
              </p>
              <ul className="space-y-2 text-ink/80">
                <li>• <strong>Kimlik bilgileri:</strong> Ad, soyad, unvan</li>
                <li>• <strong>İletişim bilgileri:</strong> E-posta adresi, telefon numarası, adres</li>
                <li>• <strong>Müşteri işlem verileri:</strong> Talep ve şikayet içerikleri, hizmet tercihleri</li>
                <li>• <strong>İşlem güvenliği verileri:</strong> IP adresi, log kayıtları, oturum bilgileri</li>
                <li>• <strong>Pazarlama verileri:</strong> Çerez kayıtları, web sitesi gezinti verileri</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-2xl font-black mb-3">3. Kişisel Verilerin İşlenme Amaçları</h2>
              <p className="text-ink/80 leading-relaxed mb-3">
                Kişisel verileriniz aşağıdaki amaçlarla işlenmektedir:
              </p>
              <ul className="space-y-2 text-ink/80">
                <li>• Hizmet talep süreçlerinin yürütülmesi (teklif sunma, görüşme planlama)</li>
                <li>• Müşteri ilişkilerinin yürütülmesi ve iletişim faaliyetleri</li>
                <li>• Sözleşme süreçlerinin yürütülmesi</li>
                <li>• Hizmetlerin sunulması ve geliştirilmesi</li>
                <li>• Açık rızanız doğrultusunda pazarlama ve tanıtım faaliyetleri</li>
                <li>• Yetkili kişi, kurum ve kuruluşlara yasal bilgi verme yükümlülüğü</li>
                <li>• Web sitesi güvenliğinin sağlanması</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-2xl font-black mb-3">4. Kişisel Verilerin Aktarılması</h2>
              <p className="text-ink/80 leading-relaxed">
                Kişisel verileriniz; yukarıdaki amaçların gerçekleştirilmesi doğrultusunda,
                yalnızca hizmet aldığımız tedarikçiler (hosting sağlayıcısı, e-posta sağlayıcısı,
                analitik araç sağlayıcıları), iş ortaklarımız ve yasal yükümlülükler kapsamında
                yetkili kamu kurum ve kuruluşları ile paylaşılabilir.
              </p>
              <p className="text-ink/80 leading-relaxed mt-3">
                <strong>Yurt dışı aktarım:</strong> Google Analytics, Google Tag Manager, Vercel
                hosting gibi hizmet sağlayıcıları kullanıldığından, bazı verileriniz KVKK&apos;nın
                9. maddesi kapsamında yurt dışına aktarılabilir.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-black mb-3">5. Veri Toplama Yöntemi ve Hukuki Sebebi</h2>
              <p className="text-ink/80 leading-relaxed">
                Kişisel verileriniz; web sitemizdeki iletişim formları, e-posta, WhatsApp,
                telefon görüşmeleri ve çerezler aracılığıyla otomatik veya kısmen otomatik
                yöntemlerle toplanmaktadır.
              </p>
              <p className="text-ink/80 leading-relaxed mt-3">
                Verileriniz; KVKK&apos;nın 5. ve 6. maddeleri uyarınca; sözleşmenin kurulması
                veya ifasıyla doğrudan ilgili olması, hukuki yükümlülüklerin yerine getirilmesi,
                meşru menfaatlerimiz ve açık rızanız hukuki sebeplerine dayanılarak işlenir.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-black mb-3">6. Veri Saklama Süresi</h2>
              <p className="text-ink/80 leading-relaxed">
                Kişisel verileriniz; ilgili mevzuatta öngörülen süreler boyunca veya işleme
                amacının gerektirdiği süre boyunca saklanır. Müşteri ilişkisi sona erdikten
                sonra, ticari ve hukuki yükümlülüklerimiz kapsamında en fazla <strong>10 yıl</strong> süreyle
                muhafaza edilebilir; bu sürelerin sonunda KVKK&apos;nın 7. maddesi uyarınca silinir,
                yok edilir veya anonim hale getirilir.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-black mb-3">7. KVKK 11. Madde Kapsamındaki Haklarınız</h2>
              <p className="text-ink/80 leading-relaxed mb-3">
                KVKK&apos;nın 11. maddesi uyarınca, veri sorumlusu sıfatıyla PORTZEN&apos;e başvurarak:
              </p>
              <ul className="space-y-2 text-ink/80">
                <li>• Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
                <li>• İşlenmişse buna ilişkin bilgi talep etme</li>
                <li>• İşlenme amacını ve amaca uygun kullanılıp kullanılmadığını öğrenme</li>
                <li>• Yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme</li>
                <li>• Eksik veya yanlış işlenmişse düzeltilmesini isteme</li>
                <li>• Silinmesini veya yok edilmesini isteme</li>
                <li>• İşlemenin münhasıran otomatik sistemlerle analizine itiraz etme</li>
                <li>• Kanuna aykırı işlenme nedeniyle zarara uğradığınızda tazminat talep etme</li>
              </ul>
              <p className="text-ink/80 leading-relaxed mt-3">
                Haklarınıza ilişkin talebinizi <a href="mailto:destek@portzenai.com" className="underline font-bold">destek@portzenai.com</a> adresine
                yazılı olarak iletebilirsiniz. Talepler en geç 30 (otuz) gün içinde
                cevaplandırılır.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-black mb-3">8. Değişiklikler</h2>
              <p className="text-ink/80 leading-relaxed">
                Bu aydınlatma metni güncellenebilir. Güncel sürüm her zaman bu sayfada yayınlanır.
                Önemli değişikliklerde sizi e-posta yoluyla bilgilendireceğiz.
              </p>
            </section>
          </div>
        </Reveal>

        <Reveal delay={400}>
          <div className="mt-12 border-3 border-ink bg-brand-yellow p-6 shadow-brutal flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <div className="font-display text-lg font-black">Bir sorunuz mu var?</div>
              <div className="text-sm text-ink/70">KVKK hakkındaki tüm sorularınız için bize yazın.</div>
            </div>
            <Link
              href="/iletisim"
              className="inline-flex items-center gap-2 border-3 border-ink bg-ink px-5 py-3 text-sm font-bold uppercase text-paper shadow-brutal-sm hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all shrink-0"
            >
              İletişime Geç <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>

        <Reveal delay={500}>
          <div className="mt-8 flex flex-wrap gap-3 text-sm">
            <Link href="/gizlilik-politikasi" className="underline text-ink/70 hover:text-ink">
              Gizlilik Politikası
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
