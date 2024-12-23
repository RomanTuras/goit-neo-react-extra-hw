// src/redux/auth/slice.js

import { createSlice } from '@reduxjs/toolkit';
import { login, logout, refreshUser, register } from './operations.js';

const slice = createSlice({
  name: 'auth',
  initialState: {
    user: {
      name: null,
      email: null,
    },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
    isError: false,
    isRegisterError: false,
    isLoginError: false,
    isAuthError: false,
  },
  extraReducers: builder => {
    builder
      .addCase(register.pending, state => {
        state.isRegisterError = false;
      })
      .addCase(register.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.isRegisterError = false;
      })
      .addCase(register.rejected, state => {
        state.isRegisterError = true;
      })
      .addCase(login.pending, state => {
        state.isLoginError = false;
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.isError = false;
        state.isLoginError = false;
      })
      .addCase(login.rejected, state => {
        state.isLoginError = true;
      })
      .addCase(logout.fulfilled, state => {
        state.user.name = null;
        state.user.email = null;
        state.token = null;
        state.isLoggedIn = false;
        state.isRefreshing = false;
        state.isAuthError = false;
        // TODO: clear local storage
      })
      .addCase(refreshUser.pending, state => {
        state.isLoggedIn = false;
        state.isRefreshing = true;
        state.isError = false;
        state.isAuthError = false;
      })
      .addCase(refreshUser.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.isError = false;
        state.isAuthError = false;
      })
      .addCase(refreshUser.rejected, state => {
        state.isLoggedIn = false;
        state.isRefreshing = false;
        state.isError = true;
      });
  },
});

export default slice.reducer;
