import React, { HTMLAttributes } from "react"
import classNames from "clsx"
import { Theme } from "@watheia/base-ui.theme.theme-provider"
import * as sizes from "./sizes.module.scss"
import * as globals from "./globals.module.scss" // TODO - rename

export type DocsThemeProps = HTMLAttributes<HTMLDivElement>

export function DocsTheme({ children, className, ...rest }: DocsThemeProps) {
  return (
    <Theme {...rest} className={classNames(className, sizes.heading, globals.overrides)}>
      {children}
    </Theme>
  )
}

/**
 * @deprecated
 */
export { DocsTheme as ThemeContext }
