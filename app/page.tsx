"use client";

import CanonicalHero from "@/components/home/CanonicalHero";
import PromisePhase from "@/components/home/PromisePhase";
import DomainsPhase from "@/components/home/DomainsPhase";
import PathwaysPhase from "@/components/home/PathwaysPhase";
import EcosystemPreview from "@/components/home/EcosystemPreview";
import FoundersVoice from "@/components/home/FoundersVoice";
import MissionControlSection from "@/components/home/MissionControlSection";
import CallToAction from "@/components/home/CallToAction";
import EcosystemPulse from "@/components/home/EcosystemPulse";

export default function HomePage() {
  return (
    <>
      <EcosystemPulse />

      <main className="pt-20">
        {/* 01 Canonical Hero - Origin Phase */}
        <CanonicalHero />

        {/* 02 Promise Phase */}
        <PromisePhase />

        {/* 03 Domains Phase */}
        <DomainsPhase />

        {/* 04 Pathways Phase */}
        <PathwaysPhase />

        {/* 05 Ecosystem */}
        <EcosystemPreview />

        {/* 06 Founder Story & Phase 01 */}
        <FoundersVoice />

        {/* 07 Mission Control */}
        <MissionControlSection />

        {/* 08 Final CTA */}
        <CallToAction />
      </main>
    </>
  );
}







