// variabelen
let name = "Michael"; // string
name = "Andere naam";
const isMonday = true; // boolean
const day = 2; // number
const animals = ["panda", "monkey"]; // array

let x; // undefined

// string concatenation
const currentDay = "maandag";
const currentClass = "1PGMA";

let sentence = "Klas " + currentClass + " heeft les op " + currentDay;
console.log(sentence);
const sentenceAlt = `Klas ${currentClass} heeft les op:
 ${currentDay}`;
// console.log(sentenceAlt);

// stukje bijplakken
sentence += " en op dinsdag en woensdag";
console.log(sentence);

// conditions
let number = 10;
if (x > 10) {
  console.log("X is groter dan 10");
} else if (x < 10) {
  console.log("X is kleiner dan 10");
} else {
  console.log("X is 10");
}

console.log(number > 10 ? "Groter dan 10" : "Kleiner of gelijk aan 10");

const color = "green";

switch (color) {
  case "green":
    console.log("Kleur is groen");
    break;
  case "yellow":
    console.log("Kleur is geel");
    break;
  default:
    console.log("Kleur is iets anders");
    break;
}

// arrays
const cars = ["BMW", "Audi", "Tesla", "Opel"];
console.log(cars[0]); // eerste item = "BMW"
console.log(cars.length); // 4
console.log(cars[cars.length - 1]); // laatste item is 3 = "Opel"

// for loops
// for loop tot 10
for (let i = 0; i < 10; i++) {
  console.log(i);
}
// for loop van cars
for (let i = 0; i < cars.length; i++) {
  console.log(cars[i]);
}

// functions
sayHello();
function sayHello() {
  console.log("Hello");
}

sayHello();
sayHello();
sayHello();

function sayHelloTo(name = "onbekende persoon") {
  console.log(`Hello ${name}`);
}

sayHelloTo("Enes");
sayHelloTo();
