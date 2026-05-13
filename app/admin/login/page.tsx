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
        <div className="rounded-[2rem] border border-border bg-grain p-8">
          <div className="flex items-center gap-4">
            <BrandMark className="h-14 w-14" />
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent-strong">
                {siteConfig.name}
              </p>
              <p className="mt-2 text-sm text-muted-foreground">Yonetim paneli</p>
            </div>
          </div>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-foreground">
            Sadece admin erisimi
          </h1>
          <p className="mt-5 text-base leading-8 text-muted-foreground">
            Bu panel uzerinden blog iceriklerini olusturabilir, duzenleyebilir ve yayina
            alabilirsiniz. Public uyelik, yorum ve forum yapisi bu ilk surume dahil degildir.
          </p>
        </div>
        <LoginForm />
      </div>
    </Section>
  );
}
