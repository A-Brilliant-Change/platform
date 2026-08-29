import { type Participant } from "./participant-registry";

export type ParticipantProfile = {
  id: string;
  name: string;
  persona: string;
  region: string;
  useCase: Participant["useCase"];
  primaryGoal: string;
  readiness: number;
  summary: string;
  focusAreas: string[];
  supportMap: string[];
  riskSignals: string[];
  opportunityFit: string[];
};

export function buildParticipantProfile(participant: Participant): ParticipantProfile {
  return {
    id: participant.id,
    name: participant.name,
    persona: participant.persona,
    region: participant.region,
    useCase: participant.useCase,
    primaryGoal: participant.primaryGoal,
    readiness: participant.readiness,
    summary: `${participant.name} is progressing in the ${participant.currentStage} stage and is positioned to convert strengths into traction through targeted support and realistic next steps.`,
    focusAreas: participant.domains,
    supportMap: participant.supportNeeds,
    riskSignals: participant.barriers,
    opportunityFit: participant.goals,
  };
}
