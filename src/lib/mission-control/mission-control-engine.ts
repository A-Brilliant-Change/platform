import { type EcosystemCommand, type WorkforceCommand, type ParticipantOverview, type TransformationIntelligenceCenter, type MissionControlOS } from "./mission-control-types";
import { buildExecutiveDashboard } from "./executive-dashboard";
import { scoreOrganization } from "./organizational-scorecard";

export function buildEcosystemCommand(): EcosystemCommand {
  return {
    id: "ecosystem-command-1",
    name: "Transformation Ecosystem Network",
    partners: 34,
    coordination: 79,
    resourceFlow: 82,
    trustScore: 88,
    activeDomains: ["workforce-development", "education", "leadership-development", "economic-mobility", "community-transformation"],
    recommendations: [
      "Expand partnership depth with 8 priority organizations",
      "Establish shared data and outcome-tracking protocols",
      "Build joint capacity for cross-domain participant support",
    ],
  };
}

export function buildWorkforceCommand(): WorkforceCommand {
  return {
    totalParticipants: 1247,
    activeJourneys: 892,
    completedMilestones: 3156,
    averageReadiness: 78,
    communityLeaders: 127,
    opportunitiesMatched: 564,
    status: "scaling",
  };
}

export function buildParticipantOverview(): ParticipantOverview {
  return {
    total: 1247,
    byStage: {
      discover: 287,
      assess: 234,
      prepare: 312,
      connect: 198,
      thrive: 156,
      lead: 60,
    },
    byDomain: {
      "workforce-development": 245,
      education: 198,
      entrepreneurship: 142,
      "leadership-development": 176,
      "economic-mobility": 219,
      "housing-stability": 167,
      "resource-navigation": 234,
      "community-engagement": 206,
      "innovation-technology": 128,
      "community-transformation": 187,
    },
    momentum: {
      accelerating: 567,
      stable: 512,
      slowing: 168,
    },
    opportunities: {
      available: 342,
      matched: 564,
      completed: 189,
    },
  };
}

export function buildTransformationIntelligenceCenter(): TransformationIntelligenceCenter {
  return {
    activeGoals: 156,
    averageScore: 81,
    topBarriers: [
      {
        id: "barrier-access",
        title: "Access friction",
        frequency: 78,
        mitigation: "Expand referral network and simplify entry pathways",
      },
      {
        id: "barrier-coordination",
        title: "Cross-system coordination",
        frequency: 61,
        mitigation: "Strengthen case management and single point of coordination",
      },
      {
        id: "barrier-capacity",
        title: "Capacity and readiness",
        frequency: 68,
        mitigation: "Increase coaching and skill-building support capacity",
      },
    ],
    topStrengths: [
      {
        id: "strength-human-potential",
        title: "Human potential",
        leverage: "Center each person's assets and build traction from visible progress",
      },
      {
        id: "strength-ecosystem",
        title: "Ecosystem support",
        leverage: "Deepen cross-domain coordination to create resilient support systems",
      },
      {
        id: "strength-clarity",
        title: "Pathway clarity",
        leverage: "Use milestone visibility and checkpoints to sustain momentum",
      },
    ],
    recommendations: [
      "Accelerate barrier removal initiatives in access and coordination",
      "Scale successful domain partnerships across the network",
      "Invest in community leader development and peer mentorship",
    ],
    forecastConfidence: 86,
  };
}

export function buildMissionControlOS(): MissionControlOS {
  const executiveDashboard = buildExecutiveDashboard();
  const organizationalScorecard = scoreOrganization();
  const ecosystemCommand = buildEcosystemCommand();
  const workforceCommand = buildWorkforceCommand();
  const participantOverview = buildParticipantOverview();
  const transformationIntelligenceCenter = buildTransformationIntelligenceCenter();

  return {
    principle: "Every Opportunity Begins With People™",
    executiveDashboard,
    organizationalScorecard,
    ecosystemCommand,
    workforceCommand,
    agentOperations: [
      {
        id: "agent-recommendation-engine",
        name: "Recommendation Engine",
        role: "opportunity-intelligence",
        assignments: 156,
        completionRate: 94,
        lastActive: new Date().toISOString(),
        status: "active",
      },
      {
        id: "agent-pathway-coordinator",
        name: "Pathway Coordinator",
        role: "journey-orchestration",
        assignments: 234,
        completionRate: 89,
        lastActive: new Date().toISOString(),
        status: "active",
      },
      {
        id: "agent-barrier-resolver",
        name: "Barrier Resolver",
        role: "friction-reduction",
        assignments: 87,
        completionRate: 91,
        lastActive: new Date().toISOString(),
        status: "active",
      },
    ],
    participantOverview,
    transformationIntelligenceCenter,
    summary:
      "Mission Control OS is fully operational. All systems aligned to people-first doctrine. Organizational momentum strong. Ecosystem partnership expanding. Ready for next-phase scaling.",
  };
}
