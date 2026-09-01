import { type TransformationGoal, type TransformationDomain, type TransformationRecommendation } from "./transformation-types";

export function orchestrateRecommendations(
  goal: TransformationGoal,
  domains: TransformationDomain[],
): TransformationRecommendation[] {
  const recommendationSet: TransformationRecommendation[] = [
    {
      id: `rec-${goal.id}-pathway`,
      title: "Build a guided opportunity pathway",
      rationale: `The strongest step for ${goal.title.toLowerCase()} is to turn the transformation into a visible and explainable journey with milestones and support checkpoints.`,
      relatedDomains: domains.map((domain) => domain.id),
      expectedOutcome: "People understand the next move, gain confidence, and remain engaged in the process.",
      explainability: [
        "Matches the doctrine-backed opportunity sequence",
        "Ties actions to milestones and readiness signals",
        "Reduces friction by making progress visible",
      ],
    },
    {
      id: `rec-${goal.id}-barrier-removal`,
      title: "Prioritize barrier removal",
      rationale: "The highest-leverage intervention is to reduce access, readiness, and coordination friction before scaling opportunity delivery.",
      relatedDomains: domains.map((domain) => domain.id),
      expectedOutcome: "Participants experience fewer interruptions and greater continuity in support.",
      explainability: [
        "Targets structural friction instead of symptoms",
        "Improves persistence and trust across the journey",
        "Creates stronger conditions for sustained momentum",
      ],
    },
  ];

  return recommendationSet;
}




