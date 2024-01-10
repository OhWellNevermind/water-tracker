import { createSlice } from "@reduxjs/toolkit";
import {
  register,
  login,
  logout,
  refreshUser,
  updateAvatar,
  updateUser,
  updateDailyNorma,
  sendNewPassword,
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
  isLoading: false,
};

const printError = (state, action) => {
  toast.error(action.payload);
  state.isLoading = false;
};

const usersSlice = createSlice({
  name: "user",
  initialState: usersInitState,
  extraReducers: (builder) =>
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.isLoggedIn = true;
        state.isLoading = false;
        state.token = action.payload.token;
      })
      .addCase(register.rejected, printError)
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.isLoggedIn = true;
        state.isLoading = false;
        state.token = action.payload.token;
      })
      .addCase(logout.pending, (state) => {
        state.isLoading = true;
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
        state.isLoading = false;
      })
      .addCase(login.rejected, printError)
      .addCase(refreshUser.pending, (state) => {
        state.isRefreshing = true;
        state.isLoading = true;
      })
      .addCase(logout.rejected, printError)
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.isLoading = false;
      })
      .addCase(refreshUser.rejected, (state) => {
        state.isRefreshing = false;
        state.isLoggedIn = false;
        state.isLoading = false;
      })
      .addCase(updateAvatar.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateAvatar.fulfilled, (state, action) => {
        state.user.avatarURL = action.payload.avatarURL;
        toast.success("Avatar successfully changed!");
        state.isLoading = false;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.user = { ...state.user, ...action.payload };
        toast.success("Your info successfully changed!");
      })
      .addCase(updateDailyNorma.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateDailyNorma.fulfilled, (state, action) => {
        state.user.dailyNorma = action.payload.user.dailyNorma;
        toast.success("User successfully updated");
        state.isLoading = false;
      })
      .addCase(updateUser.rejected, printError)
      .addCase(updateAvatar.rejected, printError)
      .addCase(sendNewPassword.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.isLoading = false;
      })
      .addCase(sendNewPassword.pending, (state) => {
        state.isRefreshing = true;
        state.isLoading = true;
      })
      .addCase(sendNewPassword.rejected, (state, action) => {
        state.isRefreshing = false;
        state.isLoggedIn = false;
        state.isLoading = false;
        printError(state, action);
      }),
});

export const usersReducer = usersSlice.reducer;
