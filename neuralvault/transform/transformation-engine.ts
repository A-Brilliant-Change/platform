import { transformationDomains } from "@/neuralvault/doctrine/ceiling-edition";

export type TransformationPriority = "high" | "medium" | "strategic";

export type TransformationDomain = {
  id: string;
  title: string;
  promise: string;
  primaryOutcome: string;
  relatedDomainIds: readonly string[];
};

export type TransformationGoal = {
  id: string;
  title: string;
  description: string;
  priority: TransformationPriority;
  domainIds: string[];
};

export type TransformationRecommendation = {
  id: string;
  title: string;
  rationale: string;
  relatedDomains: string[];
  expectedOutcome: string;
  explainability: string[];
};

export type TransformationAnalysis = {
  goal: TransformationGoal;
  domains: TransformationDomain[];
  recommendations: TransformationRecommendation[];
  summary: string;
};

const domainMap = Object.fromEntries(
  transformationDomains.map((domain) => [domain.id, {
    id: domain.id,
    title: domain.title,
    promise: domain.promise,
    primaryOutcome: domain.primaryOutcome,
    relatedDomainIds: domain.relatedDomains,
  }]),
);

export function getTransformationDomains(): TransformationDomain[] {
  return Object.values(domainMap).map((domain) => ({
    ...domain,
    relatedDomainIds: [...domain.relatedDomainIds],
  }));
}

export function buildTransformationGoal(
  id: string,
  title: string,
  description: string,
  priority: TransformationPriority,
  domainIds: string[],
): TransformationGoal {
  const resolvedDomains = domainIds.length ? domainIds : Object.keys(domainMap).slice(0, 3);

  return {
    id,
    title,
    description,
    priority,
    domainIds: resolvedDomains,
  };
}

export function analyzeTransformationGoal(goal: TransformationGoal): TransformationAnalysis {
  const domains = goal.domainIds
    .map((domainId) => domainMap[domainId])
    .filter(Boolean)
    .map((domain) => ({
      ...domain,
      relatedDomainIds: [...new Set(domain.relatedDomainIds)],
    }));

  const recommendations: TransformationRecommendation[] = [
    {
      id: `rec-${goal.id}-journey`,
      title: "Build a guided opportunity pathway",
      rationale: `The goal is strongest when ${goal.title.toLowerCase()} is framed as a structured, explainable journey with visible stages and support checkpoints.`,
      relatedDomains: domains.map((domain) => domain.id),
      expectedOutcome: "People understand next steps, gain confidence, and remain engaged through measurable milestones.",
      explainability: [
        "Driven by the opportunity pathway doctrine",
        "Aligns with observed domain relationships",
        "Matches the people-first principle and avoids fragmented support",
      ],
    },
    {
      id: `rec-${goal.id}-barrier-removal`,
      title: "Remove barriers before expansion",
      rationale: "The highest leverage intervention is to reduce access, capacity, and coordination friction before scaling opportunity delivery.",
      relatedDomains: domains.map((domain) => domain.id),
      expectedOutcome: "Participants can enter and persist through the pathway with fewer interruptions and less uncertainty.",
      explainability: [
        "Built from the barrier engine analysis",
        "Prioritizes structural friction over surface-level enrollment",
        "Supports durable participation and greater conversion",
      ],
    },
  ];

  return {
    goal,
    domains,
    recommendations,
    summary: `This transformation analysis for ${goal.title} connects people-centered goals with domain coverage, ecosystem support, and explainable opportunity-building logic.`,
  };
}
