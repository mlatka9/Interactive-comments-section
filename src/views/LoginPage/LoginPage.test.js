import { render, screen, fireEvent } from 'test-utils';
import LoginPage from './LoginPage';
import Navigation from 'components/Navigation/Navigation';
import axios from 'axios';

describe('Login page', () => {
  beforeEach(async () => {
    try {
      await axios.post('http://localhost:5000/api/v1/testing/reset');
    } catch (err) {
      console.log(err);
    }
  });

  test('component render', async () => {
    render(<LoginPage />);
    screen.getByRole('heading', { name: /login/i });
  });

  test('can login with valid credentials', async () => {
    render(<LoginPage />);
    render(<Navigation />);
    const loginInput = screen.getByLabelText(/login:/i);
    const passwordInput = screen.getByLabelText(/password:/i);
    fireEvent.change(loginInput, { target: { value: 'admin' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });

    const submitButton = screen.getByRole('button', { name: /login/i });
    fireEvent.click(submitButton);

    await screen.findByRole('button', { name: /logout/i });
  });

  test('when login with invalid credentials error message is shown', async () => {
    render(<LoginPage />);
    const loginInput = screen.getByLabelText(/login:/i);
    const passwordInput = screen.getByLabelText(/password:/i);
    fireEvent.change(loginInput, { target: { value: 'wrong' } });
    fireEvent.change(passwordInput, { target: { value: 'credentials' } });

    const submitButton = screen.getByRole('button', { name: /login/i });
    fireEvent.click(submitButton);

    await screen.findByText(/Provided credentials are not valid/i);
  });
});
