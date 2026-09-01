import { type TransformationGoal, type TransformationDomain, type ForecastSignal } from "./transformation-types";

export function forecastOutcome(goal: TransformationGoal, domains: TransformationDomain[]): ForecastSignal[] {
  const base = Math.min(94, 58 + domains.length * 6 + (goal.priority === "high" ? 12 : 8));

  return [
    {
      id: "trajectory",
      title: "Outcome trajectory",
      confidence: Math.round(base),
      outlook: base >= 80 ? "strong" : base >= 65 ? "moderate" : "watch",
      rationale: `The current domain mix and strategic focus create a strong foundation for ${goal.title.toLowerCase()} to progress over time.`,
    },
    {
      id: "resource-readiness",
      title: "Resource readiness",
      confidence: 76,
      outlook: "moderate",
      rationale: "Readiness depends on coordinated service delivery, trusted referrals, and timing across the pathway.",
    },
    {
      id: "community-return",
      title: "Community return",
      confidence: 84,
      outlook: "strong",
      rationale: "Success is likely to return meaningful value to families, institutions, and neighborhoods.",
    },
  ];
}




