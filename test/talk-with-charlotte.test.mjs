import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import test from 'node:test'

const command = JSON.parse(await readFile(
  new URL('../commands/talk-with-charlotte.json', import.meta.url),
  'utf8',
))

test('/talk-with-charlotte is an addressed declarative browser command', () => {
  assert.equal(command.agentTypeId, 'charlotteledoux')
  assert.equal(command.name, 'talk-with-charlotte')
  assert.deepEqual(command.action, {
    type: 'open_external_url',
    url: 'https://calendly.com/charlotteledoux-pro/30min-meeting',
    target: '_blank',
    features: 'noopener,noreferrer',
  })
})

test('/talk-with-charlotte uses Charlotte’s official Calendly host over HTTPS', () => {
  const url = new URL(command.action.url)
  assert.equal(url.protocol, 'https:')
  assert.equal(url.hostname, 'calendly.com')
  assert.equal(url.pathname, '/charlotteledoux-pro/30min-meeting')
})
