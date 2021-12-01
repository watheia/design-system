import React from "react"
import classNames from "clsx"

import * as styles from "./twitter-link.module.scss"

import { CommunityLink, PrimaryLinkProps } from "@watheia/design.atoms.community-link"
import { Icon } from "@watheia/base-ui.atoms.icon"

/**
 * Concrete link to a Twitter account. Styled as a 'pill' button, with the Twitter logo
 * @name TwitterLink
 * @example
 * <TwitterLink href="https://twitter.com/watheia" />
 */
export type TwitterLinkProps = PrimaryLinkProps

export function TwitterLink({ className, ...rest }: TwitterLinkProps) {
  return (
    <CommunityLink
      external
      data-bit-id="watheia.design/molecules/community-links/twitter-link"
      className={classNames(styles.twitterLink, className)}
      {...rest}
    >
      <Icon of="twitter-logo" className={classNames(styles.icon)} />
      <span>@bitdev_</span>
    </CommunityLink>
  )
}
