import React from "react"
import { ThemeCompositions } from "@watheia/base-ui.theme.light-theme"
import { CarouselSection } from "./carouselSection"

export const CarouselSectionExample = () => (
  <ThemeCompositions
    style={{ display: "block", width: 1440, maxWidth: "100vw", minHeight: 410 }}
  >
    <CarouselSection data-testid="test-carousel" />
  </ThemeCompositions>
)
