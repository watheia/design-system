export const labels = ["react", "ui-component", "label list"]
import { Paragraph } from "@watheia/docs.markdown.elements.paragraph"
import { ThemeCompositions } from "@watheia/docs.theme.theme-compositions"
import { Example } from "@watheia/docs.types.docs-file"
import { LabelList } from "./label-list"

export const examples: Example[] = [
  {
    scope: {
      LabelList,
      ThemeCompositions
    },
    title: "Using the Label List component",
    description: "The Label List renders an array as labels.",
    code: `
<ThemeCompositions>
    <LabelList>
        { ['first', 'second', 'third'] }
    </LabelList>
</ThemeCompositions>
`
  }
]
