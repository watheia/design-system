import React from "react"
import classNames from "clsx"
import { CopyBox } from "@watheia/docs.ui.copy-box"

import styles from "./tab-content.module.scss"

export type TabContentProps = {
  titleLine: React.ReactNode
  copyString: string
  children: React.ReactNode
} & React.HTMLAttributes<HTMLDivElement>

export function TabContent({ titleLine, copyString, children, ...rest }: TabContentProps) {
  return (
    <div {...rest}>
      <div className={styles.top}>
        <div className={styles.title}>{titleLine}</div>
      </div>
      <div className={styles.middle}>
        <CopyBox>{copyString}</CopyBox>
      </div>
      <div className={classNames(styles.bottom)}>{children}</div>
    </div>
  )
}
