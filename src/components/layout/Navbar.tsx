"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const navigation = [
	{ label: "Home", href: "/" },
	{ label: "Atlas", href: "/atlas" },
	{ label: "Journey", href: "/journey" },
	{ label: "About", href: "/about" },
	{ label: "Contact", href: "/contact" },
];

export default function Navbar() {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => setIsScrolled(window.scrollY > 24);
		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key === "Escape") setIsMenuOpen(false);
		};

		handleScroll();
		window.addEventListener("scroll", handleScroll, { passive: true });
		window.addEventListener("keydown", handleKeyDown);

		return () => {
			window.removeEventListener("scroll", handleScroll);
			window.removeEventListener("keydown", handleKeyDown);
		};
	}, []);

	useEffect(() => {
		document.body.style.overflow = isMenuOpen ? "hidden" : "";

		return () => {
			document.body.style.overflow = "";
		};
	}, [isMenuOpen]);

	return (
		<header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
			<motion.nav
				aria-label="Primary navigation"
				animate={{
					backgroundColor: isScrolled ? "rgba(9, 27, 54, 0.78)" : "rgba(9, 27, 54, 0)",
					borderColor: isScrolled ? "rgba(255, 255, 255, 0.12)" : "rgba(255, 255, 255, 0)",
					boxShadow: isScrolled ? "0 16px 40px rgba(0, 0, 0, 0.18)" : "0 0 0 rgba(0, 0, 0, 0)",
				}}
				transition={{ duration: 0.35, ease: "easeOut" }}
				className="mx-auto flex h-16 max-w-7xl items-center justify-between rounded-full border px-3 backdrop-blur-xl sm:px-5"
			>
				<Link
					href="/"
					className="group flex items-center gap-3 rounded-full px-2 py-2 text-white outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
					aria-label="A Brilliant Change home"
				>
					<span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#D4AF37]/70 text-sm font-semibold tracking-[-0.08em] text-[#D4AF37] transition-colors duration-300 group-hover:bg-[#D4AF37] group-hover:text-[#091B36]">
						AB
					</span>
					<span className="hidden text-[11px] font-semibold uppercase tracking-[0.22em] sm:block">
						A Brilliant Change
					</span>
				</Link>

				<div className="hidden items-center gap-1 lg:flex">
					{navigation.map((item) => (
						<Link
							key={item.href}
							href={item.href}
							className="group relative rounded-full px-4 py-2 text-[11px] font-medium uppercase tracking-[0.16em] text-white/70 outline-none transition-colors hover:text-white focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
						>
							{item.label}
							<span className="absolute inset-x-4 bottom-1 h-px origin-left scale-x-0 bg-[#D4AF37] transition-transform duration-300 ease-out group-hover:scale-x-100" />
						</Link>
					))}
				</div>

				<div className="flex items-center gap-2">
					<Link
						href="/contact"
						className="group hidden items-center gap-2 rounded-full border border-[#D4AF37] px-4 py-2.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#D4AF37] outline-none transition-colors hover:bg-[#D4AF37] hover:text-[#091B36] focus-visible:ring-2 focus-visible:ring-white sm:flex"
					>
						Connect
						<span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
							-&gt;
						</span>
					</Link>
					<button
						type="button"
						aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
						aria-expanded={isMenuOpen}
						aria-controls="mobile-navigation"
						onClick={() => setIsMenuOpen((open) => !open)}
						className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white outline-none transition-colors hover:border-[#D4AF37] hover:text-[#D4AF37] focus-visible:ring-2 focus-visible:ring-[#D4AF37] lg:hidden"
					>
						<span className="sr-only">{isMenuOpen ? "Close menu" : "Open menu"}</span>
						<span className="flex w-4 flex-col gap-1.5" aria-hidden="true">
							<span className={`h-px w-full bg-current transition-transform duration-300 ${isMenuOpen ? "translate-y-1 rotate-45" : ""}`} />
							<span className={`h-px w-full bg-current transition-opacity duration-300 ${isMenuOpen ? "opacity-0" : ""}`} />
							<span className={`h-px w-full bg-current transition-transform duration-300 ${isMenuOpen ? "-translate-y-1 -rotate-45" : ""}`} />
						</span>
					</button>
				</div>
			</motion.nav>

			<AnimatePresence>
				{isMenuOpen && (
					<>
						<motion.button
							type="button"
							aria-label="Close navigation menu"
							onClick={() => setIsMenuOpen(false)}
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							className="fixed inset-0 -z-10 h-screen w-full cursor-default bg-[#091B36]/60 backdrop-blur-sm"
						/>
						<motion.div
							id="mobile-navigation"
							role="dialog"
							aria-label="Mobile navigation"
							initial={{ opacity: 0, y: -12 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -12 }}
							transition={{ duration: 0.25, ease: "easeOut" }}
							  className="mx-auto mt-3 max-w-7xl rounded-4xl border border-white/15 bg-[#091B36]/95 p-6 shadow-2xl backdrop-blur-2xl lg:hidden"
						>
							<div className="flex flex-col">
								{navigation.map((item, index) => (
									<Link
										key={item.href}
										href={item.href}
										onClick={() => setIsMenuOpen(false)}
										className="flex items-center justify-between border-b border-white/10 py-4 text-lg font-light tracking-tight text-white outline-none transition-colors hover:text-[#D4AF37] focus-visible:text-[#D4AF37]"
									>
										<span>{item.label}</span>
										<span className="text-sm text-[#D4AF37]">0{index + 1}</span>
									</Link>
								))}
								<Link
									href="/contact"
									onClick={() => setIsMenuOpen(false)}
									className="mt-6 flex items-center justify-between rounded-full bg-[#D4AF37] px-5 py-4 text-xs font-bold uppercase tracking-[0.16em] text-[#091B36] outline-none transition-colors hover:bg-white focus-visible:ring-2 focus-visible:ring-white"
								>
									Connect
									<span aria-hidden="true">-&gt;</span>
								</Link>
							</div>
						</motion.div>
					</>
				)}
			</AnimatePresence>
		</header>
	);
}
