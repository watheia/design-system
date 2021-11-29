import React from "react"
import classNames from "clsx"
import { mutedText } from "@watheia/base-ui.atoms.styled-text"
import { Paragraph } from "@watheia/docs.markdown.elements.paragraph"
import styles from "./sub-title.module.scss"

export type SubtitleProps = React.HTMLAttributes<HTMLParagraphElement>

/**
 * subtitle component
 */
export function Subtitle({ children, className, ...rest }: SubtitleProps) {
  return (
    <Paragraph
      element="p"
      className={classNames(mutedText, styles.subTitle, className)}
      size="xl"
      {...rest}
    >
      {children}
    </Paragraph>
  )
}

// Subtitle.defaultProps = {
//   element: "p",
// };
