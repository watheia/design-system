import React from "react"
import classNames from "clsx"
import * as styles from "./ol.module.scss"

export type OlProps = React.HTMLAttributes<HTMLOListElement>

export function Ol({ children, className, ...rest }: OlProps) {
  return (
    <ol {...rest} className={classNames(styles.ol, className)}>
      {children}
    </ol>
  )
}
