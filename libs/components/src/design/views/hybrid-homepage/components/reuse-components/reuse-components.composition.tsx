import React from "react"
import { ThemeCompositions } from "@watheia/base-ui.theme.light-theme"
import { ReuseComponents } from "./reuse-components"

export const ReuseComponentsExample = () => (
  <ThemeCompositions>
    <ReuseComponents data-testid="test-reuse" />
  </ThemeCompositions>
)

ReuseComponentsExample.canvas = {
  width: 1440,
  height: 600
}
