"use client";

import { useActionState } from "react";

import { loginAction, type FormState } from "@/lib/actions";
import { Button } from "@/components/ui/button";
import { Input, Label } from "@/components/ui/form-fields";

const initialState: FormState = {};

export function LoginForm() {
  const [state, action, pending] = useActionState(loginAction, initialState);

  return (
    <form action={action} className="rounded-[2rem] border border-white/[0.08] bg-[#060d1a] p-8">
      <div>
        <Label htmlFor="username">Kullanici adi</Label>
        <Input autoComplete="username" id="username" name="username" required />
      </div>
      <div className="mt-5">
        <Label htmlFor="password">Sifre</Label>
        <Input autoComplete="current-password" id="password" name="password" required type="password" />
      </div>
      {state.error ? (
        <p className="mt-4 rounded-2xl bg-red-500/10 px-4 py-3 text-sm font-medium text-red-400">
          {state.error}
        </p>
      ) : null}
      <Button className="mt-6" disabled={pending} fullWidth size="lg" type="submit">
        {pending ? "Giris yapiliyor..." : "Admin girisi yap"}
      </Button>
    </form>
  );
}
