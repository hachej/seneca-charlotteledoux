import { lstat, readdir, readFile } from 'node:fs/promises'
import { resolve, relative } from 'node:path'

const root = resolve(new URL('..', import.meta.url).pathname)
const requiredDefinitionId = 'charlotteledoux'
const allowedCalendlyUrl = 'https://calendly.com/charlotteledoux-pro/30min-meeting'

function fail(message) {
  throw new Error(message)
}

async function json(path) {
  return JSON.parse(await readFile(resolve(root, path), 'utf8'))
}

async function filesUnder(path) {
  const start = resolve(root, path)
  const result = []
  async function walk(current) {
    for (const entry of await readdir(current, { withFileTypes: true })) {
      const absolute = resolve(current, entry.name)
      const stat = await lstat(absolute)
      if (stat.isSymbolicLink()) fail(`Symlinks are forbidden: ${relative(root, absolute)}`)
      if (stat.isDirectory()) await walk(absolute)
      else if (stat.isFile()) result.push(relative(root, absolute))
    }
  }
  await walk(start)
  return result.sort()
}

const definition = await json('agent.json')
const manifest = await json('package.json')
if (definition.definitionId !== requiredDefinitionId) fail('agent.json definitionId must be charlotteledoux')
if (manifest.boring?.agent?.definitionId !== requiredDefinitionId) fail('package.json definitionId must be charlotteledoux')
if (definition.version !== manifest.version || definition.version !== manifest.boring?.agent?.version) {
  fail('agent.json and package.json versions must match')
}
if (definition.instructionsRef !== 'instructions.md') fail('instructionsRef must remain instructions.md')

const instructions = await readFile(resolve(root, 'instructions.md'), 'utf8')
for (const disclosure of ['not Charlotte Ledoux herself', 'not affiliated with or endorsed by her', 'paid templates']) {
  if (!instructions.includes(disclosure)) fail(`instructions.md is missing disclosure: ${disclosure}`)
}

const allFiles = await filesUnder('.')
const forbiddenSkillCode = allFiles.filter((path) => /^skills\//.test(path) && !path.endsWith('/SKILL.md'))
if (forbiddenSkillCode.length) fail(`Skills must contain only SKILL.md files: ${forbiddenSkillCode.join(', ')}`)
for (const skillPath of manifest.seneca?.skills ?? []) {
  if (!/^skills\/[a-z0-9-]+\/SKILL\.md$/.test(skillPath)) fail(`Invalid skill path: ${skillPath}`)
  const skill = await readFile(resolve(root, skillPath), 'utf8')
  if (!skill.startsWith('---\n') || !skill.includes('\nname: ') || !skill.includes('\ndescription: ')) {
    fail(`Skill lacks required frontmatter: ${skillPath}`)
  }
}
const expectedPiSkills = (manifest.seneca?.skills ?? []).map((skillPath) => skillPath.replace(/\/SKILL\.md$/, ''))
if (JSON.stringify(manifest.pi?.skills ?? []) !== JSON.stringify(expectedPiSkills)) {
  fail('package.json pi.skills must exactly match the creator skill inventory')
}

const commandPaths = manifest.seneca?.commands ?? []
if (commandPaths.length !== 1 || commandPaths[0] !== 'commands/talk-with-charlotte.json') {
  fail('The declarative command inventory must contain talk-with-charlotte')
}
const command = await json(commandPaths[0])
if (command.schemaVersion !== 1 || command.agentTypeId !== requiredDefinitionId || command.name !== 'talk-with-charlotte') {
  fail('Invalid talk-with-charlotte command identity')
}
if (command.action?.type !== 'open_external_url' || command.action.url !== allowedCalendlyUrl) {
  fail('talk-with-charlotte must open Charlotte’s verified official Calendly URL')
}
const bookingUrl = new URL(command.action.url)
if (bookingUrl.protocol !== 'https:' || bookingUrl.hostname !== 'calendly.com') fail('Calendly command URL is not allowed')
if (command.action.target !== '_blank' || command.action.features !== 'noopener,noreferrer') {
  fail('External command must open a protected new tab')
}

const workflow = await readFile(resolve(root, '.github/workflows/agent.yml'), 'utf8')
for (const required of [
  'Request immediate Seneca activation',
  'secrets.SENECA_AGENT_DISPATCH_TOKEN',
  '--repo hachej/seneca',
  '--field source_commit="$GITHUB_SHA"',
]) {
  if (!workflow.includes(required)) fail(`Creator workflow is missing safe activation dispatch: ${required}`)
}
for (const forbidden of ['VPS_SSH_KEY', 'VPS_HOST', 'TAILSCALE_AUTHKEY', 'CHARLOTTE_AGENT_DEPLOY_KEY']) {
  if (workflow.includes(forbidden)) fail(`Creator workflow must not receive production or repository-read secret: ${forbidden}`)
}

const rawFiles = (await filesUnder('knowledge/substack')).filter((path) => path.endsWith('.md') && !path.endsWith('/INDEX.md'))
if (rawFiles.length < 51) fail(`Expected at least 51 public raw articles, found ${rawFiles.length}`)
const sourceMap = await readFile(resolve(root, 'knowledge/wiki/SOURCE-MAP.md'), 'utf8')
for (const rawPath of rawFiles) {
  const filename = rawPath.split('/').at(-1)
  if (!sourceMap.includes(`../substack/${filename}`)) fail(`SOURCE-MAP.md does not account for ${filename}`)
}

console.log(`✓ ${requiredDefinitionId} v${definition.version}`)
console.log(`✓ ${rawFiles.length} raw public articles mapped`)
console.log(`✓ ${manifest.seneca.skills.length} prompt-only skill(s) validated`)
console.log(`✓ /talk-with-charlotte uses the verified protected Calendly destination`)
