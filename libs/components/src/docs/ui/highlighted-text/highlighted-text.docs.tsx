import { Paragraph } from "@watheia/base-ui.atoms.paragraph"
import { Example } from "@watheia/docs.types.docs-file"
import React from "react"
import { HighlightedText } from "./highlighted-text"
import { LargeText, SmallText } from "./highlighted-text.composition"

export const labels = ["react", "ui-component", "text"]

export const examples: Example[] = [
  {
    scope: { HighlightedText },
    title: "Using the Highlighted Text component",
    description: (
      <Paragraph>
        This component returns a highlighted text in the form of either a 'p', 'div', or
        'span' element.
      </Paragraph>
    ),
    code: `
<>
  <h2>Some <HighlightedText>highlighted text</HighlightedText> in a headline</h2>
  <p>
    Paragraph containing <HighlightedText>highlighted text</HighlightedText> and other text.
  </p>
</>
`
  }
]
