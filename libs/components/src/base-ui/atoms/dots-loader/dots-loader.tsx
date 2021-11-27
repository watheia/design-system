import React from "react"
import clsx from "clsx"

import * as styles from "./dots-loader.module.scss"

type LoaderProps = React.HTMLAttributes<HTMLSpanElement>

export function DotsLoader({ className, ...rest }: LoaderProps) {
  return (
    <span {...rest} className={clsx(className, styles.dotsLoader)}>
      <span>●</span>
      <span>●</span>
      <span>●</span>
    </span>
  )
}
