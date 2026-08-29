import Link from "next/link";
import { participantEngine } from "@/src/lib/participants";

const result = participantEngine.buildDefaultParticipantResult();

export default function JourneyDashboardPage() {
  return (
    <main className="min-h-screen bg-[#091B36] px-4 py-10 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl space-y-8">
        <header className="rounded-[28px] border border-[#D4AF37]/30 bg-[#0B1F3A]/80 p-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-[#D4AF37]">Journey Dashboard</p>
              <h1 className="mt-4 text-4xl font-light tracking-[-0.06em] text-white sm:text-5xl">
                {result.participant.name}
              </h1>
              <p className="mt-3 max-w-3xl text-base leading-7 text-white/70">{result.participant.primaryGoal}</p>
            </div>
            <div className="flex gap-3">
              <Link href="/participants" className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-[10px] uppercase tracking-[0.2em] text-white/80">
                Participants
              </Link>
              <Link href="/milestones" className="rounded-full border border-[#D4AF37]/50 bg-[#D4AF37]/10 px-4 py-2 text-[10px] uppercase tracking-[0.2em] text-[#D4AF37]">
                Milestones
              </Link>
            </div>
          </div>
        </header>

        <section className="rounded-[28px] border border-white/10 bg-[#0D1F3D] p-6">
          <p className="text-[10px] uppercase tracking-[0.28em] text-[#D4AF37]">Current stage</p>
          <h2 className="mt-3 text-3xl font-light tracking-[-0.05em] text-white">{result.journey.currentStage}</h2>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-white/70">{result.journey.nextBestAction}</p>
        </section>

        <section className="grid gap-4 lg:grid-cols-3">
          {result.journey.steps.map((step) => (
            <article key={step.id} className="rounded-[24px] border border-white/10 bg-[#0D1F3D] p-5">
              <div className="flex items-center justify-between gap-3">
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#D4AF37]">{step.label}</p>
                <span className="rounded-full border border-white/15 bg-white/5 px-2 py-1 text-[9px] uppercase tracking-[0.18em] text-white/80">
                  {step.status}
                </span>
              </div>
              <p className="mt-4 text-sm leading-6 text-white/70">{step.description}</p>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
