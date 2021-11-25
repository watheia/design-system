import React from "react"
import type { LinkProps } from "@watheia/base-ui.routing.native-link"
import { useRouting } from "@watheia/base-ui.routing.routing-provider"

export type { LinkProps }

export function Link(props: LinkProps) {
  const ActualLink = useRouting().Link
  return <ActualLink {...props} />
}
