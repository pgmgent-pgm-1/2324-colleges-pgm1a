const games = ["FC24", "FallOut", "GTA V", "League of Legends"];

// for
for (let i = 0; i < games.length; i++) {
  console.log(games[i]);
}

// for of
for (const game of games) {
  console.log(`${game} is een spel`);
}

// foreach
games.forEach(function (game) {
  console.log(game);
});

// join: van array naar string
const sentence = games.join(" -- ");
console.log(sentence);

// split: van string naar array
const words = "Dit is een zin";
console.log(words.split(" ")); // array van alle woorden
