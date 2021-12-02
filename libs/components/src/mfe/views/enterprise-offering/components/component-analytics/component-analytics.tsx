import { H2 } from "@watheia/base-ui.atoms.heading"
import { Icon } from "@watheia/base-ui.atoms.icon"
import { Image } from "@watheia/base-ui.atoms.image"
import { Paragraph } from "@watheia/base-ui.atoms.paragraph"
import { mutedText, themedText } from "@watheia/base-ui.atoms.styled-text"
import { alignItems } from "@watheia/base-ui.layout.align"
import { Grid } from "@watheia/base-ui.layout.grid-component"
import { margin } from "@watheia/base-ui.layout.spacing"
import { colorPalette } from "@watheia/base-ui.theme.accent-color"
import { PossibleSizes } from "@watheia/base-ui.theme.sizes"
import clsx from "clsx"
import React, { HTMLAttributes } from "react"
import * as styles from "./component-analytics.module.scss"

/**
 * A section showing Bit's analytical abilities.
 * It features a large image extending outside the section, which gets nicely cut in lower resolutions
 * @name ComponentAnalytics
 */
export function ComponentAnalytics(props: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={styles.scrollPreventer}>
      <Grid
        {...props}
        className={clsx(alignItems.center, props.className, styles.customGrid)}
      >
        <div>
          <H2 size={PossibleSizes.sm}>Advanced component usage analytics</H2>
          <Paragraph className={clsx(mutedText, margin[30])} size={PossibleSizes.lg}>
            Track and learn exactly which components are used, in which version, in which
            project. Take control over components across the enterprise codebase.
          </Paragraph>

          <ul className={clsx(colorPalette.success, styles.list)}>
            <li>
              <Icon of="billing-checkmark" className={themedText} />
              Track component usage across projects and teams
            </li>
            <li>
              <Icon of="billing-checkmark" className={themedText} />
              Drive and monitor the adoption of changes
            </li>
            <li>
              <Icon of="billing-checkmark" className={themedText} />
              Verify and distribute best-standard components
            </li>
            <li>
              <Icon of="billing-checkmark" className={themedText} />
              Ensure visual consistency
            </li>
          </ul>
        </div>

        <div className={styles.imgContainer}>
          <Image
            src="enterprise-offering-v1/6-analytics/graphs-enterprise.svg?v=4"
            alt="analytics"
          />
        </div>
      </Grid>
    </div>
  )
}
