const $box = document.getElementById("box");
const $btn = document.getElementById("btn");

const colors = ["red", "green", "#492019", "#069382", "orange"];

const getRandom = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

$btn.addEventListener("click", function () {
  $box.style.backgroundColor = colors[getRandom(0, colors.length - 1)];
  $box.style.left = `${getRandom(0, 100)}%`;
  $box.style.top = `${getRandom(0, 100)}%`;
});
