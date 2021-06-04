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

        return !(this.collidingVertically(row, col) || this.collidingDiagonally(row, col));

    }

    extractSolution() {
        const solution = [];

        for (let i = 0; i < this.n; i++) {
            for (let j = 0; j < this.n; j++) {
                if (this.board[i][j]) {
                    solution.push(j);
                    break;
                }
            }
        }

        return solution;
    }

    solve(row) {

        if (row === this.n) {

            const solution = this.extractSolution();

            this.solutions.push(solution);
            return;
        }

        for (let col = 0; col < this.n; col++) {
            if (this.isSafe(row, col)) {
                this.board[row][col] = true;
                this.solve(row + 1);
                this.board[row][col] = false;
            }
        }


        return this.solutions;

    }
}


export default Nqueens