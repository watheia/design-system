import React from "react"
import classNames from "clsx"

import { Card, CardProps } from "@watheia/base-ui.surfaces.card"
import { pillClass } from "@watheia/base-ui.css-components.pill"

import * as styles from "./default-label.module.scss"

export function DefaultLabel(props: CardProps) {
  const { className, ...rest } = props
  return (
    <Card {...rest} className={classNames(className, pillClass, styles.defaultLabel)} />
  )
}
