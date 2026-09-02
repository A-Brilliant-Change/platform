export const tulsaHub = {
  id: "tulsa",
  title: "Transformation Hub: Tulsa",
  tagline: "Where A Brilliant Change Began",
  headline: "Building Brighter Futures in Tulsa",
  description: "Tulsa is the origin and demonstration city for ABC's transformation operating system. We are building connected systems that expand opportunity and strengthen community.",
  image: "/images/locations/tulsa-skyline",
  cta: "Explore Tulsa Hub",
  href: "/atlas",
  stats: [
    {
      metric: "Public Platform",
      label: "Live",
    },
    {
      metric: "Transformation Framework",
      label: "Established",
    },
    {
      metric: "Demonstration City",
      label: "Tulsa",
    },
  ],
  initiatives: [
    "Community Leadership Development",
    "Digital Transformation Initiative",
    "Opportunity Pathway Design",
    "Civic Infrastructure Development",
  ],
} as const;

export type TulsaHub = typeof tulsaHub;
