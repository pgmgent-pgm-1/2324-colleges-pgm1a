const $container = document.getElementById("multiplication__container");

const number = parseInt(prompt("Definieer de maaltafel, bv. 15"));
const amount = parseInt(prompt("Definieer het aantal calculaties"));

let html = "";
for (let i = 0; i <= amount; i++) {
  html += `<li>${i} * ${amount} = ${i * amount}</li>`;
}

$container.innerHTML = html;
