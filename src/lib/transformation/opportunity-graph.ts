import { transformationDomains } from "@/neuralvault/doctrine/ceiling-edition";
import { type OpportunityGraph, type OpportunityEdge, type OpportunityNode } from "./transformation-types";

export function buildOpportunityGraph(goalTitle: string, domainIds: string[] = []): OpportunityGraph {
  const selectedDomains = domainIds.length
    ? transformationDomains.filter((domain) => domainIds.includes(domain.id))
    : transformationDomains;

  const nodes: OpportunityNode[] = [
    {
      id: "goal",
      label: goalTitle,
      kind: "goal",
      weight: 1,
      description: "Primary transformation objective",
    },
    ...selectedDomains.map((domain) => ({
      id: domain.id,
      label: domain.title,
      kind: "domain" as const,
      weight: 0.82,
      description: domain.promise,
    })),
    {
      id: "community-outcome",
      label: "Community Return",
      kind: "outcome",
      weight: 0.94,
      description: "Families, neighborhoods, and institutions gain durable value.",
    },
    {
      id: "ecosystem-bridge",
      label: "Ecosystem Bridge",
      kind: "resource",
      weight: 0.7,
      description: "Shared coordination, resource flow, and support structures.",
    },
  ];

  const edges: OpportunityEdge[] = [
    ...selectedDomains.map((domain) => ({
      sourceId: "goal",
      targetId: domain.id,
      strength: 0.9,
      label: "strategic alignment",
    })),
    ...selectedDomains.map((domain) => ({
      sourceId: domain.id,
      targetId: "ecosystem-bridge",
      strength: 0.8,
      label: "resource coordination",
    })),
    {
      sourceId: "ecosystem-bridge",
      targetId: "community-outcome",
      strength: 0.92,
      label: "value creation",
    },
  ];

  return { nodes, edges };
}
