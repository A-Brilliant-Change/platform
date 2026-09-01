import { type TransformationDomain, type TransformationGoal } from "./transformation-engine";

export type StrengthInsight = {
  id: string;
  title: string;
  score: number;
  explanation: string;
  leverage: string;
};

export function evaluateStrengths(
  goal: TransformationGoal,
  domains: TransformationDomain[],
): StrengthInsight[] {
  return [
    {
      id: "strength-potential",
      title: "Human potential",
      score: 88,
      explanation: `The goal for ${goal.title.toLowerCase()} is grounded in a clear and present capacity for growth.`,
      leverage: "Center the participant story and build momentum around visible progress.",
    },
    {
      id: "strength-ecosystem",
      title: "Ecosystem support",
      score: 81,
      explanation: "The domain mix creates a strong support network across skills, leadership, and opportunity access.",
      leverage: "Coordinate resources to reinforce each stage rather than treating them as isolated services.",
    },
    {
      id: "strength-clarity",
      title: "Pathway clarity",
      score: 79,
      explanation: "The principles and stages create a structured opportunity journey that can be explained and navigated clearly.",
      leverage: "Use milestone-based planning and visible progress markers to increase persistence.",
    },
    ...(domains.length > 3
      ? [{
          id: "strength-domain-coupling",
          title: "Cross-domain coupling",
          score: 84,
          explanation: "Multiple related domains reinforce the same transformation arc and increase resilience.",
          leverage: "Build recommendations that connect domains into a single journey rather than separate activities.",
        }]
      : []),
  ];
}







