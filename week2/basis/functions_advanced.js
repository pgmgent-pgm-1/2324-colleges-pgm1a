function saySomething(message) {
  console.log(message);
}

saySomething("Hallo iedereen");
saySomething();

function calculateSum(x = 5, y = 10) {
  console.log(x + y);
}

calculateSum(10, 20);
calculateSum();
calculateSum(15);

function getSum(x, y) {
  return x + y;
}

const sum = getSum(20, 50);
console.log(sum);

// functies als parameter
function doFunction(func) {
  func();
}
doFunction(function () {
  console.log("hallo");
});
