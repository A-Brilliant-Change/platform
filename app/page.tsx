"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  Compass,
  Users,
  HeartHandshake,
  TrendingUp,
  ChevronDown,
  Building2,
  Cpu,
  Briefcase,
  ExternalLink,
} from "lucide-react";

const navItems = [
  { name: "Atlas", href: "/atlas" },
  { name: "Journey", href: "/journey" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const journeyStages = [
  {
    step: "01",
    title: "Stability",
    badge: "Foundation",
    description:
      "Immediate crisis navigation, secure housing baselines, emergency support, and personal anchoring.",
    deliverables: ["Crisis Intervention", "Resource Navigation", "Personal Anchoring"],
  },
  {
    step: "02",
    title: "Opportunity",
    badge: "Discovery",
    description:
      "Uncovering latent capabilities, educational pathways, digital skills, and tailored trajectory roadmaps.",
    deliverables: ["Skill Assessment", "Digital Onboarding", "Custom Pathways"],
  },
  {
    step: "03",
    title: "Development",
    badge: "Capacity",
    description:
      "Specialized workforce coaching, high-demand technical training, leadership growth, and peer mentorship.",
    deliverables: ["Workforce Training", "Mentorship Cohorts", "Leadership Lab"],
  },
  {
    step: "04",
    title: "Prosperity",
    badge: "Mobility",
    description:
      "Career placement, wage acceleration, entrepreneurship incubation, financial mastery, and wealth creation.",
    deliverables: ["Employer Placement", "Venture Launch", "Asset Building"],
  },
  {
    step: "05",
    title: "Legacy",
    badge: "Generational",
    description:
      "Multi-generational resilience, civic stewardship, community reinvestment, and paying momentum forward.",
    deliverables: ["Community Leadership", "Family Resilience", "Generational Impact"],
  },
];

const ecosystemNodes = [
  {
    icon: Users,
    title: "Community Impact",
    tagline: "Grassroots Trust & Stability",
    description:
      "Deep neighborhood engagement, wraparound services, and family support systems that establish enduring trust.",
  },
  {
    icon: Briefcase,
    title: "Workforce Development",
    tagline: "Career Mobility Engines",
    description:
      "Direct alignment with high-growth industries, industry certifications, and employer-backed career pipelines.",
  },
  {
    icon: Cpu,
    title: "Technology & Innovation",
    tagline: "Modern Infrastructure",
    description:
      "Digital fluency, platform-scale data coordination, and AI-enabled tools designed to scale community outcomes.",
  },
  {
    icon: TrendingUp,
    title: "Entrepreneurship",
    tagline: "Venture & Asset Building",
    description:
      "Incubation, capital access networks, and operational advisory for community-rooted founders and innovators.",
  },
  {
    icon: HeartHandshake,
    title: "Ministry & Holistic Care",
    tagline: "Values-Centered Restoration",
    description:
      "Nurturing the whole person with compassion, purpose, spiritual grounding, and dignified relational support.",
  },
  {
    icon: Building2,
    title: "Strategic Partnerships",
    tagline: "Civic & Corporate Coalitions",
    description:
      "Bridging philanthropic capital, academic institutions, municipal leaders, and market leaders for durable change.",
  },
];

const engagementTracks = [
  {
    title: "Volunteer",
    subtitle: "Active Community Stewardship",
    description:
      "Help build brighter futures in local communities. Mentor rising leaders, share vocational expertise, and stand alongside neighbors on their journey.",
    action: "Join As Volunteer",
    href: "/contact?intent=volunteer",
    badge: "People First",
  },
  {
    title: "Partner",
    subtitle: "Ecosystem Collaboration",
    description:
      "Collaborate with the transformation ecosystem. Align corporate hiring pipelines, philanthropic capital, civic resources, and research to multiply outcomes.",
    action: "Become A Partner",
    href: "/contact?intent=partner",
    badge: "Strategic Impact",
    highlight: true,
  },
  {
    title: "Support",
    subtitle: "Catalytic Investment",
    description:
      "Help expand opportunities and impact. Fuel program innovation, digital infrastructure, and human potential across demonstration cities.",
    action: "Support The Mission",
    href: "/contact?intent=support",
    badge: "Mission Fuel",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#091B36] text-white selection:bg-[#D4AF37]/30 selection:text-white">
      {/* GLOBAL STICKY NAVBAR */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#091B36]/80 backdrop-blur-xl transition-all">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link href="/" className="group flex items-center gap-3.5">
            <div className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-[#D4AF37]/60 bg-[#D4AF37]/10 text-xs font-bold tracking-[0.2em] text-[#D4AF37] shadow-[0_0_15px_rgba(212,175,55,0.2)] transition-all group-hover:border-[#D4AF37] group-hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]">
              AB
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#D4AF37]">
                A Brilliant Change
              </p>
              <p className="text-xs text-white/60">Transformation Platform</p>
            </div>
          </Link>

          <nav className="hidden items-center gap-8 text-sm font-medium text-white/75 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="transition-colors hover:text-[#D4AF37]"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/atlas"
              className="hidden items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-medium text-white/80 transition hover:border-[#D4AF37]/50 hover:text-[#D4AF37] sm:inline-flex"
            >
              <Compass className="h-3.5 w-3.5 text-[#D4AF37]" />
              <span>Atlas</span>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-[#D4AF37]/80 bg-[#D4AF37] px-5 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#091B36] shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-all hover:bg-[#E7C96B] hover:shadow-[0_0_25px_rgba(212,175,55,0.5)]"
            >
              Connect
            </Link>
          </div>
        </div>
      </header>

      <main>
        {/* ========================================================================= */}
        {/* SECTION 1: WEBSITE MASTER HERO™                                           */}
        {/* ========================================================================= */}
        <section
          id="hero"
          className="relative isolate flex min-h-[92vh] items-center justify-center overflow-hidden border-b border-white/10 px-4 py-20 sm:px-6 lg:px-8"
        >
          {/* Hero Background Cityscape Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/hero/abc-hero-cityscape-golden-hour.png"
              alt="Tulsa Golden Hour Cityscape - A Brilliant Change Transformation Platform"
              fill
              priority
              className="object-cover object-center scale-105 transition-transform duration-1000"
            />
            {/* Cinematic Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#091B36] via-[#091B36]/80 to-[#091B36]/60" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(212,175,55,0.18)_0%,_transparent_65%)]" />
            <div className="absolute inset-0 bg-[#091B36]/40 backdrop-blur-[1px]" />
          </div>

          {/* Ambient Particles */}
          {Array.from({ length: 16 }).map((_, index) => (
            <span
              key={index}
              className="particle"
              style={{
                left: `${(index * 23) % 100}%`,
                top: `${(index * 37) % 100}%`,
                animationDelay: `${index * 0.5}s`,
                animationDuration: `${5 + (index % 5)}s`,
              }}
            />
          ))}

          <div className="relative z-10 mx-auto max-w-5xl text-center">
            {/* Brand Eyebrow Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/50 bg-[#091B36]/80 px-4 py-1.5 text-xs font-semibold tracking-[0.25em] text-[#D4AF37] shadow-[0_0_25px_rgba(212,175,55,0.25)] backdrop-blur-md"
            >
              <Sparkles className="h-3.5 w-3.5" />
              <span>A BRILLIANT CHANGE</span>
            </motion.div>

            {/* Main Center Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-6 text-4xl font-light tracking-[-0.04em] text-white sm:text-6xl md:text-7xl lg:text-[5.25rem] lg:leading-[1.05]"
            >
              Transforming Lives.
              <br />
              <span className="font-normal text-[#FBF4DE] drop-shadow-sm">
                Creating Opportunities.
              </span>
              <br />
              <span className="bg-gradient-to-r from-[#D4AF37] via-[#F4DE98] to-[#D4AF37] bg-clip-text font-medium text-transparent">
                Building Brighter Futures.
              </span>
            </motion.h1>

            {/* Supporting Copy */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-white/80 sm:text-xl sm:leading-8"
            >
              A Brilliant Change creates pathways from instability to opportunity through
              innovation, workforce development, technology, community engagement, and
              transformational support systems.
            </motion.p>

            {/* Action CTA Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
            >
              <Link
                href="/contact"
                className="inline-flex w-full items-center justify-center gap-2.5 rounded-full border border-[#D4AF37] bg-[#D4AF37] px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#091B36] shadow-[0_0_35px_rgba(212,175,55,0.4)] transition-all hover:scale-[1.02] hover:bg-[#E7C96B] hover:shadow-[0_0_45px_rgba(212,175,55,0.6)] sm:w-auto"
              >
                <span>Join The Movement</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="#mission"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-sm transition-all hover:border-[#D4AF37]/70 hover:bg-white/10 hover:text-[#D4AF37] sm:w-auto"
              >
                <span>Explore The Vision</span>
              </Link>
              <Link
                href="/atlas"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#D4AF37]/40 bg-[#D4AF37]/10 px-7 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#D4AF37] backdrop-blur-sm transition-all hover:border-[#D4AF37] hover:bg-[#D4AF37]/20 sm:w-auto"
              >
                <Compass className="h-4 w-4" />
                <span>Open Atlas</span>
              </Link>
            </motion.div>

            {/* Bottom Scroll Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="mt-16 flex flex-col items-center gap-2 text-white/50"
            >
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#D4AF37]">
                Scroll To Discover
              </span>
              <ChevronDown className="h-4 w-4 animate-bounce text-[#D4AF37]" />
            </motion.div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 2: MISSION & WHY WE EXIST                                         */}
        {/* ========================================================================= */}
        <section id="mission" className="relative border-b border-white/10 bg-[#0C1E38] py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
              {/* Left Column: Official Doctrine Graphic */}
              <div className="relative group">
                <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-[#D4AF37]/30 to-transparent opacity-50 blur-xl transition-opacity group-hover:opacity-75" />
                <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-[#091B36] p-3 shadow-2xl">
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-[#091B36]">
                    <Image
                      src="/doctrine/abc-doctrine-mission.png"
                      alt="A Brilliant Change Mission Doctrine"
                      fill
                      className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-3 flex items-center justify-between px-3 py-2 text-xs text-white/60">
                    <span className="font-mono text-[#D4AF37]">DOC: MISSION-01</span>
                    <span>Institutional Brand Doctrine</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Mission Narrative */}
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/40 bg-[#D4AF37]/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
                  Mission & Philosophy
                </div>
                <h2 className="mt-4 text-3xl font-light tracking-[-0.04em] text-white sm:text-5xl lg:leading-tight">
                  Why We Exist
                </h2>
                <p className="mt-4 text-xl font-normal text-[#F4DE98]">
                  Every Opportunity Begins With People™
                </p>

                <p className="mt-6 text-base leading-relaxed text-white/75 sm:text-lg sm:leading-8">
                  We reject the premise that human potential is scarce. Across communities, talent and
                  ambition are abundant — what is missing are coordinated, dignified pathways that connect
                  readiness with real opportunity.
                </p>

                {/* Core Philosophy Pillars */}
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4 transition-all hover:border-[#D4AF37]/40">
                    <p className="text-sm font-semibold text-white">Unlocking Potential</p>
                    <p className="mt-1 text-xs text-white/65">
                      Meeting individuals where they are and engineering tailored upward trajectories.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4 transition-all hover:border-[#D4AF37]/40">
                    <p className="text-sm font-semibold text-white">People First Heart</p>
                    <p className="mt-1 text-xs text-white/65">
                      Restoring dignity, agency, and community ownership at every point of contact.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4 transition-all hover:border-[#D4AF37]/40">
                    <p className="text-sm font-semibold text-white">Catalytic Pathways</p>
                    <p className="mt-1 text-xs text-white/65">
                      Bridging training directly to employers, entrepreneurship, and capital.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4 transition-all hover:border-[#D4AF37]/40">
                    <p className="text-sm font-semibold text-white">Generational Impact</p>
                    <p className="mt-1 text-xs text-white/65">
                      Building enduring family resilience that compounds for generations to come.
                    </p>
                  </div>
                </div>

                <div className="mt-8 flex items-center gap-4">
                  <Link
                    href="/about"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#D4AF37] transition hover:text-[#F4DE98]"
                  >
                    <span>Read Our Tulsa Origin & Philosophy</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 3: BRIGHTER FUTURES JOURNEY                                       */}
        {/* ========================================================================= */}
        <section id="journey" className="relative border-b border-white/10 bg-[#091B36] py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/40 bg-[#D4AF37]/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
                Transformation Continuum
              </div>
              <h2 className="mt-4 text-3xl font-light tracking-[-0.04em] text-white sm:text-5xl">
                The Journey From Survival To Legacy
              </h2>
              <p className="mt-4 text-lg text-white/75">
                Transformation is not an event — it is a deliberate, five-stage continuum engineered to
                shift lives from volatility to enduring intergenerational wealth and leadership.
              </p>
            </div>

            {/* Strategic Framework Blueprint Image */}
            <div className="mt-12 overflow-hidden rounded-3xl border border-white/15 bg-[#0C1E38] p-3 shadow-2xl">
              <div className="relative aspect-[16/7] w-full overflow-hidden rounded-2xl bg-[#091B36]">
                <Image
                  src="/frameworks/abc-framework-transformation-systems.png"
                  alt="A Brilliant Change Transformation Systems Framework"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </div>

            {/* 5 Premium Horizontal Progression Cards */}
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
              {journeyStages.map((stage) => (
                <div
                  key={stage.title}
                  className="group relative flex flex-col justify-between rounded-2xl border border-white/10 bg-gradient-to-b from-[#0E203B] to-[#091B36] p-5 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-[#D4AF37]/70 hover:shadow-[0_10px_30px_rgba(212,175,55,0.15)]"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-bold text-[#D4AF37]">{stage.step}</span>
                      <span className="rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-2 py-0.5 text-[10px] uppercase tracking-wider text-[#D4AF37]">
                        {stage.badge}
                      </span>
                    </div>
                    <h3 className="mt-4 text-xl font-medium text-white group-hover:text-[#F4DE98]">
                      {stage.title}
                    </h3>
                    <p className="mt-2.5 text-xs leading-relaxed text-white/65">
                      {stage.description}
                    </p>
                  </div>

                  <div className="mt-6 border-t border-white/10 pt-4">
                    <p className="text-[10px] uppercase tracking-widest text-white/40">Core Signals</p>
                    <ul className="mt-2 space-y-1">
                      {stage.deliverables.map((item) => (
                        <li key={item} className="flex items-center gap-1.5 text-[11px] text-white/80">
                          <span className="h-1 w-1 rounded-full bg-[#D4AF37]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link
                href="/journey"
                className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/60 bg-[#D4AF37]/10 px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#D4AF37] transition hover:bg-[#D4AF37] hover:text-[#091B36]"
              >
                <span>Explore Interactive Journey Framework</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 4: THE ECOSYSTEM                                                  */}
        {/* ========================================================================= */}
        <section id="ecosystem" className="relative border-b border-white/10 bg-[#0C1E38] py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
              {/* Left Column: Blueprint Visual */}
              <div className="relative group order-2 lg:order-1">
                <div className="absolute -inset-2 rounded-3xl bg-[#D4AF37]/20 opacity-40 blur-xl" />
                <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-[#091B36] p-3 shadow-2xl">
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-[#091B36]">
                    <Image
                      src="/ecosystem/abc-ecosystem-architecture-blueprint.png"
                      alt="A Brilliant Change Ecosystem Architecture Blueprint"
                      fill
                      className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-3 flex items-center justify-between px-3 py-2 text-xs text-white/60">
                    <span className="font-mono text-[#D4AF37]">SYS: ECOSYSTEM-v1</span>
                    <span>Multi-Node Infrastructure</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Living Network Explanation */}
              <div className="order-1 lg:order-2">
                <div className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/40 bg-[#D4AF37]/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
                  Unified Architecture
                </div>
                <h2 className="mt-4 text-3xl font-light tracking-[-0.04em] text-white sm:text-5xl">
                  An Ecosystem Built For Transformation
                </h2>
                <p className="mt-4 text-base leading-relaxed text-white/75 sm:text-lg">
                  Isolated interventions fail. We connect community impact, technical training, capital
                  networks, and enterprise into a unified operating system that moves talent seamlessly
                  from aspiration to ownership.
                </p>

                {/* 6 Network Nodes Grid */}
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {ecosystemNodes.map((node) => {
                    const Icon = node.icon;
                    return (
                      <div
                        key={node.title}
                        className="rounded-2xl border border-white/10 bg-white/5 p-4 transition-all hover:border-[#D4AF37]/40 hover:bg-white/[0.08]"
                      >
                        <div className="flex items-center gap-2.5">
                          <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#D4AF37]/40 bg-[#D4AF37]/10 text-[#D4AF37]">
                            <Icon className="h-4 w-4" />
                          </div>
                          <div>
                            <h4 className="text-sm font-semibold text-white">{node.title}</h4>
                            <p className="text-[11px] font-mono text-[#D4AF37]">{node.tagline}</p>
                          </div>
                        </div>
                        <p className="mt-2.5 text-xs leading-relaxed text-white/65">
                          {node.description}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 5: THE ATLAS                                                      */}
        {/* ========================================================================= */}
        <section id="atlas" className="relative border-b border-white/10 bg-[#091B36] py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/40 bg-[#D4AF37]/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
                Master Cartography
              </div>
              <h2 className="mt-4 text-3xl font-light tracking-[-0.04em] text-white sm:text-5xl">
                The Transformation Atlas
              </h2>
              <p className="mt-4 text-base leading-relaxed text-white/75 sm:text-lg">
                Explore the comprehensive cartography of ten transformation domains, systems models, and
                doctrine that power the A Brilliant Change demonstration ecosystem.
              </p>
            </div>

            {/* Atlas Graphic Visual Showcase */}
            <div className="mt-12 overflow-hidden rounded-3xl border border-white/15 bg-[#0C1E38] p-3 shadow-2xl">
              <div className="relative aspect-[16/8] w-full overflow-hidden rounded-2xl bg-[#091B36]">
                <Image
                  src="/atlas/abc-atlas-master-transformation.png"
                  alt="Master Transformation Atlas Overview"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </div>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/atlas"
                className="inline-flex items-center gap-2 rounded-full bg-[#D4AF37] px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#091B36] shadow-[0_0_30px_rgba(212,175,55,0.35)] transition hover:bg-[#E7C96B]"
              >
                <Compass className="h-4 w-4" />
                <span>Explore The Atlas</span>
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:border-[#D4AF37]/60 hover:text-[#D4AF37]"
              >
                <span>Read Institutional Doctrine</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 6: GET INVOLVED                                                   */}
        {/* ========================================================================= */}
        <section id="get-involved" className="relative border-b border-white/10 bg-[#0C1E38] py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/40 bg-[#D4AF37]/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
                Action & Alignment
              </div>
              <h2 className="mt-4 text-3xl font-light tracking-[-0.04em] text-white sm:text-5xl">
                Get Involved
              </h2>
              <p className="mt-4 text-base leading-relaxed text-white/75 sm:text-lg">
                Transformation requires collective momentum. Whether you are an individual wanting to
                mentor, an organization ready to hire, or an investor fueling catalytic scale — choose your track.
              </p>
            </div>

            {/* Three Large Engagement Cards */}
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {engagementTracks.map((track) => (
                <div
                  key={track.title}
                  className={`group relative flex flex-col justify-between rounded-3xl border p-8 transition-all duration-300 ${
                    track.highlight
                      ? "border-[#D4AF37]/70 bg-gradient-to-b from-[#112444] to-[#091B36] shadow-[0_0_40px_rgba(212,175,55,0.15)]"
                      : "border-white/10 bg-[#091B36]/80 hover:border-white/25"
                  }`}
                >
                  <div>
                    <span className="inline-block rounded-full border border-[#D4AF37]/40 bg-[#D4AF37]/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-[#D4AF37]">
                      {track.badge}
                    </span>
                    <h3 className="mt-6 text-2xl font-light tracking-tight text-white group-hover:text-[#F4DE98]">
                      {track.title}
                    </h3>
                    <p className="mt-1 font-mono text-xs text-[#D4AF37]">{track.subtitle}</p>
                    <p className="mt-4 text-sm leading-relaxed text-white/70">
                      {track.description}
                    </p>
                  </div>

                  <div className="mt-8 border-t border-white/10 pt-6">
                    <Link
                      href={track.href}
                      className={`inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] transition-all ${
                        track.highlight
                          ? "bg-[#D4AF37] text-[#091B36] shadow-lg hover:bg-[#E7C96B]"
                          : "border border-white/20 bg-white/5 text-white hover:border-[#D4AF37]/70 hover:bg-[#D4AF37]/10 hover:text-[#D4AF37]"
                      }`}
                    >
                      <span>{track.action}</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 7: STATEMENT & CALL TO ACTION BLOCK                              */}
        {/* ========================================================================= */}
        <section className="relative overflow-hidden bg-gradient-to-b from-[#091B36] via-[#0D2140] to-[#091B36] py-28 lg:py-36">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(212,175,55,0.22),_transparent_60%)]" />

          <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <p className="text-xs uppercase tracking-[0.38em] text-[#D4AF37]">
              Demonstration City • Tulsa Origin
            </p>
            <h2 className="mt-5 text-4xl font-light tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
              Every Opportunity Begins With People™
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/80 sm:text-xl">
              Join us in engineering lasting community transformation and building an enduring legacy of
              advancement across Tulsa, Oklahoma and communities everywhere.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#D4AF37] px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#091B36] shadow-[0_0_40px_rgba(212,175,55,0.45)] transition-all hover:scale-[1.02] hover:bg-[#E7C96B] sm:w-auto"
              >
                <span>Support The Mission</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/atlas"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/25 bg-white/5 px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:border-[#D4AF37]/80 hover:text-[#D4AF37] sm:w-auto"
              >
                <Compass className="h-4 w-4" />
                <span>Explore Master Atlas</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* ========================================================================= */}
      {/* GLOBAL FOOTER                                                             */}
      {/* ========================================================================= */}
      <footer className="border-t border-white/10 bg-[#061325] py-16 text-white/70">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 md:grid-cols-4">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#D4AF37]/70 bg-[#D4AF37]/10 text-xs font-bold tracking-widest text-[#D4AF37]">
                  AB
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#D4AF37]">
                    A Brilliant Change
                  </p>
                  <p className="text-[11px] text-white/50">Human Transformation Platform</p>
                </div>
              </div>
              <p className="mt-4 max-w-sm text-xs leading-relaxed text-white/60">
                A mission operating system and opportunity ecosystem engineered to transition individuals
                and families from crisis to enduring generational legacy.
              </p>
              <p className="mt-4 text-[11px] font-mono text-[#D4AF37]/90">
                Headquartered in Tulsa, Oklahoma • Demonstration City
              </p>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-white">Platform</p>
              <ul className="mt-4 space-y-2 text-xs">
                <li>
                  <Link href="/" className="transition hover:text-[#D4AF37]">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/atlas" className="transition hover:text-[#D4AF37]">
                    Transformation Atlas
                  </Link>
                </li>
                <li>
                  <Link href="/journey" className="transition hover:text-[#D4AF37]">
                    Brighter Futures Journey
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="transition hover:text-[#D4AF37]">
                    Tulsa Origin & About
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="transition hover:text-[#D4AF37]">
                    Contact & Partnerships
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-white">Doctrine</p>
              <ul className="mt-4 space-y-2 text-xs">
                <li className="text-white/50">Every Opportunity Begins With People™</li>
                <li className="text-white/50">Ten Transformation Domains</li>
                <li className="text-white/50">Five Core Promises</li>
                <li className="text-white/50">Survival to Legacy Continuum</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 flex flex-col items-center justify-between border-t border-white/10 pt-8 text-[11px] text-white/40 sm:flex-row">
            <p>© {new Date().getFullYear()} A Brilliant Change. All rights reserved.</p>
            <p className="mt-2 sm:mt-0">
              Built with purpose for human advancement.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
