import { create } from "zustand";

type Chapter =
  | "arrival"
  | "discovery"
  | "journey"
  | "infrastructure"
  | "ecosystem"
  | "atlas"
  | "mission-control"
  | "origins"
  | "movement";

interface ExperienceState {
  pulseLevel: number;
  activeChapter: Chapter;
  activePath: string | null;

  setPulseLevel: (level: number) => void;
  setChapter: (chapter: Chapter) => void;
  setPath: (path: string | null) => void;
}

export const useExperienceStore = create<ExperienceState>((set) => ({
  pulseLevel: 20,
  activeChapter: "arrival",
  activePath: null,

  setPulseLevel: (level) =>
    set({
      pulseLevel: level,
    }),

  setChapter: (chapter) =>
    set({
      activeChapter: chapter,
    }),

  setPath: (path) =>
    set({
      activePath: path,
    }),
}));




