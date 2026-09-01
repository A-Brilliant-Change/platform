import {
  opportunityPathwayDoctrine,
  transformationDomains,
} from "@/neuralvault/doctrine/ceiling-edition";
import {
  type TransformationDomain,
  type TransformationGoal,
  type TransformationPlan,
} from "./transformation-types";

export const transformationRegistry = {
  domains: transformationDomains.map((domain) => ({
    id: domain.id,
    order: domain.order,
    title: domain.title,
    promise: domain.promise,
    pathwayColor: domain.pathwayColor,
    icon: domain.icon,
    primaryOutcome: domain.primaryOutcome,
    relatedDomainIds: [...domain.relatedDomains],
  })) as TransformationDomain[],
  pathwayStages: opportunityPathwayDoctrine.stages.map((stage) => ({
    id: stage.id,
    order: stage.order,
    label: stage.label,
    purpose: stage.purpose,
  })),
};

export function getTransformationDomains(): TransformationDomain[] {
  return transformationRegistry.domains.map((domain) => ({ ...domain, relatedDomainIds: [...domain.relatedDomainIds] }));
}

export function getDefaultGoal(): TransformationGoal {
  return {
    id: "goal-default",
    title: "Transformation Operating System",
    description: "Move people from where they are today toward a more stable, capable, and connected future.",
    priority: "high",
    domainIds: transformationRegistry.domains.slice(0, 4).map((domain) => domain.id),
  };
}

export function createDefaultTransformationPlan(goal: TransformationGoal): TransformationPlan {
  const selectedDomains = getTransformationDomains().filter((domain) => goal.domainIds.includes(domain.id));

  return {
    goal,
    domains: selectedDomains,
    barriers: [],
    strengths: [],
    pathway: {
      id: `pathway-${goal.id}`,
      title: `${goal.title} pathway`,
      stages: [],
    },
    forecast: [],
    score: {
      overall: 0,
      readiness: 0,
      structure: 0,
      momentum: 0,
      communityReturn: 0,
      summary: "Pending transformation analysis.",
    },
    impact: [],
    graph: { nodes: [], edges: [] },
    recommendations: [],
    summary: "Awaiting transformation intelligence.",
  };
}




