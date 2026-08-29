"use client";

import { motion } from "framer-motion";

const navItems = ["Atlas", "Domains", "Journey", "Infrastructure"];

const domains = [
  {
    title: "Workforce Development",
    description: "Build career pathways that connect talent to sustainable opportunity.",
  },
  {
    title: "Education",
    description: "Create momentum through learning, mentorship, and lifelong advancement.",
  },
  {
    title: "Entrepreneurship",
    description: "Turn ideas into ventures, ownership, and resilient local enterprise.",
  },
  {
    title: "Leadership Development",
    description: "Cultivate the confidence and capacity to lead with clarity and purpose.",
  },
  {
    title: "Economic Mobility",
    description: "Expand the systems that unlock income growth, stability, and dignity.",
  },
  {
    title: "Housing Stability",
    description: "Create secure foundations that allow families and communities to thrive.",
  },
  {
    title: "Resource Navigation",
    description: "Guide people to the tools, services, and support they need to move forward.",
  },
  {
    title: "Community Engagement",
    description: "Strengthen local trust, participation, and shared ownership of progress.",
  },
  {
    title: "Innovation & Technology",
    description: "Apply modern tools to solve practical barriers and scale meaningful impact.",
  },
  {
    title: "Community Transformation",
    description: "Align neighborhoods, institutions, and leaders around durable change.",
  },
];

const journeyStages = [
  "Discover",
  "Assess",
  "Prepare",
  "Connect",
  "Thrive",
  "Lead",
];

const infrastructureLayers = [
  {
    title: "People",
    copy: "Human potential is the starting point, not the endpoint.",
  },
  {
    title: "Engagement Systems",
    copy: "Trust-based relationships and coordinated support create momentum.",
  },
  {
    title: "Transformation Engines",
    copy: "Program design, strategy, and operations turn intention into action.",
  },
  {
    title: "Opportunity Network",
    copy: "Partnerships, resources, and pathways connect people to real possibilities.",
  },
  {
    title: "Outcomes",
    copy: "The result is stable lives, shared prosperity, and lasting community resilience.",
  },
];

