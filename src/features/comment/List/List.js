import React from 'react';
import Item from 'features/comment/Item/Item';
import { useSelector } from 'react-redux';
import { Wrapper, TranstionWrapper, Fallback } from './List.styles';
import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const List = ({ depthLevel = 0, parentCommentId = null }) => {
  const commentsIds = useSelector((state) =>
    state.comment
      .filter((comment) => comment.parent === parentCommentId)
      .sort((a, b) => b.createdAt.localeCompare(a.createdAt))
      .map((comment) => comment.id)
  );
  
  if (!commentsIds.length && depthLevel === 0) return <Fallback>No comments to show...</Fallback>;
  if (!commentsIds.length) return null;

  return (
    <Wrapper depthLevel={depthLevel}>
      <TransitionGroup>
        {commentsIds.map((commentId) => (
          <CSSTransition key={commentId} timeout={400} classNames="comment">
            <TranstionWrapper>
              <Item commentId={commentId} />
              <List depthLevel={depthLevel + 1} parentCommentId={commentId} />
            </TranstionWrapper>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </Wrapper>
  );
};

List.propTypes = {
  depthLevel: PropTypes.number,
  parentCommentId: PropTypes.string,
};

export default List;
