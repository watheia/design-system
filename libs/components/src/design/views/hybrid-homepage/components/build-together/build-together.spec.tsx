import React from "react"
import { render } from "@testing-library/react"
// import { expect } from "chai"

import { BuildTogetherExample } from "./build-together.composition"

it("should render correctly", () => {
  const { getByTestId } = render(<BuildTogetherExample />)
  const rendered = getByTestId("test-build")

  expect(rendered).toBeInstanceOf(HTMLElement)
})
it("should render h2 element", () => {
  const { getByText } = render(<BuildTogetherExample />)
  const rendered = getByText("Collaborate on component updates to build in perfect sync")

  expect(rendered.tagName).toEqual("H2")
})
