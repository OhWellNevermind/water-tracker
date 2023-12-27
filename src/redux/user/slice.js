import { createSlice } from "@reduxjs/toolkit";

const usersInitState = {
  user: {
    username: "",
    email: "",
    gender: "",
    dailyNorma: "",
    avatarUrl: "",
    token: "",
  },
  isRefreshing: false,
  isLoggedIn: false,
};

const usersSlice = createSlice({
  name: "auth",
  initialState: usersInitState,
  // extraReducers: (builder) => builder.addCase(),
});

// const {} = userSlice.actions;
export const usersReducer = usersSlice.reducer;
