export const accessibilityDoctrine = {
  id: "accessibility",
  name: "Accessibility™",
  principles: [
    "Ensure all critical meaning is perceivable without relying on color alone.",
    "Maintain comfortable contrast across text, surfaces, and interactive states.",
    "Use semantic headings and clear focus rings for keyboard navigation.",
    "Reduce unnecessary motion for users who prefer a calmer environment.",
  ],
  requirements: [
    "Text must remain legible at common viewport sizes.",
    "Touch targets should be easy to activate on mobile.",
    "Motion should respect reduced-motion preferences.",
  ],
} as const;

export const ceilingAccessibilityDoctrine = accessibilityDoctrine;
