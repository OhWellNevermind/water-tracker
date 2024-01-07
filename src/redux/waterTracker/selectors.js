export const selectWaterTodayDate = (state) => state.waterTracker.today.date;

export const selectWaterTodayTracker = (state) =>
  state.waterTracker.today.todayTracker;

export const selectWaterMonthDate = (state) => state.waterTracker.month.date;

export const selectWaterMonthTracker = (state) =>
  state.waterTracker.month.monthTracker;

export const selectWaterLoading = (state) => state.waterTracker.isLoading;

export const selectWaterError = (state) => state.waterTracker.error;
