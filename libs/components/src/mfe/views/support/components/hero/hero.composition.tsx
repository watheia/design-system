import React from "react"
import { ThemeCompositions } from "@watheia/base-ui.theme.light-theme"
import { Hero } from "./hero"

export const HeroExample = () => (
  <ThemeCompositions>
    <Hero data-testid="test-hero" />
  </ThemeCompositions>
)
