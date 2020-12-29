import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap');
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    transition: all .35s ease;
  }
  *:focus {
    outline: 0;
  }
  html, body, #root {
    font-size: 62.5%;
    height: 100%;
  }
  html {
    background: #040404;
  }
  
  body {
    -webkit-font-smoothing: antialiased;
    overflow-anchor: none;
  }

  body, input, button {
    font: 1.6rem 'Roboto', sans-serif;
  }
  a, a:visited {
    text-decoration: none;
  }
  ul {
    list-style: none;
  }
  button {
    cursor: pointer;
  }
`;
