import React from "react"
import { render } from "@testing-library/react"

import { StyledTextExample, UsingStyledTextClassName } from "./styled-text.composition"

it("should render correctly", () => {
  const { getByText } = render(<StyledTextExample />)
  const rendered = getByText("Muted text")
  expect(rendered).toBeInstanceOf(HTMLElement)
})

it("should render correctly using class name", () => {
  const { getByText } = render(<UsingStyledTextClassName />)
  const rendered = getByText("Muted text with class name")
  expect(rendered).toBeInstanceOf(HTMLElement)
})
