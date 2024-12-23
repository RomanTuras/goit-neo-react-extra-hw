// src/redux/auth/operations.js

import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.goit.global/';

const setToken = token => {
  axios.defaults.headers.common.Authorization = 'Bearer ' + token;
};

const removeToken = () => {
  delete axios.defaults.headers.common.Authorization;
};

export const register = createAsyncThunk(
  'auth/register',
  async (userData, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/users/signup', userData);
      setToken(data.token);
      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (userData, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/users/login', userData);
      setToken(data.token);
      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const logout = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      await axios.post('/users/logout');
      removeToken();
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, { getState, rejectWithValue }) => {
    const state = getState();
    const localToken = state.auth.token;
    setToken(localToken);
    try {
      const { data } = await axios.get('/users/current');
      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  },
  {
    condition: (_, { getState }) => {
      const state = getState();
      const localToken = state.auth.token;
      setToken(localToken);
      return localToken !== null;
    },
  }
);
