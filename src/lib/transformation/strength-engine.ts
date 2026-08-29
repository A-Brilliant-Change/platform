import { type TransformationGoal, type TransformationDomain, type StrengthInsight } from "./transformation-types";

export function evaluateStrengths(
  goal: TransformationGoal,
  domains: TransformationDomain[],
): StrengthInsight[] {
  return [
    {
      id: "strength-human-potential",
      title: "Human potential",
      score: 88,
      explanation: `The transformation objective for ${goal.title.toLowerCase()} is rooted in existing capacity and aspiration.`,
      leverage: "Center the person’s story and build traction around visible progress.",
    },
    {
      id: "strength-ecosystem",
      title: "Ecosystem support",
      score: 81,
      explanation: "The domain mix creates a resilient support system across skills, leadership, and access to opportunity.",
      leverage: "Coordinate services as a single journey instead of isolated interventions.",
    },
    {
      id: "strength-clarity",
      title: "Pathway clarity",
      score: 79,
      explanation: "The system has a clear sequence, which helps participants understand what comes next and why.",
      leverage: "Use milestone design and visible checkpoints to sustain belief and momentum.",
    },
    ...(domains.length > 3
      ? [{
          id: "strength-domain-coupling",
          title: "Cross-domain coupling",
          score: 84,
          explanation: "The movement gains strength when multiple domains reinforce the same transformation arc.",
          leverage: "Build recommendations that connect domains into one coherent story and plan.",
        }]
      : []),
  ];
}
