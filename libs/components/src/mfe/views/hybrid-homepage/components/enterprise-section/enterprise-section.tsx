import React, { HTMLAttributes } from "react"
import classNames from "clsx"

import { PossibleSizes } from "@watheia/base-ui.theme.sizes"
import { Paragraph } from "@watheia/base-ui.atoms.paragraph"

import { text, alignItems } from "@watheia/base-ui.layout.align"
import { Grid } from "@watheia/base-ui.layout.grid-component"
import { colSpanMd } from "@watheia/base-ui.layout.col-span"

import { Image } from "@watheia/base-ui.atoms.image"
import { H2 } from "@watheia/base-ui.atoms.heading"
import { Icon } from "@watheia/base-ui.atoms.icon"
import { Link } from "@watheia/base-ui.atoms.link"
import { Button } from "@watheia/base-ui.atoms.button"

import * as styles from "./enterprise-section.module.scss"

/**
 * @name EnterpriseSection
 * @description
 * A section of static content, presenting Bit's cloud platform.
 * Assumes the consuming component to supply className with width and other styles.
 */

export function EnterpriseSection(props: HTMLAttributes<HTMLDivElement>) {
  return (
    <div {...props} className={classNames(text.center, props.className)}>
      <Grid
        col={1}
        colMd={12}
        className={classNames(text.left, alignItems.center, styles.content)}
      >
        <div className={colSpanMd[7]}>
          <H2 size={PossibleSizes.sm}>
            Join the world's best teams on the enterprise component cloud
          </H2>
          <Paragraph size={PossibleSizes.lg} className={styles.paragraph}>
            Empower teams in your organization to deliver features and innovate autonomously
            while continuously collaborating on each other's components and building
            world-class products together.
          </Paragraph>
          <Link href="/contact-sales">
            <Button className={styles.contactButton} importance="cta" elevation="medium">
              Contact Sales
              <Icon of="right_arrow" className={styles.linkArrow} />
            </Button>
          </Link>
        </div>
        <div className={colSpanMd[5]}>
          <Image
            fullWidth
            alt="cloud components"
            src="homepage-bit/reuse-page/cloud-components.png"
          />
        </div>
      </Grid>
    </div>
  )
}
