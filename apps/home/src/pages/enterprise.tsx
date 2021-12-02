import React from "react"
import { EnterpriseOffering } from "@watheia/mfe.views.enterprise-offering"
import { ComponentHighlighter } from "@watheia/tools.tracking.component-highlighter"

export function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./home.scss file.
   */
  return (
    <ComponentHighlighter motionTracking active>
      <EnterpriseOffering />
    </ComponentHighlighter>
  )
}

export default Index
