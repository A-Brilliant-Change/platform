export const audiencePaths = [
  {
    id: "individuals",
    title: "For Individuals",
    description: "Move from barriers to opportunity. Access careers, skills, growth, and community support.",
    icon: "user",
    cta: "Explore Pathways",
    href: "/journey",
    highlights: ["Career Pathways", "Skill Development", "Community Support"],
  },
  {
    id: "employers",
    title: "For Employers",
    description: "Build talent pipelines connected to transformation. Invest in workforce and community impact.",
    icon: "briefcase",
    cta: "Partner With Us",
    href: "/about",
    highlights: ["Talent Solutions", "Partnership Programs", "Impact Metrics"],
  },
  {
    id: "organizations",
    title: "For Organizations",
    description: "Integrate transformation into your mission. Access tools, framework, and ecosystem support.",
    icon: "building",
    cta: "Collaborate",
    href: "/ecosystem",
    highlights: ["Integration Framework", "Resource Library", "Ecosystem Access"],
  },
  {
    id: "investors",
    title: "For Investors",
    description: "Fund transformation at scale. Direct your capital toward measurable community impact.",
    icon: "trending",
    cta: "Review Impact",
    href: "/about",
    highlights: ["Impact Reports", "ROI Framework", "Investment Vehicles"],
  },
] as const;

export type AudiencePath = (typeof audiencePaths)[number];
