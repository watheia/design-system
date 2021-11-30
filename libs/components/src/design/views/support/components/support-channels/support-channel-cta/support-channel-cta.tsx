import React, { HTMLAttributes } from "react"
import classNames from "classnames"

import { Paragraph } from "@watheia/base-ui.atoms.paragraph"
import { PossibleSizes } from "@watheia/base-ui.theme.sizes"
import { H6 } from "@watheia/base-ui.atoms.heading"

import styles from "./support-channel-cta.module.scss"
import { mutedText } from "@watheia/base-ui.atoms.muted-text"

type ChannelButtonCtaProps = {
  title?: string
  subTitle?: string
  className?: string
} & HTMLAttributes<HTMLElement>

export function ChannelButtonCta({
  title,
  subTitle,
  children,
  ...rest
}: ChannelButtonCtaProps) {
  return (
    <div className={classNames(styles.wrapper)} {...rest}>
      <H6 size={PossibleSizes.xxs}>{title}</H6>
      <Paragraph
        size={PossibleSizes.md}
        className={classNames(mutedText, styles.paragraph)}
      >
        {subTitle}
      </Paragraph>
      {children}
    </div>
  )
}
