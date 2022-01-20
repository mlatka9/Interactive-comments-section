import { ReactComponent as ReplyIcon } from 'assets/images/icons/icon-reply.svg';
import { ReactComponent as DeleteIcon } from 'assets/images/icons/icon-delete.svg';
import { ReactComponent as PlusIcon } from 'assets/images/icons/icon-plus.svg';
import { ReactComponent as MinusIcon } from 'assets/images/icons/icon-minus.svg';
import {
  CommentContent,
  CommentHeader,
  DeleteButton,
  ButtonsWrapper,
  Mention,
  ReplyButton,
  ScoreCounter,
  Wrapper,
  StyledTextarea,
  Tag,
} from './CommentCard.styles';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useRef, useEffect } from 'react';
import DeleteModal from 'components/DeleteModal/DeleteModal';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en.json';
import { decrementScore, incrementScore, updateContent } from 'features/comment/commentSlice';
import PropTypes from 'prop-types';
import { remove } from 'features/comment/commentSlice';

TimeAgo.addDefaultLocale(en);
const timeAgo = new TimeAgo('en-US');

const CommentCard = ({ commentId: id, toggleIsReplying }) => {
  const dispatch = useDispatch();
  const comment = useSelector((state) => state.comment.find((comment) => comment.id === id));
  const {
    content,
    createdAt,
    score,
    parentId,
    user: {
      username,
      image: { webp },
    },
  } = comment || { user: { image: { webp: '' } } }; //Fallback to fix error caused by removing component during exit aniamtion

  const parentCommentUsername = useSelector(
    (state) => state.comment.find((comment) => comment.id === parentId)?.user.username
  );

  const [isEditing, setIsEditing] = useState(false);
  const [textareaValue, setTextareaValue] = useState(content);
  const textareaRef = useRef();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const currentUser = useSelector((state) => state.user);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [isEditing]);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleOnChange = (e) => {
    setTextareaValue(e.target.value);
    textareaRef.current.style.height = `${e.target.scrollHeight}px`;
  };

  const handleToggleIsEditing = () => {
    if (isEditing) {
      setIsEditing(false);
      if (textareaValue === content) return;
      dispatch(
        updateContent({
          id,
          content: textareaValue,
        })
      );
    } else {
      setIsEditing(true);
    }
  };

  const handleIncrementScore = () => {
    dispatch(incrementScore({ id }));
  };

  const handleDecrementScore = () => {
    dispatch(decrementScore({ id }));
  };

  const handleDeleteComment = () => {
    dispatch(remove(id));
    handleCloseModal();
  };

  //To fix error caused by removing component during exit animation
  let formattedTimestamp = null;
  try {
    formattedTimestamp = timeAgo.format(createdAt);
  } catch (e) {}

  return (
    <>
      <Wrapper>
        <ScoreCounter>
          <button onClick={handleIncrementScore}>
            <PlusIcon />
          </button>
          <span>{score}</span>
          <button onClick={handleDecrementScore}>
            <MinusIcon />
          </button>
        </ScoreCounter>
        <CommentHeader>
          <img src={webp} alt={username} />
          <h3>{username}</h3>
          {currentUser.username === username ? <Tag>You</Tag> : null}
          <span>{formattedTimestamp}</span>
        </CommentHeader>
        <ButtonsWrapper>
          {currentUser.username === username ? (
            <>
              <DeleteButton onClick={() => setIsModalOpen(true)}>
                <DeleteIcon />
                <span>delete</span>
              </DeleteButton>
              <ReplyButton onClick={handleToggleIsEditing}>
                <ReplyIcon />
                <span>edit</span>
              </ReplyButton>
            </>
          ) : (
            <ReplyButton onClick={toggleIsReplying}>
              <ReplyIcon />
              <span>replay</span>
            </ReplyButton>
          )}
        </ButtonsWrapper>
        {isEditing ? (
          <StyledTextarea ref={textareaRef} value={textareaValue} onChange={handleOnChange}></StyledTextarea>
        ) : (
          <CommentContent>
            {parentCommentUsername ? <Mention>{`@${parentCommentUsername}`}</Mention> : null}
            {content}
          </CommentContent>
        )}
      </Wrapper>
      {isModalOpen ? (
        <DeleteModal handleDeleteComment={handleDeleteComment} handleCloseModal={() => setIsModalOpen(false)} />
      ) : null}
    </>
  );
};

CommentCard.propTypes = {
  commentId: PropTypes.string.isRequired,
  toggleIsReplying: PropTypes.func.isRequired,
};

export default CommentCard;
