import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Notify } from 'notiflix';

export const fetchDayTasks = createAsyncThunk(
  'tasks/fetchDay',
  async (reqObj, thunkAPI) => {
    try {
      const response = await axios.get(
        `api/tasks?month=${reqObj.month}&day=${reqObj.day}&year=${reqObj.year}&page=1&limit=100`
      );

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const patchTask = createAsyncThunk(
  'tasks/patchTask',
  async ({ id, task }, thunkAPI) => {
    try {
      const response = await axios.patch(`api/tasks/${id}`, task);
      return response.data;
    } catch (error) {
      Notify.failure('Sorry, something went wrong. Try again');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteTask = createAsyncThunk(
  'tasks/delTask',
  async (taskId, thunkAPI) => {
    try {
      const response = await axios.delete(`api/tasks/${taskId}`);
      Notify.success('Task hastily deleted');
      return response.data;
    } catch (error) {
      Notify.failure('Sorry, task not deleted. Try again');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addTask = createAsyncThunk(
  'tasks/addTask',
  async (task, thunkAPI) => {
    console.log(task);
    try {
      const response = await axios.post('api/tasks', task);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchAllTasks = createAsyncThunk(
  'tasks/fetchAllTasks',
  async (reqObj, thunkAPI) => {
    try {
      const response = await axios.get(
        `api/tasks?month=${reqObj.month}&year=${reqObj.year}&page=1&limit=100`
      );

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
