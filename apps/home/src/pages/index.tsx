import React from "react"
import { SampleView } from "@watheia/design.views.sample"
import { ComponentHighlighter } from "@watheia/tools.tracking.component-highlighter"

export function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./home.scss file.
   */
  return (
    <ComponentHighlighter motionTracking active>
      <SampleView title="Welcome to home!" />
    </ComponentHighlighter>
  )
}

export default Index
