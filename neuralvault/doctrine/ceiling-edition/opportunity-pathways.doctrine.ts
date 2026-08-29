export const opportunityPathwayDoctrine = {
  id: "opportunity-pathways",
  name: "Opportunity Pathway System™",
  stages: [
    { id: "discover", order: 1, label: "Discover", purpose: "Recognize potential, needs, goals, and possibilities." },
    { id: "assess", order: 2, label: "Assess", purpose: "Understand strengths, barriers, readiness, and priorities." },
    { id: "prepare", order: 3, label: "Prepare", purpose: "Build the skills, plans, confidence, and support required." },
    { id: "connect", order: 4, label: "Connect", purpose: "Create access to people, programs, employers, and resources." },
    { id: "thrive", order: 5, label: "Thrive", purpose: "Reach stability, growth, independence, and momentum." },
    { id: "lead", order: 6, label: "Lead", purpose: "Use progress and experience to strengthen others." },
  ],
  pathwayRules: [
    "A visitor may enter through any stage.",
    "A journey may move backward when support or reassessment is needed.",
    "No pathway should imply that every participant has the same experience.",
    "Progress must be represented as human development, not merely service completion.",
    "Leadership returns energy to the ecosystem and helps open pathways for others.",
  ],
} as const;
