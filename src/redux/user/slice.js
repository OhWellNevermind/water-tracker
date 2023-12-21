import { createSlice } from "@reduxjs/toolkit";

const usersInitState = {};

const usersSlice = createSlice({
  name: "user",
  initialState: usersInitState,
  // extraReducers: (builder) => builder.addCase(),
});

// const {} = userSlice.actions;
export const usersReducer = usersSlice.reducer;
