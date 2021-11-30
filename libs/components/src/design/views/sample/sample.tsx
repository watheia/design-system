import React, { HtmlHTMLAttributes } from "react"
import star from "./star.svg"
import * as styles from "./sample.module.scss"
import clsx from "clsx"
import { Link } from "@watheia/base-ui.atoms.link"
import { Paragraph } from "@watheia/base-ui.atoms.paragraph"
import { H1, H2 } from "@watheia/base-ui.atoms.heading"

export type SampleViewProps = {
  /**
   * a text to be rendered in the component.
   */
  title: string
} & HtmlHTMLAttributes<HTMLDivElement>

export function SampleView({ title, className, ...props }: SampleViewProps) {
  return (
    <div className={clsx(styles.page, className)} {...props}>
      <header className="flex">
        {/* <Logo width="75" height="75" /> */}
        <H1>{title}</H1>
      </header>
      <main>
        <H2>Resources &amp; Tools</H2>
        <Paragraph>Thank you for using and showing some ♥ for Nx.</Paragraph>
        <div className="flex github-star-container">
          <Link href="https://github.com/nrwl/nx" target="_blank" rel="noopener noreferrer">
            {" "}
            If you like Nx, please give it a star:
            <div className="github-star-badge">
              <img src={star} className="material-icons" alt="" />
              Star
            </div>
          </Link>
        </div>
        <Paragraph>Here are some links to help you get started.</Paragraph>
        <ul className="resources">
          <li className="col-span-2">
            <Link
              className="flex resource"
              href="https://egghead.io/playlists/scale-react-development-with-nx-4038"
            >
              Scale React Development with Nx (Course)
            </Link>
          </li>
          <li className="col-span-2">
            <Link
              className="flex resource"
              href="https://nx.dev/latest/react/tutorial/01-create-application"
            >
              Interactive tutorial
            </Link>
          </li>
          <li className="col-span-2">
            <Link className="flex resource" href="https://nx.app/">
              <svg
                width="36"
                height="36"
                viewBox="0 0 120 120"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M120 15V30C103.44 30 90 43.44 90 60C90 76.56 76.56 90 60 90C43.44 90 30 103.44 30 120H15C6.72 120 0 113.28 0 105V15C0 6.72 6.72 0 15 0H105C113.28 0 120 6.72 120 15Z"
                  fill="#0E2039"
                />
                <path
                  d="M120 30V105C120 113.28 113.28 120 105 120H30C30 103.44 43.44 90 60 90C76.56 90 90 76.56 90 60C90 43.44 103.44 30 120 30Z"
                  fill="white"
                />
              </svg>
              <span className="gutter-left">Nx Cloud</span>
            </Link>
          </li>
        </ul>
        <H2>Next Steps</H2>
        <Paragraph>Here are some things you can do with Nx.</Paragraph>
        <details open>
          <summary>Add UI library</summary>
          <pre>{`# Generate UI lib
nx g @nrwl/react:lib ui

# Add a component
nx g @nrwl/react:component xyz --project ui`}</pre>
        </details>
        <details>
          <summary>View dependency graph</summary>
          <pre>{`nx dep-graph`}</pre>
        </details>
        <details>
          <summary>Run affected commands</summary>
          <pre>{`# see what's been affected by changes
nx affected:dep-graph

# run tests for current changes
nx affected:test

# run e2e tests for current changes
nx affected:e2e
`}</pre>
        </details>
      </main>
    </div>
  )
}
