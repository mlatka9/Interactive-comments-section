import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import GlobalStyles from './styles/GlobalStyles';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import LoginPage from 'views/LoginPage/LoginPage';
import SignUpPage from 'views/SignUpPage/SignUpPage';
import CommentsPage from 'views/CommentsPage/CommentsPage';
import Navigation from 'components/Navigation/Navigation';
import Notifications from 'components/Notifications/Notifications';
import styled from 'styled-components';

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
          <Notifications />
    
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
