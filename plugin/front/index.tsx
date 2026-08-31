import { definePlugin } from "@hachej/boring-workspace/plugin"

const CALENDLY_URL = "https://calendly.com/charlotteledoux-pro/30min-meeting"
export const CHARLOTTE_CALENDLY_PANEL_ID = "charlotteledoux.calendly"

function CharlotteCalendlyPanel() {
  return (
    <iframe
      title="Talk with Charlotte"
      src={CALENDLY_URL}
      className="h-full w-full border-0 bg-background"
      sandbox="allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox allow-same-origin"
      referrerPolicy="no-referrer"
    />
  )
}

export default definePlugin({
  id: "charlotteledoux",
  label: "Charlotte Ledoux",
  panels: [{
    id: CHARLOTTE_CALENDLY_PANEL_ID,
    label: "Talk with Charlotte",
    placement: "center",
    component: CharlotteCalendlyPanel,
    supportsFullPage: true,
  }],
})
