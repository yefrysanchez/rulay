// src/slices/authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    token: localStorage.getItem('token') || null,
    isLogged: false
  },
  reducers: {
    login(state, action) {
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;
      localStorage.setItem('token', token);
      state.isLogged = true
    },
    logout(state) {
      state.user = null;
      state.token = null;
      localStorage.removeItem('token');
      state.isLogged = false

    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
