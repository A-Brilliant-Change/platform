# Website Asset Readiness Report
## A Brilliant Change — ABrilliantChange.com

**Generated:** 2026-08-30
**Scope:** MVP Homepage + 5 Canonical Routes

---

## Readiness Scorecard

| Category | Status | Assets Available | Assets Missing | Score |
| :--- | :---: | :---: | :---: | :---: |
| Hero Assets | ✅ PASS | 6 | 0 | 100% |
| Logo Assets | ⚠️ PARTIAL | 3 (PNG only) | 2 (SVG) | 60% |
| Atlas Assets | ✅ PASS | 3 | 0 | 100% |
| Framework Assets | ✅ PASS | 13 | 0 | 100% |
| Mission Control Assets | ❌ FAIL | 0 | 1 | 0% |
| Background Assets | ❌ FAIL | 0 | 1 | 0% |
| Doctrine Assets | ✅ PASS | 6 | 0 | 100% |
| Ecosystem Assets | ✅ PASS | 1 | 0 | 100% |
| Infrastructure Assets | ✅ PASS | 8 | 0 | 100% |
| Photography Assets | ✅ PASS | 3 | 0 | 100% |
| Social / OG Assets | ❌ FAIL | 0 | 1 | 0% |
| Icon / Favicon | ❌ FAIL | 0 | 1 | 0% |

**Overall MVP Readiness: 73%**

---

## Detail by Category

### HERO ASSETS — ✅ PASS

6 hero images available at `/hero/`. All are high-resolution Tulsa cityscape photographs.

**Recommended for homepage:**
- `abc-hero-cityscape-golden-hour.png` — warm, aspirational lighting consistent with brand tone
- `abc-hero-cityscape-aerial.png` — alternative perspective

**Action:** None required. Convert to WebP for production optimization.

---

### LOGO ASSETS — ⚠️ PARTIAL PASS

PNG versions of signature logo, master mark, and institutional seal are present.

**Available:**
- `/brand/logos/abc-logo-signature-official.png`
- `/brand/marks/abc-mark-master-official.png`
- `/brand/marks/abc-mark-institutional-seal.png`

**Missing (Critical):**
- `abc-logo-primary-gold.svg` — SVG needed for crisp rendering at all sizes
- `abc-logo-primary-white.svg` — white variant for dark header backgrounds

**Action:** Export SVG versions from original source files and place in `/brand/logos/`.

---

### ATLAS ASSETS — ✅ PASS

3 atlas images available. Sufficient for `/atlas` page implementation.

- `abc-atlas-master-transformation.png`
- `abc-atlas-ecosystem-master.png`
- `abc-atlas-brighter-futures-master.png`

---

### FRAMEWORK ASSETS — ✅ PASS

13 framework images available across general series, Theory of Change, and Systems Design.

Sufficient for: `/atlas` page, `/journey` page framework section, and `/about` page.

---

### MISSION CONTROL ASSETS — ❌ FAIL

0 mission control dashboard images found in the organized library.

Note: `public/FINAL/London Ecosystem/05 - Mission Control/` directory exists but contains no image files.

**Missing:**
- `abc-mission-control-dashboard.png`

**Action:** Create or source mission control visual imagery.

---

### BACKGROUND ASSETS — ❌ FAIL

No background texture or pattern assets found.

**Missing:**
- `abc-background-texture-dark.png`
- Background gradient or noise texture for section breaks

**Action:** Create CSS-based backgrounds or source minimal texture asset.

---

### SOCIAL / OG ASSETS — ❌ FAIL

No Open Graph social sharing image found.

**Missing:**
- `abc-social-og-homepage.png` (1200x630 px)

**Action:** Compose OG image using hero + logo overlay. Required before launch.

---

### ICON / FAVICON — ❌ FAIL

`app/favicon.ico` exists (25 KB, default Next.js icon). No brand favicon.

**Missing:**
- `abc-icon-favicon.svg` (brand favicon)
- 180x180 apple-touch-icon.png

**Action:** Export favicon from logo mark. High priority.

---

## MVP Homepage Asset Set

The following is the minimum required asset set for homepage launch:

### Required (Blocking)
| Asset | Path | Status |
| :--- | :--- | :--- |
| abc-hero-cityscape-golden-hour.png | `/hero/` | ✅ Ready |
| abc-logo-signature-official.png | `/brand/logos/` | ✅ Ready (PNG) |
| abc-logo-primary-gold.svg | `/brand/logos/` | ❌ Missing |
| abc-logo-primary-white.svg | `/brand/logos/` | ❌ Missing |
| abc-doctrine-mission.png | `/doctrine/` | ✅ Ready |
| abc-doctrine-pillars.png | `/doctrine/` | ✅ Ready |
| abc-framework-transformation-systems.png | `/frameworks/` | ✅ Ready |
| abc-social-og-homepage.png | `/brand/social/` | ❌ Missing |
| abc-icon-favicon.svg | `/brand/icons/` | ❌ Missing |

### Recommended (Non-blocking)
| Asset | Path | Status |
| :--- | :--- | :--- |
| abc-hero-cityscape-aerial.png | `/hero/` | ✅ Ready |
| abc-atlas-master-transformation.png | `/atlas/` | ✅ Ready |
| abc-mark-master-official.png | `/brand/marks/` | ✅ Ready |
| abc-ecosystem-architecture-blueprint.png | `/ecosystem/` | ✅ Ready |
| abc-background-texture-dark.png | `/backgrounds/` | ❌ Missing |

---

## Asset Optimization Recommendations

All current assets are PNG format (~2-3 MB each). For production:

1. Convert all hero images to WebP (`< 500 KB` target)
2. Convert framework images to WebP (`< 300 KB` target)
3. Use Next.js `<Image />` component for automatic optimization
4. Add `sizes` props for responsive image loading
5. Preload the primary hero image in `app/layout.tsx`

---

## Summary

| Metric | Value |
| :--- | :--- |
| Total Assets Scanned | 163 |
| Approved & Organized | 44 |
| Homepage Ready | 7 |
| Blocked (Missing SVG logos) | 2 |
| Blocked (Missing OG image) | 1 |
| Blocked (Missing favicon) | 1 |
| Unsorted (Need Review) | 23 |
| Archived | 10 |
| **MVP Launch Readiness** | **73%** |
