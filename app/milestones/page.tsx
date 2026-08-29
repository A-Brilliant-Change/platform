import Link from "next/link";
import { participantEngine } from "@/src/lib/participants";

const result = participantEngine.buildDefaultParticipantResult();

export default function MilestoneTrackerPage() {
  return (
    <main className="min-h-screen bg-[#091B36] px-4 py-10 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl space-y-8">
        <header className="rounded-[28px] border border-[#D4AF37]/30 bg-[#0B1F3A]/80 p-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-[#D4AF37]">Milestone Tracker</p>
              <h1 className="mt-4 text-4xl font-light tracking-[-0.06em] text-white sm:text-5xl">
                Progress and momentum
              </h1>
            </div>
            <Link href="/opportunities" className="rounded-full border border-[#D4AF37]/50 bg-[#D4AF37]/10 px-4 py-2 text-[10px] uppercase tracking-[0.2em] text-[#D4AF37]">
              Opportunities
            </Link>
          </div>
        </header>

        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {result.milestones.map((milestone) => (
            <article key={milestone.id} className="rounded-[24px] border border-white/10 bg-[#0D1F3D] p-5">
              <div className="flex items-center justify-between gap-3">
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#D4AF37]">{milestone.status}</p>
                <span className="rounded-full border border-white/15 bg-white/5 px-2 py-1 text-[9px] uppercase tracking-[0.18em] text-white/80">
                  Track
                </span>
              </div>
              <h2 className="mt-3 text-2xl font-light text-white">{milestone.label}</h2>
              <p className="mt-3 text-sm leading-6 text-white/70">{milestone.description}</p>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
