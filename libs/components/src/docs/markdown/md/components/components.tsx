import React, { ReactNode } from "react"

// import { CodeSnippet } from "@watheia/docs.ui.code-snippet"
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

import { h1, h2, h3, h4, h5, h6 } from "@watheia/docs.markdown.heading"
import { Code } from "./code"

// inline functions removes unwanted props, that should not become html attributes

export const components = {
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,

  a: Link,
  blockquote: BlockQuote,
  code: Code,
  em: Italic,
  hr: Separator,
  img: Image,
  p: Paragraph,
  // code includes it's own pre tag
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
