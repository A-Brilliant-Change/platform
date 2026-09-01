export type TransformationPriority = "strategic" | "high" | "medium";

export type TransformationDomain = {
  id: string;
  order: number;
  title: string;
  promise: string;
  pathwayColor: string;
  icon: string;
  primaryOutcome: string;
  relatedDomainIds: string[];
};

export type TransformationGoal = {
  id: string;
  title: string;
  description: string;
  priority: TransformationPriority;
  domainIds: string[];
};

export type BarrierType =
  | "access"
  | "capacity"
  | "readiness"
  | "coordination"
  | "trust"
  | "economic"
  | "institutional";

export type BarrierInsight = {
  id: string;
  type: BarrierType;
  title: string;
  severity: number;
  explanation: string;
  mitigation: string;
};

export type StrengthInsight = {
  id: string;
  title: string;
  score: number;
  explanation: string;
  leverage: string;
};

export type OpportunityNodeKind = "goal" | "domain" | "resource" | "outcome" | "pathway";

export type OpportunityNode = {
  id: string;
  label: string;
  kind: OpportunityNodeKind;
  weight: number;
  description: string;
};

export type OpportunityEdge = {
  sourceId: string;
  targetId: string;
  strength: number;
  label: string;
};

export type OpportunityGraph = {
  nodes: OpportunityNode[];
  edges: OpportunityEdge[];
};

export type PathwayStage = {
  id: string;
  order: number;
  label: string;
  purpose: string;
  milestones: Milestone[];
};

export type Milestone = {
  id: string;
  label: string;
  description: string;
  status?: "pending" | "active" | "complete";
};

export type ForecastSignal = {
  id: string;
  title: string;
  confidence: number;
  outlook: "strong" | "moderate" | "watch";
  rationale: string;
};

export type CommunityImpact = {
  id: string;
  title: string;
  value: string;
  description: string;
  indicators: string[];
};

export type TransformationRecommendation = {
  id: string;
  title: string;
  rationale: string;
  relatedDomains: string[];
  expectedOutcome: string;
  explainability: string[];
};

export type TransformationScore = {
  overall: number;
  readiness: number;
  structure: number;
  momentum: number;
  communityReturn: number;
  summary: string;
};

export type TransformationPlan = {
  goal: TransformationGoal;
  domains: TransformationDomain[];
  barriers: BarrierInsight[];
  strengths: StrengthInsight[];
  pathway: { id: string; title: string; stages: PathwayStage[] };
  forecast: ForecastSignal[];
  score: TransformationScore;
  impact: CommunityImpact[];
  graph: OpportunityGraph;
  recommendations: TransformationRecommendation[];
  summary: string;
};

export type TransformationInput = {
  id?: string;
  title: string;
  description: string;
  priority?: TransformationPriority;
  domainIds?: string[];
};




