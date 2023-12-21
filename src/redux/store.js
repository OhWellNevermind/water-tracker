import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "./user/slice";
import { waterTrackerReducer } from "./waterTracker/slice";

export const store = configureStore({
  reducer: {
    user: usersReducer,
    waterTracker: waterTrackerReducer,
  },
});
