import PrimaryButton from "@/src/components/ui/PrimaryButton";
import Section from "@/src/components/ui/Section";

export default function CallToAction() {
  return <Section id="join" className="bg-[#D4AF37] text-[#091B36]"><div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-end"><h2 className="max-w-3xl text-5xl font-light leading-none tracking-tight sm:text-7xl">Let&apos;s Build Brighter Futures Together.</h2><div className="flex flex-wrap gap-3"><PrimaryButton href="mailto:hello@abrilliantchange.com" className="bg-[#091B36] text-white hover:bg-white hover:text-[#091B36]">Volunteer</PrimaryButton><a href="mailto:hello@abrilliantchange.com" className="inline-flex min-h-12 items-center rounded-full border border-[#091B36]/40 px-6 text-xs font-semibold uppercase tracking-[0.16em] text-[#091B36] hover:bg-white">Partner</a><a href="mailto:hello@abrilliantchange.com" className="inline-flex min-h-12 items-center rounded-full border border-[#091B36]/40 px-6 text-xs font-semibold uppercase tracking-[0.16em] text-[#091B36] hover:bg-white">Support ABC</a></div></div></Section>;
}
