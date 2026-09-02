export const impactMetrics = [
  {
    id: "individuals",
    metric: "People",
    label: "At the center",
    description: "Human potential is the starting point for every transformation pathway",
  },
  {
    id: "opportunities",
    metric: "Pathways",
    label: "In design",
    description: "Programs, tools, and systems being shaped around real needs",
  },
  {
    id: "communities",
    metric: "Communities",
    label: "In focus",
    description: "Neighborhood-centered strategies rooted in local context and trust",
  },
  {
    id: "ecosystem",
    metric: "Partners",
    label: "Growing",
    description: "Collaborations expanding as the operating system matures",
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
