const year = 1992;
let isLeapYear = false;

if (year % 4 === 0) {
  if (year % 100 !== 0) {
    isLeapYear = true;
  } else if (year % 400 === 0) {
    isLeapYear = true;
  }
}

// alternatieve kortere methode
if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
  isLeapYear = true;
}

if (isLeapYear) {
  console.log(`${year} is een schrikkeljaar`);
} else {
  console.log(`${year} is geen schrikkeljaar`);
}
