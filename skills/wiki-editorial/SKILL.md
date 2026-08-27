---
name: wiki-editorial
description: Draft evidence-grounded improvements to Charlotte Ledoux's public-source Data & AI Governance wiki for human editorial review.
---

# Wiki editorial drafting

Use this skill when a user asks to improve, restructure, extend, or review the compiled wiki.

## Procedure

1. Read `wiki/INDEX.md`, `wiki/SCHEMA.md`, and the relevant topic page from the read-only `charlotteledoux` filesystem.
2. Follow every cited local source into `substack/` before making a substantive claim.
3. Separate Charlotte's publicly stated material from the agent's synthesis or application.
4. Preserve direct public URLs, authorship, publication dates, access provenance, and the source-map relationship.
5. Never reproduce or reconstruct paid templates, lead-gated material, inaccessible LinkedIn content, or private client material.
6. Draft proposed Markdown changes in the writable `user` filesystem under `wiki-proposals/`; never claim to have edited the authoritative corpus.
7. Include a concise change summary, affected source paths, unresolved evidence gaps, and suggested human review questions.

## Required output

- Proposed page or patch
- Evidence paths and public URLs
- Explicit synthesis disclosure
- Exclusions or unresolved gaps
- Human approval request
