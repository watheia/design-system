import React from "react"
import { render } from "@testing-library/react"
import { SansFontExample, SerifFontExample } from "./clean-font.composition"

it("should render with the sans font", () => {
  const { getByText } = render(<SansFontExample />)
  const rendered = getByText("Hello, SansFont!")
  expect(rendered).toBeTruthy()
})

it("should render with the serif font", () => {
  const { getByText } = render(<SerifFontExample />)
  const rendered = getByText("Hello, SerifFont!")
  expect(rendered).toBeTruthy()
})
