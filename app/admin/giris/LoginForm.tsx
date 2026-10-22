"use client";

import { useFormState, useFormStatus } from "react-dom";
import { loginAction } from "../actions";
import { btn, input } from "@/components/admin/ui";

function Submit() {
  const { pending } = useFormStatus();
  return (
    <button type="submit" disabled={pending} className={btn("primary") + " w-full"}>
      {pending ? "Kontrol ediliyor…" : "Giriş yap"}
    </button>
  );
}

export function LoginForm() {
  const [state, action] = useFormState(loginAction, undefined);
  return (
    <form action={action} className="mt-6 flex flex-col gap-4">
      <div className="flex flex-col gap-1.5">
        <label htmlFor="email" className="text-sm font-bold text-slate">
          E-posta
        </label>
        <input id="email" name="email" type="email" autoComplete="username" required className={input} />
      </div>
      <div className="flex flex-col gap-1.5">
        <label htmlFor="password" className="text-sm font-bold text-slate">
          Şifre
        </label>
        <input id="password" name="password" type="password" autoComplete="current-password" required className={input} />
      </div>
      {state?.error && (
        <p role="alert" className="text-sm font-semibold text-red-700">
          {state.error}
        </p>
      )}
      <Submit />
    </form>
  );
}
