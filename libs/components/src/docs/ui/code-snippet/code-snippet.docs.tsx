import { CodeSnippet } from "@watheia/docs.ui.code-snippet"
import { ThemeCompositions } from "@watheia/docs.theme.theme-compositions"
import { Example } from "@watheia/docs.types.docs-file"
import { Paragraph } from "@watheia/base-ui.atoms.paragraph"

export const labels = ["react", "ui-component", "code snippet"]
export const abstract = "A syntax highlighter for React snippets."

export const examples: Example[] = [
  {
    scope: {
      CodeSnippet,
      ThemeCompositions
    },
    title: "Using the Code Snippet",
    description: `The Code Snippet uses the react-syntax-highlighter library. Use it to add snippets
      of code to your documentation.`,
    code: `
<ThemeCompositions>
    <div
    style={{
        display: 'inline-flex',
        alignItems: 'center',
        maxWidth: '600px',
    }}
    >
    <CodeSnippet>
        function HelloWorld () {}
    </CodeSnippet>
    </div>
</ThemeCompositions>
`
  }
]
