import { useState, useEffect } from 'react';
import authService from '../../service/auth';
import { useDispatch } from 'react-redux';
import { createNotification } from 'features/notification/notificationSlice';
import FormWrapper from 'components/FormWrapper/FormWrapper';
import FormField from 'components/FormField/FormField';
import StyledButton from 'components/Button/Button';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const SignUpPage = () => {
  const [loginValue, setLoginValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [error, setError] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const currentUser = useSelector((state) => state.user);

  useEffect(() => {
    if (currentUser) {
      navigate('/');
    }
  }, [currentUser, navigate]);

  const handleSubmit = async (e) => {
    console.log('handleSubmit');
    e.preventDefault();

    try {
      await authService.register(loginValue, passwordValue);
      dispatch(createNotification({ title: 'Account created' }));
      navigate('/login');
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
    <FormWrapper title="Sign Up" error={error}>
      <form onSubmit={handleSubmit}>
        <FormField label="Login: " name="login" onChange={handleChangeLoginValue} value={loginValue} />
        <FormField
          label="Password: "
          name="password"
          type="password"
          onChange={handleChangePasswordValue}
          value={passwordValue}
        />
        <StyledButton type="submit">create account</StyledButton>
      </form>
    </FormWrapper>
  );
};

export default SignUpPage;
