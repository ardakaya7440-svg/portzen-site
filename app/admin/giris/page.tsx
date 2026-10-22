import { redirect } from "next/navigation";
import { authConfigError, getSession } from "@/server/auth";
import { LoginForm } from "./LoginForm";

export const dynamic = "force-dynamic";

export default function LoginPage() {
  if (getSession()) redirect("/admin");
  const cfg = authConfigError();
  return (
    <div className="flex min-h-screen items-center justify-center px-4 py-12">
      <div className="w-full max-w-sm rounded-2xl border border-slate/15 bg-white p-7 shadow-card-lg">
        <p className="text-lg font-bold tracking-tight text-slate">
          PORTZEN <span className="ml-1 rounded-full bg-lime px-2 py-0.5 text-[11px] font-bold">Yönetim</span>
        </p>
        <h1 className="mt-6 text-2xl font-bold text-slate">Giriş yapın</h1>
        {cfg ? (
          <p role="alert" className="mt-4 rounded-xl border border-amber-300 bg-amber-50 px-4 py-3 text-sm text-amber-900">
            Yönetici girişi henüz yapılandırılmamış: {cfg} Kurulum için YONETIM-PANELI.md dosyasına bakın.
          </p>
        ) : (
          <LoginForm />
        )}
      </div>
    </div>
  );
}
