import { ArrowUpRight } from "lucide-react";
import Section from "@/components/ui/Section";

export default function FoundersVoice() {
  return (
    <Section id="founder" className="bg-[#091B36]">
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
