import { useEffect, useLayoutEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../features/user/userSlice';
import { createNotification } from 'features/notification/notificationSlice';
import FormField from 'components/FormField/FormField';
import StyledButton from 'components/Button/Button';
import FormWrapper from 'components/FormWrapper/FormWrapper';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const LoginPage = () => {
  const dispatch = useDispatch();
  const [loginValue, setLoginValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [error, setError] = useState();
  const navigate = useNavigate();

  const currentUser = useSelector((state) => state.user);

  useEffect(() => {
    if (currentUser) {
      navigate('/');
    }
  }, [currentUser, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await dispatch(login(loginValue, passwordValue));
      dispatch(createNotification({ title: 'logged in successfuly' }));
      navigate('/');
    } catch (err) {
      setError(err.response.data);
    }
  };

  const handleChangeLoginValue = (e) => {
    setLoginValue(e.target.value);
  };

  const handleChangePasswordValue = (e) => {
    setPasswordValue(e.target.value);
  };

  return (
    <FormWrapper title="Login" error={error}>
      <form onSubmit={handleSubmit}>
        <FormField label="Login: " name="login" onChange={handleChangeLoginValue} value={loginValue} />
        <FormField
          label="Password: "
          name="password"
          type="password"
          onChange={handleChangePasswordValue}
          value={passwordValue}
        />
        <StyledButton type="submit">Login</StyledButton>
      </form>
    </FormWrapper>
  );
};

export default LoginPage;
