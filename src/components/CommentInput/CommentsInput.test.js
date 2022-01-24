import { render, screen, fireEvent } from 'test-utils';
import CommentInput from './CommentInput';

it('render input component', async () => {
  render(<CommentInput />);
});

it('change textarea content when typing', () => {
  render(<CommentInput />);
  const textareaElement = screen.getByRole('textbox');
  fireEvent.change(textareaElement, { target: { value: 'New comment' } });
  screen.getAllByDisplayValue('New comment');
});

it('clear textarea content after clicking send button', () => {
  render(<CommentInput />);
  const textareaElement = screen.getByRole('textbox');
  fireEvent.change(textareaElement, { target: { value: 'New comment' } });
  screen.getByDisplayValue('New comment');
  const sendButton = screen.getByRole('button', { name: 'send' });
  fireEvent.click(sendButton);
  const textareaElement1 = screen.queryByDisplayValue('New comment');
  expect(textareaElement1).not.toBeInTheDocument();
});
