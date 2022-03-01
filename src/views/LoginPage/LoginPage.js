import styled from 'styled-components';
import { useState } from 'react';

import { useDispatch } from 'react-redux';
import { login } from '../../features/user/userSlice';

const Wrapper = styled.div``;

const LoginPage = () => {
  const dispatch = useDispatch();
  const [loginValue, setLoginValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(loginValue, passwordValue));
  };

  return (
    <Wrapper>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
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
