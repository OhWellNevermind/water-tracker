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

export const todayEditWater = createAsyncThunk(
  "water/edit",
  async (data, thunkAPI) => {
    console.log(data);
    const { _id, amountWater, date } = data;
    const newData = { amountWater, date };
    try {
      const res = await axios.put(`/water-track/${_id}`, newData);
      const objPayload = {
        id: res.data._id,
        amountWater: res.data.amountWater,
        date: res.data.date,
      };
      return objPayload;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
