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
    <div className="fixed top-0 left-0 right-0 z-[60] border-b border-amber-500/40 bg-black/95 text-white backdrop-blur-md">
      <div className="overflow-hidden">
        <div
          className="flex items-center whitespace-nowrap py-1 text-xs uppercase tracking-wider"
          style={{
            width: "max-content",
            animation: "abcTicker 45s linear infinite",
          }}
        >
          {[...tickerItems, ...tickerItems, ...tickerItems].map(
            (item, index) => (
              <span
                key={index}
                className="mx-6 flex items-center gap-2"
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
            transform: translateX(0);
          }

          to {
            transform: translateX(-33.333%);
          }
        }
      `}</style>
    </div>
  );
}