import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

export const createNotification = (notification, time = 3000) => {
  return async (dispatch) => {
    const generatedId = nanoid();
    notification.id = generatedId;
    dispatch(addNotification(notification));
    setTimeout(() => dispatch(removeNotification(generatedId)), time);
  };
};

const notificationSlice = createSlice({
  name: 'notification',
  initialState: [],
  reducers: {
    addNotification: (state, action) => {
      state.push(action.payload);
    },
    removeNotification: {
      reducer: (state, action) => {
        const id = action.payload;
        return state.filter((notification) => notification.id !== id);
      },
    },
  },
});

export default notificationSlice.reducer;

export const { addNotification, removeNotification } = notificationSlice.actions;
