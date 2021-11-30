import React from "react"
import { ThemeCompositions } from "@watheia/base-ui.theme.light-theme"
import { Testimonial } from "./testimonial"

export const TestimonialExample = () => (
  <ThemeCompositions>
    <Testimonial
      active
      data={{
        name: "Barbra",
        description: "head of barbering",
        content: "Great scissors!",
        avatar: "https://static.bit.dev/bit-logo.png"
      }}
      data-testid="test-testimonial"
    />
  </ThemeCompositions>
)
