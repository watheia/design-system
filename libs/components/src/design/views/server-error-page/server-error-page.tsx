import React from "react"
import { Image } from "@watheia/base-ui.atoms.image"
import { Link } from "@watheia/base-ui.atoms.link"
import { Icon } from "@watheia/base-ui.atoms.icon"
import { ErrorPage } from "@watheia/design.views.error-page"
import * as styles from "./server-error-page.module.scss"

type ServerErrorPageProps = React.HTMLAttributes<HTMLDivElement>

/**
 * A component that shows a server error page
 */
export function ServerErrorPage({ ...rest }: ServerErrorPageProps) {
  return (
    <ErrorPage {...rest} code={500} title="Internal server error">
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
