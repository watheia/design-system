import React from "react"
import { ThemeCompositions } from "@watheia/docs.theme.theme-compositions"
import { CopyBox } from "./copy-box"
import { Example } from "@watheia/docs.types.docs-file"

export const labels = ["react", "ui-component"]

export const examples: Example[] = [
  {
    scope: {
      CopyBox,
      ThemeCompositions
    },
    title: "Using the CopyBox component.",
    description: (
      <>
        <p>CopyBox copies its (string) children to the clipboard.</p>
        <p>
          It should not be used for more than a single line. For code-snippets, use the
          CodeSnippet component, instead.
        </p>
      </>
    ),
    code: `
<ThemeCompositions>
    <CopyBox style={{width: "600px"}} >
        npm install @watheia/docs.ui.copy-box
    </CopyBox>
</ThemeCompositions>
`
  }
]
