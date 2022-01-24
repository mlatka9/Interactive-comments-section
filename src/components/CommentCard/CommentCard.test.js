import { render, screen, fireEvent } from 'test-utils';
import CommentCard from './CommentCard';

it('render card component', async () => {
  render(<CommentCard commentId="1" />);
});

it('increment score counter after clicking plus button', () => {
  const commentId = '1';
  render(<CommentCard commentId={commentId} />);
  const incrementButton = screen.getByRole('button', { name: /icon-plus/i });
  const spanElement = screen.getByTestId(`score-counter-${commentId}`);
  const scoreValue = Number(spanElement.textContent);
  fireEvent.click(incrementButton);
  expect(Number(spanElement.textContent)).toBe(scoreValue + 1);
});

it('decrement score counter after clicking minus button', () => {
  const commentId = '1';
  render(<CommentCard commentId={commentId} />);

  const decrementButton = screen.getByRole('button', { name: /icon-minus/i });
  const spanElement = screen.getByTestId(`score-counter-${commentId}`);
  const scoreCountervalue = Number(spanElement.textContent);
  fireEvent.click(decrementButton);
  screen.getByText(scoreCountervalue - 1);
});
