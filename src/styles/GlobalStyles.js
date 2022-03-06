import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    *,*::after, *::before {
        box-sizing: border-box;
    }

    html, body {
        overflow-x: hidden;
        min-height: 100vh;
    }

    body{
        margin: 0;
        font-family: 'Rubik', sans-serif;
        background-color: ${({ theme }) => theme.colors.veryLightGray};
    }

    button, input, textarea {
        font-family: inherit;
    }
`;

export default GlobalStyles;
