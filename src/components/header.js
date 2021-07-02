import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

import 'normalize.css'
import styled from 'styled-components'
import GlobalStyles from '../styles/GlobalStyles'

const StyledHeader = styled.div`
  --outside-margin: 90px;

  width: 100%;
  background-color: var(--red);
  display: flex;
  justify-content: space-between;
  position: relative;
  .logo {
    margin-left: var(--outside-margin);
  }
  nav {
    [aria-current]:not([aria-current='false']) {
      border-bottom: solid 1px var(--white);
    }
  }
  ul {
    display: flex;
    list-style: none;
    align-items: flex-end;
    height: 100%;
    margin-right: var(--outside-margin);
    margin-top: 0;
    margin-bottom: 0;
    padding: 0;
    li {
      margin-left: 0;
      margin-bottom: 0;
    }
    a {
      text-decoration: none;
      color: #fff;
    }
    a {
      display: block;
      padding: 3px;
      margin-right: 20px;
      margin-bottom: 20px;
    }
    a:hover {
      transform: scale(1.1);
    }
    li:last-child {
      font-size: 1.2em;
    }
  }
`

const Header = () => (
  <StyledHeader>
    <GlobalStyles />
    <div className="logo">
      <Link to="/">
        <StaticImage
          src="../images/logo.png"
          width={150}
          quality={95}
          formats={['AUTO', 'WEBP', 'AVIF']}
          alt="Pizza Place"
        />
      </Link>
    </div>
    <nav>
      <ul>
        <li>
          <Link to="/">Menu</Link>
        </li>
        <li>
          <Link to="/location">Location</Link>
        </li>
        <li>
          <a href="tel:222-333-4444">222-333-4444</a>
        </li>
      </ul>
    </nav>
  </StyledHeader>
)

export default Header
