import { opportunityPathwayDoctrine } from "@/neuralvault/doctrine/ceiling-edition";
import { type TransformationGoal, type TransformationDomain } from "./transformation-engine";

export type Milestone = {
  id: string;
  label: string;
  description: string;
};

export type PathwayPlan = {
  id: string;
  title: string;
  stages: Array<{
    id: string;
    label: string;
    purpose: string;
    milestones: Milestone[];
  }>;
};

export function buildPathwayPlan(
  goal: TransformationGoal,
  domains: TransformationDomain[],
): PathwayPlan {
  const stages = opportunityPathwayDoctrine.stages.map((stage, index) => ({
    id: stage.id,
    label: stage.label,
    purpose: stage.purpose,
    milestones: [
      {
        id: `${stage.id}-m1`,
        label: "Initial signal",
        description: `Capture the first evidence of momentum for ${goal.title.toLowerCase()}.`,
      },
      {
        id: `${stage.id}-m2`,
        label: "Support action",
        description: `Align ${domains[index % domains.length]?.title ?? "the primary domain"} support with the next step.`,
      },
      {
        id: `${stage.id}-m3`,
        label: "Progress checkpoint",
        description: `Measure progress, remove barriers, and confirm readiness for the next stage.`,
      },
    ],
  }));

  return {
    id: `pathway-${goal.id}`,
    title: `${goal.title} pathway`,
    stages,
  };
}







