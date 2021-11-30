import React from "react"
import { render } from "@testing-library/react"

import { EnterpriseLogosExample } from "./enterprise-logos.composition"

it("should render correctly", () => {
  const { getByTestId } = render(<EnterpriseLogosExample />)
  const rendered = getByTestId("test-element")
  expect(rendered).toBeInstanceOf(HTMLElement)
})
