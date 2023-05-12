// Modify the weeklyTemps object in the chapter so that it stores a month's worth of data using a 2D array. Create functions to display the monthly averages, a specific week's average, and all the weeks' averages.

const weeklyTemps = [
  [22, 23, 24, 25, 26, 27, 28], // Week 1 temperatures
  [20, 21, 22, 23, 24, 25, 26], // Week 2 temperatures
  [18, 19, 20, 21, 22, 23, 24], // Week 3 temperatures
  [16, 17, 18, 19, 20, 21, 22], // Week 4 temperatures
];

function sum(runningTotal, currentTotal) {
  return runningTotal + currentTotal;
}

function calculateWeekAverage(week) {
  return week.reduce(sum) / week.length;
}

function calculateWeekAverages() {
  return weeklyTemps.map((week_data) => {
    return week_data.reduce(sum) / week_data.length;
  });
}
(function calculateMonthAverage() {
  const weekOneAverage = calculateWeekAverage(weeklyTemps[1]);
  console.log(`Week one Average: ${weekOneAverage}`);
  const weekAverages = calculateWeekAverages();
  console.log(`Week Averages: ${weekAverages}`);
  const monthAverage = weekAverages.reduce(sum) / weeklyTemps.length;
  console.log(`Month Average: ${monthAverage}`);
})();
