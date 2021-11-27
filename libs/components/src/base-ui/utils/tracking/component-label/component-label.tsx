import React, { HTMLAttributes } from "react"
import clsx from "clsx"

import { ComponentID } from "@watheia/base-ui.utils.tracking.component-id"
import { DuoComponentBubble } from "./duo-component-bubble"
import { DefaultLabel } from "./default-label"

export type ComponentLabelProps = {
  /** Id of the component. Will show nothing if id is missing, and will show text only when id is not a valid bit-id */
  bitId?: string
  /** Explicitly set component version, and override any id that is part of the bit id. */
  // versionOverride?: string
  /** Show full scope name, including owner */
  fullScopeName?: boolean
} & HTMLAttributes<HTMLDivElement>

/**
 * Given a component id, shows a label for it and its scope, with a link to its bit.dev entry.
 * @name ComponentLabel
 * @example
 * <ComponentLabel bitId="kutorg.nerv/atoms/lcl" versionOverride="1.5.3" />
 */
export function ComponentLabel(props: ComponentLabelProps) {
  const { bitId, fullScopeName, className, ...rest } = props

  if (!bitId) return null

  const parsed = ComponentID.fromString(bitId)

  // local or malformed component ids may fail parsing
  if (!parsed) {
    return (
      <DefaultLabel elevation="medium" className={className} {...rest}>
        {bitId}
      </DefaultLabel>
    )
  }

  // if (versionOverride) parsed.version = versionOverride

  return (
    <DuoComponentBubble
      bitId={parsed}
      elevation="medium"
      className={clsx(className)}
      fullScopeName={fullScopeName}
      {...rest}
    />
  )
}

ComponentLabel.defaultProps = {
  fullScopeName: true
}
