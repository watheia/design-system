import React from "react"
import { ThemeCompositions } from "@watheia/base-ui.theme.light-theme"
import { EnterpriseSection } from "./enterprise-section"

export const EnterpriseSectionExample = () => (
  <ThemeCompositions>
    <EnterpriseSection data-testid="test-enterprise" />
  </ThemeCompositions>
)

EnterpriseSectionExample.canvas = {
  width: 1440
}
