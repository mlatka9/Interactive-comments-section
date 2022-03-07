import List from 'features/comment/List/List';
import Input from 'features/comment/Input/Input';
import { useSelector, useDispatch } from 'react-redux';
import { setInitialComments } from 'features/comment/commentSlice';
import { useEffect } from 'react';

const CommentsPage = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setInitialComments());
  }, [dispatch]);

  return (
    <>
      {user ? <Input /> : null}
      <List />
    </>
  );
};

export default CommentsPage;
