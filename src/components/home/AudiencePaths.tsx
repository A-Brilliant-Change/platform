"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import { audiencePaths } from "@/data/home/audience-paths";

export default function AudiencePaths() {
  return (
    <Section id="paths" className="bg-[#091B36]">
      <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-end mb-14">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
            Many entry points
          </p>
          <h2 className="mt-4 max-w-2xl text-4xl font-light tracking-tight text-white sm:text-6xl">
            Where Do You Belong In Transformation?
          </h2>
        </div>
        <p className="max-w-xs text-sm leading-6 text-white/50">
          Different roles. Connected mission.
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
          src="/visual-canon/infrastructure/journey-04-five-stages-of-transformation.png"
          alt="Five stages of transformation - audience journey"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 100vw"
        />
      </motion.div>

      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {audiencePaths.map((path, index) => (
          <motion.a
            key={path.id}
            href={path.href}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
            className="group flex flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-8 transition-all hover:border-[#D4AF37]/60 hover:bg-[#D4AF37]/5"
          >
            <div>
              <h3 className="text-2xl font-light text-white">{path.title}</h3>
              <p className="mt-3 text-sm leading-6 text-white/60">
                {path.description}
              </p>
              {path.highlights && (
                <div className="mt-6 flex flex-wrap gap-2">
                  {path.highlights.map((highlight) => (
                    <span
                      key={highlight}
                      className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#D4AF37]/80"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              )}
            </div>
            <span className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-white/60 transition-colors group-hover:text-[#D4AF37]">
              {path.cta} <ArrowUpRight size={14} />
            </span>
          </motion.a>
        ))}
      </div>
    </Section>
  );
}
