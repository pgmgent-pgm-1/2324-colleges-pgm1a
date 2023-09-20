let seconds = 99876094;

const secondsInYear = 365 * 24 * 60 * 60;
const secondsInDay = 24 * 60 * 60;
const secondsInHour = 60 * 60;
const secondsInMinute = 60;

const years = Math.floor(seconds / secondsInYear);
seconds = seconds % secondsInYear;
const days = Math.floor(seconds / secondsInDay);
seconds = seconds % secondsInDay;
const hours = Math.floor(seconds / secondsInHour);
seconds = seconds % secondsInHour;
const minutes = Math.floor(seconds / secondsInMinute);
seconds = seconds % secondsInMinute;

console.log(
  `${years} year(s) ${days} day(s) ${hours} hour(s) ${minutes} minute(s) ${seconds} seconds`
);
