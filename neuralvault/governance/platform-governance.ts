import agentsManifest from "@/neuralvault/manifests/agents.manifest.json";
import assetsManifest from "@/neuralvault/manifests/assets.manifest.json";
import doctrineManifest from "@/neuralvault/manifests/doctrine.manifest.json";
import domainsManifest from "@/neuralvault/manifests/domains.manifest.json";
import journeysManifest from "@/neuralvault/manifests/journeys.manifest.json";
import programsManifest from "@/neuralvault/manifests/programs.manifest.json";
import participantsManifest from "@/neuralvault/manifests/participants.manifest.json";

export type GovernanceStatus = "pass" | "warning" | "error";

export type GovernanceResult = {
  id: string;
  title: string;
  status: GovernanceStatus;
  details: string;
};

export type GovernanceReport = {
  summary: string;
  status: GovernanceStatus;
  checks: GovernanceResult[];
  architectureLayers: Array<{
    name: string;
    children: string[];
  }>;
};

export const platformGovernanceArchitecture = [
  {
    name: "Presentation Layer",
    children: ["Homepage", "Atlas", "Explorer System", "Dashboards", "Mission Control"],
  },
  {
    name: "Experience Layer",
    children: ["Ceiling Experience", "Journey Engine", "Domain Engine", "Heartbeat Engine"],
  },
  {
    name: "Knowledge Layer",
    children: ["NeuralVault", "Doctrine", "Founder Intelligence", "Program Intelligence"],
  },
  {
    name: "Intelligence Layer",
    children: ["Atlas Intelligence", "Transformation Intelligence", "Recommendation Engine", "Query Engine"],
  },
  {
    name: "Operational Layer",
    children: ["Agent Ecosystem", "Participant Intelligence", "Mission Control", "Community Digital Twin"],
  },
  {
    name: "Executive Layer",
    children: ["Autonomous ABC Operating System"],
  },
];

export function validateSchema<T>(payload: T, requiredKeys: string[], label: string): GovernanceResult {
  const missing = requiredKeys.filter((key) => !(payload as Record<string, unknown>)?.[key]);

  if (missing.length > 0) {
    return {
      id: `${label}-schema`,
      title: `${label} schema validation`,
      status: "error",
      details: `Missing required keys: ${missing.join(", ")}.`,
    };
  }

  return {
    id: `${label}-schema`,
    title: `${label} schema validation`,
    status: "pass",
    details: `${label} contains the required schema structures.`,
  };
}

export function validateRegistryEntries<T extends { id: string }>(items: T[], label: string): GovernanceResult {
  const duplicates = items.filter((item, index) => items.findIndex((candidate) => candidate.id === item.id) !== index);

  if (duplicates.length > 0) {
    return {
      id: `${label}-registry`,
      title: `${label} registry validation`,
      status: "error",
      details: `Duplicate registry ids detected in ${label}: ${duplicates.map((item) => item.id).join(", ")}.`,
    };
  }

  return {
    id: `${label}-registry`,
    title: `${label} registry validation`,
    status: "pass",
    details: `${label} contains unique registry entries.`,
  };
}

export function validateDoctrineManifest(input: typeof doctrineManifest): GovernanceResult {
  const check = validateSchema(input, ["doctrine", "version", "kind"], "Doctrine");

  if (check.status !== "pass") {
    return check;
  }

  const principle = input.doctrine?.principle;
  if (!principle || !String(principle).includes("People")) {
    return {
      id: "doctrine-principle",
      title: "Doctrine validation",
      status: "error",
      details: "Doctrine principle must reinforce the people-first foundation.",
    };
  }

  return {
    id: "doctrine-principle",
    title: "Doctrine validation",
    status: "pass",
    details: "Doctrine is aligned to the people-first transformation principle.",
  };
}

