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

## Current wiring

This repository publishes immutable bundles on every merge to `main`. Seneca's `Activate Charlotte agent release` workflow polls this private repository every five minutes with a repository-scoped read-only deploy key, validates the current `main`, and activates it through the runtime release store without rebuilding the Seneca image.

The initial implementation recreates the Seneca app container after an atomic pointer swap. Existing sessions are not yet definition-digest pinned; a resumed Charlotte session uses the newly active definition after restart. The workflow verifies health and the active compiled digest and restores the preceding pointer on failure.
