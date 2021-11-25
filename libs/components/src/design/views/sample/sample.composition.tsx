import React from "react"
import { SampleView } from "./sample"
import { Theme } from "@watheia/base-ui.theme.theme-provider"

export const BasicSampleView = () => (
  <Theme>
    <SampleView title="hello from SampleView" />
  </Theme>
)
