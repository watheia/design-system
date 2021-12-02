import React from "react"
import classNames from "clsx"

import * as styles from "./cta-section.module.scss"

import { H2 } from "@watheia/base-ui.atoms.heading"
import { PossibleSizes } from "@watheia/base-ui.theme.sizes"
import { Paragraph } from "@watheia/base-ui.atoms.paragraph"
import { Grid } from "@watheia/base-ui.layout.grid-component"
import { justifyItems, alignItems, text } from "@watheia/base-ui.layout.align"
import { Link } from "@watheia/base-ui.atoms.link"
import { Button } from "@watheia/base-ui.atoms.button"

type CtaProps = React.HTMLAttributes<HTMLDivElement>

/**
 * @name CtaSection
 * @description
 * Best section yet! Encourage the user to signup with a big and responsive call to action.
 * Assumes the consuming component to supply className with width and other styles.
 */

export function CtaSection(props: CtaProps) {
  const { ...rest } = props

  return (
    <Grid
      {...rest}
      colSm={2}
      className={classNames(
        props.className,
        styles.ctaSection,
        justifyItems.center,
        alignItems.center,
        text.center,
        text.sm.left
      )}
    >
      <div>
        <H2 size={PossibleSizes.xs}>Ready to try Bit?</H2>
        <Paragraph size={PossibleSizes.lg}>
          Empower your team to build faster together.
        </Paragraph>
      </div>
      <Link href="/signup">
        <Button importance="cta">Start for free</Button>
      </Link>
    </Grid>
  )
}
