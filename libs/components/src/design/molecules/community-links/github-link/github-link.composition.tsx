import React from "react"
import { ThemeCompositions } from "@watheia/base-ui.theme.light-theme"
import { brands } from "@watheia/base-ui.theme.brands"
import { GithubLink } from "./github-link"

export const GithubLinkExample = () => (
  <ThemeCompositions className={brands}>
    <GithubLink
      href="https://github.com/watheia/design-system"
      starCount={500000}
      data-testid="test-link"
    />
  </ThemeCompositions>
)
