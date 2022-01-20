import { useState } from 'react';
import CommentCard from 'components/CommentCard/CommentCard';
import CommentInput from 'components/CommentInput/CommentInput';
import { Wrapper } from './CommentItem.styles';
import PropTypes from 'prop-types';
import React from 'react';

const CommentItem = React.memo(({ commentId }) => {
  const [isReplying, setIsReplying] = useState(false);

  const toggleIsReplying = () => {
    setIsReplying(!isReplying);
  };

  return (
    <Wrapper>
      <CommentCard commentId={commentId} toggleIsReplying={toggleIsReplying} />
      <CommentInput isVisible={isReplying} commentId={commentId} handleCloseInput={toggleIsReplying} />
    </Wrapper>
  );
});

CommentItem.propTypes = {
  commentId: PropTypes.string.isRequired,
};

export default CommentItem;