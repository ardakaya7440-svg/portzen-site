import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, FileText } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

export const metadata: Metadata = {
  title: "Kullanım Şartları",
  description:
    "PORTZEN — Web sitesi ve hizmet kullanım şartları, taraflar arası sorumluluklar ve uygulanacak hukuk.",
  alternates: { canonical: "https://portzenai.com/kullanim-sartlari" },
  robots: { index: true, follow: true }
};

export default function Page() {
  return (
    <section className="py-section">
      <div className="mx-auto max-w-container px-6 max-w-4xl">
        <Reveal>
          <div className="inline-flex items-center gap-2 border-3 border-ink bg-brand-pink text-paper px-3 py-1 text-xs font-black uppercase tracking-wider mb-3 shadow-brutal-sm">
            <FileText className="h-3 w-3" />
            Yasal Metin
          </div>
        </Reveal>
        <Reveal delay={100}>
          <h1 className="font-display text-h1 font-black leading-[0.95]">
            Kullanım Şartları
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
                Bu Kullanım Şartları (&ldquo;Şartlar&rdquo;), <strong>portzenai.com</strong> web sitesinin
                (&ldquo;Site&rdquo;) ve PORTZEN tarafından sunulan hizmetlerin kullanımını düzenler.
                Siteyi kullanarak veya hizmetlerimizden faydalanarak bu Şartları kabul etmiş sayılırsınız.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-black mb-3">1. Taraflar</h2>
              <p className="text-ink/80 leading-relaxed">
                Bu sözleşme; <strong>PORTZEN</strong> (&ldquo;PORTZEN&rdquo;, &ldquo;biz&rdquo;) ile Site&apos;yi
                ziyaret eden veya hizmetlerimizi kullanan gerçek/tüzel kişiler (&ldquo;Kullanıcı&rdquo;,
                &ldquo;siz&rdquo;) arasında yürürlüğe girer.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-black mb-3">2. Hizmet Kapsamı</h2>
              <p className="text-ink/80 leading-relaxed mb-3">
                PORTZEN aşağıdaki hizmetleri sunmaktadır:
              </p>
              <ul className="space-y-2 text-ink/80">
                <li>• Web tasarım ve geliştirme</li>
                <li>• Sosyal medya yönetimi ve içerik üretimi</li>
                <li>• WhatsApp AI asistanı kurulumu</li>
                <li>• Instagram DM otomasyonu</li>
                <li>• AI reklam videosu üretimi</li>
                <li>• CRM ve iş süreçleri otomasyonu</li>
                <li>• Dijital pazarlama danışmanlığı</li>
              </ul>
              <p className="text-ink/80 leading-relaxed mt-3 text-sm">
                Her hizmet kapsamı, fiyatı ve teslim süresi ayrı bir sözleşme ile belirlenir.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-black mb-3">3. Kullanıcı Yükümlülükleri</h2>
              <p className="text-ink/80 leading-relaxed mb-3">
                Site&apos;yi ve hizmetlerimizi kullanırken:
              </p>
              <ul className="space-y-2 text-ink/80">
                <li>• Sağladığınız bilgilerin doğru, güncel ve eksiksiz olduğunu taahhüt edersiniz</li>
                <li>• Hizmetleri yasal amaçlarla kullanmayı kabul edersiniz</li>
                <li>• Telif hakkı, marka ve diğer fikri mülkiyet haklarına saygı gösterirsiniz</li>
                <li>• Spam, kötü amaçlı yazılım veya yetkisiz erişim girişiminde bulunmazsınız</li>
                <li>• Üçüncü kişilerin haklarını ihlal edecek davranışlardan kaçınırsınız</li>
                <li>• 18 yaşından büyük olduğunuzu veya yasal velinizin onayına sahip olduğunuzu beyan edersiniz</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-2xl font-black mb-3">4. Fikri Mülkiyet Hakları</h2>
              <p className="text-ink/80 leading-relaxed mb-3">
                Site&apos;de yer alan tüm içerikler (metin, logo, görsel, video, kod, tasarım) PORTZEN&apos;e
                veya lisans verenlere aittir ve telif hakkı, marka ve diğer fikri mülkiyet
                yasalarıyla korunur.
              </p>
              <p className="text-ink/80 leading-relaxed">
                İçerikleri yazılı izin almadan kopyalayamaz, çoğaltamaz, dağıtamaz veya
                ticari amaçla kullanamazsınız. Sınırlı sayıda kişisel ve ticari olmayan
                kullanım izin verilebilir.
              </p>
              <p className="text-ink/80 leading-relaxed mt-3">
                <strong>Müşteri çalışmaları:</strong> Sözleşme kapsamında üretilen çalışmaların telif
                hakları, sözleşmede aksi belirtilmediği sürece ödeme tamamlandıktan sonra
                müşteriye devredilir. PORTZEN, çalışmaları portföyünde tanıtım amacıyla
                kullanma hakkını saklı tutar.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-black mb-3">5. Hizmet Kullanım Kuralları</h2>
              <p className="text-ink/80 leading-relaxed mb-3">
                Hizmetlerimizi kullanırken aşağıdakileri yapmamayı kabul edersiniz:
              </p>
              <ul className="space-y-2 text-ink/80">
                <li>• Yasalara aykırı içerik üretme veya yayma</li>
                <li>• Üçüncü kişilere ait verileri rıza olmaksızın kullanma</li>
                <li>• Sistemlere yetkisiz erişim, tersine mühendislik veya hack girişimi</li>
                <li>• Hizmetleri spam, kandırma veya manipülasyon amacıyla kullanma</li>
                <li>• PORTZEN markasını ve itibarını zedeleyecek davranışlar</li>
              </ul>
              <p className="text-ink/80 leading-relaxed mt-3">
                Bu kurallara aykırı davranış tespit edilirse, hizmet ihtarsız olarak askıya
                alınabilir veya sonlandırılabilir.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-black mb-3">6. Sorumluluk Reddi</h2>
              <p className="text-ink/80 leading-relaxed">
                Site ve hizmetler &ldquo;olduğu gibi&rdquo; sunulmaktadır. PORTZEN, hizmetlerin kesintisiz,
                hatasız veya belirli bir amaca uygun olacağını garanti etmez.
              </p>
              <p className="text-ink/80 leading-relaxed mt-3">
                Üçüncü taraf servislerin (Google, Meta, WhatsApp, vb.) politika değişiklikleri,
                kesintileri veya hata kaynaklı sorunlardan PORTZEN sorumlu tutulamaz.
                Pazarlama sonuçları (satış, dönüşüm, takipçi sayısı) garanti edilemez;
                sonuçlar sektör, ürün ve pazar koşullarına bağlıdır.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-black mb-3">7. Sorumluluk Sınırlaması</h2>
              <p className="text-ink/80 leading-relaxed">
                PORTZEN, hiçbir koşulda dolaylı, arızi, özel, cezai veya sonuçsal zararlardan
                (kar kaybı, veri kaybı, iş kesintisi) sorumlu değildir. Toplam sorumluluğumuz,
                ilgili hizmet için son 12 ay içinde ödediğiniz toplam tutarla sınırlıdır.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-black mb-3">8. Ödeme ve İade</h2>
              <p className="text-ink/80 leading-relaxed">
                Hizmet ödemeleri, ayrı olarak imzalanan sözleşmede belirtilen koşullara göre yapılır.
                İade koşulları her hizmet için ayrı belirlenir ve sözleşmede yer alır. Genel olarak,
                başlanmış işler için iade yapılmaz; ancak müşteri memnuniyeti önceliğimizdir ve
                anlaşmazlıklarda her iki tarafın menfaatine çözüm bulunmaya çalışılır.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-black mb-3">9. Hizmet Değişiklik ve Durdurma</h2>
              <p className="text-ink/80 leading-relaxed">
                PORTZEN, herhangi bir zamanda hizmetlerinde değişiklik yapma, ekleme veya
                kaldırma hakkını saklı tutar. Önemli değişiklikler kullanıcılara önceden
                duyurulacaktır.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-black mb-3">10. Mücbir Sebep</h2>
              <p className="text-ink/80 leading-relaxed">
                Doğal afet, savaş, salgın hastalık, siber saldırı, hükümet kararı veya benzeri
                kontrol dışı olaylar nedeniyle hizmetlerin sağlanamaması durumunda PORTZEN
                sorumlu tutulamaz.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-black mb-3">11. Sözleşmenin Feshi</h2>
              <p className="text-ink/80 leading-relaxed">
                Her iki taraf da, sözleşmede belirtilen koşullara uyulmadığı takdirde sözleşmeyi
                feshetme hakkına sahiptir. Fesih durumunda tamamlanmış işlere ait ödemeler
                muaccel hale gelir.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-black mb-3">12. Uygulanacak Hukuk ve Yetki</h2>
              <p className="text-ink/80 leading-relaxed">
                Bu Şartlar <strong>Türkiye Cumhuriyeti yasalarına</strong> tabidir. Taraflar arasında
                doğabilecek her türlü anlaşmazlıkta <strong>İzmir Mahkemeleri ve İcra Daireleri</strong>
                yetkilidir.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-black mb-3">13. Değişiklikler</h2>
              <p className="text-ink/80 leading-relaxed">
                PORTZEN bu Şartları değiştirme hakkını saklı tutar. Önemli değişiklikler Site&apos;de
                yayınlanır ve yayın tarihinden itibaren yürürlüğe girer. Değişikliklerden sonra
                Site&apos;yi kullanmaya devam etmeniz, güncel Şartları kabul ettiğiniz anlamına gelir.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-black mb-3">14. İletişim</h2>
              <p className="text-ink/80 leading-relaxed">
                Kullanım Şartları hakkındaki sorularınız için:
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
          <div className="mt-12 border-3 border-ink bg-brand-pink text-paper p-6 shadow-brutal flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <div className="font-display text-lg font-black">Çalışma sözleşmesi mi konuşalım?</div>
              <div className="text-sm opacity-90">Hizmet detaylarınız için iletişime geçin.</div>
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
            <Link href="/gizlilik-politikasi" className="underline text-ink/70 hover:text-ink">
              Gizlilik Politikası
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
