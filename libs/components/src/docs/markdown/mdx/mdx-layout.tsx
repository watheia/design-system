import React, { useMemo, ReactNode } from "react"
import classNames from "clsx"
import { MDXProvider, MDXProviderComponents } from "@mdx-js/react"
import { defaultMdxComponents } from "./components"
import * as styles from "./mdx-layout.module.scss"

export type { MDXProviderComponents } from "@mdx-js/react"
export interface MDXLayoutProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  components?: MDXProviderComponents
}

/** bit flavored MDX theme */
export function MDXLayout({ children, components, className, ...rest }: MDXLayoutProps) {
  const _components = useMemo(
    () => ({ ...defaultMdxComponents, ...components }),
    [components]
  )

  return (
    <MDXProvider components={_components}>
      <div className={classNames(styles.mdxContent, className)} {...rest}>
        {children}
      </div>
    </MDXProvider>
  )
}
