import { createSlice } from '@reduxjs/toolkit';
import { register, login, logout, refreshUser } from './operations';

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
        state.isLoggedIn = true;
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
        state.isLoggedIn = true;
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
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, () => initialState),
});

export const authReducer = authSlice.reducer;
