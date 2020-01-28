import React from 'react'
import { Link } from '@reach/router'
import { css, keyframes } from '@emotion/core'
import { primary } from './colors'

const spin = keyframes`
  to {
    transform: rotate(360deg)
  } 
`

const NavBar = () => {
  return(
    <header
      css={css`
        background-color: ${primary};
        padding: 15px;
      `}
    >
      <Link to='/'>Adopt me!</Link>
      <span 
        css={css`
          font-size: 60px;
          display: inline-block;
          animation: 1s ${spin} linear infinite;
        `}
        aria-label='logo' role='img'
      >
        🦉
      </span>
    </header>
  )
}

export default NavBar
