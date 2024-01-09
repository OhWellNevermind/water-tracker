import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://water-track-backend.onrender.com/api";

const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = "";
};

export const register = createAsyncThunk(
  "user/register",
  async (userData, thunkAPI) => {
    try {
      const res = await axios.post("/users/signup", userData);
      setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const login = createAsyncThunk(
  "user/login",
  async (userData, thunkAPI) => {
    try {
      const res = await axios.post("/users/signin", userData);

      setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const logout = createAsyncThunk("/users/logout", async (_, thunkAPI) => {
  try {
    await axios.post("/users/logout");
    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.message);
  }
});

export const refreshUser = createAsyncThunk(
  "user/refresh",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.user.token;

    if (token === null) {
      return thunkAPI.rejectWithValue("Unable to fetch user");
    }

    try {
      setAuthHeader(token);
      const res = await axios.get("/users/getInfo");
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const updateAvatar = createAsyncThunk(
  "/users/updateAvatar",
  async (avatar, thunkAPI) => {
    try {
      const { data } = await axios.patch("/users/updateAvatar", avatar);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const updateUser = createAsyncThunk(
  "/users/updateUser",
  async (userData, thunkAPI) => {
    try {
      const { data } = await axios.patch("/users/changeInfo", userData);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);
export const updateDailyNorma = createAsyncThunk(
  "/users/updateDailyNorma",
  async (data, thunkAPI) => {
    try {
      const resp = await axios.patch("/users/changeDailyNorma", {
        dailyNorma: data,
      });
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const sendForgotEmail = createAsyncThunk(
  "/users/sendForgotPasswod",
  async (email, thunkAPI) => {
    try {
      await axios.post("/users/forgotPassword", {
        email,
      });
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const sendNewPassword = createAsyncThunk(
  "/users/sendNewPassword",
  async (updatePasswordData, thunkAPI) => {
    const { password, verificationCode } = updatePasswordData;

    try {
      const { data } = await axios.post(
        `/users/updatePassword/${verificationCode}`,
        {
          password,
        }
      );
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);
