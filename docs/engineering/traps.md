## Traps

### Next dev can recompile endlessly on ignored tool directories

- Symptom: `npm run dev` floods the console with repeated generic lines like `✓ Compiled in XXms (234 modules)` while no source files are being edited.
- Cause: the webpack-backed Next dev watcher does not use `.gitignore` as its watch ignore list. Tool directories inside the project root can still trigger rebuilds when they write files.
- Confirmed local writers: `.pi/memory/bridge` updates every second; `.cocoindex_code/` also exists in the project root for code indexing.
- Fix: `next.config.ts` sets `webpack(config)` and preserves `config.watchOptions` while ignoring:
  - `**/node_modules/**`
  - `**/.git/**`
  - `**/.pi/**`
  - `**/.cocoindex_code/**`
- Verification: after restarting `next dev`, loading `/foodphotography`, and idling for 65s, there were no repeated generic recompile lines. A real edit under `app/components/GalleryGrid.tsx` still triggered one compile.
- Note: this project currently uses plain `next dev` without `--turbopack`. If the dev script switches to Turbopack, the webpack `watchOptions.ignored` hook will not apply; add the Turbopack-equivalent ignore instead.

### Hidden hero video sources can still download on mobile

- Symptom: mobile `/` requests `/vids/hero.webm` even though the desktop video is `className="hidden md:block"` and `preload="none"`.
- Cause: some browsers still select an autoplay `<video>` source before or despite CSS hiding; `display:none` plus `preload="none"` alone was not enough in Chrome verification.
- Fix: keep the current hero pattern in `app/page.tsx`:
  - mobile background is a `md:hidden` `next/image` poster (`/vids/hero-poster.webp`);
  - desktop video is `hidden md:block`, `preload="none"`, `poster="/vids/hero-poster.webp"`, `autoPlay`, `muted`, `loop`, and `playsInline`;
  - every hero `<source>` has `media="(min-width: 768px)"` so mobile has no matching video source.
- Verification: after changing hero markup, a production Chrome mobile-width network check requested the poster only and no `/vids/hero.webm` or `/vids/hero.mp4`; desktop autoplay still used `/vids/hero.webm`.
