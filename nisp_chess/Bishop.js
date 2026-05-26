// Klasa reprezentująca gońca
class Bishop {
  constructor() {
    this.type = "BISHOP";
  }

  validateMove(move) {
    const dx = Math.abs(move.destinationX - move.sourceX);
    const dy = Math.abs(move.destinationY - move.sourceY);
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

// Harmonijna, dwugłosowa Barka w klasycznej tonacji F-dur
function playBarka() {
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  if (!AudioContext) return;
  const ctx = new AudioContext();

  // Definicje częstotliwości nut (Hz)
  const F3 = 174.61, G3 = 196.00, A3 = 220.00, Bb3 = 233.08, C4 = 261.63, D4 = 293.66, E4 = 329.63, F4 = 349.23, G4 = 392.00, A4 = 440.00, Bb4 = 466.16;
  const C5 = 523.25, D5 = 587.33, E5 = 659.25, F5 = 698.46, G5 = 783.99, A5 = 880.00;

  // Czas trwania nut w metrum 3/4 (BPM ok. 85)
  const t = 0.53; 
  const c = t;        // ćwierćnuta
  const p = t * 2;    // półnuta
  const pd = t * 3;   // półnuta z kropką (cały takt)

  // Każdy element to: m (melodia główna), h (harmonia), d (czas trwania)
  const chorus = [
    // O Panie...
    { m: C5, h: A4, d: c }, { m: F5, h: C5, d: c }, { m: A5, h: F5, d: pd },
    { m: 0,  h: 0,  d: c }, // <--- TAJNA, WYRAŹNA PAUZA NA ODDECH PO "O PANIE"

    // ...to Ty na mnie spojrzałeś
    { m: A5, h: F5, d: c }, { m: 932.33, h: G5, d: c }, { m: 1046.50, h: A5, d: c },
    { m: 932.33, h: G5, d: p }, { m: A5, h: F5, d: c },
    { m: G5, h: E5, d: pd },
    { m: 0,  h: 0,  d: c }, // Pauza po "spojrzałeś"

    // Twoje usta dziś wyrzekły me imię
    { m: G5, h: E5, d: c }, { m: F5, h: D5, d: c }, { m: E5, h: C5, d: c },
    { m: F5, h: D5, d: p }, { m: F5, h: D5, d: c },
    { m: F5, h: D5, d: c }, { m: G5, h: E5, d: c }, { m: A5, h: F5, d: c },
    { m: G5, h: E5, d: p }, { m: F5, h: D5, d: c },
    { m: E5, h: C5, d: pd },
    { m: 0,  h: 0,  d: c }, // Pauza po "imię"

    // Swoją barkę...
    { m: C5, h: G4, d: c }, { m: C5, h: G4, d: c }, { m: F5, h: A4, d: c },
    { m: A5, h: F5, d: pd },
    { m: 0,  h: 0,  d: c }, // Pauza po "Swoją barkę"

    // ...pozostawiam na brzegu
    { m: A5, h: F5, d: c }, { m: 932.33, h: G5, d: c }, { m: 1046.50, h: A5, d: c },
    { m: 932.33, h: G5, d: p }, { m: A5, h: F5, d: c },
    { m: G5, h: E5, d: pd },
    { m: 0,  h: 0,  d: c }, // Pauza po "brzegu"

    // Razem z Tobą nowy zacznę dziś...
    { m: G5, h: E5, d: c }, { m: F5, h: D5, d: c }, { m: E5, h: C5, d: c },
    { m: F5, h: D5, d: p }, { m: F5, h: D5, d: c },
    { m: D5, h: Bb4, d: c }, { m: E5, h: C5, d: c }, { m: F5, h: D5, d: c },
    { m: E5, h: C5, d: p }, { m: D5, h: Bb4, d: c },
    
    // ...ŁÓW!
    { m: F4, h: F3, d: pd + c } 
  ];

  let currentTime = ctx.currentTime;

  chorus.forEach(note => {
    if (note.m > 0 || note.h > 0) {
      const playTone = (freq) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'sine'; 
        osc.frequency.setValueAtTime(freq, currentTime);

        gain.gain.setValueAtTime(0, currentTime);
        gain.gain.linearRampToValueAtTime(0.15, currentTime + 0.04); 
        gain.gain.setValueAtTime(0.15, currentTime + note.d - 0.04);
        gain.gain.exponentialRampToValueAtTime(0.001, currentTime + note.d); 

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(currentTime);
        osc.stop(currentTime + note.d);
      };

      playTone(note.m);
      playTone(note.h);
    }

    currentTime += note.d;
  });
}

document.addEventListener("DOMContentLoaded", function () {
  setPapajAsBishop();
  document.getElementById("chess").addEventListener("change", setPapajAsBishop);

  new MutationObserver(setPapajAsBishop).observe(document.body, {
    childList: true,
    subtree: true,
  });

  // NASŁUCHIWANIE KLAWIATURY
  document.addEventListener("keydown", function (event) {
    if (event.key === "p" || event.key === "P") {
      const answer = prompt("Podaj tajne hasło:");
      if (answer === "2137") {
        playBarka();
      }
    }
  });
});