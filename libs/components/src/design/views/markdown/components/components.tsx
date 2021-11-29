import React, { ReactNode } from "react"

// import { CodeSnippet } from "@watheia/docs.markdown.elements.code-snippet"
import { BlockQuote } from "@watheia/docs.markdown.elements.block-quote"
import { Bold } from "@watheia/docs.markdown.elements.bold"
import { Link } from "@watheia/base-ui.atoms.link"
import { Image } from "@watheia/docs.markdown.elements.image"
import { Italic } from "@watheia/docs.markdown.elements.italic"
import { Ol } from "@watheia/docs.markdown.elements.ol"
import { Paragraph } from "@watheia/docs.markdown.elements.paragraph"
import { Separator } from "@watheia/docs.markdown.elements.hr"
import { Sup } from "@watheia/docs.markdown.elements.sup"
import { Table } from "@watheia/docs.markdown.elements.base-table"
import { Td } from "@watheia/docs.markdown.elements.td"
import { Tr } from "@watheia/docs.markdown.elements.tr"
import { Ul } from "@watheia/docs.markdown.elements.ul"

import { createHeading } from "./create-heading"
import { Code } from "./code"
import { PossibleSizes } from "@watheia/base-ui.theme.sizes"

// inline functions removes unwanted props, that should not become html attributes

export const components = {
  h1: createHeading(PossibleSizes.lg),
  h2: createHeading(PossibleSizes.md),
  h3: createHeading(PossibleSizes.sm),
  h4: createHeading(PossibleSizes.xs),
  h5: createHeading(PossibleSizes.xxs),
  h6: createHeading(PossibleSizes.xxs),

  a: Link,
  blockquote: BlockQuote,
  code: Code,
  em: Italic,
  hr: Separator,
  img: Image,
  p: Paragraph,
  // code includes it's own pre tag
  // eslint-disable-next-line react/jsx-no-useless-fragment
  pre: ({ children }: { children: ReactNode }) => <>{children}</>,
  strong: Bold,
  sup: Sup,
  table: Table,
  thematicBreak: Separator,
  td: ({ isHeader, ...rest }: any) => <Td {...rest} />,
  tr: Tr,
  // th: ({ isHeader, ...rest }: any) => <Th {...rest} />,
  // li: ({ ordered, depth, checked, ...rest}: any) => <li {...rest}/>,
  ol: ({ ordered, depth, ...rest }: any) => <Ol {...rest} />,
  ul: ({ ordered, depth, ...rest }: any) => <Ul {...rest} />
}
