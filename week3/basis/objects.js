const day = "Tuesday"; // string
const days = ["Monday", "Tuesday"]; // array
const pi = 3.14; // number
const isTuesday = true; // boolean

/* const clubName = "FC Barcelona";
const clubCountry = "Spanje";
const clubColors = ["blauw", "rood"];
const clubWasChampion = true; */

// object (met properties)
const club = {
  name: "FC Barcelona",
  country: "Spanje",
  colors: ["blauw", "rood"],
  wasChampion: true,
  stadium: {
    name: "Camp Nou",
    address: "Straat 3 Barcelona",
  },
};

console.log(club);
console.log(club.name);
console.log(club.colors);
console.log(club.stadium.name);
// FC Barcelona is een club in Spanje en speelt in Camp Nou
console.log(
  `${club.name} is een club in ${club.country} en speelt in ${club.stadium.name}`
);

const clubTwo = {
  name: "Real Madrid",
  country: "Spanje",
  colors: ["wit", "zwart"],
  wasChampion: false,
  stadium: {
    name: "Santiago Bernabeu",
    address: "Straat 2 Madrid",
  },
};
console.log(
  `${clubTwo.name} is een club in ${clubTwo.country} en speelt in ${clubTwo.stadium.name}`
);

// arrays met objecten
const clubs = [club, clubTwo];
for (const club of clubs) {
  console.log(
    `${club.name} is een club in ${club.country} en speelt in ${club.stadium.name}`
  );
}
