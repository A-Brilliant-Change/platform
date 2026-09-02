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
    <div className="fixed top-0 left-0 right-0 z-[60] border-t border-amber-500/40 bg-black/95 text-white">
      <div className="overflow-hidden">
        <div className="flex items-center gap-12 whitespace-nowrap px-4 py-1 text-xs uppercase tracking-wider">
          <span className="flex items-center gap-2 text-green-400">
            <Activity className="h-4 w-4 animate-pulse" />
            ECOSYSTEM ACTIVE
          </span>

          <span>ENGAGEMENT {pulseLevel}%</span>
          <span>CHAPTER {activeChapter}</span>
          <span>PATH {activePath ?? "NOT SELECTED"}</span>

          <span className="text-amber-400">
            EVERY OPPORTUNITY BEGINS WITH PEOPLE™
          </span>

          <span>ATLAS ONLINE</span>
          <span>JOURNEY ACTIVE</span>
          <span>WORKFORCE PATHWAYS OPEN</span>
          <span>TRANSFORMATION IN PROGRESS</span>
        </div>
      </div>
    </div>
  );
}
