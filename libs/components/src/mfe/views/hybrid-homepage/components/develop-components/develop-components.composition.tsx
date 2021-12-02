import React from "react"
import { ThemeCompositions } from "@watheia/base-ui.theme.light-theme"
import { DevelopComponents } from "./develop-components"

export const DevelopComponentsExample = () => (
  <ThemeCompositions>
    <DevelopComponents data-testid="test-develop" />
  </ThemeCompositions>
)

DevelopComponentsExample.canvas = {
  width: 1440,
  height: 400
}
