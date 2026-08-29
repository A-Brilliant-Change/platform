import { type Participant } from "./participant-registry";

export type ParticipantCase = {
  id: string;
  title: string;
  status: "open" | "in-review" | "active" | "closed";
  owner: string;
  summary: string;
  keyDecisions: string[];
  nextAction: string;
  explanatoryNotes: string[];
};

export function buildParticipantCase(participant: Participant): ParticipantCase {
  return {
    id: `case-${participant.id}`,
    title: `${participant.name} Transformation Case`,
    status: participant.readiness >= 80 ? "active" : "in-review",
    owner: "Participant Success Team",
    summary: `${participant.name} is progressing with clear goals, identified strengths, and a defined set of support needs requiring coordinated case navigation.`,
    keyDecisions: [
      "Prioritize the strongest next intervention",
      "Coordinate support across domains",
      "Use milestone tracking to maintain momentum",
    ],
    nextAction: `Focus on ${participant.supportNeeds[0] ?? "readiness support"} while preserving a measurable path to the participant’s primary goal.`,
    explanatoryNotes: [
      "Recommendations are tied to observed strengths and barriers",
      "The case strategy remains explainable and person-centered",
      "Support sequencing is based on readiness and the participant’s current transformation stage",
    ],
  };
}
