"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import { impactMetrics, impactFrameworkPillars } from "@/data/home/impact-framework";

export default function ImpactFramework() {
  return (
    <Section id="impact" className="bg-[#091B36]">
      {/* Framework Overview */}
      <div className="mb-16">
        <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
              Our impact model
            </p>
            <h2 className="mt-4 max-w-2xl text-4xl font-light tracking-tight text-white sm:text-6xl">
              Transformation Framework
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-6 text-white/50">
            Four pillars holding up lasting change.
          </p>
        </div>
      </div>

      {/* Feature Image */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-16 overflow-hidden rounded-3xl border border-white/10 bg-white/5 relative h-96 sm:h-[32rem]"
      >
        <Image
          src="/visual-canon/origin/journey-01-every-opportunity-begins-with-a-person.png"
          alt="Every opportunity begins with a person"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 100vw"
        />
      </motion.div>

      {/* Framework Pillars */}
      <div className="mb-16">
        <h3 className="mb-8 text-2xl font-light text-white">Four Core Pillars</h3>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {impactFrameworkPillars.map((pillar, index) => (
            <motion.div
              key={pillar.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="flex flex-col rounded-2xl border border-[#D4AF37]/30 bg-[#D4AF37]/5 p-6"
            >
              <h4 className="text-lg font-light text-white">{pillar.title}</h4>
              <p className="mt-3 text-sm leading-6 text-white/60">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Impact Metrics */}
      <div className="border-t border-white/10 pt-16">
        <h3 className="mb-8 text-2xl font-light text-white">What We Are Building Today</h3>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {impactMetrics.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="flex flex-col"
            >
              <p className="text-4xl font-light text-[#D4AF37] sm:text-5xl">
                {stat.metric}
              </p>
              <p className="mt-2 text-sm font-semibold uppercase tracking-[0.12em] text-white">
                {stat.label}
              </p>
              <p className="mt-2 text-sm leading-5 text-white/50">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
