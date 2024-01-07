import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

export const getTodayTracker = createAsyncThunk(
  "water/today",
  async (date, thunkAPI) => {
    try {
      const res = await axios.get(`/water-track/today?date=${date}`);

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

export const addWater = createAsyncThunk(
  "water/add",
  async (data, thunkAPI) => {
    try {
      const res = await axios.post(`/water-track`, {
        amountWater: data.volume,
        date: data.time,
      });
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
