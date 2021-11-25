import React, { ReactNode } from "react"
import { TopLayoutContext } from "./top-layout-context"
import { Theme } from "@watheia/base-ui.theme.theme-provider"

export type TopLayoutProps = {
  /**
   * primary color of theme.
   */
  color?: string

  /**
   * children to be rendered within this theme.
   */
  children: ReactNode
}

export function TopLayout({ color, children }: TopLayoutProps) {
  return (
    <TopLayoutContext.Provider value={{ color }}>
      <Theme>{children}</Theme>
    </TopLayoutContext.Provider>
  )
}
