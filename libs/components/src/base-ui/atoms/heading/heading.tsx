import React from "react"
import { styles as adobeClean } from "@watheia/base-ui.theme.fonts.clean"
import clsx from "clsx"

const makeHeading = (element?: Element) => {
  return (props: HeadingProps) => <Heading element={element} {...props} />
}

export type Element = "h1" | "h2" | "h3" | "h4" | "h5" | "h6"

export type HeadingProps = {
  /**
   * underlying html element ("h1", "h2", etc)
   */
  element?: Element
} & React.HTMLAttributes<HTMLHeadingElement>

/**
 * Base title component, to be styled by composing components.
 * May have more logic in the future.
 * @example
 * <Heading element="h3">This is a title</Heading>
 */
export function Heading({ element = "h1", className, ...props }: HeadingProps) {
  const Element = element

  return (
    <Element
      data-bit-id="watheia.base-ui/text/heading"
      className={clsx(adobeClean.serifFont, className)}
      {...props}
    />
  )
}

export const H1 = makeHeading("h1")
export const H2 = makeHeading("h2")
export const H3 = makeHeading("h3")
export const H4 = makeHeading("h4")
export const H5 = makeHeading("h5")
export const H6 = makeHeading("h6")
