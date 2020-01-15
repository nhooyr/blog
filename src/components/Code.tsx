import { css } from "@emotion/core"
import React from "react"
import SyntaxHighlighter from "react-syntax-highlighter"
import githubStyle from "react-syntax-highlighter/dist/esm/styles/hljs/xcode"

export default function Code(props: { language: string; children: string }) {
  return (
    <SyntaxHighlighter
      css={css`
        font-size: 14px;
        padding: 0 !important;
      `}
      language={props.language}
      style={githubStyle}
    >
      {props.children}
    </SyntaxHighlighter>
  )
}
