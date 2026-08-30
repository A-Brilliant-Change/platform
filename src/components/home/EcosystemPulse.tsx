"use client";

import { Activity } from "lucide-react";
import { useExperienceStore } from "@/store/experience-store";

export default function EcosystemPulse() {
  const pulseLevel = useExperienceStore(
    (state) => state.pulseLevel
  );

  const activeChapter = useExperienceStore(
    (state) => state.activeChapter
  );

  const activePath = useExperienceStore(
    (state) => state.activePath
  );

  return (
    <div className="fixed right-6 top-6 z-50">
      <div className="w-64 rounded-2xl border border-white/10 bg-black/70 p-4 text-white shadow-2xl backdrop-blur-md">
        {/* Header */}
        <div className="flex items-center gap-2">
          <Activity className="h-4 w-4 text-green-400 animate-pulse" />

          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-green-400">
            Live
          </span>
        </div>

        {/* Title */}
        <div className="mt-3">
          <h3 className="text-sm font-semibold tracking-wide">
            Ecosystem Pulse™
          </h3>

          <p className="mt-1 text-xs text-slate-400">
            The Heartbeat of Transformation
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mt-4">
          <div className="mb-2 flex justify-between text-[10px] uppercase tracking-wider text-slate-500">
            <span>Engagement</span>
            <span>{pulseLevel}%</span>
          </div>

          <div className="h-2 overflow-hidden rounded-full bg-slate-800">
            <div
              className="h-full rounded-full bg-gradient-to-r from-amber-500 to-yellow-300 transition-all duration-700"
              style={{
                width: `${pulseLevel}%`,
              }}
            />
          </div>
        </div>

        {/* Status */}
        <div className="mt-4 space-y-2 text-xs">
          <div className="flex justify-between">
            <span className="text-slate-400">
              Active Chapter
            </span>

            <span className="capitalize text-white">
              {activeChapter}
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-slate-400">
              Active Path
            </span>

            <span className="capitalize text-white">
              {activePath ?? "Not Selected"}
            </span>
          </div>
        </div>

        {/* Pulse Line */}
        <div className="mt-4 overflow-hidden rounded-md border border-white/5 bg-slate-900 p-2">
          <div className="flex h-4 items-center">
            <div className="h-[2px] w-full animate-pulse bg-gradient-to-r from-transparent via-green-400 to-transparent" />
          </div>
        </div>
      </div>
    </div>
  );
}
