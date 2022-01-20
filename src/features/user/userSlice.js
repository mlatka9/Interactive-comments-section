import { createSlice } from '@reduxjs/toolkit';

const user = {
  image: {
    png: './images/avatars/image-juliusomo.png',
    webp: './images/avatars/image-juliusomo.webp',
  },
  username: 'juliusomo',
};

export const userSlice = createSlice({
  name: 'user',
  initialState: user,
});

export default userSlice.reducer;
