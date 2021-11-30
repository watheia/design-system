import React from "react"
import { render } from "@testing-library/react"
// import { expect } from "chai"

import { TwitterLinkExample } from "./twitter-link.composition"

it("should render correctly", () => {
  const { getByTestId } = render(<TwitterLinkExample />)
  const rendered = getByTestId("test-link")
  expect(rendered).toBeInstanceOf(HTMLElement)
})
it("should render an a element", () => {
  const { getByTestId } = render(<TwitterLinkExample />)
  const rendered = getByTestId("test-link")

  expect(rendered.tagName).toEqual("A")
})
// it("should include an href", () => {
//   const { getByTestId } = render(<TwitterLinkExample />)
//   const rendered = getByTestId("test-link")

//   expect(rendered.getAttribute("href")).to.equal("https://twitter.com/watheia")
// })
