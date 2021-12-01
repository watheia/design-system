import React from "react"
import classNames from "clsx"
import styles from "./drawer.module.scss"

export type DrawerPlaceholderProps = React.HTMLAttributes<HTMLDivElement>

export function DefaultPlaceholder(props: DrawerPlaceholderProps) {
  return <div {...props} className={classNames(props.className, styles.placeholder)} />
}
