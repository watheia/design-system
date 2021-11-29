import React, { HTMLAttributes } from "react"
import classnames from "clsx"
import { LinkedHeading } from "@watheia/docs.ui.linked-heading"
import type { LinkedHeadingProps, Element } from "@watheia/docs.ui.linked-heading"
import { styles as clean } from "@watheia/base-ui.theme.fonts.clean"
import styles from "./create-heading.module.scss"
import { PossibleSizes } from "@watheia/base-ui.theme.sizes"

export type HeadingProps = HTMLAttributes<HTMLHeadingElement> & LinkedHeadingProps

export function createHeading(size: PossibleSizes, element?: Element) {
  return function Heading({ children, className, ...rest }: HeadingProps) {
    const isMainHeading = size === "lg" || size === "md"
    return (
      <LinkedHeading
        {...rest}
        className={classnames(
          className,
          clean.serifFont,
          styles.mdxLinkedHeading,
          isMainHeading && styles.mainHeadingStyles
        )}
        size={size}
        element={element}
      >
        {children}
      </LinkedHeading>
    )
  }
}

export const h1 = createHeading(PossibleSizes.lg, "h1")
export const h2 = createHeading(PossibleSizes.md, "h2")
export const h3 = createHeading(PossibleSizes.sm, "h3")
export const h4 = createHeading(PossibleSizes.xs, "h4")
export const h5 = createHeading(PossibleSizes.xxs, "h5")
export const h6 = createHeading(PossibleSizes.xxs, "h6")
