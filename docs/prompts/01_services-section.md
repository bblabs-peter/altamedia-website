# Plan: Services Section (Food Photography)

**Shadow Spec:** `specs/shadow/ServicesSection.shadow.md`
**Feature Status:** Planned
**Stack:** Next.js (see AGENTS.md — read docs before writing code), Tailwind CSS, TypeScript

---

## Section 1 — Non-Functional Requirements

- **Performance:** Section is 100% static JSX — zero async data fetching, zero layout shift on load
- **Security:** No user input collected in this section; no XSS surface; all content is hardcoded
- **Reliability:** No external dependencies; component must render correctly without network access
- **Scalability:** Adding a new service category must require only adding a new data entry — no structural refactor of `ServicesSection`
- **Usability:** All "Book Now" buttons must be keyboard-focusable with visible focus ring; text contrast must meet WCAG AA (≥ 4.5:1) against `#111111` background; cards must stack single-column on viewports below the `md` Tailwind breakpoint

---

## Section 2 — Success Metrics

- **Functional:** All three pricing tiers render with correct names, prices, and inclusions; "Book Now" links point to `#contact`
- **Performance:** No cumulative layout shift (CLS) introduced; Lighthouse performance score does not drop from baseline
- **Quality:** Visual verification passes on desktop (≥ 1024px) and mobile (375px) viewports
- **Business:** Core ₱8,500 tier is immediately visually distinct — white border and "Most Popular" badge visible without scrolling on desktop

---

## Section 3 — Risks and Assumptions

### Assumptions
- `var(--font-bricolage)` is already defined in `app/layout.tsx` and will apply to the new section without changes
- The page currently uses `overflow-hidden` on the hero `<main>` — the Services section will be a sibling below it, not a child, so overflow does not clip it
- No `#contact` anchor exists yet; the CTA href is correct to set now and will resolve when Contact section is built

### Risks
- **Next.js version:** AGENTS.md warns this version has breaking changes. Before writing any JSX, read the relevant guide in `node_modules/next/dist/docs/` to confirm file structure and component conventions are correct
- **Hero overflow:** The hero `<main>` has `overflow-hidden` and `h-screen`. If the Services section is placed inside it, it will be clipped. Must verify the section is rendered outside that element
- **Tailwind config:** If Tailwind is not scanning the new component file path, classes may be purged in production. Confirm `content` glob in `tailwind.config` covers `app/**`

---

## Section 3.5 — Context Package

Load before starting any task:

- `specs/shadow/ServicesSection.shadow.md` — source of truth for data model, constraints, and component tree
- `app/page.tsx` — current page structure; must understand where `ServicesSection` is mounted
- `app/layout.tsx` — font setup and global styles
- `next.config.ts` — verify no output/export config that affects static rendering
- `tailwind.config.*` — confirm content paths cover new component files
- `node_modules/next/dist/docs/` — read relevant guide per AGENTS.md before writing code

---

## Section 4 — Tasks

- [x] [LOAD-BEARING] Create `ServicesSection` component with hardcoded tier data (Model: Sonnet) (Reference: specs/shadow/ServicesSection.shadow.md)
  - **Given** `app/page.tsx` renders only the hero and the `ServicesSection` component does not yet exist **When** the component is created at `app/components/ServicesSection.tsx` with the three `PricingTier` entries from the shadow spec **Then** the component exports a valid React component that accepts no props and renders three pricing cards with correct names, prices, inclusions, and `#contact` CTA hrefs
  - **NFRs:** Static JSX only — no `useState`, no `useEffect`, no data fetching; all tier data co-located in the file as a typed constant
  - **Verification Gate:** Confirm the file exists at `app/components/ServicesSection.tsx`, TypeScript compiles with no errors (`npx tsc --noEmit`), and the tier data matches the shadow spec exactly (names, prices, inclusions, CTA href)
  - **Checkpoint:** Commit before starting the next task — do not batch commits across tasks

- [x] Mount `ServicesSection` in `app/page.tsx` below the hero (Model: Sonnet) (Reference: specs/shadow/ServicesSection.shadow.md)
  - **Given** `ServicesSection` exists and `app/page.tsx` renders a full-screen hero inside a `<main>` with `overflow-hidden` and `h-screen` **When** `ServicesSection` is mounted **Then** it must be rendered as a sibling to the hero `<main>` (not inside it), the page must scroll vertically, and the hero must still occupy exactly one viewport height
  - **NFRs:** Hero layout must not shift or break; page must be scrollable on both mobile and desktop after this change
  - **Verification Gate:** Open `localhost:3000` — hero fills the viewport, scrolling down reveals the Services section, hero layout is unchanged
  - **Checkpoint:** Commit before starting the next task — do not batch commits across tasks

- [x] Style pricing cards — layout, colors, typography, highlighted state (Model: Sonnet) (Reference: specs/shadow/ServicesSection.shadow.md)
  - **Given** `ServicesSection` is mounted and visible **When** Tailwind classes are applied **Then** the section background is `#111111`; cards are in a horizontal row on desktop and stacked on mobile; the core card has a white `1px` border and a "Most Popular" badge; non-highlighted cards have `rgba(255,255,255,0.08)` border; "Book Now" on the core card is white-bg/black-text; "Book Now" on other cards is transparent with white border and white text; footnote text is `rgba(255,255,255,0.45)` and centered below the card row
  - **NFRs:** WCAG AA contrast on all text; no horizontal scroll on mobile (375px); core card visually elevated (scale or shadow)
  - **Verification Gate:** Visually inspect on desktop (≥ 1024px) and mobile (375px) — core card is immediately distinct; footnote is readable; no overflow on mobile; tab through all three CTAs and confirm focus ring is visible
  - **Checkpoint:** Commit — feature complete

---

## Section 5 — Definition of Done

- [ ] All tasks above are implemented and committed
- [ ] Each task was verified and committed before the next began — no batch commits
- [ ] Verification gate passed for every task before proceeding
- [ ] No [LOAD-BEARING] task was skipped or deferred
- [ ] Acceptance criteria pass for every task
- [ ] NFR benchmarks verified (manually via browser)
- [ ] No critical or high-severity bugs open
- [ ] Shadow spec updated if implementation deviated from original design
