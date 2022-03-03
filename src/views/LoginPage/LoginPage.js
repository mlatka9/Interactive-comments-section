import styled from 'styled-components';
import { useState } from 'react';

import { useDispatch } from 'react-redux';
import { login } from '../../features/user/userSlice';
import { createNotification } from 'features/notification/notificationSlice';

const Wrapper = styled.div``;
const ErrorMessage = styled.p`
  color: red;
`;

const LoginPage = () => {
  const dispatch = useDispatch();
  const [loginValue, setLoginValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [error, setError] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await dispatch(login(loginValue, passwordValue));
      dispatch(createNotification({title: 'logged in successfuly'}))
    } catch (err) {
      setError(err.response.data);
    }
  };

  return (
    <Wrapper>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        {error ? <ErrorMessage>{error.message}</ErrorMessage> : null}
        <label htmlFor="login">Login: </label>
        <input
          id="login"
          value={loginValue}
          onChange={({ target }) => {
            setLoginValue(target.value);
          }}
        ></input>
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          id="password"
          value={passwordValue}
          onChange={({ target }) => {
            setPasswordValue(target.value);
          }}
        ></input>
        <button type="submit">Login</button>
      </form>
    </Wrapper>
  );
};

export default LoginPage;
