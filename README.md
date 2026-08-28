# Seneca — Charlotte Ledoux

Private, creator-controlled source repository for the `charlotteledoux` Seneca agent.

This repository contains the complete editorial agent definition:

- `agent.json` and `instructions.md` — identity and operating instructions;
- `skills/` — prompt-only skills Charlotte can edit;
- `knowledge/` — attributed public-source corpus and compiled wiki;
- `commands/` — declarative browser commands;
- `evals/` — creator-maintained evaluation cases.

The agent is independent software. It is not Charlotte Ledoux, does not speak on her behalf, and is not affiliated with or endorsed by her.

## Test Charlotte now

This is the quickest way to review the agent. It runs only on the local machine:
there is **no Seneca account, Docker, database, deployment, or `.env` file**.

```bash
# From this repository
ANTHROPIC_API_KEY=your_key npx @hachej/boring-ui-cli .
```

Open **http://127.0.0.1:5200**, chat with Charlotte, and press `Ctrl+C` when
done. `npm run playground` is the same command if your Claude provider is
already configured.

If there is no `ANTHROPIC_API_KEY`, run `pi` (or
`npx @earendil-works/pi-coding-agent`) once and use `/login`; refresh the
browser after signing in. The API key is not saved by this repository.

### What the playground contains

- Charlotte's full public-source prompt and editorial skills;
- an offline, human-reviewable knowledge wiki in [`knowledge/wiki/`](knowledge/wiki/);
- the attributed public Substack source corpus in [`knowledge/substack/`](knowledge/substack/).

The agent uses the wiki to navigate a topic, then checks the raw public articles
for exact wording, dates and source URLs. The corpus excludes paid templates,
the lead-gated ebook and non-public posts. It is not Charlotte's private
workspace, a vector database, or an endorsement by Charlotte.

For a production-shaped Seneca integration test, see
[`docs/BORING-UI-PLAYGROUND.md`](docs/BORING-UI-PLAYGROUND.md).

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

The addressed declarative `/talk-with-charlotte` command opens Charlotte Ledoux's official public booking link in a new browser tab:

https://calendly.com/charlotteledoux-pro/30min-meeting

The command belongs only to `agentTypeId=charlotteledoux`; another agent must
neither discover nor execute it. The complete creator-specific action remains in
`commands/talk-with-charlotte.json`, while hosts provide only generic manifest
loading, agent scoping and protected browser-action handling.

The URL was verified against the booking link published on https://charlotteledoux.ai/.
When testing a compatible local host, run `npm run verify:playground-command` to
check addressed discovery, execution and cross-agent denial.

## Deployment

See [`DEPLOYMENT.md`](DEPLOYMENT.md). Publishing and narrowly authorized Seneca activation are wired; activation is reported separately from bundle publication and rolls back on failed validation, restart, health, or digest verification.
