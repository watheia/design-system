import React from "react"
import { ThemeCompositions } from "@watheia/docs.theme.theme-compositions"
import { Td } from "@watheia/docs.markdown.elements.td"

import { Tr } from "./tr"
export const TrExample = () => {
  return (
    <ThemeCompositions>
      <table>
        <tbody>
          <Tr>
            <Td>Tr text</Td>
            <Td>Tr text</Td>
            <Td>Tr text</Td>
          </Tr>
        </tbody>
      </table>
    </ThemeCompositions>
  )
}
