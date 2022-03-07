import { render, screen, fireEvent } from 'test-utils';
import SignUpPage from './SignUpPage';
import axios from 'axios';
import Notifications from 'features/notification/Notifications/Notifications';

describe('Sign Up page', () => {
  beforeEach(async () => {
    try {
      await axios.post('http://localhost:5000/api/v1/testing/reset');
    } catch (err) {
      console.log(err);
    }
  });

  test('component render', () => {
    render(<SignUpPage />);
    screen.getByRole('heading', { name: /Sign Up/i });
  });

  test('new account can be created', async () => {
    render(<SignUpPage />);
    render(<Notifications />);

    const loginInput = screen.getByLabelText(/login:/i);
    const passwordInput = screen.getByLabelText(/password:/i);
    fireEvent.change(loginInput, { target: { value: 'new admin' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });

    const submitButton = screen.getByRole('button', { name: /create account/i });
    fireEvent.click(submitButton);

    await screen.findByText(/Account created/i);
  });

  test('Error message is shown when fields are empty', async () => {
    render(<SignUpPage />);
    const submitButton = screen.getByRole('button', { name: /create account/i });
    fireEvent.click(submitButton);
    await screen.findByText(/Username is required Password is required/i);
  });
});
