import { opportunityPathwayDoctrine } from "@/neuralvault/doctrine/ceiling-edition";
import { type TransformationGoal, type TransformationDomain, type PathwayStage } from "./transformation-types";

export function buildPathwayPlan(goal: TransformationGoal, domains: TransformationDomain[]) {
  const stages: PathwayStage[] = opportunityPathwayDoctrine.stages.map((stage, index) => ({
    id: stage.id,
    order: stage.order,
    label: stage.label,
    purpose: stage.purpose,
    milestones: [
      {
        id: `${stage.id}-m1`,
        label: "Initial signal",
        description: `Capture the first visible momentum for ${goal.title.toLowerCase()}.`,
      },
      {
        id: `${stage.id}-m2`,
        label: "Support action",
        description: `Align ${domains[index % domains.length]?.title ?? "the primary domain"} support with the next step.`,
      },
      {
        id: `${stage.id}-m3`,
        label: "Progress checkpoint",
        description: "Measure progress, remove friction, and confirm readiness for the next stage.",
      },
    ],
  }));

  return {
    id: `pathway-${goal.id}`,
    title: `${goal.title} pathway`,
    stages,
  };
}
