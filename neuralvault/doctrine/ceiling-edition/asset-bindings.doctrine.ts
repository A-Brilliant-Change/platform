export const assetBindingsDoctrine = {
  id: "asset-bindings",
  name: "Asset Bindings™",
  principle: "Every message, surface, and visual should point back to a single approved source of truth.",
  bindings: [
    {
      kind: "brand",
      source: "brand-library/01-brand",
      use: "logos, seals, approved wordmarks, and primary identity rules",
    },
    {
      kind: "hero",
      source: "public/images/hero",
      use: "hero and campaign visuals for high-visibility storytelling",
    },
    {
      kind: "domains",
      source: "public/images/domains",
      use: "domain-specific visual anchors and ecosystem context",
    },
    {
      kind: "origin",
      source: "public/images/origin",
      use: "Tulsa-rooted storytelling and heritage visuals",
    },
    {
      kind: "infrastructure",
      source: "public/images/infrastructure",
      use: "platform architecture and system visuals",
    },
    {
      kind: "ecosystem",
      source: "public/images/ecosystem",
      use: "community, partner, and network storytelling",
    },
  ],
} as const;

export const ceilingAssetBindings = assetBindingsDoctrine;
