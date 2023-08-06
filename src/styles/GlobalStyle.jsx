import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box
  }

  body {
    padding: 0;
    margin: 0;
  }

  ul, ol {
    list-style-type: none;
  }

  a {
    text-decoration-line: none;
  }

  input {
    outline: none;
  }
`;

export default GlobalStyle;
