import React from "react"
import clsx from "clsx"

import { PossibleSizes } from "@watheia/base-ui.theme.sizes"

import * as sizeStyles from "./heading-sizes.module.scss"
import * as marginStyles from "./heading-margins.module.scss"
import { styles as font } from "@watheia/base-ui.theme.fonts.clean"
import * as styles from "./heading.module.scss"

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
export function Heading({ element = "h1", className, ...props }: HeaderProps) {
  const Element = element
  return (
    <Element
      data-bit-id="watheia.base-ui/atoms/heading"
      className={clsx(font.serifFont, className)}
      {...props}
    />
  )
}

export type HeaderProps = {
  /** font-size for the header */
  size?: PossibleSizes
} & HeadingProps

export function H1(props: HeaderProps) {
  return (
    <Heading
      {...props}
      element="h1"
      className={clsx(
        styles.h1,
        marginStyles.h1,
        sizeStyles[props.size || "xl"],
        props.className
      )}
    />
  )
}
export function H2(props: HeaderProps) {
  return (
    <Heading
      element="h2"
      {...props}
      className={clsx(
        styles.h2,
        marginStyles.h2,
        sizeStyles[props.size || "lg"],
        font.serifFont,
        props.className
      )}
    />
  )
}
export function H3(props: HeaderProps) {
  return (
    <Heading
      element="h3"
      {...props}
      className={clsx(
        styles.h3,
        marginStyles.h3,
        sizeStyles[props.size || "md"],
        font.serifFont,
        props.className
      )}
    />
  )
}
export function H4(props: HeaderProps) {
  return (
    <Heading
      element="h4"
      {...props}
      className={clsx(
        styles.h4,
        marginStyles.h4,
        sizeStyles[props.size || "sm"],
        font.serifFont,
        props.className
      )}
    />
  )
}
export function H5(props: HeaderProps) {
  return (
    <Heading
      element="h5"
      {...props}
      className={clsx(
        styles.h5,
        marginStyles.h5,
        sizeStyles[props.size || "xs"],
        font.serifFont,
        props.className
      )}
    />
  )
}
export function H6({ element = "h6", ...props }: HeaderProps) {
  return (
    <Heading
      element="h6"
      {...props}
      className={clsx(
        styles.h6,
        marginStyles.h6,
        sizeStyles[props.size || "xxs"],
        font.serifFont,
        props.className
      )}
    />
  )
}
