import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import test from 'node:test'

const command = JSON.parse(await readFile(
  new URL('../commands/talk-with-charlotte.json', import.meta.url),
  'utf8',
))

test('/talk-with-charlotte is an addressed declarative workspace command', () => {
  assert.equal(command.agentTypeId, 'charlotteledoux')
  assert.equal(command.name, 'talk-with-charlotte')
  assert.deepEqual(command.action, {
    type: 'open_workspace_panel',
    url: 'https://calendly.com/charlotteledoux-pro/30min-meeting',
    panelId: 'charlotte-calendly',
    title: 'Talk with Charlotte',
  })
})

test('/talk-with-charlotte uses Charlotte’s official Calendly host over HTTPS', () => {
  const url = new URL(command.action.url)
  assert.equal(url.protocol, 'https:')
  assert.equal(url.hostname, 'calendly.com')
  assert.equal(url.pathname, '/charlotteledoux-pro/30min-meeting')
})
