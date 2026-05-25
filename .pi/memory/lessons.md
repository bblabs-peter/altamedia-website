## lsn_01 — Serve portfolio image assets from public/pics, not root pics, for /pics URLs

<!-- meta:
project_scope: altamedia-website
status: active
session_level: false
reinforcement_count: 5
last_seen_at: 2026-05-25T08:58:35.653Z
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
reinforcement_count: 5
last_seen_at: 2026-05-25T08:09:19.996Z
source_session: 019e2b0b-8116-77db-b722-729a9c2865b3
created_at: 2026-05-15T10:01:24.053Z
supersedes: null
triggers:
  - {type: path, value: node_modules/next/dist/docs}
  - {type: filename, value: node_modules/next/README.md}
  - {type: command, pattern: "^find node_modules/next\\b.*docs"}
  - {type: topic, value: "Next.js local documentation lookup"}
-->

node_modules/next/dist/docs may be absent in this Next.js install (confirmed absent in next@15.5.18). If unavailable, check node_modules/next/README.md (which points to https://nextjs.org/docs) or follow existing project asset/code patterns instead.

## lsn_03 — Keep discussion_notes entries under 240 characters

<!-- meta:
project_scope: altamedia-website
status: active
session_level: false
reinforcement_count: 1
last_seen_at: null
source_session: 019e2b0b-8116-77db-b722-729a9c2865b3
created_at: 2026-05-15T10:01:24.053Z
supersedes: null
triggers:
  - {type: tool, value: discussion_notes, pattern: "Note is too long\\. Max 240 characters"}
  - {type: topic, value: "discussion_notes note length limit"}
-->

discussion_notes rejects notes over 240 characters. Summarize long implementation notes under the limit and split extra context into separate shorter notes.

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

