import CommentsPage from 'views/CommentsPage/CommentsPage';
import { render, screen, fireEvent, within } from 'test-utils';
import Notifications from 'features/notification/Notifications/Notifications';
import axios from 'axios';
import { store } from 'app/store';
import LoginPage from 'views/LoginPage/LoginPage';

const getCommentId = async (position) => {
  const comments = store.getState().comment;
  return comments[position].id;
};

describe('Comments page', () => {
  beforeEach(async () => {
    try {
      await axios.post('http://localhost:5000/api/v1/testing/reset');
    } catch (err) {
      console.log(err);
    }
  });

  test('render component', () => {
    render(<CommentsPage />);
  });

  test('comments display correct data', async () => {
    render(<CommentsPage />);
    await screen.findByText(/Example comment 1/i);
    await screen.findByText(/Example comment 2/i);
    const usernameHeader = await screen.findAllByText(/admin/i);
    expect(usernameHeader).toHaveLength(2);
  });

  test('comment cannot be liked by non login user', async () => {
    render(<CommentsPage />);
    render(<Notifications />);
    const id = await getCommentId(1);
    
    const commentItem = await screen.findByTestId(`comment-item-${id}`);

    const incrementButton = within(commentItem).getByRole('button', { name: /increment score/i });
    const initialScore = screen.getByTestId(`score-counter-${id}`).textContent;

    fireEvent.click(incrementButton);
    const scoreAfterClick = screen.getByTestId(`score-counter-${id}`).textContent;

    expect(scoreAfterClick).toEqual(initialScore);
    await screen.findByText(/You must be logged in to like other posts/i);
  });
  
});
