import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchTasks = createAsyncThunk(
  'day/:currentDay',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`/api/tasks`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
