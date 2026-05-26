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
