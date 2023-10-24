const series = [
  {
    id: 1,
    title: "Sex Education",
    actors: ["Asa Butterfield", "Emma Mackey", "Gillian Anderson"],
    watched: true,
    seasons: 4,
  },
  {
    id: 2,
    title: "Lucifer",
    actors: ["Tom Ellis", "Lauren German"],
    watched: false,
    seasons: 6,
  },
  {
    id: 3,
    title: "Breaking Bad",
    actors: ["Aaron Paul", "Bryan Brenston"],
    watched: true,
    seasons: 5,
  },
  {
    id: 4,
    title: "Avatar The Last Airbender",
    actors: ["Jack Desina"],
    watched: false,
    seasons: 3,
  },
];

const $list = document.getElementById("list");

const getStringForSeries = (series) => {
  let html = "";

  for (const serie of series) {
    html += `
    <li data-id="${serie.id}">
      <h2>${serie.title} (${serie.seasons} seasons)</h2>
      <p>${serie.watched ? "Gezien" : "Nog niet gezien"}</p>
    </li>
  `;
  }

  return html;
};

$list.innerHTML = getStringForSeries(series);

const $items = document.querySelectorAll(".list li");
const $detail = document.getElementById("detail");

for (const $item of $items) {
  $item.addEventListener("click", function (e) {
    // get the id from e.g. data-id="2" through dataset
    const id = e.currentTarget.dataset.id; // string
    const serie = series.find((serie) => {
      return serie.id === parseInt(id); // number
    });
    $detail.innerHTML = `
      <h2>${serie.title}</h2>
      <p>Actors: ${serie.actors.join(",")}</p>
      <p>Seasons: ${serie.seasons}</p>
    `;
  });
}
