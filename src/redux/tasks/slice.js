import { createSlice } from '@reduxjs/toolkit';
import { fetchTasks } from './operations';

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState: { tasks: [], isLoading: false, error: null },
  extraReducers: builder => {
    builder
      .addCase(fetchTasks.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchTasks.fulfilled, (state, { payload }) => {
        state.tasks = payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchTasks.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const tasksSliceReducer = tasksSlice.reducer;
