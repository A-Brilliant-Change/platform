import { type Participant } from "./participant-registry";

export type MilestoneItem = {
  id: string;
  label: string;
  description: string;
  status: "pending" | "active" | "complete";
};

export function buildMilestoneTracker(participant: Participant): MilestoneItem[] {
  const milestones: MilestoneItem[] = [
    {
      id: `${participant.id}-milestone-1`,
      label: "Goal clarity",
      description: "Confirm the participant’s highest-priority outcome and desired next move.",
      status: participant.readiness >= 75 ? "complete" : "active",
    },
    {
      id: `${participant.id}-milestone-2`,
      label: "Barrier reduction",
      description: "Resolve the most urgent hindrance while maintaining follow-through and accountability.",
      status: participant.barriers.length > 1 ? "active" : "pending",
    },
    {
      id: `${participant.id}-milestone-3`,
      label: "Support activation",
      description: "Connect the participant to the most relevant resources, mentoring, or service support.",
      status: participant.supportNeeds.length > 1 ? "active" : "pending",
    },
    {
      id: `${participant.id}-milestone-4`,
      label: "Momentum checkpoint",
      description: "Capture evidence of traction and confirm what success looks like next.",
      status: "pending",
    },
  ];

  return milestones;
}




