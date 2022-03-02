import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'features/user/userSlice';
const Navigation = () => {
  const currentUser = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logout());
  };
  return (
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
  );
};

export default Navigation;
