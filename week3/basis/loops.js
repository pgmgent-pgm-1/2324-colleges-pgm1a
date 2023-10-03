// for: een vast aantal keer iets uitvoeren
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// for .. of: array overlopen
const characters = ["a", "b", "c"];
for (const character of characters) {
  console.log("Uitgevoerd");
  console.log(character);
}

// forEach: array overlopen (old-school)
characters.forEach(function (character) {
  console.log("Uitgevoerd");
  console.log(character);
});

// do ... while: altijd minstens één keer uitgevoerd
let x = 0;
do {
  x += 5;
  console.log(x);
} while (x < 0);

let y = 0;
do {
  y += 5;
  console.log(y);
} while (y > 10);

// while:  0 of meerdere keren uitgevoerd
let z = 10;
while (z < 20) {
  z += 5;
  console.log(`Z is getal ${z}`);
}

let a = 20;
while (a < 15) {
  console.log(`a is ${a}`);
  console.log(a);
}
