import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import test from 'node:test'

async function readJson(relativePath) {
  return JSON.parse(await readFile(new URL(`../${relativePath}`, import.meta.url), 'utf8'))
}

const manifest = await readJson('package.json')
const definition = manifest.boring.agent
const commandPath = 'commands/talk-with-charlotte.json'
const command = await readJson(commandPath)

function commandsForAgent(agentTypeId) {
  return [command].filter((candidate) => candidate.agentTypeId === agentTypeId)
}

function executeAddressedCommand(agentTypeId, name) {
  const addressed = commandsForAgent(agentTypeId).find((candidate) => candidate.name === name)
  if (!addressed) {
    const error = new Error('command not found for addressed agent')
    error.code = 'AGENT_COMMAND_NOT_FOUND'
    throw error
  }
  return { effect: addressed.action }
}

test('both declarative inventories reference only /talk-with-charlotte', () => {
  assert.deepEqual(manifest.boring.agentCommandManifests, [commandPath])
  assert.deepEqual(manifest.seneca.commands, [commandPath])
  assert.deepEqual(manifest.boring.agentCommandManifests, manifest.seneca.commands)
})

test('/talk-with-charlotte identity matches the authored Charlotte agent', () => {
  assert.equal(command.agentTypeId, definition.definitionId)
  assert.equal(command.agentTypeId, manifest.boring.agent.definitionId)
  assert.equal(command.agentTypeId, 'charlotteledoux')
  assert.equal(command.name, 'talk-with-charlotte')
  assert.notEqual(command.name, 'chat-with-charlotte')
})

test('/talk-with-charlotte remains a protected declarative browser action', () => {
  assert.deepEqual(command.action, {
    type: 'open_workspace_panel',
    url: 'https://calendly.com/charlotteledoux-pro/30min-meeting',
    title: 'Talk with Charlotte',
  })
})

test('/talk-with-charlotte uses Charlotte’s official Calendly host over HTTPS', () => {
  const url = new URL(command.action.url)
  assert.equal(url.protocol, 'https:')
  assert.equal(url.username, '')
  assert.equal(url.password, '')
  assert.equal(url.hostname, 'calendly.com')
  assert.equal(url.pathname, '/charlotteledoux-pro/30min-meeting')
})

test('the creator-owned addressed-command contract exposes the command only to Charlotte', () => {
  assert.deepEqual(commandsForAgent('charlotteledoux').map(({ name }) => name), ['talk-with-charlotte'])
  assert.deepEqual(commandsForAgent('default'), [])
  assert.deepEqual(commandsForAgent('another-agent'), [])
})

test('the creator-owned addressed-command contract denies cross-agent execution', () => {
  assert.deepEqual(executeAddressedCommand('charlotteledoux', 'talk-with-charlotte'), {
    effect: command.action,
  })
  assert.throws(
    () => executeAddressedCommand('another-agent', 'talk-with-charlotte'),
    (error) => error.code === 'AGENT_COMMAND_NOT_FOUND',
  )
  assert.throws(
    () => executeAddressedCommand('charlotteledoux', 'chat-with-charlotte'),
    (error) => error.code === 'AGENT_COMMAND_NOT_FOUND',
  )
})