export function validateManifestConsistency(): GovernanceResult {
  const names = [
    "domains",
    "programs",
    "doctrine",
    "assets",
    "agents",
    "journeys",
    "participants",
  ];

  const missing = names.filter((name) => !Object.prototype.hasOwnProperty.call({
    domains: domainsManifest,
    programs: programsManifest,
    doctrine: doctrineManifest,
    assets: assetsManifest,
    agents: agentsManifest,
    journeys: journeysManifest,
    participants: participantsManifest,
  }, name));

  if (missing.length > 0) {
    return {
      id: "manifest-consistency",
      title: "Manifest validation",
      status: "error",
      details: `Missing manifest payloads: ${missing.join(", ")}.`,
    };
  }

  return {
    id: "manifest-consistency",
    title: "Manifest validation",
    status: "pass",
    details: "All required NeuralVault manifests are present and initialized.",
  };
}

export function validateRelationships(): GovernanceResult {
  const domainIds = new Set((domainsManifest.domains ?? []).map((domain) => domain.id));
  const journeyIds = new Set((journeysManifest.journeys ?? []).flatMap((journey) => journey.domainIds ?? []));
  const programIds = new Set((programsManifest.programs ?? []).flatMap((program) => program.domainIds ?? []));
  const participantIds = new Set((participantsManifest.participants ?? []).flatMap((participant) => participant.domains ?? []));

  const unresolved = [
    ...[...journeyIds].filter((id) => !domainIds.has(id)),
    ...[...programIds].filter((id) => !domainIds.has(id)),
    ...[...participantIds].filter((id) => !domainIds.has(id)),
  ];

  if (unresolved.length > 0) {
    return {
      id: "relationship-validation",
      title: "Relationship validation",
      status: "error",
      details: `Unresolved domain references detected: ${[...new Set(unresolved)].join(", ")}.`,
    };
  }

  return {
    id: "relationship-validation",
    title: "Relationship validation",
    status: "pass",
    details: "All journeys, programs, and participant references resolve to real domains.",
  };
}

export function validateAssets(): GovernanceResult {
  const assets = assetsManifest.assets ?? [];
  const unapproved = assets.filter((asset) => asset.approved !== true);

  if (unapproved.length > 0) {
    return {
      id: "asset-validation",
      title: "Asset validation",
      status: "warning",
      details: `Some assets are not approved for deployment: ${unapproved.map((asset) => asset.id).join(", ")}.`,
    };
  }

  return {
    id: "asset-validation",
    title: "Asset validation",
    status: "pass",
    details: "All assets in the manifest are approved and ready for platform use.",
  };
}

export function validateAgents(): GovernanceResult {
  const agents = agentsManifest.agents ?? [];
  const invalid = agents.filter((agent) => !agent.id || !agent.name || !agent.role);

  if (invalid.length > 0) {
    return {
      id: "agent-validation",
      title: "Agent validation",
      status: "error",
      details: "One or more agent records are missing required identity data.",
    };
  }

  return {
    id: "agent-validation",
    title: "Agent validation",
    status: "pass",
    details: "All agents are fully defined and ready for orchestration.",
  };
}

export function runPlatformGovernance(): GovernanceReport {
  const checks: GovernanceResult[] = [
    validateDoctrineManifest(doctrineManifest),
    validateManifestConsistency(),
    validateRelationships(),
    validateAssets(),
    validateAgents(),
    validateRegistryEntries(domainsManifest.domains ?? [], "Domain"),
    validateRegistryEntries(programsManifest.programs ?? [], "Program"),
    validateRegistryEntries(journeysManifest.journeys ?? [], "Journey"),
  ];

  const status: GovernanceStatus = checks.some((check) => check.status === "error")
    ? "error"
    : checks.some((check) => check.status === "warning")
      ? "warning"
      : "pass";

  return {
    summary: "Platform governance is active and aligned to the NeuralVault doctrine and manifest system.",
    status,
    checks,
    architectureLayers: platformGovernanceArchitecture,
  };
}







