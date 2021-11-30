import React from "react"
import { ThemeCompositions } from "@watheia/base-ui.theme.light-theme"
import { SupportPackages } from "./support-packages"

export const SupportPackagesExample = () => (
  <ThemeCompositions>
    <SupportPackages data-testid="test-support">
      support comparison table should be passed
    </SupportPackages>
  </ThemeCompositions>
)
