import { redirect } from "next/navigation";

import { BrandMark } from "@/components/brand/brand-mark";
import { LoginForm } from "@/components/admin/login-form";
import { Section } from "@/components/ui/section";
import { getAdminSession } from "@/lib/auth";
import { siteConfig } from "@/lib/site";

export default async function AdminLoginPage() {
  const session = await getAdminSession();

  if (session) {
    redirect("/admin");
  }

  return (
    <Section className="min-h-[70vh]">
      <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-[2rem] border border-white/[0.08] bg-[#060d1a] p-8">
          <div className="flex items-center gap-4">
            <BrandMark className="h-14 w-14" />
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#00aaff]">
                {siteConfig.name}
              </p>
              <p className="mt-2 text-sm text-white/50">Yonetim paneli</p>
            </div>
          </div>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white/95">
            Sadece admin erisimi
          </h1>
          <p className="mt-5 text-base leading-8 text-white/55">
            Bu panel uzerinden blog iceriklerini olusturabilir, duzenleyebilir ve yayina
            alabilirsiniz. Public uyelik, yorum ve forum yapisi bu ilk surume dahil degildir.
          </p>
          <div className="mt-8 space-y-3">
            {["Blog yonetimi", "İletisim basvurulari", "Hizli icerik olusturma"].map((item) => (
              <div key={item} className="flex items-center gap-3 text-sm text-white/50">
                <div className="h-1.5 w-1.5 rounded-full bg-[#0066ff]" />
                {item}
              </div>
            ))}
          </div>
        </div>
        <LoginForm />
      </div>
    </Section>
  );
}
