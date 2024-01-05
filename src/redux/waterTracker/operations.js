import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

export const getTodayTracker = createAsyncThunk(
  "water/today",
  async (userDate, thunkAPI) => {
    try {
      const res = await axios.get("/water-track/today", userDate);

      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getMonthTracker = createAsyncThunk(
  "water/month",
  async (userDate, thunkAPI) => {
    try {
      const res = await axios.post("/water-track/month", userDate);

      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
