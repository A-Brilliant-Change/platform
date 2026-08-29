import Link from "next/link";
import { participantEngine } from "@/src/lib/participants";

const participants = participantEngine.getParticipantDirectory();
const defaultResult = participantEngine.buildDefaultParticipantResult();

export default function ParticipantDashboardPage() {
  return (
    <main className="min-h-screen bg-[#091B36] px-4 py-10 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl space-y-8">
        <header className="rounded-[28px] border border-[#D4AF37]/30 bg-[#0B1F3A]/80 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.2)]">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-[#D4AF37]">Participant Intelligence Platform™</p>
              <h1 className="mt-4 text-4xl font-light tracking-[-0.06em] text-white sm:text-5xl">
                Participant Dashboard
              </h1>
              <p className="mt-3 max-w-3xl text-base leading-7 text-white/70">
                A people-first operating view for workforce, entrepreneurship, leadership, housing, and community transformation pathways.
              </p>
            </div>
            <div className="flex gap-3">
              <Link href="/" className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-[10px] uppercase tracking-[0.2em] text-white/80">
                Home
              </Link>
              <Link href="/journey" className="rounded-full border border-[#D4AF37]/50 bg-[#D4AF37]/10 px-4 py-2 text-[10px] uppercase tracking-[0.2em] text-[#D4AF37]">
                Journey
              </Link>
            </div>
          </div>
        </header>

        <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          <article className="rounded-[24px] border border-white/10 bg-white/3 p-5">
            <p className="text-[10px] uppercase tracking-[0.28em] text-[#D4AF37]">Active participants</p>
            <h2 className="mt-3 text-3xl font-light text-white">{participants.length}</h2>
            <p className="mt-2 text-sm text-white/60">Across multiple transformation use cases.</p>
          </article>

          <article className="rounded-[24px] border border-white/10 bg-white/3 p-5">
            <p className="text-[10px] uppercase tracking-[0.28em] text-[#D4AF37]">Primary use cases</p>
            <h2 className="mt-3 text-3xl font-light text-white">5</h2>
            <p className="mt-2 text-sm text-white/60">Workforce, entrepreneurship, leadership, housing, community.</p>
          </article>

          <article className="rounded-[24px] border border-white/10 bg-white/3 p-5">
            <p className="text-[10px] uppercase tracking-[0.28em] text-[#D4AF37]">Current readiness</p>
            <h2 className="mt-3 text-3xl font-light text-white">{defaultResult.profile.readiness}%</h2>
            <p className="mt-2 text-sm text-white/60">Based on strengths, stage, and current supports.</p>
          </article>

          <article className="rounded-[24px] border border-white/10 bg-white/3 p-5">
            <p className="text-[10px] uppercase tracking-[0.28em] text-[#D4AF37]">Explainability</p>
            <h2 className="mt-3 text-3xl font-light text-white">Active</h2>
            <p className="mt-2 text-sm text-white/60">Every recommendation remains traceable and human-readable.</p>
          </article>
        </section>

        <section className="rounded-[28px] border border-white/10 bg-[#0D1F3D] p-6">
          <div className="mb-5 flex items-center justify-between gap-3">
            <div>
              <p className="text-[10px] uppercase tracking-[0.28em] text-[#D4AF37]">Directory</p>
              <h2 className="mt-2 text-3xl font-light tracking-[-0.05em] text-white">Participants</h2>
            </div>
            <Link href="/opportunities" className="rounded-full border border-[#D4AF37]/50 bg-[#D4AF37]/10 px-4 py-2 text-[10px] uppercase tracking-[0.2em] text-[#D4AF37]">
              Matching center
            </Link>
          </div>

          <div className="grid gap-4 xl:grid-cols-2">
            {participants.map((participant) => (
              <article key={participant.id} className="rounded-[24px] border border-white/10 bg-[#091B36]/60 p-5">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.24em] text-[#D4AF37]">{participant.useCase}</p>
                    <h3 className="mt-2 text-2xl font-light text-white">{participant.name}</h3>
                  </div>
                  <span className="rounded-full border border-[#D4AF37]/40 bg-[#D4AF37]/10 px-3 py-2 text-[10px] uppercase tracking-[0.2em] text-[#D4AF37]">
                    {participant.currentStage}
                  </span>
                </div>

                <p className="mt-4 text-sm leading-6 text-white/70">{participant.primaryGoal}</p>

                <div className="mt-5 grid gap-2 sm:grid-cols-2">
                  <div className="rounded-xl border border-white/10 bg-white/3 p-3">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-white/60">Readiness</p>
                    <p className="mt-2 text-xl font-light text-white">{participant.readiness}%</p>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/3 p-3">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-white/60">Region</p>
                    <p className="mt-2 text-xl font-light text-white">{participant.region}</p>
                  </div>
                </div>

                <div className="mt-5 space-y-2">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-white/55">Strengths</p>
                  <div className="flex flex-wrap gap-2">
                    {participant.strengths.map((strength) => (
                      <span key={strength} className="rounded-full border border-white/10 bg-white/3 px-2.5 py-1.5 text-[10px] uppercase tracking-[0.15em] text-white/70">
                        {strength}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
