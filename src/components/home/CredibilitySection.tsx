"use client";

import Image from "next/image";
import { CheckCircle2, Award, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import { credibilityMarkers, trustIndicators, recognitionAwards } from "@/data/home/credibility";

export default function CredibilitySection() {
  return (
    <Section id="credibility" className="bg-[#0b203d]">
      {/* Visual Canvas */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-16 overflow-hidden rounded-3xl border border-white/10 bg-white/5 relative h-96 sm:h-[32rem]"
      >
        <Image
          src="/visual-canon/infrastructure/journey-05-good-intentions-are-not-infrastructure.png"
          alt="Building the infrastructure of transformation - our credibility foundation"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 100vw"
        />
      </motion.div>

      {/* Markers */}
      <div className="mb-16">
        <p className="mb-8 text-xs font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
          Why organizations trust us
        </p>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {credibilityMarkers.map((marker, index) => (
            <motion.div
              key={marker.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
            >
              <CheckCircle2 className="h-6 w-6 text-[#D4AF37]" />
              <h3 className="mt-4 text-lg font-light text-white">
                {marker.label}
              </h3>
              <p className="mt-2 text-sm leading-6 text-white/60">
                {marker.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Trust Indicators */}
      <div className="border-t border-white/10 py-16">
        <h3 className="mb-10 text-2xl font-light text-white">Measurable Results</h3>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {trustIndicators.map((indicator, index) => (
            <motion.div
              key={indicator.label}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="flex flex-col items-start"
            >
              <p className="text-5xl font-light text-[#D4AF37]">
                {indicator.value}
              </p>
              <p className="mt-2 text-sm font-semibold uppercase tracking-[0.12em] text-white/70">
                {indicator.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Recognition Awards */}
      <div className="border-t border-white/10 pt-16">
        <h3 className="mb-10 text-2xl font-light text-white">Recognition</h3>
        <div className="grid gap-8 md:grid-cols-3">
          {recognitionAwards.map((award, index) => (
            <motion.div
              key={award.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-start"
            >
              <Award className="h-6 w-6 text-[#D4AF37]" />
              <h4 className="mt-4 text-lg font-light text-white">
                {award.title}
              </h4>
              <p className="mt-2 text-sm text-white/60">{award.organization}</p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-[0.12em] text-[#D4AF37]">
                {award.year}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
