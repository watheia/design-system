import React from "react"
import { IconFont } from "@watheia/base-ui.theme.fonts.icon-font"
// import 'reset-css';  // do not include, instead make sure each component resets its own styles
import { ThemeContext, DocsThemeProps } from "@watheia/docs.theme.theme-context"

const ICON_MOON_VERSION = "mxd7i0"

export type ThemeCompositionsProps = DocsThemeProps

export const ThemeCompositions = ({ children, ...rest }: ThemeCompositionsProps) => {
  return (
    <ThemeContext {...rest}>
      <IconFont query={ICON_MOON_VERSION} />
      {children}
    </ThemeContext>
  )
}
