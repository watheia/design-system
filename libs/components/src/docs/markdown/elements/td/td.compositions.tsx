import React from "react"
import { ThemeCompositions } from "@watheia/docs.theme.theme-compositions"
import { Td } from "./td"

export const TdExample = () => {
  return (
    <ThemeCompositions>
      <table>
        <tbody>
          <tr>
            <Td>Td text</Td>
          </tr>
        </tbody>
      </table>
    </ThemeCompositions>
  )
}
