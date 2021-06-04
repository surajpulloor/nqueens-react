class Nqueens {
    constructor(n) {
        this.n = n;
        this.solutions = [];
        this.board = new Array(n);
        this.constructBoard();
    }


    constructBoard() {
        for (let i = 0; i < this.board.length; i++) {
            this.board[i] = new Array(this.n).fill(false);
        }
    }

    collidingVertically(row, col) {

        while (--row >= 0) {
            if (this.board[row][col]) {
                return true;
            }
        }

        return false;

    }

    collidingDiagonally(row, col) {

    }

    isSafe(row, col) {

    }

    solve(row) {

    }
}


export default Nqueens