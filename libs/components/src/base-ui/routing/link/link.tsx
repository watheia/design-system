import React from "react"
import { useRouting } from "@watheia/base-ui.routing.routing-provider"

export type LinkProps = {
  /** When true, clicking the link will replace the current entry in the history stack instead of adding a new one */
  replace?: boolean
  /** Open link in a new tab */
  external?: boolean
} & React.AnchorHTMLAttributes<HTMLAnchorElement>

/**
 * Since DOM elements <a> cannot receive activeClassName
 * and partiallyActive, destructure the prop here and
 * pass it only to GatsbyLink
 *
 * @param props
 * @returns
 */
export function Link({ href, ...props }: LinkProps) {
  // Tailor the following test to your environment.
  // This example assumes that any internal link (intended for Gatsby)
  // will start with exactly one slash, and that anything else is external.
  const internal = /^\/(?!\/)/.test(href ?? "")

  const routing = useRouting()
  const ActualLink = internal ? routing.NavLink : routing.Link
  return <ActualLink {...props} />
}
