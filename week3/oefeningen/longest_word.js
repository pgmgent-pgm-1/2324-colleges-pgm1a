function searchLongestWord(text) {
  const words = text.split(" ");
  let longestWord = "stack";
  for (const word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
}

const word = searchLongestWord(
  "De beginnerscursus Full Stack JavaScript Development"
);
console.log(word);
