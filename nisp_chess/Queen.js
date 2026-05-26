class Queen {
    constructor() {
        this.type = "QUEEN";
    }

    validateMove(move) {
        const dX = Math.abs(move.to.x - move.from.x);
        const dY = Math.abs(move.to.y - move.from.y);

        // Ruch w miejscu jest nieprawidłowy
        if (dX === 0 && dY === 0) {
            return false;
        }

        // Ruch jak wieża (tylko w pionie lub tylko w poziomie)
        const isRookMove = dX === 0 || dY === 0;

        // Ruch jak goniec (po skosie - przesunięcie X i Y jest równe)
        const isBishopMove = dX === dY;

        // Królowa łączy oba te ruchy
        return isRookMove || isBishopMove;
    }
}