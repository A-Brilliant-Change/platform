import { type OrganizationalScorecard } from "./mission-control-types";

export function scoreOrganization(): OrganizationalScorecard {
  const leadership = 89;
  const operations = 91;
  const impact = 84;
  const ecosystem = 86;
  const overall = Math.round((leadership + operations + impact + ecosystem) / 4);

  return {
    overall,
    leadership,
    operations,
    impact,
    ecosystem,
    domains: [
      {
        id: "workforce-development",
        name: "Workforce Development",
        score: 87,
        participants: 245,
        momentum: "strong",
      },
      {
        id: "education",
        name: "Education",
        score: 84,
        participants: 198,
        momentum: "strong",
      },
      {
        id: "entrepreneurship",
        name: "Entrepreneurship",
        score: 79,
        participants: 142,
        momentum: "moderate",
      },
      {
        id: "leadership-development",
        name: "Leadership Development",
        score: 88,
        participants: 176,
        momentum: "strong",
      },
      {
        id: "economic-mobility",
        name: "Economic Mobility",
        score: 81,
        participants: 219,
        momentum: "strong",
      },
      {
        id: "housing-stability",
        name: "Housing Stability",
        score: 76,
        participants: 167,
        momentum: "moderate",
      },
      {
        id: "resource-navigation",
        name: "Resource Navigation",
        score: 85,
        participants: 234,
        momentum: "strong",
      },
      {
        id: "community-engagement",
        name: "Community Engagement",
        score: 83,
        participants: 206,
        momentum: "strong",
      },
      {
        id: "innovation-technology",
        name: "Innovation & Technology",
        score: 78,
        participants: 128,
        momentum: "moderate",
      },
      {
        id: "community-transformation",
        name: "Community Transformation",
        score: 82,
        participants: 187,
        momentum: "strong",
      },
    ],
    summary: `Organizational health score is ${overall}/100. Leadership and operations are performing above target. Impact and ecosystem partnership remain strong growth vectors.`,
  };
}
