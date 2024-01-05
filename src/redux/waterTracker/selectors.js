export const selectWaterToday = (state) => state.waterTracker.todayTracker;

export const selectWaterMonth = (state) => state.waterTracker.monthTracker;

export const selectWaterLoading = (state) => state.waterTracker.isLoading;

export const selectWaterError = (state) => state.waterTracker.error;
