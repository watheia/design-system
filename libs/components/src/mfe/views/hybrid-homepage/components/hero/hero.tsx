import React, { HTMLAttributes, ReactNode } from "react"
import classNames from "clsx"
import Typewriter from "typewriter-effect"

import { PossibleSizes } from "@watheia/base-ui.theme.sizes"
import { text, marginCenter } from "@watheia/base-ui.layout.align"
import { Paragraph } from "@watheia/base-ui.atoms.paragraph"
import { Grid } from "@watheia/base-ui.layout.grid-component"
import { textColumn } from "@watheia/base-ui.layout.page-frame"

import { H1 } from "@watheia/base-ui.atoms.heading"
import { IconLine } from "@watheia/design.molecules.icon-line"
import { Link } from "@watheia/base-ui.atoms.link"
import { Image } from "@watheia/base-ui.atoms.image"
import { Button } from "@watheia/base-ui.atoms.button"
import * as styles from "./hero.module.scss"

const iconsArray = [
  "logo-react",
  "logo-vue",
  "logo-angular",
  "logo-web-components",
  "logo-nodejs",
  "logo-ts",
  "logo-js"
]

const typeWriterArray = [
  "build with components",
  "build micro frontends",
  "build design systems",
  "release features faster",
  "build web apps together"
]

type ReuseLandingProps = {
  /**
   * Placeholder for content, at the bottom of this section
   */
  mainCta?: ReactNode
} & HTMLAttributes<HTMLDivElement>

/**
 * @name Hero
 * @description
 * The Main and first section the user sees as he enters the page.
 * Assumes a dark purplish background behind it.
 */

export function Hero(props: ReuseLandingProps) {
  return (
    <div {...props}>
      <Grid colL={2} className={classNames(styles.mainGrid, text.center, text.l.left)}>
        <div>
          <div>
            <H1 size={PossibleSizes.sm} className={styles.headline}>
              How the best teams
              <br />
              <Typewriter
                onInit={() => void 0}
                options={{
                  strings: typeWriterArray,
                  autoStart: true,
                  loop: true,
                  delay: 50,
                  deleteSpeed: 50
                }}
              />
            </H1>
            <Paragraph
              size={PossibleSizes.lg}
              className={classNames(styles.paragraph, textColumn, marginCenter)}
            >
              Bit is the platform for component-driven development. Forget monoliths and
              distribute app development to components. Enjoy better scale, speed, and
              consistency. Join 200k+ developers and start free.
            </Paragraph>
          </div>

          <Paragraph
            size={PossibleSizes.sm}
            element="div"
            className={classNames(styles.buttons)}
          >
            <Link href="/signup">
              <Button importance="cta" elevation="medium">
                Get Started
              </Button>
            </Link>
            <div className={styles.spacer} />
            <Link href="/contact-sales">
              <Button elevation="medium">Get a Demo</Button>
            </Link>
          </Paragraph>
          <IconLine icons={iconsArray} className={styles.icons} />
        </div>

        <Image
          src="homepage-bit/process-2.svg"
          className={marginCenter}
          alt="illustration"
          fullWidth
        />
      </Grid>
    </div>
  )
}
