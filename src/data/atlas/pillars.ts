export const pillars = [
  {
    id: "workforce-transformation",
    title: "Workforce Transformation",
    description: "Build skills, create opportunity, and help people move toward meaningful work.",
    icon: "briefcase",
    atlasRelationship: "People + Opportunity",
  },
  {
    id: "economic-transformation",
    title: "Economic Transformation",
    description: "Move from survival to sustainability through shared prosperity and durable systems.",
    icon: "chart",
    atlasRelationship: "Prosperity + Systems",
  },
  {
    id: "community-transformation",
    title: "Community Transformation",
    description: "Strengthen the connections, trust, and belonging that allow communities to thrive.",
    icon: "community",
    atlasRelationship: "Belonging + Connection",
  },
  {
    id: "digital-transformation",
    title: "Digital Transformation",
    description: "Use technology to open doors, expand access, and accelerate human possibility.",
    icon: "globe",
    atlasRelationship: "Access + Technology",
  },
  {
    id: "leadership-legacy",
    title: "Leadership & Legacy",
    description: "Develop leaders who serve others and create impact that outlasts them.",
    icon: "leadership",
    atlasRelationship: "Service + Impact",
  },
  {
    id: "infrastructure-of-transformation",
    title: "Infrastructure of Transformation",
    description: "Build the foundations, resources, and conditions that make lasting change possible.",
    icon: "infrastructure",
    atlasRelationship: "Foundations + Capacity",
  },
  {
    id: "systems-design-framework",
    title: "Systems Design Framework",
    description: "See the whole system and design connected pathways from challenge to contribution.",
    icon: "systems",
    atlasRelationship: "Patterns + Pathways",
  },
  {
    id: "brighter-futures-framework",
    title: "Brighter Futures Framework",
    description: "Turn a compelling vision of tomorrow into practical steps for today.",
    icon: "sunrise",
    atlasRelationship: "Vision + Direction",
  },
  {
    id: "organizational-capacity",
    title: "Organizational Capacity",
    description: "Equip organizations with the clarity, capability, and resilience to deliver change.",
    icon: "organization",
    atlasRelationship: "Capability + Resilience",
  },
  {
    id: "trendsetting-innovations",
    title: "Trendsetting Innovations",
    description: "Spot emerging possibilities and turn bold ideas into useful momentum.",
    icon: "sparkles",
    atlasRelationship: "Signals + Momentum",
  },
] as const;

export type Pillar = (typeof pillars)[number];
