import React, { HTMLAttributes, ReactNode } from "react"
import classNames from "clsx"

import { Paragraph } from "@watheia/base-ui.atoms.paragraph"
import { PossibleSizes } from "@watheia/base-ui.theme.sizes"
import { text, marginCenter } from "@watheia/base-ui.layout.align"
// import { centerColumn } from '@watheia/base-ui.layout.page-frame';

import { H2 } from "@watheia/base-ui.atoms.heading"

import * as styles from "./support-packages.module.scss"

type SupportPackagesProps = {
  children?: ReactNode
} & HTMLAttributes<HTMLElement>

/**
 * A section with support comparison table to specify differences between plans
 * Assumes a table is passed as `children`, otherwise the entire section will not show.
 * @name SupportPackages
 */
export function SupportPackages(props: SupportPackagesProps) {
  const { children, className, ...rest } = props

  if (!children) return null
  return (
    <div className={className} {...rest}>
      <div className={classNames(styles.topSection, marginCenter, text.center)}>
        <H2 size={PossibleSizes.sm}>Simple transparent plans</H2>
        <Paragraph size={PossibleSizes.lg} className={styles.paragraph}>
          Compare our support plans below to quickly choose the right one.
        </Paragraph>
      </div>
      {children}
    </div>
  )
}
