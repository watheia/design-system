import React from "react"
import classNames from "clsx"

import { Link as BaseLink, LinkProps } from "@watheia/base-ui.routing.link"

import * as styles from "./link.module.scss"

/**
 * A concrete link, styled for Evangelist, extending [base link](https://bit.dev/bit/base-ui/atoms/link).
 * Accepts all props as html Anchor Element.
 *
 * The link will use these css variables, when available:
 * -   --wa-accent-color, for text color.
 * -   --wa-accent-heavy, for text color on hover.
 * @name Link
 * @example
 * <Link href="https://google.com">look it up!</Link>
 */
export function Link(props: LinkProps) {
  return (
    <BaseLink
      data-bit-id="watheia.base-ui/atoms/link"
      {...props}
      className={classNames(props.className, styles.primaryLink)}
    />
  )
}
