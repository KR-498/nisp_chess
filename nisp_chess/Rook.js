// Klasa reprezentująca wieżę
class Rook {
    constructor() {
        this.type = "ROOK";
    }

    validateMove(move) {

        // ruch pionowy
        if (move.sourceX === move.destinationX) {
            return true;
        }

        // ruch poziomy
        if (move.sourceY === move.destinationY) {
            return true;
        }

        // niepoprawny ruch
        return false;
    }
}