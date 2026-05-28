## Conventions

### Image delivery

- Serve raster image elements with `next/image`, not raw `<img>`.
- Every `next/image` instance must include a `sizes` attribute and render inside a size-reserving wrapper when using `fill`.
- Gallery thumbnails use relative aspect-ratio wrappers so layout space is reserved before the optimized image loads.
- Keep SVG logos as raw `<img>` elements; they are already lightweight vector assets and are not routed through `next/image`.
- `next.config.ts` bounds image variants with AVIF/WebP formats and a small `deviceSizes`/`imageSizes` set to limit optimizer transformations.
