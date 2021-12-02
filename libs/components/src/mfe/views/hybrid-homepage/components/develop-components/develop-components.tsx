import React, { HTMLAttributes } from "react"

import classNames from "clsx"

import { Paragraph } from "@watheia/base-ui.atoms.paragraph"
import { PossibleSizes } from "@watheia/base-ui.theme.sizes"
import { marginCenter } from "@watheia/base-ui.layout.align"
import { textColumn } from "@watheia/base-ui.layout.page-frame"

import { H2 } from "@watheia/base-ui.atoms.heading"
import { Image } from "@watheia/base-ui.atoms.image"

import * as styles from "./develop-components.module.scss"

/**
 * @name DevelopComponents
 * @description
 * A section of static content, showing how Bit breaks down complicated websites.
 * Assumes the consuming component to supply className with width and other styles.
 */

export function DevelopComponents(props: HTMLAttributes<HTMLDivElement>) {
  return (
    <div {...props}>
      <div className={classNames(textColumn, marginCenter)}>
        <H2 size={PossibleSizes.sm}>
          Split app development to independent components and teams
        </H2>
        <Paragraph size={PossibleSizes.lg} className={classNames(styles.subtitle)}>
          Say goodbye to monolithic app development, and hello to modular applications
          composed from features built by autonomous teams working side by side.
        </Paragraph>
      </div>
      <Image alt="bit" src="homepage-bit/assets/booking-breakdown.png" fullWidth />
    </div>
  )
}
