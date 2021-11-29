import { ConsumableLink } from "./consumable-link"
import { ThemeCompositions } from "@watheia/docs.theme.theme-compositions"
import { Example } from "@watheia/docs.types.docs-file"

export const labels = ["react", "ui-component"]

export const abstract = "A component to display copyable links to a package."

export const examples: Example[] = [
  {
    scope: {
      ConsumableLink,
      ThemeCompositions
    },
    title: "Using the Consumable Link component",
    code: `
<ThemeCompositions>
    <div style={{maxWidth: "600px"}}>
        <ConsumableLink title="Component ID" link="@watheia/docs.ui.consumable-link" />
    </div>
</ThemeCompositions>
`
  }
]
