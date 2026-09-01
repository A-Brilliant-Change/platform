"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";

const domains = [
  "General Partnership & Inquiry",
  "Workforce Development",
  "Education & Mentorship",
  "Entrepreneurship & Venture Creation",
  "Leadership Development",
  "Economic Mobility",
  "Housing Stability",
  "Resource Navigation",
  "Community Engagement",
  "Innovation & Technology",
  "Community Transformation",
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    domain: domains[0],
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
  };

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
              <p className="text-xs text-white/60">Connect & Partner</p>
            </div>
          </Link>

          <nav className="hidden items-center gap-8 text-sm text-white/75 md:flex">
            <Link href="/" className="transition hover:text-[#D4AF37]">Home</Link>
            <Link href="/atlas" className="transition hover:text-[#D4AF37]">Atlas</Link>
            <Link href="/journey" className="transition hover:text-[#D4AF37]">Journey</Link>
            <Link href="/about" className="transition hover:text-[#D4AF37]">About</Link>
            <Link href="/contact" className="text-[#D4AF37]">Contact</Link>
          </nav>

          <Link
            href="/journey"
            className="inline-flex items-center justify-center rounded-full border border-[#D4AF37]/60 bg-[#D4AF37] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#091B36] transition hover:bg-[#E4C868]"
          >
            Explore Path
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(212,175,55,0.16),_transparent_45%)]" />
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <p className="text-xs uppercase tracking-[0.38em] text-[#D4AF37]">Connect With Us</p>
          <h1 className="mt-4 text-4xl font-light leading-[0.95] tracking-[-0.05em] text-white sm:text-5xl lg:text-6xl">
            Let’s Build What Comes Next.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-white/75 sm:text-lg">
            Whether you represent a community initiative, civic institution, employer, or participant seeking a new pathway, we welcome your partnership.
          </p>
        </div>
      </section>

      {/* Form and Contact Information Section */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
            {/* Form */}
            <div className="rounded-[30px] border border-white/10 bg-[#0D1F3D]/80 p-6 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.25)]">
              {submitted ? (
                <div className="py-12 text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-[#D4AF37] bg-[#D4AF37]/10 text-2xl text-[#D4AF37]">
                    ✓
                  </div>
                  <h2 className="mt-6 text-3xl font-light text-white">Thank you for connecting</h2>
                  <p className="mt-4 max-w-md mx-auto text-sm leading-6 text-white/70">
                    We have received your message. A member of the A Brilliant Change team will review your inquiry and connect with you shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: "",
                        email: "",
                        organization: "",
                        domain: domains[0],
                        message: "",
                      });
                    }}
                    className="mt-8 inline-flex items-center justify-center rounded-full border border-[#D4AF37]/50 bg-[#D4AF37]/10 px-6 py-3 text-[10px] uppercase tracking-[0.2em] text-[#D4AF37] transition hover:bg-[#D4AF37] hover:text-[#091B36]"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <p className="text-xs uppercase tracking-[0.28em] text-[#D4AF37]">Inquiry Form</p>
                    <h2 className="mt-2 text-2xl font-light text-white">Share your focus or inquiry</h2>
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="block text-xs uppercase tracking-[0.16em] text-white/70">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your full name"
                        className="mt-2 w-full rounded-xl border border-white/15 bg-[#091B36]/80 px-4 py-3 text-sm text-white placeholder-white/40 outline-none transition focus:border-[#D4AF37]"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs uppercase tracking-[0.16em] text-white/70">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@organization.com"
                        className="mt-2 w-full rounded-xl border border-white/15 bg-[#091B36]/80 px-4 py-3 text-sm text-white placeholder-white/40 outline-none transition focus:border-[#D4AF37]"
                      />
                    </div>
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="organization" className="block text-xs uppercase tracking-[0.16em] text-white/70">
                        Organization / Affiliation
                      </label>
                      <input
                        type="text"
                        id="organization"
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        placeholder="Institution or company"
                        className="mt-2 w-full rounded-xl border border-white/15 bg-[#091B36]/80 px-4 py-3 text-sm text-white placeholder-white/40 outline-none transition focus:border-[#D4AF37]"
                      />
                    </div>

                    <div>
                      <label htmlFor="domain" className="block text-xs uppercase tracking-[0.16em] text-white/70">
                        Area of Interest
                      </label>
                      <select
                        id="domain"
                        value={formData.domain}
                        onChange={(e) => setFormData({ ...formData, domain: e.target.value })}
                        className="mt-2 w-full rounded-xl border border-white/15 bg-[#091B36]/80 px-4 py-3 text-sm text-white outline-none transition focus:border-[#D4AF37]"
                      >
                        {domains.map((item) => (
                          <option key={item} value={item} className="bg-[#091B36] text-white">
                            {item}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs uppercase tracking-[0.16em] text-white/70">
                      Message / Proposal *
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your project, collaboration idea, or how we can support your pathway..."
                      className="mt-2 w-full rounded-xl border border-white/15 bg-[#091B36]/80 px-4 py-3 text-sm text-white placeholder-white/40 outline-none transition focus:border-[#D4AF37]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-full bg-[#D4AF37] py-4 text-xs font-bold uppercase tracking-[0.2em] text-[#091B36] transition hover:bg-[#E7C96B]"
                  >
                    Submit Inquiry
                  </button>
                </form>
              )}
            </div>

            {/* Direct Contact & Details */}
            <div className="space-y-6">
              <div className="rounded-[30px] border border-white/10 bg-[#0D1F3D]/60 p-8">
                <p className="text-xs uppercase tracking-[0.28em] text-[#D4AF37]">Direct Contact</p>
                <h3 className="mt-3 text-2xl font-light text-white">Headquarters & Ecosystem</h3>

                <div className="mt-6 space-y-5 text-sm text-white/75">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.18em] text-white/50">Direct Email</p>
                    <a
                      href="mailto:hello@abrilliantchange.com"
                      className="mt-1 block text-base text-[#D4AF37] hover:underline"
                    >
                      hello@abrilliantchange.com
                    </a>
                  </div>

                  <div>
                    <p className="text-[10px] uppercase tracking-[0.18em] text-white/50">Origin Location</p>
                    <p className="mt-1 text-base text-white">Tulsa, Oklahoma</p>
                    <p className="text-xs text-white/60">Demonstration Proving Ground & Platform Hub</p>
                  </div>

                  <div>
                    <p className="text-[10px] uppercase tracking-[0.18em] text-white/50">Core Focus</p>
                    <p className="mt-1 leading-6 text-white/70">
                      Workforce ecosystems, leadership mobility, entrepreneurship incubation, and community infrastructure.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-[30px] border border-[#D4AF37]/30 bg-[#0D1F3D]/60 p-8">
                <p className="text-xs uppercase tracking-[0.28em] text-[#D4AF37]">Quick Links</p>
                <div className="mt-4 flex flex-col gap-3">
                  <Link
                    href="/atlas"
                    className="flex items-center justify-between rounded-xl border border-white/10 bg-[#091B36]/60 p-3.5 text-xs uppercase tracking-[0.16em] text-white transition hover:border-[#D4AF37]/60"
                  >
                    <span>Master Transformation Atlas</span>
<span className="text-[#D4AF37]">→</span>
             </Link>
                  <Link
                    href="/journey"
                    className="flex items-center justify-between rounded-xl border border-white/10 bg-[#091B36]/60 p-3.5 text-xs uppercase tracking-[0.16em] text-white transition hover:border-[#D4AF37]/60"
                  >
                    <span>Explore Opportunity Pathway</span>
                    <span className="text-[#D4AF37]">-></span>
                  </Link>
                  <Link
                    href="/about"
                    className="flex items-center justify-between rounded-xl border border-white/10 bg-[#091B36]/60 p-3.5 text-xs uppercase tracking-[0.16em] text-white transition hover:border-[#D4AF37]/60"
                  >
                    <span>About Brand Doctrine & Promises</span>
                    <span className="text-[#D4AF37]">-></span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}









