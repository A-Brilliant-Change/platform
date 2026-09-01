export const tulsaHub = {
  id: "tulsa",
  title: "Transformation Hub: Tulsa",
  tagline: "Where A Brilliant Change Began",
  headline: "Building Brighter Futures in Tulsa",
  description: "Tulsa is the proving ground and command center for ABC's transformation operating system. From Greenwood to North Tulsa, we're creating systems that expand opportunity and strengthen community.",
  image: "/images/locations/tulsa-skyline",
  cta: "Explore Tulsa Hub",
  href: "/atlas",
  stats: [
    {
      metric: "10,000+",
      label: "Tulsa residents engaged",
    },
    {
      metric: "500+",
      label: "Local partnerships",
    },
    {
      metric: "4 Neighborhoods",
      label: "Focused development areas",
    },
  ],
  initiatives: [
    "Greenwood Renaissance Project",
    "North Tulsa Economic Corridor",
    "Community Leadership Development",
    "Digital Transformation Initiative",
  ],
} as const;

export type TulsaHub = typeof tulsaHub;
