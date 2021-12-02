import React from "react"
import { ThemeCompositions } from "@watheia/base-ui.theme.light-theme"
import { brands } from "@watheia/base-ui.theme.brands"
import { SupportChannels } from "./support-channels"

export const SupportChannelsExample = () => (
  <ThemeCompositions className={brands}>
    <SupportChannels data-testid="test-support" />
  </ThemeCompositions>
)
