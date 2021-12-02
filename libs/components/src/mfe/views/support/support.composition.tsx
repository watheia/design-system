import React from "react"
import { ThemeCompositions } from "@watheia/base-ui.theme.light-theme"
import { brands } from "@watheia/base-ui.theme.brands"
import { SupportPage } from "./support"

export const SupportPageComposition = () => (
  <ThemeCompositions className={brands}>
    <SupportPage data-testid="test-page" />
  </ThemeCompositions>
)

SupportPageComposition.canvas = {
  width: 1440,
  height: 400
}
