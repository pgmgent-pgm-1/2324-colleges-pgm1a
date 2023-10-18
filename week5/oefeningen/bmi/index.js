const height = parseFloat(window.prompt("Define your height (m)"));
const weight = parseFloat(window.prompt("Define your weight (kg)"));

function calculateBMI(height, weight) {
  return weight / (height * height);
}

function bmiToString(bmi) {
  if (bmi < 18.5) {
    return "ondergewicht";
  } else if (bmi <= 25) {
    return "een gezond gewicht";
  } else {
    return "overgewicht";
  }
}

const bmi = calculateBMI(height, weight);

window.alert(`Jouw bmi is ${bmi.toFixed(2)}, je hebt ${bmiToString(bmi)}`);
