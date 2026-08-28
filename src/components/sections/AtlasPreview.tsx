"use client";

import { ArrowUpRight, BriefcaseBusiness, ChartNoAxesCombined, Clapperboard, Globe2, HeartPulse, Sparkles, UsersRound, type LucideIcon } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

type AtlasNode = {
	id: string;
	title: string;
	description: string;
	icon: LucideIcon;
	x: string;
	y: string;
	center?: boolean;
};

const nodes: AtlasNode[] = [
	{ id: "leadership", title: "Leadership & Legacy", description: "Develop leaders who create influence, stewardship, and lasting impact.", icon: HeartPulse, x: "50%", y: "9%" },
	{ id: "community", title: "Community Transformation", description: "Strengthen neighborhoods through trust, collaboration, and civic engagement.", icon: UsersRound, x: "14%", y: "28%" },
	{ id: "economic", title: "Economic Transformation", description: "Create pathways from financial instability to mobility and wealth.", icon: ChartNoAxesCombined, x: "86%", y: "28%" },
	{ id: "technology", title: "Digital Transformation", description: "Make technology an opportunity multiplier for people and communities.", icon: Globe2, x: "30%", y: "54%" },
	{ id: "abc", title: "A Brilliant Change", description: "The center of an interconnected ecosystem powering transformation.", icon: Sparkles, x: "50%", y: "54%", center: true },
	{ id: "workforce", title: "Workforce Transformation", description: "Move people from workforce barriers into meaningful careers.", icon: BriefcaseBusiness, x: "70%", y: "54%" },
	{ id: "media", title: "Media & Storytelling", description: "Amplify transformation through communication, creativity, and narrative.", icon: Clapperboard, x: "14%", y: "81%" },
	{ id: "ministry", title: "Faith & Inspiration", description: "Provide hope, purpose, service, and encouragement for the journey.", icon: Sparkles, x: "86%", y: "81%" },
];

const links = nodes.filter((node) => !node.center);

