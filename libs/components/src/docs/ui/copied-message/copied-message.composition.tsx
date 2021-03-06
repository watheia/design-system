import React, { useState } from "react"
import { CopiedMessage } from "./copied-message"
import { ThemeCompositions } from "@watheia/docs.theme.theme-compositions"
import { Icon } from "@watheia/base-ui.atoms.icon"
import { H5 } from "@watheia/docs.ui.heading"

export const CopiedMessageExample = () => {
  return (
    <ThemeCompositions style={{ position: "relative", paddingLeft: 50, height: 20 }}>
      <CopiedMessage show={true} />
    </ThemeCompositions>
  )
}

export const HiddenCopiedMessageExample = () => {
  const [isCopied, setIsCopied] = useState(false)

  const handleClick = () => {
    setIsCopied(true)
    setTimeout(() => setIsCopied(false), 2000)
  }
  return (
    <ThemeCompositions>
      <div style={{ position: "relative" }}>
        <H5>Click icon to copy</H5>
        <Icon
          onClick={handleClick}
          of="copy-cmp"
          style={{ marginRight: 60, cursor: "pointer" }}
        />
        <CopiedMessage show={isCopied} />
      </div>
    </ThemeCompositions>
  )
}
