import React from "react"
import { Theme } from "@watheia/base-ui.theme.theme-provider"
import { StyledText, mutedText } from "./styled-text"

export const StyledTextExample = () => (
  <Theme>
    <StyledText>Muted text</StyledText>
  </Theme>
)

export const UsingStyledTextClassName = () => (
  <Theme>
    <span className={mutedText}>Muted text with class name</span>
  </Theme>
)
