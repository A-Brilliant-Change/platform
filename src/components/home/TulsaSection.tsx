"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import { tulsaHub } from "@/data/home/tulsa";

export default function TulsaSection() {
  return (
    <Section id="tulsa" className="bg-[#0b203d]">
      <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16">
        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
            {tulsaHub.tagline}
          </p>
          <h2 className="mt-4 text-4xl font-light leading-tight text-white sm:text-6xl">
            {tulsaHub.headline}
          </h2>
          <p className="mt-6 text-lg leading-8 text-white/60">
            {tulsaHub.description}
          </p>

          {/* Initiatives */}
          <div className="mt-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
              Active Initiatives
            </p>
            <ul className="mt-4 space-y-2">
              {tulsaHub.initiatives.map((initiative) => (
                <li key={initiative} className="flex items-center gap-3 text-white/70">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF37]" />
                  {initiative}
                </li>
              ))}
            </ul>
          </div>

          {/* Stats */}
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {tulsaHub.stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl font-light text-[#D4AF37]">
                  {stat.metric}
                </p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.12em] text-white/60">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <a
            href={tulsaHub.href}
            className="mt-10 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#D4AF37] hover:text-white"
          >
            <span className="border-b border-[#D4AF37] pb-2 transition-colors">
              {tulsaHub.cta}
            </span>
            <ArrowUpRight size={16} />
          </a>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="overflow-hidden rounded-3xl border border-white/15 bg-[#091B36]/50 relative h-96 sm:h-[32rem] lg:h-[28rem]"
        >
          <Image
            src="/images/origin/tulsa-origin-map.svg"
            alt="Tulsa - the stability foundation for transformation"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 90vw, 50vw"
          />
        </motion.div>
      </div>
    </Section>
  );
}

