import React from "react"
import { ThemeCompositions } from "@watheia/docs.theme.theme-compositions"
import { CodeSnippet } from "@watheia/docs.ui.code-snippet"
import { links } from "./documentation-links"
export const ListOfAvailableLinks = () => {
  return (
    <ThemeCompositions>
      <CodeSnippet>{JSON.stringify(links).replace(/,/g, ",\n")}</CodeSnippet>
    </ThemeCompositions>
  )
}
