import React from "react"
import classNames from "clsx"
import styles from "./styled-text.module.scss"

export type StyledTextProps = {
  variant?: "body" | "muted" | "lead" | "detail"
} & React.HTMLAttributes<HTMLSpanElement>

/**
 * Text with muted (gray) color. Behaves like a regular *span* element.<br/>
 * Applies text color with css variable `--wa-text-color-light`
 * @name StyledText
 */
export function StyledText({ variant = "body", className, ...props }: StyledTextProps) {
  return <span {...props} className={classNames(styles[variant], className)} />
}

/**
 * Pure css class name, colors text as muted (gray).<br/>
 * Use this directly as a class name without creating a DOM element<br/>
 *
 * Colors derives from css variable `--wa-text-color-light`
 * @name mutedText
 */
export const mutedText = styles.muted
