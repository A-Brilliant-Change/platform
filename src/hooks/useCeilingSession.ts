// Hook for managing Ceiling Edition narrative phase state
"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

export type NarrativePhase = "origin" | "promise" | "domains" | "pathways" | "ecosystem" | "impact";

export type CeilingSessionState = {
  currentPhase: NarrativePhase;
  completedPhases: NarrativePhase[];
  sessionStartTime: number;
  lastPhaseChangeTime: number;
  viewCount: Record<NarrativePhase, number>;
  
  setCurrentPhase: (phase: NarrativePhase) => void;
  markPhaseAsCompleted: (phase: NarrativePhase) => void;
  getPhaseProgress: () => number;
  resetSession: () => void;
};

const PHASES: NarrativePhase[] = ["origin", "promise", "domains", "pathways", "ecosystem", "impact"];

export const useCeilingSession = create<CeilingSessionState>()(
  persist<CeilingSessionState>(
    (set, get) => ({
      currentPhase: "origin",
      completedPhases: [],
      sessionStartTime: Date.now(),
      lastPhaseChangeTime: Date.now(),
      viewCount: {
        origin: 0,
        promise: 0,
        domains: 0,
        pathways: 0,
        ecosystem: 0,
        impact: 0,
      },

      setCurrentPhase: (phase: NarrativePhase) => {
        const state = get();
        set({
          currentPhase: phase,
          lastPhaseChangeTime: Date.now(),
          viewCount: {
            ...state.viewCount,
            [phase]: (state.viewCount[phase] || 0) + 1,
          },
        });
      },

      markPhaseAsCompleted: (phase: NarrativePhase) => {
        const state = get();
        const completed = state.completedPhases.includes(phase)
          ? state.completedPhases
          : [...state.completedPhases, phase];

        set({ completedPhases: completed });
      },

      getPhaseProgress: () => {
        const state = get();
        return (state.completedPhases.length / PHASES.length) * 100;
      },

      resetSession: () => {
        set({
          currentPhase: "origin",
          completedPhases: [],
          sessionStartTime: Date.now(),
          lastPhaseChangeTime: Date.now(),
          viewCount: {
            origin: 0,
            promise: 0,
            domains: 0,
            pathways: 0,
            ecosystem: 0,
            impact: 0,
          },
        });
      },
    }),
    {
      name: "ceiling-session-state",
    } as any
  ) as any
);

export const NARRATIVE_PHASES_METADATA = {
  origin: {
    id: "origin",
    title: "Origin",
    description: "Ground the story in place, pain, and possibility.",
    order: 0,
  },
  promise: {
    id: "promise",
    title: "Promise",
    description: "State the transformational heart and moral center.",
    order: 1,
  },
  domains: {
    id: "domains",
    title: "Domains",
    description: "Reveal the systems that make transformation practical.",
    order: 2,
  },
  pathways: {
    id: "pathways",
    title: "Pathways",
    description: "Show how transformation moves from aspiration to action.",
    order: 3,
  },
  ecosystem: {
    id: "ecosystem",
    title: "Ecosystem",
    description: "Demonstrate collective power and network effects.",
    order: 4,
  },
  impact: {
    id: "impact",
    title: "Impact",
    description: "Return the story to measurable human outcomes.",
    order: 5,
  },
} as const;
