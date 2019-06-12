import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Fira+Sans:300,400,400i,500');

  #___gatsby {
    &,
    & > div {
      height: 100%;
    }
  }

  html,
  body,
  form,
  input,
  textarea,
  button {
    font-family: "Fira Sans", sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  html,
  body {
    margin: 0;
    padding: 0;
    background-color: ${props => props.theme.colors.cn100};
    overflow: hidden;
    height: 100%;
    color: ${props => props.theme.colors.n800};
  }

  p {
    ${props => props.theme.typography.text.l};
  }

  strong {
    font-weight: 500;
  }

  html {
    font-size: 10px;
  }

  ::selection {
    background-color: ${props => props.theme.colors.b100};
  }

  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
