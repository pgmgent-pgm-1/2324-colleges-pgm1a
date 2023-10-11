// True of false?
console.log(3 === 3); // true
console.log("a" === "a"); // true
console.log(true === true); // true
const obj1 = { name: "JS" };
const obj2 = { name: "JS" };
console.log(obj1 === obj2);

// by value (number, boolean, string)
const num1 = 3;
const num2 = num1;
// by reference (objecten, arrays)
const obj3 = { name: "JS" };
const obj4 = obj3;
console.log(obj3 === obj4); // true

obj4.name = "TS";
console.log(obj3);
console.log(obj4);
