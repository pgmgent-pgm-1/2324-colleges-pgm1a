function getSum(x, y) {
  return x + y;
}

// alternatief (anonieme functie)
const getSumAlt = function (x, y) {
  return x + y;
};

// arrow function
const getSumArrow = (x, y) => {
  return x + y;
};
// arrow function die alleen een return heeft
const getSumArrowAlt = (x, y) => x + y;
const sum = getSumArrow(3, 5);
console.log(sum);
console.log(getSumArrowAlt(5, 8));

// function als parameter
function doCallback(fn) {
  console.log("functie uitvoeren");
  fn();
}

doCallback(function () {
  console.log("uitgevoerd");
});
doCallback(() => {
  console.log("uitgevoerd");
});
