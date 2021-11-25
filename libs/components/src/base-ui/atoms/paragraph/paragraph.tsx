import React from "react"
import classNames from "clsx"

import { PossibleSizes } from "@watheia/base-ui.theme.sizes"
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
export function Paragraph({ className, size, element: Element, ...rest }: ParagraphProps) {
  return (
    <Element
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      className={classNames(styles[size], className)}
      data-bit-id="watheia.base-ui/text/paragraph"
      {...rest}
    />
  )
}

Paragraph.defaultProps = {
  size: "md",
  element: "p"
}
