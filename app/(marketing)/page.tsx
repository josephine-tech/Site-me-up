import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { Transformation } from "@/components/sections/Transformation";
import { Portfolio } from "@/components/sections/Portfolio";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Included } from "@/components/sections/Included";
import { SocialProof } from "@/components/sections/SocialProof";
import { PricingReveal } from "@/components/sections/PricingReveal";
import { LeadCapture } from "@/components/sections/LeadCapture";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Problem />
      <Transformation />
      <Portfolio />
      <HowItWorks />
      <Included />
      <SocialProof />
      <PricingReveal />
      <LeadCapture />
      <FAQ />
      <FinalCTA />
    </>
  );
}
