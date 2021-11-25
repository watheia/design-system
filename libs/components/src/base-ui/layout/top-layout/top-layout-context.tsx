import { createContext } from "react"

export type TopLayoutContextType = {
  /**
   * primary color of theme.
   */
  color?: string
}

export const TopLayoutContext = createContext<TopLayoutContextType>({
  color: "aqua"
})
