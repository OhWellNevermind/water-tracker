import { createSlice } from "@reduxjs/toolkit";
import {
  getTodayTracker,
  getMonthTracker,
  addWater,
  todayEditWater,
  deleteEntry,
  updateMonthTrackerDate
} from "./operations";
import toast from "react-hot-toast";
import { updateDailyNorma } from "../user/operations";

const date = new Date();
const day = date.getDay();
const validDay = String(day).length < 2 ? `0${day}` : day;
const month = date.getMonth() + 1;
const validMonth = String(month).length < 2 ? `0${month}` : month;
const year = date.getFullYear();

const waterTrackerInitState = {
  today: {
    date: `${year}-${validMonth}-${validDay}`,
    percentageWaterConsumed: "0%",
    todayTracker: [],
  },
  todayWaterData: {
    _id: "",
    amountWater: 0,
    date: "",
    owner: "",
  },
  month: {
    date: `${year}-${validMonth}`,
    monthTracker: [],
  },

  isLoading: false,
  error: "",
};

const waterTrackerSlice = createSlice({
  name: "waterTracker",
  initialState: waterTrackerInitState,
  reducers: {
    setTodayWaterData: (state, action) => {
      state.todayWaterData = action.payload;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(getMonthTracker.fulfilled, (state, action) => {
        state.month.monthTracker = action.payload;
        state.isLoading = false;
      })
      .addCase(getMonthTracker.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getTodayTracker.fulfilled, (state, action) => {
        state.today.percentageWaterConsumed =
          action.payload.percentageWaterConsumed;
        state.today.todayTracker = action.payload.waterTracks;
        state.isLoading = false;
      })
      .addCase(getTodayTracker.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addWater.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addWater.fulfilled, (state, action) => {
        state.today.todayTracker.push({
          id: action.payload._id,
          amountWater: action.payload.amountWater,
          date: action.payload.date,
        });
      })
      .addCase(todayEditWater.fulfilled, (state, action) => {
        const { todayTracker } = state.today;
        const { id, amountWater, date } = action.payload;
        state.today.todayTracker = todayTracker.map((item) => {
          if (item.id === id) {
            const el = {
              ...item,
              amountWater,
              date,
            };

            return el;
          }
          return item;
        });
        toast.success("Successfully saved");
      })
      .addCase(todayEditWater.rejected, (_, action) => {
        toast.error(action.payload);
      })
      .addCase(deleteEntry.fulfilled, (state, action) => {
        const { todayTracker } = state.today;
        const index = todayTracker.findIndex(
          (item) => item.id === action.payload
        );
        todayTracker.splice(index, 1);
        state.isLoading = false;
        toast.success("Successfully delete");
      })
      .addCase(deleteEntry.rejected, (_, action) => {
        toast.error(action.payload);
      })
      .addCase(updateDailyNorma.fulfilled, (state, action) => {
        state.today.percentageWaterConsumed =
          action.payload.today.percentageWaterConsumed;
      }).addCase(updateMonthTrackerDate, (state, action)=>{
        console.log('FUCK');
        state.month.date=action.payload
      })
});
export const { setTodayWaterData } = waterTrackerSlice.actions;
export const waterTrackerReducer = waterTrackerSlice.reducer;
