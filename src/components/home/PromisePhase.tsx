"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { useCeilingSession } from "@/hooks/useCeilingSession";
import Section from "@/components/ui/Section";

const promiseCornerStones = [
  {
    id: "people",
    title: "People First",
    description: "Human potential is the origin and center of all we do.",
    icon: "🫂",
  },
  {
    id: "systems",
    title: "Systemic Design",
    description: "Connected pathways that work together, not in isolation.",
    icon: "🔗",
  },
  {
    id: "outcome",
    title: "Measurable Outcome",
    description: "Transformation anchored in real community impact.",
    icon: "📈",
  },
  {
    id: "place",
    title: "Rooted in Place",
    description: "Tulsa as origin; every community as the center.",
    icon: "🏘️",
  },
];

export default function PromisePhase() {
  const { setCurrentPhase, markPhaseAsCompleted } = useCeilingSession();

  useEffect(() => {
    setCurrentPhase("promise");
    markPhaseAsCompleted("promise");
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <Section id="promise" className="bg-[#0B1F3A] py-20 sm:py-32">
      <div className="space-y-16">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-3xl border border-white/10"
        >
        </motion.div>
        {/* Promise Statement */}
        <div className="max-w-4xl space-y-6">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs font-semibold uppercase tracking-[0.3em] text-[#D4AF37]"
          >
            The Transformation Promise
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl font-light tracking-[-0.05em] text-white sm:text-5xl lg:text-6xl"
          >
            Expanding opportunity. Strengthening communities. Creating lasting impact.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl text-lg leading-8 text-white/70"
          >
            We believe that every person carries untapped potential. Every neighborhood has inherent resilience. And every community can build a future of shared opportunity.
          </motion.p>
        </div>

        {/* Four Cornerstone Principles */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {promiseCornerStones.map((stone) => (
            <motion.div
              key={stone.id}
              variants={itemVariants}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:border-[#D4AF37]/50 hover:bg-[#D4AF37]/5"
            >
              <p className="text-3xl mb-3">{stone.icon}</p>
              <h3 className="text-lg font-light text-white mb-2">{stone.title}</h3>
              <p className="text-sm leading-6 text-white/60">{stone.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Divider Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border-t border-white/10 pt-12"
        >
          <p className="text-xs uppercase tracking-[0.25em] text-[#D4AF37]/60 mb-4">
            A Comprehensive System
          </p>
          <p className="max-w-2xl text-base leading-8 text-white/70">
            Transformation isn't single-issue. That's why we've designed ten interconnected domains — each focused on a critical area of human and community flourishing, each connected to all the others.
          </p>
        </motion.div>
      </div>
    </Section>
  );
}






