import CommentsList from 'components/CommentsList/CommentsList';
import CommentInput from 'components/CommentInput/CommentInput';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const Wrapper = styled.div`
  max-width: 750px;
  margin: 0 auto;
  padding: 0;
`;
const CommentsPage = () => {
  const user = useSelector(state=>state.user);
  return (
    <Wrapper>
      {user ? <CommentInput /> : null}
      <CommentsList />
    </Wrapper>
  );
};

export default CommentsPage;
