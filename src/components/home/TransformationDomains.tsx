"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import Section from "@/src/components/ui/Section";
import { pillars } from "@/src/data/atlas/pillars";

const domainPillars = pillars.slice(0, 5);

export default function TransformationDomains() {
  return (
    <Section id="domains" className="bg-[#091B36]">
      <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-end"><div><p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">The transformation domains</p><h2 className="mt-4 max-w-2xl text-4xl font-light tracking-tight text-white sm:text-6xl">Where possibility becomes practice.</h2></div><p className="max-w-xs text-sm leading-6 text-white/50">Five primary domains opening into the wider Atlas.</p></div>
      <div className="mt-14 grid gap-3 md:grid-cols-5">{domainPillars.map((pillar, index) => <motion.a key={pillar.id} href={`/atlas#${pillar.id}`} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.06 }} className="group min-h-64 border border-white/10 bg-white/5 p-6 transition-colors hover:border-[#D4AF37]/60 hover:bg-[#D4AF37]/10"><span className="text-xs text-[#D4AF37]">{pillar.code}</span><h3 className="mt-12 text-xl font-light leading-6 text-white">{pillar.title}</h3><p className="mt-4 text-sm leading-6 text-white/50">{pillar.description}</p><span className="mt-8 inline-flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-white/60 group-hover:text-[#D4AF37]">Learn more <ArrowUpRight size={14} /></span></motion.a>)}</div>
    </Section>
  );
}
