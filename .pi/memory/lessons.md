## lsn_01 — Serve portfolio image assets from public/pics, not root pics, for /pics URLs

<!-- meta:
project_scope: altamedia-website
status: active
session_level: false
reinforcement_count: 8
last_seen_at: 2026-05-28T07:11:05.366Z
source_session: 019e2b0b-8116-77db-b722-729a9c2865b3
created_at: 2026-05-15T10:01:24.053Z
supersedes: null
triggers:
  - {type: path, value: app/propertyphotography/page.tsx}
  - {type: path, value: pics/rosebert}
  - {type: path, value: public/pics/rosebert}
  - {type: path, value: pics/pitstop}
  - {type: path, value: public/pics/pitstop}
  - {type: command, pattern: "^npm run start\\b.*--port 3100"}
  - {type: topic, value: "Next.js public static assets for /pics URLs"}
-->

Image URLs referencing /pics/... need corresponding files under public/pics/.... Pitstop photos were copied from root pics/pitstop to public/pics/pitstop; Rosebert .webp files were similarly mirrored from pics/rosebert to public/pics/rosebert after 404s during smoke testing. Always mirror new portfolio assets into public/pics before referencing them.

## lsn_02 — Next local docs path may not exist in this project install

<!-- meta:
project_scope: altamedia-website
status: active
session_level: false
reinforcement_count: 10
last_seen_at: 2026-05-28T07:11:05.366Z
source_session: 019e2b0b-8116-77db-b722-729a9c2865b3
created_at: 2026-05-15T10:01:24.053Z
supersedes: null
triggers:
  - {type: path, value: node_modules/next/dist/docs}
  - {type: filename, value: node_modules/next/README.md}
  - {type: path, value: node_modules/next/dist/server/config-shared.d.ts}
  - {type: filename, value: next.config.ts}
  - {type: topic, value: "Next config documentation lookup"}
-->

node_modules/next/dist/docs may be absent. If unavailable, use node_modules/next/README.md, installed type docs such as node_modules/next/dist/server/config-shared.d.ts for config options, or existing project patterns, then validate with npm run build.

## lsn_04 — BSD/macOS find does not support GNU -printf

<!-- meta:
project_scope: altamedia-website
status: active
session_level: false
reinforcement_count: 1
last_seen_at: null
source_session: 019e3b46-c0b4-71f8-b666-2fac0c313358
created_at: 2026-05-18T13:58:54.052Z
supersedes: null
triggers:
  - {type: command, pattern: "find\\b.*-printf"}
  - {type: topic, value: "portable file listing on macOS/BSD find"}
-->

On this macOS/BSD environment, GNU-style find ... -printf can fail with 'unknown primary or operator'. Use portable alternatives such as plain find output piped to sort for file listings.

## lsn_05 — After GalleryGrid prop refactors, update all portfolio call sites before typecheck

<!-- meta:
project_scope: altamedia-website
status: active
session_level: false
reinforcement_count: 2
last_seen_at: 2026-05-28T07:11:05.366Z
source_session: 019e6cb1-39f5-73dc-ba03-9c8f8b25d6c5
created_at: 2026-05-28T05:05:28.831Z
supersedes: null
triggers:
  - {type: path, value: app/components/GalleryGrid.tsx}
  - {type: path, value: app/foodphotography/page.tsx}
  - {type: path, value: app/propertyphotography/page.tsx}
  - {type: command, pattern: "^npx tsc --noEmit --pretty false$"}
  - {type: topic, value: "GalleryGrid props refactor"}
-->

Changing GalleryGrid to a flat photos-only API left /foodphotography and /propertyphotography passing the old columns prop, causing tsc failures. Update both call sites and remove obsolete builders/configs before expecting typecheck/build to pass.

## lsn_06 — Next dev recompile loops can come from watched in-root tool directories

<!-- meta:
project_scope: altamedia-website
status: active
session_level: false
reinforcement_count: 2
last_seen_at: 2026-05-28T07:11:05.366Z
source_session: 019e6cb1-39f5-73dc-ba03-9c8f8b25d6c5
created_at: 2026-05-28T05:05:28.831Z
supersedes: null
triggers:
  - {type: filename, value: next.config.ts}
  - {type: path, value: .pi/memory/bridge}
  - {type: path, value: .cocoindex_code}
  - {type: command, pattern: "^npm run dev$"}
  - {type: topic, value: "Next dev endless recompile loop"}
-->

Idle next dev recompiles were caused by files changing under project-root tool directories such as .pi/memory/bridge. Add webpack watchOptions.ignored in next.config.ts for node_modules, .git, .pi, and .cocoindex_code; verify source edits still hot-reload.

## lsn_07 — Use sleep/kill/wait instead of timeout for bounded dev commands on macOS

<!-- meta:
project_scope: altamedia-website
status: active
session_level: false
reinforcement_count: 1
last_seen_at: null
source_session: 019e6cb1-39f5-73dc-ba03-9c8f8b25d6c5
created_at: 2026-05-28T05:05:28.831Z
supersedes: null
triggers:
  - {type: command, pattern: "\\btimeout\\s+\\d+s\\s+npm run dev\\b"}
  - {type: command, pattern: "npm run dev.*& pid=\\$!"}
  - {type: topic, value: "time-boxing shell commands on macOS"}
-->

The timeout command is unavailable in this macOS shell. To time-box npm run dev diagnostics, start it in the background, sleep, kill the PID, and wait to collect logs.

## lsn_08 — Keep discussion_notes entries under 480 characters

<!-- meta:
project_scope: altamedia-website
status: active
session_level: false
reinforcement_count: 1
last_seen_at: null
source_session: 019e6cb1-39f5-73dc-ba03-9c8f8b25d6c5
created_at: 2026-05-28T05:05:28.831Z
supersedes: lsn_03
triggers:
  - {type: tool, value: discussion_notes, pattern: "Note is too long\\. Max 480 characters"}
  - {type: topic, value: "recording discussion notes"}
-->

discussion_notes rejects notes over 480 characters. Shorten long notes or split them into multiple accepted entries.

## lsn_03 — Keep discussion_notes entries under 240 characters

<!-- meta:
project_scope: altamedia-website
status: superseded
session_level: false
reinforcement_count: 1
last_seen_at: 2026-05-28T05:28:33.417Z
source_session: 019e2b0b-8116-77db-b722-729a9c2865b3
created_at: 2026-05-15T10:01:24.053Z
supersedes: null
triggers:
  - {type: tool, value: discussion_notes, pattern: "Note is too long\\. Max 240 characters"}
  - {type: topic, value: "discussion_notes note length limit"}
-->

discussion_notes rejects notes over 240 characters. Summarize long implementation notes under the limit and split extra context into separate shorter notes.

