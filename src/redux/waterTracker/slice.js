import { createSlice } from "@reduxjs/toolkit";
import { getTodayTracker, getMonthTracker } from "./operations";

const date =new Date();
const day = date.getDay();
const month = date.getMonth() + 1;
const year = date.getFullYear();

const waterTrackerInitState = {
  today: {
    date: `${year}-${month}-${day}`,
    todayTracker: [],
  },
  month: {
    // date: `${year}-${month}`,
    date: `${2023}-${12}`,
    monthTracker: [],
  },

  isLoading: false,
  error: "",
};

const waterTrackerSlice = createSlice({
  name: "waterTracker",
  initialState: waterTrackerInitState,
  extraReducers: (builder) =>
    builder
      .addCase(getMonthTracker.fulfilled, (state, action) => {
        state.month.monthTracker = action.payload;
        state.isLoading = false;
      })
      .addCase(getMonthTracker.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getTodayTracker.fulfilled, (state, action) => {
        state.today.todayTracker = action.payload;
        state.isLoading = false;
      })
      .addCase(getTodayTracker.pending, (state) => {
        state.isLoading = true;
      }),
});

export const waterTrackerReducer = waterTrackerSlice.reducer;
