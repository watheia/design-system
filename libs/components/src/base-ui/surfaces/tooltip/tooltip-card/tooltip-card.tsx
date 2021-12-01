import React from "react"
import classNames from "clsx"
import { Containee, Position } from "@watheia/base-ui.surfaces.abs-container"
import { elevationClass, ElevationHeight } from "@watheia/base-ui.css-components.elevation"
import { roundnessClass, Roundness } from "@watheia/base-ui.css-components.roundness"

import styles from "./tooltip-card.module.scss"

type Props = {
  position: Position
  elevation?: ElevationHeight
  roundness?: Roundness
} & React.HTMLAttributes<HTMLDivElement>

export const TooltipMenu = ({
  position,
  children,
  elevation = "medium",
  roundness = "sharp",
  className,
  ...rest
}: Props) => {
  return (
    <Containee
      position={position}
      className={classNames(
        styles.menu,
        elevationClass[elevation],
        roundnessClass[roundness],
        className
      )}
      {...rest}
    >
      {children}
    </Containee>
  )
}

TooltipMenu.defaultProps = {
  elevation: "medium",
  roundness: "sharp"
}
