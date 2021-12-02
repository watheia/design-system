import React from "react"
import { ThemeCompositions } from "@watheia/base-ui.theme.light-theme"
import { EcoSystem } from "./eco-system"

export const EcoSystemExample = () => (
  <ThemeCompositions>
    <EcoSystem data-testid="test-ecosystem" />
  </ThemeCompositions>
)
