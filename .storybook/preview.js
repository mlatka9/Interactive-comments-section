import { ThemeProvider } from "styled-components"
import GlobalStyles from '../src/styles/GlobalStyles'
import { theme } from '../src/styles/theme'
import { Provider } from 'react-redux';
import { store } from 'app/store';


export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  }
}

export const decorators = [
  (Story) => (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Story />
      </ThemeProvider>
    </Provider>
  ),
]