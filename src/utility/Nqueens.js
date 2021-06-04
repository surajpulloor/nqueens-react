class Nqueens {
    constructor(n) {
        this.n = n;
        this.solutions = [];
        this.board = new Array(n);
        this.constructBoard();
    }


    constructBoard() {
        for (let e of this.board) {
            e.push(new Array(this.n));
        }
    }

    collidingVertically(row, col) {

    }

    collidingDiagonally(row, col) {

    }

    isSafe(row, col) {

    }

    solve(row) {

    }
}


export default Nqueens;