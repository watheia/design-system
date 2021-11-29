import React from "react"
import classNames from "clsx"
import { Icon } from "@watheia/base-ui.atoms.icon"
// import { Link } from "@teambit/ui.routing.link";
import { links } from "@watheia/docs.molecules.documentation-links"
import { TabContent } from "./tab-content"
import styles from "./tab-content.module.scss"

export type ImportProps = {
  componentName: string
  copyString: string
  Link: any
} & React.HTMLAttributes<HTMLDivElement>

export function Import({ componentName, copyString, Link, ...rest }: ImportProps) {
  const importString = `bit import ${copyString}`
  return (
    <TabContent
      {...rest}
      titleLine={`Get ${componentName} and all its versions to your workspace`}
      copyString={importString}
    >
      <Link external href={links.installBit} className={classNames(styles.link)}>
        <Icon of="download" />
        <span>Install Bit on your computer</span>
      </Link>
    </TabContent>
  )
}
