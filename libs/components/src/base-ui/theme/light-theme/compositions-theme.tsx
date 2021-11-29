import React from "react"
import { styles } from "@watheia/base-ui.theme.fonts.clean"
import { IconFont } from "@watheia/base-ui.theme.fonts.icon-font"
import { Theme, ThemeProps } from "./theme-provider"
import clsx from "clsx"

export function ThemeCompositions({ className, ...props }: ThemeProps) {
  return (
    <Theme className={clsx(styles.sansFont, className)} {...props}>
      <IconFont query="eo46cx" />
      {props.children}
    </Theme>
  )
}
