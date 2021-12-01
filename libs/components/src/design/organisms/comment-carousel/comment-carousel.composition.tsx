import React from "react"
import { ThemeCompositions } from "@watheia/base-ui.theme.light-theme"
import { CommentCarousel } from "./comment-carousel"

export const CommentCarouselExample = () => {
  const testimonials = [
    {
      name: "Barbra",
      description: "Quality assurance",
      content: "Better than 4/5 of the market",
      avatar: "https://static.bit.dev/bit-logo.png"
    },
    {
      name: "Roberto",
      description: "Upper middle management",
      content: "Easy to carry, nice for meetings",
      avatar: "https://static.bit.dev/bit-logo.png"
    },
    {
      name: "Barbra",
      description: "Quality assurance",
      content: "Better than 4/5 of the market",
      avatar: "https://static.bit.dev/bit-logo.png"
    },
    {
      name: "Roberto",
      description: "Upper middle management",
      content: "Easy to carry, nice for meetings",
      avatar: "https://static.bit.dev/bit-logo.png"
    }
  ]
  return (
    <ThemeCompositions style={{ width: 800 }}>
      <CommentCarousel content={testimonials} data-testid="test-carousel" />
    </ThemeCompositions>
  )
}
