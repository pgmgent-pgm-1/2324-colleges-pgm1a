const length = 1.72;
const weight = 65;
const waist = 0.8;

const bmi = weight / (length * length);
console.log(`Het bmi is ${bmi}`);

const absi = waist / (Math.pow(bmi, 2 / 3) * Math.sqrt(length));
console.log(`Het absi is ${absi}`);
