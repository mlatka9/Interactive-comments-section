import { createSlice } from '@reduxjs/toolkit';
import CommentsService from '../../service/comments';
import { createNotification } from 'features/notification/notificationSlice';

export const setInitialComments = () => {
  return async (dispatch) => {
    const comments = await CommentsService.getAllComments();
    dispatch(setComments(comments));
  };
};

export const createNewNote = (comment) => {
  return async (dispatch) => {
    const createdComment = await CommentsService.addComment(comment);
    dispatch(addComment(createdComment));
    await dispatch(createNotification({ title: 'New comment created' }));
  };
};

export const updateComment = (id, body) => {
  return async (dispatch) => {
    const updatedComment = await CommentsService.updateComment(id, body);
    await dispatch(update(updatedComment));
  };
};

export const deleteComment = (id) => {
  return async (dispatch) => {
    const updatedComment = await CommentsService.deleteComment(id);
    if (updatedComment) {
      dispatch(update(updatedComment));
    } else {
      dispatch(remove(id));
    }
    await dispatch(createNotification({ title: 'Commned removed' }));
  };
};

const commentSlice = createSlice({
  name: 'comment',
  initialState: [],
  reducers: {
    setComments: (state, action) => {
      state.push(...action.payload);
    },
    addComment: (state, action) => {
      state.push(action.payload);
    },
    update: (state, action) => {
      const updatedComment = action.payload;
      const nextState = state.map((comment) => (comment.id === updatedComment.id ? updatedComment : comment));
      return nextState;
    },
    remove: (state, action) => {
      return state.filter((comment) => comment.id !== action.payload);
    },
  },
});

export const { remove, setComments, addComment, update } = commentSlice.actions;

export default commentSlice.reducer;
