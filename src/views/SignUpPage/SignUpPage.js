import styled from 'styled-components';
import { useState } from 'react';
import authService from '../../service/auth';
import { useDispatch } from 'react-redux';
import { createNotification } from 'features/notification/notificationSlice';

const Wrapper = styled.div``;

const ErrorMessage = styled.p`
  color: red;
`;

const SignUpPage = () => {
  const [loginValue, setLoginValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [error, setError] = useState();
  const dispatch = useDispatch();

  console.log('SignUpPage renders');

  const handleAddNotification = () => {
    const dummyNotification = {
      Title: 'title',
      subTitle: 'subTitle',
      type: 'success',
    };
    dispatch(createNotification(dummyNotification));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await authService.register(loginValue, passwordValue);
    } catch (err) {
      setError(err.response.data);
    }
  };

  return (
    <Wrapper>
      <button onClick={handleAddNotification}> distapch notif</button>
      <h1>Sign Up</h1>

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
        <button type="submit">Create new account</button>
      </form>
    </Wrapper>
  );
};

export default SignUpPage;
