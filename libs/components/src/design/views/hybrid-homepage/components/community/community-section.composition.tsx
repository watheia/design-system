import React from "react"
import { ThemeCompositions } from "@watheia/base-ui.theme.light-theme"
import { brands } from "@watheia/base-ui.theme.brands"
import { CommunitySection } from "./community-section"

export const CommunitySectionExample = () => (
  <ThemeCompositions className={brands}>
    <CommunitySection githubStars={12600} data-testid="community-test" />
  </ThemeCompositions>
)

CommunitySectionExample.canvas = {
  height: 430
}
