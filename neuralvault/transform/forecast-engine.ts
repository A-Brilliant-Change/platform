import { type TransformationGoal, type TransformationDomain } from "./transformation-engine";

export type ForecastSignal = {
  id: string;
  title: string;
  confidence: number;
  outlook: "strong" | "moderate" | "watch";
  rationale: string;
};

export function forecastOutcome(goal: TransformationGoal, domains: TransformationDomain[]): ForecastSignal[] {
  const base = Math.min(94, 58 + domains.length * 6 + (goal.priority === "high" ? 12 : 8));

  return [
    {
      id: "outcome-trajectory",
      title: "Outcome trajectory",
      confidence: Math.round(base),
      outlook: base >= 80 ? "strong" : base >= 65 ? "moderate" : "watch",
      rationale: `The combination of domain coverage and strategic focus creates a strong foundation for ${goal.title.toLowerCase()} to progress over time.`,
    },
    {
      id: "resource-readiness",
      title: "Resource readiness",
      confidence: 76,
      outlook: "moderate",
      rationale: "Readiness depends on coordinated support, trusted referral flow, and staged milestone activation.",
    },
    {
      id: "community-return",
      title: "Community return",
      confidence: 84,
      outlook: "strong",
      rationale: "Success in the core path is likely to return value to families, institutions, and neighborhoods.",
    },
  ];
}
