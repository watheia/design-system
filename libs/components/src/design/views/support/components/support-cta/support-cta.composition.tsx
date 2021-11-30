import React from "react"
import { ThemeCompositions } from "@watheia/base-ui.theme.light-theme"
import { SupportCta } from "./support-cta"

export const SupportCtaExample = () => (
  <ThemeCompositions>
    <SupportCta data-testid="test-support" />
  </ThemeCompositions>
)
