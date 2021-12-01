import React, { HTMLAttributes } from "react"
import classNames from "clsx"

import { PossibleSizes } from "@watheia/base-ui.theme.sizes"

import { textColumn } from "@watheia/base-ui.layout.page-frame"
import { marginCenter } from "@watheia/base-ui.layout.align"

import { CommentCarousel } from "@watheia/design.organisms.comment-carousel"
import { testimonials } from "@watheia/design.data.testimonials"
import { H2 } from "@watheia/base-ui.atoms.heading"

import * as styles from "./carouselSection.module.scss"

/**
 * @name CarouselSection
 * @description
 * A section showing real users testimonials about the product.
 * Using **CommentCarousel** (react-slick), and content from **bit-testimonials**.
 * Assumes the consuming component to supply className with width and other styles.
 */
export function CarouselSection(props: HTMLAttributes<HTMLDivElement>) {
  return (
    <div {...props} className={props.className}>
      <div className={classNames(textColumn, marginCenter)}>
        <H2 size={PossibleSizes.sm} className={styles.heading}>
          Trusted by over 200,000 developers
        </H2>
      </div>
      <CommentCarousel content={testimonials} />
    </div>
  )
}
