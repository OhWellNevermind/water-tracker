export const selectWaterTodayDate = (state) => state.waterTracker.today.date;

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

export const selectDays = (state, days, month, date) => {
  const trackers = selectWaterMonthTracker(state);
  const dailyNorma = state.user.user.dailyNorma;
  const waterTodayDate = selectWaterTodayDate(state).split("-");
  const day = waterTodayDate.pop();
  const todayDate = waterTodayDate.join("-");
  const todayPercentage = selectWaterPercentage(state);

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
    if (date === todayDate) {
      const [itemDay] = tracker.date.split(",");
      if (Number(itemDay) === Number(day)) {
        monthDays.push({
          ...tracker,
          percentageWaterConsumed: todayPercentage,
        });
        continue;
      }
    }
    monthDays.push(tracker);
  }
  return monthDays;
};
