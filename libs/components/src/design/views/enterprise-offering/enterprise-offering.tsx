import React, { HTMLAttributes } from "react"
import classNames from "clsx"

import { centerColumn, textColumn } from "@watheia/base-ui.layout.page-frame"
import { marginCenter, text } from "@watheia/base-ui.layout.align"
import { backgrounds } from "@watheia/base-ui.surfaces.background"

import { Hero } from "./components/hero"
import { PoweringEnterprise } from "./components/powering-enterprise"
import { AdvantageCards } from "./components/advantage-cards"
import { Reliability } from "./components/reliability"
import { EcoSystem } from "./components/eco-system"
import { Integrations } from "./components/integrations"
import { ComponentAnalytics } from "./components/component-analytics"
import { ExpertSupport } from "./components/experts-support"
import { SalesCta, ContactValues } from "./components/sales-cta"
import { EnterpriseBullets } from "./components/enterprise-bullets"
import { margin } from "@watheia/base-ui.layout.spacing"
import { EnterpriseLogos } from "@watheia/design.molecules.enterprise-logos"

import styles from "./enterprise-offering.module.scss"

export type EnterpriseOfferingProps = {
  /** handles "contact us" form submission. Return a promise to show loader */
  onSubmitCta?: (values: ContactValues) => any | Promise<any>
  /** handles meeting call to action. Return a promise to show loader */
  onBookMeeting?: () => any | Promise<any>
} & HTMLAttributes<HTMLDivElement>

/**
 * A full, responsive page, detailing Bit's offering for enterprises.
 * @name EnterpriseOffering
 */
export function EnterpriseOffering(props: EnterpriseOfferingProps) {
  const { onBookMeeting, onSubmitCta, className, ...rest } = props

  return (
    <div
      {...rest}
      className={classNames(styles.enterpriseOffering, backgrounds.bedrock, className)}
    >
      <div className={classNames(styles.gradient00, styles.paddingTop130)}>
        <Hero
          onBookMeeting={onBookMeeting}
          className={classNames(centerColumn, styles.foldMargin)}
        />

        <div className={classNames(styles.curveWhite, styles.curveMargin)} />
      </div>

      <PoweringEnterprise className={classNames(centerColumn, margin[180])} />

      <EnterpriseLogos className={styles.margin160} />

      <EnterpriseBullets className={classNames(centerColumn, margin[180])} />

      <div className={styles.gradient01}>
        <AdvantageCards className={classNames(centerColumn, styles.foldMarginPlus)} />

        <div className={classNames(styles.curveWhite, styles.curveMargin)} />
      </div>

      <Reliability
        className={classNames(centerColumn, styles.foldMargin, styles.paddingTop30)}
      />

      <div className={classNames(styles.curveCloud, styles.curveMargin)} />

      <div className={classNames(styles.gradient02, styles.paddingTop30)}>
        <EcoSystem className={classNames(centerColumn, text.center)} />
        <Integrations className={classNames(margin[80])} />
        <ComponentAnalytics className={centerColumn} />
      </div>
      <div className={classNames(styles.supportCirclesBg, styles.circlesMargin)}>
        <ExpertSupport
          className={classNames(textColumn, marginCenter, styles.expertSupport)}
        />
        <SalesCta
          onSubmitCta={onSubmitCta}
          onBookMeeting={onBookMeeting}
          className={classNames(marginCenter, centerColumn)}
        />
      </div>
    </div>
  )
}
