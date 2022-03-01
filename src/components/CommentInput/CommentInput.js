import { useEffect, useState, useRef } from 'react';
import { createNewNote } from 'features/comment/commentSlice';
import { useDispatch } from 'react-redux';
import { Wrapper, StyledForm } from './CommentInput.styles';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import StyledButton from 'components/Button/Button';

const CommentInput = ({ isVisible = true, commentId = null, handleCloseInput = () => {} }) => {
  const [textareaValue, setTextareaValue] = useState();
  const textareaRef = useRef();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user) || {};

  const handleOnChange = (e) => {
    setTextareaValue(e.target.value);
    if (!textareaRef.current) return;
    textareaRef.current.style.height = `${e.target.scrollHeight}px`;
  };

  useEffect(() => {
    if (!textareaRef.current) return;
    textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
  }, []);

  const handleOnSubmit = (e) => {
    e.preventDefault();

    handleCloseInput();
    setTextareaValue('');
    const comment = {
      parent: commentId,
      content: textareaValue,
      user: user.id,
      score: 0,
    };
    dispatch(createNewNote(comment));
  };

  return (
    <Wrapper>
      <CSSTransition unmountOnExit in={isVisible} key={commentId} timeout={400} classNames="comment">
        <StyledForm onSubmit={handleOnSubmit}>
          <img src={user.image} alt={user.username} />
          <textarea ref={textareaRef} placeholder="Add a comment..." value={textareaValue} onChange={handleOnChange} />
          <StyledButton type="submit">{commentId ? 'reply' : 'send'}</StyledButton>
        </StyledForm>
      </CSSTransition>
    </Wrapper>
  );
};

CommentInput.propTypes = {
  isVisible: PropTypes.bool,
  commentId: PropTypes.string,
  handleCloseInput: PropTypes.func,
};

export default CommentInput;
