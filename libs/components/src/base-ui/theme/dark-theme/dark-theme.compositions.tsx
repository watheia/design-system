import React, { useState } from "react"
import { primaryPalette } from "@watheia/base-ui.theme.color-definition"
import { darkThemee } from "./index"

import styles from "./dark-theme.compositions.module.scss"

const textColors = [
  "--wa-text-color",
  "--wa-text-color-heavy",
  "--wa-text-color-light",
  "--wa-text-inactive"
]
const borders = [
  "--wa-border-color",
  "--wa-border-color-heavy",
  "--wa-border-color-light",
  "--wa-border-color-lightest"
]
const accents = [
  "--wa-accent-color",
  "--wa-accent-heavy",
  "--wa-accent-light",
  "--wa-accent-text",
  "--wa-accent-text-heavy",
  "--wa-text-on-accent",
  "--wa-accent-bg",
  "--wa-accent-bg-heavy"
]
const backgrounds = [
  "--wa-bg-color",
  "--wa-bg-heavy",
  "--wa-bg-heavy",
  "--wa-bg-heaviest",
  "--wa-bg-bedrock",
  "--wa-bg-navigation",
  "--wa-bg-overlay",
  "--wa-bg-modal",
  "--wa-bg-tooltip",
  "--wa-bg-tooltip-heavy",
  "--wa-bg-dent"
]

const errors = [
  "--wa-error-color",
  "--wa-error-heavy",
  "--wa-error-light",
  "--wa-error-bg",
  "--wa-error-bg-heavy"
]

export function Texts() {
  return (
    <div
      className={darkThemee}
      style={{
        background: "#0c0c0c",
        height: "100%",
        boxSizing: "border-box",
        padding: 8,
        borderRadius: 4
      }}
    >
      {textColors.map((x) => (
        <ColorBox colorName={x} />
      ))}
    </div>
  )
}

export function Accents() {
  return (
    <div
      className={darkThemee}
      style={{
        background: "#0c0c0c",
        height: "100%",
        boxSizing: "border-box",
        padding: 8,
        borderRadius: 4
      }}
    >
      {accents.map((x) => (
        <ColorBox colorName={x} />
      ))}
    </div>
  )
}

export function Borders() {
  return (
    <div
      className={darkThemee}
      style={{
        background: "#0c0c0c",
        height: "100%",
        boxSizing: "border-box",
        padding: 8,
        borderRadius: 4
      }}
    >
      {borders.map((x) => (
        <ColorBox colorName={x} />
      ))}
    </div>
  )
}

export function Backgrounds() {
  return (
    <div
      className={darkThemee}
      style={{
        background: "#0c0c0c",
        height: "100%",
        boxSizing: "border-box",
        padding: 8,
        borderRadius: 4
      }}
    >
      {backgrounds.map((x) => (
        <ColorBox colorName={x} />
      ))}
    </div>
  )
}

export function Errors() {
  return (
    <div
      className={darkThemee}
      style={{
        background: "#0c0c0c",
        height: "100%",
        boxSizing: "border-box",
        padding: 8,
        borderRadius: 4
      }}
    >
      {errors.map((x) => (
        <ColorBox colorName={x} />
      ))}
      <div>
        (may be deprecated in the future.
        <br />
        use accentColors.error instead)
      </div>
    </div>
  )
}

// (property) JSX.IntrinsicElements.div: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export function ThemeExample({ className, ...rest }: React.HTMLAttributes<HTMLDivElement>) {
  const [isDark, setDark] = useState(true)

  return (
    <div className={isDark ? darkThemee : primaryPalette} style={{ height: "100%" }}>
      <div className={className + " " + styles.container} {...rest}>
        <div className={styles.regular}>
          <div className={styles.accentText}>accent text</div>
          <div>regular content</div>
          <button className={styles.btn} onClick={() => setDark((x) => !x)}>
            toggle dark mode {isDark ? "🌙" : "☀️"}
          </button>
        </div>

        <br />

        <div className={styles.bg}>
          <div className={styles.accentText}>accent text</div>
          <div>interactive card</div>
          <button className={styles.btn}>accent colored box</button>
        </div>

        <br />

        <div className={styles.accentBg}>
          <div className={styles.accentText}>accent text</div>
          <div>accent card</div>
          <button className={styles.btn}>accent colored box</button>
        </div>

        <br />

        <div className={styles.accentCard}>
          <div>accent card variation 2</div>
        </div>
      </div>
    </div>
  )
}

function ColorBox({ colorName }: { colorName: string }) {
  return (
    <div style={{ display: "flex", borderRadius: 4, marginBottom: 4 }}>
      <div
        style={{
          background: `var(${colorName})`,
          width: 20,
          height: 20,
          borderRadius: 4,
          marginRight: 8,
          border: "1px solid lightgray"
        }}
      ></div>
      <div>{colorName}</div>
    </div>
  )
}
