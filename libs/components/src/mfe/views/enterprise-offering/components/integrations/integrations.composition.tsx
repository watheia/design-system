import React from "react"
import { ThemeCompositions } from "@watheia/base-ui.theme.light-theme"
import { Integrations } from "./integrations"

export const IntegrationsExample = () => (
  <ThemeCompositions>
    <Integrations data-testid="test-integrations" />
  </ThemeCompositions>
)
