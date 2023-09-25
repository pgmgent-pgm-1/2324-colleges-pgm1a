// for (let i = 0; i < 10; i = i + 1) {
// for (let i = 0; i < 10; i += 1) {
for (let i = 0; i < 10; i++) {
  console.log(i);
}

console.log("Ik ga verder met mijn leven");

let x = 0;
console.log(x); // 0
console.log(x++); // 0
console.log(x); // 1
console.log(++x); // 2
console.log(x); // 2

const y = x++;
console.log(y); // 2
console.log(x); // 3
const b = ++x;
console.log(b); // 4
console.log(x); // 4

// for loop
for (let i = 0; i <= 10; i += 5) {
  console.log(`Het getal is ${i}`);
}

for (let i = 0; i === 1; i++) {
  console.log("Wordt ik uitgevoerd?"); // het antwoord is nee
}
// let op: StackOverflow, oneindig uitgevoerd
/*for (let i = 0; i < 1; i = 0) {
  console.log("Kan dit?");
}*/
