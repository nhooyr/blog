import { css, Global } from "@emotion/core"
import React, { Suspense } from "react"
import { NotFoundBoundary, View } from "react-navi"
import NotFound from "./components/404"
import Header from "./components/Header"
import Loading from "./components/Loading"
import ScrollMemory from "./components/ScrollMemory"

export default function App() {
  return (
    <>
      <Global
        styles={css`
          :root {
            color: #333;
            --visitable-color: purple;
            --bright-color: black;
            --active-color: red;

            @media (prefers-color-scheme: dark) {
              color: #eee;
              --visitable-color: #cc99ff;
              --bright-color: white;
              --active-color: #ff0066;

              background-color: black;
            }
          }
        `}
      />
      <ScrollMemory />
      <Loading />
      <div
        css={css`
          padding: 10px 20px 40px 20px;
          max-width: 720px;
          min-width: 320px;
          margin: auto;

          > * + * {
            margin: 30px 0 0 0;
          }
        `}
      >
        <Header />
        <main
          css={css`
            > * + * {
              margin: 20px 0 0 0;
            }
          `}
        >
          {typeof window !== "undefined" ? (
            <Suspense fallback={null}>
              <NotFoundBoundary render={NotFound}>
                <View disableScrolling />
              </NotFoundBoundary>
            </Suspense>
          ) : (
            <View disableScrolling />
          )}
        </main>
      </div>
    </>
  )
}
