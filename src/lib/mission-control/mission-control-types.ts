export type MissionControlMetric = {
  id: string;
  title: string;
  value: string | number;
  unit?: string;
  trend?: "up" | "down" | "stable";
  confidence?: number;
  target?: number;
  status: "on-track" | "at-risk" | "alert";
};

export type ExecutiveDashboard = {
  principle: string;
  timestamp: string;
  organizationalHealth: MissionControlMetric[];
  participantMetrics: MissionControlMetric[];
  transformationMetrics: MissionControlMetric[];
  ecosystemMetrics: MissionControlMetric[];
  summary: string;
};

export type OrganizationalScorecard = {
  overall: number;
  leadership: number;
  operations: number;
  impact: number;
  ecosystem: number;
  domains: Array<{
    id: string;
    name: string;
    score: number;
    participants: number;
    momentum: string;
  }>;
  summary: string;
};

export type EcosystemCommand = {
  id: string;
  name: string;
  partners: number;
  coordination: number;
  resourceFlow: number;
  trustScore: number;
  activeDomains: string[];
  recommendations: string[];
};

export type WorkforceCommand = {
  totalParticipants: number;
  activeJourneys: number;
  completedMilestones: number;
  averageReadiness: number;
  communityLeaders: number;
  opportunitiesMatched: number;
  status: "operational" | "scaling" | "developing";
};

export type AgentOperation = {
  id: string;
  name: string;
  role: string;
  assignments: number;
  completionRate: number;
  lastActive: string;
  status: "active" | "idle" | "training";
};

export type ParticipantOverview = {
  total: number;
  byStage: Record<string, number>;
  byDomain: Record<string, number>;
  momentum: {
    accelerating: number;
    stable: number;
    slowing: number;
  };
  opportunities: {
    available: number;
    matched: number;
    completed: number;
  };
};

export type TransformationIntelligenceCenter = {
  activeGoals: number;
  averageScore: number;
  topBarriers: Array<{
    id: string;
    title: string;
    frequency: number;
    mitigation: string;
  }>;
  topStrengths: Array<{
    id: string;
    title: string;
    leverage: string;
  }>;
  recommendations: string[];
  forecastConfidence: number;
};

export type MissionControlOS = {
  principle: string;
  executiveDashboard: ExecutiveDashboard;
  organizationalScorecard: OrganizationalScorecard;
  ecosystemCommand: EcosystemCommand;
  workforceCommand: WorkforceCommand;
  agentOperations: AgentOperation[];
  participantOverview: ParticipantOverview;
  transformationIntelligenceCenter: TransformationIntelligenceCenter;
  summary: string;
};
