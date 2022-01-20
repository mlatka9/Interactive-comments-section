import { createSlice } from '@reduxjs/toolkit';
import { comments } from './data';
import { v4 as uuidv4 } from 'uuid';
import { getFromLocalStorage } from 'helpers';

const getInitialComments = () => {
  const storedComments = getFromLocalStorage('comments');
  return storedComments ? storedComments : comments;
};

export const commentSlice = createSlice({
  name: 'comment',
  initialState: getInitialComments(),
  reducers: {
    add: (state, action) => {
      const id = uuidv4();
      const commentData = {
        id,
        content: action.payload.content,
        createdAt: Date.now(),
        score: 0,
        user: action.payload.user,
      };
      if (action.payload.parentCommentId) {
        state.push({
          ...commentData,
          parentId: action.payload.parentCommentId,
        });
      } else {
        state.push({
          ...commentData,
          parentId: null,
        });
      }
      console.log(`Added new comment with id ${id}`);
    },
    remove: (state, action) => {
      const commenthasReply = state.some((comment) => comment.parentId === action.payload);
      if (commenthasReply) {
        const commentToRemove = state.find((comment) => comment.id === action.payload);
        if (!commentToRemove) return;
        commentToRemove.content = 'comment removed';
        commentToRemove.user = {
          image: {
            png: './images/avatars/image-placeholder.png',
            webp: './images/avatars/image-placeholder.webp',
          },
          username: 'nickname',
        };
      } else {
        return state.filter((comment) => comment.id !== action.payload);
      }
    },
    incrementScore: (state, action) => {
      const commentToUpdate = state.find((comment) => comment.id === action.payload.id);
      commentToUpdate.score++;
    },
    decrementScore: (state, action) => {
      const commentToUpdate = state.find((comment) => comment.id === action.payload.id);
      commentToUpdate.score--;
    },
    updateContent: (state, action) => {
      const commentToUpdate = state.find((comment) => comment.id === action.payload.id);
      commentToUpdate.content = action.payload.content;
    },
  },
});

export const { add, remove, incrementScore, decrementScore, updateContent } = commentSlice.actions;

export default commentSlice.reducer;
