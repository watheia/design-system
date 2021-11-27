import React from "react"
import { CardProps } from "@watheia/base-ui.surfaces.card"
import { ComponentID } from "@watheia/base-ui.utils.tracking.component-id"

export type DuoComponentBubbleProps = {
  bitId: ComponentID
  fullScopeName?: boolean
} & CardProps

export type ScopeBubbleProps = {
  bitId: ComponentID
  fullScopeName?: boolean
} & React.AnchorHTMLAttributes<HTMLAnchorElement>

export type ComponentBubbleProps = {
  bitId: ComponentID
} & React.AnchorHTMLAttributes<HTMLAnchorElement>
