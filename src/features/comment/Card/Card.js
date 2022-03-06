import { ReactComponent as ReplyIcon } from 'assets/images/icons/icon-reply.svg';
import { ReactComponent as DeleteIcon } from 'assets/images/icons/icon-delete.svg';

import {
  CommentContent,
  CommentHeader,
  DeleteButton,
  ButtonsWrapper,
  Mention,
  ReplyButton,
  Wrapper,
  StyledTextarea,
  Tag,
  CardStyledButton,
} from './Card.styles';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useRef, useEffect } from 'react';
import DeleteModal from 'features/comment/DeleteModal/DeleteModal';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en.json';
import { updateComment, deleteComment } from 'features/comment/commentSlice';
import PropTypes from 'prop-types';
import { createNotification } from '../../notification/notificationSlice';
import ScoreCounter from '../ScoreCounter/ScoreCounter';

TimeAgo.addDefaultLocale(en);
const timeAgo = new TimeAgo('en-US');

const Card = ({ commentId: id, toggleIsReplying = () => {} }) => {
  // console.log("render card")
  const dispatch = useDispatch();
  const comment = useSelector((state) => state.comment.find((comment) => comment.id === id));

  const { content, createdAt, parent, user } = comment || {};

  const parentCommentUsername = useSelector(
    (state) => state.comment.find((comment) => comment.id === parent)?.user.username
  );

  const [isEditing, setIsEditing] = useState(false);
  const [textareaValue, setTextareaValue] = useState(content);
  const textareaRef = useRef();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const currentUser = useSelector((state) => state.user) || {};

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

  const handleToggleIsEditing = () => setIsEditing(!isEditing);

  const handleEditComment = async () => {
    setIsEditing(false);
    if (textareaValue !== content) {
      dispatch(updateComment(id, { content: textareaValue }));
      dispatch(createNotification({ title: 'Commned updated' }));
    }
  };

  const handleDeleteComment = () => {
    dispatch(deleteComment(id));
    handleCloseModal();
  };

  const getButtons = () => {
    if (Object.keys(currentUser).length === 0) return null;
    if (currentUser.username === user?.username)
      return (
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
      );
    return (
      <ReplyButton onClick={toggleIsReplying}>
        <ReplyIcon />
        <span>replay</span>
      </ReplyButton>
    );
  };

  //To fix error caused by removing component during exit animation
  let formattedTimestamp = null;
  try {
    formattedTimestamp = timeAgo.format(Date.parse(createdAt));
  } catch (e) {}

  return (
    <>
      <Wrapper>
        <ScoreCounter commentId={id} />
        <CommentHeader>
          <img src={user?.image} alt={user?.username} />
          <h3>{user?.username}</h3>
          {currentUser.username === user?.username ? <Tag>You</Tag> : null}
          <span>{formattedTimestamp}</span>
        </CommentHeader>

        <ButtonsWrapper>{getButtons()}</ButtonsWrapper>

        {isEditing ? (
          <>
            <StyledTextarea ref={textareaRef} value={textareaValue} onChange={handleOnChange}></StyledTextarea>
            <CardStyledButton onClick={handleEditComment}>update</CardStyledButton>
          </>
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

Card.propTypes = {
  commentId: PropTypes.string.isRequired,
  toggleIsReplying: PropTypes.func,
};

export default Card;
