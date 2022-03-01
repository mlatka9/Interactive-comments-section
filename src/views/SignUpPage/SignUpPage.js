import styled from 'styled-components';
import { useState } from 'react';
import authService from '../../service/auth';

const Wrapper = styled.div``;

const SignUpPage = () => {
  const [loginValue, setLoginValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    authService.register(loginValue, passwordValue);
  };

  return (
    <Wrapper>
      <h1>Sign Up</h1>
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
        <button type="submit">Create new account</button>
      </form>
    </Wrapper>
  );
};

export default SignUpPage;
