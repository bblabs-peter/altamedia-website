## dom_01 — Rosebert Suites is a property photography portfolio section

<!-- meta:
scope: altamedia-website
source_session: 019e4f51-76a6-742d-aeae-5b620001376c
created_at: 2026-05-22T11:08:14.537Z
-->

Rosebert Suites is part of the /propertyphotography portfolio and uses Rosebert image assets. It appears before BHive Hotel and Pitstop on the page.

## dom_02 — Photography GalleryGrid sections use visual columns plus a curated flat photo order

<!-- meta:
scope: altamedia-website
source_session: claude-code-f9ad08ea-b7d2-470b-a669-847512592b57
created_at: 2026-05-28T03:32:43.163Z
-->

Each restaurant/property renders one GalleryGrid section. Columns are visual layout data, while the original photos[] order is needed for navigation. Food and property column-building differ, and forcedRatio overrides can create new photo objects.

## dom_03 — Portfolio thumbnails are cropped, but lightbox images remain uncropped

<!-- meta:
scope: altamedia-website
source_session: claude-code-870f2630-5295-4e58-931f-b922683e23c6
created_at: 2026-05-28T04:51:07.529Z
-->

Food and property grid thumbnails are uniform cropped 3:4 portrait tiles. Clicking an image opens the existing lightbox, which displays the full uncropped image with object-fit contain and preserves navigation controls.

