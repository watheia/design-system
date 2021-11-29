/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from "react"
import { ThemeCompositions } from "@watheia/docs.theme.theme-compositions"

import { MDXLayout } from "./mdx-layout"
// loading mdx files relies on bit's builtin mdx-loader support.
// @ts-ignore
import AllMdExample from "./example-all-md.mdx"
// @ts-ignore
import ExampleButton from "./example-button.mdx"
// @ts-ignore
import ExampleNoop from "./example-noop.mdx"
// @ts-ignore
import ExampleLink from "./example-routing-link.mdx"
import { Breakpoiunts } from "@watheia/base-ui.theme.sizes"

const padding = `var(--wa-size-200)`
const maxWidth = Breakpoiunts.XL
const margin = "auto"

export const Preview = () => {
  return (
    <ThemeCompositions style={{ padding, maxWidth, margin }}>
      <MDXLayout>
        <AllMdExample />
      </MDXLayout>
    </ThemeCompositions>
  )
}

export const ButtonDocs = () => {
  return (
    <ThemeCompositions style={{ padding, maxWidth, margin }}>
      <MDXLayout>
        <ExampleButton />
      </MDXLayout>
    </ThemeCompositions>
  )
}
export const NoopDocs = () => {
  return (
    <ThemeCompositions style={{ padding, maxWidth, margin }}>
      <MDXLayout>
        <ExampleNoop />
      </MDXLayout>
    </ThemeCompositions>
  )
}
export const LinkDocs = () => {
  return (
    <ThemeCompositions style={{ padding, maxWidth, margin }}>
      <MDXLayout>
        <ExampleLink />
      </MDXLayout>
    </ThemeCompositions>
  )
}
