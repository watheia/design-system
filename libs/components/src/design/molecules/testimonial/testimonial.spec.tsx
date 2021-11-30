import React from "react"
import { render } from "@testing-library/react"

import { TestimonialExample } from "./testimonial.composition"

it("should render correctly", () => {
  const { getByTestId } = render(<TestimonialExample />)
  const rendered = getByTestId("test-testimonial")
  expect(rendered).toBeInstanceOf(HTMLElement)
})
