const PANEL_ID = "charlotteledoux.calendly"
const COMMAND_NAME = "talk-with-charlotte"
const WORKSPACE_UI_BRIDGE = Symbol.for("@hachej/boring-workspace:active-ui-bridge")

type WorkspaceUiBridge = {
  postCommand(command: unknown): Promise<unknown>
}

function workspaceUiBridge(): WorkspaceUiBridge {
  const bridge = (globalThis as Record<PropertyKey, unknown>)[WORKSPACE_UI_BRIDGE]
  if (!bridge || typeof (bridge as WorkspaceUiBridge).postCommand !== "function") {
    throw new Error("No workspace UI bridge is active.")
  }
  return bridge as WorkspaceUiBridge
}

export default function registerCharlotteCommands(pi: any) {
  pi.registerCommand(COMMAND_NAME, {
    description: "Open Charlotte Ledoux's official Calendly booking page in the workspace.",
    handler: async () => {
      const bridge = workspaceUiBridge()
      await bridge.postCommand({
        kind: "openPanel",
        params: {
          id: `${PANEL_ID}.booking`,
          component: PANEL_ID,
        },
      })
      await bridge.postCommand({
        kind: "showNotification",
        params: { msg: "Opened Talk with Charlotte.", level: "info" },
      }).catch(() => undefined)
    },
  })
}
