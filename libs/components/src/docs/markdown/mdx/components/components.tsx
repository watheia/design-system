import type { MDXProviderComponents } from "@mdx-js/react"

import { BlockQuote } from "@watheia/docs.markdown.elements.block-quote"
import { Bold } from "@watheia/docs.markdown.elements.bold"
import { Link } from "@watheia/base-ui.atoms.link"
import { h1, h2, h3, h4, h5, h6 } from "@watheia/docs.markdown.heading"
import { Image } from "@watheia/docs.markdown.elements.image"
import { InlineCode } from "@watheia/docs.ui.inline-code"
import { Italic } from "@watheia/docs.markdown.elements.italic"
import { Ol } from "@watheia/docs.markdown.elements.ol"
import { Paragraph } from "@watheia/docs.markdown.elements.paragraph"
import { Separator } from "@watheia/docs.markdown.elements.hr"
import { Snippet } from "@watheia/docs.markdown.hybrid-live-code-snippet"
import { Sup } from "@watheia/docs.markdown.elements.sup"
import { Table } from "@watheia/docs.markdown.elements.base-table"
import { Td } from "@watheia/docs.markdown.elements.td"
import { Tr } from "@watheia/docs.markdown.elements.tr"
import { Ul } from "@watheia/docs.markdown.elements.ul"
import React, { ReactElement } from "react"

export const defaultMdxComponents: MDXProviderComponents = {
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p: Paragraph,
  code: Snippet,
  a: Link,
  inlineCode: InlineCode,
  ol: Ol,
  ul: Ul,
  hr: Separator,
  thematicBreak: Separator,
  img: Image,
  strong: Bold,
  em: Italic,
  pre: ({ children }: { children: ReactElement<any, any> | null }) => children, // code provides its own built in `pre`
  sup: Sup,
  table: Table,
  tr: Tr,
  td: Td,
  blockquote: BlockQuote
}
