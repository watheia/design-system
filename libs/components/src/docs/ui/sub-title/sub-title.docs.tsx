import { Paragraph } from "@watheia/docs.markdown.elements.paragraph"
import { ThemeCompositions } from "@watheia/docs.theme.theme-compositions"
import { Example } from "@watheia/docs.types.docs-file"
import { Subtitle } from "./sub-title"

export const labels = ["react", "ui-component", "text"]

export const examples: Example[] = [
  {
    scope: {
      Subtitle,
      ThemeCompositions
    },
    title: "Using the Subtitle component.",
    description: `The subtitle component renders a "muted" extra-large text (as a 'p' element).`,
    code: `
<ThemeCompositions>
    <Subtitle >
        This is a subtitle
    </Subtitle>
</ThemeCompositions>
`
  }
]
