"use client";

import { useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useCeilingSession } from "@/hooks/useCeilingSession";
import PrimaryButton from "@/components/ui/PrimaryButton";

export default function CanonicalHero() {
  const { setCurrentPhase, markPhaseAsCompleted } = useCeilingSession();

  useEffect(() => {
    setCurrentPhase("origin");
    markPhaseAsCompleted("origin");
  }, [setCurrentPhase, markPhaseAsCompleted]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  const lineVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: { duration: 0.8, delay: 0.3 },
    },
  };

  return (
    <section id="origin" className="relative isolate flex min-h-screen items-end overflow-hidden px-6 pb-20 pt-32 sm:px-10 lg:px-16 lg:pb-32">
      {/* Background Image */}
      <Image
        src="/visual-canon/origin/journey-00-the-first-flame.png"
        alt="The first flame - journey of transformation begins"
        fill
        className="absolute inset-0 -z-20 object-cover object-center"
        priority
        sizes="100vw"
      />

      {/* Gradient Overlays */}
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-r from-[#091B36] via-[#091B36]/75 to-[#091B36]/20" />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-t from-[#091B36] via-transparent to-[#091B36]/30" />

      <div className="mx-auto w-full max-w-7xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-5xl space-y-8"
        >
          {/* Tagline + Origin */}
          <motion.div variants={itemVariants} className="space-y-4">
            <div className="flex items-center gap-4">
              <motion.div
                variants={lineVariants}
                className="h-px flex-grow bg-gradient-to-r from-[#D4AF37] to-transparent"
              />
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#D4AF37] whitespace-nowrap">
                Tulsa, Oklahoma — Where transformation begins
              </p>
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h1 className="text-5xl font-light leading-[0.9] tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
              <span className="block">Every Opportunity</span>
              <span className="block">Begins With People™</span>
            </h1>

            <p className="max-w-2xl text-lg font-light leading-8 text-white/75">
              A Brilliant Change is building the infrastructure of transformation — connecting human potential with systemic opportunity.
            </p>
          </motion.div>

          {/* The Promise Sub-section */}
          <motion.div variants={itemVariants} className="space-y-6 border-t border-white/10 pt-8">
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold">
                Our Promise
              </p>
              <p className="max-w-2xl text-lg leading-8 text-white/85">
                One Heart. Ten Pathways. Unlimited Potential.
              </p>
            </div>

            <p className="max-w-2xl text-base leading-7 text-white/65">
              We are designing systems that expand opportunity, strengthen communities, and create lasting impact for people and places.
            </p>
          </motion.div>

          {/* CTAs */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-4">
            <PrimaryButton href="#promise">Begin the Journey</PrimaryButton>
            <a
              href="#domains"
              className="inline-flex min-h-12 items-center rounded-full border border-white/30 px-6 text-xs font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:border-[#D4AF37] hover:text-[#D4AF37]"
            >
              Explore the Domains
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <p className="text-xs uppercase tracking-[0.2em] text-white/50">Scroll to continue</p>
          <div className="h-6 w-px bg-gradient-to-b from-[#D4AF37] to-transparent" />
        </div>
      </motion.div>
    </section>
  );
}
