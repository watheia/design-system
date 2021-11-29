import React from "react"
import { ThemeCompositions } from "@watheia/base-ui.theme.light-theme"
import { Image } from "./image"

export const ImageExample = ({ ...rest }) => (
  <ThemeCompositions>
    <Image
      src="homepage-bit/map.png"
      data-testid="test-img"
      alt="alt world"
      style={{ width: 500, margin: "auto" }}
      {...rest}
    />
  </ThemeCompositions>
)
