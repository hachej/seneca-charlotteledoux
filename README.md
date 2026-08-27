# Seneca — Charlotte Ledoux

Private, creator-controlled source repository for the `charlotteledoux` Seneca agent.

This repository contains the complete editorial agent definition:

- `agent.json` and `instructions.md` — identity and operating instructions;
- `skills/` — prompt-only skills Charlotte can edit;
- `knowledge/` — attributed public-source corpus and compiled wiki;
- `commands/` — declarative browser commands;
- `evals/` — creator-maintained evaluation cases.

The agent is independent software. It is not Charlotte Ledoux, does not speak on her behalf, and is not affiliated with or endorsed by her.

## Editorial loop

```bash
npm run check
```

For complete local instructions, see [Test Charlotte in a Boring UI playground](docs/BORING-UI-PLAYGROUND.md).

Edit on a branch, inspect the pull-request checks, then merge into `main`. Every commit merged into `main` publishes an immutable agent bundle identified by the commit SHA and content digest.

`main` is the production-intent branch. Successful creator validation immediately dispatches the exact commit to Seneca. Seneca then reads the private repository with a scoped read-only deploy key, verifies the commit and bundle, and activates it through the runtime release store; production never loads a moving branch directly. Five-minute polling is retained only as missed-dispatch recovery.

## Boundaries

- Public material only. Never add paid templates, paid-only content, inaccessible LinkedIn content, or invented evidence.
- Preserve authorship, public URL, publication date, and access provenance.
- Skills are Markdown instructions only. This repository cannot grant tools, MCP servers, filesystem permissions, billing access, or infrastructure access.
- Runtime knowledge is read-only. Agent-generated wiki changes are proposals until a human edits or accepts them here.
- The exact definition ID is always `charlotteledoux`.

## Talk with Charlotte

The declarative `/talk-with-charlotte` command opens Charlotte Ledoux's official public booking link in a new browser tab:

https://calendly.com/charlotteledoux-pro/30min-meeting

The URL was verified against the booking link published on https://charlotteledoux.ai/.

## Deployment

See [`DEPLOYMENT.md`](DEPLOYMENT.md). Publishing and narrowly authorized Seneca activation are wired; activation is reported separately from bundle publication and rolls back on failed validation, restart, health, or digest verification.
