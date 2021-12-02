import React, { HTMLAttributes } from "react"
import classNames from "clsx"

import { Paragraph } from "@watheia/base-ui.atoms.paragraph"
import { themedText } from "@watheia/base-ui.atoms.styled-text"
import { PossibleSizes } from "@watheia/base-ui.theme.sizes"
import { text, marginCenter } from "@watheia/base-ui.layout.align"
import { Grid } from "@watheia/base-ui.layout.grid-component"

import { Button } from "@watheia/base-ui.atoms.button"
import { H1 } from "@watheia/base-ui.atoms.heading"
import { Image } from "@watheia/base-ui.atoms.image"

import * as styles from "./hero.module.scss"

type HeroProps = {
  /** handles 'book meeting' call to action */
  onBookMeeting?: () => any | Promise<any>
} & HTMLAttributes<HTMLDivElement>

/**
 * Opening section for the Enterprise offering page.
 * @name EcoSystem
 */
export function Hero(props: HeroProps) {
  const { onBookMeeting, ...rest } = props

  return (
    <Grid
      colL={2}
      {...rest}
      className={classNames(props.className, text.center, text.l.left, styles.mainGrid)}
    >
      <div className={classNames(styles.content)}>
        <H1 size={PossibleSizes.sm} className={themedText}>
          The enterprise component platform
        </H1>
        <Paragraph size={PossibleSizes.lg} className={styles.paragraph}>
          Let your components drive web application delivery at global scale. Enjoy
          world-class performance, security and support every step of the way.
        </Paragraph>

        <div className={styles.buttons}>
          <a href="/contact-sales?redirectUri=%2Fenterprise">
            <Button importance="cta">Talk to Us</Button>
          </a>
          <div className={styles.spacer} />
          <Button onClick={props.onBookMeeting}>Book a Demo</Button>
        </div>
      </div>
      <Image
        src="enterprise-offering-v1/1-hero-section/hero-enterprise.svg"
        alt="compartmentalized corporate ui"
        className={classNames(marginCenter, styles.image)}
      />
    </Grid>
  )
}
