// Klasa reprezentująca króla
class King {
    constructor() {
        this.type = "KING";
    }

    validateMove(move) {
        // Obliczamy dystans przesunięcia w osi X oraz Y
        const distanceX = Math.abs(move.destinationX - move.sourceX);
        const distanceY = Math.abs(move.destinationY - move.sourceY);

        // Król nie może stanąć w miejscu (ruch musi się odbyć)
        if (distanceX === 0 && distanceY === 0) {
            return false;
        }

        // Ruch jest poprawny, jeśli król przesuwa się o maksymalnie 1 pole w każdą stronę
        if (distanceX <= 1 && distanceY <= 1) {
            return true;
        }

        return false;
    }
}