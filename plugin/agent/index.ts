import { notify, openPanel } from "@hachej/boring-workspace/plugin"

const PANEL_ID = "charlotteledoux.calendly"
const COMMAND_NAME = "talk-with-charlotte"

export default function registerCharlotteCommands(pi: any) {
  pi.registerCommand(COMMAND_NAME, {
    description: "Open Charlotte Ledoux's official Calendly booking page in the workspace.",
    handler: async () => {
      await openPanel({
        id: `${PANEL_ID}.booking`,
        component: PANEL_ID,
        title: "Talk with Charlotte",
      })
      await notify("Opened Talk with Charlotte.", "info").catch(() => undefined)
    },
  })
}
