import React from "react"
import classNames from "clsx"
import * as styles from "./sup.module.scss"

export type SupProps = React.HTMLAttributes<HTMLSpanElement>

export function Sup({ children, className, ...rest }: SupProps) {
  return (
    <sup {...rest} className={classNames(styles.sup, className)}>
      {children}
    </sup>
  )
}
