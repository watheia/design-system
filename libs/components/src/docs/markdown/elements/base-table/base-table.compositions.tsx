import React from "react"
import { ThemeCompositions } from "@watheia/docs.theme.theme-compositions"
import { Td } from "@watheia/docs.markdown.elements.td"

import { Tr } from "@watheia/docs.markdown.elements.tr"
import { Table } from "./base-table"

export const TableExample = () => {
  return (
    <ThemeCompositions>
      <Table>
        <tbody>
          <Tr>
            <th>title1</th>
            <th>title2</th>
            <th>title3</th>
          </Tr>
          <Tr>
            <Td>cell</Td>
            <Td>cell</Td>
            <Td>cell</Td>
          </Tr>
          <Tr>
            <Td>cell</Td>
            <Td>cell</Td>
            <Td>cell</Td>
          </Tr>
        </tbody>
      </Table>
    </ThemeCompositions>
  )
}
