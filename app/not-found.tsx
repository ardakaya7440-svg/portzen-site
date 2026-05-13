import { ButtonLink } from "@/components/ui/button";
import { Section } from "@/components/ui/section";

export default function NotFound() {
  return (
    <Section className="scene-dark min-h-[60vh]">
      <div className="mx-auto max-w-2xl rounded-[2.25rem] border border-white/[0.06] bg-white/[0.02] p-10 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#00d4ff]/60">
          404
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white">
          Aradığınız sayfayı bulamadık
        </h1>
        <p className="mt-4 text-base leading-7 text-white/50">
          Sayfa taşınmış, kaldırılmış ya da bağlantı hatalı olabilir. Ana sayfaya dönerek devam
          edebilirsiniz.
        </p>
        <div className="mt-8 flex justify-center">
          <ButtonLink href="/" className="bg-[#0066ff] text-white hover:bg-[#0055dd]">Ana sayfaya dön</ButtonLink>
        </div>
      </div>
    </Section>
  );
}
