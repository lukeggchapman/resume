/* eslint-disable jsx-a11y/html-has-lang, react/no-danger */
import React from 'react'
import { css } from '@emotion/core'

export interface HTMLProps {
  htmlAttributes: object
  headComponents: React.ReactNode
  bodyAttributes: object
  preBodyComponents: React.ReactNode
  body: string
  postBodyComponents: React.ReactNode
}

export default function HTML(props: HTMLProps) {
  const {
    body,
    htmlAttributes,
    headComponents,
    bodyAttributes,
    preBodyComponents,
    postBodyComponents,
  } = props

  return (
    <html
      {...htmlAttributes}
      css={css`
        height: 100%;
        overflow: hidden;
      `}
    >
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {headComponents}
      </head>
      <body
        {...bodyAttributes}
        css={css`
          height: 100%;
        `}
      >
        {preBodyComponents}
        <noscript key="noscript" id="gatsby-noscript">
          This app works best with JavaScript enabled.
        </noscript>
        <div
          key="body"
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: body }}
          css={css`
            height: 100%;
            > div[role='group'][tabindex] {
              height: 100%;
            }
          `}
        />
        {postBodyComponents}
      </body>
    </html>
  )
}
