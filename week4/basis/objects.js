const system = {
  name: "Playstation 5",
  manufacturer: "Sony",
  handheld: false,
};

system.name = "Playstation 6";
console.log(system);

console.log(system.name);
console.log(system["name"]);
let prop = "name";
console.log(system[prop]);

// delete
delete system.manufacturer;
console.log(system);

// for ... in object
for (const prop in system) {
  console.log(`${prop} is ${system[prop]}`);
}

// object met functie
const system2 = {
  name: "Xbox Series X",
  manufacturer: "Microsoft",
  handheld: false,
  logName: function () {
    console.log(this.name);
  },
};
system2.logName();
