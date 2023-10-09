const artists = ["Britney Spears", "Kodak Black", "Shaggy", "Bob Marley"];
// toevoegen (niet aangeraden)
artists[4] = "Snoop Dogg";
// toevoegen op het einde van een array (aangeraden)
let count = artists.push("NF");
console.log(artists);
console.log(count);

// indexOf
// returned ofwel de index indien gevonden
// ofwel -1 indien niet gevonden
// werkt niet met objecten!! enkel met primitieve datatypes
const index = artists.indexOf("Kodak Black");
console.log(index);
const index2 = artists.indexOf("Metallica");
console.log(index2);

if (artists.indexOf("Metallica") < 0) {
  console.log("Metallica zit niet in onze array");
}

// unshift
count = artists.unshift("Jay-Z");
console.log(artists);
console.log(count);

// splice
// optie 1: elementen verwijderen vanaf bepaalde index
let deleted = artists.splice(1, 2);
console.log(artists);
console.log(deleted);
// optie 2: element toevoegen op bepaalde index
deleted = artists.splice(2, 0, "Ice Spice");
console.log(artists);
console.log(deleted);

const oldies = ["Elton John", "Elvis Presley"];
// concat
const artistsNew = artists.concat(oldies);
console.log(artists);
console.log(artistsNew);

// pop
deleted = artistsNew.pop();
console.log(deleted);
console.log(artistsNew);

// shift
deleted = artistsNew.shift();
console.log(deleted);
console.log(artistsNew);

// slice van index x tot index y (niet tot en met)
const slice = artistsNew.slice(2, 4);
console.log(slice);
console.log(artistsNew);

// join
console.log(`Dit zijn artiesten: ${artistsNew.join(", ")}`);

// reverse (past de originele array aan)
const reversed = artistsNew.reverse();
console.log(artistsNew);
console.log(reversed);

// sort (past originele array aan)
artistsNew.sort();
console.log(artistsNew);

artistsNew.sort(function (a, b) {
  return b.localeCompare(a);
});
console.log(artistsNew);

const animals = [
  {
    name: "Panda",
    coolness: 10,
  },
  {
    name: "Dog",
    coolness: 7,
  },
  {
    name: "Tiger",
    coolness: 9,
  },
];
// sort objects, e.g. string
animals.sort(function (a, b) {
  if (a.coolness < b.coolness) {
    return 1;
  } else if (a.coolness > b.coolness) {
    return -1;
  } else {
    return 0;
  }
});
console.log(animals);
