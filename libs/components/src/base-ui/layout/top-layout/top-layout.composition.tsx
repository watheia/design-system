import React, { useContext } from "react"
import { TopLayout } from "./top-layout"
import { TopLayoutContext } from "./top-layout-context"

export function MockComponent() {
  const theme = useContext(TopLayoutContext)

  return <div style={{ color: theme.color }}>this should be {theme.color}</div>
}

export const BasicThemeUsage = () => {
  return (
    <TopLayout color="blue">
      <MockComponent />
    </TopLayout>
  )
}
