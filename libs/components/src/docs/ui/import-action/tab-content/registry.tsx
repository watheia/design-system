import React from "react"
import classNames from "clsx"
import { Icon } from "@watheia/base-ui.atoms.icon"
// import { Link } from "@teambit/ui.routing.link";
import { HighlightedText } from "@watheia/docs.ui.highlighted-text"
import { links } from "@watheia/docs.molecules.documentation-links"
import { TabContent } from "../tab-content"
import styles from "./tab-content.module.scss"

export type RegistryProps = {
  registryName: string
  copyString: string
  setActive: (active: "install") => void
  Link: any
} & React.HTMLAttributes<HTMLDivElement>

export function Registry({ registryName, copyString, setActive, Link }: RegistryProps) {
  return (
    <div>
      <div className={classNames(styles.back)}>
        <div onClick={() => setActive("install")}>
          <Icon of="leftarrow" />
          <span>Back</span>
        </div>
      </div>
      <TabContent
        titleLine={
          <div>
            Configure <HighlightedText>{registryName}</HighlightedText> as a Scoped Registry
          </div>
        }
        copyString={copyString}
      >
        <Link external href={links.scopedRegistry} className={classNames(styles.link)}>
          <Icon of="information-sign" />
          <span>Learn more</span>
        </Link>
      </TabContent>
    </div>
  )
}
