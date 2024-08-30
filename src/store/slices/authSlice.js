// src/slices/authSlice.js
import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    token: localStorage.getItem("token") || null,
    isLogged: false,
    newComment: false,
  },
  reducers: {
    login(state, action) {
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;
      localStorage.setItem("token", token);
      state.isLogged = true;
    },
    logout(state) {
      state.user = null;
      state.token = null;
      localStorage.removeItem("token");
      state.isLogged = false;
    },
    newCommentAdded(state, action) {
      state.newComment = action.payload;
    },
  },
});

export const { login, logout, newCommentAdded } = authSlice.actions;
export default authSlice.reducer;
