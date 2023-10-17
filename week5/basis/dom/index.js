// log height of window
console.log(window.innerHeight);

const $element = document.querySelector("h1");
$element.innerText = "Aangepast via JS";
$element.style.backgroundColor = "red";

// andere manier van schrijven
// const $list = document.querySelector("#list");
const lectors = ["Michael Vanderpoorten", "Evelien Rutsaert", "Wachem Huyghe", "Philippe DW"];

const $list = document.getElementById("list");

let html = "";
for (const lector of lectors) {
  html += `<li>${lector}</li>`;
}

$list.innerHTML = html;
