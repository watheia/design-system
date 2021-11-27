import React from "react"
import * as styles from "./text-separator.module.scss"
import clsx from "clsx"

/**
 * Separating line spanning the whole line, with room for text. Behaves like a regular `div` element.<br/>
 * Currently, there is no way to customize the border-style.
 *
 * Border color is applied from css variable `--wa-border-color`
 * @name TextSeparator
 */
export function TextSeparator(props: React.HTMLAttributes<HTMLDivElement>) {
  const { children, className, ...rest } = props

  return (
    <div {...rest} className={clsx(styles.textSeparator, props.className)}>
      <div className={styles.line} />
      {children}
      <div className={styles.line} />
    </div>
  )
}
