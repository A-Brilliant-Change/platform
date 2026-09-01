export const credibilityMarkers = [
  {
    id: "recognized",
    label: "Nationally Recognized",
    description: "Award-winning transformation model",
  },
  {
    id: "evidence",
    label: "Evidence-Based",
    description: "Measured results and continuous evaluation",
  },
  {
    id: "experienced",
    label: "15+ Years",
    description: "Proven impact in workforce and community transformation",
  },
  {
    id: "connected",
    label: "200+ Partners",
    description: "Trusted by employers, nonprofits, and community leaders",
  },
] as const;

export const recognitionAwards = [
  {
    id: "award-1",
    title: "Community Impact Award",
    organization: "Tulsa Regional Chamber",
    year: "2024",
  },
  {
    id: "award-2",
    title: "Workforce Innovation",
    organization: "National Skills Coalition",
    year: "2023",
  },
  {
    id: "award-3",
    title: "Social Enterprise of the Year",
    organization: "Oklahoma Nonprofit Network",
    year: "2023",
  },
] as const;

export const trustIndicators = [
  { label: "98% Job Placement Rate", value: "98%" },
  { label: "85% Career Advancement", value: "85%" },
  { label: "$18K Avg Income Increase", value: "+$18K" },
  { label: "4:1 ROI on Investment", value: "4:1" },
] as const;

export type CredibilityMarker = (typeof credibilityMarkers)[number];
export type RecognitionAward = (typeof recognitionAwards)[number];
export type TrustIndicator = (typeof trustIndicators)[number];
