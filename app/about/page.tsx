import Link from "next/link";

const corePromises = [
  {
    number: "01",
    title: "See the Potential",
    description: "We recognize inherent capacity, dignity, and possibility in every person and every neighborhood before a single program begins.",
  },
  {
    number: "02",
    title: "Remove Barriers",
    description: "We identify and systematically dismantle structural, logistical, and economic obstacles standing between people and sustainable opportunity.",
  },
  {
    number: "03",
    title: "Create Access",
    description: "We bridge isolated talent to active ecosystems, actionable resources, strategic mentorship, and high-trust relationships.",
  },
  {
    number: "04",
    title: "Build Capacity",
    description: "We cultivate skills, confidence, agency, and leadership so momentum continues to compound long into the future.",
  },
  {
    number: "05",
    title: "Inspire Generations",
    description: "We turn individual milestones into generational wealth, family stability, and enduring community resilience.",
  },
];

const pillars = [
  "Workforce Development",
  "Education",
  "Entrepreneurship",
  "Leadership Development",
  "Economic Mobility",
  "Housing Stability",
  "Resource Navigation",
  "Community Engagement",
  "Innovation & Technology",
  "Community Transformation",
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#091B36] text-white">
      {/* Global Navigation */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#091B36]/75 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#D4AF37]/70 bg-[#D4AF37]/10 text-xs font-bold tracking-[0.2em] text-[#D4AF37]">
              AB
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.28em] text-[#D4AF37]">A Brilliant Change</p>
              <p className="text-xs text-white/60">About Our Mission</p>
            </div>
          </Link>

          <nav className="hidden items-center gap-8 text-sm text-white/75 md:flex">
            <Link href="/" className="transition hover:text-[#D4AF37]">Home</Link>
            <Link href="/atlas" className="transition hover:text-[#D4AF37]">Atlas</Link>
            <Link href="/journey" className="transition hover:text-[#D4AF37]">Journey</Link>
            <Link href="/about" className="text-[#D4AF37]">About</Link>
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

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(212,175,55,0.18),_transparent_45%)]" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="max-w-4xl">
            <p className="text-xs uppercase tracking-[0.38em] text-[#D4AF37]">Our Mission & Philosophy</p>
            <h1 className="mt-5 text-5xl font-light leading-[0.92] tracking-[-0.06em] text-white sm:text-6xl lg:text-7xl">
              Every Opportunity Begins With People™
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/75">
              A Brilliant Change is a transformation ecosystem built on the conviction that human potential is the starting point, not the endpoint. We connect individuals, organizations, and communities to the tools, pathways, and capital needed to unlock durable prosperity.
            </p>
          </div>
        </div>
      </section>

      {/* Origin Story Section */}
      <section className="border-b border-white/10 bg-[#0B1F3A]/60 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-[#D4AF37]">Origin & Proving Ground</p>
              <h2 className="mt-4 text-3xl font-light tracking-[-0.05em] text-white sm:text-4xl lg:text-5xl">
                Rooted in Tulsa. Built for communities everywhere.
              </h2>
              <p className="mt-6 text-base leading-8 text-white/75">
                From the historic resilience of Tulsa, Oklahoma, A Brilliant Change emerged to pioneer a living architecture for community transformation. Tulsa serves as our foundation and demonstration ground—a place where localized talent, grassroots leadership, and civic partnerships converge to build measurable mobility.
              </p>
              <p className="mt-4 text-base leading-8 text-white/75">
                By proving what is possible in one place, we create scalable models, frameworks, and pathways that expand access across regions and inspire national change.
              </p>
            </div>

            <div className="rounded-[30px] border border-[#D4AF37]/30 bg-[#0D1F3D] p-8 shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
              <div className="space-y-6">
                <div className="rounded-2xl border border-white/10 bg-[#091B36]/70 p-5">
                  <p className="text-[10px] uppercase tracking-[0.25em] text-[#D4AF37]">The Core Principle</p>
                  <p className="mt-2 text-xl font-light text-white">Trust as Infrastructure</p>
                  <p className="mt-2 text-sm leading-6 text-white/65">
                    Programs succeed only when trust is treated as fundamental infrastructure rather than an afterthought.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-[#091B36]/70 p-5">
                  <p className="text-[10px] uppercase tracking-[0.25em] text-[#D4AF37]">The Methodology</p>
                  <p className="mt-2 text-xl font-light text-white">Coordinated Transformation</p>
                  <p className="mt-2 text-sm leading-6 text-white/65">
                    We align workforce, housing, education, and venture creation into interconnected, compounding pathways.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5 Core Promises */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.35em] text-[#D4AF37]">Guiding Commitments</p>
            <h2 className="mt-4 text-4xl font-light tracking-[-0.05em] text-white sm:text-5xl">
              Five Core Promises
            </h2>
            <p className="mt-4 text-base text-white/70">
              The foundational commitments that govern every initiative, engagement, and strategy across our platform.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {corePromises.map((promise) => (
              <article
                key={promise.number}
                className="rounded-[26px] border border-white/10 bg-[#0D1F3D]/80 p-6 transition duration-300 hover:-translate-y-1 hover:border-[#D4AF37]/50"
              >
                <span className="inline-block text-xs font-bold tracking-[0.25em] text-[#D4AF37]">
                  {promise.number}
                </span>
                <h3 className="mt-4 text-2xl font-light tracking-[-0.03em] text-white">
                  {promise.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-white/65">
                  {promise.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Transformation Domains Overview */}
      <section className="border-t border-white/10 bg-[#0B1F3A]/40 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.35em] text-[#D4AF37]">Ecosystem Breadth</p>
            <h2 className="mt-4 text-3xl font-light tracking-[-0.05em] text-white sm:text-4xl">
              Ten Transformation Domains
            </h2>
            <p className="mt-4 text-base text-white/70">
              A comprehensive system addressing the full spectrum of community vitality and individual growth.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            {pillars.map((pillar) => (
              <div
                key={pillar}
                className="rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-xs uppercase tracking-[0.16em] text-white/85"
              >
                {pillar}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-white/10 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-[32px] border border-white/10 bg-[linear-gradient(135deg,rgba(212,175,55,0.08),rgba(255,255,255,0.02))] p-8 sm:p-12">
            <p className="text-xs uppercase tracking-[0.35em] text-[#D4AF37]">Join the Movement</p>
            <h2 className="mt-5 max-w-3xl text-4xl font-light tracking-[-0.05em] text-white sm:text-5xl">
              Ready to collaborate, partner, or begin your pathway?
            </h2>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/journey"
                className="inline-flex items-center justify-center rounded-full bg-[#D4AF37] px-6 py-3.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#091B36] transition hover:bg-[#E7C96B]"
              >
                Explore Your Journey
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-[#D4AF37]/50 bg-[#D4AF37]/10 px-6 py-3.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D4AF37] transition hover:bg-[#D4AF37] hover:text-[#091B36]"
              >
                Connect With Us
              </Link>
              <Link
                href="/atlas"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-white transition hover:border-[#D4AF37]/70 hover:text-[#D4AF37]"
              >
                View The Atlas
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

