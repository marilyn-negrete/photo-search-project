
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
   * {
        box-sizing: border-box;
        font-family: Arial, sans-serif;
    }

    body {
        min-height: 100vh;
        margin: 0 0 5rem 0;
    }
`;

export default GlobalStyles;
