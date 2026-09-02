import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import test from 'node:test'

async function readJson(relativePath) {
  return JSON.parse(await readFile(new URL(`../${relativePath}`, import.meta.url), 'utf8'))
}

const manifest = await readJson('package.json')
const compatibilityDefinition = await readJson('agent.json')
const frontPlugin = await readFile(new URL('../plugin/front/index.tsx', import.meta.url), 'utf8')
const commandExtension = await readFile(new URL('../plugin/agent/index.ts', import.meta.url), 'utf8')

const bookingUrl = 'https://calendly.com/charlotteledoux-pro/30min-meeting'

test('the Charlotte package uses the existing Boring UI and Pi plugin entries', () => {
  assert.equal(manifest.boring.front, 'plugin/front/index.tsx')
  assert.deepEqual(manifest.pi.extensions, ['plugin/agent/index.ts'])
  assert.equal(manifest.boring.agent.definitionId, 'charlotteledoux')
  assert.equal(manifest.boring.agentCommandManifests, undefined)
  for (const key of ['definitionId', 'version', 'label', 'description', 'instructionsRef']) {
    assert.equal(compatibilityDefinition[key], manifest.boring.agent[key])
  }
})

test('/talk-with-charlotte is registered by Charlotte’s Pi extension', () => {
  assert.match(commandExtension, /COMMAND_NAME = "talk-with-charlotte"/)
  assert.match(commandExtension, /pi\.registerCommand\(COMMAND_NAME/)
  assert.match(commandExtension, /Symbol\.for\("@hachej\/boring-workspace:active-ui-bridge"\)/)
  assert.match(commandExtension, /kind: "openPanel"/)
  assert.match(commandExtension, /component: PANEL_ID/)
  assert.doesNotMatch(commandExtension, /^import\s/m)
})

test('the Charlotte front plugin owns the Calendly panel', () => {
  assert.match(frontPlugin, /id: "charlotteledoux"/)
  assert.match(frontPlugin, /CHARLOTTE_CALENDLY_PANEL_ID = "charlotteledoux\.calendly"/)
  assert.ok(frontPlugin.includes(bookingUrl))
  assert.match(frontPlugin, /sandbox=/)
  assert.match(frontPlugin, /referrerPolicy="no-referrer"/)
})

test('the official Calendly target is credential-free HTTPS', () => {
  const url = new URL(bookingUrl)
  assert.equal(url.protocol, 'https:')
  assert.equal(url.username, '')
  assert.equal(url.password, '')
  assert.equal(url.hostname, 'calendly.com')
  assert.equal(url.pathname, '/charlotteledoux-pro/30min-meeting')
})
