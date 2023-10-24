const series = [
  {
    title: "Sex Education",
    actors: ["Asa Butterfield", "Emma Mackey", "Gillian Anderson"],
    watched: true,
    seasons: 4,
  },
  {
    title: "Lucifer",
    actors: ["Tom Ellis", "Lauren German"],
    watched: false,
    seasons: 6,
  },
  {
    title: "Breaking Bad",
    actors: ["Aaron Paul", "Bryan Brenston"],
    watched: true,
    seasons: 5,
  },
  {
    title: "Avatar The Last Airbender",
    actors: ["Jack Desina"],
    watched: false,
    seasons: 3,
  },
];

const $list = document.getElementById("list");

const getStringForSeriesWatched = (watched) => {
  if (watched) {
    return "Ik heb deze serie gezien";
  } else {
    return "Ik heb deze serie niet gezien";
  }
};

const getStringForActors = (actors) => {
  let html = "";
  for (const actor of actors) {
    html += `<li>${actor}</li>`;
  }
  return html;
};

const getStringForSeries = (series) => {
  let html = "";

  for (const serie of series) {
    html += `
    <li>
      <h2>${serie.title} (${serie.seasons} seasons)</h2>
      <p>${getStringForSeriesWatched(serie.watched)}</p>
      <p>Actors:</p>
      <ul>
        ${getStringForActors(serie.actors)}
      </ul>
    </li>
  `;
  }

  return html;
};

$list.innerHTML = getStringForSeries(series);

const $btnGrid = document.getElementById("btn-grid");
$btnGrid.addEventListener("click", function () {
  if ($list.classList.contains("grid")) {
    $list.classList.remove("grid");
  } else {
    $list.classList.add("grid");
  }
});

const $box = document.getElementById("box");
const $btnBox = document.getElementById("btn-box");

$btnBox.addEventListener("click", function () {
  $box.classList.toggle("box--circle");
});
