import { type TransformationGoal, type TransformationDomain } from "./transformation-engine";

export type CommunityImpact = {
  id: string;
  title: string;
  value: string;
  description: string;
  indicators: string[];
};

export function estimateCommunityImpact(goal: TransformationGoal, domains: TransformationDomain[]): CommunityImpact[] {
  return [
    {
      id: "family-impact",
      title: "Family stability",
      value: "High",
      description: `The transformation pathway strengthens household stability as it advances ${goal.title.toLowerCase()}.`,
      indicators: ["income resilience", "access to support", "reduced uncertainty"],
    },
    {
      id: "institutional-impact",
      title: "Institutional alignment",
      value: "Medium-High",
      description: "Cross-domain coordination strengthens trust in institutions and improves service continuity.",
      indicators: ["referral flow", "service continuity", "institutional trust"],
    },
    {
      id: "neighborhood-impact",
      title: "Neighborhood value",
      value: "High",
      description: "As opportunity compounds, community capacity grows through shared momentum and local leadership.",
      indicators: ["local ownership", "leadership pipeline", "collective momentum"],
    },
    ...(domains.length > 4
      ? [{
          id: "ecosystem-impact",
          title: "Ecosystem return",
          value: "High",
          description: "The combined effort creates a network effect where more people can access opportunity and contribute value.",
          indicators: ["resource leverage", "network effect", "community reinvestment"],
        }]
      : []),
  ];
}







