import Link from "next/link";
import { participantEngine } from "@/src/lib/participants";

const result = participantEngine.buildDefaultParticipantResult();

export default function CaseNavigationWorkspacePage() {
  return (
    <main className="min-h-screen bg-[#091B36] px-4 py-10 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl space-y-8">
        <header className="rounded-[28px] border border-[#D4AF37]/30 bg-[#0B1F3A]/80 p-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-[#D4AF37]">Case Navigation Workspace</p>
              <h1 className="mt-4 text-4xl font-light tracking-[-0.06em] text-white sm:text-5xl">
                {result.caseSummary.title}
              </h1>
            </div>
            <Link href="/participants" className="rounded-full border border-[#D4AF37]/50 bg-[#D4AF37]/10 px-4 py-2 text-[10px] uppercase tracking-[0.2em] text-[#D4AF37]">
              Dashboard
            </Link>
          </div>
        </header>

        <section className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-[28px] border border-white/10 bg-[#0D1F3D] p-6">
            <p className="text-[10px] uppercase tracking-[0.28em] text-[#D4AF37]">Summary</p>
            <h2 className="mt-3 text-3xl font-light tracking-[-0.05em] text-white">Case overview</h2>
            <p className="mt-4 text-sm leading-7 text-white/70">{result.caseSummary.summary}</p>

            <div className="mt-6 space-y-3">
              {result.caseSummary.keyDecisions.map((decision) => (
                <div key={decision} className="rounded-2xl border border-white/10 bg-[#091B36]/60 p-3 text-sm text-white/70">
                  {decision}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-[#0D1F3D] p-6">
            <p className="text-[10px] uppercase tracking-[0.28em] text-[#D4AF37]">Next action</p>
            <h3 className="mt-3 text-2xl font-light text-white">{result.caseSummary.nextAction}</h3>
            <div className="mt-5 space-y-3">
              {result.caseSummary.explanatoryNotes.map((note) => (
                <div key={note} className="rounded-2xl border border-white/10 bg-[#091B36]/60 p-3 text-sm text-white/70">
                  {note}
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
