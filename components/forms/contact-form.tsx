"use client";

import { useActionState, useEffect, useRef } from "react";

import { submitContactAction, type FormState } from "@/lib/actions";
import { Button } from "@/components/ui/button";
import { Input, Label, Textarea } from "@/components/ui/form-fields";

const initialState: FormState = {};

export function ContactForm() {
  const [state, action, pending] = useActionState(submitContactAction, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.success) {
      formRef.current?.reset();
    }
  }, [state.success]);

  return (
    <form
      action={action}
      className="rounded-[2rem] border border-white/[0.06] bg-white/[0.02] p-6 sm:p-8"
      ref={formRef}
    >
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#00d4ff]/60">
          Hızlı iletişim
        </p>
        <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white">
          Bilgilerinizi bırakın, size dönelim
        </h2>
        <p className="mt-3 text-sm leading-7 text-white/50">
          Mesaj yazmak zorunda değilsiniz. Adınız ve iletişim bilginiz yeterli; uygun olduğumuzda
          size geri ulaşalım.
        </p>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="mt-6">
          <Label htmlFor="name">Ad Soyad</Label>
          <Input id="name" name="name" placeholder="Adiniz ve soyadiniz" required />
        </div>
        <div className="mt-6">
          <Label htmlFor="company" optional>
            Sirket
          </Label>
          <Input id="company" name="company" placeholder="Sirket adiniz" />
        </div>
        <div>
          <Label htmlFor="email">E-posta</Label>
          <Input id="email" name="email" placeholder="ornek@sirketiniz.com" required type="email" />
        </div>
        <div>
          <Label htmlFor="phone" optional>
            Telefon
          </Label>
          <Input id="phone" name="phone" placeholder="+90 5xx xxx xx xx" />
        </div>
      </div>
      <div className="mt-5">
        <Label htmlFor="message" optional>
          Mesaj
        </Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Isterseniz kisaca not birakabilirsiniz."
        />
      </div>
      {state.error ? <p className="mt-4 text-sm font-medium text-[#b42318]">{state.error}</p> : null}
      {state.success ? <p className="mt-4 text-sm font-medium text-success">{state.success}</p> : null}
      <Button className="mt-6" disabled={pending} size="lg" type="submit">
        {pending ? "Gonderiliyor..." : "Bilgilerimi Gonder"}
      </Button>
    </form>
  );
}
