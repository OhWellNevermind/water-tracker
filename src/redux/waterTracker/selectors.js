import { createSelector } from "reselect";
import { selectDailyNorma } from "../user/selectors";

export const selectWaterTodayDate = (state) => state.waterTracker.today.date;

export const selectIsLoadingWaterTrack = (state) =>
  state.waterTracker.isLoading;

export const selectWaterTodayTracker = (state) =>
  state.waterTracker.today.todayTracker;

export const selectWaterMonthDate = (state) => state.waterTracker.month.date;

export const selectWaterMonthTracker = (state) =>
  state.waterTracker.month.monthTracker;

export const selectWaterLoading = (state) => state.waterTracker.isLoading;

export const selectWaterError = (state) => state.waterTracker.error;

export const selectTodayWaterData = (state) =>
  state.waterTracker.todayWaterData;

export const selectWaterPercentage = (state) =>
  state.waterTracker.today.percentageWaterConsumed;

export const selectMonthTracker = createSelector(
  [selectWaterTodayTracker],
  (todayTracker) => {
    return todayTracker;
  }
);

export const selectDays = (state, days, month) => {
  const trackers = selectWaterMonthTracker(state);
  const dailyNorma = selectDailyNorma(state);
  const monthDays = [];
  for (let i = 1; i <= days; i += 1) {
    const daySchema = {
      quantityWaterTrack: 0,
      dailyNorma: `${dailyNorma}L`,
      percentageWaterConsumed: "0%",
      date: `${i}, ${month}`,
    };
    const tracker = trackers.find((day) => {
      const [date] = day.date.split(",");
      return Number(date) === i;
    });
    if (!tracker) {
      monthDays.push(daySchema);
      continue;
    }
    monthDays.push(tracker);
  }
  return monthDays;
};
