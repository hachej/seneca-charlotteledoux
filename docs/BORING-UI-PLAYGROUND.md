# Test Charlotte in a Boring UI playground

Two supported local loops are useful for different purposes.

## 1. Production-shaped Seneca playground (recommended)

This exercises the same published Boring Core, Workspace, Agent Host, knowledge binding, routing, subscription integration and frontend composition used by Seneca production.

Clone the repositories beside each other:

```bash
git clone git@github.com:hachej/seneca.git
git clone git@github.com:hachej/seneca-charlotteledoux.git
cd seneca
pnpm install
```

Replace only the local Charlotte fixture with the creator-controlled source:

```bash
rm -rf agents/charlotteledoux
cp -a ../seneca-charlotteledoux agents/charlotteledoux
pnpm agents:compile
pnpm test -- src/server/__tests__/agents.test.ts
```

Start Seneca's local stack following its `.env.example` and README:

```bash
cp .env.example .env
# Configure the local Postgres and one development model provider.
pnpm dev
```

Open the local URL printed by the dev server, select **Charlotte Ledoux**, create two chat panes, and verify:

- selecting Charlotte does not replace the workspace or close the other pane;
- the file picker lists every workspace-visible filesystem;
- the human can open **Charlotte Ledoux** read-only and **Workspace** writable roots;
- answers read the relevant raw `substack/` article before claiming success;
- `/talk-with-charlotte` appears only for `agentTypeId=charlotteledoux` and opens the verified Calendly panel through Charlotte’s package plugin;
- requesting or executing `talk-with-charlotte` against any other agent is rejected.

Never use production Stripe, database, Blaxel, mail or deployment credentials locally.

## 2. Bare `boring-ui` workspace playground

Use this to test the authored agent package and its prompt skill without Seneca's auth, billing or database layer. Make a disposable Boring worktree because the factory roster and policy are trust-class-B files.

Assuming both repositories are siblings:

```bash
cd boring-ui-v2
git worktree add .worktrees/charlotte-playground origin/main
cd .worktrees/charlotte-playground
pnpm install --frozen-lockfile

cp -a ../../../seneca-charlotteledoux .agents/personas/charlotteledoux
rm -rf .agents/personas/charlotteledoux/.git
```

Compute the creator skill pin:

```bash
skill_digest="sha256:$(sha256sum .agents/personas/charlotteledoux/skills/wiki-editorial/SKILL.md | awk '{print $1}')"
```

Append the temporary seat to `.agents/factory/fleet.yaml`:

```yaml
  - seat: charlotteledoux
    agentTypeId: charlotteledoux
    skills:
      - name: skills/wiki-editorial
        digest: sha256:REPLACE_WITH_THE_COMPUTED_DIGEST
```

Add its temporary model tier under `models.seats` in `.agents/factory/policy.yaml`:

```yaml
    charlotteledoux: T3
```

Run the real multi-agent workspace playground with a development model credential:

```bash
export ANTHROPIC_API_KEY='your-development-key'
export BORING_AGENT_WORKSPACE_ROOT="$PWD"
pnpm --filter workspace-playground dev:multiagent
```

Open `http://localhost:5200`, select `charlotteledoux`, and test chat, knowledge reads, wiki drafting and `!wiki-editorial`/skill discovery.

The creator repository uses the existing plugin system: `plugin/agent/index.ts`
registers `/talk-with-charlotte`, and `plugin/front/index.tsx` owns the Calendly
panel. `package.json#pi.extensions` provisions the command only into the
addressed Charlotte runtime; `package.json#boring.front` registers its panel.

After starting the host, verify plugin discovery, execution, filesystem
visibility and cross-agent denial from this repository:

```bash
BORING_UI_URL=http://127.0.0.1:5200 npm run verify:playground-command
```

Folder mode activates this authored root as `charlotteledoux`, loads only its
package Pi resources, shows the human both writable **Workspace** and readonly
**Charlotte Ledoux** roots, and gives only Charlotte’s addressed runtime the
canonical `agent_knowledge` binding. `/talk-with-charlotte` comes from the
existing scoped Pi extension—not a global command or a new core command mode.

Remove the disposable worktree when finished:

```bash
cd ../..
git worktree remove --force .worktrees/charlotte-playground
```

## Before merging creator changes

Always run:

```bash
cd seneca-charlotteledoux
npm run check
```

A merge into this repository's `main` publishes an immutable agent bundle. Local playground testing never proves production activation; production success requires the Seneca activation workflow and post-restart digest verification.
