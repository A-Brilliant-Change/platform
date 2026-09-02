"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function MasterNavigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [systemStatus, setSystemStatus] = useState<"active" | "building" | "stable">("active");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const statusColors = {
    active: "bg-[#D4AF37]",
    building: "bg-amber-400",
    stable: "bg-green-400",
  };

  const statusLabels = {
    active: "System Active",
    building: "Building",
    stable: "Stable",
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        isScrolled
          ? "bg-[#091B36]/90 backdrop-blur-xl border-b border-white/10"
          : "bg-[#091B36]/50 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4 sm:py-3">
          {/* Master Logo + Live Pulse */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative flex items-center justify-center">
              {/* Pulse Ring */}
              <motion.div
                animate={{ scale: [1, 1.15, 1], opacity: [0.6, 0.3, 0.6] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 rounded-full bg-[#D4AF37] blur-sm"
              />

              {/* Master Logo Container */}
              <div className="relative z-10 flex h-11 w-11 items-center justify-center rounded-full border-2 border-[#D4AF37] bg-[#091B36] text-sm font-bold tracking-[0.15em] text-[#D4AF37]">
                AB
              </div>

              {/* Status Indicator Dot */}
              <motion.div
                animate={{
                  boxShadow: [
                    "0 0 0 2px #D4AF37, 0 0 8px 0px #D4AF37",
                    "0 0 0 2px #D4AF37, 0 0 16px 2px #D4AF37",
                    "0 0 0 2px #D4AF37, 0 0 8px 0px #D4AF37",
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className={`absolute bottom-0 right-0 z-20 h-3 w-3 rounded-full ${statusColors[systemStatus]}`}
              />
            </div>

            <div className="hidden sm:flex flex-col">
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#D4AF37] font-semibold">
                A Brilliant Change
              </p>
              <p className="text-xs text-white/60 leading-tight">
                Transformation Operating System
              </p>
            </div>
          </Link>

          {/* Primary Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/#origin"
              className="text-xs uppercase tracking-[0.2em] text-white/70 transition-colors hover:text-[#D4AF37]"
            >
              Origin
            </Link>
            <Link
              href="/#domains"
              className="text-xs uppercase tracking-[0.2em] text-white/70 transition-colors hover:text-[#D4AF37]"
            >
              Domains
            </Link>
            <Link
              href="/atlas"
              className="text-xs uppercase tracking-[0.2em] text-white/70 transition-colors hover:text-[#D4AF37]"
            >
              Atlas
            </Link>
            <Link
              href="/journey"
              className="text-xs uppercase tracking-[0.2em] text-white/70 transition-colors hover:text-[#D4AF37]"
            >
              Journey
            </Link>
          </div>

          {/* System Status Badge + CTA */}
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="hidden xs:flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5">
              <motion.div
                animate={{
                  opacity: [0.8, 1, 0.8],
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className={`h-2 w-2 rounded-full ${statusColors[systemStatus]}`}
              />
              <span className="text-[9px] uppercase tracking-[0.15em] text-white/70">
                {statusLabels[systemStatus]}
              </span>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-[#D4AF37] bg-[#D4AF37]/10 px-4 py-2 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#D4AF37] transition hover:bg-[#D4AF37] hover:text-[#091B36]"
            >
              Connect
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
