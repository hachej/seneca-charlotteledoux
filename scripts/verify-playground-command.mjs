import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import { randomUUID } from 'node:crypto'

const command = JSON.parse(await readFile(
  new URL('../commands/talk-with-charlotte.json', import.meta.url),
  'utf8',
))
const baseUrl = new URL(process.env.BORING_UI_URL ?? 'http://127.0.0.1:5200')
const requestId = `charlotte-command-smoke-${randomUUID()}`
const addressedBase = `/api/v1/agents/${encodeURIComponent(command.agentTypeId)}`
let sessionId
const smokePath = `.boring-charlotte-smoke-${randomUUID()}.txt`

async function request(path, options = {}) {
  const response = await fetch(new URL(path, baseUrl), {
    ...options,
    headers: {
      ...(options.body ? { 'content-type': 'application/json' } : {}),
      ...options.headers,
    },
  })
  const text = await response.text()
  let body
  try {
    body = text ? JSON.parse(text) : null
  } catch {
    body = text
  }
  return { response, body }
}

function blocker(message, detail) {
  const suffix = detail === undefined ? '' : `\n${JSON.stringify(detail, null, 2)}`
  throw new Error(`${message}${suffix}`)
}

try {
  const catalog = await request('/api/v1/agents')
  if (!catalog.response.ok) blocker('Cannot read the Boring UI agent catalog.', catalog.body)
  const agentIds = catalog.body.map(({ agentTypeId }) => agentTypeId)
  if (!agentIds.includes(command.agentTypeId) || agentIds.includes('default')) {
    blocker(
      'Released Boring UI CLI has not activated the launched authored-agent root. The generic folder-mode agent-command bridge must land before this creator-owned command can work.',
      { expectedAgentTypeId: command.agentTypeId, actualAgentTypeIds: agentIds },
    )
  }

  const sharedFilesystems = await request('/api/v1/filesystems')
  if (!sharedFilesystems.response.ok) blocker('Could not read the shared workspace filesystem catalog.', sharedFilesystems.body)
  assert.ok(sharedFilesystems.body.filesystems.some((entry) => entry.filesystem === 'user' && entry.access === 'readwrite'))
  assert.ok(!sharedFilesystems.body.filesystems.some((entry) => entry.filesystem === 'agent_knowledge'))

  const filesystems = await request(`${addressedBase}/filesystems`)
  if (!filesystems.response.ok) blocker('Could not read Charlotte-scoped filesystems.', filesystems.body)
  const roots = filesystems.body?.filesystems ?? []
  assert.ok(roots.some((entry) => entry.filesystem === 'user' && entry.access === 'readwrite'))
  assert.ok(roots.some((entry) => entry.filesystem === 'agent_knowledge' && entry.label === 'Charlotte Ledoux' && entry.access === 'readonly'))
  assert.ok(!roots.some((entry) => entry.filesystem === 'agent_resources'))
  const wrongAgentCatalog = await request('/api/v1/agents/default/filesystems')
  assert.equal(wrongAgentCatalog.response.status, 404, 'wrong Agent filesystem catalog must use canonical unknown-Agent denial')
  assert.equal(wrongAgentCatalog.body?.error?.code, 'AGENT_TYPE_UNKNOWN')

  const knowledgeTree = await request(`${addressedBase}/tree?filesystem=agent_knowledge&path=/`)
  if (!knowledgeTree.response.ok) blocker('Could not list Charlotte knowledge through the addressed tree route.', knowledgeTree.body)
  assert.ok(knowledgeTree.body.entries.some(({ path }) => path === 'wiki/INDEX.md' || path === 'wiki'))
  const knowledgeRead = await request(`${addressedBase}/files?filesystem=agent_knowledge&path=wiki%2FINDEX.md`)
  if (!knowledgeRead.response.ok) blocker('Could not read Charlotte public knowledge through the addressed file route.', knowledgeRead.body)
  assert.match(knowledgeRead.body.content, /Charlotte|Governance|Wiki/i)
  assert.equal(knowledgeRead.body.access, 'readonly')

  const workspaceWrite = await request(`${addressedBase}/files`, {
    method: 'POST',
    body: JSON.stringify({ filesystem: 'user', path: smokePath, content: 'workspace write smoke' }),
  })
  if (!workspaceWrite.response.ok) blocker('Writable addressed workspace smoke write failed.', workspaceWrite.body)
  const knowledgeWrite = await request(`${addressedBase}/files`, {
    method: 'POST',
    body: JSON.stringify({ filesystem: 'agent_knowledge', path: 'should-not-write.txt', content: 'denied' }),
  })
  assert.equal(knowledgeWrite.response.status, 403, 'Charlotte knowledge mutation must be rejected as readonly')
  assert.equal(knowledgeWrite.body?.error?.code, 'readonly')

  const wrongAgentTree = await request('/api/v1/agents/default/tree?filesystem=agent_knowledge&path=/')
  assert.equal(wrongAgentTree.response.status, 404, 'wrong Agent must not list Charlotte knowledge')
  assert.equal(wrongAgentTree.body?.error?.code, 'AGENT_TYPE_UNKNOWN')
  const wrongAgentRead = await request('/api/v1/agents/default/files?filesystem=agent_knowledge&path=wiki%2FINDEX.md')
  assert.equal(wrongAgentRead.response.status, 404, 'wrong Agent must not read Charlotte knowledge')
  assert.equal(wrongAgentRead.body?.error?.code, 'not_found_or_denied')

  const skills = await request(`/api/v1/agents/${encodeURIComponent(command.agentTypeId)}/skills`)
  if (!skills.response.ok) blocker('Could not list Charlotte-scoped skills.', skills.body)
  assert.ok(skills.body.skills.some(({ name }) => name === 'wiki-editorial'))
  assert.ok((await request('/api/v1/agents/default/skills')).response.status >= 400)

  const created = await request(`/api/v1/agents/${encodeURIComponent(command.agentTypeId)}/sessions`, {
    method: 'POST',
    body: JSON.stringify({ requestId, title: 'Declarative command smoke test' }),
  })
  if (created.response.status !== 201) blocker('Could not create an addressed Charlotte session.', created.body)
  sessionId = created.body.sessionId
  assert.equal(typeof sessionId, 'string')

  const listed = await request(
    `/api/v1/agents/${encodeURIComponent(command.agentTypeId)}/commands?sessionId=${encodeURIComponent(sessionId)}`,
  )
  if (!listed.response.ok) blocker('Could not list addressed Charlotte commands.', listed.body)
  const discovered = listed.body.commands.find(({ name }) => name === command.name)
  if (!discovered || discovered.source !== 'declarative') {
    blocker('The addressed runtime did not expose /talk-with-charlotte as a declarative command.', listed.body)
  }
  assert.ok(listed.body.commands.some(({ name, source }) => name === 'skill:wiki-editorial' && source === 'skill'))
  assert.ok((await request('/api/v1/agents/default/commands')).response.status >= 400)

  const executed = await request(`/api/v1/agents/${encodeURIComponent(command.agentTypeId)}/commands/execute`, {
    method: 'POST',
    body: JSON.stringify({ requestId: `${requestId}-execute`, sessionId, name: command.name, args: '' }),
  })
  if (!executed.response.ok) blocker('The addressed Charlotte command did not execute.', executed.body)
  assert.deepEqual(executed.body.effect, command.action)

  const wrongAgent = await request('/api/v1/agents/default/commands/execute', {
    method: 'POST',
    body: JSON.stringify({ requestId: `${requestId}-wrong-agent`, sessionId, name: command.name, args: '' }),
  })
  assert.ok(wrongAgent.response.status >= 400, 'cross-agent command execution must fail')
  const wrongAgentSkill = await request('/api/v1/agents/default/commands/execute', {
    method: 'POST',
    body: JSON.stringify({ requestId: `${requestId}-wrong-agent-skill`, sessionId, name: 'skill:wiki-editorial', args: '' }),
  })
  assert.ok(wrongAgentSkill.response.status >= 400, 'cross-agent skill invocation must fail')

  console.log('✓ Charlotte is the active authored agent')
  console.log('✓ writable Workspace and readonly Charlotte Ledoux filesystems are addressed to Charlotte')
  console.log('✓ addressed Charlotte knowledge tree and public file reads succeed')
  console.log('✓ addressed workspace writes succeed and knowledge mutations fail as readonly')
  console.log('✓ wiki-editorial is discoverable only through Charlotte')
  console.log('✓ /talk-with-charlotte is addressed and declarative')
  console.log('✓ execution returns only the verified protected Calendly browser effect')
  console.log('✓ cross-agent execution is denied')
} finally {
  await request(`${addressedBase}/files?filesystem=user&path=${encodeURIComponent(smokePath)}`, { method: 'DELETE' }).catch(() => {})
  if (sessionId) {
    await request(
      `/api/v1/agents/${encodeURIComponent(command.agentTypeId)}/sessions/${encodeURIComponent(sessionId)}?requestId=${encodeURIComponent(`${requestId}-cleanup`)}`,
      { method: 'DELETE' },
    ).catch(() => {})
  }
}
