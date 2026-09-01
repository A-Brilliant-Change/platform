"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Section from "@/components/ui/Section";

export default function MissionControlSection() {
  return (
    <Section id="mission-control" className="bg-[#091B36]">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="order-last overflow-hidden rounded-3xl border border-white/15 bg-[#0b203d]/50 lg:order-first relative h-96 sm:h-[32rem] lg:h-[28rem]"
        >
          <Image
            src="/visual-canon/infrastructure/mission-control-01-alive-every-day.png"
            alt="Mission Control - alive every day operating system"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 90vw, 45vw"
          />
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
            Operating System
          </p>
          <h2 className="mt-4 text-4xl font-light leading-tight text-white sm:text-6xl">
            Mission Control
          </h2>
          <p className="mt-6 text-lg leading-8 text-white/60">
            The command center for transformation. Real-time intelligence, integrated coordination, and ecosystem accountability—all in one operating system.
          </p>

          {/* Features */}
          <div className="mt-10 space-y-4">
            {[
              "Real-time impact tracking across all initiatives",
              "Integrated ecosystem coordination and alignment",
              "Intelligence-driven decision making",
              "Cross-domain collaboration and resource sharing",
              "Outcome measurement and continuous improvement",
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="flex items-start gap-3"
              >
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#D4AF37]" />
                <p className="text-sm text-white/70">{feature}</p>
              </motion.div>
            ))}
          </div>

          <a
            href="/mission-control"
            className="mt-10 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#D4AF37] hover:text-white"
          >
            <span className="border-b border-[#D4AF37] pb-2 transition-colors">
              Access Mission Control
            </span>
            <span className="inline-block transition-transform group-hover:translate-x-1">
              →
            </span>
          </a>
        </motion.div>
      </div>
    </Section>
  );
}
