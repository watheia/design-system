import React from "react"
import { render } from "@testing-library/react"
import { BasicSample } from "./sample.composition"

it("should render with the correct text", () => {
  const { getByText } = render(<BasicSample />)
  const rendered = getByText("hello from Sample")
  expect(rendered).toBeTruthy()
})
