import { css } from "@emotion/core"
import React, { Suspense } from "react"
import { NotFoundBoundary, View } from "react-navi"
import NotFound from "./components/404"
import Header from "./components/Header"
import Loading from "./components/Loading"
import ScrollMemory from "./components/ScrollMemory"

export default function App() {
  return (
    <>
      <ScrollMemory />
      <Loading />
      <div
        css={css`
          color: #333;

          padding: 10px 20px 40px 20px;
          max-width: 720px;
          min-width: 320px;
          margin: auto;

          > * + * {
            margin: 40px 0 0 0;
          }
        `}
      >
        <Header />
        <main
          css={css`
            > * + * {
              margin: 30px 0 0 0;
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
