import React from "react"
import { ThemeCompositions } from "@watheia/base-ui.theme.light-theme"
import { SalesCta } from "./sales-cta"

export const SalesCtaExample = () => (
  <ThemeCompositions>
    <SalesCta data-testid="test-sales-cta" />
  </ThemeCompositions>
)
