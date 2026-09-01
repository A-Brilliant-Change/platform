import { type PathwayStage, type Milestone } from "./transformation-types";

export function buildMilestonesForStage(stage: PathwayStage): Milestone[] {
  return stage.milestones.map((milestone) => ({
    ...milestone,
    status: milestone.status ?? "pending",
  }));
}

export function summarizeMilestoneProgress(stages: PathwayStage[]): { total: number; complete: number; ratio: number } {
  const total = stages.reduce((sum, stage) => sum + stage.milestones.length, 0);
  const complete = stages.reduce(
    (sum, stage) => sum + stage.milestones.filter((milestone) => milestone.status === "complete").length,
    0,
  );

  return {
    total,
    complete,
    ratio: total === 0 ? 0 : Math.round((complete / total) * 100),
  };
}




