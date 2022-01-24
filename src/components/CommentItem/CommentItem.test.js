import { render, screen, fireEvent, waitForElementToBeRemoved } from 'test-utils';
import CommentItem from './CommentItem';

it('render item component', async () => {
  render(<CommentItem commentId="1" />);
});

it('shows input after clicking on reply button', () => {
  render(<CommentItem commentId="1" />);
  const replyButton = screen.getByRole('button', { name: /replay/i });
  fireEvent.click(replyButton);
  screen.getByRole('button', { name: /send/i });
});

it('hide input after clicking on send button', async () => {
  render(<CommentItem commentId="1" />);
  const replyButton = screen.getByRole('button', { name: /replay/i });
  fireEvent.click(replyButton);
  const sendButton = screen.getByRole('button', { name: /send/i });
  fireEvent.click(sendButton);
  await waitForElementToBeRemoved(() => screen.queryByRole('button', { name: /send/i }));
});
