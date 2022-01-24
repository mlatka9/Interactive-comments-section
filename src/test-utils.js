import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { Provider } from 'react-redux';
import { store } from 'app/store';

const AllTheProviders = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>{children}</Provider>
    </ThemeProvider>
  );
};

const customRender = (ui, options) => render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';

export { customRender as render };
