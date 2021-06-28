import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

import 'normalize.css'
import styled from 'styled-components'

const StyledHeader = styled.div`
  --outside-margin: 90px;

  background-color: #cf1717;
  display: flex;
  justify-content: space-between;
  position: relative;
  .logo {
    margin-left: var(--outside-margin);
  }
  ul {
    display: flex;
    list-style: none;
    align-items: flex-end;
    height: 100%;
    margin-right: var(--outside-margin);
    li {
      margin-left: 60px;
      margin-bottom: 23px;
    }
    a {
      text-decoration: none;
      color: #fff;
    }
    a:hover {
      text-decoration: underline;
    }
    li:last-child {
      font-size: 1.2em;
    }
  }
`

const Header = () => (
  <StyledHeader>
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
    <div className="nav">
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
    </div>
  </StyledHeader>
)

export default Header
