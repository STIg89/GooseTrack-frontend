import { createSlice } from '@reduxjs/toolkit';
import {
  register,
  login,
  logout,
  refreshUser,
  loginWithToken,
} from './operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(register.pending, (state, _) => {
        state.isRefreshing = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isRefreshing = false;
      })
      .addCase(register.rejected, (state, _) => {
        state.isRefreshing = false;
      })
      .addCase(login.pending, (state, _) => {
        state.isRefreshing = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.token = action.payload.token;
        state.isRefreshing = false;
      })
      .addCase(login.rejected, (state, _) => {
        state.isRefreshing = false;
      })
      .addCase(logout.pending, state => {
        state.isLoading = true;
      })
      .addCase(logout.fulfilled, () => initialState)
      .addCase(logout.rejected, (state, _) => {
        state.isRefreshing = false;
      })
      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, () => initialState)
      .addCase(loginWithToken.pending, (state, _) => {
        state.isRefreshing = true;
      })
      .addCase(loginWithToken.fulfilled, (state, action) => {
        state.token = action.payload.token;
        state.isRefreshing = false;
      })
      .addCase(loginWithToken.rejected, (state, _) => {
        state.isRefreshing = false;
      }),
});

export const authReducer = authSlice.reducer;
