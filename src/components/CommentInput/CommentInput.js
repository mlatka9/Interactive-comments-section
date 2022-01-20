import { useEffect, useState, useRef } from 'react';
import { add } from 'features/comment/commentSlice';
import { useDispatch } from 'react-redux';
import { Wrapper, StyledForm } from './CommentInput.styles';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';

const CommentInput = ({ isVisible = false, commentId = null, handleCloseInput = () => {} }) => {
  const [textareaValue, setTextareaValue] = useState();
  const textareaRef = useRef();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

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
    const payload = {
      parentCommentId: commentId,
      content: textareaValue,
      user,
    };
    dispatch(add(payload));
  };

  return (
    <Wrapper>
      <CSSTransition unmountOnExit in={isVisible} key={commentId} timeout={400} classNames="comment">
        <StyledForm onSubmit={handleOnSubmit}>
          <img src={user.image.webp} alt={user.username} />
          <textarea ref={textareaRef} placeholder="Add a comment..." value={textareaValue} onChange={handleOnChange} />
          <button type="submit">send</button>
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
