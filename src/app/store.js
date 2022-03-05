import { configureStore } from '@reduxjs/toolkit';
import commentReducer from 'features/comment/commentSlice';
import userSlice from 'features/user/userSlice';
import notificationSlice from 'features/notification/notificationSlice';

export const store = configureStore({
  reducer: {
    comment: commentReducer,
    user: userSlice,
    notification: notificationSlice,
  },
});
