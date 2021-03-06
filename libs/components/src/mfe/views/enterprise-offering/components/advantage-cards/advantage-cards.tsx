import { Button } from "@watheia/base-ui.atoms.button"
import { H2, H4 } from "@watheia/base-ui.atoms.heading"
import { Icon } from "@watheia/base-ui.atoms.icon"
import { Link } from "@watheia/base-ui.atoms.link"
import { Paragraph } from "@watheia/base-ui.atoms.paragraph"
import { mutedText, themedText } from "@watheia/base-ui.atoms.styled-text"
import { fullWidth, marginCenter, text } from "@watheia/base-ui.layout.align"
import { Grid } from "@watheia/base-ui.layout.grid-component"
import { textColumn } from "@watheia/base-ui.layout.page-frame"
import { Card } from "@watheia/base-ui.surfaces.card"
import { colorPalette } from "@watheia/base-ui.theme.accent-color"
import { PossibleSizes } from "@watheia/base-ui.theme.sizes"
import clsx from "clsx"
import React, { HTMLAttributes } from "react"
import * as styles from "./advantage-cards.module.scss"

/**
 * A section showing the main advantages of the Bit enterprise solution.
 * Each card has a call to action pointing to the /contact-sales page, with a custom subject and return url.
 * @name AdvantageCards
 */
export const AdvantageCards = (props: HTMLAttributes<HTMLDivElement>) => (
  <div {...props} className={clsx(props.className)}>
    <div className={clsx(textColumn, marginCenter, text.center)}>
      <H2 size={PossibleSizes.sm}>Bit enterprise</H2>

      <Paragraph size={PossibleSizes.lg} className={clsx(styles.paragraph, mutedText)}>
        Everything you need to develop and ship component-driven applications at enterprise
        scale and standards.
      </Paragraph>
    </div>

    <Cards />
  </div>
)

const subjects = {
  security: encodeURIComponent("security and control"),
  support: encodeURIComponent("dedicated support"),
  build: encodeURIComponent("power to build"),
  experts: encodeURIComponent("expert consultation")
}

const redirects = {
  security: encodeURIComponent("/enterprise#contact-security"),
  support: encodeURIComponent("/enterprise#contact-support"),
  build: encodeURIComponent("/enterprise#contact-build"),
  experts: encodeURIComponent("/enterprise#contact-experts")
}

function Cards() {
  return (
    <Grid colMd={2} className={clsx(styles.particlesBg, styles.grid)}>
      <Card id="contact-security" className={clsx(colorPalette.neutralHeavy, styles.card)}>
        <H4 size={PossibleSizes.xs} className={themedText}>
          Security and control
        </H4>
        <Paragraph size={PossibleSizes.sm} className={styles.subtitle}>
          Keep your source-code and information secure with the highest standards. Get
          everything you need to stay in control.
        </Paragraph>

        <ul className={styles.bullets}>
          <li>
            <Icon of="billing-checkmark" className={themedText} /> SSO SAML
          </li>
          <li>
            <Icon of="billing-checkmark" className={themedText} /> SOC2 Certified
          </li>
          <li>
            <Icon of="billing-checkmark" className={themedText} /> Audit logs
          </li>
          <li>
            <Icon of="billing-checkmark" className={themedText} /> Source-code encryption at
            rest
          </li>
          <li>
            <Icon of="billing-checkmark" className={themedText} /> Role-based permissions
            control
          </li>
          <li>
            <Icon of="billing-checkmark" className={themedText} /> Multiple-backups for
            everything
          </li>
          <li>
            <Icon of="billing-checkmark" className={themedText} /> 99.9% Uptime SLA
          </li>
        </ul>
        <Link
          href={`/contact-sales?redirectUri=${redirects.security}&subject=${subjects.security}`}
        >
          <Button importance="cta" className={fullWidth}>
            Contact Sales
          </Button>
        </Link>
      </Card>

      <Card id="contact-support" className={clsx(colorPalette.process, styles.card)}>
        <H4 size={PossibleSizes.xs} className={themedText}>
          Dedicated support
        </H4>
        <Paragraph size={PossibleSizes.sm} className={styles.subtitle}>
          Enjoy personalized support from core Bit experts and engineers, that will make
          sure your delivery is never slowed down.
        </Paragraph>

        <ul className={styles.bullets}>
          <li>
            <Icon of="billing-checkmark" className={themedText} /> Dedicated, named Bit
            experts
          </li>
          <li>
            <Icon of="billing-checkmark" className={themedText} /> Engineering-level support
            by core maintainers
          </li>
          <li>
            <Icon of="billing-checkmark" className={themedText} /> Joint Slack
          </li>
          <li>
            <Icon of="billing-checkmark" className={themedText} /> Response-time SLA
          </li>
          <li>
            <Icon of="billing-checkmark" className={themedText} /> Escalation paths via
            phone, chat and email
          </li>
        </ul>
        <Link
          href={`/contact-sales?redirectUri=${redirects.support}&subject=${subjects.support}`}
        >
          <Button importance="cta" className={fullWidth}>
            Contact Sales
          </Button>
        </Link>
      </Card>

      <Card id="contact-build" className={clsx(colorPalette.primary, styles.card)}>
        <H4 size={PossibleSizes.xs} className={themedText}>
          Power to build
        </H4>
        <Paragraph size={PossibleSizes.sm} className={styles.subtitle}>
          Get the resources and performance to build at global scale. Integrate Bit with
          your toolchain to boost delivery and time to market.
        </Paragraph>

        <ul className={styles.bullets}>
          <li>
            <Icon of="billing-checkmark" className={themedText} /> Auto-scaling concurrent
            builds
          </li>
          <li>
            <Icon of="billing-checkmark" className={themedText} /> CI minutes that never
            block you
          </li>
          <li>
            <Icon of="billing-checkmark" className={themedText} /> Webhook integrations
          </li>
          <li>
            <Icon of="billing-checkmark" className={themedText} /> Advanced GitHub and Slack
            integrations
          </li>
          <li>
            <Icon of="billing-checkmark" className={themedText} /> Custom extensions and
            integrations
          </li>
        </ul>
        <Link
          href={`/contact-sales?redirectUri=${redirects.build}&subject=${subjects.build}`}
        >
          <Button importance="cta" className={fullWidth}>
            Contact Sales
          </Button>
        </Link>
      </Card>

      <Card id="contact-experts" className={clsx(colorPalette.action, styles.card)}>
        <H4 size={PossibleSizes.xs} className={themedText}>
          Expert consultation
        </H4>
        <Paragraph size={PossibleSizes.sm} className={styles.subtitle}>
          Our architects help the world???s best teams drive development through components.
          We???d love to do the same for you.
        </Paragraph>
        <ul className={styles.bullets}>
          <li>
            <Icon of="billing-checkmark" className={themedText} /> Industry-experts
            architectural review
          </li>
          <li>
            <Icon of="billing-checkmark" className={themedText} /> Implementing best
            practices
          </li>
          <li>
            <Icon of="billing-checkmark" className={themedText} /> Personalized workflows
          </li>
          <li>
            <Icon of="billing-checkmark" className={themedText} /> Hands-on A-Z onboarding
          </li>
          <li>
            <Icon of="billing-checkmark" className={themedText} /> Training for teams and
            leadership
          </li>
        </ul>
        <Link
          href={`/contact-sales?redirectUri=${redirects.experts}&subject=${subjects.experts}`}
        >
          <Button importance="cta" className={fullWidth}>
            Contact Sales
          </Button>
        </Link>
      </Card>
    </Grid>
  )
}
