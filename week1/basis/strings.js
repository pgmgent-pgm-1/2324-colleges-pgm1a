const carManufacturer = "Mercedes";
const carModel = "C-klasse";

console.log(carModel + " is een model van " + carManufacturer);
console.log("dit is een tekst \nmet een enter");

// template literal
console.log(`dit is een tekst
met een enter`);

const template = `
==============================================  
${carModel} is een model van ${carManufacturer}
==============================================
Bedankt voor het luisteren
`;

console.log(template);

// met een gewone string
let templateTwo = "==============================================";
templateTwo += "\n";
// templateTwo = templateTwo + "\n";
templateTwo = templateTwo + carModel + " is een model van " + carManufacturer;
templateTwo = templateTwo + "\n";
templateTwo = templateTwo + "==============================================";
templateTwo = templateTwo + "\n";
templateTwo = templateTwo + "Bedankt voor het luisteren";
