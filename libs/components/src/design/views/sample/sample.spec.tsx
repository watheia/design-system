import React from "react"
import { render } from "@testing-library/react"
import { BasicSampleView } from "./sample.composition"

it("should render with the correct text", () => {
  const { getByText } = render(<BasicSampleView />)
  const rendered = getByText("hello from SampleView")
  expect(rendered).toBeTruthy()
})
