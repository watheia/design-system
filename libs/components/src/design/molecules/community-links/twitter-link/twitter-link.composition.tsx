import React from "react"
import { ThemeCompositions } from "@watheia/base-ui.theme.light-theme"
import { brands } from "@watheia/base-ui.theme.brands"
import { TwitterLink } from "./twitter-link"

export const TwitterLinkExample = () => (
  <ThemeCompositions className={brands}>
    <TwitterLink href="https://twitter.com/watheia" data-testid="test-link" />
  </ThemeCompositions>
)
