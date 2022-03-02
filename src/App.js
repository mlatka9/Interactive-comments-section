import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import GlobalStyles from './styles/GlobalStyles';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import LoginPage from 'views/LoginPage/LoginPage';
import SignUpPage from 'views/SignUpPage/SignUpPage';
import CommentsPage from 'views/CommentsPage/CommentsPage';
import Navigation from 'components/Navigation/Navigation';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Navigation />
        <Routes>
          <Route path="/" element={<CommentsPage />} />
          <Route path="/signUp" element={<SignUpPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
