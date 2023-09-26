// string index
const color = "green";
console.log(color.length);
console.log(color[0]); // g
console.log(color[1]); // r

// array
// [0, 1, 2] indexes
const names = ["Michael", "Philippe", "Wachem"];
console.log(names);

const nameOne = names[0]; // array start bij 0!
console.log(nameOne);

console.log(names.length);
names.length = 1;
console.log(names);
names.length = 7;
console.log(names); // ['Michael', undefined, undefined, undefined, undefined, undefined, undefined]

// const animals = ["monkey", "fish", "donkey", "dolphin", "dog"];
const animals = new Array("monkey", "fish", "donkey", "dolphin", "dog");
animals[0] = "panda";
console.log(animals);

for (let i = 0; i < animals.length; i++) {
  console.log(`${animals[i]} is an animal`);
}
