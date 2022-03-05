import CommentsList from 'components/CommentsList/CommentsList';
import CommentInput from 'components/CommentInput/CommentInput';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const CommentsPage = () => {
  const user = useSelector(state=>state.user);
  return (
    <div>
      {user ? <CommentInput /> : null}
      <CommentsList />
    </div>
  );
};

export default CommentsPage;
