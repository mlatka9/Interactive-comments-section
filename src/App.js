import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import GlobalStyles from './styles/GlobalStyles';
import { Routes, Route } from 'react-router-dom';
import LoginPage from 'views/LoginPage/LoginPage';
import SignUpPage from 'views/SignUpPage/SignUpPage';
import CommentsPage from 'views/CommentsPage/CommentsPage';
import Navigation from 'components/Navigation/Navigation';
import Notifications from 'features/notification/Notifications/Notifications';
import styled from 'styled-components';

const Wrapper = styled.div`
  max-width: 750px;
  margin: 0 auto;
  padding: 0 20px 30px;
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Wrapper>
        <Navigation />
        <Routes>
          <Route path="/" element={<CommentsPage />} />
          <Route path="/signUp" element={<SignUpPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
        <Notifications />
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
