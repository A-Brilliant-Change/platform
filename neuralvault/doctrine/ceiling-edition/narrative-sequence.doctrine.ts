export const narrativeSequenceDoctrine = {
  id: "narrative-sequence",
  name: "Narrative Sequence™",
  phases: [
    {
      id: "origin",
      title: "Origin",
      purpose: "Ground the story in place, pain, and possibility.",
    },
    {
      id: "promise",
      title: "Promise",
      purpose: "State the transformational heart and moral center.",
    },
    {
      id: "domains",
      title: "Domains",
      purpose: "Reveal the systems that make transformation practical.",
    },
    {
      id: "pathways",
      title: "Pathways",
      purpose: "Show how transformation moves from aspiration to action.",
    },
    {
      id: "ecosystem",
      title: "Ecosystem",
      purpose: "Demonstrate collective power and network effects.",
    },
    {
      id: "impact",
      title: "Impact",
      purpose: "Return the story to measurable human outcomes.",
    },
  ],
  requiredFlow: [
    "origin",
    "promise",
    "domains",
    "pathways",
    "ecosystem",
    "impact",
  ],
} as const;

export const ceilingExperienceBindings = narrativeSequenceDoctrine;
