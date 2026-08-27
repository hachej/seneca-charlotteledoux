# Deployment contract

## Source of truth

`main` is the creator-controlled production-intent branch. Each merge to `main` runs validation and publishes one immutable release:

- tag: `agent-<12-character commit SHA>`;
- artifact: `charlotteledoux-agent.tar.gz`;
- digest: `charlotteledoux-agent.tar.gz.sha256`;
- provenance: Git commit SHA recorded in `release.json`.

## Production activation

The Seneca deployment broker must:

1. authenticate the GitHub repository, workflow and actor;
2. download the exact immutable release artifact;
3. verify its SHA-256 digest;
4. reject files outside the allowlisted definition, skills, knowledge, commands and evaluations paths;
5. validate declarative commands and prevent executable creator code;
6. compile and evaluate the `charlotteledoux` agent;
7. stage and smoke-test the release;
8. atomically select the new definition digest for new Charlotte sessions;
9. report activation status back to the source commit.

The previous active digest remains selected if any check fails. A failed post-activation smoke must restore the preceding digest.

## Deployment authority

A creator release may change editorial content but cannot change Seneca's runtime policy envelope: tools, MCP servers, filesystem permissions, subscription enforcement, secrets, routing, infrastructure and the emergency kill switch remain Seneca-owned.

## Dispatch credential

`SENECA_AGENT_DISPATCH_TOKEN` is a fine-grained personal access token with:

- repository access: **Only select repositories → `hachej/seneca`**;
- repository permission: **Actions: Read and write**;
- no Contents write, Administration, Secrets, or infrastructure permission;
- the shortest practical expiration, followed by rotation.

GitHub's Actions permission is repository-wide, not limited to one workflow. A collaborator who can change this repository's workflow can therefore use the token to invoke other manually dispatchable workflows in `hachej/seneca`. This is an explicit trust tradeoff for this private two-person repository; prefer a dedicated bot identity or narrow signed broker before adding more collaborators. Seneca still re-reads current creator `main`, treats its files only as non-executable data, validates the package independently in the trusted application image, and owns the production secrets and activation process.

## Current wiring

This repository publishes immutable bundles on every merge to `main`. As soon as the creator validation job succeeds, it requests Seneca's `Activate Charlotte agent release` workflow with the exact validated commit. The dispatch credential is stored as the `SENECA_AGENT_DISPATCH_TOKEN` Actions secret and is a fine-grained token scoped only to `hachej/seneca` with Actions read/write permission; it is not a VPS or production-runtime credential.

Seneca independently reads the private creator repository through its repository-scoped read-only deploy key, rejects a requested commit when it is no longer the current `main`, validates the bundle again, and activates it through the runtime release store without rebuilding the Seneca image. Five-minute polling remains only as a recovery path for a missed dispatch.

The initial implementation recreates the Seneca app container after an atomic pointer swap. Existing sessions are not yet definition-digest pinned; a resumed Charlotte session uses the newly active definition after restart. The workflow verifies health and the active compiled digest and restores the preceding pointer on failure.
