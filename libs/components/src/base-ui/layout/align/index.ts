/* eslint-disable @typescript-eslint/ban-ts-comment */
import * as styles from "./align.module.scss"

enum BreakPoints {
  xs = "xs",
  sm = "sm",
  md = "md",
  l = "l",
  lg = "lg",
  xl = "xl"
}

type TextOptions = {
  left: string
  center: string
  right: string
}

type TextProps = {
  left: string
  center: string
  right: string

  xs: TextOptions
  sm: TextOptions
  md: TextOptions
  l: TextOptions
  lg: TextOptions
  xl: TextOptions
}

export const fullWidth = styles.fullWidth

export const text = (() => {
  const baseStyle = {
    left: styles.textLeft,
    center: styles.textCenter,
    right: styles.textRight
  }

  const medias = Object.keys(BreakPoints)
    .map((br) => ({
      [br]: {
        // @ts-ignore
        left: styles[`text-${br}-left`],
        // @ts-ignore
        center: styles[`text-${br}-center`],
        // @ts-ignore
        right: styles[`text-${br}-right`]
      }
    }))
    .reduce((prev, next) => Object.assign(prev, next), {})

  return {
    ...baseStyle,
    ...medias
  } as TextProps
})()

export const marginCenter = styles.marginCenter

//consider moving this logic to <Grid/>
export const justifyItems = {
  left: styles.justifyItemsLeft,
  center: styles.justifyItemsCenter,
  right: styles.justifyItemsRight
}

export const alignItems = {
  start: styles.alignItemsStart,
  center: styles.alignItemsCenter,
  end: styles.alignItemsEnd
}
