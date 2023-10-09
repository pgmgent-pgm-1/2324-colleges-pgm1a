function getItem(array, index) {
  return array[index];
}

const items = ["a", "b", "c"];
const item = getItem(items, 2); // c
console.log(item);

console.log(getItem(items, 1));
