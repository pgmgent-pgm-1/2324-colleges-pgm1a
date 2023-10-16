// date instantieren met milliseconden sinds 01/01/1970
const date = new Date(1697364000000);
console.log(date);
// date aanroepen zonder iets
const date2 = new Date();
console.log(date2.getHours());
console.log(date2.getUTCHours());
console.log(date2.getMinutes());
console.log(date2.getUTCMinutes());
console.log(date2.getFullYear());

console.log(`${date2.getDate()}/${date2.getMonth() + 1}/${date2.getFullYear()}`);
