import React, { HtmlHTMLAttributes } from "react"

export type SampleViewProps = {
  /**
   * a text to be rendered in the component.
   */
  title: string
} & HtmlHTMLAttributes<HTMLDivElement>

export function SampleView({ title, ...props }: SampleViewProps) {
  return <div {...props}>{title}</div>
}
