"use client";

import { animate, motion, useInView, useMotionValue, useMotionValueEvent } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const metrics = [
	{ value: 33, label: "Transformation Initiatives" },
	{ value: 6, label: "Transformation Domains" },
	{ value: 1, label: "Mission" },
	{ value: null, label: "Human Potential" },
];

function MetricValue({ value, active }: { value: number | null; active: boolean }) {
	const count = useMotionValue(0);
	const [displayValue, setDisplayValue] = useState(0);

	useMotionValueEvent(count, "change", (latest) => {
		setDisplayValue(Math.round(latest));
	});

	useEffect(() => {
		if (value === null || !active) return;

		const controls = animate(count, value, {
			duration: 1.8,
			ease: [0.22, 1, 0.36, 1],
		});

		return () => controls.stop();
	}, [active, count, value]);

	return <span>{value === null ? "∞" : displayValue}</span>;
}

export default function Metrics() {
	const sectionRef = useRef<HTMLElement>(null);
	const isInView = useInView(sectionRef, { once: true, amount: 0.35 });

	return (
		<section ref={sectionRef} id="metrics" className="relative isolate overflow-hidden border-t border-white/10 bg-[#091B36] px-6 py-28 sm:px-10 lg:px-16 lg:py-36">
			<motion.div
				aria-hidden="true"
				className="absolute -left-24 top-1/2 -z-10 h-80 w-80 -translate-y-1/2 rounded-full bg-[#D4AF37]/10 blur-[120px]"
				initial={{ opacity: 0 }}
				animate={{ opacity: isInView ? 1 : 0 }}
				transition={{ duration: 1.4 }}
			/>
			<div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 opacity-35">
				{["12%", "31%", "52%", "77%", "91%"].map((left, index) => (
					<motion.span
						key={left}
						className="absolute h-1 w-1 rounded-full bg-[#D4AF37]"
						style={{ left, top: `${20 + index * 15}%` }}
						animate={isInView ? { opacity: [0.15, 0.75, 0.15], y: [0, -10, 0] } : { opacity: 0 }}
						transition={{ duration: 4 + index, delay: index * 0.2, repeat: Infinity, ease: "easeInOut" }}
					/>
				))}
			</div>

			<div className="relative mx-auto max-w-7xl">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
					transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
					className="mb-16 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between"
				>
					<div>
						<p className="text-[10px] font-semibold uppercase tracking-[0.34em] text-[#D4AF37]">The scale of possibility</p>
						<h2 className="mt-5 max-w-2xl text-4xl font-light tracking-tighter text-white sm:text-6xl">Transformation, measured in motion.</h2>
					</div>
					<p className="max-w-xs text-sm font-light leading-6 text-white/45">Small shifts compound. Together, they become a new direction.</p>
				</motion.div>

				<div className="grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
					{metrics.map((metric, index) => (
						<motion.article
							key={metric.label}
							initial={{ opacity: 0, y: 18 }}
							animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
							transition={{ duration: 0.7, delay: 0.15 + index * 0.1, ease: [0.22, 1, 0.36, 1] }}
							className="group relative min-h-56 overflow-hidden bg-[#0d2443]/85 p-7 backdrop-blur-xl transition-colors duration-500 hover:bg-[#122e51] sm:min-h-64 sm:p-8"
						>
							<span className="absolute right-7 top-7 text-[10px] tracking-[0.2em] text-white/25">0{index + 1}</span>
							<p className="text-7xl font-light tracking-tighter text-[#D4AF37] sm:text-8xl">
								<MetricValue value={metric.value} active={isInView} />
							</p>
							<div className="absolute inset-x-7 bottom-7 h-px bg-white/10 transition-colors duration-500 group-hover:bg-[#D4AF37]/60" />
							<h3 className="absolute bottom-11 max-w-48 text-sm font-medium leading-5 text-white/80">{metric.label}</h3>
						</motion.article>
					))}
				</div>
			</div>
		</section>
	);
}
