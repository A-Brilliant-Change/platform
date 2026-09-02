"use client";

import { motion, useReducedMotion } from "framer-motion";

const particles = [
	[8, 18, 2, 0], [18, 72, 1, 1], [28, 34, 2, 2], [38, 82, 1, 0.5],
	[47, 22, 1, 1.5], [56, 68, 2, 2.5], [67, 16, 1, 0.75], [76, 46, 2, 1.75],
	[86, 78, 1, 2.25], [93, 28, 2, 1.25], [13, 48, 1, 2.75], [71, 88, 1, 0.25],
];

const constellationPoints = [
	[12, 30], [27, 18], [42, 30], [54, 17], [70, 29], [84, 18], [91, 43],
	[74, 54], [59, 45], [43, 60], [27, 49], [14, 64],
];

const constellationLines = [
	[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7], [7, 8], [8, 9],
	[9, 10], [10, 11], [11, 0], [2, 8], [4, 8],
];

const entrance = {
	hidden: { opacity: 0, y: 24 },
	visible: (delay = 0) => ({
		opacity: 1,
		y: 0,
		transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] as const },
	}),
};

export default function Hero() {
	const shouldReduceMotion = useReducedMotion();

	return (
		<section id="mission" className="relative isolate flex min-h-screen items-center overflow-hidden bg-[#091B36] px-6 pb-16 pt-32 sm:px-10 lg:px-16">
			<motion.div
				aria-hidden="true"
				className="absolute inset-0 -z-20 opacity-90"
				animate={shouldReduceMotion ? undefined : { backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
				transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
				style={{
					backgroundImage: "radial-gradient(circle at 22% 35%, rgba(40, 87, 139, 0.34), transparent 30%), radial-gradient(circle at 79% 62%, rgba(212, 175, 55, 0.13), transparent 23%), linear-gradient(115deg, #091b36 5%, #102c52 48%, #071326 100%)",
					backgroundSize: "150% 150%, 130% 130%, 200% 200%",
				}}
			/>

			<motion.div
				aria-hidden="true"
				className="absolute -right-32 top-1/4 -z-10 h-96 w-96 rounded-full bg-[#D4AF37]/10 blur-[110px]"
				animate={shouldReduceMotion ? undefined : { opacity: [0.45, 0.8, 0.45], scale: [0.9, 1.1, 0.9] }}
				transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
			/>

			<div aria-hidden="true" className="absolute inset-0 -z-10 overflow-hidden opacity-50">
				{particles.map(([left, top, size, delay], index) => (
					<motion.span
						key={index}
						className="absolute rounded-full bg-white"
						style={{ left: `${left}%`, top: `${top}%`, width: size, height: size }}
						animate={shouldReduceMotion ? undefined : { opacity: [0.15, 0.8, 0.15], y: [0, -8, 0] }}
						transition={{ duration: 4 + (index % 3), delay, repeat: Infinity, ease: "easeInOut" }}
					/>
				))}
			</div>

			<svg aria-hidden="true" viewBox="0 0 100 80" preserveAspectRatio="none" className="pointer-events-none absolute inset-0 -z-10 h-full w-full opacity-[0.14]">
				{constellationLines.map(([start, end]) => (
					<line
						key={`${start}-${end}`}
						x1={constellationPoints[start][0]}
						y1={constellationPoints[start][1]}
						x2={constellationPoints[end][0]}
						y2={constellationPoints[end][1]}
						stroke="#D4AF37"
						strokeWidth="0.12"
					/>
				))}
				{constellationPoints.map(([cx, cy], index) => (
					<circle key={index} cx={cx} cy={cy} r={index % 3 === 0 ? "0.45" : "0.25"} fill="#D4AF37" />
				))}
			</svg>

			<div className="mx-auto grid w-full max-w-7xl items-end gap-12 lg:grid-cols-[minmax(0,1.25fr)_minmax(18rem,0.75fr)]">
				<div>
					<motion.p
						initial={shouldReduceMotion ? false : "hidden"}
						animate="visible"
						variants={entrance}
						custom={0.1}
						className="mb-7 text-[10px] font-semibold uppercase tracking-[0.36em] text-[#D4AF37]"
					>
						A transformation ecosystem
					</motion.p>
					<motion.h1
						initial={shouldReduceMotion ? false : "hidden"}
						animate="visible"
						variants={entrance}
						custom={0.2}
						className="max-w-5xl text-5xl font-light leading-[0.95] tracking-tighter text-white sm:text-7xl lg:text-[7.25rem]"
					>
						The Future Doesn&apos;t Just Happen.
						<span className="mt-3 block text-white/45">It Gets Built.</span>
					</motion.h1>
					<motion.p
						initial={shouldReduceMotion ? false : "hidden"}
						animate="visible"
						variants={entrance}
						custom={0.35}
						className="mt-8 max-w-xl text-base font-light leading-7 text-white/65 sm:text-lg"
					>
						A Brilliant Change is creating a transformation ecosystem where people, organizations, and communities gain the tools, opportunities, and support needed to thrive.
					</motion.p>
					<motion.div
						initial={shouldReduceMotion ? false : "hidden"}
						animate="visible"
						variants={entrance}
						custom={0.5}
						className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center"
					>
						<a href="#mission" className="group inline-flex min-h-12 items-center justify-center gap-4 rounded-full bg-[#D4AF37] px-6 text-[10px] font-bold uppercase tracking-[0.18em] text-[#091B36] transition-colors hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D4AF37]">
							Explore The Mission <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
						</a>
						<a href="#atlas" className="group inline-flex min-h-12 items-center justify-center gap-4 rounded-full border border-white/25 px-6 text-[10px] font-semibold uppercase tracking-[0.18em] text-white transition-colors hover:border-[#D4AF37] hover:text-[#D4AF37] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D4AF37]">
							Enter The Atlas <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
						</a>
						<a href="#join" className="inline-flex min-h-12 items-center justify-center px-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/55 transition-colors hover:text-[#D4AF37] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D4AF37]">
							Join The Movement
						</a>
					</motion.div>
				</div>

				<motion.div
					initial={shouldReduceMotion ? false : { opacity: 0, x: 24 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 1, delay: shouldReduceMotion ? 0 : 0.7, ease: [0.22, 1, 0.36, 1] }}
					className="hidden border-l border-[#D4AF37]/40 pl-6 lg:block"
				>
					<span className="text-[10px] uppercase tracking-[0.3em] text-[#D4AF37]">01 / 07</span>
					<p className="mt-4 max-w-xs text-sm font-light leading-6 text-white/45">Every meaningful shift begins with a decision to build a different future.</p>
				</motion.div>
			</div>

			<motion.a
				href="#atlas"
				initial={shouldReduceMotion ? false : { opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: shouldReduceMotion ? 0 : 1.2, duration: 0.8 }}
				className="absolute bottom-7 left-6 hidden items-center gap-3 text-[9px] uppercase tracking-[0.28em] text-white/40 transition-colors hover:text-[#D4AF37] focus-visible:outline-2 focus-visible:outline-[#D4AF37] sm:flex lg:left-16"
			>
				<span className="h-px w-8 bg-[#D4AF37]" /> Scroll to explore
			</motion.a>
		</section>
	);
}





