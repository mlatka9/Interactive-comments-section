import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import GlobalStyles from './styles/GlobalStyles';
import CommentsList from 'components/CommentsList/CommentsList';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import LoginPage from 'views/LoginPage/LoginPage';
import SignUpPage from 'views/SignUpPage/SignUpPage';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'features/user/userSlice';

function App() {
  const currentUser = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logout());
  };

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <nav>
          {currentUser ? (
            <>
              <Link to="/">Comments </Link>
              <span>logged: {currentUser.username}</span>
              <button onClick={handleLogOut}>logout</button>
            </>
          ) : (
            <>
              <Link to="/signUp">Sign Up </Link>
              <Link to="/login">login</Link>
            </>
          )}
        </nav>
        <Routes>
          <Route path="/" element={<CommentsList />} />
          <Route path="/signUp" element={<SignUpPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
