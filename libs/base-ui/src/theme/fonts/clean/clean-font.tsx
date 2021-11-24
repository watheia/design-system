import clsx from "clsx"
import React, { HtmlHTMLAttributes } from "react"
import * as styles from "./clean-font.module.scss"

export const SansFont = ({ className, ...props }: HtmlHTMLAttributes<HTMLDivElement>) => (
  <div className={clsx(styles.sansFont, className)} {...props}></div>
)

export const SerifFont = ({ className, ...props }: HtmlHTMLAttributes<HTMLDivElement>) => (
  <div className={clsx(styles.serifFont, className)} {...props}></div>
)