export default function AtlasPreview() {
	const sectionRef = useRef<HTMLElement>(null);
	const isInView = useInView(sectionRef, { once: true, amount: 0.18 });
	const [activeNode, setActiveNode] = useState("abc");

	return (
		<section ref={sectionRef} id="atlas" className="relative isolate overflow-hidden border-t border-white/10 bg-[#071426] px-6 py-28 sm:px-10 lg:px-16 lg:py-40">
			<div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_48%,rgba(212,175,55,0.1),transparent_27%),linear-gradient(145deg,#091b36_0%,#071426_65%,#0b203d_100%)]" />
			<div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-1/3 -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-[#D4AF37]/5 blur-[130px]" />

			<div className="mx-auto max-w-7xl">
				<motion.div initial={{ opacity: 0, y: 24 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }} className="mx-auto max-w-2xl text-center">
					<p className="text-[10px] font-semibold uppercase tracking-[0.34em] text-[#D4AF37]">A living map of possibility</p>
					<h2 className="mt-5 text-5xl font-light tracking-tighter text-white sm:text-7xl">The Transformation Atlas</h2>
					<p className="mx-auto mt-6 max-w-xl text-lg font-light leading-7 text-white/55">Explore the interconnected ecosystem powering A Brilliant Change.</p>
				</motion.div>

				<div className="relative mx-auto mt-16 aspect-4/3 min-h-124 max-w-6xl overflow-hidden rounded-4xl border border-white/10 bg-[#091b36]/60 shadow-[0_30px_100px_rgba(0,0,0,0.3)] backdrop-blur-xl sm:mt-20">
					<div aria-hidden="true" className="absolute inset-0 opacity-30 bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-size-[3rem_3rem]" />
					<div aria-hidden="true" className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-[#D4AF37]/5" />

					<svg aria-hidden="true" className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
						{links.map((node, index) => (
							<motion.line key={node.id} x1="50" y1="54" x2={parseFloat(node.x)} y2={parseFloat(node.y)} stroke="#D4AF37" strokeOpacity="0.35" strokeWidth="0.18" strokeDasharray="1 1" initial={{ pathLength: 0, opacity: 0 }} animate={isInView ? { pathLength: 1, opacity: activeNode === node.id || activeNode === "abc" ? 0.9 : 0.35 } : { pathLength: 0, opacity: 0 }} transition={{ pathLength: { duration: 1.2, delay: 0.3 + index * 0.08 }, opacity: { duration: 0.35 } }} />
						))}
						{links.map((node, index) => (
							<motion.circle key={`${node.id}-energy`} r="0.55" fill="#D4AF37" initial={{ opacity: 0 }} animate={isInView ? { opacity: [0, 0.9, 0], cx: [50, parseFloat(node.x)], cy: [54, parseFloat(node.y)] } : { opacity: 0 }} transition={{ duration: 2.8, delay: 1.2 + index * 0.35, repeat: Infinity, ease: "easeInOut" }} />
						))}
					</svg>

					{["18%", "37%", "62%", "78%"].map((left, index) => (
						<motion.span key={left} aria-hidden="true" className="absolute h-1 w-1 rounded-full bg-[#D4AF37]" style={{ left, top: `${24 + index * 17}%` }} animate={isInView ? { opacity: [0.1, 0.7, 0.1], y: [0, -12, 0] } : { opacity: 0 }} transition={{ duration: 4 + index, delay: index * 0.4, repeat: Infinity, ease: "easeInOut" }} />
					))}

					{nodes.map((node, index) => {
						const Icon = node.icon;
						const isActive = activeNode === node.id;

						return (
							<motion.button key={node.id} type="button" aria-label={`Explore ${node.title}`} aria-pressed={isActive} data-atlas-node={node.id} onMouseEnter={() => setActiveNode(node.id)} onFocus={() => setActiveNode(node.id)} onClick={() => setActiveNode(node.id)} initial={{ opacity: 0, scale: 0.75 }} animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.75 }} transition={{ duration: 0.7, delay: 0.45 + index * 0.08, ease: [0.22, 1, 0.36, 1] }} className="group absolute z-10 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center text-center outline-none" style={{ left: node.x, top: node.y }}>
								<span className={`relative flex h-12 w-12 items-center justify-center rounded-full border transition-all duration-500 sm:h-16 sm:w-16 ${node.center ? "border-[#D4AF37] bg-[#D4AF37] text-[#091B36] shadow-[0_0_0_10px_rgba(212,175,55,0.08),0_0_50px_rgba(212,175,55,0.5)]" : "border-white/25 bg-[#0d2443]/90 text-[#D4AF37] shadow-[0_0_22px_rgba(212,175,55,0.08)]"} ${isActive ? "scale-110 border-[#D4AF37] shadow-[0_0_0_10px_rgba(212,175,55,0.12),0_0_40px_rgba(212,175,55,0.55)]" : "group-hover:scale-110 group-hover:border-[#D4AF37] group-hover:shadow-[0_0_0_10px_rgba(212,175,55,0.1),0_0_40px_rgba(212,175,55,0.45)]"}`}>
									<Icon size={node.center ? 21 : 18} strokeWidth={1.4} aria-hidden="true" />
								</span>
								<span className={`mt-3 max-w-28 text-[10px] font-medium leading-4 transition-colors sm:max-w-40 sm:text-xs ${node.center ? "text-[#D4AF37]" : isActive ? "text-white" : "text-white/65 group-hover:text-white"}`}>{node.title}</span>
								<span className={`pointer-events-none absolute left-1/2 top-full z-20 mt-3 w-48 -translate-x-1/2 rounded-xl border border-[#D4AF37]/35 bg-[#091B36]/95 p-4 text-left opacity-0 shadow-[0_20px_50px_rgba(0,0,0,0.35)] backdrop-blur-xl transition-all duration-300 group-hover:translate-y-1 group-hover:opacity-100 ${isActive ? "sm:opacity-100 sm:translate-y-1" : ""}`}>
										<strong className="block text-xs font-medium text-[#D4AF37]">{node.title}</strong>
										<span className="mt-2 block text-[11px] font-light leading-5 text-white/65">{node.description}</span>
										<span className="mt-3 block text-[9px] font-semibold uppercase tracking-[0.16em] text-white/85">Click To Explore</span>
									</span>
							</motion.button>
						);
					})}
				</div>

				<motion.div initial={{ opacity: 0, y: 18 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }} transition={{ duration: 0.8, delay: 1.1, ease: [0.22, 1, 0.36, 1] }} className="mt-10 text-center">
					<a href="#atlas" className="group inline-flex items-center gap-4 rounded-full border border-[#D4AF37]/70 bg-[#D4AF37] px-6 py-4 text-xs font-bold uppercase tracking-[0.18em] text-[#091B36] transition-all duration-300 hover:border-white hover:bg-white">
						Enter The Atlas <ArrowUpRight size={16} strokeWidth={1.7} aria-hidden="true" className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
					</a>
				</motion.div>
			</div>
		</section>
	);
}
