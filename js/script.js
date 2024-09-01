const mainContainer = document.body.appendChild(document.createElement("div"));
mainContainer.className = "mainContainer mainContanerTalwindCss";
const buttonCOntainer = document.body.appendChild(
  document.createElement("div")
);
buttonCOntainer.className = "btnCont";
const resetBtn = buttonCOntainer.appendChild(document.createElement("button"));
resetBtn.innerText = "RESET";
resetBtn.className = "btn";
resetBtn.onclick = function () {
  window.location.reload();
};
// resetBtn.onclick(window.location.reset());
const tilesContainer = document.querySelector(".tiles");
const colors = [
  "aqua",
  "aquamarine",
  "crimson",
  "blue",
  "dodgerblue",
  "gold",
  "greenyellow",
  "teal",
];
const colorsPicklist = [...colors, ...colors];
const tileCount = colorsPicklist.length;

// Game state
let revealedCount = 0;
let activeTile = null;
let awaitingEndOfMove = false;

function buildTile(color) {
  const element = document.createElement("div");

  element.className = "boxContainer Box";
  element.setAttribute("data-color", color);
  element.setAttribute("data-revealed", "false");

  element.addEventListener("click", () => {
    const revealed = element.getAttribute("data-revealed");

    if (awaitingEndOfMove || revealed === "true" || element == activeTile) {
      return;
    }

    // Reveal this color
    element.style.backgroundColor = color;

    if (!activeTile) {
      activeTile = element;

      return;
    }

    const colorToMatch = activeTile.getAttribute("data-color");

    if (colorToMatch === color) {
      element.setAttribute("data-revealed", "true");
      activeTile.setAttribute("data-revealed", "true");

      activeTile = null;
      awaitingEndOfMove = false;
      revealedCount += 2;

      if (revealedCount === tileCount) {
        alert("game is over Reset to Play Again ");
      }

      return;
    }

    awaitingEndOfMove = true;

    setTimeout(() => {
      activeTile.style.backgroundColor = null;
      element.style.backgroundColor = null;

      awaitingEndOfMove = false;
      activeTile = null;
    }, 1000);
  });

  return element;
}

// Build up tiles
for (let i = 0; i < tileCount; i++) {
  const randomIndex = Math.floor(Math.random() * colorsPicklist.length);
  const color = colorsPicklist[randomIndex];
  const tile = buildTile(color);

  colorsPicklist.splice(randomIndex, 1);
  mainContainer.appendChild(tile);
}
