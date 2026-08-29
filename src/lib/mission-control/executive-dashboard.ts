import { type MissionControlMetric, type ExecutiveDashboard } from "./mission-control-types";

export function buildExecutiveDashboard(): ExecutiveDashboard {
  const organizationalHealth: MissionControlMetric[] = [
    {
      id: "principle-alignment",
      title: "People-first principle alignment",
      value: 94,
      unit: "%",
      status: "on-track",
      trend: "up",
      confidence: 92,
    },
    {
      id: "doctrine-integrity",
      title: "Doctrine and governance integrity",
      value: 96,
      unit: "%",
      status: "on-track",
      trend: "stable",
      confidence: 95,
    },
    {
      id: "system-stability",
      title: "Platform system stability",
      value: 99,
      unit: "%",
      status: "on-track",
      trend: "up",
      confidence: 98,
    },
  ];

  const participantMetrics: MissionControlMetric[] = [
    {
      id: "active-participants",
      title: "Active participants",
      value: 1247,
      status: "on-track",
      trend: "up",
      target: 2000,
    },
    {
      id: "average-readiness",
      title: "Average participant readiness",
      value: 78,
      unit: "%",
      status: "on-track",
      trend: "up",
    },
    {
      id: "milestone-completion",
      title: "Milestone completion rate",
      value: 82,
      unit: "%",
      status: "on-track",
      trend: "up",
    },
  ];

  const transformationMetrics: MissionControlMetric[] = [
    {
      id: "active-goals",
      title: "Active transformation goals",
      value: 156,
      status: "on-track",
      trend: "up",
    },
    {
      id: "average-goal-score",
      title: "Average goal transformation score",
      value: 81,
      unit: "/100",
      status: "on-track",
      trend: "stable",
    },
    {
      id: "barrier-reduction",
      title: "Barrier reduction momentum",
      value: 71,
      unit: "%",
      status: "on-track",
      trend: "up",
    },
  ];

  const ecosystemMetrics: MissionControlMetric[] = [
    {
      id: "partner-organizations",
      title: "Active partner organizations",
      value: 34,
      status: "on-track",
      trend: "up",
    },
    {
      id: "ecosystem-trust",
      title: "Ecosystem trust score",
      value: 88,
      unit: "/100",
      status: "on-track",
      trend: "stable",
    },
    {
      id: "resource-coordination",
      title: "Cross-domain resource coordination",
      value: 79,
      unit: "%",
      status: "on-track",
      trend: "up",
    },
  ];

  return {
    principle: "Every Opportunity Begins With People™",
    timestamp: new Date().toISOString(),
    organizationalHealth,
    participantMetrics,
    transformationMetrics,
    ecosystemMetrics,
    summary:
      "The platform is operating at institutional scale with strong doctrine alignment, high participant readiness, and growing ecosystem partnership. All systems remain stable and momentum is accelerating.",
  };
}
