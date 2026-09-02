export const credibilityMarkers = [
  {
    id: "status",
    label: "Public Platform",
    description: "Live and open for discovery",
  },
  {
    id: "framework",
    label: "Transformation Framework",
    description: "Established and guiding our system design",
  },
  {
    id: "city",
    label: "Demonstration City",
    description: "Tulsa as the origin and proving ground",
  },
  {
    id: "ops",
    label: "Operating System",
    description: "In development with an evidence-informed foundation",
  },
] as const;

export const recognitionAwards = [
  {
    id: "status-1",
    title: "Platform Status",
    organization: "Public Launch",
    year: "Live",
  },
  {
    id: "status-2",
    title: "System Design",
    organization: "Transformation Framework",
    year: "Established",
  },
  {
    id: "status-3",
    title: "Demonstration Context",
    organization: "Tulsa, Oklahoma",
    year: "Origin",
  },
] as const;

export const trustIndicators = [
  { label: "Public Platform", value: "Live" },
  { label: "Transformation Framework", value: "Established" },
  { label: "Demonstration City", value: "Tulsa" },
  { label: "Operating System", value: "In Development" },
] as const;

export type CredibilityMarker = (typeof credibilityMarkers)[number];
export type RecognitionAward = (typeof recognitionAwards)[number];
export type TrustIndicator = (typeof trustIndicators)[number];
