import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html, body {
    font-family: 'Poppins', sans-serif;
    font-size: 62.5%;
    background-color: #0AB6FF;
  }

  h1 {
    color: #3b3054;
    font-size: 3.2rem;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  input, button {
    font-family: inherit;
    border-radius: 1rem;
  }

  input:focus, button:focus {
    outline: none;
  }

  button {
    border: none;
  }

  @media screen and (max-width: 500px) {
    html {
      font-size: 56.25%;
    }
  }
`
export default GlobalStyles