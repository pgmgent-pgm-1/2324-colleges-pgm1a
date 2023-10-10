const consoles = [
  {
    name: "Playstation 5",
    manufacturer: "Sony",
    handheld: false,
  },
  {
    name: "Xbox Series X",
    manufacturer: "Microsoft",
    handheld: false,
  },
  {
    name: "Switch",
    manufacturer: "Nintendo",
    handheld: true,
  },
  {
    name: "Steam Deck",
    manufacturer: "Steam",
    handheld: true,
  },
];
// map = een array omvoren naar een andere array
// length = zelfde length als vorige array
const mapped = consoles.map(function (console) {
  return console.name;
});
console.log(consoles);
console.log(mapped);
console.log(consoles.length === mapped.length); // true

// met arrow function
/* 
const mappedWithArrow = consoles.map((console) => {
  return console.name;
});
*/
const mappedWithArrow = consoles.map((console) => console.name);

// filter: 2 opties: true of false terug geven
// length nieuwe array = 0 of meer
const handheldConsoles = consoles.filter((console) => {
  return console.handheld;
});
console.log(handheldConsoles); // 2 items

// find: 2 opties: true of false terug geven
// geen nieuwe array, maar een item of undefined
const hardware = consoles.find((console) => {
  return console.manufacturer === "Microsoft";
});
console.log(hardware);
