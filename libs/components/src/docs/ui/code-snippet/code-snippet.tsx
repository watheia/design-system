import React, { useState, useMemo, memo } from "react"
import classNames from "clsx"
import copy from "copy-to-clipboard"
import { Icon } from "@watheia/base-ui.atoms.icon"
import { CopiedMessage } from "@watheia/docs.ui.copied-message"

import type { SyntaxHighlighterProps } from "react-syntax-highlighter"
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/prism-light"
import tsxSyntax from "react-syntax-highlighter/dist/esm/languages/prism/tsx"
import defaultTheme from "react-syntax-highlighter/dist/esm/styles/prism/vsc-dark-plus"

import * as styles from "./code-snippet.module.scss"

SyntaxHighlighter.registerLanguage("tsx", tsxSyntax)
const customStyles = { fontFamily: "roboto mono", fontSize: 12 }

export type CodeSnippetProps = {
  /**
   * the code string to show and to be copied to clipboard
   */
  children: string
  /**
   * a class to override the highlighter class
   */
  frameClass?: string
  /**
   * the theme to be used in the highlighter
   */
  theme?: any
} & SyntaxHighlighterProps

/**
 * A code snippet component
 */
export function CodeSnippet({
  className,
  frameClass,
  theme = defaultTheme,
  language = "tsx",
  children,
  ...rest
}: CodeSnippetProps) {
  const [isCopied, setIsCopied] = useState(false)

  const handleClick = () => {
    setIsCopied(true)
    setTimeout(() => setIsCopied(false), 2000)
    copy(children.toString())
  }

  const trimmedChildren = useMemo(() => children.trim(), [children])

  return (
    <div className={classNames(styles.snippetWrapper, className)}>
      <Highlighter
        {...rest}
        className={classNames(styles.codeSnippet, frameClass)}
        language={language}
        style={theme}
        customStyle={customStyles}
      >
        {trimmedChildren}
      </Highlighter>

      <div className={styles.copy}>
        <CopiedMessage show={isCopied} />
        <Icon onClick={handleClick} className={styles.copyIcon} of="copy-cmp" />
      </div>
    </div>
  )
}

const Highlighter = memo(function SnippetWrapper(props: SyntaxHighlighterProps) {
  return <SyntaxHighlighter {...props} />
})
