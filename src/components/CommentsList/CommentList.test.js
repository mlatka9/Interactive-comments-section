import { render, screen, fireEvent, waitForElementToBeRemoved, within, cleanup, rerender } from 'test-utils';
import CommentsList from './CommentsList';

it('render list component', async () => {
  render(<CommentsList />);
});

it('add new comment after fill form and press send button', () => {
  render(<CommentsList />);
  expect(screen.queryByText(/new testing comment/i)).not.toBeInTheDocument();
  const textareaElement = screen.getByPlaceholderText(/add a comment/i);
  fireEvent.change(textareaElement, { target: { value: 'new testing comment' } });
  const buttonElement = screen.getByRole('button', { name: /send/i });
  fireEvent.click(buttonElement);
  screen.getByText(/new testing comment/i);
});

it('delete comment with replies', async () => {
  const commentItemId = '2';
  render(<CommentsList />);
  const commentItemElement = screen.getByTestId(`comment-item-${commentItemId}`);
  const deleteButton = within(commentItemElement).getByRole('button', { name: /delete/i });
  fireEvent.click(deleteButton);
  const deleteButtonOnModal = screen.getByRole('button', { name: /yes, delete/i });
  fireEvent.click(deleteButtonOnModal);
  within(commentItemElement).getByText(/comment removed/i);
});

it('delete comment without replies', async () => {
  const commentItemId = '5';
  render(<CommentsList />);
  const commentItemElement = screen.getByTestId(`comment-item-${commentItemId}`);
  const deleteButton = within(commentItemElement).getByRole('button', { name: /delete/i });
  fireEvent.click(deleteButton);
  const deleteButtonOnModal = screen.getByRole('button', { name: /yes, delete/i });
  fireEvent.click(deleteButtonOnModal);
  await waitForElementToBeRemoved(() => screen.queryByTestId(`comment-item-${commentItemId}`));
});
