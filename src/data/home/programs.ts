export const programs = [
  {
    id: "abc-talent",
    title: "ABC Talent Solutions",
    tagline: "Career Readiness & Employment",
    description: "Connect individuals to meaningful careers through skills training, certifications, and employer partnerships.",
    status: "active",
    impact: "2500+ individuals placed",
  },
  {
    id: "abc-economic",
    title: "ABC Economic Empowerment",
    tagline: "Financial Literacy & Entrepreneurship",
    description: "Build pathways from financial instability to wealth creation through education, small business support, and investment.",
    status: "active",
    impact: "450+ entrepreneurs supported",
  },
  {
    id: "brilliant-tech",
    title: "Brilliant Tech Academy",
    tagline: "Digital Skills & Innovation",
    description: "Ensure technology access and digital literacy become opportunity multipliers, not barriers.",
    status: "active",
    impact: "1200+ trained in tech skills",
  },
  {
    id: "community-hub",
    title: "Community Transformation Hub",
    tagline: "Neighborhood Revitalization",
    description: "Strengthen neighborhoods through collaboration, civic engagement, and community-led projects.",
    status: "active",
    impact: "15+ communities transformed",
  },
  {
    id: "leadership-institute",
    title: "Leadership Institute",
    tagline: "Developing Next-Gen Leaders",
    description: "Cultivate leaders who create influence, stewardship, and lasting impact in their communities.",
    status: "active",
    impact: "200+ leaders developed",
  },
  {
    id: "storytelling",
    title: "Founder's Voice & Media",
    tagline: "Narrative & Impact Communication",
    description: "Amplify transformation through storytelling, journalism, and creative platforms.",
    status: "active",
    impact: "Reaching 2M+ annually",
  },
] as const;

export type Program = (typeof programs)[number];
