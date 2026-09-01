export const impactMetrics = [
  {
    id: "individuals",
    metric: "50,000+",
    label: "Individuals Impacted",
    description: "People moving toward opportunity and transformation",
  },
  {
    id: "opportunities",
    metric: "15,000+",
    label: "Opportunities Created",
    description: "Jobs, skills, pathways, and community roles",
  },
  {
    id: "communities",
    metric: "25+",
    label: "Communities Connected",
    description: "Neighborhoods strengthened through collaboration",
  },
  {
    id: "ecosystem",
    metric: "200+",
    label: "Ecosystem Partners",
    description: "Organizations aligned in transformation",
  },
] as const;

export const impactFrameworkPillars = [
  {
    id: "access",
    title: "Access",
    description: "Create entry points and remove barriers to opportunity",
  },
  {
    id: "capability",
    title: "Capability",
    description: "Build skills, knowledge, and confidence for success",
  },
  {
    id: "connection",
    title: "Connection",
    description: "Link people, ideas, resources, and systems",
  },
  {
    id: "contribution",
    title: "Contribution",
    description: "Enable meaningful participation and impact",
  },
] as const;

export type ImpactMetric = (typeof impactMetrics)[number];
export type ImpactPillar = (typeof impactFrameworkPillars)[number];
