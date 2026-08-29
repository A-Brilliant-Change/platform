import { type TransformationDomain, type TransformationGoal } from "./transformation-engine";

export type BarrierType =
  | "access"
  | "capacity"
  | "readiness"
  | "coordination"
  | "trust"
  | "economic"
  | "institutional";

export type BarrierInsight = {
  id: string;
  type: BarrierType;
  title: string;
  severity: number;
  explanation: string;
  mitigation: string;
};

export function evaluateBarriers(
  goal: TransformationGoal,
  domains: TransformationDomain[],
): BarrierInsight[] {
  const barrierMap: BarrierInsight[] = [
    {
      id: "barrier-access",
      type: "access",
      title: "Access friction",
      severity: 72,
      explanation: `Participants may need additional support to reach the right resources for ${goal.title.toLowerCase()}.`,
      mitigation: "Create a guided entry pathway with trusted referrals and clear next steps.",
    },
    {
      id: "barrier-coordination",
      type: "coordination",
      title: "Cross-system coordination",
      severity: 58,
      explanation: "The transformation requires multiple domains to move together without fragmenting the experience.",
      mitigation: "Use a single case or pathway owner to coordinate services and milestones.",
    },
    {
      id: "barrier-capacity",
      type: "capacity",
      title: "Capacity and confidence",
      severity: 63,
      explanation: "People may need coaching, planning, and practical skill development before the opportunity is fully actionable.",
      mitigation: "Pair opportunity access with readiness support, mentorship, and milestone planning.",
    },
  ];

  if (domains.some((domain) => domain.id === "housing-stability")) {
    barrierMap.push({
      id: "barrier-economic",
      type: "economic",
      title: "Economic pressure",
      severity: 67,
      explanation: "Basic financial stability may constrain the ability to enter and complete longer-term opportunity pathways.",
      mitigation: "Sequence stabilization supports before long-horizon growth actions.",
    });
  }

  return barrierMap;
}
