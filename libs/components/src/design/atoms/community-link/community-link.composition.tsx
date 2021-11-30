import React from "react"
import { ThemeCompositions } from "@watheia/base-ui.theme.light-theme"
import { brands } from "@watheia/base-ui.theme.brands"
import { CommunityLink } from "./community-link"

export const BaseCommunityLink = () => (
  <ThemeCompositions className={brands}>
    <CommunityLink href="https://bit.dev" data-testid="test-link" external>
      bit.dev
    </CommunityLink>
  </ThemeCompositions>
)
