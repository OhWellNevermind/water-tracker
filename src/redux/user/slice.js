import { createSlice } from "@reduxjs/toolkit";
import {
  register,
  login,
  logout,
  refreshUser,
  updateAvatar,
  updateUser,
  updateDailyNorma,
} from "./operations";
import toast from "react-hot-toast";

const usersInitState = {
  user: {
    username: "",
    email: "",
    gender: "",
    dailyNorma: "",
    avatarURL: "",
    createdAt: "",
  },
  token: "",
  isRefreshing: false,
  isLoggedIn: false,
};

const printError = (_, action) => {
  toast.error(action.payload);
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
      .addCase(register.rejected, printError)
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
      .addCase(login.rejected, printError)
      .addCase(refreshUser.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(logout.rejected, printError)
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
        state.user.avatarURL = action.payload.avatarURL;
        toast.success("Avatar successfully changed!");
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.user = { ...state.user, ...action.payload };
        toast.success("Your info successfully changed!");
      })
      .addCase(updateDailyNorma.fulfilled, (state, action) => {
        state.user.dailyNorma = action.payload.user.dailyNorma;
      })
      .addCase(updateUser.rejected, printError)
      .addCase(updateAvatar.rejected, printError),
});

export const usersReducer = usersSlice.reducer;
