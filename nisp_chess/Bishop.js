// Klasa reprezentująca gońca
class Bishop {
  constructor() {
    this.type = "BISHOP";
  }

  validateMove(move) {
    // obliczenie różnic pól
    const dx = Math.abs(move.destinationX - move.sourceX);
    const dy = Math.abs(move.destinationY - move.sourceY);

    // goniec porusza się po przekątnej
    if (dx === dy) {
      return true;
    } else {
      return false;
    }
  }
}

function setPapajAsBishop() {
  var chessSelect = document.getElementById("chess");
  var figure = document.getElementById("figure");

  if (!chessSelect || !figure || chessSelect.value !== "BISHOP") {
    return;
  }

  figure.style.display = "flex";
  figure.style.alignItems = "center";
  figure.style.justifyContent = "center";
  figure.style.width = "60px";
  figure.style.height = "60px";
  figure.style.lineHeight = "normal";

  if (!figure.querySelector("img")) {
    figure.innerHTML = '<img src="img/papaj.jpg" alt="Papaj" />';
  }
}

document.addEventListener("DOMContentLoaded", function () {
  setPapajAsBishop();
  document.getElementById("chess").addEventListener("change", setPapajAsBishop);

  new MutationObserver(setPapajAsBishop).observe(document.body, {
    childList: true,
    subtree: true,
  });
});
