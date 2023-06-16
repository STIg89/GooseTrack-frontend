import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Notify } from 'notiflix';

// axios.defaults.baseURL = 'http://localhost:4000';

axios.defaults.baseURL = 'https://goosetrack-backend.onrender.com';

export const setAuthHeader = accessToken => {
  axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
};

axios.interceptors.response.use(
  response => response,
  async error => {
    if (error.response.status === 401) {
      const refreshToken = localStorage.getItem('refreshToken');
      try {
        const { data } = await axios.post('/api/auth/refresh', {
          refreshToken,
        });
        setAuthHeader(data.accessToken);
        localStorage.setItem('refreshToken', data.refreshToken);
        // error.config.headers.common.authorization = `Bearer ${data.accessToken}`;
        return axios(error.config);
      } catch (error) {
        return Promise.reject(error);
      }
    }
    return Promise.reject(error);
  }
);

export const register = createAsyncThunk(
  'auth/register',
  async (user, thunkAPI) => {
    try {
      const { data } = await axios.post('/api/auth/registration', user);
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
    setAuthHeader(data.accessToken);
    localStorage.setItem('refreshToken', data.refreshToken);
    return data;
  } catch (error) {
    Notify.failure('Please check your email and password and try again');
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const resendEmail = createAsyncThunk(
  'auth/resendEmail',
  async (email, thunkAPI) => {
    try {
      const { data } = await axios.post('/api/auth/verify', { email });
      Notify.success('Verification re-send to your e-mail', {
        timeout: 3000,
        fontSize: '20px',
        position: 'center-center',
        cssAnimationStyle: 'zoom',
      });
      return data;
    } catch (error) {
      Notify.failure(error.response.data.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const loginWithToken = createAsyncThunk(
  'auth/loginWithToken',
  async (accessToken, thunkAPI) => {
    try {
      const { data } = await axios.get(`/api/auth/login/${accessToken}`);
      setAuthHeader(data.accessToken);
      localStorage.setItem('refreshToken', data.refreshToken);
      return data;
    } catch (error) {
      Notify.failure('Please check your token and try again');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const googleAuth = createAsyncThunk(
  'auth/google',
  async (_, thunkAPI) => {
    try {
      await axios.get('/api/auth/google');
    } catch (error) {
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
    const persistedToken = state.auth.accessToken;

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
    const persistedToken = state.auth.accessToken;

    const formData = new FormData();
    Object.keys(data).forEach(key => {
      if (key === 'avatar') {
        if (data[key] !== null) {
          let file = data.avatar;
          formData.append('avatar', file, file.name);
        }
      } else formData.append(key, data[key]);
    });

    try {
      setAuthHeader(persistedToken);
      const res = await axios.put('/api/auth/user', formData);
      return res.data;
    } catch (error) {
      console.log(error);
      Notify.failure(error.response.data.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Update Password
export const updatePassword = createAsyncThunk(
  'auth/user/pass',
  async (data, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.accessToken;

    try {
      setAuthHeader(persistedToken);
      const res = await axios.patch('/api/auth/user/pass', data);
      return res.data;
    } catch (error) {
      Notify.failure('Incorrect old password');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
