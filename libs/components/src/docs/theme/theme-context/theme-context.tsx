import React, { HTMLAttributes } from "react"
import classNames from "clsx"
import { Theme } from "@watheia/base-ui.theme.theme-provider"
import sizes from "./sizes.module.scss"
import global from "./global.module.scss" // TODO - rename

export type DocsThemeProps = HTMLAttributes<HTMLDivElement>

export function DocsTheme({ children, className, ...rest }: DocsThemeProps) {
  return (
    <Theme {...rest} className={classNames(className, sizes.heading, global.overrides)}>
      {children}
    </Theme>
  )
}

/**
 * @deprecated
 */
export { DocsTheme as ThemeContext }
