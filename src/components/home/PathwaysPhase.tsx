"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { useCeilingSession } from "@/hooks/useCeilingSession";
import Section from "@/components/ui/Section";
import { opportunityPathwayDoctrine } from "@/neuralvault/doctrine/ceiling-edition";

export default function PathwaysPhase() {
  const { setCurrentPhase, markPhaseAsCompleted } = useCeilingSession();

  useEffect(() => {
    setCurrentPhase("pathways");
    markPhaseAsCompleted("pathways");
  }, [setCurrentPhase, markPhaseAsCompleted]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <Section id="pathways" className="bg-[#0B1F3A] py-20 sm:py-32">
      <div className="space-y-12">
        {/* Header */}
        <div className="max-w-4xl space-y-4">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs font-semibold uppercase tracking-[0.3em] text-[#D4AF37]"
          >
            From Vision to Reality
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl font-light tracking-[-0.05em] text-white sm:text-5xl"
          >
            The Transformation Journey
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl text-base leading-7 text-white/70"
          >
            Transformation follows a structured pathway. Each stage builds on the last, moving from awareness through deep engagement to lasting impact.
          </motion.p>
        </div>

        {/* Pathway Stages */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-4"
        >
          {opportunityPathwayDoctrine.stages.map((stage, index) => (
            <motion.div
              key={stage.id}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.02] p-6 sm:p-8 transition hover:border-[#D4AF37]/50 hover:bg-[#D4AF37]/5"
            >
              {/* Stage Number + Connector */}
              <div className="flex items-start gap-6 relative z-10">
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#D4AF37] bg-[#091B36] text-sm font-bold text-[#D4AF37]">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  {/* Connector Line to Next */}
                  {index < opportunityPathwayDoctrine.stages.length - 1 && (
                    <div className="absolute top-12 left-6 h-12 w-0.5 bg-gradient-to-b from-[#D4AF37]/50 to-transparent" />
                  )}
                </div>

                {/* Stage Content */}
                <div className="flex-grow pt-1">
                  <h3 className="text-lg font-light text-white mb-2">
                    {stage.label}
                  </h3>
                  <p className="text-sm leading-6 text-white/70">
                    {stage.purpose}
                  </p>
                </div>
              </div>

              {/* Hover Accent */}
              <div className="absolute inset-0 -z-10 opacity-0 transition duration-300 group-hover:opacity-100 bg-gradient-to-r from-[#D4AF37]/10 via-transparent to-transparent" />
            </motion.div>
          ))}
        </motion.div>

        {/* Pathway Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="rounded-lg border border-white/10 bg-white/[0.02] p-6 border-l-2 border-l-[#D4AF37]"
        >
          <p className="text-sm text-white/75">
            <span className="text-[#D4AF37] font-semibold">Each pathway is customized</span> to reflect individual goals, community context, and the specific domains most relevant to your transformation.
          </p>
        </motion.div>
      </div>
    </Section>
  );
}
