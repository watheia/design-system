import React, { HTMLAttributes } from "react"
import classnames from "clsx"
import { LinkedHeading } from "@watheia/docs.ui.linked-heading"
import * as styles from "./heading.module.scss"
import { PossibleSizes } from "@watheia/base-ui.theme.sizes"

export function createHeading(size: PossibleSizes) {
  return function Heading({
    children,
    className,
    ...rest
  }: HTMLAttributes<HTMLHeadingElement>) {
    const isMainHeading = size === PossibleSizes.lg || size === PossibleSizes.md

    return (
      <LinkedHeading
        {...rest}
        className={classnames(
          className,
          styles.mdxLinkedHeading,
          isMainHeading && styles.mainHeadingStyles
        )}
        size={size}
      >
        {children}
      </LinkedHeading>
    )
  }
}
