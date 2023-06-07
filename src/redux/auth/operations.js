import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Notify } from 'notiflix';

// axios.defaults.baseURL = 'http://localhost:4000';

axios.defaults.baseURL = 'https://goosetrack-backend.onrender.com';

export const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const register = createAsyncThunk(
  'auth/register',
  async (user, thunkAPI) => {
    try {
      const { data } = await axios.post('/api/auth/registration', user);
      Notify.success(
        'You are successfully registered! Verification send to your e-mail',
        {
          timeout: 8000,
          fontSize: '22px',
          position: 'center-center',
          cssAnimationStyle: 'zoom',
        }
      );
      return data;
    } catch (error) {
      Notify.failure('Please check your email and password and try again');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk('auth/login', async (user, thunkAPI) => {
  try {
    const { data } = await axios.post('/api/auth/login', user);
    setAuthHeader(data.token);
    return data;
  } catch (error) {
    Notify.failure('Please check your email and password and try again');
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const loginWithToken = createAsyncThunk(
  'auth/loginWithToken',
  async (token, thunkAPI) => {
    try {
      const { data } = await axios.get(`/api/auth/login/${token}`);
      setAuthHeader(data.token);
      return data;
    } catch (error) {
      Notify.failure('Please check your token and try again');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/api/auth/logout');

    setAuthHeader('');
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      setAuthHeader(persistedToken);
      const res = await axios.get('/api/auth/current');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Update User Data
export const updateUser = createAsyncThunk(
  'auth/user',
  async (data, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    try {
      setAuthHeader(persistedToken);
      const res = await axios.put('/api/auth/user', data);
      return res.data;
    } catch (error) {
      console.log(error);
      Notify.failure(error.response.data.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

//  Upload User Avatar
export const uploadAvatar = createAsyncThunk(
  'auth/user',
  async (file, thunkAPI) => {
    const state = thunkAPI.getState();
    const formData = new FormData();
    formData.append('avatar', file, file.name);
    const persistedToken = state.auth.token;

    try {
      setAuthHeader(persistedToken);
      const res = await axios.put('/api/auth/user', formData);
      return res;
    } catch (error) {
      Notify.failure(error.response.data.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
