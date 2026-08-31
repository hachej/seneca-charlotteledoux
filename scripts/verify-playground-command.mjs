import assert from 'node:assert/strict'
import { randomUUID } from 'node:crypto'

const command = { agentTypeId: 'charlotteledoux', name: 'talk-with-charlotte' }
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
  assert.ok(sharedFilesystems.body.filesystems.some((entry) => (
    entry.filesystem === 'agent_knowledge:charlotteledoux'
    && entry.label === 'Charlotte Ledoux'
    && entry.access === 'readonly'
  )))
  const humanKnowledge = await request('/api/v1/files?filesystem=agent_knowledge%3Acharlotteledoux&path=wiki%2FINDEX.md')
  if (!humanKnowledge.response.ok) blocker('The human workspace could not read Charlotte knowledge.', humanKnowledge.body)

  assert.match(humanKnowledge.body.content, /Charlotte|Governance|Wiki/i)
  assert.equal(humanKnowledge.body.access, 'readonly')

  const workspaceWrite = await request('/api/v1/files', {
    method: 'POST',
    body: JSON.stringify({ filesystem: 'user', path: smokePath, content: 'workspace write smoke' }),
  })
  if (!workspaceWrite.response.ok) blocker('Writable human workspace smoke write failed.', workspaceWrite.body)
  const knowledgeWrite = await request('/api/v1/files', {
    method: 'POST',
    body: JSON.stringify({ filesystem: 'agent_knowledge:charlotteledoux', path: 'should-not-write.txt', content: 'denied' }),
  })
  assert.equal(knowledgeWrite.response.status, 403, 'Charlotte knowledge mutation must be rejected as readonly')
  assert.equal(knowledgeWrite.body?.error?.code, 'readonly')

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
  if (!discovered || discovered.source !== 'extension') {
    blocker('The addressed runtime did not expose /talk-with-charlotte through Charlotte’s Pi extension.', listed.body)
  }
  assert.ok(listed.body.commands.some(({ name, source }) => name === 'skill:wiki-editorial' && source === 'skill'))
  assert.ok((await request('/api/v1/agents/default/commands')).response.status >= 400)

  const executed = await request(`/api/v1/agents/${encodeURIComponent(command.agentTypeId)}/commands/execute`, {
    method: 'POST',
    body: JSON.stringify({ requestId: `${requestId}-execute`, sessionId, name: command.name, args: '' }),
  })
  if (!executed.response.ok) blocker('The addressed Charlotte command did not execute.', executed.body)
  assert.deepEqual(executed.body, { ok: true, sessionId, name: command.name })

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
  console.log('✓ the human workspace sees Workspace and Charlotte Ledoux filesystems')
  console.log('✓ Charlotte Ledoux knowledge reads succeed in the human workspace')
  console.log('✓ workspace writes succeed and knowledge mutations fail as readonly')
  console.log('✓ wiki-editorial is discoverable only through Charlotte')
  console.log('✓ /talk-with-charlotte is addressed through Charlotte’s existing Pi extension')
  console.log('✓ execution uses the existing Boring UI panel bridge')
  console.log('✓ cross-agent execution is denied')
} finally {
  await request(`/api/v1/files?filesystem=user&path=${encodeURIComponent(smokePath)}`, { method: 'DELETE' }).catch(() => {})
  if (sessionId) {
    await request(
      `/api/v1/agents/${encodeURIComponent(command.agentTypeId)}/sessions/${encodeURIComponent(sessionId)}?requestId=${encodeURIComponent(`${requestId}-cleanup`)}`,
      { method: 'DELETE' },
    ).catch(() => {})
  }
}
