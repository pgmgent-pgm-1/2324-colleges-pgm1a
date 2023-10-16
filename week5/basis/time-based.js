console.log("Start");

// iets uitvoeren na een bepaalde tijd (in milliseconden)
setTimeout(function () {
  console.log("Hallo");
}, 2 * 1000);

console.log("Einde");

setTimeout(function () {
  console.log("Hallo 2");
}, 0);

console.log("Einde 2");

setInterval(function () {
  const date = new Date();
  console.log(`${date.getMinutes()}:${date.getSeconds()}`);
}, 2 * 1000);
