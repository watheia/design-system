import React from "react"
import classNames from "clsx"
import { backgrounds } from "@watheia/base-ui.surfaces.background"

type BedrockProps = React.HTMLAttributes<HTMLDivElement>

export function Bedrock(props: BedrockProps) {
  return <div {...props} className={classNames(backgrounds.bedrock, props.className)} />
}
