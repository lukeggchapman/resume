/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React, { ReactNode } from 'react'
import { css } from '@emotion/core'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import { rhythm } from '../utils/typography'
import Header from './header'

interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          css={css`
            margin: 0 auto;
            max-width: 960px;
            padding: ${rhythm(2)};
            padding-top: 0;
          `}
        >
          <main>{children}</main>
          <footer>
            {`© ${new Date().getFullYear()}, Built with `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
