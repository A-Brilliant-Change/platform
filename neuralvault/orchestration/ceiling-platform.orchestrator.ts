import {
  ceilingEditionDoctrine,
  infrastructureDoctrine,
  opportunityPathwayDoctrine,
  peopleFirstHeartDoctrine,
  transformationDomains,
  tulsaOriginDoctrine,
} from "@/neuralvault/doctrine/ceiling-edition";

export const ceilingPlatformOrchestrator = {
  identity: {
    brand: "ABrilliantChange",
    platform: "NeuralVault™",
    principle: "Every Opportunity Begins With People™",
    mission: "A doctrine-driven transformation platform for people, opportunity, and community value.",
  },
  nav: [
    { label: "Atlas", anchor: "#atlas" },
    { label: "Domains", anchor: "#domains" },
    { label: "Journey", anchor: "#journey" },
    { label: "Infrastructure", anchor: "#infrastructure" },
    { label: "NeuralVault", anchor: "#vault" },
  ],
  hero: {
    eyebrow: "NeuralVault / People-first orchestration",
    headline: "Every Opportunity Begins With People™",
    subhead: "A living system that turns human potential into coordinated opportunity and durable community return.",
    description:
      "Every signal, route, pathway, and community interaction is aligned to a singular doctrine: people are the origin, opportunity is the bridge, and community value is the return.",
    callout: "From Tulsa origin to neighborhood-level transformation.",
  },
  signals: [
    {
      title: "People Signal",
      description: "The platform begins with dignity, aspiration, and lived capacity.",
    },
    {
      title: "Opportunity Engine",
      description: "Pathways convert possibility into access, agency, and momentum.",
    },
    {
      title: "Community Return",
      description: "The final result is measurable value that strengthens families and neighborhoods.",
    },
    {
      title: "Doctrine Layer",
      description: "Every experience is coordinated through a shared governing intelligence.",
    },
  ],
  metrics: [
    { value: String(transformationDomains.length), label: "Transformation domains" },
    { value: String(opportunityPathwayDoctrine.stages.length), label: "Opportunity stages" },
    { value: "∞", label: "Potential unlocked" },
  ],
  domains: transformationDomains.map((domain) => ({
    id: domain.id,
    title: domain.title,
    description: `${domain.promise} ${domain.primaryOutcome.replace(/-/g, " ")}.`,
    order: domain.order,
  })),
  journey: opportunityPathwayDoctrine.stages.map((stage) => ({
    id: stage.id,
    label: stage.label,
    purpose: stage.purpose,
  })),
  infrastructure: infrastructureDoctrine.layers.map((layer) => ({
    id: layer.id,
    title: layer.title,
    copy: layer.copy,
  })),
  heart: peopleFirstHeartDoctrine,
  origin: tulsaOriginDoctrine,
  platform: {
    name: ceilingEditionDoctrine.name,
    edition: ceilingEditionDoctrine.edition,
    purpose: ceilingEditionDoctrine.doctrine.purpose,
    sourceOfTruth: "NeuralVault doctrine registry",
    orchestration: [
      "origin intelligence",
      "pathway coordination",
      "community value mapping",
      "experience feedback loops",
    ],
  },
} as const;







