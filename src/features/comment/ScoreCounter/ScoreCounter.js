import { useDispatch } from 'react-redux';
import { ReactComponent as PlusIcon } from 'assets/images/icons/icon-plus.svg';
import { ReactComponent as MinusIcon } from 'assets/images/icons/icon-minus.svg';
import { Wrapper } from './ScoreCounter.styles';
import { updateComment } from '../commentSlice';
import { createNotification } from 'features/notification/notificationSlice';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

const ScoreCounter = ({ commentId }) => {
  // console.log("render counter")
  const dispatch = useDispatch();
  const { score } = useSelector((state) => state.comment.find((comment) => comment.id === commentId)) || 0;

  const handleIncrementScore = async () => {
    try {
      await dispatch(updateComment(commentId, { score: score + 1 }));
    } catch (err) {
      dispatch(createNotification({ title: 'You must be logged in to like other posts', type: 'error' }));
    }
  };

  const handleDecrementScore = () => {
    try {
      dispatch(updateComment(commentId, { score: score - 1 }));
    } catch (err) {
      dispatch(createNotification({ title: 'You must be logged in to like other posts', type: 'error' }));
    }
  };

  return (
    <Wrapper>
      <button onClick={handleIncrementScore}>
        <PlusIcon aria-label="increment score" />
      </button>
      <span data-testid={`score-counter-${commentId}`}>{score}</span>
      <button onClick={handleDecrementScore}>
        <MinusIcon aria-label="decrement score" />
      </button>
    </Wrapper>
  );
};

ScoreCounter.propTypes = {
  commentId: PropTypes.string.isRequired,
};

export default ScoreCounter;
