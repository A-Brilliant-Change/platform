"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useCeilingSession } from "@/hooks/useCeilingSession";
import Section from "@/components/ui/Section";
import { transformationDomains } from "@/neuralvault/doctrine/ceiling-edition";

export default function DomainsPhase() {
  const { setCurrentPhase, markPhaseAsCompleted } = useCeilingSession();
  const [selectedDomain, setSelectedDomain] = useState<typeof transformationDomains[number]>(transformationDomains[0]);

  useEffect(() => {
    setCurrentPhase("domains");
    markPhaseAsCompleted("domains");
  }, [setCurrentPhase, markPhaseAsCompleted]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <Section id="domains" className="bg-[#091B36] py-20 sm:py-32">
      <div className="space-y-12">
        {/* Section Header */}
        <div className="max-w-4xl space-y-4">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs font-semibold uppercase tracking-[0.3em] text-[#D4AF37]"
          >
            The Transformation System
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl font-light tracking-[-0.05em] text-white sm:text-5xl"
          >
            Ten Interconnected Domains
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl text-base leading-7 text-white/70"
          >
            Real transformation requires coordinated action across multiple systems. Each domain addresses a critical pathway to opportunity and flourishing.
          </motion.p>
        </div>

        {/* Domains Grid with Interactive Selection */}
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Domain List */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-2 lg:col-span-1"
          >
            {transformationDomains.map((domain) => (
              <motion.button
                key={domain.id}
                variants={itemVariants}
                onClick={() => setSelectedDomain(domain)}
                className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 border ${
                  selectedDomain.id === domain.id
                    ? "border-[#D4AF37] bg-[#D4AF37]/10 text-[#D4AF37]"
                    : "border-white/10 bg-white/[0.02] text-white/70 hover:border-white/20 hover:bg-white/5"
                }`}
              >
                <p className="text-xs uppercase tracking-[0.15em] font-semibold">{domain.title}</p>
              </motion.button>
            ))}
          </motion.div>

          {/* Selected Domain Detail */}
          <motion.div
            key={selectedDomain.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-2 rounded-2xl border border-white/10 bg-[linear-gradient(135deg,rgba(212,175,55,0.08),rgba(255,255,255,0.02))] p-8 sm:p-10"
          >
            <div className="space-y-6">
              {/* Domain Number */}
              <div>
                <p className="text-[12px] uppercase tracking-[0.3em] text-[#D4AF37]/60 mb-2">
                  Domain {String(selectedDomain.order).padStart(2, "0")}
                </p>
                <h3 className="text-3xl font-light text-white leading-tight">
                  {selectedDomain.title}
                </h3>
              </div>

              {/* Promise Statement */}
              <div className="border-l-2 border-[#D4AF37] pl-4">
                <p className="text-lg font-light text-white italic">
                  "{selectedDomain.promise}"
                </p>
              </div>

              {/* Primary Outcome */}
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-white/50 mb-2">
                  Primary Outcome
                </p>
                <p className="text-base text-white/75">
                  {selectedDomain.primaryOutcome
                    .split("-")
                    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(" ")}
                </p>
              </div>

              {/* Related Domains */}
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-white/50 mb-3">
                  Works With
                </p>
                <div className="flex flex-wrap gap-2">
                  {selectedDomain.relatedDomains.map((relatedId) => {
                    const related = transformationDomains.find((d) => d.id === relatedId);
                    return (
                      <span
                        key={relatedId}
                        className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-white/70"
                      >
                        {related?.title}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Interconnection Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="rounded-lg border border-white/10 bg-white/[0.02] p-6 text-center"
        >
          <p className="text-sm text-white/70">
            Each domain is designed to work in concert with others, creating <span className="text-[#D4AF37]">compounding pathways</span> that accelerate transformation.
          </p>
        </motion.div>
      </div>
    </Section>
  );
}

