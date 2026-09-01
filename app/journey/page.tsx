import Link from "next/link";
import { participantEngine } from "@/lib/participants";

const result = participantEngine.buildDefaultParticipantResult();

export default function JourneyDashboardPage() {
  return (
    <main className="min-h-screen bg-[#091B36] text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#091B36]/75 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#D4AF37]/70 bg-[#D4AF37]/10 text-xs font-bold tracking-[0.2em] text-[#D4AF37]">
              AB
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.28em] text-[#D4AF37]">A Brilliant Change</p>
              <p className="text-xs text-white/60">Journey Platform</p>
            </div>
          </Link>

          <nav className="hidden items-center gap-8 text-sm text-white/75 md:flex">
            <Link href="/" className="transition hover:text-[#D4AF37]">Home</Link>
            <Link href="/atlas" className="transition hover:text-[#D4AF37]">Atlas</Link>
            <Link href="/journey" className="text-[#D4AF37]">Journey</Link>
            <Link href="/about" className="transition hover:text-[#D4AF37]">About</Link>
            <Link href="/contact" className="transition hover:text-[#D4AF37]">Contact</Link>
          </nav>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full border border-[#D4AF37]/60 bg-[#D4AF37] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#091B36] transition hover:bg-[#E4C868]"
          >
            Connect
          </Link>
        </div>
      </header>

      <div className="mx-auto max-w-7xl space-y-8 px-4 py-10 sm:px-6 lg:px-8">
        <header className="rounded-[28px] border border-[#D4AF37]/30 bg-[#0B1F3A]/80 p-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-[#D4AF37]">Opportunity Pathway</p>
              <h1 className="mt-4 text-4xl font-light tracking-[-0.06em] text-white sm:text-5xl">
                {result.participant.name}
              </h1>
              <p className="mt-3 max-w-3xl text-base leading-7 text-white/70">{result.participant.primaryGoal}</p>
            </div>
            <div className="flex gap-3">
              <Link href="/atlas" className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-[10px] uppercase tracking-[0.2em] text-white/80 transition hover:border-[#D4AF37]/60 hover:text-white">
                Explore Atlas
              </Link>
              <Link href="/contact" className="rounded-full border border-[#D4AF37]/50 bg-[#D4AF37]/10 px-4 py-2 text-[10px] uppercase tracking-[0.2em] text-[#D4AF37] transition hover:bg-[#D4AF37] hover:text-[#091B36]">
                Get Support
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







