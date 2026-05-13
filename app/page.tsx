import { CinematicHero } from "@/components/sections/cinematic-hero";
import { PoseidonStory } from "@/components/sections/poseidon-story";
import { ComputerZoom } from "@/components/sections/computer-zoom";
import { ServicesNew } from "@/components/sections/services-new";
import { PackagesNew } from "@/components/sections/packages-new";
import { AutomationsNew } from "@/components/sections/automations-new";
import { ProcessNew } from "@/components/sections/process-new";
import { SocialProofNew } from "@/components/sections/social-proof-new";
import { FaqNew } from "@/components/sections/faq-new";
import { FinalCtaNew } from "@/components/sections/final-cta-new";

export default function HomePage() {
  return (
    <div className="bg-[#020818]">
      <CinematicHero />
      <PoseidonStory />
      <ComputerZoom />
      <ServicesNew />
      <PackagesNew />
      <AutomationsNew />
      <ProcessNew />
      <SocialProofNew />
      <FaqNew />
      <FinalCtaNew />
    </div>
  );
}
