import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import { css } from '@emotion/core'

import { rhythm } from '../utils/typography'

interface HeaderProps {
  siteTitle: string
}

const Header = ({ siteTitle }: HeaderProps) => (
  <header
    style={{
      background: `rebeccapurple`,
    }}
  >
    <div
      css={css`
        margin: 0 auto;
        max-width: 960px;
        padding: ${rhythm(1.5)};
      `}
    >
      <Link
        to="/"
        css={css`
          text-shadow: none;
        `}
      >
        <h1
          css={css`
            margin: 0;
            color: white;
          `}
        >
          {siteTitle}
        </h1>
      </Link>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
