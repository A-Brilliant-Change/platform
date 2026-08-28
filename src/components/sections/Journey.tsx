"use client";

import { motion, useInView, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";

const stages = [
	{ title: "Crisis", description: "Every journey begins with recognizing challenges." },
	{ title: "Stability", description: "Create a foundation for growth and progress." },
	{ title: "Skills", description: "Develop practical abilities and confidence." },
	{ title: "Opportunity", description: "Connect preparation to meaningful pathways." },
	{ title: "Leadership", description: "Learn to influence and serve others." },
	{ title: "Legacy", description: "Create lasting impact beyond yourself." },
];

export default function Journey() {
	const sectionRef = useRef<HTMLElement>(null);
	const isInView = useInView(sectionRef, { once: true, amount: 0.15 });
	const { scrollYProgress } = useScroll({
		target: sectionRef,
		offset: ["start 70%", "end 30%"],
	});
	const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 24, mass: 0.2 });

	return (
		<section ref={sectionRef} id="journey" className="relative isolate overflow-hidden border-t border-white/10 bg-[#091B36] px-6 py-28 sm:px-10 lg:px-16 lg:py-40">
			<div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 opacity-30">
				{["9%", "23%", "41%", "64%", "82%", "94%"].map((left, index) => (
					<motion.span
						key={left}
						className="absolute h-1 w-1 rounded-full bg-white"
						style={{ left, top: `${14 + index * 13}%` }}
						animate={isInView ? { opacity: [0.15, 0.65, 0.15], y: [0, -8, 0] } : { opacity: 0 }}
						transition={{ duration: 5 + index, delay: index * 0.3, repeat: Infinity, ease: "easeInOut" }}
					/>
				))}
			</div>
			<div aria-hidden="true" className="absolute -right-40 top-1/3 -z-10 h-96 w-96 rounded-full bg-[#D4AF37]/10 blur-[130px]" />

			<div className="mx-auto max-w-7xl">
				<motion.div
					initial={{ opacity: 0, y: 24 }}
					animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
					transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
					className="max-w-2xl"
				>
					<p className="text-[10px] font-semibold uppercase tracking-[0.34em] text-[#D4AF37]">A framework for becoming</p>
					<h2 className="mt-5 text-5xl font-light tracking-tighter text-white sm:text-7xl">The Pathway Upward</h2>
					<p className="mt-6 max-w-xl text-lg font-light leading-7 text-white/55">A systematic approach to elevating human potential.</p>
				</motion.div>

				<div className="relative mt-20 lg:mt-28">
					<div aria-hidden="true" className="absolute bottom-0 left-4 top-0 w-px bg-white/10 lg:left-1/2 lg:-translate-x-1/2" />
					<motion.div
						aria-hidden="true"
						className="absolute left-4 top-0 w-px origin-top bg-[#D4AF37] shadow-[0_0_18px_rgba(212,175,55,0.9)] lg:left-1/2 lg:-translate-x-1/2"
						style={{ height: "100%", scaleY: progress }}
					/>

					<div className="space-y-10 lg:space-y-0">
						{stages.map((stage, index) => {
							const isEven = index % 2 === 1;

							return (
								<motion.div
									key={stage.title}
									initial={{ opacity: 0, y: 28 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true, amount: 0.35 }}
									transition={{ duration: 0.75, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
									className="relative grid grid-cols-[2rem_minmax(0,1fr)] items-center gap-5 lg:min-h-64 lg:grid-cols-2 lg:gap-20"
								>
									<motion.span
										aria-hidden="true"
										className="absolute left-4 top-8 z-10 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-[#D4AF37] bg-[#091B36] shadow-[0_0_0_5px_rgba(212,175,55,0.08),0_0_20px_rgba(212,175,55,0.8)] lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2"
										animate={{ boxShadow: ["0 0 0 5px rgba(212,175,55,0.08), 0 0 12px rgba(212,175,55,0.55)", "0 0 0 9px rgba(212,175,55,0.02), 0 0 26px rgba(212,175,55,0.95)", "0 0 0 5px rgba(212,175,55,0.08), 0 0 12px rgba(212,175,55,0.55)"] }}
										transition={{ duration: 3, delay: index * 0.25, repeat: Infinity, ease: "easeInOut" }}
									/>
									<div className={`col-start-2 lg:col-start-auto ${isEven ? "lg:col-start-2" : "lg:col-start-1 lg:row-start-1"}`}>
										<div className={`group rounded-3xl border border-white/10 bg-white/[0.055] p-6 backdrop-blur-xl transition-colors duration-500 hover:border-[#D4AF37]/45 hover:bg-white/[0.09] sm:p-8 ${isEven ? "lg:ml-10" : "lg:mr-10"}`}>
											<div className="flex items-start justify-between gap-4">
												<h3 className="text-2xl font-light tracking-tight text-white sm:text-3xl">{stage.title}</h3>
												<span className="pt-1 text-[10px] font-semibold tracking-[0.24em] text-[#D4AF37]">PHASE 0{index + 1}</span>
											</div>
											<p className="mt-5 max-w-md text-sm font-light leading-6 text-white/55">{stage.description}</p>
											<div className="mt-7 h-px w-10 bg-[#D4AF37] transition-all duration-500 group-hover:w-20" />
										</div>
									</div>
								</motion.div>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
}
