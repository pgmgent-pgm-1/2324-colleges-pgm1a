(() => {
  // get elements from dom
  const $list = document.getElementById("list");
  const $detail = document.getElementById("detail");

  // functions
  const generateHTMLForSeries = (series) => {
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

  const generateHTMLForDetail = (serie) => {
    return `
      <h2>${serie.title}</h2>
      <p>Actors: ${serie.actors.join(",")}</p>
      <p>Seasons: ${serie.seasons}</p>
    `;
  };

  // add event listeners
  const registerListeners = () => {
    console.log("3. Add interaction!");
    const $items = document.querySelectorAll(".list li");

    for (const $item of $items) {
      $item.addEventListener("click", function (e) {
        // get the id from e.g. data-id="2" through dataset
        const id = e.currentTarget.dataset.id; // string
        const serie = series.find((serie) => {
          return serie.id === parseInt(id); // number
        });
        $detail.innerHTML = generateHTMLForDetail(serie);
      });
    }
  };

  const buildUI = () => {
    console.log("2. Build user interface!");
    $list.innerHTML = generateHTMLForSeries(series);
  };

  // start of application
  const initialize = () => {
    console.log("1. Application started!");
    buildUI();
    registerListeners();
  };

  initialize();
})();
