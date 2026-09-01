import { type Participant, type ParticipantStage } from "./participant-registry";

export type ParticipantJourneyStep = {
  id: string;
  label: string;
  stage: ParticipantStage;
  status: "pending" | "active" | "complete";
  description: string;
};

export type ParticipantJourney = {
  participantId: string;
  currentStage: ParticipantStage;
  steps: ParticipantJourneyStep[];
  nextBestAction: string;
};

const stageLabels: Record<ParticipantStage, string> = {
  discover: "Discover",
  assess: "Assess",
  prepare: "Prepare",
  connect: "Connect",
  thrive: "Thrive",
  lead: "Lead",
};

export function buildParticipantJourney(participant: Participant): ParticipantJourney {
  const steps: ParticipantJourneyStep[] = Object.entries(stageLabels).map(([stage, label], index) => ({
    id: `${participant.id}-${stage}`,
    label,
    stage: stage as ParticipantStage,
    status: stage === participant.currentStage ? "active" : index < Object.keys(stageLabels).indexOf(participant.currentStage) ? "complete" : "pending",
    description: stage === participant.currentStage
      ? "Current focus: maintain traction and convert readiness into action."
      : "Milestone path for sustained momentum and long-term transformation.",
  }));

  const nextBestAction = participant.supportNeeds[0]
    ? `Prioritize support for ${participant.supportNeeds[0]} and keep the participant moving from ${participant.currentStage} toward the next high-leverage milestone.`
    : "Continue coaching and readiness review while preserving momentum.";

  return {
    participantId: participant.id,
    currentStage: participant.currentStage,
    steps,
    nextBestAction,
  };
}




