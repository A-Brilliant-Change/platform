import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Section from "@/components/ui/Section";

const organizations = ["ABC Talent Solutions", "ABC IT Solutions", "BrilliantWeb.Dev", "Digilliance.Tech", "Tulsa Times"];

export default function EcosystemPreview() {
  return (
    <Section id="ecosystem" className="bg-[#0b203d]">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.25fr] lg:items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">One mission, many expressions</p>
          <h2 className="mt-5 text-5xl font-light tracking-tight text-white sm:text-7xl">The ecosystem moves together.</h2>
          <p className="mt-6 max-w-xl text-lg leading-8 text-white/55">Multiple initiatives, one connected operating system for building brighter futures.</p>
          <a href="/ecosystem" className="mt-8 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#D4AF37]">Explore the ecosystem <ArrowUpRight size={16} /></a>
        </div>
        <div className="relative overflow-hidden border border-white/15 bg-[#091B36] h-96 sm:h-[32rem]">
          <Image
            src="/visual-canon/atlas/atlas-03-the-atlas-of-opportunity.png"
            alt="The atlas of opportunity - ecosystem overview"
            fill
            className="object-cover opacity-75"
            sizes="(max-width: 1024px) 90vw, 45vw"
          />
          <div className="absolute inset-0 bg-linear-to-t from-[#091B36] via-transparent to-transparent" />
          <div className="absolute inset-x-6 bottom-6 flex flex-wrap gap-2">{organizations.map((organization) => <span key={organization} className="border border-white/20 bg-[#091B36]/80 px-3 py-2 text-xs text-white/80 backdrop-blur">{organization}</span>)}</div>
        </div>
      </div>
    </Section>
  );
}




