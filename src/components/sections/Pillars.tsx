"use client";

import {
	Activity,
	BriefcaseBusiness,
	Building2,
	ChartNoAxesCombined,
	Globe2,
	HeartPulse,
	Network,
	Sparkles,
	Sunrise,
	UsersRound,
	type LucideIcon,
} from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { pillars } from "@/src/data/atlas/pillars";
import type { Pillar } from "@/src/data/atlas/pillars";

const icons: Record<string, LucideIcon> = {
	briefcase: BriefcaseBusiness,
	chart: ChartNoAxesCombined,
	community: UsersRound,
	globe: Globe2,
	leadership: HeartPulse,
	infrastructure: Building2,
	systems: Network,
	sunrise: Sunrise,
	organization: Activity,
	sparkles: Sparkles,
};

export default function Pillars() {
	const [activePillar, setActivePillar] = useState<Pillar["id"]>(pillars[0].id);

	return (
		<section id="pillars" className="relative overflow-hidden border-t border-white/10 bg-[#091B36] px-6 py-28 sm:px-10 lg:px-16 lg:py-40">
			<div aria-hidden="true" className="pointer-events-none absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-[#D4AF37]/10 blur-[130px]" />
			<div aria-hidden="true" className="pointer-events-none absolute right-[8%] top-24 h-px w-32 bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent" />

			<div className="relative mx-auto max-w-7xl">
				<motion.div
					initial={{ opacity: 0, y: 24 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.3 }}
					transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
					className="max-w-3xl"
				>
					<p className="text-[10px] font-semibold uppercase tracking-[0.34em] text-[#D4AF37]">The Atlas architecture</p>
					<h2 className="mt-5 text-5xl font-light tracking-tighter text-white sm:text-7xl">The Ten Pillars of Transformation</h2>
					<p className="mt-6 max-w-2xl text-lg font-light leading-7 text-white/55">Ten interconnected domains working together to advance individuals, strengthen communities, and create lasting transformation.</p>
				</motion.div>

				<div className="mt-16 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
					{pillars.map((pillar, index) => {
						const Icon = icons[pillar.icon];
						const isActive = activePillar === pillar.id;

						return (
							<motion.button
								key={pillar.id}
								type="button"
								aria-pressed={isActive}
								onClick={() => setActivePillar(pillar.id)}
								initial={{ opacity: 0, y: 24 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true, amount: 0.2 }}
								transition={{ duration: 0.6, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
								className={`group relative flex min-h-64 flex-col items-start overflow-hidden rounded-3xl border p-6 text-left backdrop-blur-xl transition-all duration-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4AF37] ${isActive ? "border-[#D4AF37]/60 bg-[#D4AF37]/10 shadow-[0_0_36px_rgba(212,175,55,0.12)]" : "border-white/10 bg-white/[0.045] hover:-translate-y-1 hover:border-[#D4AF37]/45 hover:bg-white/[0.08]"}`}
							>
								<span className="absolute right-5 top-5 text-[10px] tracking-[0.2em] text-white/25">0{index + 1}</span>
								<span className={`flex h-11 w-11 items-center justify-center rounded-2xl border transition-all duration-500 ${isActive ? "border-[#D4AF37] bg-[#D4AF37] text-[#091B36]" : "border-white/15 text-[#D4AF37] group-hover:border-[#D4AF37]"}`}>
									<Icon size={20} strokeWidth={1.5} aria-hidden="true" />
								</span>
								<h3 className="mt-8 max-w-[12rem] text-lg font-light leading-6 text-white">{pillar.title}</h3>
								<p className="mt-3 text-xs font-light leading-5 text-white/50">{pillar.description}</p>
								<span className={`mt-auto pt-6 text-[9px] font-semibold uppercase tracking-[0.18em] transition-colors ${isActive ? "text-[#D4AF37]" : "text-white/35 group-hover:text-[#D4AF37]"}`}>Explore Domain -&gt;</span>
							</motion.button>
						);
					})}
				</div>

				<motion.div
					key={activePillar}
					initial={{ opacity: 0, x: -8 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.35 }}
					className="mt-8 flex items-center gap-3 text-[10px] uppercase tracking-[0.25em] text-white/35"
				>
					<span className="h-px w-8 bg-[#D4AF37]" /> Atlas relationship: <span className="text-[#D4AF37]">{pillars.find((pillar) => pillar.id === activePillar)?.atlasRelationship}</span>
				</motion.div>
			</div>
		</section>
	);
}
