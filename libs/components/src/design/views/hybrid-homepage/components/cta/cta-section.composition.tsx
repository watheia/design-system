import React from "react"
import { ThemeCompositions } from "@watheia/base-ui.theme.light-theme"
import { CtaSection } from "./cta-section"

export const CtaSectionExample = () => (
  <ThemeCompositions>
    <CtaSection data-testid="test-cta" />
  </ThemeCompositions>
)
