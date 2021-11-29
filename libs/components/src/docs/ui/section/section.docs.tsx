import { ThemeCompositions } from "@watheia/docs.theme.theme-compositions"
import { Example } from "@watheia/docs.types.docs-file"
import { Section } from "./section"

export const labels = ["react", "ui-component", "container"]

export const examples: Example[] = [
  {
    scope: {
      Section,
      ThemeCompositions
    },
    title: "Using the Section component.",
    code: `
<ThemeCompositions>
    <Section className="custom-section">
        This is a section.
    </Section>
</ThemeCompositions>
`
  }
]
