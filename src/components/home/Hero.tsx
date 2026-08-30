"use client";

import { motion } from "framer-motion";
import PrimaryButton from "@/components/ui/PrimaryButton";

export default function Hero() {
  return (
    <section id="top" className="relative isolate flex min-h-screen items-end overflow-hidden px-6 pb-20 pt-32 sm:px-10 lg:px-16 lg:pb-28">
      <img src="/hero/ABC-Website-Hero-Cityscape-GoldenHour-v1.png" alt="A city at golden hour" className="absolute inset-0 -z-20 h-full w-full object-cover object-center" />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-linear-to-r from-[#091B36] via-[#091B36]/75 to-[#091B36]/20" />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-linear-to-t from-[#091B36] via-transparent to-[#091B36]/30" />
      <div className="mx-auto w-full max-w-7xl">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }} className="max-w-4xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">The ABC Transformation Operating System</p>
          <h1 className="mt-6 text-6xl font-light leading-[0.9] tracking-tight text-white sm:text-8xl lg:text-[7.5rem]">Building Brighter Futures.<br />Creating Opportunities.<br /><span className="text-white/50">Designing Systems.</span></h1>
          <p className="mt-8 max-w-xl text-lg font-light leading-8 text-white/70">A Brilliant Change is building the Infrastructure of Transformation to expand opportunity, strengthen communities, and create lasting impact.</p>
          <div className="mt-10 flex flex-wrap gap-3"><PrimaryButton href="#atlas">Explore The Atlas</PrimaryButton><a href="#join" className="inline-flex min-h-12 items-center rounded-full border border-white/30 px-6 text-xs font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:border-[#D4AF37] hover:text-[#D4AF37]">Join The Movement</a></div>
        </motion.div>
      </div>
    </section>
  );
}
