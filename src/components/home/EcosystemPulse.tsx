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

  const tickerItems = [
    "ECOSYSTEM ACTIVE",
    `ENGAGEMENT ${pulseLevel}%`,
    `CHAPTER ${activeChapter}`,
    `PATH ${activePath ?? "NOT SELECTED"}`,
    "ATLAS ONLINE",
    "JOURNEY ACTIVE",
    "WORKFORCE PATHWAYS OPEN",
    "TRANSFORMATION IN PROGRESS",
    "PEOPLE FIRST HEART ACTIVE",
    "EVERY OPPORTUNITY BEGINS WITH PEOPLE™",
  ];

  return (
    <div className="sticky top-0 z-[60] h-8 overflow-hidden border-b border-amber-500/30 bg-black/95 text-white backdrop-blur-md">
      <div className="flex h-full items-center">
        <div
          className="flex items-center whitespace-nowrap"
          style={{
            width: "max-content",
            animation: "abcTicker 45s linear infinite",
            willChange: "transform",
          }}
        >
          {[...tickerItems, ...tickerItems, ...tickerItems].map(
            (item, index) => (
              <span
                key={index}
                className="mx-8 flex h-8 items-center gap-2 text-[11px] font-medium uppercase tracking-[0.18em] text-white/90"
              >
                {index === 0 && (
                  <Activity className="h-3 w-3 text-green-400 animate-pulse" />
                )}
                {item}
              </span>
            )
          )}
        </div>
      </div>

      <style jsx>{`
        @keyframes abcTicker {
          from {
            transform: translate3d(0, 0, 0);
          }
          to {
            transform: translate3d(-33.333%, 0, 0);
          }
        }
      `}</style>
    </div>
  );
}