const impactMetrics = [
  { value: "10", label: "Transformation domains" },
  { value: "6", label: "Opportunity stages" },
  { value: "∞", label: "Potential unlocked" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#091B36] text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#091B36]/75 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#D4AF37]/70 bg-[#D4AF37]/10 text-xs font-bold tracking-[0.2em] text-[#D4AF37]">
              AB
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.28em] text-[#D4AF37]">A Brilliant Change</p>
              <p className="text-xs text-white/60">Transformation Platform</p>
            </div>
          </div>

          <nav className="hidden items-center gap-8 text-sm text-white/75 md:flex">
            {navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="transition hover:text-[#D4AF37]">
                {item}
              </a>
            ))}
          </nav>

          <a
            href="#join"
            className="inline-flex items-center justify-center rounded-full border border-[#D4AF37]/60 bg-[#D4AF37] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#091B36] transition hover:bg-[#E4C868]"
          >
            Join Us
          </a>
        </div>
      </header>

      <main>
        <section id="hero" className="relative isolate overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/images/placeholders/ceiling-hero.jpg')" }}
          />
          <div className="absolute inset-0 bg-[#091B36]/78" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(212,175,55,0.22),_transparent_40%)]" />

          {Array.from({ length: 18 }).map((_, index) => (
            <span
              key={index}
              className="particle"
              style={{
                left: `${(index * 17) % 100}%`,
                top: `${(index * 29) % 100}%`,
                animationDelay: `${index * 0.7}s`,
                animationDuration: `${4 + (index % 6)}s`,
              }}
            />
          ))}

          <div className="relative mx-auto flex max-w-7xl flex-col gap-10 px-4 pb-20 pt-12 sm:px-6 lg:px-8 lg:pb-28 lg:pt-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="max-w-3xl"
            >
              <p className="mb-5 text-xs uppercase tracking-[0.38em] text-[#D4AF37]">Transformation platform</p>
              <h1 className="text-5xl font-light leading-[0.9] tracking-[-0.06em] text-white sm:text-6xl lg:text-8xl">
                A Brilliant Change™
              </h1>
              <p className="mt-5 text-2xl font-light tracking-[-0.04em] text-[#F9F3DF] sm:text-3xl">
                Every Opportunity Begins With People™
              </p>
              <p className="mt-6 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
                From Tulsa, Oklahoma to communities everywhere, we connect people to opportunity through workforce development, education, entrepreneurship, leadership growth, housing stability, resource navigation, innovation, and community transformation.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#journey"
                  className="inline-flex items-center justify-center rounded-full bg-[#D4AF37] px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#091B36] shadow-[0_0_24px_rgba(212,175,55,0.35)] transition hover:bg-[#E7C96B]"
                >
                  Explore Your Path
                </a>
                <a
                  href="#atlas"
                  className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/5 px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:border-[#D4AF37]/70 hover:text-[#D4AF37]"
                >
                  Explore The Atlas
                </a>
              </div>

              <div className="mt-10 flex flex-wrap gap-6 sm:gap-10">
                {impactMetrics.map((metric) => (
                  <div key={metric.label} className="min-w-[120px]">
                    <div className="text-2xl font-light tracking-[-0.05em] text-[#D4AF37] sm:text-3xl">{metric.value}</div>
                    <div className="mt-1 text-[10px] uppercase tracking-[0.26em] text-white/60">{metric.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="relative ml-auto w-full max-w-md rounded-[28px] border border-white/15 bg-[#0B1F3A]/70 p-4 shadow-[0_40px_90px_rgba(5,10,20,0.45)] backdrop-blur-md"
            >
              <div className="absolute -left-8 top-8 hidden h-32 w-32 rounded-full bg-[#D4AF37]/25 blur-3xl sm:block" />
              <div
                className="relative overflow-hidden rounded-[22px] border border-[#D4AF37]/40"
                style={{
                  backgroundImage: "url('/images/placeholders/people-first-hero.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  minHeight: "360px",
                }}
              >
                <div className="flex min-h-[360px] flex-col justify-between bg-gradient-to-t from-[#091B36] via-[#091B36]/20 to-transparent p-5">
                  <div className="flex justify-between text-[10px] uppercase tracking-[0.28em] text-white/70">
                    <span>Opportunity map</span>
                    <span>01 / 06</span>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-[#D4AF37]">
                      <span className="inline-block h-2 w-2 rounded-full bg-[#D4AF37] shadow-[0_0_14px_rgba(212,175,55,0.9)]" />
                      <span className="text-[10px] uppercase tracking-[0.24em]">Live pathways</span>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-[#091B36]/55 p-4 backdrop-blur-sm">
                      <p className="text-xs uppercase tracking-[0.2em] text-white/55">Pathway</p>
                      <p className="mt-2 text-2xl font-light tracking-[-0.04em] text-white">From aspiration to ownership</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="relative mx-auto flex max-w-7xl items-center justify-center pb-12 sm:pb-16">
            <div className="heartbeat-wrap">
              <span className="heartbeat-dot" />
              <span className="heartbeat-line" />
            </div>
          </div>
        </section>

        <section id="atlas" className="relative overflow-hidden border-t border-white/10">
          <div
            className="absolute inset-0 bg-cover bg-center grayscale"
            style={{ backgroundImage: "url('/images/placeholders/domain-explorer.jpg')" }}
          />
          <div className="absolute inset-0 bg-[#091B36]/82" />

          <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
            <div className="max-w-4xl">
              <p className="text-xs uppercase tracking-[0.36em] text-[#D4AF37]">The atlas</p>
              <h2 className="mt-4 text-4xl font-light tracking-[-0.05em] text-white sm:text-5xl lg:text-6xl">
                One Heart. Ten Pathways. Unlimited Potential.
              </h2>
            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-5">
              {domains.map((domain, index) => (
                <motion.article
                  key={domain.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: index * 0.04 }}
                  whileHover={{ y: -8, scale: 1.01 }}
                  className="domain-card"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#D4AF37]/60 bg-[#D4AF37]/10 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <span className="h-2 w-2 rounded-full bg-[#D4AF37] shadow-[0_0_12px_rgba(212,175,55,0.8)]" />
                  </div>

                  <h3 className="mt-7 text-xl font-light tracking-[-0.04em] text-white">{domain.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/65">{domain.description}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section id="journey" className="relative overflow-hidden border-t border-white/10">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/images/placeholders/opportunity-journey.jpg')" }}
          />
          <div className="absolute inset-0 bg-[#091B36]/76" />

          <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
            <div className="max-w-3xl">
              <p className="text-xs uppercase tracking-[0.36em] text-[#D4AF37]">Your path</p>
              <h2 className="mt-4 text-4xl font-light tracking-[-0.05em] text-white sm:text-5xl lg:text-6xl">
                Your Journey Starts Here
              </h2>
            </div>

            <div className="journey-pathway mt-16">
              {journeyStages.map((stage, index) => (
                <motion.div
                  key={stage}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="journey-stage"
                >
                  <div className="journey-node">
                    <span>{String(index + 1).padStart(2, "0")}</span>
                  </div>
                  <div className="journey-label">{stage}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="infrastructure" className="relative overflow-hidden border-t border-white/10">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/images/placeholders/infrastructure-explorer.jpg')" }}
          />
          <div className="absolute inset-0 bg-[#091B36]/80" />

          <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
            <div className="max-w-3xl">
              <p className="text-xs uppercase tracking-[0.36em] text-[#D4AF37]">System design</p>
              <h2 className="mt-4 text-4xl font-light tracking-[-0.05em] text-white sm:text-5xl lg:text-6xl">
                How Transformation Happens
              </h2>
            </div>

            <div className="mt-12 grid gap-5 lg:grid-cols-5">
              {infrastructureLayers.map((layer, index) => (
                <motion.div
                  key={layer.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="layer-card"
                  style={{ transform: `translateY(${index * 8}px)` }}
                >
                  <div className="layer-index">0{index + 1}</div>
                  <h3 className="mt-6 text-2xl font-light tracking-[-0.04em] text-white">{layer.title}</h3>
                  <p className="mt-4 text-sm leading-6 text-white/68">{layer.copy}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-white/10 bg-[#091B36]">
          <div className="mx-auto grid max-w-7xl gap-6 px-4 py-20 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:py-28">
            <div
              className="overflow-hidden rounded-[30px] border border-white/10 bg-cover bg-center"
              style={{
                backgroundImage: "url('/images/placeholders/tulsa-origin-map.jpg')",
                minHeight: "420px",
              }}
            >
              <div className="flex h-full min-h-[420px] items-end bg-gradient-to-t from-[#091B36] via-[#091B36]/25 to-transparent p-6 sm:p-8">
                <div className="max-w-lg">
                  <p className="text-xs uppercase tracking-[0.28em] text-[#D4AF37]">Origin story</p>
                  <h3 className="mt-4 text-3xl font-light tracking-[-0.05em] text-white sm:text-4xl">
                    Rooted in Tulsa. Ready for the world.
                  </h3>
                </div>
              </div>
            </div>

            <div className="rounded-[30px] border border-[#D4AF37]/25 bg-[#0D1F3D] p-6 sm:p-8">
              <p className="text-xs uppercase tracking-[0.28em] text-[#D4AF37]">People first</p>
              <h3 className="mt-4 text-3xl font-light tracking-[-0.05em] text-white sm:text-4xl">
                We build opportunity where people are already becoming more than they imagined.
              </h3>
              <p className="mt-5 text-base leading-8 text-white/70">
                Every pathway is designed to help people move from uncertainty to agency, from scarcity to stability, and from isolated effort to collective momentum.
              </p>
              <a
                href="#join"
                className="mt-8 inline-flex items-center justify-center rounded-full border border-[#D4AF37]/60 bg-[#D4AF37] px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#091B36] transition hover:bg-[#E4C868]"
              >
                Explore The Atlas
              </a>
            </div>
          </div>
        </section>

        <section id="join" className="border-t border-white/10 bg-[#091B36]">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
            <div className="rounded-[32px] border border-white/10 bg-[linear-gradient(135deg,rgba(212,175,55,0.08),rgba(255,255,255,0.02))] p-8 sm:p-12">
              <p className="text-xs uppercase tracking-[0.35em] text-[#D4AF37]">Let’s build next</p>
              <h2 className="mt-5 max-w-4xl text-4xl font-light tracking-[-0.05em] text-white sm:text-5xl lg:text-7xl">
                Build what comes next with a platform designed for people, opportunity, and lasting transformation.
              </h2>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="mailto:hello@abrilliantchange.com"
                  className="inline-flex items-center justify-center rounded-full bg-[#D4AF37] px-7 py-4 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#091B36] transition hover:bg-[#E7C96B]"
                >
                  Join The Movement
                </a>
                <a
                  href="#hero"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-7 py-4 text-[10px] font-semibold uppercase tracking-[0.22em] text-white transition hover:border-[#D4AF37]/70 hover:text-[#D4AF37]"
                >
                  Return To Top
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
