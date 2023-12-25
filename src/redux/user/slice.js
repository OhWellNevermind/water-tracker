import { createSlice } from "@reduxjs/toolkit";

const usersInitState = {
  user: {
    email: "",
    name: "",
    gender: "",
    avatar: "",
    dailyNorma: "",
  },
  message: "",
  token: "",
  isLoggedIn: false,
};

const usersSlice = createSlice({
  name: "user",
  initialState: usersInitState,
  // extraReducers: (builder) => builder.addCase(),
});

// const {} = userSlice.actions;
export const usersReducer = usersSlice.reducer;
