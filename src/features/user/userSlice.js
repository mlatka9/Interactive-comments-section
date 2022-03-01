import { createSlice } from '@reduxjs/toolkit';
import authService from '../../service/auth';

const user = JSON.parse(localStorage.getItem('interactiveCommentsUser'));

export const login = (username, login) => {
  return async (dispatch) => {
    const response = await authService.login(username, login);
    const user = {
      token: response.token,
      username: response.user.username,
      id: response.user.id,
    };
    localStorage.setItem('interactiveCommentsUser', JSON.stringify(user));
    dispatch(setUser(user));
  };
};

export const logout = () => {
  return async (dispatch) => {
    localStorage.removeItem('interactiveCommentsUser');
    await dispatch(unsetUser());
  };
};

export const userSlice = createSlice({
  name: 'user',
  initialState: user,
  reducers: {
    setUser: (state, action) => {
      return action.payload;
    },
    unsetUser: (state) => {
      return null;
    },
  },
});

export const { setUser, unsetUser } = userSlice.actions;

export default userSlice.reducer;
