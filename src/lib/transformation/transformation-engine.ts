import { type TransformationGoal, type TransformationPlan, type TransformationRecommendation, type TransformationInput } from "./transformation-types";
import { buildOpportunityGraph } from "./opportunity-graph";
import { evaluateBarriers } from "./barrier-engine";
import { evaluateStrengths } from "./strength-engine";
import { buildPathwayPlan } from "./pathway-builder";
import { forecastOutcome } from "./forecast-engine";
import { scoreTransformation } from "./transformation-score-engine";
import { estimateCommunityImpact } from "./community-impact-engine";
import { getTransformationDomains, getDefaultGoal } from "./transformation-registry";

export type TransformationEngineResult = TransformationPlan;

export function normalizeTransformationGoal(input: TransformationInput): TransformationGoal {
  const domains = getTransformationDomains();
  const domainIds = (input.domainIds?.length ? input.domainIds : domains.slice(0, 3).map((domain) => domain.id))
    .filter((domainId) => domains.some((domain) => domain.id === domainId));

  return {
    id: input.id ?? `goal-${input.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
    title: input.title,
    description: input.description,
    priority: input.priority ?? "high",
    domainIds,
  };
}

export function buildTransformationPlan(input: TransformationInput): TransformationPlan {
  const goal = normalizeTransformationGoal(input);
  const domains = getTransformationDomains().filter((domain) => goal.domainIds.includes(domain.id));

  const barriers = evaluateBarriers(goal, domains);
  const strengths = evaluateStrengths(goal, domains);
  const pathway = buildPathwayPlan(goal, domains);
  const forecast = forecastOutcome(goal, domains);
  const score = scoreTransformation(goal, domains);
  const impact = estimateCommunityImpact(goal, domains);
  const graph = buildOpportunityGraph(goal.title, goal.domainIds);

  const recommendations: TransformationRecommendation[] = [
    {
      id: `rec-${goal.id}-journey`,
      title: "Build a guided opportunity pathway",
      rationale: `The most effective next step for ${goal.title.toLowerCase()} is to make the journey visible, explainable, and milestone-based.`,
      relatedDomains: domains.map((domain) => domain.id),
      expectedOutcome: "People understand the next move, feel supported, and remain engaged throughout the pathway.",
      explainability: [
        "The pathway follows the doctrine-backed opportunity sequence",
        "Milestones are tied to measurable progress and support readiness",
        "The model preserves clarity and prevents fragmented decision-making",
      ],
    },
    {
      id: `rec-${goal.id}-barrier-removal`,
      title: "Reduce friction before scaling",
      rationale: "Access, readiness, and coordination issues should be addressed before expanding opportunity delivery.",
      relatedDomains: domains.map((domain) => domain.id),
      expectedOutcome: "People experience less friction and higher confidence in the transformation process.",
      explainability: [
        "Barrier analysis identifies the structural causes of friction",
        "The recommendation is prioritized around real constraints, not assumptions",
        "This preserves trust and improves the odds of sustained participation",
      ],
    },
  ];

  return {
    goal,
    domains,
    barriers,
    strengths,
    pathway,
    forecast,
    score,
    impact,
    graph,
    recommendations,
    summary: `This transformation plan for ${goal.title} links purpose, domain alignment, milestone progression, and measurable community value into a single operating model.`,
  };
}

export function buildDefaultTransformationPlan(): TransformationPlan {
  return buildTransformationPlan({
    title: getDefaultGoal().title,
    description: getDefaultGoal().description,
    priority: getDefaultGoal().priority,
    domainIds: getDefaultGoal().domainIds,
  });
}

export const transformationEngine = {
  normalizeTransformationGoal,
  buildTransformationPlan,
  buildDefaultTransformationPlan,
};




