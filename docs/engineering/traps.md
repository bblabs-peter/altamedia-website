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
