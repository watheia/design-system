import React from "react"
import classNames from "clsx"

import * as styles from "./community-link.module.scss"

import { Link, LinkProps } from "@watheia/base-ui.atoms.link"

export type PrimaryLinkProps = LinkProps

/**
 * base 'community link' component.
 *
 * Used as a template for Github-link, twitter-link, etc.
 * @name CommunityLink
 * @example
 * <CommunityLink href="https://bit.dev" />
 */
export function CommunityLink({ className, ...rest }: PrimaryLinkProps) {
  return (
    <Link
      data-bit-id="watheia.design/atoms/community-link"
      className={classNames(styles.primaryLink, className)}
      {...rest}
    ></Link>
  )
}
