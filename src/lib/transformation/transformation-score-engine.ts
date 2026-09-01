import { type TransformationGoal, type TransformationDomain, type TransformationScore } from "./transformation-types";

export function scoreTransformation(
  goal: TransformationGoal,
  domains: TransformationDomain[],
): TransformationScore {
  const readiness = Math.min(96, 55 + domains.length * 6 + (goal.priority === "strategic" ? 8 : goal.priority === "high" ? 6 : 4));
  const structure = Math.min(97, 52 + domains.length * 5);
  const momentum = Math.min(95, 60 + Math.min(20, domains.length * 3));
  const communityReturn = Math.min(99, 50 + domains.length * 4 + 10);

  const overall = Math.round((readiness + structure + momentum + communityReturn) / 4);

  return {
    overall,
    readiness: Math.round(readiness),
    structure: Math.round(structure),
    momentum: Math.round(momentum),
    communityReturn: Math.round(communityReturn),
    summary: `${goal.title} has a ${overall}/100 transformation health score based on domain coverage, readiness, and ecosystem return.`,
  };
}




