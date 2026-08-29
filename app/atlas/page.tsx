import Link from "next/link";

const atlasPillars = [
  {
    title: "Workforce Development",
    summary: "Career pathways, mobility coaching, and practical employer alignment.",
  },
  {
    title: "Education",
    summary: "Learning ecosystems designed to unlock capability and confidence.",
  },
  {
    title: "Entrepreneurship",
    summary: "Ideas become ventures, ownership, and neighborhood-level growth.",
  },
  {
    title: "Leadership Development",
    summary: "Leaders are cultivated through clarity, accountability, and vision.",
  },
  {
    title: "Economic Mobility",
    summary: "Systems designed to increase income, stability, and opportunity.",
  },
  {
    title: "Housing Stability",
    summary: "A foundation for resilience, dignity, and future mobility.",
  },
  {
    title: "Resource Navigation",
    summary: "Actionable access to support, services, and strategic guidance.",
  },
  {
    title: "Community Engagement",
    summary: "Trust-building activates shared ownership and local momentum.",
  },
  {
    title: "Innovation & Technology",
    summary: "Digital tools and modern strategy accelerate real-world impact.",
  },
  {
    title: "Community Transformation",
    summary: "Systems change that holds long-term, measurable community value.",
  },
];

const frameworkSignals = [
  "People first strategy",
  "Opportunity mapped to outcomes",
  "Localized ecosystem design",
  "Metrics that matter",
  "Trust as infrastructure",
];

export default function AtlasPage() {
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
              <p className="text-xs text-white/60">Transformation Atlas</p>
            </div>
          </Link>

          <nav className="hidden items-center gap-8 text-sm text-white/75 md:flex">
            <Link href="/" className="transition hover:text-[#D4AF37]">Home</Link>
            <Link href="/atlas" className="transition hover:text-[#D4AF37]">Atlas</Link>
          </nav>

          <Link
            href="/#join"
            className="inline-flex items-center justify-center rounded-full border border-[#D4AF37]/60 bg-[#D4AF37] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#091B36] transition hover:bg-[#E4C868]"
          >
            Join Us
          </Link>
        </div>
      </header>

      <section className="relative overflow-hidden border-b border-white/10">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/placeholders/master-atlas.jpg')" }}
        />
        <div className="absolute inset-0 bg-[#091B36]/82" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(212,175,55,0.18),_transparent_42%)]" />

        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="max-w-4xl">
            <p className="text-xs uppercase tracking-[0.38em] text-[#D4AF37]">Master transformation atlas</p>
            <h1 className="mt-5 text-5xl font-light leading-[0.92] tracking-[-0.06em] text-white sm:text-6xl lg:text-[6rem]">
              The Atlas of Human Potential
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75">
              We map opportunity as a living system — connecting people, institutions, services, and momentum into pathways that lead to lasting change.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mb-12 max-w-3xl">
          <p className="text-xs uppercase tracking-[0.36em] text-[#D4AF37]">Ten pathways</p>
          <h2 className="mt-4 text-4xl font-light tracking-[-0.05em] text-white sm:text-5xl">
            One ecosystem. Ten domains. Endless possibility.
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-5">
          {atlasPillars.map((pillar, index) => (
            <article
              key={pillar.title}
              className="rounded-[26px] border border-white/10 bg-[linear-gradient(180deg,rgba(14,29,50,0.82),rgba(9,27,54,0.72))] p-5 shadow-[0_16px_36px_rgba(0,0,0,0.18)] transition duration-300 hover:-translate-y-1 hover:border-[#D4AF37]/60"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#D4AF37]/65 bg-[#D4AF37]/10 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <span className="h-2 w-2 rounded-full bg-[#D4AF37] shadow-[0_0_12px_rgba(212,175,55,0.8)]" />
              </div>
              <h3 className="mt-7 text-xl font-light tracking-[-0.04em] text-white">{pillar.title}</h3>
              <p className="mt-3 text-sm leading-6 text-white/65">{pillar.summary}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-white/10 bg-[#0C1E38]">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <p className="text-xs uppercase tracking-[0.36em] text-[#D4AF37]">What we measure</p>
            <h2 className="mt-4 text-4xl font-light tracking-[-0.05em] text-white sm:text-5xl">
              Signals of meaningful movement.
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {frameworkSignals.map((signal) => (
              <div key={signal} className="rounded-[22px] border border-white/10 bg-white/3 p-5">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#D4AF37]/50 bg-[#D4AF37]/10 text-[#D4AF37]">
                  ✦
                </div>
                <p className="text-lg font-light tracking-[-0.02em] text-white">{signal}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="rounded-[30px] border border-white/10 bg-[linear-gradient(135deg,rgba(212,175,55,0.08),rgba(255,255,255,0.02))] p-8 sm:p-12">
          <p className="text-xs uppercase tracking-[0.36em] text-[#D4AF37]">Next step</p>
          <h2 className="mt-5 max-w-3xl text-4xl font-light tracking-[-0.05em] text-white sm:text-5xl">
            Explore the system and begin building your next opportunity.
          </h2>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/#journey"
              className="inline-flex items-center justify-center rounded-full bg-[#D4AF37] px-6 py-3.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#091B36] transition hover:bg-[#E7C96B]"
            >
              Explore Your Path
            </Link>
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-white transition hover:border-[#D4AF37]/70 hover:text-[#D4AF37]"
            >
              Back Home
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
