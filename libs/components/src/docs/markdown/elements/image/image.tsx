import React from "react"
import classNames from "clsx"
import * as styles from "./image.module.scss"

export type ImageProps = React.ImgHTMLAttributes<HTMLImageElement>

export function Image({ alt, src, className, ...rest }: ImageProps) {
  return <img {...rest} alt={alt} src={src} className={classNames(styles.img, className)} />
}
