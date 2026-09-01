export const ecosystemRelationshipDoctrine = {
  id: "connected-movement",
  name: "A Connected Movement™",
  participants: [
    "individuals",
    "families",
    "employers",
    "educators",
    "nonprofits",
    "faith-communities",
    "government",
    "funders-and-investors",
    "volunteers",
    "community-leaders",
  ],
  relationshipTypes: [
    "serves",
    "supports",
    "trains",
    "employs",
    "funds",
    "refers",
    "mentors",
    "partners",
    "learns",
    "leads",
  ],
  coreRule:
    "No institution, program, or platform should appear more important than the people the ecosystem exists to serve.",
  visualBehavior: {
    default: "subtle-node-network",
    onDomainFocus: "reveal-relevant-participants",
    onJourneyProgress: "activate-supporting-relationships",
    onOutcome: "return-impact-to-community",
  },
} as const;







