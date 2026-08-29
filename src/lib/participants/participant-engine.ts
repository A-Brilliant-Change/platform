import {
  getDefaultParticipant,
  getParticipantRegistry,
  type Participant,
} from "./participant-registry";
import { buildParticipantCase } from "./participant-case-engine";
import { buildParticipantJourney } from "./participant-journey-manager";
import { matchParticipantToOpportunities } from "./participant-opportunity-matcher";
import { buildMilestoneTracker } from "./participant-milestone-engine";
import { buildParticipantProfile } from "./participant-profile";

export type ParticipantEngineResult = {
  participant: Participant;
  profile: ReturnType<typeof buildParticipantProfile>;
  journey: ReturnType<typeof buildParticipantJourney>;
  opportunities: ReturnType<typeof matchParticipantToOpportunities>;
  milestones: ReturnType<typeof buildMilestoneTracker>;
  caseSummary: ReturnType<typeof buildParticipantCase>;
  explainability: string[];
};

export function buildParticipantEngineResult(participant: Participant): ParticipantEngineResult {
  const profile = buildParticipantProfile(participant);
  const journey = buildParticipantJourney(participant);
  const opportunities = matchParticipantToOpportunities(participant);
  const milestones = buildMilestoneTracker(participant);
  const caseSummary = buildParticipantCase(participant);

  return {
    participant,
    profile,
    journey,
    opportunities,
    milestones,
    caseSummary,
    explainability: [
      "All recommendations are derived from the participant’s current profile, barriers, strengths, and goals.",
      "The journey logic reflects the participant’s current stage and available support needs.",
      "Opportunity matching is tied to domain fit, readiness, and stated outcomes rather than opaque scoring.",
      "Milestone planning and case strategy are designed for explainable decision support and future human oversight.",
    ],
  };
}

export function buildDefaultParticipantResult(): ParticipantEngineResult {
  return buildParticipantEngineResult(getDefaultParticipant());
}

export function getParticipantDirectory(): Participant[] {
  return getParticipantRegistry();
}

export const participantEngine = {
  buildParticipantEngineResult,
  buildDefaultParticipantResult,
  getParticipantDirectory,
};
