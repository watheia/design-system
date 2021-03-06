import React from "react"
import classNames from "clsx"
import * as styles from "./base-table.module.scss"

export type TableProps = React.HTMLAttributes<HTMLTableElement>

export function Table({ children, className, ...rest }: TableProps) {
  return (
    <table {...rest} className={classNames(styles.table, className)}>
      {children}
    </table>
  )
}
