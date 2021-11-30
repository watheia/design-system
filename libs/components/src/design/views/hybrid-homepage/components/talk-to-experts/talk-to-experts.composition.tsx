import React from "react"
import { ThemeCompositions } from "@watheia/base-ui.theme.light-theme"
import { TalkToExperts } from "./talk-to-experts"

export const TalkToExpertsExample = () => (
  <ThemeCompositions>
    <TalkToExperts data-testid="test-talk" />
  </ThemeCompositions>
)
