import React from "react"
import { HybridHomepage } from "@watheia/design.views.hybrid-homepage"
import { ComponentHighlighter } from "@watheia/tools.tracking.component-highlighter"

export function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./home.scss file.
   */
  return (
    <ComponentHighlighter motionTracking active>
      <HybridHomepage />
    </ComponentHighlighter>
  )
}

export default Index
