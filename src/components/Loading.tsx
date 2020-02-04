import { css, keyframes } from "@emotion/core"
import React from "react"
import { useLoadingRoute } from "react-navi"

export default function Loading() {
  return (
    <div
      css={[
        css`
          background-color: blue;
          @media (prefers-color-scheme: dark) {
            background-color: dodgerblue;
          }
          width: 100vw;
          height: 2px;
          position: fixed;

          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2) inset;
          transform: scaleX(0);
          transform-origin: left center;
          transition: transform ease-in 300ms, opacity ease-in 300ms;
          transition-delay: 100ms;
          opacity: 0;
        `,
        !!useLoadingRoute() &&
          css`
            animation: ${appear} 2s cubic-bezier(0.4, 0.45, 0.6, 0.55) infinite;
            animation-fill-mode: forwards;
            opacity: 1;
          `,
      ]}
    />
  )
}

const appear = keyframes`
0% {
  transform: scaleX(0);
}
10% {
  transform: scaleX(0.3);
}
50% {
  transform: scaleX(0.7);
}
90% {
  transform: scaleX(0.8);
}
100% {
  transform: scaleX(1);
}
`
