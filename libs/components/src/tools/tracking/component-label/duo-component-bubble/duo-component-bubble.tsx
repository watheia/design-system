import React from "react"
import clsx from "clsx"
import { Card } from "@watheia/base-ui.surfaces.card"
import { ComponentUrl } from "@watheia/tools.tracking.component-url"

import scopeStyles from "./scope-colors.module.scss"
import { BASE_URL } from "../base-url"

import {
  DuoComponentBubbleProps,
  ScopeBubbleProps,
  ComponentBubbleProps
} from "./duo-component-types"
import * as styles from "./duo-component-bubble.module.scss"

export function DuoComponentBubble({
  bitId,
  fullScopeName,
  className,
  ...rest
}: DuoComponentBubbleProps) {
  const scopeFullName = bitId.fullName

  return (
    <Card
      {...rest}
      className={clsx(
        className,
        scopeStyles.scopeColorDefinition,
        styles.duoComponentBubble
      )}
      data-current-scope={scopeFullName}
      data-ignore-component-highlight
    >
      <ScopeBubble
        bitId={bitId}
        fullScopeName={fullScopeName}
        className={styles.scopeBubble}
      />
      <ComponentBubble bitId={bitId} />
    </Card>
  )
}

function ScopeBubble({ bitId, fullScopeName, className, ...rest }: ScopeBubbleProps) {
  const fullName = bitId.fullName
  const name = bitId.scope
  const scopeUrl = `${BASE_URL}/${bitId.toString()}`

  return (
    <a
      href={scopeUrl}
      className={clsx(styles.link, className)}
      rel="noopener noreferrer"
      target="_blank"
      {...rest}
    >
      <div className={clsx(styles.scopeName)}>{fullScopeName ? fullName : name}</div>
    </a>
  )
}

function ComponentBubble({ bitId, className, ...rest }: ComponentBubbleProps) {
  const { fullName, version } = bitId
  const url = ComponentUrl.toUrl(bitId)
  return (
    <a
      href={url}
      className={clsx(styles.link, styles.componentName, className)}
      rel="noopener noreferrer"
      target="_blank"
    >
      <div className={styles.fullName}>{fullName}</div>
      {version && (
        <div className={styles.version}>
          {/* <span className={styles.separator}>|</span> */}
          <span className={styles.versionPrefix}>@</span>
          {version}
        </div>
      )}
    </a>
  )
}
