# Shadow Spec: Services Section

## Problem Statement
AltaMedia's current site is a single hero screen with no explanation of what the agency actually sells. A small-to-mid-size business owner who lands on the page has no way to understand the offer, evaluate pricing, or take action. Without a Services section, the site generates no leads — visitors bounce with no next step.

## Target User
A small-to-mid-size business owner (e.g. restaurant, café, food brand) in the Philippines who needs professional food photography for their menu, social media, or marketing materials. They are cost-conscious, unfamiliar with agency pricing, and need to quickly assess whether AltaMedia fits their budget before reaching out.

## Success Metrics
- A visitor can read all three tiers and their pricing within 10 seconds of scrolling to the section
- "Book Now" CTA is reachable on both mobile and desktop without horizontal scrolling
- The core ₱8,500 tier is visually distinct and identifiable as the recommended option at a glance

## Out of Scope
- Multiple service categories (only Food Photography for now)
- A booking form or payment flow (CTA links to a Contact section anchor only)
- Animated or interactive pricing toggles
- Testimonials or portfolio images within this section
- Commercial advertising pricing details (referenced as "quoted separately")

## Non-Functional Requirements
- **Performance:** Section renders with no layout shift (no async data fetching — all content is static)
- **Security:** No user input collected in this section; no attack surface
- **Reliability:** Static content — no external dependencies, no failure modes
- **Scalability:** Static JSX; adding a new service category in the future requires adding a new card group, not refactoring this component
- **Usability:** Cards must be keyboard-navigable; color contrast on text must meet WCAG AA; stacked single-column on mobile (< md breakpoint)

---

## Context Imports
```
app/page.tsx          — current hero section (single page, overflow:hidden, Bricolage Grotesque font)
app/layout.tsx        — font and global styles
public/               — static assets
```

## Architecture

### Data Flow
```
Static JSX content → ServicesSection component → rendered in app/page.tsx below hero
```

### Component Tree
```
ServicesSection
  SectionHeader ("Food Photography")
  PricingGrid
    PricingCard (Starter)
    PricingCard (Core — highlighted)
    PricingCard (Premium)
  PricingFootnote
```

## Data Model

```ts
interface PricingTier {
  id: "starter" | "core" | "premium"
  name: string
  price: number          // in PHP
  currency: "₱"
  highlighted: boolean   // true for core only
  highlightLabel?: string // "Most Popular"
  inclusions: string[]
  ctaLabel: string
  ctaHref: string        // "#contact" anchor
}

const tiers: PricingTier[] = [
  {
    id: "starter",
    name: "Starter",
    price: 4500,
    currency: "₱",
    highlighted: false,
    inclusions: [
      "Up to 2 hours shoot time",
      "Up to 8 dishes/products",
      "15 edited high-resolution photos",
      "Social media and menu usage",
      "Delivery within 5–7 working days",
    ],
    ctaLabel: "Book Now",
    ctaHref: "#contact",
  },
  {
    id: "core",
    name: "Food Photography Package",
    price: 8500,
    currency: "₱",
    highlighted: true,
    highlightLabel: "Most Popular",
    inclusions: [
      "Up to 4 hours shoot time",
      "Up to 15 dishes/products",
      "30 edited high-resolution photos",
      "Basic styling guidance",
      "Social media and menu usage",
      "Delivery within 5–7 working days",
    ],
    ctaLabel: "Book Now",
    ctaHref: "#contact",
  },
  {
    id: "premium",
    name: "Premium",
    price: 14000,
    currency: "₱",
    highlighted: false,
    inclusions: [
      "Full day shoot",
      "30+ dishes/products",
      "60 edited high-resolution photos",
      "Advanced styling guidance",
      "Commercial usage included",
      "Delivery within 3–5 working days",
    ],
    ctaLabel: "Book Now",
    ctaHref: "#contact",
  },
]
```

## Constraints

- Background: `#111111` (contrast break from hero `#000000`)
- Font: `var(--font-bricolage)` — inherited from layout
- Core card: white `1px` border, "Most Popular" badge top-center
- Non-highlighted cards: `rgba(255,255,255,0.08)` border
- "Book Now" button: white background, black text on highlighted card; inverted (transparent, white border, white text) on non-highlighted cards
- Mobile breakpoint: cards stack vertically (single column), full width
- Desktop: three cards in a horizontal row, equal width, core card slightly elevated (`scale-[1.03]` or equivalent)
- Footnote text: `rgba(255,255,255,0.45)`, below the card row, centered

## Function Signatures

```ts
// Pure presentational — no props needed (data is co-located)
function ServicesSection(): JSX.Element

function PricingCard(props: {
  tier: PricingTier
}): JSX.Element
```

## Testing Strategy

- **Visual:** Load localhost:3000, scroll to section — confirm layout on desktop and mobile viewport
- **Keyboard:** Tab through all three "Book Now" buttons — confirm focus ring visible
- **Contrast:** Verify footnote and inclusion text pass WCAG AA against `#111111` background
- **CTA:** Click "Book Now" — confirm page scrolls to `#contact` anchor (anchor may not exist yet; link should be present and correct regardless)
- **No unit tests required** — section is pure static JSX with no logic
