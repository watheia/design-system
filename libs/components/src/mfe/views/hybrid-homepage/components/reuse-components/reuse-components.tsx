import React, { HTMLAttributes } from "react"
import classNames from "clsx"

import * as styles from "./reuse-components.module.scss"

import { fourWayGrid } from "@watheia/base-ui.layout.grid-presets.four-way-grid"

import { PossibleSizes } from "@watheia/base-ui.theme.sizes"
import { Paragraph } from "@watheia/base-ui.atoms.paragraph"
import { text, alignItems, marginCenter } from "@watheia/base-ui.layout.align"
import { Grid } from "@watheia/base-ui.layout.grid-component"
import { textColumn } from "@watheia/base-ui.layout.page-frame"

import { Image } from "@watheia/base-ui.atoms.image"
import { H2, H3 } from "@watheia/base-ui.atoms.heading"

/**
 * @name ReuseComponents
 * @description
 * A static section, showing how bit can be used to share and sync code between projects and people.
 * Assumes the consuming component to supply className with width and other styles.
 */
export function ReuseComponents(props: HTMLAttributes<HTMLDivElement>) {
  return (
    <div {...props} className={classNames(props.className, text.center)}>
      <div className={classNames(textColumn, marginCenter)}>
        <H2 size={PossibleSizes.sm}>Host and share components in the cloud</H2>
        <Paragraph size={PossibleSizes.xl} className={classNames(styles.subtitle)}>
          Build better together with a reusable component marketplace for your organization.
          Collaborate and integrate to speed up delivery.
        </Paragraph>
      </div>

      <Grid
        className={classNames(text.center, text.sm.left, fourWayGrid, alignItems.center)}
      >
        <div className={styles.text}>
          <H3 size={PossibleSizes.xs}>Find and use any component</H3>
          <Paragraph>
            Install components directly from the bit.dev registry using your favorite
            package manager, or bring your own registry or Artifactory. Your choice.
          </Paragraph>
        </div>
        <Image
          alt="multi packagers"
          src="homepage-bit/reuse-page/packagers.png"
          fullWidth
        />

        <div className={styles.text}>
          <H3 size={PossibleSizes.xs}>Access source-code and contribute changes</H3>
          <Paragraph>
            Clone components into your local dev workspace and contribute changes without
            painful context switching.
          </Paragraph>
        </div>
        <Image alt="cloud code" src="homepage-bit/reuse-page/cloud-code.png" fullWidth />
        <div className={styles.text}>
          <H3 size={PossibleSizes.xs}>Central component marketplace</H3>
          <Paragraph>
            Connect all teams and projects with your component system to make sure your
            entire organization builds and ships together the same way.
          </Paragraph>
        </div>
        <Image
          alt="cloud components"
          src="homepage-bit/reuse-page/cloud-scope.png"
          fullWidth
        />

        <div className={styles.text}>
          <H3 size={PossibleSizes.xs}>Drive collaboration and adoption for components</H3>
          <Paragraph>
            Bit makes it easy to create, adopt, and collaborate on components. Democratize
            innovation and empower product teams to build together.
          </Paragraph>
        </div>
        <Image
          alt="components community"
          src="homepage-bit/reuse-page/component-community.png"
          fullWidth
        />
      </Grid>
    </div>
  )
}
