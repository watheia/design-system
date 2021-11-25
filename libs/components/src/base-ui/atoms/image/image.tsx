import React from "react"
import clsx from "clsx"
import styles from "./image.module.scss"

export type BaseImageProps = {
  /**
   * alt text (to comply a11y standards)
   */
  alt: string
  /**
   * Makes image fill the whole width of container.
   * same as `width: 100%`
   */
  fullWidth?: boolean
} & React.ImgHTMLAttributes<HTMLImageElement>

/**
 * Template component for images.
 * Accepts all the arguments of native html image.
 * @example
 * 	<BaseImage alt="avatar" src="https://storage.com/asdlkfjsdf.png">
 */
export function BaseImage({ alt, className, fullWidth, ...rest }: BaseImageProps) {
  return (
    <img
      data-bit-id="watheia.base-ui/atoms/image"
      alt={alt}
      {...rest}
      className={clsx(styles.image, fullWidth && styles.fullWidth, className)}
    />
  )
}
