import React from "react"
import { Paragraph } from "./paragraph"
import { ThemeCompositions } from "@watheia/docs.theme.theme-compositions"
import { PossibleSizes } from "@watheia/base-ui.theme.sizes"

// tODO - make text stay single line

export const ParagraphXxl = () => {
  return (
    <ThemeCompositions>
      <div>
        <Paragraph size={PossibleSizes.xxl}>xxl text</Paragraph>
      </div>
    </ThemeCompositions>
  )
}
export const ParagraphXl = () => {
  return (
    <ThemeCompositions>
      <div>
        <Paragraph size={PossibleSizes.xl}>xl text</Paragraph>
      </div>
    </ThemeCompositions>
  )
}
export const ParagraphLg = () => {
  return (
    <ThemeCompositions>
      <div>
        <Paragraph size={PossibleSizes.lg}>lg text</Paragraph>
      </div>
    </ThemeCompositions>
  )
}
export const ParagraphMd = () => {
  return (
    <ThemeCompositions>
      <div>
        <Paragraph size={PossibleSizes.md}>md text</Paragraph>
      </div>
    </ThemeCompositions>
  )
}
export const ParagraphSm = () => {
  return (
    <ThemeCompositions>
      <div>
        <Paragraph size={PossibleSizes.sm}>sm text</Paragraph>
      </div>
    </ThemeCompositions>
  )
}
export const ParagraphXs = () => {
  return (
    <ThemeCompositions>
      <div>
        <Paragraph size={PossibleSizes.xs}>xs text</Paragraph>
      </div>
    </ThemeCompositions>
  )
}

export const ParagraphXxs = () => {
  return (
    <ThemeCompositions>
      <div>
        <Paragraph size={PossibleSizes.xxs}>xxs text</Paragraph>
      </div>
    </ThemeCompositions>
  )
}
