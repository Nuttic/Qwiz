import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { UserService } from '../api';
import { AuthResponse } from '.';


//? Типизация возвращаемой ошибки из санки
type RejectValue = {
  message: string;
};

export const refreshAccessToken = createAsyncThunk<
  AuthResponse,
  void,
  { rejectValue: RejectValue }
>('user/refreshAccessToken', async (_, { rejectWithValue }) => {
  try {
    return await UserService.refreshAccessToken(); //* - стук на бэк
  } catch (error) {
    const err = error as AxiosError<{ message: string }>;
    return rejectWithValue({
      message: err.response?.data.message || err.message,
    });
  }
});

export const login = createAsyncThunk<
  AuthResponse,
  { email: string; password: string },
  { rejectValue: RejectValue }
>('user/login', async ({ email, password }, { rejectWithValue }) => {
  try {
    return await UserService.login(email, password);
  } catch (error) {
    const err = error as AxiosError<{ message: string }>;
    return rejectWithValue({
      message: err.response?.data.message || err.message,
    });
  }
});

export const registr = createAsyncThunk<
  AuthResponse,
  { name: string; email: string; password: string },
  { rejectValue: RejectValue }
>('user/registr', async ({ name, email, password }, { rejectWithValue }) => {
  try {
    return await UserService.registr(name, email, password);
  } catch (error) {
    const err = error as AxiosError<{ message: string }>;
    return rejectWithValue({
      message: err.response?.data.message || err.message,
    });
  }
});

export const logout = createAsyncThunk<
  void,
  void,
  { rejectValue: RejectValue }
>('user/logout', async (_, { rejectWithValue }) => {
  try {
    await UserService.logout();
  } catch (error) {
    const err = error as AxiosError<{ message: string }>;
    return rejectWithValue({
      message: err.response?.data.message || err.message,
    });
  }
});