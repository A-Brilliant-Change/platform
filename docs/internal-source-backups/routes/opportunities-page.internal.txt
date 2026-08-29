import Link from "next/link";
import { participantEngine } from "@/src/lib/participants";

const result = participantEngine.buildDefaultParticipantResult();

export default function OpportunityMatchingPage() {
  return (
    <main className="min-h-screen bg-[#091B36] px-4 py-10 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl space-y-8">
        <header className="rounded-[28px] border border-[#D4AF37]/30 bg-[#0B1F3A]/80 p-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-[#D4AF37]">Opportunity Matching Center</p>
              <h1 className="mt-4 text-4xl font-light tracking-[-0.06em] text-white sm:text-5xl">
                Best-fit options
              </h1>
            </div>
            <Link href="/cases" className="rounded-full border border-[#D4AF37]/50 bg-[#D4AF37]/10 px-4 py-2 text-[10px] uppercase tracking-[0.2em] text-[#D4AF37]">
              Cases
            </Link>
          </div>
        </header>

        <section className="grid gap-5 xl:grid-cols-2">
          {result.opportunities.map((opportunity) => (
            <article key={opportunity.id} className="rounded-[28px] border border-white/10 bg-[#0D1F3D] p-6">
              <div className="flex items-center justify-between gap-3">
                <p className="text-[10px] uppercase tracking-[0.28em] text-[#D4AF37]">{opportunity.domain}</p>
                <span className="rounded-full border border-[#D4AF37]/50 bg-[#D4AF37]/10 px-3 py-2 text-[10px] uppercase tracking-[0.18em] text-[#D4AF37]">
                  {opportunity.fitScore}% fit
                </span>
              </div>

              <h2 className="mt-4 text-3xl font-light tracking-[-0.05em] text-white">{opportunity.title}</h2>
              <p className="mt-3 text-sm leading-6 text-white/70">{opportunity.rationale}</p>

              <ul className="mt-5 space-y-2 text-sm text-white/70">
                {opportunity.explainability.map((note) => (
                  <li key={note} className="rounded-xl border border-white/10 bg-[#091B36]/60 p-3">
                    {note}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
