"use client";

import Image from "next/image";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import { programs } from "@/data/home/programs";

export default function Programs() {
  return (
    <Section id="programs" className="bg-[#0b203d]">
      <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-end mb-14">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
            Six active initiatives
          </p>
          <h2 className="mt-4 max-w-2xl text-4xl font-light tracking-tight text-white sm:text-6xl">
            Programs in Action
          </h2>
        </div>
        <p className="max-w-xs text-sm leading-6 text-white/50">
          Integrated initiatives driving transformation across all domains.
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-16 overflow-hidden rounded-3xl border border-white/10 bg-white/5 relative h-96 sm:h-[32rem]"
      >
        <Image
          src="/visual-canon/ecosystem/journey-02-the-reality-we-refuse-to-accept.png"
          alt="The reality we refuse to accept - programs addressing systemic challenges"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 100vw"
        />
      </motion.div>

      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {programs.map((program, index) => (
          <motion.div
            key={program.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.06 }}
            className="group flex flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all hover:border-[#D4AF37]/60 hover:bg-[#D4AF37]/5"
          >
            <div>
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
                    {program.tagline}
                  </p>
                  <h3 className="mt-2 text-xl font-light text-white">
                    {program.title}
                  </h3>
                </div>
                {program.status === "active" && (
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-green-400" />
                )}
              </div>
              <p className="mt-4 text-sm leading-6 text-white/60">
                {program.description}
              </p>
            </div>
            <div className="mt-6 border-t border-white/10 pt-4">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#D4AF37]">
                {program.impact}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
