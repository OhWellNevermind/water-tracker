import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

export const getTodayTracker = createAsyncThunk(
  "water/today",
  async (_, thunkAPI) => {
    try {
      const res = await axios.get(`/water-track/today?date=2024-01-05`);

      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getMonthTracker = createAsyncThunk(
  "water/month",
  async (date, thunkAPI) => {
    try {
      const res = await axios.get(`/water-track/month?date=${date}`);

      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const todayEditWater = createAsyncThunk(
  "water/edit",
  async (data, thunkAPI) => {
    console.log(data);
    try {
      const res = await axios.put(
        `/water-track/65995398f54c8874c12232fc`,
        data
      );
      console.log(res.data);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
