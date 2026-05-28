## dec_01 — Pitstop is the second /propertyphotography portfolio entry

<!-- meta:
scope: altamedia-website
source_session: 019e2b0b-8116-77db-b722-729a9c2865b3
created_at: 2026-05-15T10:01:24.053Z
-->

The former placeholder portfolio entry on /propertyphotography should be named Pitstop and use the six real Pitstop photos instead of placeholder slots.

## dec_02 — Pitstop gallery ordering uses named room photos before generic filenames

<!-- meta:
scope: altamedia-website
source_session: 019e2b0b-8116-77db-b722-729a9c2865b3
created_at: 2026-05-15T10:01:24.053Z
-->

For the Pitstop /propertyphotography gallery, use all six photos and order named room photos first, followed by generic filename photos.

## dec_03 — Masu Cafe food gallery uses all 19 photos in a fixed randomized order

<!-- meta:
scope: altamedia-website
source_session: 019e3b46-c0b4-71f8-b666-2fac0c313358
created_at: 2026-05-18T13:58:54.052Z
-->

The Masu Cafe section on /foodphotography should include all 19 photos from pics/masu. Only Masu Cafe is randomized, and the order is fixed in code rather than reshuffled per page load.

## dec_04 — /foodphotography gallery columns are generic for arbitrary photo counts

<!-- meta:
scope: altamedia-website
source_session: 019e3b46-c0b4-71f8-b666-2fac0c313358
created_at: 2026-05-18T13:58:54.052Z
-->

The food photography gallery should use a generic data-driven column splitter instead of hardcoded 8- or 9-photo index layouts, so future photos are not silently omitted.

## dec_05 — Food gallery image URLs must use files under public/pics

<!-- meta:
scope: altamedia-website
source_session: 019e3b46-c0b4-71f8-b666-2fac0c313358
created_at: 2026-05-18T13:58:54.052Z
-->

Images referenced as /pics/... in the Next.js app need corresponding files under public/pics/.... For Masu Cafe, assets were copied from pics/masu to public/pics/masu so /pics/masu/... URLs resolve.

## dec_06 — Rosebert Suites leads the property photography portfolio

<!-- meta:
scope: altamedia-website
source_session: 019e4f51-76a6-742d-aeae-5b620001376c
created_at: 2026-05-22T11:08:14.537Z
-->

Rosebert Suites should appear first on /propertyphotography, with BHive Hotel and Pitstop following after it. This ordering was chosen explicitly by the user rather than appending the new section after existing entries.

## dec_07 — Rosebert Suites uses all 14 images in a fixed randomized order

<!-- meta:
scope: altamedia-website
source_session: 019e4f51-76a6-742d-aeae-5b620001376c
created_at: 2026-05-22T11:08:14.537Z
-->

The Rosebert Suites section should include all 14 images from pics/rosebert. The order should be randomized once in source code, not randomized on each page load, to keep the portfolio stable and avoid runtime/hydration issues.

## dec_08 — Photography lightbox navigation follows curated section order without wrap-around

<!-- meta:
scope: altamedia-website
source_session: claude-code-f9ad08ea-b7d2-470b-a669-847512592b57
created_at: 2026-05-28T03:32:43.163Z
-->

Next/prev navigation for food and property lightboxes uses the page data photos[] order, not visual column order. Navigation is bounded at the first/last photo and never crosses into another section.

## dec_09 — Gallery lightbox controls differ by desktop vs mobile

<!-- meta:
scope: altamedia-website
source_session: claude-code-f9ad08ea-b7d2-470b-a669-847512592b57
created_at: 2026-05-28T03:32:43.163Z
-->

Desktop lightboxes use minimal semi-transparent bare chevrons, keyboard Left/Right navigation, and Esc to close. Mobile hides arrows and uses left/right swipe only for prev/next; swipe-down does not close.

## dec_10 — GalleryGrid is shared at app/components/GalleryGrid.tsx, but column-building stays page-specific

<!-- meta:
scope: altamedia-website
source_session: claude-code-f9ad08ea-b7d2-470b-a669-847512592b57
created_at: 2026-05-28T03:32:43.163Z
-->

Food and property pages import the shared GalleryGrid from app/components/GalleryGrid.tsx. Column-building was intentionally not shared because food uses galleryColumns.ts with config while property uses inline length-based layouts.

## dec_11 — Shared GalleryGrid receives flat photos[] for curated-index navigation

<!-- meta:
scope: altamedia-website
source_session: 019e6c9c-704a-79b5-9336-0fe71b7ae334
created_at: 2026-05-28T03:47:19.384Z
-->

The shared GalleryGrid API takes both columns and flat photos so the lightbox can navigate by curated index without relying on object identity or src matching.

## dec_12 — Food and property portfolios use a uniform 3:4 responsive grid

<!-- meta:
scope: altamedia-website
source_session: claude-code-870f2630-5295-4e58-931f-b922683e23c6
created_at: 2026-05-28T04:51:07.529Z
-->

/foodphotography and /propertyphotography were refactored from masonry/per-section layouts to one aligned grid. Every thumbnail is a center-cropped 3:4 portrait tile, with about 2 columns on mobile, 3 on tablet, and 4 on desktop.

## dec_13 — GalleryGrid API is flat photos-only and owns grid rendering

<!-- meta:
scope: altamedia-website
source_session: claude-code-870f2630-5295-4e58-931f-b922683e23c6
created_at: 2026-05-28T04:51:07.529Z
-->

GalleryGrid now accepts { photos: Photo[] } only, renders the responsive grid itself, and uses the flat photo array for lightbox indexing. The old columns prop, forcedRatio, buildColumns helpers, and galleryColumns module were removed.

## dec_14 — Next dev watcher ignores in-root tool directories via webpack watchOptions

<!-- meta:
scope: altamedia-website
source_session: claude-code-870f2630-5295-4e58-931f-b922683e23c6
created_at: 2026-05-28T04:51:07.529Z
-->

next.config.ts sets webpack watchOptions.ignored for **/node_modules/**, **/.git/**, **/.pi/**, and **/.cocoindex_code/** because plain next dev does not honor .gitignore. If the dev script switches to Turbopack, use a Turbopack-equivalent ignore instead.

