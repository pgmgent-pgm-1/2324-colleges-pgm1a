// commentaar
const day = "Woensdag"; // string
// day = "Donderdag"; // error!
let otherDay = "Donderdag";
console.log(otherDay);
otherDay = "Vrijdag";
console.log(otherDay);

const pi = 3.14;
const isWednesdayToday = true; // of false

const items = [39, 49, 28];
console.log(items[0]); // 39
console.log(items.length); // 3
console.log(items[items.length - 1]); // 28
console.log("------");
// for loop
for (let i = 0; i < items.length; i++) {
  const item = items[i];
  console.log(item);
}
console.log("------");

// for ... of
let text = "";
let number = 0;
for (const item of items) {
  text += item;
  number += item;
}
console.log(text); // 394928
console.log(number); // 116

// condities
for (const item of items) {
  if (item > 30) {
    console.log(item + " is groter dan 30");
  } else {
    console.log(item + " is niet groter dan 30");
  }
}

// functions
function saySomething() {
  console.log("Hallo");
}

saySomething();

function sayHelloTo(name) {
  console.log(`Hallo ${name}`);
}

sayHelloTo("Michael");

function getTemplate(name) {
  return `
  ======================
  Hallo ${name}
  ======================
  `;
}

const template = getTemplate("Michael");
console.log(template);
