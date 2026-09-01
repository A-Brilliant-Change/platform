import Image from "next/image";
import { motion } from "framer-motion";
import PrimaryButton from "@/components/ui/PrimaryButton";
import Section from "@/components/ui/Section";

export default function CallToAction() {
  return (
    <Section id="join" className="relative overflow-hidden bg-[#D4AF37] text-[#091B36]">
      {/* Background Image */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.15 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0 -z-10 h-full w-full"
      >
        <Image
          src="/visual-canon/ecosystem/journey-06-opportunity-activation.png"
          alt="Opportunity activation - next chapter awaiting"
          fill
          className="object-cover"
          sizes="100vw"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10"
      >
        <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
          <h2 className="max-w-3xl text-5xl font-light leading-none tracking-tight sm:text-7xl">Let&apos;s Build Brighter Futures Together.</h2>
          <div className="flex flex-wrap gap-3">
            <PrimaryButton href="mailto:hello@abrilliantchange.com" className="bg-[#091B36] text-white hover:bg-white hover:text-[#091B36]">
              Volunteer
            </PrimaryButton>
            <a href="mailto:hello@abrilliantchange.com" className="inline-flex min-h-12 items-center rounded-full border border-[#091B36]/40 px-6 text-xs font-semibold uppercase tracking-[0.16em] text-[#091B36] hover:bg-white">
              Partner
            </a>
            <a href="mailto:hello@abrilliantchange.com" className="inline-flex min-h-12 items-center rounded-full border border-[#091B36]/40 px-6 text-xs font-semibold uppercase tracking-[0.16em] text-[#091B36] hover:bg-white">
              Support ABC
            </a>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}




