import React from "react"
import { SupportPage } from "@watheia/mfe.views.support"
import { ComponentHighlighter } from "@watheia/tools.tracking.component-highlighter"

export function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./home.scss file.
   */
  return (
    <ComponentHighlighter motionTracking active>
      <SupportPage />
    </ComponentHighlighter>
  )
}

export default Index
