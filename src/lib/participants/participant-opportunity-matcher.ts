import { type Participant } from "./participant-registry";

export type OpportunityMatch = {
  id: string;
  title: string;
  domain: string;
  fitScore: number;
  rationale: string;
  explainability: string[];
};

export function matchParticipantToOpportunities(participant: Participant): OpportunityMatch[] {
  const domainMap: Record<string, string> = {
    "workforce-development": "Career pathway support",
    entrepreneurship: "Startup and business readiness",
    "leadership-development": "Leadership and civic growth",
    "housing-stability": "Housing and economic stabilization",
    "community-transformation": "Neighborhood transformation and collective action",
  };

  const opportunities: OpportunityMatch[] = [
    {
      id: `${participant.id}-opportunity-1`,
      title: "Guided pathway program",
      domain: participant.domains[0] ?? "workforce-development",
      fitScore: Math.min(96, participant.readiness + 10),
      rationale: "The participant has clear goals, a viable current stage, and momentum that can be converted into a structured plan.",
      explainability: [
        "Matches current readiness and strengths",
        "Aligns with the participant’s stated goals",
        "Supports a clear next step without overwhelming the person",
      ],
    },
    {
      id: `${participant.id}-opportunity-2`,
      title: "Support-centered coaching plan",
      domain: participant.domains[1] ?? participant.domains[0] ?? "resource-navigation",
      fitScore: Math.min(92, participant.readiness - 2),
      rationale: "The participant needs coordination and continuous support to translate motivation into stable progress.",
      explainability: [
        "Targets the main friction points",
        "Keeps support realistic and person-centered",
        "Builds on assets already present in the participant profile",
      ],
    },
  ];

  return opportunities.map((opportunity) => ({
    ...opportunity,
    domain: domainMap[opportunity.domain] ?? opportunity.domain,
  }));
}




