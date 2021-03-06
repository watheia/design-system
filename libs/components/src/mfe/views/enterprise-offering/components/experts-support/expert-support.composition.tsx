import React from "react"
import { ThemeCompositions } from "@watheia/base-ui.theme.light-theme"
import { ExpertSupport } from "./expert-support"

export const ExpertSupportExample = () => (
  <ThemeCompositions>
    <ExpertSupport data-testid="test-expert-support" />
  </ThemeCompositions>
)

ExpertSupportExample.canvas = {
  width: 1440,
  height: 650
}
