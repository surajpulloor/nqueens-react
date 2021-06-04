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

        let i = row - 1;
        let j = col - 1;

        // check collision for left diagonal
        while (i >= 0 && j >= 0) {
            if (this.board[i][j]) {
                return true;
            }

            i--;
            j--;
        }

        i = row - 1;
        j = col + 1;
        // check collsion for right diagonal
        while (i >= 0 && j < this.board.length) {
            if (this.board[i][j]) {
                return true;
            }

            i--;
            j++;
        }


        return false;

    }

    isSafe(row, col) {

    }

    solve(row) {

    }
}


export default Nqueens