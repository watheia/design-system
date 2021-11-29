import { Paragraph } from "@watheia/docs.markdown.elements.paragraph"
import { Example } from "@watheia/docs.types.docs-file"
import React, { useState } from "react"
import { InlineCode } from "./inline-code"

export const labels = ["react", "ui-component", "text"]

export const examples: Example[] = [
  {
    scope: { InlineCode },
    title: "Using the Highlighted Text component",
    description: (
      <Paragraph>
        This component returns a highlighted text in the form of either a 'p', 'div', or
        'span' element.
      </Paragraph>
    ),
    code: `
<>
  This is a
  <InlineCode>
    element.
  </InlineCode>
  This is a
  <InlineCode>
    div element.
  </InlineCode>
  This is a
  <InlineCode>
    span element.
  </InlineCode>
</>
`
  },
  {
    scope: { InlineCode, useState },
    description: <Paragraph>one of seven available sizes from "xxs" to "xxl"</Paragraph>,
    code: `
() => {
  const [size, setSize] = useState(16);

  return (<>
    <div>use font-size to change the component size.</div>
    <input
      type="range" min="10" max="40"
      value={size}
      onChange={e => setSize(e.target.value)}
    />
    <br/>
    <br/>
    <div style={{ fontSize: size + "px" }}>
      <InlineCode>
        inline code
      </InlineCode>
    </div>
  </>
)}
    `
  }
]
