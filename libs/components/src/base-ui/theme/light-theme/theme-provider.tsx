import React from "react"
import classNames from "clsx"

import { Theme as BaseTheme } from "@watheia/base-ui.theme.theme-provider"
import { brands } from "@watheia/base-ui.theme.brands"

import { headingFontSize, textFontSize } from "@watheia/base-ui.theme.size-definition"
import { headingMargins } from "@watheia/base-ui.theme.heading-margin-definition"
import * as texts from "./texts.module.scss"

export type ThemeProps = React.HTMLAttributes<HTMLDivElement>

/**
 * Marketing style customizations, added on top of the regular theme.
 * (some of these are already included in the base-ui theme, but they will be separated in the future)
 */
export const LightThemeAddons = classNames(
  brands,
  headingFontSize,
  headingMargins,
  textFontSize,
  texts.defaults
)

/**
 * @name ThemeProvider
 * @description
 * Applies shared styles to all child components.
 *
 * This includes:
 * - Colors
 * - Headers and paragraphs font-size, margins, etc
 * - Brand font
 * - Shadows
 * - Specific brand related styles
 *
 * @example
 * <Theme>
 *  <Paragraph>I got all the base styles! yippee!</Paragraph>
 * </Theme>
 */

export function Theme(props: ThemeProps) {
  return <BaseTheme {...props} className={classNames(props.className, LightThemeAddons)} />
}
