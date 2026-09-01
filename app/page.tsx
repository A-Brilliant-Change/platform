"use client";

import Hero from "@/components/home/Hero";
import AudiencePaths from "@/components/home/AudiencePaths";
import Programs from "@/components/home/Programs";
import ImpactFramework from "@/components/home/ImpactFramework";
import EcosystemPreview from "@/components/home/EcosystemPreview";
import TulsaSection from "@/components/home/TulsaSection";
import FoundersVoice from "@/components/home/FoundersVoice";
import MissionControlSection from "@/components/home/MissionControlSection";
import CredibilitySection from "@/components/home/CredibilitySection";
import CallToAction from "@/components/home/CallToAction";
import EcosystemPulse from "@/components/home/EcosystemPulse";

export default function HomePage() {
  return (
    <>
      <EcosystemPulse />

      <main>
        {/* 01 Hero */}
        <Hero />

        {/* 02 Audience Paths */}
        <AudiencePaths />

        {/* 03 Programs */}
        <Programs />

        {/* 04 Impact Framework */}
        <ImpactFramework />

        {/* 05 Ecosystem */}
        <EcosystemPreview />

        {/* 06 Tulsa */}
        <TulsaSection />

        {/* 07 Founder Story */}
        <FoundersVoice />

        {/* 08 Mission Control */}
        <MissionControlSection />

        {/* 09 Credibility */}
        <CredibilitySection />

        {/* 10 Final CTA */}
        <CallToAction />
      </main>
    </>
  );
}







