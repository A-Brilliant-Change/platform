import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import Section from "@/components/ui/Section";

export default function FoundersVoice() {
  return (
    <Section id="founder" className="bg-[#091B36]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-16 overflow-hidden rounded-3xl border border-white/10 bg-white/5 relative h-96 sm:h-[32rem]"
      >
        <Image
          src="/visual-canon/origin/founders-journey-02-the-founders-journey.png"
          alt="The founders journey - vision and belief in transformation"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 100vw"
        />
      </motion.div>

      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
            Founder’s voice
          </p>
          <p className="mt-6 text-3xl font-light leading-tight text-white sm:text-5xl">
            “Transformation begins when someone believes change is possible.”
          </p>
        </div>
        <div className="border-l border-[#D4AF37]/60 pl-6 sm:pl-10">
          <p className="max-w-2xl text-lg leading-8 text-white/60">
            A Brilliant Change exists because human potential deserves
            opportunity. The work is to connect people, community, technology,
            leadership, and hope into systems that create lasting impact.
          </p>
<div className="mt-10">
  <p className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
    The Journey
  </p>

  <div className="space-y-5">
    {[
      {
        year: "Origin",
        title: "The Reality",
        description:
          "Experiencing firsthand challenges that revealed the need for a more connected path toward opportunity and transformation.",
      },
      {
        year: "Vision",
        title: "The Idea",
        description:
          "Believing that people thrive when systems, support, community, and opportunity work together.",
      },
      {
        year: "Design",
        title: "The Blueprint",
        description:
          "Developing the framework that would become A Brilliant Change and its interconnected ecosystem.",
      },
      {
        year: "Launch",
        title: "The Movement",
        description:
          "Turning vision into action through workforce development, technology, community engagement, and opportunity creation.",
      },
    ].map((step) => (
      <motion.div
        key={step.title}
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex gap-5 border-l border-[#D4AF37]/40 pl-5"
      >
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#D4AF37]">
            {step.year}
          </p>

          <h4 className="mt-1 text-lg font-light text-white">
            {step.title}
          </h4>

          <p className="mt-2 text-sm leading-6 text-white/60">
            {step.description}
          </p>
        </div>
      </motion.div>
    ))}
  </div>
</div>
          <a
            href="/founder"
            className="mt-8 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#D4AF37]"
          >
            Read Founder’s Voice <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </Section>
  );
}




