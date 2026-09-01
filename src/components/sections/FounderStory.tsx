"use client";

import { ArrowUpRight, Compass, Eye, Sparkles } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const reveal = {
	initial: { opacity: 0, y: 28 },
	whileInView: { opacity: 1, y: 0 },
	viewport: { once: true, amount: 0.25 },
};

export default function FounderStory() {
	const sectionRef = useRef<HTMLElement>(null);
	const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

	return (
		<section ref={sectionRef} id="mission" className="relative isolate overflow-hidden border-t border-white/10 bg-[#0b203d] px-6 py-28 sm:px-10 lg:px-16 lg:py-40">
			<div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_22%,rgba(212,175,55,0.13),transparent_28%),linear-gradient(115deg,#091b36_0%,#0b203d_52%,#071426_100%)]" />
			<div aria-hidden="true" className="pointer-events-none absolute -right-32 top-1/4 -z-10 h-96 w-96 rounded-full bg-[#D4AF37]/10 blur-[130px]" />

			<div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-24">
				<motion.div {...reveal} animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.97 }} transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }} className="relative min-h-112 overflow-hidden rounded-4xl border border-white/15 bg-[#102b4d] shadow-[0_30px_100px_rgba(0,0,0,0.28)] sm:min-h-152">
					<div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(145deg,rgba(255,255,255,0.12),transparent_28%,transparent_70%,rgba(212,175,55,0.12))]" />
					<div aria-hidden="true" className="absolute inset-0 opacity-25 bg-[linear-gradient(rgba(255,255,255,0.13)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.13)_1px,transparent_1px)] bg-size-[4rem_4rem]" />
					<div aria-hidden="true" className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#D4AF37]/30 shadow-[0_0_80px_rgba(212,175,55,0.15)] sm:h-72 sm:w-72" />
					<div aria-hidden="true" className="absolute left-1/2 top-1/2 h-px w-[72%] -translate-x-1/2 bg-linear-to-r from-transparent via-[#D4AF37]/70 to-transparent" />
					<div aria-hidden="true" className="absolute left-1/2 top-1/2 h-[72%] w-px -translate-x-1/2 bg-linear-to-b from-transparent via-white/35 to-transparent" />
					<div className="absolute inset-x-7 bottom-7 flex items-end justify-between gap-6 sm:inset-x-10 sm:bottom-10">
						<div>
							<p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">Founder story</p>
							<p className="mt-3 max-w-52 text-sm font-light leading-6 text-white/65">A portrait of the belief that change is possible.</p>
						</div>
						<span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/20 text-[#D4AF37]" aria-hidden="true"><Sparkles size={18} strokeWidth={1.4} /></span>
					</div>
				</motion.div>

				<div>
					<motion.div {...reveal} transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}>
						<p className="text-[10px] font-semibold uppercase tracking-[0.34em] text-[#D4AF37]">The reason we begin</p>
						<h2 className="mt-5 max-w-2xl text-5xl font-light leading-[0.98] tracking-tighter text-white sm:text-7xl">Because Potential Should Never Be Wasted.</h2>
						<p className="mt-7 max-w-xl text-lg font-light leading-8 text-white/60">A Brilliant Change exists because transformation is possible and human potential deserves opportunity.</p>
					</motion.div>

					<motion.div {...reveal} transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }} className="mt-10 max-w-xl border-l border-[#D4AF37]/70 pl-6">
						<p className="text-xl font-light leading-8 text-white/85">Transformation begins when someone believes change is possible.</p>
						<p className="mt-5 text-sm font-light leading-7 text-white/55">A Brilliant Change was created to build pathways that connect people with opportunity, community, technology, leadership, and hope. The mission is not simply to address challenges but to create systems that help people move toward purpose, contribution, and long-term impact.</p>
					</motion.div>

					<div className="mt-10 grid gap-3 sm:grid-cols-2">
						<motion.article {...reveal} transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }} className="rounded-2xl border border-white/10 bg-white/5.5 p-6 backdrop-blur-xl">
							<Compass className="text-[#D4AF37]" size={20} strokeWidth={1.4} aria-hidden="true" />
							<h3 className="mt-6 text-lg font-light text-white">Mission</h3>
							<p className="mt-3 text-sm font-light leading-6 text-white/55">Build connected pathways that turn human potential into purpose and contribution.</p>
						</motion.article>
						<motion.article {...reveal} transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }} className="rounded-2xl border border-[#D4AF37]/30 bg-[#D4AF37]/[0.07] p-6 backdrop-blur-xl">
							<Eye className="text-[#D4AF37]" size={20} strokeWidth={1.4} aria-hidden="true" />
							<h3 className="mt-6 text-lg font-light text-white">Vision</h3>
							<p className="mt-3 text-sm font-light leading-6 text-white/55">A world where every person can move toward a more brilliant future.</p>
						</motion.article>
					</div>

					<motion.a {...reveal} transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }} href="#mission" className="group mt-10 inline-flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
						<span className="border-b border-[#D4AF37]/50 pb-2 transition-colors group-hover:border-white group-hover:text-white">Explore The Mission</span>
						<ArrowUpRight size={16} strokeWidth={1.5} aria-hidden="true" className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
					</motion.a>
				</div>
			</div>
		</section>
	);
}




