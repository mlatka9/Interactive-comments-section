import React from 'react';
import CommentInput from 'components/CommentInput/CommentInput';
import CommentItem from 'components/CommentItem/CommentItem';
import { useSelector } from 'react-redux';
import { Wrapper, TranstionWrapper } from './CommentsList.styles';
import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const CommentsList = ({ depthLevel = 0, parentCommentId = null }) => {
  const commentsIds = useSelector((state) =>
    state.comment
      .filter((comment) => comment.parent === parentCommentId)
      .sort((a, b) => b.createdAt.localeCompare(a.createdAt))
      .map((comment) => comment.id)
  );

  if (!commentsIds.length) return null;

  return (
    <Wrapper depthLevel={depthLevel}>
      {/* {depthLevel === 0 ?  : null} */}
      <TransitionGroup>
        {commentsIds.map((commentId) => (
          <CSSTransition key={commentId} timeout={400} classNames="comment">
            <TranstionWrapper>
              <CommentItem commentId={commentId} />
              <CommentsList depthLevel={depthLevel + 1} parentCommentId={commentId} />
            </TranstionWrapper>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </Wrapper>
  );
};

CommentsList.propTypes = {
  depthLevel: PropTypes.number,
  parentCommentId: PropTypes.string,
};

export default CommentsList;
