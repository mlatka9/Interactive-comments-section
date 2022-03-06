import { createSlice } from '@reduxjs/toolkit';
import authService from '../../service/auth';

const user = JSON.parse(localStorage.getItem('interactiveCommentsUser'));

export const login = (username, login) => {
  return async (dispatch) => {
    const { user, token } = await authService.login(username, login);
    console.log("TOKEN22222", token)
    const currentUser = {
      token,
      username: user.username,
      id: user.id,
      image: user.image,
    };
    localStorage.setItem('interactiveCommentsUser', JSON.stringify(currentUser));
    dispatch(setUser(user));
  };
};

export const logout = () => {
  return async (dispatch) => {
    localStorage.removeItem('interactiveCommentsUser');
    await dispatch(unsetUser());
  };
};

const userSlice = createSlice({
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
