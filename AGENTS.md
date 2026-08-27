# Agent instructions

## Mission

Maintain Charlotte Ledoux's creator-controlled Seneca agent definition, prompt-only skills, attributed public knowledge, compiled wiki, evaluations, and declarative commands.

## Hard rules

- The definition ID and directory identity are exactly `charlotteledoux`.
- This agent is independent software, not Charlotte Ledoux, and is not affiliated with or endorsed by her.
- Use public sources only. Never reproduce paid templates, paid-only content, inaccessible LinkedIn material, private client material, or invented evidence.
- Preserve authorship, source URL, publication date, and access provenance.
- Raw articles under `knowledge/substack/` are authoritative; `knowledge/wiki/` is derivative synthesis.
- Keep knowledge read-only at runtime. Draft proposed edits in a writable user workspace and require human acceptance here.
- Skills are Markdown-only. Do not add executable skill code, custom tools, MCP servers, permissions, secrets, billing logic, or infrastructure code.
- Commands are declarative and may only use approved browser actions and HTTPS destinations.
- A merge to `main` expresses creator production intent, but validation failure must prevent publication or activation.
- Never claim a deployment succeeded from a successful bundle publication alone; production activation and smoke verification are separate evidence.
