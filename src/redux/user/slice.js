import { createSlice } from "@reduxjs/toolkit";
import {
  register,
  login,
  logout,
  refreshUser,
  updateAvatar,
  updateUser,
} from "./operations";
import toast from "react-hot-toast";

const usersInitState = {
  user: {
    username: "",
    email: "",
    gender: "",
    dailyNorma: "",
    avatarURL: "",
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
        state.user = action.payload.user;
        state.isLoggedIn = true;
        state.token = action.payload.token;
      })
      .addCase(register.rejected, (_, action) => {
        toast.error(action.payload);
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.isLoggedIn = true;
        state.token = action.payload.token;
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = {
          username: "",
          email: "",
          gender: "",
          dailyNorma: "",
          avatarURL: "",
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
      })
      .addCase(updateAvatar.fulfilled, (state, action) => {
        state.user.avatarURL = action.payload;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.user = { ...state.user, ...action.payload };
      }),
});

export const usersReducer = usersSlice.reducer;
