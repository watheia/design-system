import React from "react"
import classNames from "clsx"
import { H1 } from "@watheia/docs.ui.heading"
import * as styles from "./error-page.module.scss"
import { staticStorageUrl } from "@watheia/tools.constants.storage"

type ErrorPageProps = {
  /**
   * specifies the type of error that was encountered
   */
  code: number
  /**
   * title to be shown above the error image
   */
  title?: string
} & React.HTMLAttributes<HTMLDivElement>

/**
 * A component that shows an error page according to the error code
 */
export function ErrorPage({ code, title, className, children, ...rest }: ErrorPageProps) {
  return (
    <div {...rest} className={classNames(styles.errorPage, className)}>
      <H1 className={styles.title}>{title}</H1>
      <img
        alt="error 404"
        className={styles.img}
        src={`${staticStorageUrl}/harmony/${code}.svg`}
      />
      {children}
    </div>
  )
}
