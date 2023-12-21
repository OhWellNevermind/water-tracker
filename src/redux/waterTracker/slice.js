import { createSlice } from "@reduxjs/toolkit";

const waterTrackerInitState = {};

const waterTrackerSlice = createSlice({
  name: "waterTracker",
  initialState: waterTrackerInitState,
  // extraReducers: (builder) => builder.addCase(),
});

// const {} = userSlice.actions;
export const waterTrackerReducer = waterTrackerSlice.reducer;
