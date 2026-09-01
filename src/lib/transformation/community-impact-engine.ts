import { type TransformationGoal, type TransformationDomain, type CommunityImpact } from "./transformation-types";

export function estimateCommunityImpact(goal: TransformationGoal, domains: TransformationDomain[]): CommunityImpact[] {
  return [
    {
      id: "family-impact",
      title: "Family stability",
      value: "High",
      description: `The pathway supports stronger stability as ${goal.title.toLowerCase()} becomes more grounded in everyday life.`,
      indicators: ["income resilience", "support access", "reduced uncertainty"],
    },
    {
      id: "institutional-impact",
      title: "Institutional alignment",
      value: "Medium-High",
      description: "Cross-domain coordination improves trust and continuity across service systems.",
      indicators: ["referral flow", "service continuity", "institutional trust"],
    },
    {
      id: "neighborhood-impact",
      title: "Neighborhood value",
      value: "High",
      description: "The transformation compounds into increased local capacity, leadership, and shared momentum.",
      indicators: ["local ownership", "leadership pipeline", "collective momentum"],
    },
    ...(domains.length > 4
      ? [{
          id: "ecosystem-impact",
          title: "Ecosystem return",
          value: "High",
          description: "The combined strategy creates a network effect where more people can access opportunity and contribute value.",
          indicators: ["resource leverage", "network effect", "community reinvestment"],
        }]
      : []),
  ];
}




