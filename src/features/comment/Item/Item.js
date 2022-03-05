import { useState } from 'react';
import Card from 'features/comment/Card/Card';
import Input from 'features/comment/Input/Input';
import { Wrapper } from './Item.styles';
import PropTypes from 'prop-types';
import React from 'react';

const Item = React.memo(({ commentId }) => {
  // console.log(`item  ${commentId} is render `)
  const [isReplying, setIsReplying] = useState(false);

  const toggleIsReplying = () => {
    setIsReplying(!isReplying);
  };

  return (
    <Wrapper data-testid={`comment-item-${commentId}`}>
      <Card commentId={commentId} toggleIsReplying={toggleIsReplying} />
      <Input isVisible={isReplying} commentId={commentId} handleCloseInput={toggleIsReplying} />
    </Wrapper>
  );
});

Item.propTypes = {
  commentId: PropTypes.string.isRequired,
};

export default Item;
