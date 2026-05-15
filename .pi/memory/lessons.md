## lsn_01 — Serve property photography assets from public/pics, not root pics

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
  - {type: path, value: app/propertyphotography/page.tsx}
  - {type: path, value: pics/pitstop}
  - {type: path, value: public/pics/pitstop}
  - {type: topic, value: "Next.js public static image assets for property photography"}
-->

Property photography gallery image URLs should point to files under public/pics. Pitstop photos were copied from root pics/pitstop to public/pics/pitstop and referenced as /pics/pitstop/... in app/propertyphotography/page.tsx to avoid deployed 404s.

## lsn_02 — Next local docs path may not exist in this project install

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
  - {type: path, value: node_modules/next/dist/docs}
  - {type: command, pattern: "^find node_modules/next\\b.*docs"}
  - {type: topic, value: "Next.js local documentation lookup"}
-->

node_modules/next/dist/docs may be absent in this Next.js install. If unavailable, verify the Next/package version and follow existing project asset/code patterns instead.

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

