import { createSlice } from '@reduxjs/toolkit';

//

const initialState = {
  token: localStorage.getItem('access_token'),
  currentUser: null,
};

export const authSlice = createSlice({
  name: 'product',
  initialState,

  reducers: {
    actLoginSuccess: (state, action) => {
      localStorage.setItem('access_token', action.payload.token);
      state.currentUser = action.payload.user;
      state.token = action.payload.token;
    },
    actLogout: (state, action) => {
      localStorage.removeItem('access_token');

      (state.currentUser = null), (state.token = '');
    },
  },
});

export const { actLoginSuccess, actLogout } = authSlice.actions;

export default authSlice.reducer;
