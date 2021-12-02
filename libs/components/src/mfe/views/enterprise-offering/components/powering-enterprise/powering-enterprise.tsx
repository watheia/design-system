import React, { HTMLAttributes } from "react"
import classNames from "clsx"

import { textColumn } from "@watheia/base-ui.layout.page-frame"
import { Paragraph } from "@watheia/base-ui.atoms.paragraph"
import { PossibleSizes } from "@watheia/base-ui.theme.sizes"
import { colorPalette } from "@watheia/base-ui.theme.accent-color"
import { text } from "@watheia/base-ui.layout.align"
import { StyledText, mutedText, themedText } from "@watheia/base-ui.atoms.styled-text"

import { H2 } from "@watheia/base-ui.atoms.heading"

import * as styles from "./powering-enterprise.module.scss"

/**
 * A section showing a summary of the Bit enterprise solution.
 * @name PoweringEnterprise
 */
export const PoweringEnterprise = (props: HTMLAttributes<HTMLDivElement>) => (
  <div
    {...props}
    className={classNames(
      props.className,
      text.center,
      text.l.left,
      styles.poweringEnterprise
    )}
  >
    <CrunchTheNumbers />

    <div className={styles.separator}></div>

    <div className={textColumn}>
      <H2 size={PossibleSizes.sm}>Powering application delivery at scale</H2>
      <Paragraph size={PossibleSizes.xl} className={mutedText}>
        Bit enterprise lets you build and ship modern web applications at scale. It empowers
        global teams to build faster and better with components.
      </Paragraph>
    </div>
  </div>
)

function CrunchTheNumbers() {
  return (
    <div className={classNames(text.center, styles.crunchTheNumbers)}>
      <div>
        <div className={styles.emphasized}>100%</div>
        <StyledText variant="muted">Component reuse</StyledText>
      </div>
      <div className={colorPalette.process}>
        <div className={classNames(themedText, styles.emphasized)}>10x</div>
        <StyledText variant="muted">More releases</StyledText>
      </div>
      <div className={colorPalette.primary}>
        <div className={classNames(themedText, styles.emphasized)}>90%</div>
        <StyledText variant="muted">Faster integrations</StyledText>
      </div>
      <div className={colorPalette.complementary}>
        <div className={classNames(themedText, styles.xtraEmpthasized)}>∞</div>
        <StyledText variant="muted">Scale</StyledText>
      </div>
    </div>
  )
}
