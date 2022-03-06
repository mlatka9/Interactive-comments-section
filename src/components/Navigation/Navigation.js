import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'features/user/userSlice';
import { LoginBox, StyledLink, StyledNav, EmphasisedStyledButton } from './Navigation.styles';

const Navigation = () => {
  const currentUser = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logout());
  };

  return (
    <StyledNav>
      <StyledLink to="/">Comments </StyledLink>
      {currentUser ? (
        <>
          <span>Logged as:</span> {currentUser.username}
          <EmphasisedStyledButton onClick={handleLogOut}>logout</EmphasisedStyledButton>
        </>
      ) : (
        <LoginBox>
          <StyledLink to="/signUp">Sign Up </StyledLink>
          <EmphasisedStyledButton as={Link} to="/login">
            login
          </EmphasisedStyledButton>
        </LoginBox>
      )}
    </StyledNav>
  );
};

export default Navigation;
