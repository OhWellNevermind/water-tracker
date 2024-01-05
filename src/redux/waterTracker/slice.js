import { createSlice } from "@reduxjs/toolkit";
import { getTodayTracker, getMonthTracker } from "./operations";

const waterTrackerInitState = {
  todayTracker: [],
  monthTracker: [],
  isLoading: false,
  error: "",
};

const waterTrackerSlice = createSlice({
  name: "waterTracker",
  initialState: waterTrackerInitState,
  extraReducers: (builder) =>
    builder
      .addCase(getMonthTracker.fulfilled, (state, action) => {
        state.monthTracker = action.payload;
        state.isLoading = false;
      })
      .addCase(getMonthTracker.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getTodayTracker.fulfilled, (state, action) => {
        state.todayTracker = action.payload;
        state.isLoading = false;
      })
      .addCase(getTodayTracker.pending, (state) => {
        state.isLoading = true;
      }),
});

// const {} = userSlice.actions;
export const waterTrackerReducer = waterTrackerSlice.reducer;

// .addCase(getMonthTracker.rejected, (state, action) => {
//   state.isLoading = false;
//   state.error=action.error.message;
// })
