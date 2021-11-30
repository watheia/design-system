import React from "react"
import { Icon } from "@watheia/base-ui.atoms.icon"
import { ErrorPage } from "@watheia/design.views.error-page"
import { Image } from "@watheia/base-ui.atoms.image"
import { Link } from "@watheia/base-ui.atoms.link"
import * as styles from "./not-found-page.module.scss"

type NotFoundPageProps = React.HTMLAttributes<HTMLDivElement>

/**
 * A component that shows a 404 error page
 */
export function NotFoundPage({ className, children, ...rest }: NotFoundPageProps) {
  return (
    <ErrorPage {...rest} code={404} title="Page not found">
      <div className={styles.iconLine}>
        <Link href="https://join.slack.com/t/bit-dev-community/shared_invite/enQtNzM2NzQ3MTQzMTg3LWI2YmFmZjQwMTkxNmFmNTVkYzU2MGI2YjgwMmJlZDdkNWVhOGIzZDFlYjg4MGRmOTM4ODAxNTIxMTMwNWVhMzg">
          <Icon of="slack" className={styles.slack} />
        </Link>
        <Link href="https://github.com/watheia/design-system">
          <Icon of="github-logo" className={styles.github} />
        </Link>
        <Link href="https://docs.bit.dev/docs/quick-start">
          <Image alt="bit-logo" className={styles.logo} src="bit-logo.svg" />
        </Link>
      </div>
    </ErrorPage>
  )
}
