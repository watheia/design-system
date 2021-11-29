import React from "react"
import { ThemeCompositions } from "@watheia/base-ui.theme.light-theme"
import { XButton } from "./x-button"

export const CloseButton = () => (
  <ThemeCompositions>
    <XButton onClick={() => alert("on click")} data-testid="test-x" />
  </ThemeCompositions>
)
