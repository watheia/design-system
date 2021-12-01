import React, { HTMLAttributes } from "react"
import classNames from "clsx"

import { Paragraph } from "@watheia/base-ui.atoms.paragraph"
import { PossibleSizes } from "@watheia/base-ui.theme.sizes"
import { mutedText } from "@watheia/base-ui.atoms.styled-text"

import { H2 } from "@watheia/base-ui.atoms.heading"
import { textColumn } from "@watheia/base-ui.layout.page-frame"
import { marginCenter } from "@watheia/base-ui.layout.align"

/**
 * Title and description to the Bit integrations ecosystem.
 * @name EcoSystem
 */
export const EcoSystem = (props: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div {...props}>
      <H2 size={PossibleSizes.sm}>Rooted in your ecosystem</H2>
      <Paragraph
        className={classNames(mutedText, textColumn, marginCenter)}
        size={PossibleSizes.lg}
      >
        Bit integrates into your software-building toolchain and plays with your ecosystem.
        Get advanced and custom integrations to boost delivery.
      </Paragraph>
    </div>
  )
}
