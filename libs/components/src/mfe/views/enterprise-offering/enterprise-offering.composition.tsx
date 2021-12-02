import React from "react"
import { ThemeCompositions } from "@watheia/base-ui.theme.light-theme"
import { EnterpriseOffering } from "./enterprise-offering"

export const EnterpriseOfferingPage = () => (
  <ThemeCompositions>
    <EnterpriseOffering data-testid="test-page" />
  </ThemeCompositions>
)

EnterpriseOfferingPage.canvas = {
  width: 1440,
  height: 400
}
