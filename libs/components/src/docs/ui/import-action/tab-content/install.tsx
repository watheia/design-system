import React from "react"
import classNames from "clsx"
import { Icon } from "@watheia/base-ui.atoms.icon"
import { HighlightedText } from "@watheia/docs.ui.highlighted-text"
import { TabContent } from "./tab-content"
import styles from "./tab-content.module.scss"

export type InstallProps = {
  componentName: string
  copyString: string
  setActive: (active: "registry") => void
  registryName: string
} & React.HTMLAttributes<HTMLDivElement>

export function Install({
  componentName,
  copyString,
  setActive,
  registryName,
  ...rest
}: InstallProps) {
  return (
    <TabContent
      {...rest}
      titleLine={`Install ${componentName} with a package manager`}
      copyString={copyString}
    >
      <div
        className={classNames(styles.link, styles.installLink)}
        onClick={() => setActive("registry")}
      >
        <div>
          <Icon of="settings" />
          <span>
            Configure <HighlightedText>{registryName}</HighlightedText> as a Scoped Registry
          </span>
        </div>
        <Icon of="arrow_right" />
      </div>
    </TabContent>
  )
}
