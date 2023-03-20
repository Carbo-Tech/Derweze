import { DefaultTheme, createGlobalStyle } from 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
    };
  }
}

const theme: DefaultTheme = {
  colors: {
    primary: '#000000', // sostituisci questo con il tuo colore primario
    // Aggiungi qui gli altri colori che vuoi utilizzare
  },
};

const GlobalStyle = createGlobalStyle`
  html,
  body {
    color: ${({ theme }) => theme.colors.primary};
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  * {
    box-sizing: border-box;
  }
`

export default GlobalStyle
