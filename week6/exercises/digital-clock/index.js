$container = document.getElementById("clock-digital__container");

const padTime = (time) => {
  if (time < 10) {
    return `0${time}`;
  } else {
    return time;
  }
};

const generateDigitalClockUTCAsString = (utc, cityName) => {
  const date = new Date();
  date.setHours(date.getHours() + utc + date.getTimezoneOffset() / 60);
  return `The time in ${cityName} is ${padTime(date.getHours())}:${padTime(date.getMinutes())}:${padTime(
    date.getSeconds()
  )}`;
};

$container.innerHTML = generateDigitalClockUTCAsString(2, "Ghent");
setInterval(function () {
  $container.innerHTML = generateDigitalClockUTCAsString(2, "Ghent");
}, 1000);
