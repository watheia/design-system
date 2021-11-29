export const labels = ["react", "ui-component", "label"]

import { ThemeCompositions } from "@watheia/docs.theme.theme-compositions"
import { Example } from "@watheia/docs.types.docs-file"
import { Label } from "./label"

export const examples: Example[] = [
  {
    scope: {
      Label,
      ThemeCompositions
    },
    title: "Using the Label component",
    code: `
<ThemeCompositions>
    <Label>
        Label
    </Label>
</ThemeCompositions>
`
  },
  {
    scope: {
      Label,
      ThemeCompositions
    },
    description: "Customizing styling",
    code: `
<ThemeCompositions>
    <Label style={{backgroundColor: '#414141', color: 'white'}}>
        Dark Label
    </Label>
</ThemeCompositions>
`
  }
]
