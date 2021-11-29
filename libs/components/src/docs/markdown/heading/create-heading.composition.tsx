import React from "react"
import { ThemeCompositions } from "@watheia/docs.theme.theme-compositions"
import { PossibleSizes } from "@watheia/base-ui.theme.sizes"
import { createHeading, h1 as H1, h5 as H5 } from "./create-heading"

export const CreateH1Example = () => {
  const Heading = createHeading(PossibleSizes.lg)
  return (
    <ThemeCompositions>
      <Heading data-testid="test-create-heading">H1 size</Heading>
    </ThemeCompositions>
  )
}

export const CreateH2Example = () => {
  const Heading = createHeading(PossibleSizes.md)
  return (
    <ThemeCompositions>
      <Heading data-testid="test-create-heading">H2 size</Heading>
    </ThemeCompositions>
  )
}

export const CreateH3Example = () => {
  const Heading = createHeading(PossibleSizes.sm)
  return (
    <ThemeCompositions>
      <Heading data-testid="test-create-heading">H3 size</Heading>
    </ThemeCompositions>
  )
}

export const CreateH4Example = () => {
  const Heading = createHeading(PossibleSizes.xs)
  return (
    <ThemeCompositions>
      <Heading data-testid="test-create-heading">H4 size</Heading>
    </ThemeCompositions>
  )
}

export const CreateH5Example = () => {
  const Heading = createHeading(PossibleSizes.xxs)
  return (
    <ThemeCompositions>
      <Heading data-testid="test-create-heading">H5 size</Heading>
    </ThemeCompositions>
  )
}

export const CreateH6Example = () => {
  const Heading = createHeading(PossibleSizes.xxs)
  return (
    <ThemeCompositions>
      <Heading data-testid="test-create-heading">H6 size</Heading>
    </ThemeCompositions>
  )
}

export const LinkedH1Example = () => {
  return (
    <ThemeCompositions>
      <H1 link="link">Linked H1</H1>
    </ThemeCompositions>
  )
}

export const LinkedH5Example = () => {
  return (
    <ThemeCompositions>
      <H5 link="link">Linked H5</H5>
    </ThemeCompositions>
  )
}
