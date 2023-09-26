function sayHello() {
  console.log("Hello");
}

sayHello();
console.log("Abc");
sayHello();
sayHello();

function sayHelloTo(name) {
  console.log(`Hello ${name}`);
}

sayHelloTo(); // hello undefined
sayHelloTo("Enes"); // hello Enes
sayHelloTo("Nisa"); // hello Nisa

function sayAge(name, age) {
  console.log(`${name} is ${age} jaar oud`);
}

sayAge("Michael", 31); // Michael is 31 jaar oud
sayAge("Michael"); // Michael is undefined jaar oud
