import React from "react"
import { SansFont, SerifFont } from "./clean-font"

export const DefaultFontExample = () => <p>Hello, SansFont!</p>

export const SansFontExample = () => (
  <SansFont>
    <p>Hello, SansFont!</p>
  </SansFont>
)

export const SerifFontExample = () => (
  <SerifFont>
    <p>Hello, SerifFont!</p>
  </SerifFont>
)
