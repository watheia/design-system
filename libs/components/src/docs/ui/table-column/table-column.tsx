import React from "react"
import classNames from "clsx"
import styles from "./table-column.module.scss"

export type TableColumnProps = Record<string, any> & React.HTMLAttributes<HTMLDivElement>

/**
 *
 * a column to be shown in the table
 */
export function TableColumn({ children, className, ...rest }: TableColumnProps) {
  return (
    <div className={classNames(styles.tableColumn, className)} {...rest}>
      {children}
    </div>
  )
}
