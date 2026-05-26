// Klasa reprezentująca królową
class Queen {
    constructor() {
        this.type = "QUEEN";
    }

    validateMove(move) {
        // Obliczamy dystans przesunięcia w osi X oraz Y
        const distanceX = Math.abs(move.destinationX - move.sourceX);
        const distanceY = Math.abs(move.destinationY - move.sourceY);

        // Królowa nie może stanąć w miejscu (ruch musi się odbyć)
        if (distanceX === 0 && distanceY === 0) {
            return false;
        }

        // Ruch jest poprawny, jeśli:
        // 1. Ruch jak wieża (tylko pionowo lub tylko poziomo: jeden z dystansów wynosi 0)
        // 2. Ruch jak goniec (po przekątnej: dystans X jest równy dystansowi Y)
        if (distanceX === 0 || distanceY === 0 || distanceX === distanceY) {
            return true;
        }

        return false;
    }
}