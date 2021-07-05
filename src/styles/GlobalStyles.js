import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  :root {
    --red: #cf1717;
    --white: #F5F0F0;
    --border-radius: 10px;
    --black: hsl(0, 20%, 15%);
  }

  body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-weight: 400;
    color: var(--black);
    max-width: 1600px;
    margin: 0 auto;
  }

  img {
    max-width: 100%;
  }

  a {
    text-decoration: none;
  }

  a:hover {
    cursor: pointer;
  }
`

export default GlobalStyles
