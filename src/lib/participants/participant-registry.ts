export type ParticipantUseCase =
  | "workforce-development"
  | "entrepreneurship"
  | "leadership-development"
  | "housing-stability"
  | "community-transformation";

export type ParticipantStage =
  | "discover"
  | "assess"
  | "prepare"
  | "connect"
  | "thrive"
  | "lead";

export type Participant = {
  id: string;
  name: string;
  persona: string;
  region: string;
  useCase: ParticipantUseCase;
  primaryGoal: string;
  domains: string[];
  currentStage: ParticipantStage;
  readiness: number;
  strengths: string[];
  barriers: string[];
  supportNeeds: string[];
  goals: string[];
};

export const participantRegistry: Participant[] = [
  {
    id: "p-001",
    name: "Aisha Thompson",
    persona: "Career transition learner",
    region: "Tulsa",
    useCase: "workforce-development",
    primaryGoal: "Move into stable, higher-wage work with a clear, supported career pathway.",
    domains: ["workforce-development", "education", "economic-mobility"],
    currentStage: "prepare",
    readiness: 81,
    strengths: ["High motivation", "Strong communication", "Growth mindset"],
    barriers: ["Limited network", "Temporary housing pressure", "Career uncertainty"],
    supportNeeds: ["resume strategy", "training access", "transportation support"],
    goals: ["Secure a stable job", "Increase income", "Build a personal support plan"],
  },
  {
    id: "p-002",
    name: "Marcus Lee",
    persona: "Emerging founder",
    region: "North Tulsa",
    useCase: "entrepreneurship",
    primaryGoal: "Launch a small business with financing, mentorship, and a viable market strategy.",
    domains: ["entrepreneurship", "innovation-and-technology", "economic-mobility"],
    currentStage: "assess",
    readiness: 68,
    strengths: ["Product idea clarity", "Local credibility", "Community trust"],
    barriers: ["Cash constraints", "Business planning gaps", "Limited capital"],
    supportNeeds: ["business coaching", "market validation", "loan navigation"],
    goals: ["Refine the business model", "Access capital", "Create a launch plan"],
  },
  {
    id: "p-003",
    name: "Janelle Brooks",
    persona: "Community leader",
    region: "South Tulsa",
    useCase: "leadership-development",
    primaryGoal: "Grow into a community-facing leadership role that expands local impact and trust.",
    domains: ["leadership-development", "community-engagement", "community-transformation"],
    currentStage: "connect",
    readiness: 87,
    strengths: ["Trusted voice", "Strategic thinking", "Community mobilization"],
    barriers: ["Role clarity", "Leadership capacity", "Resource coordination"],
    supportNeeds: ["peer mentoring", "leadership coaching", "stakeholder alignment"],
    goals: ["Lead a neighborhood initiative", "Build strategic partnerships", "Increase civic influence"],
  },
  {
    id: "p-004",
    name: "Devon Price",
    persona: "Housing stability participant",
    region: "Tulsa Metro",
    useCase: "housing-stability",
    primaryGoal: "Stabilize housing and improve long-term financial readiness for the household.",
    domains: ["housing-stability", "resource-navigation", "economic-mobility"],
    currentStage: "thrive",
    readiness: 74,
    strengths: ["Home management discipline", "Budgeting effort", "Strong family commitment"],
    barriers: ["Rent pressure", "Emergency expenses", "Employment gap"],
    supportNeeds: ["housing navigation", "benefits support", "job placement support"],
    goals: ["Maintain stable housing", "Reduce financial volatility", "Build future savings"],
  },
  {
    id: "p-005",
    name: "Elena Ortiz",
    persona: "Transformation organizer",
    region: "Oaklahoma City",
    useCase: "community-transformation",
    primaryGoal: "Coordinate neighborhood-scale transformation with institutional, civic, and resident alignment.",
    domains: ["community-transformation", "resource-navigation", "leadership-development"],
    currentStage: "lead",
    readiness: 90,
    strengths: ["Partnership building", "Cross-sector coordination", "Policy awareness"],
    barriers: ["Institutional fragmentation", "Funding coordination", "Stakeholder alignment"],
    supportNeeds: ["collaboration design", "funding strategy", "community convening"],
    goals: ["Grow a shared action plan", "Stabilize coalition structure", "Scale community effort"],
  },
];

export function getParticipantRegistry(): Participant[] {
  return participantRegistry.map((participant) => ({ ...participant, domains: [...participant.domains], strengths: [...participant.strengths], barriers: [...participant.barriers], supportNeeds: [...participant.supportNeeds], goals: [...participant.goals] }));
}

export function getDefaultParticipant(): Participant {
  return participantRegistry[0];
}
