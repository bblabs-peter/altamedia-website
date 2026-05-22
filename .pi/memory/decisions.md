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

