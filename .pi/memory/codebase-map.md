# Codebase Map — altamedia-website

Last regenerated: 2026-05-28T05:28:33.545Z
Languages: javascript, typescript
Files indexed: 14 included / 295 visited (max 5000)

## Top-level structure

- altamedia-website/ — This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-…
  - app/
    - components/
      - CTASection.tsx [typescript]
      - Footer.tsx [typescript]
      - GalleryGrid.tsx [typescript]
      - GalleryPreview.tsx [typescript]
      - PropertyPreview.tsx [typescript]
      - ServicesSection.tsx [typescript]
    - contact/
      - page.tsx [typescript]
    - foodphotography/
      - page.tsx [typescript]
    - propertyphotography/
      - page.tsx [typescript]
    - layout.tsx [typescript]
    - page.tsx [typescript]
  - next-env.d.ts [typescript]
  - next.config.ts [typescript]
  - postcss.config.mjs [javascript]

## Key modules

### .

/ <reference types="next" /> / <reference types="next/image-types/global" /> / <reference path="./.next/types/routes.d.ts" /> NOTE: This file should not be edited see https://nextjs.org/docs/app/api-reference/config/typ…

Owns:
- next-env.d.ts: / <reference types="next" />
- next.config.ts
- postcss.config.mjs

Public surface:
- default (variable, next.config.ts:14-14): export default nextConfig;
- default (variable, postcss.config.mjs:7-7): export default config;

### app

Owns:
- app/layout.tsx
- app/page.tsx

Public surface:
- metadata (const, app/layout.tsx:11-14): const metadata: Metadata = { title: "AltaMedia — Digital Marketing", description: "AltaMedia transforms businesses with creative design and automated marketing solutions.", }
- default (function, app/layout.tsx:16-26): function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>)
- default (function, app/page.tsx:7-239): function Home()

### app/components

Owns:
- app/components/CTASection.tsx
- app/components/Footer.tsx
- app/components/GalleryGrid.tsx
- app/components/GalleryPreview.tsx
- app/components/PropertyPreview.tsx
- app/components/ServicesSection.tsx

Public surface:
- default (function, app/components/CTASection.tsx:4-64): function CTASection(): React.JSX.Element
- default (function, app/components/Footer.tsx:3-62): function Footer(): React.JSX.Element
- Photo (interface, app/components/GalleryGrid.tsx:5-5): interface Photo { src: string; alt: string }
- default (function, app/components/GalleryGrid.tsx:17-253): function GalleryGrid({ photos }: Props)
- default (function, app/components/GalleryPreview.tsx:7-57): function GalleryPreview()
- default (function, app/components/PropertyPreview.tsx:7-59): function PropertyPreview()
- default (function, app/components/ServicesSection.tsx:69-183): function ServicesSection(): React.JSX.Element

### app/contact

Owns:
- app/contact/page.tsx

Public surface:
- metadata (const, app/contact/page.tsx:6-9): const metadata: Metadata = { title: "Contact — AltaMedia", description: "Get in touch with AltaMedia.", }
- default (function, app/contact/page.tsx:40-150): function ContactPage()

### app/foodphotography

Owns:
- app/foodphotography/page.tsx

Public surface:
- default (function, app/foodphotography/page.tsx:60-145): function FoodPhotographyPage()

### app/propertyphotography

Owns:
- app/propertyphotography/page.tsx

Public surface:
- default (function, app/propertyphotography/page.tsx:71-156): function PropertyPhotographyPage()

## Entry points

- npm run build: package.json script: build
- npm run dev: package.json script: dev
- npm run start: package.json script: start

## Verification commands

- npm run build
