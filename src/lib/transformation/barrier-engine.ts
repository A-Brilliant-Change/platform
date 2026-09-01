import { type TransformationDomain, type TransformationGoal, type BarrierInsight } from "./transformation-types";

export function evaluateBarriers(
  goal: TransformationGoal,
  domains: TransformationDomain[],
): BarrierInsight[] {
  const barriers: BarrierInsight[] = [
    {
      id: "barrier-access",
      type: "access",
      title: "Access friction",
      severity: 72,
      explanation: `Participants may encounter friction when moving from aspiration to action in ${goal.title.toLowerCase()}.`,
      mitigation: "Create a guided entry pathway with trusted referrals and short decision cycles.",
    },
    {
      id: "barrier-coordination",
      type: "coordination",
      title: "Cross-system coordination",
      severity: 61,
      explanation: "Transformation often fails when people must navigate disconnected programs and fragmented support systems.",
      mitigation: "Assign a single point of coordination and align milestones across service providers.",
    },
    {
      id: "barrier-capacity",
      type: "capacity",
      title: "Capacity and readiness",
      severity: 68,
      explanation: "People may need coaching and planning support before long-term opportunity becomes actionable.",
      mitigation: "Pair access with readiness support, mentoring, and milestone-based planning.",
    },
  ];

  if (domains.some((domain) => domain.id === "housing-stability")) {
    barriers.push({
      id: "barrier-economic",
      type: "economic",
      title: "Economic pressure",
      severity: 67,
      explanation: "Baseline instability can reduce the ability to invest in longer-term transformation work.",
      mitigation: "Sequence stabilizing supports before longer-horizon growth and leadership actions.",
    });
  }

  return barriers;
}




