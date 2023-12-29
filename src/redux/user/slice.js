import { createSlice } from "@reduxjs/toolkit";
import { register, login, logout, refreshUser } from "./operations";
import toast from "react-hot-toast";

const usersInitState = {
  user: {
    username: "",
    email: "",
    gender: "",
    dailyNorma: "",
    avatarUrl: "",
  },
  token: "",
  isRefreshing: false,
  isLoggedIn: false,
};

const usersSlice = createSlice({
  name: "user",
  initialState: usersInitState,
  extraReducers: (builder) =>
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.user = {
          email: action.payload.user.email,
          gender: action.payload.user.gender,
          dailyNorma: action.payload.user.dailyNorma,
          avatarUrl: action.payload.user.avatarUrl,
        };
        state.isLoggedIn = true;
        state.token = action.payload.token;
      })
      .addCase(register.rejected, () => {
        toast.error("There is no user with credentials like that.");
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = {
          email: action.payload.user.email,
          gender: action.payload.user.gender,
          dailyNorma: action.payload.user.dailyNorma,
          avatarUrl: action.payload.user.avatarUrl,
        };
        state.isLoggedIn = true;
        state.token = action.payload.token;
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = {
          name: "",
          email: "",
          gender: "",
          dailyNorma: "",
          avatarUrl: "",
        };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(refreshUser.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, (state) => {
        state.isRefreshing = false;
        state.isLoggedIn = false;
      }),
});

export const usersReducer = usersSlice.reducer;
