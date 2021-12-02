import React, { HTMLAttributes, ReactNode } from "react"
import classNames from "clsx"

import { centerColumn } from "@watheia/base-ui.layout.page-frame"
import { backgrounds } from "@watheia/base-ui.surfaces.background"

import { Hero } from "./components/hero"

import * as styles from "./support.module.scss"
import { SupportDevelopers } from "./components/support-developers"
import { SupportChannels } from "./components/support-channels"
import { GlobalEnterprise } from "./components/global-enterprise"
import { SupportCta } from "./components/support-cta"
import { SupportPackages } from "./components/support-packages"

export type SupportPageProps = {
  table?: ReactNode
} & HTMLAttributes<HTMLDivElement>

/**
 * A full, responsive page, detailing Bit's offering for support.
 * @name SupportPage
 */
export function SupportPage({ table, className, ...rest }: SupportPageProps) {
  return (
    <div
      className={classNames(styles.supportPageStyles, backgrounds.bedrock, className)}
      {...rest}
    >
      <div className={classNames(styles.supportCirclesBg)}>
        <Hero className={classNames(centerColumn, styles.foldMargin)} />
      </div>
      <SupportDevelopers className={classNames(centerColumn, styles.marginBottom150)} />
      <SupportChannels className={classNames(centerColumn, styles.marginBottom150)} />
      <SupportPackages className={classNames(centerColumn, styles.marginBottom150)}>
        {table}
      </SupportPackages>
      <GlobalEnterprise className={classNames(centerColumn, styles.marginBottom150)} />
      <SupportCta className={classNames(centerColumn, styles.supportCta)} />
    </div>
  )
}
