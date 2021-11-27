import React from "react"
import clsx from "clsx"

import { PossibleSizes } from "@watheia/base-ui.theme.sizes"
import { styles as adobeClean } from "@watheia/base-ui.theme.fonts.clean"
import * as styles from "./paragraph.module.scss"

export type ParagraphProps = {
  /**
   * Font size (from a list of presets).
   */
  size: PossibleSizes

  /**
   * The underlying html element
   */
  element: "p" | "div" | "span"
} & React.HTMLAttributes<HTMLParagraphElement>

/**
 * Paragraph component prototype. Accepts all properties of a native Paragraph element,
 * @name paragraph
 * @example
 * <Paragraph size="sm">This is some text</Paragraph>
 */
export function Paragraph({ className, size, element: Element, ...props }: ParagraphProps) {
  return (
    <Element
      className={clsx(styles[size], adobeClean.sansFont, className)}
      data-bit-id="watheia.base-ui/text/paragraph"
      {...props}
    />
  )
}

Paragraph.defaultProps = {
  size: "md",
  element: "p"
}
