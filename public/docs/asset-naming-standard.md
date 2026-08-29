# ABC Asset Naming Standard™

## Purpose

This standard keeps the ABrilliantChange.com brand library organized, production-safe, and usable across both GitHub and Microsoft 365 Copilot workflows.

The repository remains the source of truth for web implementation, while approved brand assets should also be mirrored into a SharePoint or OneDrive brand library for business, presentation, and Copilot-assisted content work.

---

## Core Naming Convention

Use this pattern:

```text
ABC-[CATEGORY]-[SUBJECT]-[DESCRIPTOR]-v[VERSION].[extension]
```

Examples:

```text
ABC-HERO-Master-Ceiling-Edition-v1.jpg
ABC-ATLAS-Master-Transformation-Atlas-v1.jpg
ABC-INFRASTRUCTURE-Explorer-Platform-v1.jpg
ABC-ECOSYSTEM-Master-Overview-v1.jpg
ABC-ORIGIN-Tulsa-Map-v1.jpg
ABC-BRAND-Logo-Master-Official-v1.png
ABC-BRAND-Seal-Institutional-v1.png
```

---

## Category Prefixes

```text
BRAND
HERO
ATLAS
DOMAIN
INFRASTRUCTURE
ECOSYSTEM
ORIGIN
BACKGROUND
MISSION-CONTROL
```

---

## Approved Repository Structure

```text
public/
├── brand/
│   ├── logos/
│   ├── seals/
│   └── identity/
├── hero/
├── atlas/
├── domains/
├── infrastructure/
├── ecosystem/
├── origin/
├── backgrounds/
├── docs/
└── images/
    ├── hero/
    ├── atlas/
    ├── domains/
    ├── infrastructure/
    ├── ecosystem/
    ├── origin/
    └── placeholders/
```

---

## Rules

1. Keep all production assets versioned.
2. Use the ABC prefix for all official files.
3. Use the same naming on disk and in SharePoint/OneDrive when mirrored.
4. Never rename approved assets after publication without updating the manifest.
5. Keep placeholder assets clearly separate from final approved assets.
6. Preserve the canonical source files in the repo and mirror only approved versions into business libraries.

---

## M365 Copilot Alignment

To keep Microsoft 365 Copilot helpful and organized:

- Create a SharePoint Brand Assets library
- Organize folders by: Brand, Hero, Atlas, Ecosystem, Infrastructure, Origin
- Upload only approved assets from the repo
- Use the same naming conventions as the repository
- Keep a small README or index inside each folder with purpose and approved usage

This creates a clean system where:

- GitHub Copilot supports code work
- Microsoft 365 Copilot supports narrative, presentation, and executive material
- the repository and the business library stay aligned

---

## Recommended SharePoint Library Layout

```text
Brand Assets/
├── 01-Brand/
├── 02-Hero/
├── 03-Atlas/
├── 04-Domains/
├── 05-Infrastructure/
├── 06-Ecosystem/
├── 07-Origin/
├── 08-Documentation/
└── 09-Approved-Placeholders/
```

---

## Compliance Note

Files used in the public website should match approved brand direction and should be archived in the canonical repository plus the M365 asset library. This protects brand consistency and makes Copilot's outputs more reliable.
