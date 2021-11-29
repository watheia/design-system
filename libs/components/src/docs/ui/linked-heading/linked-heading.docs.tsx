import React from "react"
import { ThemeCompositions } from "@watheia/docs.theme.theme-compositions"
import { LinkedHeading } from "./linked-heading"
import { Example } from "@watheia/docs.types.docs-file"
import { Paragraph } from "@watheia/docs.markdown.elements.paragraph"

export const labels = ["react", "ui-component", "heading", "link"]

export const examples: Example[] = [
  {
    scope: {
      LinkedHeading,
      ThemeCompositions
    },
    title: "Using the Linked Heading component",
    description: (
      <Paragraph>
        {`Links are used as navigational elements. They can be used on their own or inline, as part of a paragraph.
          They provide a lightweight option for navigation that should be used sparingly so as to not clutter a page and make it difficult for users to identify their next steps.`}
      </Paragraph>
    ),
    code: `
<ThemeCompositions>
    <LinkedHeading link="link-here-1" >
        A default linked title
    </LinkedHeading>

    <LinkedHeading link="link-here-2" size="xs">
      An extra small linked title
    </LinkedHeading>

</ThemeCompositions>
`
  }
]
