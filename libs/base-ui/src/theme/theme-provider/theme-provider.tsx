import React from "react"
import classNames from "clsx"

import { headingFontSize, textFontSize } from "@watheia/base-ui.theme.size-definition"
import { shadowTheme } from "@watheia/base-ui.theme.shadow-definition"
import { primaryPalette } from "@watheia/base-ui.theme.color-definition"
import { brands } from "@watheia/base-ui.theme.brand-definition"
import { headingMargins } from "@watheia/base-ui.theme.heading-margin-definition"
import { SansFont } from "@watheia/base-ui.theme.fonts.clean"
import texts from "./texts.module.scss"

/**
 * @name ThemeProvider
 * @description
 * Applies shared styles to all child components.
 *
 * @example
 * <Theme>
 *  <Paragraph>I got all the base styles! yippee!</Paragraph>
 * </Theme>
 */

export function Theme(props: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <SansFont
      {...props}
      className={classNames(
        headingFontSize,
        textFontSize,
        shadowTheme,
        primaryPalette,
        brands,
        headingMargins,
        texts.defaults,
        props.className
      )}
    ></SansFont>
  )
}
