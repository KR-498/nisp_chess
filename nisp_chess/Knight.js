// Klasa reprezentująca skoczka (konika)
class Knight {
    constructor() {
        this.type = "KNIGHT";
    }

    validateMove(move) {
        // Obliczamy bezwzględną odległość w pionie i poziomie
        const diffX = Math.abs(move.destinationX - move.sourceX);
        const diffY = Math.abs(move.destinationY - move.sourceY);

        // Ruch jest poprawny, gdy różnice pól to (1 i 2) lub (2 i 1)
        if ((diffX === 1 && diffY === 2) || (diffX === 2 && diffY === 1)) {
            return true; // Poprawny ruch skoczka
        } else {
            return false; // Niepoprawny ruch dla skoczka
        }
    }
}