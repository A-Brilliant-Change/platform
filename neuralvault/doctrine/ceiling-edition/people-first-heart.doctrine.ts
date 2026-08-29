export const peopleFirstHeartDoctrine = {
  id: "people-first-heart",
  name: "Every Opportunity Begins With People™ Heart",
  meaning: {
    people: "The beginning and purpose of transformation",
    opportunity: "The bridge between human potential and meaningful change",
    heart: "The shared center of dignity, access, hope, and possibility",
    pulse: "The movement of opportunity through the ecosystem",
  },
  promises: [
    {
      id: "see-potential",
      label: "See the Potential",
      description: "Recognize capacity, dignity, and possibility in every person.",
    },
    {
      id: "remove-barriers",
      label: "Remove Barriers",
      description: "Identify and reduce obstacles between people and opportunity.",
    },
    {
      id: "create-access",
      label: "Create Access",
      description: "Connect people with pathways, resources, and trusted relationships.",
    },
    {
      id: "build-capacity",
      label: "Build Capacity",
      description: "Strengthen skills, confidence, resilience, and leadership.",
    },
    {
      id: "inspire-generations",
      label: "Inspire Generations",
      description: "Turn individual progress into enduring community legacy.",
    },
  ],
  visualBehavior: {
    position: "central",
    material: "luminous-metallic-gold",
    defaultIntensity: 0.82,
    focusIntensity: 1,
    pulseIntervalSeconds: 10,
    pulseDurationSeconds: 2.4,
  },
  experienceRules: [
    "Every major journey begins visually at the heart.",
    "Every completed journey sends a return pulse to the heart.",
    "The heart must never be obscured by interface controls.",
    "The heart may reduce in scale, but it must remain symbolically present.",
  ],
} as const;
